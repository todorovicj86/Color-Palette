import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#d7dbdc",
        borderRadius: "5px",
        height: "150px",
        overflow: "hidden",
        width: "100%",

    },
    color:{
        display: "inline-block",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        width: "20%",
        verticalAlign: "middle",
        
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color:"black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"

    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",

    }
}

function MiniPalette (props) {
    const {classes, id, paletteName, colors, emoji} = props;

    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {colors.map(color => (
                    <div key={color.name} 
                        className={classes.color} style={{backgroundColor: color.color}}
                    ></div>
                ))}
            </div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>              
            
        </div>
    )
}

export default withStyles(styles)(MiniPalette);