import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg1 from '../../../images/bg.png'
import banner from '../../../images/chair.png'
import { Button, Container, Typography } from '@mui/material';


const bannnerBg = {
    background: `url(${bg1})`,

}

const verticalCenter = {
    display: 'flex',
    alignItens: 'center',
    height: '400'
}

const Banner = () => {
    return (
        <Container style={bannnerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'gray', my: 3, fontSize: 13, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis eius deleniti odio modi accusamus eos, amet minus possimus dolore.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={banner} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;