import React from 'react';
import Icon from './icon';
import LizardImage  from '../images/lizard.png';

class LizardIcon extends React.Component{

    render(){
        return(
            <Icon icon={ LizardImage } onClick={ this.props.onClick }/>
        )
    }
}

export default LizardIcon;