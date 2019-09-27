import React, {Component} from 'react'
import Slider from 'rc-slider';
import {Link} from 'react-router-dom'
import 'rc-slider/assets/index.css'
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import { Link } from 'react-router-dom'

import Select from '@material-ui/core/Select';
import './PaletteNavbar.css'

class PaletteNavbar extends Component {

    constructor(props){
        super(props);
        this.state={
            value: 500,
        }
          
        this.handleChange = this.handleChange.bind(this)
        this.handleShadeChange = this.handleShadeChange.bind(this)
    }

    handleChange(evt){
        this.props.handleFormat(evt.target.value)
    }

    handleShadeChange(value){
        this.props.changeShade(value);
        this.setState({
            value: value,
        })
        
    }

    render(){
            
        return(
            <div className="PaletteNavbar">
                <div className="LogoName">
                    <h3>
                        <Link to="/">ColorPalettes</Link>
                    </h3>
                </div>
                <div className="PaletteNavbar-slider">
                    <span className="Slider-legend">
                        Level: [{this.state.value}]
                    </span>
                    <div className="Slider-container">
                        <Slider 
                            defaultValue={this.state.value}
                            step={100}
                            min={100}
                            max={900}
                            onChange={this.handleShadeChange}
                        />
                    </div>
                </div>
                <div className="PaletteNavbar-select">
                    <Select value = {this.props.format} onChange={this.handleChange}>
                        <MenuItem value = 'hex'>HEX - #FFFFFF</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                {/* <div className="ColorPalette-link">
                        <Link to = "/">Go back</Link>
                    </div> */}
            </div>
        )
    }
}

export default PaletteNavbar;
