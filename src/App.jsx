import './app.scss'
import Doc from './components/doc'
import Nav from './components/Nav'
import Github from './components/windows/github'
function App() {


return (
    <>
      <main className="main">
         <Nav/>
         <Doc/>
        <Github/>
      </main>
    </>
  )
}

export default App
