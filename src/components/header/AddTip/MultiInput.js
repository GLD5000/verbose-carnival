import InputField from "./InputField";
import Button from "../../../elements/Button";
import InputButtons from "./InputButtons";

const MultiInput = ({
  authClickHandler,
  onSubmit,
  onPreview,
  inputFormState,
  signedIn,
  isOwner,
  setInputFormState,
}) => {
  function addField() {
    setInputFormState((object) => {
      const newObject = { ...object };
      newObject.sections = [
        ...newObject.sections.map((x) => {
          return { ...x };
        }),
        { type: "text", content: null },
      ];
      return newObject;
    });
  }
  function deleteField() {
    setInputFormState((object) => {
      const newObject = { ...object };
      const sectionsArray = [
        ...newObject.sections.map((x) => {
          return { ...x };
        }),
      ];
      sectionsArray.pop();
      newObject.sections = [...sectionsArray];
      return newObject;
    });
  }

  function changeValue(inputObject, index) {
    setInputFormState((object) => {
      const newObject = { ...object };
      const targetSection = newObject.sections[index];
      const type = inputObject.type || targetSection["type"];
      const content = inputObject.content || targetSection["content"];
      newObject.sections[index] = {
        type: type,
        content: content,
      };
      const title = inputObject.title || targetSection["title"];
      if (title !== undefined) newObject.sections[index].title = title;
      return newObject;
    });
  }

  function makeInputArray() {
    return inputFormState.sections.map((object, index) => {
      const returnObject = (
        <div key={index} className="field-container">
          <h2>Section {index + 1}</h2>
          <InputButtons
            key={index + "InputButtons"}
            type={object.type}
            index={index}
            changeValue={changeValue}
            title={object.title}
            deleteField={deleteField}
          />
          <InputField
            key={index + "InputField"}
            id={index + "InputField"}
            name={index}
            type={object.type}
            defaultValue={object.content}
            changeText={changeValue}
          />
        </div>
      );

      return returnObject;
    });
  }
  function signedInNonOwner(){
    alert("You are not allowed to submit to the database- sorry!");
  };
  const inputArray = makeInputArray();
  const submitText = isOwner
    ? "Submit to database"
    : signedIn? "You are not allowed to submit to the database": "Sign in to submit to the database";
  const submitBackColour = isOwner ? "green" : "silver";
  const submitTextColour = isOwner ? "white" : "black";
  const submitFunction = isOwner ? onSubmit: signedIn? signedInNonOwner: authClickHandler;
  const deleteSectionText = "Delete Section " + inputArray.length;
  return (
    <>
      <h2>Add sections</h2>
      {inputArray}
      <Button
        key="addField"
        color="black"
        backgroundColor="white"
        text="Add Another Section"
        clickFunction={addField}
        id="add-field"
      />
      {inputArray.length > 1 && <Button
        backgroundColor="red"
        text={deleteSectionText}
        id="delete-field"
        clickFunction={deleteField}
      />}
      <Button
        key="preview"
        color="white"
        backgroundColor="blue"
        text="Preview Tip"
        clickFunction={onPreview}
      />
      <Button
        key="saveTip"
        color={submitTextColour}
        backgroundColor={submitBackColour}
        text={submitText}
        clickFunction={submitFunction}
      />
    </>
  );
};

export default MultiInput;
