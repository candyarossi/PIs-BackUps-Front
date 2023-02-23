export default function InputText({
  type,
  className,
  setValorSelect,
  valorSelect,
}) {
  const handlerInput = (event) => {
    const { value } = event.target;
    setValorSelect({ ...valorSelect, input: value });
  };

  return (
    <input
      type={type}
      className={
        valorSelect.input !== "" ? className : className + " inputDisabled"
      }
      value={valorSelect.input.replaceAll("&#64;", "@")}
      disabled={valorSelect.input !== "" ? false : true}
      onChange={handlerInput}
    />
  );
}
