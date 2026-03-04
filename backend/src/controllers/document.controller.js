import { v4 as uuidv4 } from "uuid";
import { logs } from "./user.controller.js";

export const documents = [];

export function createDocument(req, res) {
  const { title, createdBy } = req.body;

  const newDocument = {
    id: uuidv4(),
    title,
    version: 1,
    createdBy,
    createdAt: new Date()
  };

  documents.push(newDocument);

  logs.push({
    id: uuidv4(),
    action: "CREATE_DOCUMENT",
    document: title,
    user: createdBy,
    timestamp: new Date()
  });

  res.status(201).json(newDocument);
}

export function listDocuments(req, res) {
  res.json(documents);
}
