import { useEffect, useMemo, useState } from 'react'
import { ContactSection } from './components/ContactSection'
import { EvidenceStrip } from './components/EvidenceStrip'
import { Hero } from './components/Hero'
import { NavigationBar } from './components/NavigationBar'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { ProjectSection } from './components/ProjectSection'
import { ProjectSystem } from './components/ProjectSystem'
import { projects } from './data/projects'

function getProjectSlugFromHash() {
  const match = window.location.hash.match(/^#\/projects\/([^/?#]+)/)
  return match ? decodeURIComponent(match[1]) : null
}

function App() {
  const [projectSlug, setProjectSlug] = useState(getProjectSlugFromHash)

  useEffect(() => {
    const onHashChange = () => setProjectSlug(getProjectSlugFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === projectSlug),
    [projectSlug],
  )

  useEffect(() => {
    if (
      selectedProject ||
      !window.location.hash.startsWith('#') ||
      window.location.hash.startsWith('#/')
    ) {
      return
    }

    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    })
  }, [selectedProject])

  if (selectedProject) {
    return (
      <>
        <NavigationBar />
        <ProjectDetailPage project={selectedProject} />
      </>
    )
  }

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
