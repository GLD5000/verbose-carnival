import Button from "../../../elements/Button";
import InputForm from "./InputForm";
import { useState } from "react";

const AddTip = ({
  setTip,
  newTipId,
  tagListAll,
  addTipToDb,
  signedIn,
  isOwner,
  inputFormState,
  addObjectToInputFormState,
}) => {
  const [showAddTipForm, setShowAddTipForm] = useState(() => false);
  function onClickAdd() {
    if (showAddTipForm === true) onClose();
    setShowAddTipForm((state) => !state);
  }

  const inputFormHasState = inputFormState !== null;
  const currentId = inputFormHasState? inputFormState.id: newTipId;
  console.log("Current ID:" + currentId);
  if (inputFormHasState) console.log(inputFormState);
  const [inputState, setInputState] = useState(() => {
    return { 0: { type: "text", content: null } };
  });
  const [tagsState, setTagsState] = useState(() => inputFormState?.tags || []);
  const [mainTitle, setMainTitle] = useState(() => inputFormState?.title || "No Title Yet");

  function callbackMainTitle(value, index) {
    setMainTitle(value);
  }

  function addNewObjectToTips(newObject){
    setTip((object) => {
      const copyObject = {...object};
      copyObject[newObject.id]= newObject;
      return copyObject;
    });
  }
  function makeNewTipObject() {
    const dateRaw = new Date();
    const formattedDate = `${dateRaw.getDate()}/${
      dateRaw.getMonth() + 1
    }/${dateRaw.getFullYear()}`;
    const newObject = {
      id: currentId, //string
      date: formattedDate, // string
      tags: [...new Set(tagsState)], // array of strings
      title: mainTitle, // string
      sections: Object.values(inputState),
    };
    return newObject;
  }

  console.log("Form has state = " + inputFormHasState);

  function onSubmit() {
    const newObject = makeNewTipObject();
    if (isOwner) addTipToDb(newObject);
    addNewObjectToTips(newObject);
    clearInputFormState();
    }
  function clearInputFormState(){
    addObjectToInputFormState(null);
    setShowAddTipForm(false);
  }
  function onPreview(){
    const newObject = makeNewTipObject();
    addObjectToInputFormState(newObject);
    addNewObjectToTips(newObject);
  }
  function onClose(){
    addObjectToInputFormState(null);
    //const newObject = makeNewTipObject();
    //addObjectToInputFormState(newObject);
  }
  const AddTipText = showAddTipForm? "Close and Clear form": "Add A New Tip To The Collection!";
  const AddTipColour = showAddTipForm? "pink": "aquamarine";

  return (
    <div className="add-tip-container">
        <>
          <Button
            color="black"
            backgroundColor={AddTipColour}
            text={AddTipText}
            clickFunction={onClickAdd}
          />
{ showAddTipForm &&         <InputForm
            setShowAddTipForm={onClickAdd}
            setTip={setTip}
            newTipId={newTipId}
            tagListAll={tagListAll}
            addTipToDb={addTipToDb}
            signedIn={signedIn}
            isOwner={isOwner}
            addObjectToInputFormState={addObjectToInputFormState}
            inputFormState={inputFormState}
            setTagsState={setTagsState}
            setInputState={setInputState}
            callbackMainTitle={callbackMainTitle}
            onSubmit={onSubmit}
            onPreview={onPreview}
            currentId={currentId}
            inputState={inputState}
          />
}        </>
    </div>
  );

  
};

export default AddTip;
