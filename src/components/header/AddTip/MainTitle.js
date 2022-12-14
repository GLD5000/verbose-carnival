function defaultOnInput(value, index) {
  console.log(`No function assigned!
  Value is: ${value}
  index/name is: ${index}`);
}

const MainTitle = ({
  placeholder = "Type here...",
  onInput = defaultOnInput,
  type = "text",
  name = undefined,
  defaultValue = "",
}) => {


  const handler = (e) => {
    const value = e.target.value;
    const index = e.target.name;
    onInput(value, index);
  };


  return (
    <input
      // autoFocus
      className="titleInput"
      type="text"
      placeholder=" Add a title or topic for your tip..."
      onChange={(e) => handler(e)}
      name={name}
      autoComplete="off"
      defaultValue={defaultValue}
    ></input>
  );
};

export default MainTitle;
