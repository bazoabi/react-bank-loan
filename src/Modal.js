import "./FormStyles.css";

export default function Modal({ isVisible = false, errorMessage = "" }) {
  return isVisible ? (
    <div id="modal">
      <div id="modal-content">
        <h1 style={{ color: errorMessage === "" ? "green" : "red" }}>
          {errorMessage === ""
            ? "The Form Has Been Submitted Successfully"
            : errorMessage}
        </h1>
      </div>
    </div>
  ) : (
    <></>
  );
}
