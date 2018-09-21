import React, { Component } from 'react';
import './App.css';

export default class CharacterChinjung extends Component{
    constructor(props){
        super(props)
        this.state = {
            active : false,
        }
    }

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.attemt !== this.props.attemt){
          this.setState({active:false})
        }
      }
    render(){
        let className = `card ${this.state.active ? 'activeCardcopy' : ''}`
        return(
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}