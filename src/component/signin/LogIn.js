import React from 'react';
import './SignIn.css'
import {Grid, TextField, Button, FormControl} from "@material-ui/core";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from "react-router"

// const TEMPLATE_BASE_URL = 'http://localhost:8080/process';
const TEMPLATE_BASE_URL = 'http://localhost:8000/api-token-auth/';

let LogIn = () =>{
  const methods = useForm();
  const { handleSubmit, reset, control} = methods;
  const history = useHistory();
  const onSubmit = data =>{
    axios({
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      url: TEMPLATE_BASE_URL,
      data: data
    })
    .then((res)=>{
      sessionStorage.setItem("user", data.email)
      // sessionStorage.setItem("token", res.data.token);
      console.log(sessionStorage.getItem('user'));
      // redirect home page
      history.push('/template');
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err);
      alert("Error")
    });
  }

  return(
    <Grid item xs={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl style={{width: '100%'}}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "This is requierd", minLength: 2 }}
            as={
              <TextField 
                id="login-email"
                label="이메일 (example@gmail.com)" 
                variant="filled" 
                type="email"
                InputProps={{
                  style: { backgroundColor: 'whitesmoke'}
                }}
                style={{ marginTop: '3%'}} />
            }
          />
        </FormControl>
        <FormControl style={{width: '100%'}}>
          <Controller
            name="password"
            control={control}
            rules={{ required: "This is requierd", minLength: 2 }}
            as={
              <TextField
                id="login-password" 
                label="비밀번호" 
                variant="filled" 
                type="password"
                InputProps={{
                  style: { backgroundColor: 'whitesmoke'}
                }}
                style={{ marginTop: '3%'}} />
            }
          />
        </FormControl>
        <Button type="submit" variant="contained" className="form-button" style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>로그인</Button>
      </form>
    </Grid>
  )
}


export default LogIn;
