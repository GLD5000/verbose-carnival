import Button from "../../elements/Button";
import AddForm from "./AddForm";
import { useState } from "react";

const AddTip = ({setTip, newTipId}) => {
  const [showNewTip, setShowNewTip] = useState(() => false);
  function onClickAdd() {
    setShowNewTip(state => !state);
  }
  

  return (
    <div>
      {showNewTip ? (
      <>
      <Button
  color="black"
  backgroundColor="white"
  text="Add A New Tip To The Collection!"
  clickFunction={onClickAdd}
    /> 
    <AddForm setTip={setTip} newTipId={newTipId}/>       
      </>

    ) : (

      <Button
    color="black"
    backgroundColor="white"
    text="Add A New Tip To The Collection!"
    clickFunction={onClickAdd}
      />  
    )}
  </div>
);
};

export default AddTip;
