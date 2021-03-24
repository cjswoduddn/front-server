import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './Template3.css';
import {Box, Button, Grid, Tab, TableCell, Tabs, TextField, Typography} from "@material-ui/core";
import avatar from '../../factory/images/t2/avatar.jpg';
import plus from '../../factory/images/plus2.png';
import CustomTextField from "../template/CustomTextField";
import Picture from "./Picture";

const TEMPLATE_BASE_URL = 'http://ec2-3-35-145-52.ap-northeast-2.compute.amazonaws.com:8080/templatethree';

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

const Template3 = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [picture, setPicture] = useState({
        key: 0,
        items: [
            {
                id: 0,
                thumbnail: undefined
            }
        ]
    });
    const addPicture = () => {
        setPicture({
            key: picture.key + 1,
            items: picture.items.concat({
                id: picture.key + 1,
                thumbnail: undefined,
                previewThumbnail: undefined
            })
        })
    }

    const removePicture = (id) => {
        setPicture({key: picture.key, items: picture.items.filter(item => item.id !== id)})
    }

    const updatePicture = (id, data) => {
        setPicture({
            key: picture.key,
            items: picture.items.map(item => id === item.id ? {...item, ...data} : item)
        })
    }

    const {handleSubmit, register, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justify="center" alignItems="center" style={{marginTop: '9%', textAlign: 'center'}}>

                <Grid item xs={12} alignItems="center" style={{textAlign: 'center'}}>
                    <div style={{width: '30%', margin: 'auto', marginBottom: 25}}>
                        <CustomTextField register={register} name="title" label="title을 작성해주세요."/>
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
                            {picture.items.map(item => (
                                <Grid item xs={4}>
                                    <Picture key={item.id} field={item} updatePicture={updatePicture}
                                             removePicture={removePicture}/>
                                </Grid>
                            ))}
                            <Grid item xs={4}>
                                <Button variant="outlined" size="large" onClick={addPicture}
                                        style={{
                                            marginTop: '10%',
                                            width: '50%',
                                            height: '50%',
                                            backgroundImage: `url(${plus})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            border: 'none'
                                        }}
                                ></Button>
                            </Grid>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={4}></Grid>
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

export default Template3;
