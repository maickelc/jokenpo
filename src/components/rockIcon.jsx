import React from 'react';
import Icon from './icon';
import RockImage from '../images/rock.png'

class RockIcon extends React.Component{

    render(){
        return(
            <Icon icon={ RockImage } onClick={ this.props.onClick } />
        )
    }
}

export default RockIcon;