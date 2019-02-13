import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from './../Themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar(props) {
    const { classes } = props;

    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>

            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        GuideMe
          </Typography>
                </Toolbar>
            </AppBar>

        </div>
        </MuiThemeProvider >
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);