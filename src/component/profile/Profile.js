import React, {useRef} from 'react';
import {Button, FormControl, Grid, TextField} from "@material-ui/core";
import {useForm} from 'react-hook-form';
import axios from "axios";
import {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom';


const Profile = () => {
    const methods = useForm();
    const {register, handleSubmit, reset, control, watch, errors} = methods;
    const password = useRef({});
    password.current = watch("password", "");
    const [data, setData] = useState();
    const TEMPLATE_BASE_URL = 'http://api.appeal.icu/member';

    useEffect(async() => {
        const data = await axios({
            method: 'get',
            withCredentials: true,
            url: TEMPLATE_BASE_URL
        });
        setData(data);
    }, [])

    const onSubmit = () => {
        console.log("adsf")
    }

    const account = useLocation().state.account;
    // console.log(account);

    return (
        <Grid container justify="center" alignItems="center" style={{height: '100vh'}}>
            <Grid item xs={4} style={{textAlign: 'center'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl style={{width: '100%'}}>
                        {/*<Controller*/}
                        {/*    name="name"*/}
                        {/*    control={control}*/}
                        {/*    as={*/}
                                <TextField
                                    // label={data.email}
                                    name={account.name}
                                    variant="filled"
                                    type="text"
                                    style={{marginTop: '3%'}}/>
                            {/*}*/}
                        {/*/>*/}
                    </FormControl>
                    <FormControl style={{width: '100%'}}>
                        {/*<Controller*/}
                        {/*    name="password"*/}
                        {/*    control={control}*/}
                        {/*    as={*/}
                        <TextField
                            label="기존 패스워드"
                            name="password"
                            variant="filled"
                            type="password"
                            style={{marginTop: '3%'}}/>
                        {/*}*/}
                        {/*/>*/}
                    </FormControl>
                    <FormControl style={{width: '100%'}}>
                        {/*<Controller*/}
                        {/*    name="password"*/}
                        {/*    control={control}*/}
                        {/*    as={*/}
                        <TextField
                            label="패스워드"
                            name="password"
                            variant="filled"
                            type="password"
                            style={{marginTop: '3%'}}/>
                        {/*}*/}
                        {/*/>*/}
                    </FormControl>
                    <FormControl style={{width: '100%'}}>
                        {/*<Controller*/}
                        {/*    name="password_repeat"*/}
                        {/*    control={control}*/}
                        {/*    as={*/}
                        <TextField
                            label="패스워드 확인"
                            name="password_repeat"

                            variant="filled"
                            type="password"
                            ref={register({
                                validate: value =>
                                    value === password.current || "The passwords do not match"
                            })}
                            style={{marginTop: '3%'}}/>
                        {/*}*/}
                        {/*/>*/}
                        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

                    </FormControl>

                    <Button onClick={handleSubmit(onSubmit)} type="submit" variant="contained" className="form-button"
                            style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>확인</Button>
                </form>
            </Grid>
        </Grid>
    );
}

export default Profile;