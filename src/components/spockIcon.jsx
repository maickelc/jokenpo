import React from 'react';
import Icon from './icon';
import SpockImage from '../images/spock.png'

class SpockIcon extends React.Component{

    render(){
        return(
            <Icon icon={ SpockImage } onClick={ this.props.onClick } />
        )
    }
}

export default SpockIcon;