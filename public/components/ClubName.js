import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";
import { changeName } from '../../src/actions';




const Clubname = () =>{
    const dispatch = useDispatch();
    const [name, setChangeName] = useState(' ')


    
    
    
  
    const handleOnChange = (e) =>{
        
        setChangeName(e.target.value)
        
        
   }

     const handleOnClik = (e) =>{
        e.preventDefault();
         

         if (name.length !== 0) {
            dispatch(changeName(name))
            setChangeName('')
         } 
         
    }

    

    return (
        <ul className="clubName">
                <li className='clubNameLi'>Nazwa Klubu:
                    <input value ={name} onChange={handleOnChange}></input>
                    <button onClick={handleOnClik}>Zmień nazwe klubu</button>
                </li>
               
            </ul> 
            
    )

    
   
}

export default Clubname;