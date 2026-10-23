import './App.scss'
import './tailwind.css'
import Header from './components/Header'
import ToggleSidebar from './components/ToggleSidebar'
import ContentSection from './components/ContentSection'

function App() {

  return (
    <>
      <Header />
        <main className="portfolio__main flex flex-row">
          <nav className="portfolio__nav w-fit flex bg-[#F3F3F3] dark:bg-[#0E0E0E] border-r border-[#D4D4D4] dark:border-[#404751]">
            <ToggleSidebar />
          </nav>
          <ContentSection />
        </main>
    </>
  )
}

export default App
