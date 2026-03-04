import { logs } from "./user.controller.js";

export function listLogs(req, res) {
  res.json(logs);
}
