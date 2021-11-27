import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const LoginSide = () =>{
    return (
        <>
        <section>
            <div className='loginPageBackground'>
                <div className='loginBox'>
                    <div className='loginBoxName'>Football STATS v.1.0</div>
                    <div className='loginBoxLogin'>
                            <div className='loginBoxName'>
                                <div>Login:</div>
                                <input></input>
                            </div>
                            <div className='loginBoxName'>
                                <div>Hasło:</div>
                                <input></input>
                            </div>
                            <div className='loginBoxNameCheckBox'>
                                <input type="checkbox"></input>
                                <label>Zaloguj jako administrator</label>
                            </div>
                            <div className='loginBoxName loginBoxNameDesktop'>
                               <Link to='/MainMenu'> 
                               <button className='loginBoxNameBnt'>Zaloguj</button>
                               </Link>
                            </div>
                    </div>  
                </div>
            </div>
        </section>
        <footer>
    
        </footer>
        </>
    )
   


}


export default LoginSide                