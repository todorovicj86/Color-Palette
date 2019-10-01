import React from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles'



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