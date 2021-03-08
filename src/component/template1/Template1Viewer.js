import React from 'react';
import { useForm } from 'react-hook-form';
import image from '../../factory/images/min.png';
import {
    Button,
    Card,
    CardContent, FormControl, FormControlLabel, FormLabel,
    Grid, InputBase,
    Paper, Radio, RadioGroup,
    Table,
    TableBody, TableCell, TableContainer,
    TableHead, TableRow,
    TextField,
    Typography
} from '@material-ui/core';
import CustomTextField2 from "../template/CustomTextField2";

const Template1Viewer = () =>{
    const { handleSubmit, register, errors } = useForm();
    const data = {
        name: '홍길동',
        englishName: 'Hong Gil Dong',
        birth: '2001-01-01',
        phone: '010-1234-5678',
        address: '충청도',
        email: 'hongildong@gmail.com',
        avatar: image,
        highSchoolDate: '2002-01-01',
        highSchoolName: '길동고등학교',
        highSchoolMajor: '무과',
        highSchoolGraduation: '졸업',
        highSchoolScore: '4.0',
        collegeDate: '2003-01-01',
        collegeName: '길동대학교',
        collegeMajor: '정치외교학과',
        collegeGraduation: '졸업',
        collegeScore: '4.5',
        graduateSchoolDate: ' ',
        graduateSchoolName: ' ',
        graduateSchoolMajor: ' ',
        graduateSchoolGraduation: ' ',
        graduateSchoolScore: ' ',
        career1Date: '2004-01-01',
        career1Name: '관청',
        career1Title: ' ',
        career1Postion: ' ',
        career2Date: ' ',
        career2Name: ' ',
        career2Title: ' ',
        career2Postion: ' ',
        certificate1Date: ' ',
        certiificate1Title: ' ',
        certiificate1Origin: ' ',
        certificate2Date: ' ',
        certiificate2Title: ' ',
        certiificate2Origin: ' ',
        militaryCheck: ' '
    }


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row" alignItems="center" justify="center"
                  style={{marginTop: 102, textAlign: "center", paddingLeft: '15%', paddingRight: '15%'}}>
                <Grid item xs={4}>
                    <img width="75%" src={image}/>
                </Grid>
                <Grid container xs={8} style={{textAlign: 'left'}}>
                    <Grid item xs={5}>
                        <Grid item xs={12}>
                            <CustomTextField2
                                register={register} disabled="true"
                                label={data.name} required={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField2
                                register={register} disabled="true"
                                label={data.englishName} required={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <Grid item xs={12}>
                            <CustomTextField2
                                register={register} disabled="true"
                                label={data.birth} required={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField2
                                register={register} disabled="true"
                                label={data.phone} required={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField2
                                register={register} disabled="true"
                                label={data.address} required={true}
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField2
                                register={register} disabled="true"
                                label={data.email} required={true}
                            />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', marginBottom: 24}}>
                    {/*<Paper variant="outlined"></Paper>*/}
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6" style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>학 력 사 항</Typography>
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
                                        <CustomTextField2 register={register} disabled="true" label={data.highSchoolDate}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.highSchoolName}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.highSchoolMajor}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.highSchoolGraduation}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.highSchoolScore}/>
                                    </TableCell>
                                </TableRow>
                                {/* University */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.collegeDate}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.collegeName}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.collegeMajor}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.collegeGraduation}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.collegeScore}/>
                                    </TableCell>
                                </TableRow>
                                {/* GraduateSchool */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.graduateSchoolDate}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.graduateSchoolName}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.graduateSchoolMajor}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.graduateSchoolGraduation}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.graduateSchoolScore}/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', marginBottom: 24}}>
                    {/*<Paper variant="outlined"></Paper>*/}
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6" style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>경 력 사 항</Typography>
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
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career1Date}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career1Name}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career1Title}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career1Postion}/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career2Date}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career2Name}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career2Title}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.career2Postion}/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6" style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>자 격 사 항</Typography>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right" style={{width: '20%'}}>취득일</TableCell>
                                    <TableCell align="right">종 류</TableCell>
                                    <TableCell align="right" style={{width: '30%'}}>발 령 처</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* certificate */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.certificate1Date}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.certiificate1Title}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.certiificate1Origin}/>
                                    </TableCell>
                                </TableRow>
                                {/* certificate */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.certificate2Date}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.certiificate2Title}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField2 register={register} disabled="true" label={data.certiificate2Origin}/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={5} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6" style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>병 역 사 항</Typography>

                        <FormControl component="fieldset" style={{margin: 20}}>
                            <RadioGroup row  name="military_status" defaultValue="init">
                                <FormControlLabel value="fulfilled" control={<Radio color="primary" />} label="군필" />
                                <FormControlLabel value="unfulfilled" control={<Radio color="primary" />} label="미필" />
                                <FormControlLabel value="Exempted" control={<Radio color="primary" />} label="면제" />
                                <FormControlLabel value="etc" control={<Radio color="primary" />} label="기타" />
                            </RadioGroup>
                        </FormControl>
                    </TableContainer>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined" style={{height: 116}}>
                        <Typography variant="h6" style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>기 타 사 항</Typography>

                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">submit</Button>
                </Grid>

            </Grid>
        // </form>
    );
}

export default Template1Viewer;
