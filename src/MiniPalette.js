import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles'
import IconButton from '@material-ui/core/IconButton';

class MiniPalette extends Component {

    render(){
        const {classes, id, paletteName, colors, emoji, handleClick} = this.props;

        return(
            <div className={classes.root} onClick={this.props.handleClick}>
              
                    <div className={classes.colors}>
                        {colors.map(color => (
                            <div key={color.name} 
                                className={classes.color} style={{backgroundColor: color.color}}
                            ></div>
                        ))}
                    </div>
                    <h5 className={classes.title} onClick={handleClick}>
                        {paletteName}
                        <span className={classes.emoji}>{emoji}</span>
                    </h5> 
                    <IconButton className ={classes.delete} id={id}  
                        onClick= {this.props.openDeleteDialog} 
                        
                    >
                        <i id={id} className ="fas fa-trash"></i>
                    </IconButton> 
                
                
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);