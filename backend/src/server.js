import express from "express";

import { createUser } from "./controllers/user.controller.js";
import { createDocument, listDocuments } from "./controllers/document.controller.js";
import { listLogs } from "./controllers/logs.controller.js";

const app = express();
app.use(express.json());

const PORT = 3001;

/**
 * Salud del servicio
 */
app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "PKF Digital Security Platform",
    version: "1.0.0"
  });
});

/**
 * Endpoint raíz (info básica)
 */
app.get("/", (req, res) => {
  res.json({
    status: "PKF Digital Security Platform running",
    version: "1.0.0"
  });
});

/**
 * Usuarios
 */
app.post("/users", createUser);

/**
 * Documentos
 */
app.post("/documents", createDocument);
app.get("/documents", listDocuments);

/**
 * Bitácora (auditoría)
 */
app.get("/logs", listLogs);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
