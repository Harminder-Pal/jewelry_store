import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import {useraction} from '../../actions/actions';
import { useDispatch } from 'react-redux'; 



const initialvalue = {
    username:'',
    password:'',
}
export default function Login(props){
    const dispatch = useDispatch();
    const [data,setdata] = useState(initialvalue);
    const onEmailHandler = (event)=>{
        setdata({...data,username:event.target.value});
    }
    const onPasswordHandler = (event)=>{
        setdata({...data,password:event.target.value});
    }
    const onSubmit = (event)=>{
        console.log(data);
        event.preventDefault()
        dispatch(useraction.LoginRequest(data))
    }
    return (
        <>
        <Input type={"text"} placeholder={"Enter the Email"} label={"Email Address"} controlId={"formBasicEmail"} onChange={onEmailHandler} />
        <Input type={"password"} placeholder={"Enter the Password"} label={"Password"}  controlId={"formBasicPassword"}  onChange={onPasswordHandler}/>
        <Button type={"Primary"} onClick={onSubmit}>Login</Button>
        </>
    )
}

