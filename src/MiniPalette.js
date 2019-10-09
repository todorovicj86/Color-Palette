import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles'
import IconButton from '@material-ui/core/IconButton';

class MiniPalette extends PureComponent {
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick(){
        this.props.goToPalette(this.props.id)
    }
    render(){
        const {classes, id, paletteName, colors, emoji, handleClick} = this.props;
        console.log("render " + id )

        return(
            <div className={classes.root} onClick={this.handleClick}>
              
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