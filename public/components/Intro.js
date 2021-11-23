import React, {Component} from 'react';

class Intro extends Component {
    constructor(){
        super();
        this.state = {
            name : ''
        }
    }


   componentDidMount(){
    const wordName = `My name is Łukasz Stefański. Let's build something great!`
    const myArray = wordName.split('');
    let i =0;

    this.setTimeId = setInterval(() =>{
        this.setState({
            name: this.state.name += myArray.shift()
        })
        i++

        if(i >= wordName.length){
            clearInterval(this.setTimeId)
        }
    },100)
   } 



   componentWillUnmount(){
    clearInterval(this.setTimeId)
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


export default Intro                