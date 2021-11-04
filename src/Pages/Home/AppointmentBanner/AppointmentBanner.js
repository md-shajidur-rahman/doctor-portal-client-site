import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(50, 62, 116, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant='h6' style={{color: 'white'}} sx={{ mb: 3, fontWeight: 400}} >
                            Appointment
                        </Typography>
                        <Typography sx={{fontWeight: 600}} variant='h4' style={{color: 'white'}}>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ fontStyle: 'normal' }} style={{color: 'white'}} sx={{ my: 3 }}>
                            You should be able to book or change an appointment following the below button.
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;