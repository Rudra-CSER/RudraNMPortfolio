import {useState} from 'react'

import './app.scss'
import Doc from './components/doc'
import Nav from './components/Nav'
import Github from './components/windows/github'
import Note from './components/windows/note'
import Resume from './components/windows/resume'
import Spotify from './components/windows/spotify'
import Cli from './components/windows/cli'

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
return (
    <>
      <main className="main">     
         <Nav/>
         <Doc windowsState={windowsState} setWindowsState={setWindowsState}/>

      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} x={50} y={50} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} x={450} y={100} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} x={100} y={150} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} x={850} y={50} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} x={300} y={350} />}
      </main>
    </>
  )
}

export default App
