import Tr from "./Tr";

function removeParagraphs(string){
  const regex = /(PpPpEEE)|(PpPpSSS)/g;
  return string.replaceAll(regex, ``);
}


function parseDataToArray(text){
  if (Array.isArray(text) ) return text;
  const rows = text.split(/\r?\n\s*/);
  let returnArray = [];
  rows.forEach((row, index) => {
    returnArray[index] =  splitRow(row);
  });

  return returnArray;
}
function splitRow(row){
  return row.replace(/\\,/g,"C-O-M-M-A").split(/[,\t]/).map(string => string.replaceAll("C-O-M-M-A",","));
}
function rowHandler(row, rowIndex) {
  if (rowIndex === 0) return;
  return <Tr key={rowIndex} row={row} rowIndex={rowIndex} />;
}
const Table = ({ content, parse = false }) => {
  if (parse) content = removeParagraphs(content);
  const tableArray  = parseDataToArray(content);
  return (
    <section className="table-wrapper">
      <table>
        <thead>
          <Tr key="0" row={tableArray[0]} rowIndex="0" />
        </thead>
        <tbody>
          {tableArray.map((row, rowIndex) => rowHandler(row, rowIndex))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
