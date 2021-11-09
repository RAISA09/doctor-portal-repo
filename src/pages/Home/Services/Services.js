import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';





const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography gutterBottom sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography gutterBottom sx={{ fontWeight: 600, mb: 2, mt: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;