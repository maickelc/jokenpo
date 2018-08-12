import Player from './player'

class PlayerPC extends Player{

    constructor( name ){
        super(name);
    }
    
    getGame(){
        var games = [ 'lizard', 'paper', 'rock', 'scissor', 'spock' ]
        return games[ Math.floor( Math.random() * games.length ) ]
    }

    randomChoice(){
        switch( this.getGame() ){
            case 'lizard':
                return this.playLizard();
            case 'paper':
                return this.playPaper();
            case 'rock':
                return this.playRock();
            case 'scissor':
                return this.playScissor();
            case 'spock':
                return this.playSpock();
        }
    }
}

export default PlayerPC;
