import { Rnd } from "react-rnd"
import './MacWindow.scss'
import { Children } from "react"


const MacWindow = ({children , width="40vw" ,  height="40vh" , windowName, windowsState, setWindowsState, x=300, y=200}) => {
  return (
    <Rnd 
    default={{
      width:width,
      height: height,
      x:x,
      y:y
    }}
  >
      
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setWindowsState(prev => ({...prev, [windowName]: false}))
                    }} 
                    ></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title">RudranarayanM - zsh</div>
            </div>
            <div className="main-content">{children}</div>
        </div>
    </Rnd>
  )
}

export default MacWindow