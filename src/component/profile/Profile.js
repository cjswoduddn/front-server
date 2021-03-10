import React from 'react';
import {Button, FormControl, Grid, TextField} from "@material-ui/core";
import {Controller} from "react-hook-form";
import {useForm} from 'react-hook-form';


const Profile = () => {
    const methods = useForm();
    const {handleSubmit, reset, control} = methods;

    const onSubmit = () => {
        console.log("adsf")
    }

    return (
        <Grid container justify="center" alignItems="center" style={{height: '100vh'}}>
            <Grid item xs={4} style={{textAlign: 'center'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl style={{width: '100%'}}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{required: "This is requierd", minLength: 2}}
                            as={
                                <TextField
                                    id="login-email"
                                    label="이메일 (example@gmail.com)"
                                    variant="filled"
                                    type="email"
                                    InputProps={{
                                        style: {backgroundColor: 'whitesmoke'}
                                    }}
                                    style={{marginTop: '3%'}}/>
                            }
                        />
                    </FormControl>
                    <FormControl style={{width: '100%'}}>
                        <Controller
                            name="password"
                            control={control}
                            rules={{required: "This is requierd", minLength: 2}}
                            as={
                                <TextField
                                    id="login-password"
                                    label="비밀번호"
                                    variant="filled"
                                    type="password"
                                    InputProps={{
                                        style: {backgroundColor: 'whitesmoke'}
                                    }}
                                    style={{marginTop: '3%'}}/>
                            }
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" className="form-button"
                            style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>로그인</Button>
                </form>
            </Grid>
        </Grid>
    );
}

export default Profile;