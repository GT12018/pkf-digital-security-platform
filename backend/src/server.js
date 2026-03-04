import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const PORT = 3001;

/**
 * Estructuras en memoria (solo para evidencia técnica)
 */
let users = [];
let documents = [];
let logs = [];

/**
 * Endpoint raíz
 */
app.get("/", (req, res) => {
  res.json({
    status: "PKF Digital Security Platform running",
    version: "1.0.0"
  });
});

/**
 * Crear usuario
 */
app.post("/users", (req, res) => {
  const { name, role } = req.body;

  const newUser = {
    id: uuidv4(),
    name,
    role,
    createdAt: new Date()
  };

  users.push(newUser);

  logs.push({
    id: uuidv4(),
    action: "CREATE_USER",
    user: name,
    timestamp: new Date()
  });

  res.status(201).json(newUser);
});

/**
 * Registrar documento
 */
app.post("/documents", (req, res) => {
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
});

/**
 * Consultar bitácora
 */
app.get("/logs", (req, res) => {
  res.json(logs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
