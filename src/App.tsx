import { ContactSection } from './components/ContactSection'
import { EvidenceStrip } from './components/EvidenceStrip'
import { Hero } from './components/Hero'
import { NavigationBar } from './components/NavigationBar'
import { ProjectSection } from './components/ProjectSection'
import { ProjectSystem } from './components/ProjectSystem'

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Hero />
        <EvidenceStrip />
        <ProjectSystem />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
