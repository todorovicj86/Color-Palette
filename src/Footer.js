import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        alignItems: "center",
        display: "flex",
        fontWeight: 'bold',
        justifyContent: "flex-end",
        
        height: "4vh"

    },
    emoji: {
        fontSize: "1.3rem",
        margin: "0 1rem",
    }
}

function Footer(props){
    const {classes, paletteName, emoji} = props;
    return(
        <footer className={classes.root}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
     </footer> 
    )
}

export default withStyles(styles)(Footer);