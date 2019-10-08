import React, { Component } from 'react'
import {arrayMove} from 'react-sortable-hoc';

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@icons/material/ChevronLeftIcon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DraggableColorBoxList from './DraggableColorBoxList'
import FormNavbar from './FormNavbar'
import ColorPicker from './ColorPicker'
import styles from './styles/MakeNewPaletteStyles'


class MakeNewPalette extends Component {
  static defaultProps = {
    maxColors: 20,
  }
  constructor(props){
      super(props);
      this.state = {
        open: true,
        colors: this.props.palettes[0].colors,
        id:"",
        emoji:"",
        openEmoji: false,
      }
     
    this.addNewColor = this.addNewColor.bind(this)
    this.savePalette = this.savePalette.bind(this)
    this.deleteBox = this.deleteBox.bind(this)
    this.clearPalette = this.clearPalette.bind(this)
    this.chooseRandomColor = this.chooseRandomColor.bind(this);
  }

   
  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };


  addNewColor(newColorObj){
    this.setState({
      colors: [...this.state.colors, newColorObj],
    });
  }


  savePalette(newPaletteName, newEmoji){
    const{colors} = this.state;
    let id = newPaletteName.toLocaleLowerCase().split(' ').join('-');
    const newPalette = {
      paletteName: newPaletteName,
      id: id,
      emoji: newEmoji,
      colors: colors,
    }

    this.props.savePalette(newPalette)
    this.props.history.push("/");
    
  }

  deleteBox(name){
    const oldColorsArray = [...this.state.colors]
    const updatedColorsArray = oldColorsArray.filter(box => box.name !== name);

    this.setState({
      colors: updatedColorsArray,
    })
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearPalette(){
    this.setState({
      colors: [],
    })
  }

  chooseRandomColor(){
    const colors = this.props.palettes.map(palette => palette.colors).flat();
    const random = Math.floor(Math.random() * colors.length)
    let newRandomColor = colors[random]
    let colorsSet = new Set(this.state.colors.map(color => color.color))

    if(!colorsSet.has(newRandomColor.color)){
      this.setState({
        colors: [...this.state.colors, newRandomColor],
      })
      colorsSet.add(newRandomColor)

    } else if(colorsSet.has(newRandomColor.color)){
      alert(newRandomColor.name + " already exists! Please choose again!")
    }
      
  }

    render(){
        const {classes, maxColors, palettes} = this.props;
        const {open, colors, openEmoji} = this.state;
        const paletteIsFull = colors.length >= maxColors;

        return(
            <div className={classes.root} >
                
                <FormNavbar 
                  open = {open}
                  handleDrawerOpen = {this.handleDrawerOpen}
                  savePalette = {this.savePalette}
                  palettes = {palettes}
                />
               
                <Drawer
                  className={classes.drawer}
                  variant="persistent"
                  anchor="left"
                  open={open}
                  classes={{
                      paper: classes.drawerPaper,
                  }}
                >
                  <div className={classes.drawerHeader}>
                      <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon /> 
                      </IconButton>
                  </div>

                  <Divider />
                  <div className={classes.container}>

                    <Typography variant="h4" noWrap>
                        Design Your Palette
                    </Typography>

                    <div className={classes.buttons}>
                      <Button 
                          variant="contained" 
                          color="primary" 
                          onClick={this.chooseRandomColor}
                          disabled ={paletteIsFull}
                        >
                          Random Color
                      </Button>
                      <Button variant="contained" color="secondary" onClick={this.clearPalette}>
                          Clear Palette
                      </Button>
                    </div>

                    <ColorPicker 
                      paletteIsFull = {paletteIsFull}
                      addNewColor = {this.addNewColor}
                      palettes = {palettes}
                      colors = {colors}
                    />
                  </div>
                </Drawer>

                <main className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                <div className={classes.drawerHeader} />
                      
                <DraggableColorBoxList 
                  colors={colors} 
                  deleteBox={this.deleteBox} 
                  axis="xy"
                  onSortEnd={this.onSortEnd}
                />                                
                </main>
          </div>
        )
    }
}

export default withStyles(styles, {withTheme: true}) (MakeNewPalette);
