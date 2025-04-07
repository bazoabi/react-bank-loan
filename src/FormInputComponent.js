export default function FormInputComponent({
  inputTitle,
  inputName,
  value,
  handleChange,
}) {
  return (
    <>
      <label>{inputTitle}:</label>
      <input
        name={inputName}
        type="text"
        value={value}
        onChange={handleChange}
      ></input>
    </>
  );
}
