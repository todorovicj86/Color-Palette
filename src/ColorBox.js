import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js'
import styles from './styles/ColorBoxStyles'

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            copied: false,
        }
        this.handleCopy = this.handleCopy.bind(this)
    }

    handleCopy(evt){
       this.setState({
           copied: true,
        },() => (setTimeout(() => this.setState({copied: false}), 1500)))
    }

    render(){
        const { bgColor, colorName, paletteId, id, showingFullPalette, classes, format, showLink } = this.props;
        const{copied } = this.state;
        const textColor = chroma.contrast(bgColor, 'white') >= 4.5 ? "white" : "black"
        return(
            
            <div className={`${classes.ColorBox} ${classes.dynamicColor}`}>
                <div className={ `${classes.copyOverlayer} ${copied && classes.copyOverlayerShow}`} 
                    
                ></div>
                <div className={`${classes.overlayerMsg} ${copied && classes.overlayerMsgShow}` }>
                    <h1>Copied!</h1>
                    <p>{bgColor}</p>
                </div>

                <div className={classes.colorName}>
                    {colorName} 
                </div>
                
                <CopyToClipboard onCopy = {this.handleCopy} 
                    text={(format === 'hex' &&  chroma(bgColor).hex()) ||
                        (format === "rgb" && chroma(bgColor).css()) ||
                        (format === "rgba" && chroma(bgColor).alpha(0.9).css()) }
                >
                    <button className={classes.copyButton}>
                        Copy
                    </button>
                </CopyToClipboard>
           
            {showingFullPalette && !showLink &&
                <Button className={classes.moreButton}>
                    <Link  to = {`/palette/${paletteId}/${id}`} 
                            onClick={e => e.stopPropagation()} style={{ color: textColor}}>
                        More
                    </Link> 
                </Button>
            }
               
                
            </div>
            
        )
    }
}

export default withStyles(styles)(ColorBox);