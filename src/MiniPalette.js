import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles'
import IconButton from '@material-ui/core/IconButton';



class MiniPalette extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(evt){
        const id = evt.target.id;
        console.log(id)
        this.props.handleDelete(id)
    }
    render(){
    const {classes, id, paletteName, colors, emoji, handleClick} = this.props;

        return(
            <div className={classes.root} >
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
                <IconButton  onClick={this.handleDelete} className ={classes.delete} id={id}>
                    <i id={id} className ="fas fa-trash"></i>
                </IconButton>            
                
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);