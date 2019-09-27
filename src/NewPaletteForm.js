import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {ChromePicker} from 'react-color'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ColorBox from './ColorBox'
// import seedColors from './seedColors'
// import Grid from '@material-ui/core/Grid';
import { Drawer, Button, TextField, Dialog,
         DialogActions, DialogContent, DialogContentText, 
         DialogTitle, Input } from '@material-ui/core';
import chroma from 'chroma-js'
// import { Picker } from 'emoji-mart'
import uuid from 'uuid'
// import DeleteIcon from '@icons/material/DeleteIcon';
// import { Card, Container, IconButton } from '@material-ui/core';
import './NewPaletteForm.css'


class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20,
    }
    constructor(props){
        super(props);
        this.state = {
            paletteName: "",
            id: "",
            emoji: "",
            colors: [
                { name: "red", color: "#ff0000"},
                { name: "yellow", color: "#ffb000"},
            ],
            name: "",
            color: "",
            bgColor: "rgb(220, 0, 78)",
            open: false,
            disabled: false, 
            leftOpen: true,         
        }
        this.hasColor = new Set(this.state.colors.map(col => col.color))
        // console.log(this.hasColor)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addColor = this.addColor.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.paletteName = this.paletteName.bind(this)
        this.addColorName = this.addColorName.bind(this)
        this.addPaletteToPaletteList = this.addPaletteToPaletteList.bind(this)
        this.chooseRandomColor = this.chooseRandomColor.bind(this);
        this.clearPalette = this.clearPalette.bind(this);
        this.toggleColorPicker = this.toggleColorPicker.bind(this)

    }

    // adding the palette to paletteList
    addPaletteToPaletteList(){
        const {paletteName, emoji, colors} = this.state;
        let id = paletteName.toLocaleLowerCase().split(' ').join("-");
        let palettes = this.props.palettes;
        let newPalette = {
            paletteName: paletteName,
            id: id,
            emoji: emoji,
            colors: colors
        }
        palettes.push(newPalette);
        // adding the new palette to the local storage
        window.localStorage.setItem("palettes", JSON.stringify(palettes))
    }

    // color from a color picker
    handleChange(color) {
        let newColor = color.hex
        this.setState({
            color:newColor,
            bgColor:newColor,
        })
    };
  
    // color name from input field
    addColorName(evt){
        this.setState({
            [evt.target.name]: evt.target.value, 
        })
        
    }

    handleSubmit(evt){
        evt.preventDefault();
    }

    // adding a new color and its name to and array of colors
    addColor(evt){
        let size = this.state.colors.length;
        // if size of the colors array is less than max=20
        if (size < this.props.maxColors){
            let newColorName = this.state.name;
            let newColorCode = this.state.color;
                                
            let toAdd = {
                name: newColorName,
                color: newColorCode,
            }
            // check if the color already exists in the array of colors
            if(!this.hasColor.has(newColorCode)){
                
                this.setState(st => ({
                    colors: [...st.colors,  toAdd],
                    size: size+1,
                    name: "",
                    color: "",
                    bgColor: "rgb(220, 0, 78)",
                    disabled: false,
                }))
                this.hasColor.add(newColorCode);
                console.log(this.hasColor);
            } else {
                // if there is a duplicate, alert the message
                alert("That color exists! Please choose another color!")
            }
        // if max number of colors is reached, disable the buttons
        } else if(this.state.size === this.props.maxColors){
            
            this.setState(st =>({
                // colors: [...st.colors],
                // name: "",
                // color:"",
                bgColor: "rgba(0, 0, 0, 0.12)",
                disabled: true,
            }))
        }
    }
   
// open modal form for palette name
    handleClickOpen() {
        this.setState({
            open: true,
        })
    
    }

// close modal form
    handleClose(evt) {
        this.setState({
            open:false,
        })
    }

// when save is clicked, palette is added to the palette list
    handleSave(){
        this.addPaletteToPaletteList();
        this.setState({
            open:false,
        })
    }
// set the palette name with modal form
    paletteName(evt){
        this.setState({
            paletteName: evt.target.value, 
        })
    }

// random color  
    chooseRandomColor(){
        let newColor = chroma.random().hex();
        if(!this.hasColor.has(newColor)){
            this.setState({
                color: newColor,
                bgColor: newColor,
            })
            // this.hasColor.add(newColor);
        }else {
            alert("That color exists! Please choose another random color!")
        }
      
    }

