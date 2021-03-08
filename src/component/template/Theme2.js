import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './Theme2.css';
import {Box, Button, Grid, Tab, TableCell, Tabs, TextField, Typography} from "@material-ui/core";
import t2_1 from '../../factory/images/t2/t2-1.png';
import t2_2 from '../../factory/images/t2/t2-2.png';
import t2_3 from '../../factory/images/t2/t2-3.png';
import t2_4 from '../../factory/images/t2/t2-4.png';
import t2_5 from '../../factory/images/t2/t2-5.png';
import t2_6 from '../../factory/images/t2/t2-6.png';
import t2_7 from '../../factory/images/t2/t2-7.png';
import t2_8 from '../../factory/images/t2/t2-8.png';
import t2_9 from '../../factory/images/t2/t2-9.png';
import avatar from '../../factory/images/t2/avatar.jpg';
import edit from '../../factory/images/edit.png';
import upload from '../../factory/images/upload.png';
import {Link} from "react-router-dom";
import CustomTextField from "./CustomTextField";

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}

        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Theme2 = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
    };


    const {handleSubmit, register, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justify="center" alignItems="center" style={{marginTop: '9%', textAlign: 'center'}}>

                <Grid item xs={12} alignItems="center" style={{textAlign: 'center'}}>
                    <div style={{width: '50%'}}>
                        <input defaultValue="Y. S. Creator Design" name="title" register={register}
                               style={{border: 'none', fontSize: 30, fontWeight: 600, textAlign: 'center', marginBottom: 30}}/>
                        <CustomTextField register={register} name="title" label="" style={{width: '60%'}}/>

                        {/*<div className="TextField-without-border-radius">*/}
                        {/*    <TextField className="inputCus" defaultValue="Y. S. Creator Design"*/}
                        {/*                variant="outlined"*/}
                        {/*                InputProps={{ style: {fontSize: 30, fontWeight: 600, textAlign: 'center' } }}*/}
                        {/*                           hintStyle={{ textAlign: 'center' }}*/}
                        {/**/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<Typography variant="h6" style={{fontSize: 30, fontWeight: 600, marginBottom: 30}}>Y. S. Creator*/}
                        {/*    Design</Typography>*/}
                    </div>

                </Grid>
                <Tabs value={value} onChange={handleChange} style={{display: 'inline'}}>
                    <Tab label="Illustrator" {...a11yProps(0)} />
                    <Tab label="about" {...a11yProps(1)} />
                    <Tab label="contact" {...a11yProps(2)} />
                </Tabs>
                <Grid item container direction="row"
                      style={{marginLeft: '10%', marginRight: '10%', textAlign: 'center'}}>
                    <TabPanel value={value} index={0}>
                        <Grid item container direction="row" style={{textAlign: 'center'}}>
                            <Grid item xs={4}>
                                <div>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <img src={upload} width="50%"/>
                                    </label><input id="file-upload" type="file" onChange={onChangePicture}/>
                                    <img className="card" width="100%"
                                         src={picture ? (picture) : (t2_1)}
                                         onChange={onChangePicture}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <img src={upload} width="50%"/>
                                    </label><input id="file-upload" type="file" onChange={onChangePicture}/>
                                    <img className="card" width="100%"
                                         src={picture ? (picture) : (t2_2)}
                                         onChange={onChangePicture}
                                    />
                                </div>
                            </Grid><Grid item xs={4}>
                            <div>
                                <label htmlFor="file-upload" className="custom-file-upload">
                                    <img src={upload} width="50%"/>
                                </label><input id="file-upload" type="file" onChange={onChangePicture}/>
                                <img className="card" width="100%"
                                     src={picture ? (picture) : (t2_3)}
                                     onChange={onChangePicture}
                                />
                            </div>
                        </Grid>
                            <Grid item xs={4}>
                                <div>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <img src={upload} width="50%"/>
                                    </label><input id="file-upload" type="file" onChange={onChangePicture}/>
                                    <img className="card" width="100%"
                                         src={picture ? (picture) : (t2_4)}
                                         onChange={onChangePicture}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <img src={upload} width="50%"/>
                                    </label><input id="file-upload" type="file" onChange={onChangePicture}/>
                                    <img className="card" width="100%"
                                         src={picture ? (picture) : (t2_5)}
                                         onChange={onChangePicture}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <img src={upload} width="50%"/>
                                    </label><input id="file-upload" type="file" onChange={onChangePicture}/>
                                    <img className="card" width="100%"
                                         src={picture ? (picture) : (t2_6)}
                                         onChange={onChangePicture}
                                    />
                                </div>
                            </Grid>


                            {/*<Grid item xs={4}>*/}
                            {/*    <Link to="/t2"><img className="card" width="100%" src={t2_1} /></Link>*/}
                            {/*    <img className="card" width="100%" src={t2_4} />*/}
                            {/*    <img className="card" width="100%" src={t2_2} />*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={4}>*/}
                            {/*    <img className="card" width="100%" src={t2_7} />*/}
                            {/*    <img className="card" width="100%" src={t2_5} />*/}
                            {/*    <img className="card" width="100%" src={t2_8} />*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={4}>*/}
                            {/*    <img className="card" width="100%" src={t2_3} />*/}
                            {/*    <img className="card" width="100%" src={t2_6} />*/}
                            {/*    <img className="card" width="100%" src={t2_9} />*/}
                            {/*</Grid>*/}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} style={{width: '100%'}}>
                        <Grid item container direction="row" style={{textAlign: 'center', height: 400}}>
                            <Grid item xs={12}>
                            <textarea defaultValue="
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you."
                                      style={{
                                          height: 300,
                                          width: '100%',
                                          border: 'none',
                                          fontSize: 20,
                                          fontWeight: 600,
                                          textAlign: 'center',
                                          overflowY: 'invisible',
                                          overflowX: 'invisible'
                                      }}/>


                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2} style={{width: '100%'}}>
                        <Grid item container alignItems="center" direction="row" style={{textAlign: 'center'}}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={5}>
                                <img src={avatar} width="70%" style={{borderRadius: '50%'}}/>
                            </Grid>
                            <Grid item xs={5} style={{textAlign: 'left'}}>
                                <Typography variant="h3">Peder Elias</Typography>
                                <Typography variant="overline" style={{fontSize: 25}}>Musical, Artist</Typography>
                                <br/><br/><br/>
                                <Grid container alignItems="center">
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle2"
                                                    style={{fontWeight: 600, fontSize: 18}}>Phone</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="overline" style={{fontSize: 15}}>123-4567-8900</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle2"
                                                    style={{fontWeight: 600, fontSize: 18}}>Email</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="overline"
                                                    style={{fontSize: 15}}>Info@gmail.com</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle2"
                                                    style={{fontWeight: 600, fontSize: 18}}>Address</Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="overline" style={{fontSize: 15}}>San Francisco,
                                            CA</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1}></Grid>

                        </Grid>
                    </TabPanel>


                </Grid>
                <Button type="submit" variant="contained" color="primary">submit</Button>
            </Grid>
        </form>
    );
}

export default Theme2;
