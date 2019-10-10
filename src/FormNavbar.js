import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@icons/material/ChevronRightIcon';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ModalDialog from './ModalDialog'
import styles from './styles/FormNavbarStyles'


class FormNavbar extends Component{
    constructor(props){
        super(props);
        this.state = {
          openModal: false, 
          openEmoji: false       
        }
        this.cancelSave = this.cancelSave.bind(this)
        this.openModal = this.openModal.bind(this)
        this.openEmojiModal = this.openEmojiModal.bind(this)   
    }

  

    openModal(){
        this.setState({
          openModal: true,
        })
    }
  
    cancelSave(){
        this.setState({
          openModal: false,
          openEmoji: false   
        })
    }

    openEmojiModal(){
      this.setState({
          openEmoji: true,
          openModal: false,

      })
  }

    render(){
        const {classes, open, palettes} = this.props;
        const { openModal, openEmoji } = this.state;
   
        return(
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                color="default"
                  position="fixed"
                  className={classNames(classes.appBar, {
                      [classes.appBarShift]: open,
                  })}
              >
                  <Toolbar>
                      <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          onClick={this.props.handleDrawerOpen}
                          edge="start"
                          className={classNames(classes.menuButton, open && classes.hide)}
                      >
                          <ChevronRightIcon />
                      </IconButton>

                      <Typography variant="h6" noWrap>
                          Create A Palette
                      </Typography>
                      
                  </Toolbar>

                  <div className={classes.navBtn}>
                    <Link className={classes.goBackLink} to = "/">
                        <Button variant="contained" color="secondary">
                            Go Back
                        </Button>
                    </Link>
                    
                    <Button variant="contained" color="primary" onClick={this.openModal}>
                        Save
                    </Button>
                  </div>
                
              </AppBar>

              <ModalDialog 
                openModal={openModal}
                cancelSave={this.cancelSave}
                savePalette = {this.props.savePalette}
                palettes={palettes}
                openEmoji = {openEmoji}
                openEmojiModal={this.openEmojiModal}
              />
            </div>

        )
    }
}

export default withStyles(styles, {withTheme: true})(FormNavbar);