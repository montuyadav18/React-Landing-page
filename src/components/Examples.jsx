import { useState } from "react";

import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <Section title="Examples" id="examples">
      <Tabs></Tabs>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>

        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>

        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>

        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}  
    </Section>
  );
}

// const [selectedTopic, setSelectedTopic] = useState();
// let tabContent = "Please click a button";
// function handleSelect(selectedButton) {
//   // selectedButton => 'component','jsx','props', 'state'
//   // console.log(selectedButton);
//   // tabContent = selectedButton;
//   setSelectedTopic(selectedButton);
//   // console.log(tabContent);
//   console.log(selectedTopic);
// }

// export default function Examples() {
//     return (
//         <section id="examples">
//         <h2>Examples</h2>
//         <menu>
//           <TabButton
//             isSelected={selectedTopic === "components"}
//             onSelect={() => handleSelect("components")}
//           >
//             Components
//           </TabButton>

//           <TabButton
//             isSelected={selectedTopic === "jsx"}
//             onSelect={() => handleSelect("jsx")}
//           >
//             JSX
//           </TabButton>

//           <TabButton
//             isSelected={selectedTopic === "props"}
//             onSelect={() => handleSelect("props")}
//           >
//             Props
//           </TabButton>

//           <TabButton
//             isSelected={selectedTopic === "state"}
//             onSelect={() => handleSelect("state")}
//           >
//             State
//           </TabButton>
//         </menu>
//         {/* {tabContent} */}
//         {/* {selectedTopic} */}

//         {/* {!selectedTopic ? <p> Please select a topic. </p> : null}

//         {selectedTopic ? (
//           <div id="tab-content">
//             <h3> {EXAMPLES[selectedTopic].title} </h3>
//             <p> {EXAMPLES[selectedTopic].description} </p>
//             <pre>
//               <code> {EXAMPLES[selectedTopic].code} </code>
//             </pre>
//           </div>
//         ) : null} */}

//         {/* shoter the code  */}

//         {/* {!selectedTopic ? (
//           <p> Please select a topic. </p>
//         ) : (
//           <div id="tab-content">
//             <h3> {EXAMPLES[selectedTopic].title} </h3>
//             <p> {EXAMPLES[selectedTopic].description} </p>
//             <pre>
//               <code> {EXAMPLES[selectedTopic].code} </code>
//             </pre>
//           </div>
//         )} */}

//         {/* more easy way in javascript by adding && oparater */}

//         {!selectedTopic && <p> Please select a topic. </p>}
//         {selectedTopic && (
//           <div id="tab-content">
//             <h3> {EXAMPLES[selectedTopic].title} </h3>
//             <p> {EXAMPLES[selectedTopic].description} </p>
//             <pre>
//               <code> {EXAMPLES[selectedTopic].code} </code>
//             </pre>
//           </div>
//         )}

//         {/* another alternative  */}
//       </section>

//       {/* Tab Button Section Ends  */}

//       {/* <h2>Time to get started!</h2> */}
//     );
// }
