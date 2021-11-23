import React, {Component} from 'react'
import Intro from './Intro';


class Words extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstWord: '',
            secondWord: '',
            thirdWord: '',
            intro: true
        }
    }   

    componentDidMount(){
        
            const word = 'Hello World!'
            const myArray = word.split("");
            const wordTwo = 'My name ... is Bond,James Bond!'
            const myArrayTwo = wordTwo.split("");   
            const wordThree = "Ups! It's not a story about He!"
            const myArrayThree = wordThree.split("")
            let i =0;
            let y=0;
            let x=0;
    
    
            this.setTimeId = setInterval(() =>{
                this.setState({firstWord: this.state.firstWord += myArray.shift()})
                    i++
                        if(i >= word.length){
                            clearInterval(this.setTimeId);
                        }
    
                            if(i === word.length){
                                this.setTimeWordTwo = setInterval(() =>{
                                    this.setState({secondWord: this.state.secondWord += myArrayTwo.shift()})
                                        y++
                                            if(y >= wordTwo.length){
                                                clearInterval(this.setTimeWordTwo);
                                            }
    
                                                if(y === wordTwo.length){
                                                    this.setTimeWordThree = setInterval(()=>{
                                                        this.setState({thirdWord: this.state.thirdWord += myArrayThree.shift()})
                                                            x++
                                                                if(x >= wordThree.length){
                                                                    clearInterval(this.setTimeWordThree);
    
            this.setTimeDelay = setTimeout(() => {
                this.setTimeDeleteWordThree = setInterval(()=>{
                    this.setState({thirdWord: this.state.thirdWord.slice(0, -1)})
                        x--
                            if(x === 0){
                                clearInterval(this.setTimeDeleteWordThree)
                            }
                                if(this.state.thirdWord.length === 0){
                                    this.setTimeDeleteWordTwo = setInterval(()=>{
                                        this.setState({secondWord: this.state.secondWord.slice(0, -1)})
                                            y--
                                                if(y === 0){
                                                    clearInterval(this.setTimeDeleteWordTwo)
                                                }
                                                     if(this.state.secondWord.length === 0){
                                                        this.setTimeDeleteWordOne = setInterval(()=>{
                                                            this.setState({firstWord: this.state.firstWord.slice(0, -1)})
                                                                i--
                                                                    if(i === 0){
                                                                        clearInterval(this.setTimeDeleteWordOne)
                                                                        this.setState({
                                                                            intro: false
                                                                        })
                                                                    }
                                                        },30)
                                                     }
                                    },30)
                                }
                },30)
            },1000);
                                                            }
                                                    },150)
                                }     
                             },150) 
                            }
    
            },150) 
}
    render() {

        const {firstWord, secondWord,thirdWord,intro} = this.state

        return(
                    <div className='intro col-mob-12 col-tbl-12 col-dsk-12'>
                        {intro 
                        ? 
                         <div className='intro__word-container '>
                            <div className='intro__word-container__word'>
                                {firstWord}
                                <div className='word-cursor'>|</div>
                            </div>
                            <div className='intro__word-container__word-two'>
                                {secondWord}
                                <div className='word-cursor-two'>|</div>
                            </div>
                            <div className='intro__word-container__word-three'>
                                {thirdWord}
                                <div className='word-cursor-three'>|</div>
                            </div>
                         </div>
                        : 
                            <Intro/>
                         }
                    </div>
        )
       
    }

    }

export default Words;