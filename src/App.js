// import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{ userName: "@BaderZo", name: "Bader", email: "bader@bader.com" }}
    >
      <div className="App">
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
