import React, { Component } from 'react'
import {ChromePicker} from 'react-color'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerStyles'

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: "",
        }
        this.handleColorPickerChange = this.handleColorPickerChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addNewColor = this.addNewColor.bind(this)
    }

    

    componentDidMount() {
        // validate if the color name is unique
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
          this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        );
  
      //  validate if the color is unique
        ValidatorForm.addValidationRule('isColorUnique', value => 
          this.props.colors.every(({ color }) => color !== this.state.currentColor)
        );
  
      }


    handleColorPickerChange(newColor){
        this.setState({
            currentColor: newColor.hex,
        })
    }

    handleChange(evt){
        this.setState({
          [evt.target.name]: evt.target.value,
        })
    }

    addNewColor(){
        const newColorObj = {
            name: this.state.newColorName,
            color: this.state.currentColor,
        }
     
      this.props.addNewColor(newColorObj)

      this.setState({
        newColorName: "",
      })
    }

       
    render(){
        const { paletteIsFull, classes } = this.props
        const {currentColor, newColorName} = this.state;

        return(
            <div className= {classes.root}>
                 <ChromePicker 
                    color={currentColor} 
                    onChangeComplete = {this.handleColorPickerChange}
                    className={classes.chromePicker}
                  />

                <div className={classes.form}>
                  <ValidatorForm onSubmit={this.addNewColor}>
                    <TextValidator 
                        className={classes.formInput}
                        placeholder = "Color Name"
                        variant="filled"
                        value={newColorName}
                        onChange={this.handleChange}
                        name="newColorName"
                        validators={[
                            'required', 
                            'isColorNameUnique', 
                            'isColorUnique'
                        ]}
                         errorMessages={[
                            'This field is required. Enter a color name!', 
                            'Color name must be unique!', 
                            'Color already exists!'
                        ]}
                    />
                    <div className={classes.formBtn}>
                    { paletteIsFull ? 
                        <Button 
                            type="submit"
                            variant="contained" 
                            disabled
                        >
                            Palette Full
                        </Button>
                    :
                        <Button 
                            type="submit"
                            variant="contained" 
                            style={{backgroundColor: currentColor}}
                            disabled ={paletteIsFull}
                        >
                            Add Color
                        </Button>
                    }   
                  </div>
                                    
                  </ValidatorForm>
                  </div>

            </div>
        )
    }
}

export default withStyles(styles)(ColorPicker);