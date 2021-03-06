import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";
import { connect } from "react-redux";
import { getBreeds, changeAnimal, changeBreed, changeLocation } from "./AC";

interface IProps {
  handleLocationChange(): void;
  handleAnimalChange(): void;
  handleBreedChange(): void;
  search(): string;
  location: string;
  animal: string;
  breed: string;
  breeds: string[];
}

class Search extends React.Component<IProps> {
  handleFormSubmit = (event: any) => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Location
            <input
              id="location"
              onChange={this.props.handleLocationChange}
              value={this.props.location}
              placeholder="Location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!this.props.breeds.length}
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
            >
              <option />
              {this.props.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ breed, breeds, animal, location }) => ({
    breed,
    breeds,
    animal,
    location
  }),
  dispatch => ({
    handleAnimalChange(event: React.ChangeEvent<HTMLInputElement>) {
      dispatch(changeAnimal(event.target.value));
      dispatch(getBreeds());
    },
    handleBreedChange(event: React.ChangeEvent<HTMLInputElement>) {
      dispatch(changeBreed(event.target.value));
    },
    handleLocationChange(event: React.ChangeEvent<HTMLInputElement>) {
      dispatch(changeLocation(event.target.value));
    }
  })
)(Search);
