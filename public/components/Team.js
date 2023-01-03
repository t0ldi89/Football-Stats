import React, { useState } from "react";

const Team = () =>{

    return (

        <div className='teamContainer'>
            <div className="teamContainerAddTeam">
                <div className="teamContainerAddTeamName">
                    <div className="addTreinerName">
                    <div>Nazwa drużyny:</div>
                    <input></input>
                    </div>
                    <div className="addTreinerName">
                <div>Rocznik:</div>
                <input></input>  
            </div> 
                </div>
            <div className="treinerAdress">
                <div className="addTreiner">
                    <div> <b>Dodaj trenera:</b></div>
                    <div>
                    <div className="addTreinerInput">
                        <div>Imię:</div> 
                        <input></input>
                    </div>
                    <div className="addTreinerInput">
                        <div>Nazwisko:</div> 
                        <input></input>
                    </div>
                </div>
            </div>
            <div><b>Adres zamieszkania:</b></div>
            <div className="addTreinerInput">
            <div >Ulica:</div>
                        <input></input>
            </div>
            <div className="addTreinerInput">
                    <div>Miejscowość:</div>          
                        <input></input>
                        </div> 
                        <div className="addTreinerInput">
                    <div>Kod Pocztowy:</div>
                        <input></input>
                        </div>
                        <div className="addTreinerInput">
                    <div>Numer telefonu:</div>
                        <input></input>
                        </div>
                        <div className="addTreinerInput">
                        <div>Adres email:</div>
                        <input></input>
                        </div>
                        <div><b>Uprawnienia:</b></div>
                            <div className="addTreinerInput">
                            <select >
                                <option>UEFA PRO</option>
                                <option>UEFA A</option>
                                <option>UEFA B</option>
                                <option>UEFA C</option>
                                </select>
                                </div>
            </div>
            
                    
            <div>     
            </div> 
            <div>
                <button>Dodaj drużynę</button>
            </div>
        
            </div>
        <div className="teamContainerTeams">
        hahha
        </div>

    </div>


    )
   


}

export default Team;