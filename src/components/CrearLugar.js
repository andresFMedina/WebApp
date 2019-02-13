import React, { Component, } from 'react';
import {
    Paper, Button, TextField,
} from '@material-ui/core';

import theme from './../Themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles, } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexBasis: 1,
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
        width: 500
    },
    button: {
        display: 'flex',
        alignContent: 'center',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 5,
        width: 500
    },
    margin: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 15,
        marginBottom: 15,
    },
});


class CrearLugar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Paper>
                    <MuiThemeProvider theme={theme}>
                        <form>
                            <TextField
                                id="nombre-lugar"
                                label="Nombre"
                                className={classes.textField}
                            />
                            <TextField
                                id="nombre-lugar"
                                label="Foto"
                                className={classes.textField}
                            />
                            <TextField
                                id="descripcion-lugar"
                                label="Descripción"
                                multiline
                                className={classes.textField}
                                rowsMax="4"
                            />
                            <TextField
                                id="direccion-lugar"
                                label="Dirección"                                
                                className={classes.textField}                                
                            />
                            <TextField
                                id="web-lugar"
                                label="Sitio Web"
                                className={classes.textField}
                            />
                            <TextField
                                id="telefono-lugar"
                                label="Telefono"
                                className={classes.textField}
                                type="number"
                            />
                            <TextField
                                id="latitud-lugar"
                                label="Latitud"
                                className={classes.textField}
                                type="number"
                            />
                            <TextField
                                id="longitud-lugar"
                                label="Longitud"
                                className={classes.textField}
                                type="number"
                            />

                            <TextField
                                id="catrgoria-lugar"
                                select
                                label="Categoría"
                                className={classes.textField}                                
                                helperText="Selecciona una categoría"
                                margin="normal"
                            >
                                {/*currencies.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))*/}
                            </TextField>



                            <Button variant='contained' color='primary' className={classes.button}>
                                Crear Nuevo Lugar
                            </Button>
                        </form>
                    </MuiThemeProvider>

                </Paper>
            </div>


        );
    }
}

export default withStyles(styles)(CrearLugar);