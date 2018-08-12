
import PlayedTypes from './playedTypes'
import PlayedDispacher from '../dispatcher/playedDispatcher';


const Actions = {
    scissor(){
        PlayedDispacher.dispatch({
            type: PlayedTypes.SCISSOR
        })
    },
    lizard(){
        PlayedDispacher.dispatch({
            type: PlayedTypes.LIZARD
        })
    },
    paper(){
        PlayedDispacher.dispatch({
            type: PlayedTypes.PAPER
        })
    },
    rock(){
        PlayedDispacher.dispatch({
            type: PlayedTypes.ROCK
        })
    },
    spock(){
        PlayedDispacher.dispatch({
            type: PlayedTypes.SPOCK
        })
    }
}

export default Actions;