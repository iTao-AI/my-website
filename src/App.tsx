import { Hero } from './components/Hero'
import { NavigationBar } from './components/NavigationBar'
import { ProjectSection } from './components/ProjectSection'

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Hero />
      </main>

      <ProjectSection />

      {/* Contact section */}
      <section
        id="contact"
        className="min-h-screen px-6 sm:px-12 py-20 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
          联系我
        </h2>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-center max-w-md">
          联系方式即将上线，敬请期待。
        </p>
      </section>
    </>
  )
}

export default App
