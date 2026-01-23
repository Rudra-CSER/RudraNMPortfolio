import './app.scss'
import Doc from './components/doc'
import Nav from './components/Nav'
import Github from './components/windows/github'
import Note from './components/windows/note'
import Resume from './components/windows/resume'
function App() {


return (
    <>
      <main className="main">
         <Nav/>
         <Doc/>
        <Github/>
        <Note/>
        <Resume/>
      </main>
    </>
  )
}

export default App
