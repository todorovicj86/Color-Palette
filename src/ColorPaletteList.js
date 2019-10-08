import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorPaletteListStyles';
import MiniPalette from './MiniPalette'



class ColorPaletteList extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(id){
        this.props.removePalette(id)
    }

    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }


    render() {
        const {colorPalettes, classes} = this.props;
        return(
            <div className={classes.root}>
                <div className = {classes.container}>
                    <nav className={classes.navbar}>
                        <h1 className={classes.title}>Color Palettes</h1>
                        <h5 className={classes.link}>
                            <Link to ="/palette/new">Create A New Palette</Link>
                        </h5>
                    </nav>
                    <div className={classes.palettes}>
                        {colorPalettes.map(palette => ( 
                            <div key={palette.id}>
                                <MiniPalette 
                                    id={palette.id}
                                    // key={palette.id}
                                    colors={palette.colors}
                                    paletteName={palette.paletteName}
                                    emoji = {palette.emoji}
                                    handleClick = {() => this.goToPalette(palette.id)}
                                    handleDelete={this.handleDelete}
                                />
                            </div>
                        ))}
                        
                    </div>             
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(ColorPaletteList);
