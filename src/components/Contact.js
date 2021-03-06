import React from 'react';
import {Container, Box, Typography, Paper, TextField, Button} from '@mui/material/';


const Contact = () => {
  return (
    <Container maxWidth={false} sx={{height:'91.2vh', display:'flex', flex:'1 0 auto', justifyContent:'center'}} className="contact">
      <Box sx={{
          display: 'flex',
          justifyContent:'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,            
            width: 600,
            height: 'fit-content',
          },
          // backgroundColor:'blue',
          mt:15,
          mb:10,
          height: 'fit-content',
          py: 2,
          width:{xs:'100%', md:'800px'}
        }}>
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
  );
};

export default Contact;

