import { createContext } from "react";

export const loanInputsContext = createContext({
  labelTitle: "",
  inputName: "",
  value: null,
  handleChange: null,
});
