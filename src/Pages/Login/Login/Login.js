import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{mt: 8}} container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width: '75%', m: 1}}
                    id="standard-basic" 
                    label="Your Email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />
                    <TextField 
                    sx={{width: '75%', m: 1}}
                    id="standard-basic" 
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />
                    <Button sx={{width: '75%', m: 1}} type="submit" variant="contained">Login</Button>
                    
                    <NavLink 
                    style={{textDecoration: 'none'}}
                    to='/register'>
                    <Button variant="text">New user? Please Register</Button>
                    </NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
      
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;