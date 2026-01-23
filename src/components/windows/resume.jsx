import MacWindow from "./MacWindow"
import resumeData from "../../../public/resume.pdf" 
import "./resume.scss"

const resume = () => {
  return (
    <MacWindow>
        <div className="resume-window"> <iframe src={resumeData} /></div>
    </MacWindow>
  )
}

export default resume