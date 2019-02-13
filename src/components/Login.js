import React, { Component, } from 'react';
import {
    Paper, Button, TextField, Divider, FormControl, InputLabel,
    Input, InputAdornment, IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import theme from './../Themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles, } from '@material-ui/core/styles';
import firebaseConfig from './../config/FirebaseConfig';

const styles = theme => ({
    container: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexBasis: 1,
        height: 300,
        marginTop: 15,
        padding: 16
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-start',
        width: 300
    },
    button: {
        display: 'flex',
        alignContent: 'center',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 5,
        width: 300


    },
    margin: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 15,
        marginBottom: 15,
    },
});


class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        };

    }


    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    login(event) {
        event.preventDefault();

        firebaseConfig.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            alert("Mal " + error + " " + this.state.email);
        });
    }


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Paper>
                    <MuiThemeProvider theme={theme}>
                        <form>
                            <Button variant='contained' color='primary' className={classes.button}>Google</Button>
                            <Divider className={classes.margin} />

                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                type="email"
                                name="email"
                                autoComplete="email"
                            />

                            <FormControl className={classes.textField}>
                                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                <Input
                                    id="adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <Button variant='contained'
                                color='primary'
                                className={classes.button}
                                onClick={this.login}
                            >
                                Ingresar
                            </Button>
                        </form>
                    </MuiThemeProvider>

                </Paper>
            </div>


        );
    }
}

export default withStyles(styles)(Login);