import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: 'Fluoride Treatment',
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: "Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection.",
        img: cavity

    },
    {
        name: 'Teeth Whitening',
        description: "Laser whitening, also known as power whitening, is another type of teeth whitening system that a dentist can provide.",
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ color: 'primary.main', fontWeight: 400, mt: 5  }} variant="h6" component="div">
                        Our Services
                    </Typography>
            <Typography sx={{ fontWeight: 600, mb: 5 }} variant="h4" component="div">
                        Services We Provide
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                        key={service.name}
                        service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;