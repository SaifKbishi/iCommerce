import React from 'react';
import {Container, Box, Typography, Paper, TextField, Button} from '@mui/material/';


const Contact = () => {
  return (
    <Container sx={{boxShadow: 3, width:'800px', mt:15}}>
      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 600,
            height: '100%',
          },
        }}
      >
        <Paper elevation={3} sx={{p:1}}>
          <Typography variant='h4'>Contact us form</Typography>
        </Paper >
        <TextField sx={{width: 400}}
          required
          id="outlined-required"
          label="Full Name"
          defaultValue="Full Name"
        />
        <TextField sx={{width: 400}}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Full Name"
        />
        <TextField sx={{width: 400}}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email:"
        />
        <TextField
          id="standard-textarea"
          label="Your message"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <Button variant="contained">Submit</Button>
      </Box>
    </Container>
  );
};

export default Contact;

