import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import {Dialog, DialogTitle } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { green, red } from '@material-ui/core/colors';
import CloseIcon from '@icons/material/CloseIcon'
import CheckIcon from '@icons/material/CheckIcon'
import MiniPalette from './MiniPalette'
import styles from './styles/ColorPaletteListStyles';



class ColorPaletteList extends Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.cancelDelete = this.cancelDelete.bind(this)
        this.openDeleteDialog=this.openDeleteDialog.bind(this)
        this.goToPalette = this.goToPalette.bind(this)
    }

    openDeleteDialog(e){
        e.stopPropagation()
        this.setState({
            open: true,
            id: e.target.id,
        })
    }

    cancelDelete(){
        this.setState({
            open: false,
            id: "",
        })
    }

    handleDelete(evt){
        this.props.removePalette(this.state.id)
        this.setState({
            open: false,
            id: "",
        })
    }

    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }


    render() {
        const {colorPalettes, classes, id} = this.props;
        const {open} = this.state;
        return(
            <div className={classes.root}>
                <div className = {classes.container}>
                    <nav className={classes.navbar}>
                        <h1 className={classes.title}>Color Palettes</h1>
                        <h5 className={classes.link}>
                            <Link to ="/palette/new">Create A New Palette</Link>
                        </h5>
                    </nav>
                    <div className={classes.palettes}>
                        <TransitionGroup component={null}>
                            {colorPalettes.map(palette => (
                                <CSSTransition key={palette.id}
                                    timeout={500}
                                    classNames="fade" 
                                >
                               
                                    <MiniPalette 
                                        key={palette.id}
                                        id={palette.id}
                                        colors={palette.colors}
                                        paletteName={palette.paletteName}
                                        emoji = {palette.emoji}
                                        goToPalette = {this.goToPalette}
                                        openDeleteDialog={this.openDeleteDialog}
                                    />
                               
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>

                    <Dialog className={classes.dialog}
                        onClose = {this.cancelDelete}
                        open={open}
                        keepMounted
                        aria-labelledby="delete-dialog-title"
                        aria-describedby="delete-dialog"
                    >
                    <DialogTitle id="delete-dialog-title"> Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete} key={id} id={id}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: green[100], color: green[600]}} >
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText> 
                                Delete
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.cancelDelete}> 
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText> 
                                Cancel
                            </ListItemText>
                        </ListItem>
                    </List>                       
                    
                    </Dialog> 

                </div>
            </div>

        )
    }
}

export default withStyles(styles)(ColorPaletteList);
