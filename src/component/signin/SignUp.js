import React from 'react';
import {Grid, TextField, Button, FormControl} from "@material-ui/core";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const TEMPLATE_BASE_URL = 'http://localhost:8080/signup';

const SignUp = () => {
  const methods = useForm();
  const { handleSubmit, reset, control} = methods;
  const onSubmit = data =>{
    axios({
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      url: TEMPLATE_BASE_URL,
      data: data
    })
    .then((res)=>{
      console.log(res.body);
    })
    .catch((err)=>{
      console.log(err);
    });

  }

  return(
    <Grid item xs={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl style={{width: '100%'}}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "This is requierd", minLength: 2 }}
            as={
              <TextField
               id="signup"
               label="이름 (2자 이상)"
               variant="filled"
               InputProps={{
                 style: { backgroundColor: 'whitesmoke'}
               }}
               style={{ marginTop: '3%'}} />
            }
          />
        </FormControl>
        <FormControl style={{width: '100%'}}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            as={
              <TextField id="filled-basic" label="이메일 (example@gamil.com)" variant="filled" type="email"
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
            rules={{ required: true, minLength: 6 }}
            as={
              <TextField id="filled-basic" label="비밀번호 (6자 이상)" variant="filled" type="password"
                InputProps={{
                  style: { backgroundColor: 'whitesmoke'}
                }}
                style={{ marginTop: '3%'}} />
            }
          />
        </FormControl>
        <Button type="submit"
          variant="contained" className="form-button" style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>계정 생성하기</Button>
      </form>
    </Grid>
  )
}

export default SignUp;