import React from 'react';
import {Container, Box, Typography, Paper, TextField, Button} from '@mui/material/';


const Contact = () => {
  return (
    <div style={{height: '80.8vh', paddingTop:'100px'}} className="contact">
    <Container sx={{boxShadow: 3, width:'800px', mt:10, p:5}}>
      <Box 
        sx={{
          display: 'flex',
          justifyContent:'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 600,
            height: '100%',
          },
        }}
      >
        <Paper elevation={3} sx={{p:1, backgroundColor:'#c2cad0', width:'90%'}}>
          <Typography variant='outlined' sx={{fontSize:40}}>Get in touch</Typography>
        </Paper >
        <TextField sx={{p:1, backgroundColor:'#c2cad0', width:'90%'}} id="fullname" label="Full Name" variant="outlined" required/>
        <TextField sx={{p:1, backgroundColor:'#c2cad0', width:'90%'}} id="email" label="Email" variant="outlined" required/>

        <TextField
          sx={{p:1, backgroundColor:'#c2cad0', width:'90%'}}
          id="standard-textarea"
          label=" Your message"
          placeholder="Placeholder"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button variant="contained">Submit</Button>
      </Box>
    </Container>
    </div>
  );
};

export default Contact;

