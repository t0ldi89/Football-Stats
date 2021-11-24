import React, {useState,useEffect} from 'react';

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
                                <button className='loginBoxNameBnt'>Zaloguj</button>
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