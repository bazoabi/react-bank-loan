import { createContext } from "react";

export let loanInputsContext = createContext({
  labelTitle: "",
  inputName: "",
  value: null,
  handleChange: null,
});
