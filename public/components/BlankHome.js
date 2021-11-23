import React, {Component} from 'react';

class BlankHome extends Component {
    constructor(){
        super();
        this.state = {
            name : `My name is Łukasz Stefański. Let's build something great!`
        }
    }


  



render(){
        const {name} = this.state
    return (
        <>
        <div className='main__intro-container'>
            <div className='name-word'>{name}</div>
            <div></div>
            <div></div>
        </div>
        
        </>
        
    )
}
    
}

export default BlankHome;

