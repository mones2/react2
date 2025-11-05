import componentsImg from './assets/components.png'
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import Header from './components/Header.jsx'


function App() {
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
            <TabButton>component</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>props</TabButton>
            <TabButton>state</TabButton>
 
            {/* // props children poning to the content between our component tags  */}
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;