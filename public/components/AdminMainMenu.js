import React, { useState } from "react";
import Clubname from "./ClubName";
import { useSelector } from "react-redux";
import Treiners from "./Treiners";
import { Link } from 'react-router-dom';
import Team from "./Team";




const AdminMainMenu = () => {
    const clubName = useSelector(state => state.changeClubName);

        let sentesArray = new Array(4);
        sentesArray[0] = 'Futbol jest prostą grą‚ pogmatwaną przez ludzi‚ którzy zawsze wiedzą lepiej - Bill Shankly‚ trener';
        sentesArray[1] =  'Drużyna piłkarska jest jak fortepian. Potrzebujesz ośmiu, żeby go nieśli, i trzech, którzy umieją na tym cholerstwie grać. - Bill Shankly'
        sentesArray[2] =  'Są ludzie‚ którzy uważają‚ że futbol to sprawa życia i śmierci. Jestem takim podejściem rozczarowany. Futbol jest dużo ważniejszy. - Bill Shankly'
        sentesArray[3] = 'Futbol nie ma nic wspólnego z fair play. To nienawiść‚ zazdrość‚ samochwalstwo‚ pogarda dla przepisów i sadystyczna przyjemność z bycia świadkiem przemocy. Inaczej mówiąc to wojna minus wystrzały. - George Orwell pisarz'
        
        const sentens = sentesArray[Math.floor(Math.random()*4)]
   
        const [adminMenuChangeBnt, setadminMenuChangeBnt] = useState({
            changeName: false,
            addTeam: false,
            addTreiner: false,
            addInfo: false,
            logOut: false
        })

  const handleOnClick = (e) =>{
      switch (e.target.value){
          case '1':
              return setadminMenuChangeBnt({
                changeName: true,
                addTeam: false,
                addTreiner: false,
                addInfo: false,
                logOut: false
              })
              case '2':
              return setadminMenuChangeBnt({
                changeName: false,
                addTeam: true,
                addTreiner: false,
                addInfo: false,
                logOut: false
              })
              case '3':
              return setadminMenuChangeBnt({
                changeName: false,
                addTeam: false,
                addTreiner: true,
                addInfo: false,
                logOut: false
              })
              console.log('hahah')
              case '4':
              return setadminMenuChangeBnt({
                changeName: false,
                addTeam: false,
                addTreiner: false,
                addInfo: true,
                logOut: false
              })
              case '5':
              return setadminMenuChangeBnt({
                changeName: false,
                addTeam: false,
                addTreiner: false,
                addInfo: false,
                logOut: true
              })
              default :
              return null
      }

    
  }

    return (
        <>
        <header className='adminMenuHeader'>
        <div>Football STATS v.1.0</div>
        <div>{clubName}</div>   
        </header>
            <section className="adminMainMenu">
                <div className='adminMenu'>
                    <button onClick={handleOnClick} value={1}className="adminMenuBnt">Zmień Nazwę Klubu</button>
                    <button onClick={handleOnClick} value={2}className="adminMenuBnt">Dodaj drużyny</button>
                    <button onClick={handleOnClick} value={3}className="adminMenuBnt">Dodaj/Edytuj Trenerów</button>
                    <button onClick={handleOnClick} value={4} className="adminMenuBnt">Dodaj przydatne informacje</button>
                    <Link className="adminMenuBnt" to='/'>
                    <button className="adminMenuBnt">Wyloguj</button>
                    </Link>
                    
                </div>
                <div className="adminMenuScreen">
                    <div className="adminMenuMainScreen">
                       {adminMenuChangeBnt.changeName ? <Clubname/> : adminMenuChangeBnt.addTeam ? <Team/> : adminMenuChangeBnt.addTreiner ? <Treiners/> : sentens}
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
            
        </footer>
        </>
    )
}


export default AdminMainMenu; 