// clear the palette
    clearPalette(){
        this.setState({
            colors: []
        })
    }

    toggleColorPicker(){
          this.setState(st=>({
              leftOpen: !st.leftOpen,
          }))
      }
    render(){
        const {bgColor, color, name, open, paletteName, colors, disabled, leftOpen} =  this.state;
        // set the text color, based on the contrast with the background
        const textColor = chroma.contrast(bgColor, 'white') >= 4.5 ? "white" : "black"
        return(
            <div className = "NewPaletteForm" >
                <Drawer id="ColorPicker-drawer" open={leftOpen}>
                    <div className="color-picker">
                        <span>
                            <i id="LeftArrow"  onClick={this.toggleColorPicker} className="fas fa-angle-double-left"></i>
                        </span> 

                        <h3>Design Your Palette</h3>

                        <div className="color-picker-buttons">
                            <Button variant="contained" color="primary" onClick={this.chooseRandomColor} disabled={disabled}>
                                Random Color
                            </Button>
                            <Button variant="contained" color="secondary" onClick={this.clearPalette}>
                                Clear Palette
                            </Button>
                        </div>
                        <ChromePicker color={color}
                            onChangeComplete = {this.handleChange}
                        />
                        <div className="color-picker-inputForm">
                            <TextField className="ColorNameInput"
                                required
                                id="filled-with-placeholder"
                                label="Color Name"
                                placeholder="Color Name"
                                margin="normal"
                                variant="filled"
                                value = {name}
                                name="name"
                                onChange={this.addColorName}
                                disabled={disabled}
                            />
                            <Button className="addColor-btn" onClick = {this.addColor} 
                                    style={{backgroundColor: disabled ? "rgba(0, 0, 0, 0.12)" : bgColor, color: textColor}} 
                                    disabled={disabled}
                            >
                                Add Color
                            </Button>
                        </div>
                    </div>
                </Drawer>

                <div className={`${leftOpen ? 'color-container active' : "color-container"}`}>
                    <div className="color-container-navbar">
                    {/* <Button size="small" color="inherit" className={`${leftOpen ? "hidden" : "visible" }`} onClick={this.toggleColorPicker}> */}
                        <i id="RightArrow" onClick={this.toggleColorPicker} className={`${leftOpen ? "fas fa-angle-double-right hidden" : "fas fa-angle-double-right" }`} ></i>
                    {/* </Button> */}
                        <h5>Create A Palette</h5>
                        <div className="navbar-button">
                            <Button variant="contained" color="primary">
                                <Link to = "/"> Go Back</Link>
                            </Button>
                            
                            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                                Save
                            </Button>
                        </div>
                        
                    </div>
                    <Dialog id="paletteNameModal" open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title"> Add Palette Name</DialogTitle>

                        <DialogContent>
                            <DialogContentText>
                                Please Add Palette Name
                            </DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                value={paletteName}
                                label="Palette Name"
                                type="name"
                                fullWidth
                                onChange = {this.paletteName}
                            />
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSave } color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                    {/* <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogContent>
                            <Picker onSelect={this.addEmoji} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Chose Emoji
                            </Button>
                            {/* <Button onClick={this.handleSave } color="primary">
                                Save
                            </Button> */}
                        {/* </DialogActions> */}
                        
                    {/* </Dialog> */} 
                    <div className="color-container-palette">
                        <DragDropContext   
                                    onBeforeDragStart={this.onBeforeDragStart}
                                    onDragStart={this.onDragStart}
                                    onDragUpdate={this.onDragUpdate}
                                    onDragEnd={this.onDragEnd}> 
                        {colors.map(color => (
                            
                                <ColorBox
                                    bgColor = {
                                        (this.props.format === 'hex' &&  chroma(color.color).hex()) ||
                                        (this.props.format === "rgb" && chroma(color.color).css()) ||
                                        (this.props.format === "rgba" && chroma(color.color).alpha(0.9).css())                                                             
                                    }
                                    colorName = {color.name}
                                    key={uuid()}
                                    format = {this.props.format}
                                />
                           
                              
                        ))}
                    </DragDropContext>
                    </div>
                </div>
               
            </div>
         
        )
    }
}

export default NewPaletteForm;