import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

class ModalDialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            paletteName: "",
            emoji:"",
            openEmoji: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.savePalette = this.savePalette.bind(this)
   
        
    }

    componentDidMount() {
        // validate if the palette name is unique
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>       
            this.props.palettes.every(({ paletteName } ) => paletteName.toLocaleLowerCase() !== value.toLocaleLowerCase())
        );
    
    }

    handleChange(evt){
        this.setState({
          [evt.target.name]: evt.target.value,
        })
    }

   savePalette(emojiIcon){
    this.setState({
        openEmoji: false,
    })
      this.props.savePalette(this.state.paletteName, emojiIcon.native)
     
    }

 

    render(){
        const {paletteName,} = this.state;
        const {openModal, cancelSave, openEmoji, openEmojiModal} = this.props;
        return(
            <div>
                <Dialog id="paletteNameModal" open={openModal} onClose={cancelSave} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"> Add Palette Name</DialogTitle>

                    <DialogContent>
                        
                        <DialogContentText>
                            Please Add Palette Name
                        </DialogContentText>

                        

                        <ValidatorForm 
                            // onSubmit={() => this.props.savePalette(paletteName)}
                            onSubmit={openEmojiModal}
                            >
                            <TextValidator 
                                value={paletteName}
                                onChange={this.handleChange}
                                name="paletteName"
                                validators={[
                                    'required', 
                                    'isPaletteNameUnique',
                                ]}
                                errorMessages={[
                                'This field is required. Enter a palette name!', 
                                'Palette name must be unique!', 
                                ]}

                                />
                            <DialogActions>
                                <Button onClick={cancelSave} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </DialogActions>
                        </ValidatorForm>
                       
                    </DialogContent>
                       
                </Dialog>

                <Dialog open={openEmoji} onClose={cancelSave}>
                <DialogTitle id="form-dialog-title"> Pick A Palette Emoji </DialogTitle>
                    <Picker
                        title="Pick A Palette Emoji" 
                        onSelect = {this.savePalette} 

                    />  
                </Dialog>

            </div>
        )
    }
}

export default ModalDialog;