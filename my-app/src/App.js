import { useState } from "react";

import Header from "./components/header/Header";
import Tips from "./components/tips/Tips";


function App() {
  const [tipList, setTip] = useState([
    { "id": 1,
     "date": "4th Feb 2022",
     "tags": ["JavaScript", "Pitfall"],
     "title": "Number One",
      "sections": [{"section-title": "Some Code",
      "type": "code",
      "content": `const constant = magic number;
return constant + 1;`},
      {"type": "table",
       "content": [["Name", "Job", "ID"],
        ["Bob", "Builder", "685163516"]]}]
    }, 
    { "id": 2,
     "date": "4th Feb 2022",
     "tags": ["JavaScript", "Pitfall"],
     "title": "Tip B",
      "sections": [{"section-title": "Optional Title",
      "type": "code",
      "content": "string"},
      {"type": "table",
       "content": [["array", "of", "strings"],
        ["array", "of", "strings"]]}]
    }, 
    { "id": 3,
     "date": "4th Feb 2022",
     "tags": ["JavaScript", "Pitfall"],
     "title": "Third Tip",
      "sections": [{"section-title": "Optional Title",
      "type": "code",
      "content": "string"},
      {"type": "table",
       "content": [["array", "of", "strings"],
        ["array", "of", "strings"]]}]
    }
  ]);
  
  return (
    <section className="container">
      <Header title="Tip Town 5000" />
      <Tips tipList={tipList}/>
    </section>
  );
}

export default App;
