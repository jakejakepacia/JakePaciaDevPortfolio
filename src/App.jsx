
import Landing from "./components/landing"
import './index.css'
import Tabs from "./components/tabs"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
function App() {

  return (
    <div>
        <Landing  />
        <Projects />
        <Skills />
      {/* <section>
        <Tabs />
      </section> */}
    </div>
  )
}

export default App
