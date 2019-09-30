import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import MiniPalette from './MiniPalette'
import uuid from 'uuid'

const styles = {
    root: {
        alignItems: "flex-start",
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
    },
    container: {
        alignItems: 'flex-start',
        display: "flex",
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: "50%",

    },
    navbar: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        height: "10vh",
        width: "100%",
    },
    title: {
 
    },
    link: {
        "& a" :{
            color: "white",
        }

    },

    palettes: {
        boxSizing: "border-box",
        width:"100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    }


}

class ColorPaletteList extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(event){
        this.props.removePalette(event.target.id)
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
                            <Link to ="/newpalette">Create A New Palette</Link>
                        </h5>
                    </nav>
                    <div className={classes.palettes}>
                        {colorPalettes.map(palette => ( 
                            <div>
                            <MiniPalette 
                                id={palette.id}
                                key={uuid()}
                                colors={palette.colors}
                                paletteName={palette.paletteName}
                                emoji = {palette.emoji}
                                handleClick = {() => this.goToPalette(palette.id)}
                            />
                            <IconButton onClick={this.handleDelete} className ="delete" id={palette.id}>
                                <i id={palette.id} className ="fas fa-trash"></i>
                            </IconButton>
                            </div>
                        ))}
                        
                    </div>             
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(ColorPaletteList);
