import { name } from 'file-loader';
import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";
import { addTreiner } from '../../src/actions';

const Treiners = () =>{
    const dispatch = useDispatch();
    const [treinerNameState, setTreinerName] =
     useState([]
    )
    const tymek = useSelector(state => state.addTreiner.treinerName);

const handleNameOnChange = (e) =>{
    setTreinerName([e.target.value])
}
const handleOnClick =(e) =>{
    dispatch(addTreiner(treinerNameState))
}


    return (
<div className='treiners'>
        <div className='addTreiner'> 
        
        
        <div>
            <div>Dodaj nowego trenera: </div>
            <div className='addTreinerName'>
            <div>Imię: </div>
            <input onChange={handleNameOnChange}></input> 
            </div>
            <div className='addTreinerName'>
            <div>Nazwisko:</div>
            <input></input>
            </div>
            <select className='addTreinerName'>
                <option>
                Wybierz prowadzony rocznik
                </option>
            </select>
            <div className='addPermissions'>
                <div > Uprawnienia:</div>
                <div className='addPermissionsOptions'>
                <div> Administartor</div>
                <input type="checkbox"/>
                </div>
                <div className='addPermissionsOptions'>
                <div> Użytkownik</div>
                <input type="checkbox"/>
                </div>
            </div>
            <button onClick={handleOnClick}> Dodaj trenera</button>
            {treinerNameState.name}
            {tymek}
            
        </div>
        </div>
        <div className='addedTreiners'>
        <div>Aktualnie dodani trenerzy:</div>
        <ul>
        </ul>
        </div>
        
    </div>
    )
    
}


export default Treiners 