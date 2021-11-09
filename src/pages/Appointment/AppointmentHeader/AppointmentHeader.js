import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import chair from '../../../images/chair.png'
import Clender from '../../Shared/Clender/Clender';


const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Clender date={date} setDate={setDate}></Clender>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img src={chair} style={{ width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentHeader;