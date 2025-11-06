import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  function handeSelect(selected) {
    setSelectedTopic(selected);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handeSelect('components')}>component</TabButton>
        <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handeSelect('JSX')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handeSelect('props')}>props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handeSelect('state')}>state</TabButton>

        {/* // props children poning to the content between our component tags  */}
      </menu>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    </section>);
}