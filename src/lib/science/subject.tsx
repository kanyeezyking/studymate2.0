import { createContext, useContext } from "react";
import type { SubjectId } from "./types";

const SubjectContext = createContext<SubjectId>("science");

export const SubjectProvider = SubjectContext.Provider;

export function useSubject() {
  return useContext(SubjectContext);
}
