import React, { useState } from "react";
import Clubname from "./ClubName";
import { useSelector } from "react-redux";
import Treiners from "./Treiners";




const AdminMainMenu = () => {
    const clubName = useSelector(state => state.changeClubName);

//     const [name, setChangeName] = useState(' ')
//     const [clubName, setClubName] = useState(' ')

//     const handleOnChange = (e) =>{
        
//         setChangeName(e.target.value)
        
//    }

//      const handleOnClik = (e) =>{
//          e.preventDefault();
//         setClubName(name)
       
//     }
   

    // const changeName = useSelector(state => state.changeClubName)
    return (
        <>
        <header className='adminMenuHeader'>
        <div>Football STATS v.1.0</div>
        <div>{clubName}</div>   
        </header>
            <section className="adminMainMenu">
                <div className='clubNameAndTrainsers'>
                    <div >
                    <Clubname/>
                    </div>
                    <div>
                    <Treiners/>
                    </div>
                </div>
                {/* <div className='clubNameAndTrainsers'>
                    <div className="clubName">
                    Roczniki:
                    </div>
                    <div className="treiners">
                    <ul>
                        <li>Uprawienia:
                        </li>
                    </ul>
                    </div>
                </div> */}
        </section>
       
        <footer>
            <button>Wyloguj</button>
        </footer>
        </>
    )
}


export default AdminMainMenu; 