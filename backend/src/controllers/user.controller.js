import { v4 as uuidv4 } from "uuid";

export const users = [];
export const logs = [];

export function createUser(req, res) {
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
}
