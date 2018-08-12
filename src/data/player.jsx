
import PlayedTypes from '../actions/playedTypes'
import Played from './played';

class Lizard extends Played{
    constructor( player ){
        super( player, PlayedTypes.LIZARD )
        this.winsOf = [ Paper, Spock ]
    }
}

class Paper extends Played{
    constructor( player ){
        super( player, PlayedTypes.PAPER )
        this.winsOf = [ Rock, Spock ]
    }
}

class Rock extends Played{
    constructor( player ){
        super( player, PlayedTypes.ROCK )
        this.winsOf = [ Scissor, Lizard ]
    }
}

class Scissor extends Played{
    constructor( player ){
        super( player, PlayedTypes.SCISSOR )
        this.winsOf = [ Paper , Lizard ]
    }
}

class Spock extends Played{
    constructor( player ){
        super( player, PlayedTypes.SPOCK )
        this.winsOf = [ Scissor, Rock ]
    }
}

class Player {

    constructor( name ){
        this.name = name;
    }

    playLizard(){
        return new Lizard( this )
    };

    playPaper(){
        return new Paper( this )
    };

    playRock(){
        return new Rock( this )
    };

    playScissor(){
        return new Scissor( this )
    };

    playSpock(){
        return new Spock( this )
    };
}

export default Player;