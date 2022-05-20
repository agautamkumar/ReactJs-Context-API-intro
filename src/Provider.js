import { props } from 'bluebird'
import React,{useState} from 'react' 
import PackageContext from './Context'

const Provider = (props) =>{
    const [mission,setMission] = useState({
        mname : "Fuck and move on",
        agent : '002',
        accept : "Not accepted"
    })    
    
    return(
        <PackageContext.Provider
         value={{
             data : mission,
              isMissionAccepted : () => {
                  setMission({...mission, accept: "Accepted"})
              },
              isMissionNotAccepted : () => {
                setMission({...mission, accept: "Declined"})
            }
         }}>
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider