import './github.scss'
import MacWindow from './MacWindow'
import githubData from '../../assets/github.json'

const GitCard = ({data= {id :1 , image:"",title:"", description:"", tags:[], repolink:"",demolink:"" }}) => {
    return <div className="card">
        <img src={data.image} alt="" srcset="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className="tags">
            {data.tags.map(tag => <p className='tag'>{tag}</p>)}
        </div>
        <div className="urls">
            <a href={data.repolink} target="_blank" rel="noopener noreferrer">Repo</a>
           {data.demolink && <a href={data.demolink} target="_blank" rel="noopener noreferrer">Demo</a>}
        </div>
    </div>
}

const Github = () => {
  return (
    <MacWindow>
      <div className="cards">
         {githubData.map(project =>{
            return <GitCard data={project}/>
         })}
      </div>
    </MacWindow>
  )
}

export default Github   