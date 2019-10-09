import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import seedColors from './seedColors'
import ColorPalette from './ColorPalette'
import ColorPaletteList from './ColorPaletteList'
import PaletteShades from './PaletteShades'
import MakeNewPalette from './MakeNewPalette'
import Page from './Page'
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
        this.savePalette = this.savePalette.bind(this)
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

      componentDidMount(){
  
        if(this.state.colorPalettes.length === 0){
          this.getPalettes()
        }      
        
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

    removePalette(id){
      const oldPalette = [...this.state.colorPalettes];

      const newPalette = oldPalette.filter(item => item.id !== id);

      this.setState({
          colorPalettes: newPalette,
      }, () => window.localStorage.setItem("palettes", JSON.stringify(this.state.colorPalettes)))
  }

  savePalette(newPalette){
    const palettes = this.state.colorPalettes;
    palettes.push(newPalette);
    window.localStorage.setItem("palettes", JSON.stringify(palettes))
  }
    
  
    render(){
        const getPalette = props => {
            let name = props.match.params.name;
                 
            let currentPalette = this.state.colorPalettes.find(
              palette => palette.id === name
              
            );
            return(
              <Page>
                <ColorPalette 
                  {...props} 
                  palette={getPaletteShades(currentPalette)} 
                  format={this.state.format} 
                  handleFormat = {this.handleFormat}
                  onCopy = {this.onCopy} 
                  sliderMarks = {this.props.marks}
                  />
              </Page>
            )
        };
      
        const getColorShades = props => {
            let name = props.match.params.name;
            let colorName = props.match.params.colorName;
                     
            let currentPalette = this.state.colorPalettes.find( 
              palette => palette.id === name
            )
            let currentColor = currentPalette.colors.find(
              color => color.name === colorName
              
            )
      
            return( 
              <Page>
                <PaletteShades 
                  {...props} 
                  color={currentColor} 
                  palette = {currentPalette} 
                  format={this.state.format} 
                  handleFormat = {this.handleFormat}
                  onCopy = {this.onCopy} 
                />
              </Page>
            )
        }

        const {colorPalettes, format } = this.state;

        return(
          <Route 
            render={({location}) => (
              <TransitionGroup>
                <CSSTransition classNames="page" timeout={500} key={location.key}>
                  <Switch location={location}>
                    <Route 
                      exact 
                      path = "/palette/new" 
                      render= {(routProps) => (
                        <Page>
                          <MakeNewPalette 
                            format={format}
                            palettes={colorPalettes} 
                            savePalette={this.savePalette} 
                            {...routProps}/>
                        </Page>
                      )}
                    />
                        
                      
                    <Route 
                      exact 
                      path="/" 
                      render = {(routProps) => (
                        <Page>
                          <ColorPaletteList 
                            colorPalettes={colorPalettes} 
                            removePalette = {this.removePalette} 
                            {...routProps}/>
                        </Page>
                      )} 
                    />
                    <Route 
                      exact 
                      path = "/palette/:name"
                      render = {getPalette} />
                    <Route 
                      exact 
                      path = '/palette/:name/:colorName' 
                      render ={getColorShades} />
                    <Redirect to = "/" />
                  </Switch>
                </CSSTransition>
            </TransitionGroup>
            )}
          />
      
        )
    }
}

export default Routes;