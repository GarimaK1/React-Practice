import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ContactsIcon from '@material-ui/icons/Contacts';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = ({ title, icon }) => { // props.title, props.icon
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <ContactsIcon style={{ marginRight: '.5rem' }} />
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
// https://reactjs.org/docs/typechecking-with-proptypes.html
// To run typechecking on the props for a component, you can assign the special propTypes property
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};
// define default values for your props by assigning to the special defaultProps property
Navbar.defaultProps = {
    title: 'Contacts Manager React Front-End',
    icon: ''
};

export default Navbar;