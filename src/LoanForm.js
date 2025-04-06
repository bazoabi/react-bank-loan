export default function LoanForm() {
  return (
    <div className="LoanFormContainer">
      <form className="LoanForm">
        <h1>Requesting A Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input type="text"></input>

        <label>Phone Number:</label>
        <input type="text"></input>

        <label>Age:</label>
        <input type="text"></input>
      </form>
    </div>
  );
}
