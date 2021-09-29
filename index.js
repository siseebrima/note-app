import express from "express";
// import http from "http";
import cors from "cors";
import mongoose from "mongoose";
// const Note = requiodels/note");
// const Note = require("./models/note");
import dotenv from "dotenv";
import Note from "./models/note.js";

dotenv.config();

const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({
      error: "malformated id",
    });
  }
  next(error);
};

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("build"));
app.use(errorHandler);

// Note.find({}).then((result) => {
//   console.log(result);
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello Ebrima</h1>");
});

app.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});

app.get("/api/notes/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/notes/:id", (req, res, next) => {
  Note.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/notes/:id", (req, res, next) => {
  const body = req.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(req.params.id, note, { new: true })
    .then((updatedNote) => {
      res.json(updatedNote);
    })
    .catch((error) => next(error));
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  note.save().then((savedNote) => {
    response.json(savedNote);
  });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Ebrima, the server is listening on port ${PORT}`);
});
