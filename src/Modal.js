import "./FormStyles.css";

export default function Modal({ isVisible }) {
  return isVisible ? (
    <div id="modal">
      <div id="modal-content">
        <h1>The Form Has Been Submitted Successfully</h1>
      </div>
    </div>
  ) : (
    <></>
  );
}
