import SvgButton from "../../elements/SvgButton"
import { useState } from "react";

const colourLookup = {
    false: {colour: "whitesmoke", background: "transparent"},
    true: {colour: "whitesmoke", background: "transparent"},
}
const colourLookupHover = {
    true: {colour: "black", background: "pink"},
    false: {colour: "black", background: "aquamarine"},
}


export default function WriteTipBtn({
    showAddTipForm,
    setShowAddTipForm,
    addObjectToInputFormState,
    setSearchQuery,
    clearTags,
}) {
    
    const [buttonState, setButtonState] = useState(() => {
        return {
            colour: showAddTipForm ? "black" : "whitesmoke",
            background: showAddTipForm ? "pink" : "transparent"
        }
    });
    function setButtonStateFromObject(object){
        setButtonState(() => {
            return {
                colour: object.colour,
                background: object.background
            }
        })
    }
    
    function onClickAdd() {
        if (showAddTipForm === true) {onClose();
        return;
        }
        clearTags();
        setSearchQuery(()=> "  ");
        setShowAddTipForm(true);
        setButtonStateFromObject(colourLookupHover[true]);
    }
    function onClose() {
        addObjectToInputFormState(null);
        setSearchQuery(() => "")
        setShowAddTipForm(false);
        setButtonStateFromObject(colourLookupHover[false]);       
    }
    const AddTipText = showAddTipForm
    ? "Cancel"
    : "Create";
    const type = showAddTipForm
    ? "cancelWrite"
    : "add";
    return (
        <div  style={{width:"fit-content", gridColumn:"4"}}>
            

            <SvgButton
            wide="false"
            type={type}
        color={buttonState.colour}
        backgroundColor={buttonState.background}
        text={AddTipText}
        clickFunction={onClickAdd}
        reverse={true}
      />
        </div>
)
}
