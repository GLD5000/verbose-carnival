import SvgButton from "../elements/SvgButton"

import { useState } from "react";

function removeParagraphs(string){
  const regex = /(PpPpEEE)|(PpPpSSS)/g;
  return string.replaceAll(regex, ``);
}


export default function CodeBox ({content, parse = false}) {
  // console.log(content);
  const code = parse? removeParagraphs(content): content;
  const [showTextState, setShowTextState] = useState(() => false);
const firsLineBreak = code.search(/\r?\n/);
const isLineBreak = firsLineBreak > -1;
const codeFileName = isLineBreak? code.slice(0,firsLineBreak): null;
  const codeBody = isLineBreak? code.slice(firsLineBreak + 1): code;
  return (
    <code className="code">
      {`${codeBody}`}
      <label>

        <SvgButton
              type="duplicate"
              key={1 + "copyCode"}
              text="Copied!"
              clickFunction={()=> {if (codeBody.includes("Pp")) alert(codeBody);navigator.clipboard.writeText(codeBody); setShowTextState(true); setTimeout(() => setShowTextState(false), 2200)}}
              wide = {true}
              showText = {showTextState}
              borderColor = "transparent"
              reverse = {false}
              classes = "copy-btn"
              marginLeft = "0"
              />
              <h3 className="file-name">{codeFileName}</h3>
      </label>

      </code>
  )
}

