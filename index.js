import express from "express";
// import http from "http";
import cors from "cors";
import mongoose from "mongoose";
// const Note = requiodels/note");
// const Note = require("./models/note");
import dotenv from "dotenv";
import Note from "./models/note.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("build"));

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

app.get("/api/notes/:id", (request, response) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error.message);
      response.status(500).end();
    });
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((n) => n.id !== id);
  res.status(204).end();
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

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
