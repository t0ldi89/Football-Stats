import React, {Component} from 'react';
import Footer from './Footer';


class Contact extends Component {
    constructor(){
        super();

        this.state = {
            contactName: ' ',
            phone: '',
            email: '',
            msg: '', 
            errorName: false,
            errorPhone: false,
            errorEmail: false,
            errorMsg: false,
            msgDone: false,
            msgErrorSend: false
        }
    }


handleOnChange = (event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })  
}

handleName= () =>{
    if(this.state.contactName.length < 3){
        this.setState({
            errorName: true
        })
    }else{
        this.setState({
            errorName:false
        })
    }
    }

handleEmail= () =>{
    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        if(!reg.test(this.state.email)){
            this.setState({
                errorEmail: true
            })
        }else{
            this.setState({
                errorEmail: false
            })
        }
    }

handlePhone =()=>{
    const reg = /^([0-9]{9})$/;
    if(!reg.test(this.state.phone)){
        this.setState({
            errorPhone: true
        })  
    }else{
        this.setState({
            errorPhone:false
        })
    }
}

handleMsg = () =>{
    if(this.state.msg.length <=3 || this.state.msg.length === 500 ){
        this.setState({
            errorMsg: true
        })
    }else{
        this.setState({
            errorMsg: false
        })
    }
}


handleOnClick = (event) =>{
    event.preventDefault();
    const {errorEmail, errorMsg, errorName, errorPhone, contactName, email, msg, phone} = this.state;

if(errorEmail === false && email.length > 0 &&
    errorMsg === false && msg.length > 0 &&
    errorName === false && contactName.length > 0 &&
    errorPhone === false && phone.length > 0){
    this.setState({
        msgDone: true,
        msgErrorSend: false
    })  
}else{
    this.setState({
        msgDone: false,
        msgErrorSend: true
    })

}
}


render(){
   
    const { contactName,email,phone,msg, errorName, errorEmail,errorPhone,errorMsg, msgDone, msgErrorSend} = this.state;

    
    return(
        <section id='contactScroll'> 
            <div className='container'>
                <div className='container__row'>
                    <div className='col-mob-12 col-tbl-12 col-dsk-12 contact'>
                        <div className='form-container'>
                            <div className='contact-me'>Contact Me:</div>
                            <div className='form-elements'>
                                <div>Your name:</div>
                                <input 
                                    name='contactName'
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleName}
                                    value={this.state.name}
                                    />
                            </div>
                            {errorName ? <div className='error'>Name must have more than 3 letters </div> : null}
                                
                            <div className='form-elements'>
                                <div>Phone:</div>
                                <input name='phone'
                                value={this.state.name}
                                onChange={this.handleOnChange}
                                onBlur={this.handlePhone}
                                />
                            </div> 
                            {errorPhone ? <div className='error'>Phone number must have 9 digits </div> : null}
                            <div className='form-elements'>
                                <div>Email:</div>
                                <input name='email'
                                 
                                 onChange={this.handleOnChange}
                                 onBlur={this.handleEmail}
                                 value={this.state.name}
                                />
                            </div>
                            {errorEmail ? <div className='error'>Invalid mail</div> : null}
                            <div className='form-elements-textarea'>
                                <div>Message:</div>
                                <textarea className='form-textarea' 
                                name='msg' 
                                type='textarea'
                                onChange={this.handleOnChange}
                                onBlur={this.handleMsg}
                                value={this.state.name}></textarea>
                            </div>
                            {errorMsg ? <div className='error'>Message must have min.3/max.500 letter's. </div> : null}
                            <div className='form-elements-submit'>
                            <input 
                            type='submit' 
                            className='form-submit' 
                            value='Send Message'
                            onClick={this.handleOnClick}
                            ></input>
                            </div>
                            {msgDone ? <div className='doneMsg'> Message send. Thank You for contact. I will write back as soon as possible </div> : null}
                            {msgErrorSend ? <div className='errorMsg'>Not all fields have been correctly completed</div> : null}
                        </div>
                        
                        
                        
                        
                    </div>  
                </div>
            </div>
        </section>  
        
    )


}

   
}
export default Contact;