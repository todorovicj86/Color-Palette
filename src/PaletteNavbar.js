import React, {Component} from 'react'
import Slider from 'rc-slider';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@icons/material/CloseIcon';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css'
import styles from './styles/PaletteNavbarStyles'



class PaletteNavbar extends Component {

    constructor(props){
        super(props);
        this.state={
            value: 500,
            open: false,
        }
          
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.handleShadeChange = this.handleShadeChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleFormatChange(evt){
        this.props.handleFormat(evt.target.value)
        this.setState({
            open: true,
        })
    }

    handleShadeChange(value){
        this.props.changeShade(value);
        this.setState({
            value: value,
        })
        
    }
    closeSnackbar(){
        this.setState({open: false})
    }

    render(){
        const {value, open} = this.state;
        const {format, classes, hiddenSlider} = this.props;
        return(
            <div className={classes.PaletteNavbar}>
                <div className={classes.logo}>
                    <h3>
                        <Link to="/">ColorPalettes</Link>
                    </h3>
                </div>
              
                    <div className={ `${classes.sliderContainer} ${hiddenSlider && classes.hidden}`}>
                        <span className={classes.sliderLegend}>
                            Level: [{value}]
                        </span>
                        
                            <div className={classes.slider}>
                                <Slider 
                                    defaultValue={value}
                                    step={100}
                                    min={100}
                                    max={900}
                                    onChange={this.handleShadeChange}
                                />
                            </div>
                    
                    </div>
                
                <div className={classes.select}>
                    <Select value = {format} onChange={this.handleFormatChange}>
                        <MenuItem value = 'hex'>HEX - #FFFFFF</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed To {format.toUpperCase()}!</span>}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    onClose={this.closeSnackbar}
                    
                    action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        // className={classes.close}
                        onClick={this.closeSnackbar}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                />
            </div>
        )
    }
}

export default withStyles(styles) (PaletteNavbar);
