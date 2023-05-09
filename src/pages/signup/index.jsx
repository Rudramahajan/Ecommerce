import {
    LoginField,
    LoginCard,
    LoginBox
} from "./style";

import {
    Avatar,
    Box,
    CardHeader,
    CardContent
} from '@mui/material'


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useSingUpForm from "./signupcontroller/useSingUpForm";
import MessageAlert from "components/ui-kit/MessageAlert/index";
import Button from 'components/ui-kit/Button/index'

import { useState } from "react";
import { Paper } from '@mui/material';


const SignUp = () => {

    const [signupSuccess, setSignupSuccess] = useState(false);
    const [openFailedLoginAlert, setOpenFailedLoginAlert] = useState(false);

    const { handleSubmit, values, handleChange, errors, handleBlur, touched } = useSingUpForm({ signupSuccess,setSignupSuccess,setOpenFailedLoginAlert });

    return (
        <>
            <Paper >
                <LoginBox>
                    <LoginCard>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <CardHeader
                            title=' Sign Up' />
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <LoginField
                                    fullWidth
                                    autoComplete="off"
                                    id="outlined-required"
                                    label="Email-ID"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email && touched.email ? errors.email : null}
                                    helperText={errors.email && touched.email ? "not a valid email" : null}
                                />
                                <LoginField
                                    fullWidth
                                    autoComplete="off"
                                    id="outlined-required"
                                    label="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.password && touched.password ? errors.password : null}
                                    helperText={errors.password && touched.password ? "Not a valid password" : null}
                                />
                                <Button content={'Sing Up'} handleFunction={handleSubmit}/>
                            </form>
                        </CardContent>
                    </LoginCard>
                </LoginBox>
            </Paper>
            <MessageAlert open={signupSuccess} setOpen={setSignupSuccess} message={'Signup successful...'} color={'success'} />
            <MessageAlert open={openFailedLoginAlert} setOpen={setOpenFailedLoginAlert} message={'user already exist...'} color={'error'} />
        </>
    )
}

export default SignUp;