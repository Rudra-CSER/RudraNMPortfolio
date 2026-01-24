import MacWindow from "./MacWindow"
import './spotify.scss'

const spotify = ({windowName, setWindowsState, x, y}) => {
  return (
   <MacWindow windowName={windowName} setWindowsState={setWindowsState} x={x} y={y}>
    <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{borderRadius:"1px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EJDRd0G74RNj6?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
   </MacWindow>
  )
}

export default spotify