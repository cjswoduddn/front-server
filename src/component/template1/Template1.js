import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
    Button, FormControl, FormControlLabel,
    Grid,
    Paper, Radio, RadioGroup,
    Table,
    TableBody, TableCell, TableContainer,
    TableHead, TableRow,
    Typography
} from '@material-ui/core';
import CustomTextField from "../template/CustomTextField";
import axios from "axios";

const Template1 = () => {
    const TEMPLATE_BASE_URL = 'http://api.appeal.icu/templateone';
    // const TEMPLATE_BASE_URL = 'http://localhost:8080/templateone';

    const {handleSubmit, register, errors} = useForm();
    const [picture, setPicture] = useState('');
    const [portfolioCommon, setPortfolioCommon] = useState({});

    const onChangePicture = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]));
    };

    const onSubmit = (data) => {
        console.log(data);
        const form = new FormData();
        for (const [key, value] of Object.entries(data)) {
            if (key === "portfolio") {
                for (const [k, v] of Object.entries(value)) {
                    if (k === "thumbnail") {
                        if(v[0] == null) continue;
                        form.append("portfolio." + k, v[0]);
                    } else {
                        form.append("portfolio." + k, v);
                    }
                }
            } else if (key === "careers") {
                let idx = 0;
                value.map(item => {
                    let myKey = key + `[${idx++}].`;
                    for (const [k, v] of Object.entries(item)) {
                        form.append(myKey + k, v);
                    }
                })
            } else if (key === 'certificates') {
                let idx = 0;
                value.map(item => {
                    let myKey = key + `[${idx++}].`;
                    for (const [k, v] of Object.entries(item)) {
                        form.append(myKey + k, v);
                    }
                })
            } else if (key === 'militaryStatus') {
                console.log(value);
            } else {
                form.append(key, value);
            }
        }

        axios({
            method: 'post',
            withCredentials: true,
            headers: {
                'Content-Type': `multipart/form-data`
            },
            url: TEMPLATE_BASE_URL,
            data: form
        })
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row" alignItems="center" justify="center"
                  style={{marginTop: 102, textAlign: "center", paddingLeft: '15%', paddingRight: '15%'}}>
                <Grid item xs={4}>
                    {picture ?
                        <img src={picture} width="80%"/> :
                        <></>
                    }
                    <Button variant="contained" component="label" onChange={onChangePicture}>
                        Image Upload
                        <input ref={register} name="portfolio.thumbnail" type="file" hidden/>
                    </Button>
                </Grid>
                <Grid container xs={8} style={{textAlign: 'left'}}>
                    <Grid item xs={5}>
                        <Grid item xs={12}>
                            <CustomTextField
                                register={register}
                                errors={errors.name}    // 사용 errors.[사용할 filed name]
                                name="portfolio.name" label="이름" required={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField
                                register={register}
                                errors={errors.eng_name}
                                name="englishName" label="영어이름" required={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <Grid item xs={12}>
                            <CustomTextField
                                register={register}
                                errors={errors.birth}
                                name="birth" label="생년월일" required={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField
                                register={register}
                                errors={errors.phone}
                                name="phone" label="휴대폰" required={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                            register={register}
                            errors={errors.address}
                            name="address" label="거주지(현주소)" required={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                            register={register}
                            errors={errors.email}
                            name="email" label="이메일" required={true}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', marginBottom: 24}}>
                    {/*<Paper variant="outlined"></Paper>*/}
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6"
                                    style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>학 력 사
                            항</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right" style={{width: '20%'}}>졸업일</TableCell>
                                    <TableCell align="right">학교명</TableCell>
                                    <TableCell align="right">전 공</TableCell>
                                    <TableCell align="right" style={{width: '13%'}}>졸업여부</TableCell>
                                    <TableCell align="right" style={{width: '10%'}}>성 적</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* HighSchool */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} defaultValue=" " required={false}
                                                         name="highschoolDate" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highschoolName" required={false}
                                                         label="고등학교"/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highschoolMajor" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highschoolGraduation" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highschoolScore" label=""/>
                                    </TableCell>
                                </TableRow>
                                {/* University */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="collegeDate" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="collegeName" label="대학교"/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="collegeMajor" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="collegeGraduation" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="collegeScore" label=""/>
                                    </TableCell>
                                </TableRow>
                                {/* GraduateSchool */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateschoolDate" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateschoolName" label="대학원"/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateschoolMajor" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateschoolGraduation" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateschoolScore" label=""/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', marginBottom: 24}}>
                    {/*<Paper variant="outlined"></Paper>*/}
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6"
                                    style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>경 력 사
                            항</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right" style={{width: '20%'}}>근무기간</TableCell>
                                    <TableCell align="right" style={{width: '35%'}}>회사명</TableCell>
                                    <TableCell align="right">직 위</TableCell>
                                    <TableCell align="right">담당업무</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Career1 */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[0].date" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[0].name" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[0].title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[0].postion" label=""/>
                                    </TableCell>
                                </TableRow>
                                {/* Career2 */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[1].date" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[1].name" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[1].title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="careers[1].postion" label=""/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6"
                                    style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>자 격 사
                            항</Typography>
                        {/**/}
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right" style={{width: '20%'}}>취득일</TableCell>
                                    <TableCell align="right">종 류</TableCell>
                                    <TableCell align="right" style={{width: '30%'}}>발 령 처</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* certificate1 */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="certificates[0].date" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certificates[0].title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certificates[0].origin" label=""/>
                                    </TableCell>
                                </TableRow>
                                {/* certificate2 */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="certificates[1].date" label=""
                                                         required={false}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certificates[1].title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certificates[1].origin" label=""/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={5} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6"
                                    style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>병 역 사
                            항</Typography>
                        {/**/}
                        <FormControl component="fieldset" style={{margin: 20}}>
                            <RadioGroup row name="militaryStatus" defaultValue="init">
                                <FormControlLabel value="fulfilled" control={<Radio color="primary"/>} label="군필"/>
                                <FormControlLabel value="unfulfilled" control={<Radio color="primary"/>} label="미필"/>
                                <FormControlLabel value="Exempted" control={<Radio color="primary"/>} label="면제"/>
                                <FormControlLabel value="etc" control={<Radio color="primary"/>} label="기타"/>
                            </RadioGroup>
                        </FormControl>
                    </TableContainer>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined" style={{height: 116}}>
                        <Typography variant="h6"
                                    style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>기 타 사
                            항</Typography>
                        {/**/}
                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">submit</Button>
                </Grid>

            </Grid>
        </form>
    );
}

export default Template1;
