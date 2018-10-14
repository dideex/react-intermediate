import React, { Component } from "react";
import pf, { PetResponse, PetMedia } from "petfinder-client";
import { route } from "preact-router";
import ModalContent from "./AdoptModalContent";
// import Loadable from "react-loadable";
import Carousel from "./Carousel";
import Modal from "./Modal";
import { RouteComponentProps, navigate } from "reach__router";

if (!process.env.API_KEY || !process.env.API_SECRET)
  throw new Error("no API keys");

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// const LoadableContent = Loadable({
//   loader: () => import("./AdoptModalContent"),
//   loading: () => <h1>Loading ...</h1>
// });

class Details extends Component<RouteComponentProps<{ id: string }>> {
  public state = {
    loading: true,
    showModal: false,
    media: {} as PetMedia,
    animal: "",
    breed: "",
    location: "",
    description: "",
    name: ""
  };
  public componentDidMount() {
    if (this.props.id)
      petfinder.pet
        .get({
          output: "full",
          id: this.props.id
        })
        .then((data: PetResponse) => {
          if (!data.petfinder.pet) {
            navigate("/");
            return;
          }
          let breed;
          if (Array.isArray(data.petfinder.pet.breeds.breed)) {
            breed = data.petfinder.pet.breeds.breed.join(", ");
          } else {
            breed = data.petfinder.pet.breeds.breed;
          }
          this.setState({
            name: data.petfinder.pet.name,
            animal: data.petfinder.pet.animal,
            location: `${data.petfinder.pet.contact.city}, ${
              data.petfinder.pet.contact.state
            }`,
            description: data.petfinder.pet.description,
            media: data.petfinder.pet.media,
            breed,
            loading: false
          });
        })
        .catch(() => {
          route("/");
        });
  }
  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });
  public render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const {
      media,
      animal,
      breed,
      location,
      description,
      name,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <ModalContent name={name} toggleModal={this.toggleModal} />
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;
