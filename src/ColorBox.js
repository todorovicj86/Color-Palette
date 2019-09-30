import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import chroma from 'chroma-js'
import './ColorBox.css'

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            copied: false,
        }
        this.handleCopy = this.handleCopy.bind(this)
        // this.handleClick = this.handleClick.bind(this);
    }

    handleCopy(evt){
    //    this.props.onCopy(true)
       this.setState({
           copied: true,
        },() => (setTimeout(() => this.setState({copied: false}), 1500)))
    }

    // handleClick(evt){
    //     this.setState({
    //         copied: true,
    //     })
    //     setTimeout(()=>
    //         this.setState({
    //             copied: false,
    //     }),1000)
    // }
    render(){
        // let bgColor = this.props.colorCode; 
        const { bgColor, colorName, paletteId } = this.props; 
        const textColor = chroma.contrast(bgColor, 'white') >= 4.5 ? "white" : "black"
        return(
            
            <div className="ColorBox" style={{backgroundColor: bgColor, color: textColor}}>
                <div className={this.state.copied === true? "ColorBox-CopyOverlay show" : "ColorBox-CopyOverlay"} 
                    style={{backgroundColor: bgColor, color: textColor}}
                ></div>
                <div className={`ColorBox-OverlayerMsg ${this.state.copied && 'show'}`}>
                    <h1>Copied!</h1>
                    <p>{bgColor}</p>
                </div>

                <div className="ColorBox-ColorName">
                    {colorName} 
                </div>
                
                <CopyToClipboard onCopy = {this.handleCopy} 
                    text={(this.props.format === 'hex' &&  chroma(bgColor).hex()) ||
                        (this.props.format === "rgb" && chroma(bgColor).css()) ||
                        (this.props.format === "rgba" && chroma(bgColor).alpha(0.9).css()) }
                >
                    <button  className="ColorBox-CopyButton" style={{ color: textColor }}>
                        Copy
                    </button>
                </CopyToClipboard>

                <Button className="ColorBox-MoreButton">
                <Link  to = {`/palette/${paletteId}/${colorName.split(" ").shift()}`} 
                            onClick={e => e.stopPropagation()} style={{ color: textColor}}>
                        More
                    </Link> 
                </Button>
                
            </div>
            
        )
    }
}

export default ColorBox;