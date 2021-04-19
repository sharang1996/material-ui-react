import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  // btn : {
  //   fontSize:60,
  //   backgroundColor:'violet',
  //   '&:hover':{
  //     backgroundColor:'blue',
  //   }
  // },
  // title : {
  //   textDecoration:'underline',
  //   marginBottom: 20
  // }
});

export default function Create() {

  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title} variant='h6' component='h2' color="textSecondary" gutterBottom>
        Create a New Note
      </Typography>

      <Button className={classes.btn} type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightOutlinedIcon/>} onClick={()=>console.log('You clicked me!')}>
        Submit
      </Button>
      <br/>
      
      
    </Container>
  )
}
