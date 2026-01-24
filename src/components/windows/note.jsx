import React ,{useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './notes.scss'

const note = ({windowName, setWindowsState, x, y}) => {
 const [markdown, setMarkdown] = useState(null)
 
 useEffect(() => {
 fetch("./notes.txt").then(res => res.text()).then(text => setMarkdown(text))
},[])


    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} x={x} y={y}>
            <div className="note-window">
                {markdown ?   <SyntaxHighlighter language="javascript" style={atelierDuneDark}>
      {markdown}
    </SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>            
  )
}

export default note