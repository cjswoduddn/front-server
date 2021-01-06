import React, {useState} from 'react';
import './SignIn.css'
import signin_back from '../../factory/images/signin_back3.jpg';
import {Grid, TextField, Typography, Button, FormControl} from "@material-ui/core";

const SignIn = () =>{
    const [mode, setMode] = useState(0);
    return (
      <Grid container direction="col" justify="center" alignItems="center"
          style={{backgroundImage: `url(${signin_back})`, height: '100vh', textAlign: 'center'}}>
          <Grid item xs={3} style={{color: 'white'}}>
              <Grid container direction="row" alignItems="center">
                  <Grid item xs={6}>
                      {mode === 0 ? (<Typography variant="h6" style={{textAlign: 'left'}}>로그인</Typography>) :
                       mode === 1 ? (<Typography variant="h6" style={{textAlign: 'left'}}>회원가입</Typography>) :
                                    (<Typography variant="h6" style={{textAlign: 'left'}}>비밀번호 찾기</Typography>)
                      }
                  </Grid>
                      { mode === 0 ? (
                          <Grid item xs={6}>
                              <Button onClick={() => setMode(2)} style={{padding: 0}}>
                                  <Typography variant="overline" style={{textAlign: 'right', fontWeight: 500, color: 'grey'}}> 비밀번호를 잊어버리셨나요?</Typography>
                              </Button>
                          </Grid>) : <Grid item xs={6}></Grid>
                      }

                      {mode === 0 ? <Login/> :
                       mode === 1 ? <SignUp/> :
                                    <FindPassword/>}

                       <Grid item xs={12}>
                      {mode === 0 ?
                          <Button onClick={() => setMode(1)} style={{padding: 0}}>
                              <Typography variant="overline" style={{width: '100%', textAlign: 'right', fontWeight: 500, color: 'grey', position: 'right'}}>계정 생성하기</Typography>
                          </Button> : <></>
                      }
                       </Grid>
              </Grid>
          </Grid>
      </Grid>

  );
}

const Login = React.memo(function Login() {
  console.log("login");
  return<Grid item xs={12}>
            <form onSubmit>
                <FormControl style={{width: '100%'}}>
                    <TextField id="filled-basic" label="이메일 (example@gmail.com)" variant="filled" type="email"
                         fullWidth="true"
                         InputProps={{
                           style: { backgroundColor: 'whitesmoke'}
                         }}
                         name="name"
                         style={{ marginTop: '3%'}} />
                </FormControl>
                    <TextField id="filled-basic" label="비밀번호" variant="filled" type="password"
                         fullWidth="true"
                         InputProps={{
                           style: { backgroundColor: 'whitesmoke'}
                         }}
                         style={{ marginTop: '3%'}} />
                    <Button variant="contained" className="form-button" style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>로그인</Button>

            </form>
        </Grid>;
});

const SignUp = React.memo(function SignUp() {
  console.log("login");
  return<Grid item xs={12}>
            <form>
              <FormControl style={{width: '100%'}}>
                  <TextField id="filled-basic" label="이름 (2자 이상)" variant="filled" type="name"
                         fullWidth="true"
                         InputProps={{
                           style: { backgroundColor: 'whitesmoke'}
                         }}
                         style={{ marginTop: '3%'}} />
              </FormControl>
              <FormControl style={{width: '100%'}}>
                  <TextField id="filled-basic" label="이메일 (example@gamil.com)" variant="filled" type="email"
                         fullWidth="true"
                         InputProps={{
                           style: { backgroundColor: 'whitesmoke'}
                         }}
                         style={{ marginTop: '3%'}} />
              </FormControl>
              <FormControl style={{width: '100%'}}>
                  <TextField id="filled-basic" label="비밀번호 (6자 이상)" variant="filled" type="password"
                         fullWidth="true"
                         InputProps={{
                           style: { backgroundColor: 'whitesmoke'}
                         }}
                         style={{ marginTop: '3%'}} />
              </FormControl>
              <Button onClick={refreshPage} variant="contained" className="form-button" style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>계정 생성하기</Button>
            </form>
        </Grid>;
});

const FindPassword = React.memo(function FindPassword() {
  console.log("forget password");
  return<Grid item xs={12}>
            <form>
              <FormControl style={{width: '100%'}}>
                    <TextField id="filled-basic" label="이메일 (example@gmail.com)" variant="filled" type="email"
                         fullWidth="true"
                         InputProps={{
                           style: { backgroundColor: 'whitesmoke'}
                         }}
                         style={{ marginTop: '3%'}} />
              </FormControl>
              <Button onClick={refreshPage} variant="contained" className="form-button" style={{marginTop: '3%', fontSize: '18px', borderRadius: '30px'}}>확인</Button>
            </form>
        </Grid>;
});

function refreshPage() { window. location. reload(false); }

export default SignIn;
