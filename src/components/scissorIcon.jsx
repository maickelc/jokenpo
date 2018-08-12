import React from 'react';
import Icon from './icon';
import ScissorImage  from '../images/scissor.png';

class ScissorIcon extends React.Component{

    render(){
        return(
            <Icon icon={ ScissorImage } onClick={ this.props.onClick } />
        )
    }
}

export default ScissorIcon;