import { useState } from 'react';  
import componentsImg from './assets/components.png'
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import Header from './components/Header.jsx'
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState ('components');
  function handeSelect (selected){
     setSelectedTopic(selected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept title="ti1"description="lorem skjdf lksjad; ask;djlf"image={componentsImg}
            />
            <CoreConcept title="ti1"description="lorem skjdf lksjad; ask;djlf"image={componentsImg}
            />
            <CoreConcept title="ti1"description="lorem skjdf lksjad; ask;djlf"image={componentsImg}
            />
            <CoreConcept title="ti1"description="lorem skjdf lksjad; ask;djlf"image={componentsImg}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect = {() => handeSelect('components')}>component</TabButton>
            <TabButton onSelect = {() => handeSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect = {() => handeSelect('props')}>props</TabButton>
            <TabButton onSelect = {() => handeSelect('state')}>state</TabButton>
 
            {/* // props children poning to the content between our component tags  */}
          </menu>
          <div id = "tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;