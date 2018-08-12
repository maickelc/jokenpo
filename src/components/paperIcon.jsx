import React from 'react';
import Icon from './icon';
import PaperImage from '../images/paper.png';

class PaperIcon extends React.Component{

    render(){
        return(
            <Icon icon={ PaperImage } onClick={ this.props.onClick } />
        )
    }
}

export default PaperIcon;