
import React            from 'react'
import { ReduceStore }  from  'flux/utils';
import PlayedTypes      from '../actions/playedTypes';
import PlayedDispatcher from '../dispatcher/playedDispatcher';
import LizardIcon       from '../components/lizardIcon';
import ScissorIcon      from '../components/scissorIcon';
import RockIcon         from '../components/rockIcon';
import SpockIcon        from '../components/spockIcon';
import PaperIcon        from '../components/paperIcon';

import Player       from '../data/player';
import PlayerPC     from '../data/playerpc';
import { jokenpo }  from '../jokenpo';

class PlayedStore extends ReduceStore{
    constructor(){
        super(PlayedDispatcher);
        this.player = new Player( 'Você' )
        this.pc = new PlayerPC( 'Computador' )
    }

    getInitialState(){
        var state = {
            message: '',
            iconPlayer: '',
            iconPC: '',
        }
        return state;
    }

    play( played, pcplay ){
        return jokenpo( played, pcplay )
    }

    getIcon( type ){
        switch( type ){
            case PlayedTypes.LIZARD:
                return <LizardIcon />
            case PlayedTypes.ROCK:
                return <RockIcon />
            case PlayedTypes.PAPER:
                return <PaperIcon />
            case PlayedTypes.SCISSOR:
                return <ScissorIcon />
            case PlayedTypes.SPOCK:
                return <SpockIcon />
        }
    }

    reduce( state, action ){
        var pcPlay = this.pc.randomChoice();
        switch ( action.type ){
            case PlayedTypes.LIZARD:
                var newstate = {
                    iconPlayer: this.getIcon( action.type ),
                    iconPC: this.getIcon( pcPlay.type ),
                    message: this.play( this.player.playLizard(), pcPlay )
                }
                return Object.assign( {}, state, newstate );
            case PlayedTypes.PAPER:
                var newstate = {
                    iconPlayer: this.getIcon( action.type ),
                    iconPC: this.getIcon( pcPlay.type ),
                    message: this.play( this.player.playPaper(), pcPlay )
                }
                return Object.assign( {}, state, newstate );
            case PlayedTypes.ROCK:
                var newstate = {
                    iconPlayer: this.getIcon( action.type ),
                    iconPC: this.getIcon( pcPlay.type ),
                    message: this.play( this.player.playRock(), pcPlay )
                }
                return Object.assign( {}, state, newstate );
            case PlayedTypes.SCISSOR:
                var newstate = {
                    iconPlayer: this.getIcon( action.type ),
                    iconPC: this.getIcon( pcPlay.type ),
                    message: this.play( this.player.playScissor(), pcPlay )
                }
                return Object.assign( {}, state, newstate );
            case PlayedTypes.SPOCK:
                var newstate = {
                    iconPlayer: this.getIcon( action.type ),
                    iconPC: this.getIcon( pcPlay.type ),
                    message: this.play( this.player.playSpock(), pcPlay )
                }
                return Object.assign( {}, state, newstate );
            default:
                console.log('reduce  default', state, action)
                return state;
        }
    }
}

export default new PlayedStore();