// src/socket.ts
import { io } from "socket.io-client";
const BASE_URL = "/api/v1/";
const socket = io(BASE_URL, {
  withCredentials: true,
});

export default socket;
