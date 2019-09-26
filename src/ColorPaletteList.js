import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Grid from '@material-ui/core/Grid';
// import DeleteIcon from '@icons/material/DeleteIcon';
import { IconButton } from '@material-ui/core';
import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'
import MainNavbar from './MainNavbar';
import "./ColorPaletteList.css"
import uuid from 'uuid'
// import { mergeClasses } from '@material-ui/styles';


class ColorPaletteList extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(event){
        this.props.removePalette(event.target.id)
    }


    render() {
        return(
            // <Container>
            <div className="ColorPaletteList">
                <div className = "ColorPaletteList-container">
                    <MainNavbar /> 
                    <div className="ColorPalettes-list">
                        {this.props.colorPalettes.map((palette, index) => (
                            <div className="color-palette" key={uuid()} id={palette.id}>
                                <div className = "ColorBoxes-container">
                                {
                                    palette.colors.map(color =>(
                                        <div className="ColorBoxes" key={uuid()} style={{backgroundColor: color.color}}>
                                        </div>
                                    ))
                                }
                                </div>
                                <IconButton onClick={this.handleDelete} className ="delete" id={palette.id}>
                                    <i   id={palette.id} className ="fas fa-trash"></i>
                                </IconButton>
                                <div className="ColorPalette-footer">
                                    <div className="footer-link">
                                        <Link to = {`/palette/${palette.id}`}>{palette.paletteName}</Link> 
                                    </div>
                                    
                                    <div className="footer-emoji">
                                        {palette.emoji}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
        
            </div>
        )
    }
}

export default ColorPaletteList;
