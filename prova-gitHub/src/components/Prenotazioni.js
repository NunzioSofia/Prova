import { eventData } from "./../data.js"
import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap'

function Prenotazioni(){
    
   
    const [variableName,setVariableName]= useState("");
    const [variableType,setVariableType]= useState("");
    const [variableClub,setVariableClub]= useState("");
    // const [pulsante,setPulsante]= useState["true"];
    
    // const attiva=(()=>{
    //  setPulsante("")
    //  console.log(pulsante);
      
    // })
    // console.log(click);

    const resetState=(()=>{
        setVariableType("")
        setVariableName("")
        setVariableClub("")
    })
    const showEvent=(()=>{
        if(variableName!==""){
            return (eventData.filter(el=>el.name===variableName)
                     .map(e=> (
                        <div className="singleElement">
                            <img className="photo" src={e.url} ></img>
                                    <p id="name">{e.name}</p>
                                    <p id="time">{e.time}</p>
                                    <div className="orario">
                                        <p id="start">{e.start} </p>
                                        <p> </p>
                                        <p id="end">{e.end}</p>
                                    </div>
                                    <p id="posti">Posti Disp. {e.postiDisponibili}</p>
                                    <Button id="buttonLi" variant="secondary">{e.iscrizione}</Button>
                                    
                        </div> 
                    )))
        }else if (variableClub!==""){
            return (eventData.filter(el=>el.club===variableClub)
                     .map(e=> (
                        <div className="singleElement">
                            <img className="photo" src={e.url} ></img>
                                    <p id="name">{e.name }</p>
                                    <p id="time">{e.time}</p>
                                    <div className="orario">
                                        <p id="start">{e.start+ " "}</p>
                                        <p> </p>
                                        <p id="end">{e.end}</p>
                                    </div>
                                    <p id="posti">Posti Disp.{e.postiDisponibili}</p>
                                    <Button id="buttonLi" variant="secondary">{e.iscrizione}</Button>
                        </div> 
                    )))
        } else if (variableType!==""){
            return (eventData.filter(el=>el.type===variableType)
            .map(e=> (
               <div className="singleElement">
                   <img className="photo" src={e.url} ></img>
                                    <p id="name">{e.name}</p>
                                    <p id="time">{e.time}</p>
                                    <div className="orario">
                                        <p id="start"> {e.start+ " "} </p>
                                        <p> </p>
                                        <p id="end">{e.end}</p>
                                    </div>
                                    <p id="posti">Posti Disp. {e.postiDisponibili}</p>
                                    <Button id="buttonLi" variant="secondary">{e.iscrizione}</Button>
                </div> 
            )))
        }else {
            return (
                <ul id="lista">
                    {eventData.map((e)=>{
                        return (
                            <li id="lista" >
                                <div className="singleElement">
                                    <img className="photo"  src={e.url}  ></img>
                                    <p id="name">{e.name}</p>
                                    <p id="time">{e.time}</p>
                                    <div className="orario">
                                        <p id="start"> {e.start} </p>
                                        <p> </p>
                                        <p id="end">{e.end}</p>
                                    </div>
                                    <p id="posti">Posti Disp. {e.postiDisponibili}</p>
                                    <Button id="buttonLi" variant="secondary">{e.iscrizione}</Button>
                                </div>   
                            </li>
                    )})}
                </ul>
            )
        }
    })
    useEffect(()=>{
        showEvent();
        console.log("showEffectOK")
       },[variableName,variableClub,variableType])
    
     return(
         
    <div className="headerUp">
        <div className="filtri"><a href=""><img src="https://icons-for-free.com/iconfiles/png/512/filter-131979013401653166.png" width="20" height="20"></img>Filtri</a></div>
        <div className="headerOption">
        
        <select  onChange={e=>{setVariableName(e.target.value)
                             setVariableType("")
                             setVariableClub("")
                             }}>
                                 {/* <option>Tutte le attività</option> */}
       {eventData.map((e)=>{
             return (
                <option  value={e.name}>{e.name}</option>
          )})}
         </select>
        <select  onChange={e=>{setVariableName("")
                             setVariableType(e.target.value)
                             setVariableClub("")}}>
                                 {/* <option>Tutte le Categorie</option> */}
       {eventData.map((e)=>{
             return (
                <option   value={e.type}>{e.type}</option>
          )})}
         </select>
        <select  onChange={e=>{setVariableName("")
                             setVariableType("")
                             setVariableClub(e.target.value)}}>
                                 {/* <option>Tutti i cl ub</option> */}
       {eventData.map((e)=>{
             return (
                <option  value={e.club}>{e.club}</option>
          )})}
         </select>
         <Button id="buttonReset" variant="link" onClick={()=>{resetState()}}>RESET</Button>
         
         </div>
           <div className="showElement">
                {showEvent()}
            </div>
            <div >
        <footer className="social">
          <div class="col-12">
          <input type="image" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" width="30" height="30" />
        
          <input type="image" src="https://image.flaticon.com/icons/png/512/124/124010.png" width="30" height="30" />
        
          <input type="image" src="https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png" width="35" height="35" />
          <select  name ="languages " >
          <option value="ENG">ENG</option>
          <option value="ITA">ITA</option>
          <option value="FRA">FRA</option>
        </select>
        </div>
      </footer>
      </div>
        
             
         
         
       

    </div>);
};
export default Prenotazioni;