import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import FormInputComponent from "./FormInputComponent";
import { loanInputsContext } from "./contexts/LoanFormInputContext";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Fetch the name of user from UserContext to fill as an initial value inside the form
  const userContext = useContext(UserContext);
  const [loanInputs, setLoanInputs] = useState({
    name: userContext.name,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const handleLoanInputsChange = (event) => {
    setLoanInputs({ ...loanInputs, [event.target.name]: event.target.value });
  };

  const handleLoanCheckboxChange = (event) => {
    setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
  };

  //   const handleSubmitBtnIsDisabled = () => {
  //     return (
  //       loanInputs.name === "" ||
  //       loanInputs.phoneNumber === "" ||
  //       loanInputs.age === ""
  //     );
  //   };

  const isSubmitBtnDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  const handleSubmitBtnClicked = (event) => {
    event.preventDefault();
    setErrorMessage("");
    const phoneNumLength = loanInputs.phoneNumber.length;
    if (!(phoneNumLength >= 10 && phoneNumLength <= 12)) {
      setErrorMessage("Phone Format Is Not Valid");
    } else if (loanInputs.age < 18 || loanInputs.age > 100) {
      setErrorMessage("Age Is Not Valid");
    }
    setShowModal(true);
  };

  const hideModal = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  return (
    <div id="LoanFormContainer" className="flex" onClick={hideModal}>
      <h1 style={{ color: "white" }}>Hello {userContext.name}</h1>
      <form id="LoanForm" className="flex">
        <h1>Requesting A Loan</h1>
        <hr></hr>

        {/* <label>Name:</label>
        <input
          name="name"
          type="text"
          value={loanInputs.name}
          onChange={handleLoanInputsChange}
        ></input> */}

        <loanInputsContext.Provider
          value={{
            labelTitle: "Name",
            inputName: "name",
            value: loanInputs.name,
            handleChange: handleLoanInputsChange,
          }}
        >
          <FormInputComponent />
        </loanInputsContext.Provider>

        {/* <label>Phone Number:</label>
        <input
          name="phoneNumber"
          type="text"
          value={loanInputs.phoneNumber}
          onChange={handleLoanInputsChange}
        ></input> */}

        <loanInputsContext.Provider
          value={{
            labelTitle: "Phone Number",
            inputName: "phoneNumber",
            value: loanInputs.phoneNumber,
            handleChange: handleLoanInputsChange,
          }}
        >
          <FormInputComponent />
        </loanInputsContext.Provider>

        {/* <label>Age:</label>
        <input
          name="age"
          type="text"
          value={loanInputs.age}
          onChange={handleLoanInputsChange}
        ></input> */}

        <loanInputsContext.Provider
          value={{
            labelTitle: "Age",
            inputName: "age",
            value: loanInputs.age,
            handleChange: handleLoanInputsChange,
          }}
        >
          <FormInputComponent />
        </loanInputsContext.Provider>

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          style={{ marginBottom: "10px" }}
          checked={loanInputs.isEmployee}
          onChange={handleLoanCheckboxChange}
        ></input>

        <label>Salary</label>
        <select
          name="salary"
          value={loanInputs.salary}
          onChange={handleLoanInputsChange}
        >
          <option>Less than 500$</option>
          <option>Between 500$ amd 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button
          className={isSubmitBtnDisabled ? "disabled" : ""}
          id="submitBtn"
          disabled={isSubmitBtnDisabled}
          onClick={handleSubmitBtnClicked}
        >
          Submit
        </button>
      </form>

      <Modal isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}
