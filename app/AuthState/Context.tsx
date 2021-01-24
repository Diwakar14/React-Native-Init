import { createContext } from "react";
import { AuthStore } from "./Store";

export const AuthContext = createContext(AuthStore);