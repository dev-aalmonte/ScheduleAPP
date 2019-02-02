import React, { Component } from 'react';

class Action extends Component {

    constructor(props){
        super(props)

        this.status = false;
    }

    handleAction = function(){
        if(this.props.id !== "none"){
            this.props.onClick();
            if(!this.status){
                document.getElementById(this.id).classList.add('action-remove');
            }
            else{
                document.getElementById(this.id).classList.remove('action-remove');
            }
            this.status = !this.status;
        }
    }.bind(this);

    render(){
        this.id = `action-${this.props.id}`;
        return (
            this.props.id !== "none" ? 
            <a id={this.id} onClick={() => this.handleAction()} className={`${this.props.className} action`}>
                
            </a>
            :
            ''
        )
    }
}

export default Action;