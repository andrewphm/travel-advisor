import React from 'react';

// Material UI
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

// Styles
import useStyles from './styles';


const List = () => {
    const classes = useStyles();


    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, Hotels & Attractions around you
            </Typography>

        </div>
    );
}

export default List;