import { name } from 'file-loader';
import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";
import { addTreiner, addTreinerSurname } from '../../src/actions/addTreinerActions';

const Treiners = () =>{
    const [treinerNameState, setTreinerName] =useState('')
    const [treinerSurnameState, setTreinerSurname] =useState('')


const handleNameOnChangeName = (e) =>{
    setTreinerName(e.target.value)
 
}

const handleNameOnChangeSurname = (e) =>{
    setTreinerSurname(e.target.value)
}



const handleOnClick =(e) =>{

    
    
}


    return (
<div className='treiners'>
        <div className='addTreiner'> 
        
        
        <div>
            <div>Dodaj nowego trenera: </div>
            <div className='addTreinerName'>
            <div>Imię: </div>
            <input onChange={handleNameOnChangeName}></input> 
            </div>
            <div className='addTreinerName'>
            <div>Nazwisko:</div>
            <input onChange={handleNameOnChangeSurname}></input>
            </div>
            <select className='addTreinerName'>
                <option>
                Wybierz prowadzony rocznik
                </option>
            </select>
            <div className='addPermissions'>
                <div >  Uprawnienia:</div>
                <div className='addPermissionsOptions'>
               
                </div>
                <div className='addPermissionsOptions'>
                <div> Użytkownik</div>
                <input   type="checkbox"/>
                </div>
            </div>
            <button onClick={handleOnClick}> Dodaj trenera</button>
           
            
        </div>
        </div>
        <div className='addedTreiners'>
        <div>Aktualnie dodani trenerzy:</div>
        <ul>
          {treinerNameState}
          {treinerSurnameState}
         
        </ul>
        </div>
        
    </div>
    )
    
}


export default Treiners;