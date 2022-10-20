import { useCallback } from "react";
function defaultOnInput(value) {
  console.log(`No function assigned!
Value is: ${value}`);
}

const InputText = ({
  placeholder = "Type here...",
  onInput = defaultOnInput,
  type = "text",
}) => {
  const delay = 250;
  const debounce = (handler, delay = 250) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => handler(...args), delay);
    };
  };
  const handler = (value) => {
    //console.log(`Input Value = ${value}`);
    onInput(value);
  };
  // eslint-disable-next-line
  const debouncedHandler = useCallback(debounce(handler, delay), [
    handler,
    delay,
  ]);

  return (
    <input
      type={type}
      onFocus={(e) => e.target.select()}
      onChange={(e) => debouncedHandler(e.target.value)}
      placeholder={placeholder}
    ></input>
  );
};

export default InputText;