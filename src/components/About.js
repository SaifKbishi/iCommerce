import React from 'react';
import {Container, Box, Typography,Paper} from '@mui/material/';

const About = () => {
  return (
    // <Container maxWidth={false} sx={{boxShadow: 3, mt:10, width:'800px',
    //   pb:2,height:'91.2vh', display:'flex', flex:'1 0 auto', 
    //   justifyContent:'center'}} className="about">
    <Container maxWidth={false} sx={{height:'91.2vh', display:'flex', flex:'1 0 auto', justifyContent:'center'}} className="about">
      <Box 
        sx={{
          display: 'flex',          
          justifyContent:'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            mt:5,
            width: 600,
            height: 'fit-content',
          },
          mt:15,
          mb:10,
          height: 'fit-content',
          py: 2,
          width:{xs:'100%', md:'800px'}
        }}
      >
        <Paper elevation={3} sx={{p:1, backgroundColor:'#c2cad0', width:'90%'}}>
          <Typography variant='h4'>Who am I </Typography>
        </Paper >
        <Paper elevation={3} sx={{p:1, backgroundColor:'#c2cad0', width:'90%'}}>
          <Typography >This is my Frontend e-ecommerce site project, to demo simplicity use of React-Redux. 
          And bring into action the use of MUI styling.</Typography>
        </Paper >     
        <Paper elevation={2} sx={{p:1, backgroundColor:'#c2cad0', width:'90%'}}>
          <Typography >Take the visitors on your website to a trip down memory lane, and give them an insight to the history behind your store. Here, you can show them where, how, and when you started, and everything your business has accomplished on the way. This is your chance to share your relevant milestones and achievements relating to your business in an engaging way.

You can even choose to present your history to your viewers in the form of a timeline, which allows you to display a large amount of information in a visually engaging manner. Your customers or potential customers might be interested in seeing how you grew over the years.</Typography>
        </Paper >     
      </Box>
    </Container>
  );
};

export default About;