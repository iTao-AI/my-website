import { useEffect, useMemo, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { AINativeEngineering } from './components/AINativeEngineering'
import { CapabilityMap } from './components/CapabilityMap'
import { ComplementaryProjects } from './components/ComplementaryProjects'
import { ContactSection } from './components/ContactSection'
import { FlagshipCaseStudy } from './components/FlagshipCaseStudy'
import { Hero } from './components/Hero'
import { NavigationBar } from './components/NavigationBar'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { complementaryProjects, flagshipProject, projects } from './data/projects'

function getProjectRouteFromHash() {
  const canonicalMatch = window.location.hash.match(/^#\/projects\/([^/?#]+)/)

  if (canonicalMatch) {
    return {
      canonicalHash: null,
      slug: decodeURIComponent(canonicalMatch[1]),
    }
  }

  const legacyMatch = window.location.hash.match(/^#project\/([^/?#]+)/)

  if (legacyMatch) {
    return {
      canonicalHash: `#/projects/${legacyMatch[1]}`,
      slug: decodeURIComponent(legacyMatch[1]),
    }
  }

  return {
    canonicalHash: null,
    slug: null,
  }
}

function syncProjectRouteFromHash() {
  const route = getProjectRouteFromHash()

  if (route.canonicalHash) {
    window.history.replaceState(null, '', route.canonicalHash)
  }

  return route.slug
}

function App() {
  const [projectSlug, setProjectSlug] = useState(syncProjectRouteFromHash)

  useEffect(() => {
    const onHashChange = () => setProjectSlug(syncProjectRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === projectSlug),
    [projectSlug],
  )

  useEffect(() => {
    if (!selectedProject) return

    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => window.cancelAnimationFrame(frame)
  }, [selectedProject])

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
        <FlagshipCaseStudy project={flagshipProject} />
        <ComplementaryProjects projects={complementaryProjects} />
        <CapabilityMap />
        <AINativeEngineering />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
