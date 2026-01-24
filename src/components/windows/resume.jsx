import MacWindow from "./MacWindow"
import resumeData from "../../../src/assets/resume.pdf" 
import "./resume.scss"

const resume = ({windowName, setWindowsState, x, y}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} x={x} y={y}>
        <div className="resume-window"> <iframe src={resumeData} /></div>
    </MacWindow>
  )
}

export default resume