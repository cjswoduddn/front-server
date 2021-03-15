import React from 'react';
import {
    Grid,
    TextField,
    Button,
    FormControl,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText, DialogActions
} from "@material-ui/core";
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const TEMPLATE_BASE_URL = 'http://ec2-3-35-145-52.ap-northeast-2.compute.amazonaws.com:8080/member';

const SignUp = () => {
    const methods = useForm();
    const {handleSubmit, reset, control} = methods;
    const history = useHistory();

    const onSubmit = data => {
        handleClickOpen();
        axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            url: TEMPLATE_BASE_URL,
            data: data
        })
            .then((res) => {
                console.log(res.body);
                // api 활성시 이걸로 바꾸면 됨
                // handleClickOpen();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Dialog
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        history.push('/')
    };


    return (
        <Grid item xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl style={{width: '100%'}}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{required: "This is requierd", minLength: 2}}
                        as={
                            <TextField
                                id="signup"
                                label="이름 (2자 이상)"
                                variant="filled"
                                InputProps={{
                                    style: {backgroundColor: 'whitesmoke'}
                                }}
                                style={{marginTop: '3%'}}/>
                        }
                    />
                </FormControl>
                <FormControl style={{width: '100%'}}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{required: true}}
                        as={
                            <TextField id="filled-basic" label="이메일 (example@gamil.com)" variant="filled" type="email"
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
                        rules={{required: true, minLength: 6}}
                        as={
                            <TextField id="filled-basic" label="비밀번호 (6자 이상)" variant="filled" type="password"
                                       InputProps={{
                                           style: {backgroundColor: 'whitesmoke'}
                                       }}
                                       style={{marginTop: '3%'}}/>
                        }
                    />
                </FormControl>
                <Button type="submit"
                        variant="contained" className="form-button"
                        style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>계정 생성하기</Button>
            </form>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-title">{"인증메일이 발송되었습니다."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        메일함에서 인증메일을 확인하시기 바랍니다.
                        이메일의 인증 버튼을 선택하면 회원가입이 완료됩니다.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        확인
                    </Button>
                </DialogActions>
            </Dialog>

        </Grid>
    )
}

export default SignUp;