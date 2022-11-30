import MultiTextBoxes from "./MultiTextBoxes";
import TipTitle from "../../elements/TipTitle";
import Tags from "./Tags";
import { useState } from "react";
import SvgButton from "../../elements/SvgButton";

const Tip = ({ tip, setTagState, editTip, showAddTipForm }) => {
  const [expanded, setExpanded] = useState(() => false);
  function toggleExpanded(){
    setExpanded(!expanded);
  }
  const title = tip.titleSuffix === undefined? tip.title: tip.title + tip.titleSuffix;
  return ( 

        <div className="tip">
        <TipTitle title={title} onClick={toggleExpanded} expanded={expanded}/>
        {expanded && <>
        {showAddTipForm === false && <SvgButton
        wide="false"
        type="write"
        key={tip.id}
        id={tip.id}
        color="whitesmoke"
        backgroundColor="transparent"
        text="Edit tip"
        clickFunction={editTip}
      />}
        <MultiTextBoxes tip={tip} /> 
        </>}
        <Tags tagArray={tip.tags} setTagState={setTagState} />
        {tip.updated &&  <p>{tip.updated}</p>}
      </div>
  
  );
};

export default Tip;
