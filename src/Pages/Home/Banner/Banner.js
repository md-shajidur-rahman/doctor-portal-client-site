import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 5 }} style={bannerBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex',  alignItems: 'center', height: 400 }}>
                    <Box sx={{ textAlign: 'left' }}>
                    <Typography variant='h3'>
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography sx={{ fontStyle: 'normal', my: 3 }}>
                        With best facilities and better equipment, you are in safe hands
                    </Typography>
                    <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex',  alignItems: 'center', height: 400 }}>
                    <img style={{width: '350px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;