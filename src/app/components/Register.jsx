import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import {useraction} from '../../actions/actions';
import { useDispatch } from 'react-redux'; 

const initialvalue = {
    email:'',
    password:'',
    firstName:'',
    lastName:''
}
export default function Register(props){
    const dispatch = useDispatch();
    const [data,setdata] = useState(initialvalue);
    const onEmailHandler = (event)=>{
        setdata({...data,email:event.target.value});
    }
    const onfirstNameHandler = (event) =>{
        setdata({...data,firstName:event.target.value})
    }
    const onlastNameHandler = (event) =>{
        setdata({...data,lastName:event.target.value})
    }
    const onPasswordHandler = (event)=>{
        setdata({...data,password:event.target.value});
    }
    const onSubmit = (event)=>{
        console.log(data);
        event.preventDefault()
        dispatch(useraction.RegisterRequest(data))
    }
    return (
        <>
        <Input type={"text"} placeholder={"Enter the Email"} label={"Email Address"} controlId={"formBasicEmail"} onChange={onEmailHandler} required />
        <Input type={"text"} placeholder={"Enter Fisrt Name"} label={"First Name"} controlId={"formBasicName"} onChange={onfirstNameHandler} required />
        <Input type={"text"} placeholder={"Enter Last Name"} label={"Last Name"} controlId={"formBasicName"} onChange={onlastNameHandler}required/>
        <Input type={"text"} placeholder={"Enter Password"} label={"Password"} controlId={"formBasicPassword"} onChange={onPasswordHandler} required />
        <Button type={"Primary"} onClick={onSubmit}>Register</Button>
        </>
    )
}

