import React from 'react';
import LizardIcon from './lizardIcon';
import ScissorIcon from './scissorIcon';
import RockIcon from './rockIcon';
import SpockIcon from './spockIcon';
import PaperIcon from './paperIcon';
import Actions from '../actions/playedActions'

class SideNav extends React.Component {
    
    constructor(){
      super();
    }

    render(){
      return (
        <div className="sidenav">
          <div>
            <LizardIcon onClick={ Actions.lizard } />
            <ScissorIcon onClick={ Actions.scissor } />
            <PaperIcon onClick={ Actions.paper } />
            <RockIcon onClick={ Actions.rock } />
            <SpockIcon onClick={ Actions.spock } />
          </div>
        </div>
      )
    }
}

export default SideNav;