
import Log from './log'

class Played extends Log{
    constructor( player, type ){
        super();
        this.player = player
        this.type = type
    }

    checkWinner( player1, player2 ){
        return player1.winsOf.some( item => player2 instanceof item );
    }

    play( playerpc ){
        if( this.checkWinner( this, playerpc ) ){
            return this.message( this, playerpc )
        }else if( this.checkWinner( playerpc, this ) ){
            return this.message( playerpc, this )
        }else{
            return this.message( this, playerpc );
        }
    }
}

export default Played;