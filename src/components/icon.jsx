import React from 'react';
import { NavItem } from 'react-bootstrap';

class Icon extends React.Component {

    constructor(){
        super()
    }

    render(){
        return (
            this.props.onClick ? (
            <NavItem>
                <img src={ this.props.icon } onClick={ this.props.onClick }/>
            </NavItem>
            ) : <img src={ this.props.icon } />
        )
    }
}

export default Icon;