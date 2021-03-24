import React from 'react';
import { Link } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Grid from "@material-ui/core/Grid";
import back3 from '../../factory/images/home_back1.gif';
import LightButton from "./LightButton";
import ls2 from '../../factory/images/home_back2.jpg';
import {Typography} from "@material-ui/core";
import sang from '../../factory/images/sang.png';
import min from '../../factory/images/min.png';
import woo from '../../factory/images/woo.png';
import logo from '../../factory/images/logo.png';

const Home = () => (
  <>
      <Typography style={{flexGrow: 1}}>
      <Link to="/">
        <img onClick src={logo} style={{top: 0, height: '10%', position: "fixed", zIndex: 1, margin: '1%'}}></img>
      </Link>
          </Typography>
      <ReactFullpage
          scrollingSpeed = {800} navigation
          render={({ state, fullpageApi }) => {
              return (
                  <ReactFullpage.Wrapper>
                      <div className="section"
                          style={{backgroundImage: `url(${back3})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '1em'}}>

                          <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: '75vh'}}>
                              <Grid item xs={5}>
                                  <Link to="/template">
                                      <LightButton />
                                  </Link>
                              </Grid>
                          </Grid>
                      </div>

                      <div className="section" style={{backgroundColor: 'rgb(235, 234, 229)', padding: '1em',}}>
                          <Grid container direction="row" justify="center" alignItems="center" style={{minHeight: '75vh'}}>
                              <Grid item xs={5} style={{marginRight: '5%'}}>
                                  <Grid container direction="column">
                                      <Grid item>
                                          <Typography variant="h2" style={{float: 'right', fontWeight: 900}}>FEF</Typography>
                                      </Grid>
                                      <Grid item>
                                          <Typography variant="h4" style={{float: 'right', fontWeight: 900}}>Fast Easy Free</Typography>
                                      </Grid>
                                  </Grid>
                              </Grid>
                              <Grid item xs={5} style={{marginTop: '1%'}}>
                                  <img src={ls2} width='100%' />
                              </Grid>
                          </Grid>
                      </div>

                      <div className="section" style={{backgroundColor: 'rgb(25,25,25)', padding: '1em',}}>

                <Grid container direction="row" justify="center" alignItems="center" style={{textAlign: "center"}}>
                    <Grid item xs={12} style={{marginBottom: '2%'}}>
                        <Typography variant="h3" style={{fontSpacing: 5, fontWeight: 900, padding: 0, color: 'white', fontVariant: 'small-caps'}}>creator team</Typography>
                    </Grid>

                    <Grid item xs={3} style={{marginLeft: '8%'}}>
                        <img src={sang} width='100%' style={{borderRadius: '50%'}} />
                        <Typography variant="h4" style={{color: 'white', fontVariant: 'small-caps'}}>jisang yu</Typography>
                        <Typography variant="h5" style={{color: 'white', fontVariant: 'small-caps'}}>economics</Typography>
                        <Typography variant="h6" style={{color: 'white', fontVariant: 'small-caps'}}>jisang yu</Typography>
                    </Grid>

                    <Grid item xs={3} style={{marginRight: '3%', marginLeft: '3%'}}>
                        <img src={woo} width='100%' style={{borderRadius: '50%'}} />
                        <Typography variant="h4" style={{color: 'white', fontVariant: 'small-caps'}}>youngwoo choi</Typography>
                        <Typography variant="h5" style={{color: 'white', fontVariant: 'small-caps'}}>computer science</Typography>
                        <Typography variant="h6" style={{color: 'white', fontVariant: 'small-caps'}}>youngwoo choi</Typography>
                    </Grid>

                    <Grid item xs={3} style={{marginRight: '8%'}}>
                        <img src={min} width='100%' style={{borderRadius: '50%'}} />
                        <Typography variant="h4" style={{color: 'white', fontVariant: 'small-caps'}}>minho choi</Typography>
                        <Typography variant="h5" style={{color: 'white', fontVariant: 'small-caps'}}>computer science</Typography>
                        <Typography variant="h6" style={{color: 'white', fontVariant: 'small-caps'}}>minho choi</Typography>
                    </Grid>

                </Grid>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default Home;
