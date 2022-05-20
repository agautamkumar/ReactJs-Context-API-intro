import React,{Fragment} from 'react' 
import Provider from './Provider'
import Context  from './Context'

const Agents = () => {
  return <AgentOne/>
}

const AgentOne = () => {
  return <AgentTwo/>
}

const AgentTwo = () => {
  return <AgentBond/>
}

const AgentBond = (props) => {
  return(
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission name : {context.data.mname}</p>
            <p>Agent : {context.data.agent}</p>
            <p>Mission Status : {context.data.accept}</p>
            <button disabled={context.data.accept == "Accepted"?true:false} onClick={()=>{context.isMissionAccepted()}}>Accept Mission</button>
            <button disabled={context.data.accept == "Declined"?true:false}  onClick={()=>{context.isMissionNotAccepted()}}>Decline Mission</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}

const App = () =>{
  return (
    <dib>
      <h1>Context API</h1>
       <Provider>
         <Agents/>
       </Provider>
    </dib>
  )
}

export default App