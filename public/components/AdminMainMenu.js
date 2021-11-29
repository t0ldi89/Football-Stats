import React, { useState } from "react";
import { useSelector } from "react-redux";




const AdminMainMenu = () => {

    const [name, setChangeName] = useState(' ')

    const handleOnChange = (dupa) =>{
        
       setChangeName(dupa.target.value)

       console.log({name})
   }

     const handleOnClik = (dupa) =>{
         dupa.preventDefault();
        setChangeName(dupa.target.value)

        console.log({name})
    }
   

    const changeName = useSelector(state => state.changeClubName)
    return (
        <>
        <header className='adminMenuHeader'>
        <div>Football STATS v.1.0</div>
        <div>{changeName}</div>
        </header>
        <section>
            <ul>
                <li>Nazwa Klubu:
                    <input onChange={handleOnChange}></input>
                    <button onClick={handleOnClik}>ZMień nazwe klubu</button>
                </li>
                <li>Trenerzy</li>
                <li>Roczniki</li>
                <li>Dodawnie uprawnień</li>
            </ul>
        </section>
        <footer>
            <button>Wyloguj</button>
        </footer>
        </>
    )
}


export default AdminMainMenu; 