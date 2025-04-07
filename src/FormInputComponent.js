import { useContext } from "react";
import { loanInputsContext } from "./contexts/LoanFormInputContext";

export default function FormInputComponent() {
  const inputsContext = useContext(loanInputsContext);
  return (
    <>
      <label>{inputsContext.labelTitle}:</label>
      <input
        name={inputsContext.inputName}
        type="text"
        value={inputsContext.value}
        onChange={inputsContext.handleChange}
      ></input>
    </>
  );
}
