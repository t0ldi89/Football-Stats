import React,{useState} from 'react';


const Skills = () =>{
    return(
        <section id='skills'>
            <div className='container'>
                <div className='container__row'>
                    <div className='col-mob-12 col-tbl-12 col-dsk-12 skills'>
                        <p className='skills_word'>What I can do:</p>
                        <div className='skills_stage'>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                    <i className="fab fa-js-square jsSkills"></i>
                                </div>
                                <p>JavaScript</p>
                            </div>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                <i className="fab fa-html5 htmlSkills"></i>
                                </div>
                                <p>Html5</p>
                            </div>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                <i className="fab fa-css3-alt cssSkills"></i>
                                </div>
                                <p>Css</p>
                            </div>
                        </div>
                        <div className='skills_stage'>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                <i className="fab fa-sass sassSkills"></i>
                                </div>
                                <p>Sass</p>
                            </div>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                <i className="fab fa-react reactSkills"></i>
                                </div>
                                <p>React</p>
                            </div>
                        </div>
                        <div className='skills_stage'>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                <i className="fas fa-mobile-alt mobileSkills"></i>
                                </div>
                                <p>Responsive www</p>
                            </div>
                        </div>
                        <p className='skills_word'>What I want to learn:</p>
                        <div className='skills_stage'>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                <i className="fab fa-node-js nodeSkills"></i>
                                </div>
                                <p>Node.js</p>
                            </div>
                            <div className='skills_container'>
                                <div className='skills-shape'>
                                <i className="fab fa-php phpSkills"></i>
                                </div>
                                <p>php</p>
                            </div>
                        </div>
                        
                            
                        
                    
                        
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>
                </div>

            </div>
        </section>  
       
    )
}

export default Skills;