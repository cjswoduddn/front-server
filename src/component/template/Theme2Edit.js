import React from 'react';
import { useForm } from 'react-hook-form';
import './Theme2.css';
import {Box, Grid, Tab, Tabs, Typography} from "@material-ui/core";
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
import {Link} from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
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

const Theme2Edit = () =>{
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
const [state, setState] = React.useState({
    name: "John Doe",
    email: "john.doe@test.com"
  });

  const handleInputChange = e => {
    setState({
      [e.target.name]: e.target.value
    });
  };


    return (
        <Grid container justify="center" alignItems="center" style={{marginTop: '9%', textAlign: 'center'}}>
            <Grid item xs={12}>
            <Typography variant="h6" style={{fontSize: 30, fontWeight: 600, marginBottom: 30}}>Y. S. Creator Design</Typography></Grid>
            <Tabs value={value} onChange={handleChange} style={{display: 'inline'}}>
                <Tab label="Illustrator" {...a11yProps(0)} />
                <Tab label="about" {...a11yProps(1)} />
                <Tab label="contact" {...a11yProps(2)} />
            </Tabs>
            <Grid item container direction="row" style={{marginLeft: '10%', marginRight: '10%', textAlign: 'center'}}>
                <TabPanel value={value} index={0}>
                    <Grid item container direction="row" style={{textAlign: 'center'}}>
                        <Grid item xs={4}>
                            <Link to="/t2"><img className="card" width="100%" src={t2_1} /></Link>
                            <img className="card" width="100%" src={t2_4} />
                            <img className="card" width="100%" src={t2_2} />
                        </Grid>
                        <Grid item xs={4}>
                            <img className="card" width="100%" src={t2_7} />
                            <img className="card" width="100%" src={t2_5} />
                            <img className="card" width="100%" src={t2_8} />
                        </Grid>
                        <Grid item xs={4}>
                            <img className="card" width="100%" src={t2_3} />
                            <img className="card" width="100%" src={t2_6} />
                            <img className="card" width="100%" src={t2_9} />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} style={{width: '100%'}}>
                    <Grid item container alignItems="center" direction="row" style={{textAlign: 'center', height: 400}}>
                        <Grid item xs={6}>
                            <img src={avatar} width="50%" />
                        </Grid>
                        <Grid item xs={6}>
                            <h1>asd</h1>
                            <div>
      <input
        type="text"
        className="name"
        name="name"
        value={state.name}
        onChange={handleInputChange}
      />

      <input
        type="text"
        className="email"
        name="email"
        value={state.email}
        onChange={handleInputChange}
      />
    </div>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} style={{width: '100%'}}>
                    <Grid item container direction="row" style={{textAlign: 'center', height: 1000}}>
                        <Grid item xs={12}>
                        Item Twoasfadsfasdfdasfads
                        Item Twoasfadsfasdfdasfads
                        Item Twoasfadsfasdfdasfads
                        Item Twoasfadsfasdfdasfads
                        </Grid>
                    </Grid>
                </TabPanel>



            </Grid>
        </Grid>

    );
}

export default Theme2Edit;
