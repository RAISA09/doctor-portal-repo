import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../../Appointment/Booking/Booking'



const AvilableAppointment = ({ date }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('/appointmentTime.json')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 4 }}>Avilable Appointments on {date.toDateString()} </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvilableAppointment;