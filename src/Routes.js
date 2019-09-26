import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import seedColors from './seedColors'
import ColorPalette from './ColorPalette'
import ColorPaletteList from './ColorPaletteList'
import PaletteShades from './PaletteShades'
import NewPaletteForm from './NewPaletteForm';
import {getPaletteShades} from './helpers'

class Routes extends Component {
    static defaultProps = {
        // colorPalettes: seedColors,
        marks: {50: "50", 100: "100", 200: "200", 300: "300", 400: "400", 500: "500", 600: "600", 700: "700", 800: "800", 900: "900"}
    }
      constructor(props){
        super(props);
        this.state = {
            format: "hex",
            copied: false,
            colorPalettes: JSON.parse(window.localStorage.getItem("palettes") || "[]")
        }
    
        this.handleFormat = this.handleFormat.bind(this)
        this.onCopy = this.onCopy.bind(this)
        this.removePalette = this.removePalette.bind(this)
      }
    
      handleFormat(value){
          this.setState({
              format: value,
          })
      }
      onCopy(value){
        this.setState({
          copied: value
        })
      }

      componentDidMount(){
  
        if(this.state.colorPalettes.length === 0){
          this.getPalettes()
        }      
        
      }
    

    async getPalettes(){
      let palette = seedColors;
      this.setState(
        st => ({
          colorPalettes: [...st.colorPalettes, ...palette]
        }),
        () => window.localStorage.setItem("palettes", JSON.stringify(this.state.colorPalettes))
      );
    }

    removePalette(id){
      const oldPalette = [...this.state.colorPalettes];

      const newPalette = oldPalette.filter(item => item.id !== id);

      this.setState({
          colorPalettes: newPalette,
      }, () => window.localStorage.setItem("palettes", JSON.stringify(this.state.colorPalettes)))
  }
    
  
    render(){
        const getPalette = props => {
            let name = props.match.params.name;
                 
            let currentPalette = this.state.colorPalettes.find(
              palette => palette.id === name
              
            );
            return <ColorPalette {...props} palette={getPaletteShades(currentPalette)} 
                    format={this.state.format} 
                    handleFormat = {this.handleFormat}
                    onCopy = {this.onCopy} 
                    sliderMarks = {this.props.marks}
                    />;
        };
      
        const getColorShades = props => {
            let name = props.match.params.name;
            let colorName = props.match.params.colorName.split(" ")[0];
          
            let currentPalette = this.state.colorPalettes.find( 
              palette => palette.id === name
            )
            let currentColor = currentPalette.colors.find(
              color => color.name === colorName.split(" ")[0]
            )
      
            return <PaletteShades {...props} color={currentColor} 
                    palette = {currentPalette} 
                    format={this.state.format} 
                    handleFormat = {this.handleFormat}
                    onCopy = {this.onCopy} 
                  />
        }

        return(
            <Switch>
                <Route exact path="/" render = {() => <ColorPaletteList colorPalettes={this.state.colorPalettes} removePalette = {this.removePalette}
                />} />
                <Route exact path = "/palette/:name" render = {getPalette} />
                <Route exact path = '/palette/:name/:colorName' render ={getColorShades} />
                <Route exact path = "/newpalette" render= {() => <NewPaletteForm format={this.state.format} palettes={this.state.colorPalettes} />} />
                <Redirect to = "/" />
            </Switch>

        )
    }
}

export default Routes;