import React from 'react'
import {Box, Grid, Typography, makeStyles,Button} from '@material-ui/core'


const useStyles = makeStyles({
    wrapper: {
        backgroundColor: '#2F6359',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: '#2F6359'
        },
    },
    hcolor:{
        backgroundColor: "rgba(0,0,0,0.8)", //
    }, 
    ml:{
        marginLeft:'15px',
    }
    
    });

export default (props) => {
    const classes = useStyles()
    return(
        <Box py={10} className={classes.hcolor} color='white'> 
        <Grid container justify='center'>
            <Grid item xs={10}>
                <Box display='flex' justifyContent='space-between'>
                <Box display='flex' justifyContent='flex-start'>
                <img src='logo.png' alt='vistar' height='40px' width='40px'/>
                    <Typography variant='h4' className={classes.ml}>
                        Vistar Jobs
                    </Typography></Box>
                    <Box display='flex' justifyContent='flex-end'>
                    <Button onClick={props.openNewJobPost} 
                    className={classes.wrapper} 
                    variant='contained' disableElevation>
                        Post a Job
                    </Button>
                    <Button href="https://vistar-job-home.netlify.app/" 
                    className={`${classes.wrapper} ${classes.ml}`}
                    variant='contained' disableElevation>
                        Home
                    </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
);
}
