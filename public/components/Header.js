import React, {Component} from 'react';
import Word from './Word';
import Footer from './Footer';
import Skills from './Skills';
import Myworks from './MyWorks';
import Contact from './Contact';
import BlankHome from './BlankHome';


class Main extends Component {

    constructor(props){
        super(props);
        this.state = {  
            page: 0,
            classHamburger: '',
            hamburgerState: false,
            opened: ''
        }
    }   

  
    handleOnClick = e =>{
        
        this.setState({
            page: e.target.value
        })   
    }

    handleHamburgerClick = e =>{
        if(this.state.hamburgerState == false){
            this.setState({
                classHamburger: ' hamburger--active',
                hamburgerState: true,
                opened: ' openHamb'
            })
            
        }else if(this.state.hamburgerState == true){
            this.setState({
                classHamburger: '',
                hamburgerState: false,
                opened: ''
            })
        }
        console.log(this.state.hamburgerState)
    }
    
render (){
    const {page} = this.state;

    const actuallyPage = this.state.page;
    let option = ''

    if(this.state.page === 1){
        option = <BlankHome/>
    } else if(this.state.page === 0){
        option = <Word />
    }
    else if(this.state.page === 2){
        option = <Myworks />
    } else if(this.state.page === 3){
        option = <Skills />
    }else if(this.state.page === 4){
        option = <Contact/>
    }
 

   

    return (
        <>
<header>
    <div className='container'>
        <div className='container__row'>
            <div className='col-mob-12 col-tbl-12 col-dsk-12 menu-container'>
                <div className='col-mob-8 col-tbl-8 col-dsk-6 menu-container__logo'>
                    <div className='logo-img'></div>
                        <div className='logo__word'>
                             Łukasz Stefański
                                 <div className='logo__word-two'>
                                     Front-end Developer</div>
                                </div>
                        </div>
    <nav>
        <button onClick={this.handleHamburgerClick} className={'hamburger' + this.state.classHamburger} aria-label="Menu"> 
            <span className="hamburger__container" tabIndex="-1"> 
                <span className="hamburger__bars"></span> 
            </span> 
        </button>
            <div className='menu-container__menu'>
                <ul>
                    <li  name="home" onClick={this.handleOnClick}  value={1}>
                        <i className="fas fa-home"></i>
                            HOME
                    </li>
                    <li onClick={this.handleOnClick} name='projects' value={2}>
                        <i className="fas fa-book-open"></i>
                            PROJECTS
                    </li>
                    <li onClick={this.handleOnClick} name='skills' value={3}>
                        <i className="fab fa-react"></i>
                            SKILLS
                    </li>
                    <li onClick={this.handleOnClick} name='contact' value={4}>
                        <i className="fas fa-address-card"></i>
                            CONTACT
                    </li>
                </ul>
            </div>
    </nav>
            </div>
        </div>
    </div>
</header>  
    
        <section className='container '>
                <div className='conatiner__row '>
                    <div className='col-mob-12 col-tbl-12 col-dsk-12 main-container'>
                    {option}
                    <div className={'hamburger-menu-side' + this.state.opened}></div>
                    </div>  
                    </div>
            </section>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}


    
}


export default Main;