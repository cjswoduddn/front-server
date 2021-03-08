import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Button,
    Card,
    CardContent, FormControl, FormControlLabel, FormLabel,
    Grid,
    Paper, Radio, RadioGroup,
    Table,
    TableBody, TableCell, TableContainer,
    TableHead, TableRow,
    TextField,
    Typography
} from '@material-ui/core';
import CustomTextField from "../template/CustomTextField";

const Template1 = () =>{
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row" alignItems="center" justify="center"
                  style={{marginTop: 102, textAlign: "center", paddingLeft: '15%', paddingRight: '15%'}}>
                <Grid item xs={4}>
                    <Button variant="contained" component="label">
                        Image Upload
                        <input type="file" hidden/>
                    </Button>
                </Grid>
                <Grid container xs={8} style={{textAlign: 'left'}}>
                    <Grid item xs={5}>
                        <Grid item xs={12}>
                            {/* Customize TextField */}
                            {/*<FormControl className="input">*/}
                            {/*    <TextField*/}
                            {/*        onChange={handleChange}*/}
                            {/*        id="name" name="name"*/}
                            {/*        label="이름 *"*/}
                            {/*        variant="outlined"*/}
                            {/*        inputRef={*/}
                            {/*            register({*/}
                            {/*                required: true, minLength: 2 })}*/}
                            {/*        error={errors.name ? true : false}*/}
                            {/*        helperText={errors.name ?*/}
                            {/*            errors.name.type === "required" ? "This field is required" :*/}
                            {/*            "min length is 2 characters" : null}*/}
                            {/*    />*/}
                            {/*</FormControl>*/}
                            <CustomTextField
                                register={register}
                                errors={errors.name}    // 사용 errors.[사용할 filed name]
                                name="name" label="이름" required={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField
                                register={register}
                                errors={errors.eng_name}
                                name="eng_name" label="영어이름" required={true}
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
                                        <CustomTextField register={register} defaultValue=" " required={false} name="highSchoolDate" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highSchoolName" required={false} label="고등학교"/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highSchoolMajor" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highSchoolGraduation" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="highSchoolScore" label=""/>
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
                                        <CustomTextField register={register} name="graduateSchoolDate" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateSchoolName" label="대학원"/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateSchoolMajor" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateSchoolGraduation" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="graduateSchoolScore" label=""/>
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
                                {/* Career1 */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="career1Date" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="career1Name" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="career1Title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="career1Postion" label=""/>
                                    </TableCell>
                                </TableRow>
                                {/* Career2 */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="career2Date" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="career2Name" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="career2Title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="career2Postion" label=""/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6" style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>자 격 사 항</Typography>
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
                                        <CustomTextField register={register} name="certificate1Date" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certiificate1Title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certiificate1Origin" label=""/>
                                    </TableCell>
                                </TableRow>
                                {/* certificate2 */}
                                <TableRow>
                                    <TableCell>
                                        <CustomTextField register={register} name="certificate2Date" label="" required={false}/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certiificate2Title" label=""/>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTextField register={register} name="certiificate2Origin" label=""/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={5} style={{textAlign: 'left', marginBottom: 24}}>
                    <TableContainer component={Paper} variant="outlined">
                        <Typography variant="h6" style={{paddingLeft: 10, backgroundColor: '#081328', color: 'whitesmoke'}}>병 역 사 항</Typography>
                {/**/}
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
