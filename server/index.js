import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 4000;

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");

const app = express();
app.use("/dist", express.static("dist"));
app.use((req, res) => {
  const reactMarkup = (
    <ServerLocatoin url={req.url}>
      <App />
    </ServerLocatoin>
  );

  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
