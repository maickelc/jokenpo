
import  Player from '../src/player'
import { jokenpo } from '../src/jokenpo'
import { assert } from  'chai'  

const player1 = new Player( 'Player1' )
const player2 = new Player( 'Player2' )

describe( 'Testes jokenpo', function(){
    it( 'Teste: Tesoura corta papel', function(){
        assert.equal( jokenpo( player1.playScissor(), player2.playPaper() ).message, 'Tesoura corta papel' )
    })
    it( 'Teste: Tesoura decapita lagarto', function(){
        assert.equal( jokenpo( player1.playScissor(), player2.playLizard() ).message, 'Tesoura decapita lagarto' )
    })
    it( 'Teste: Papel cobre pedra', function(){
        assert.equal( jokenpo( player1.playPaper(), player2.playRock() ).message, 'Papel cobre pedra' )
    })
    it( 'Teste: Papel refuta Spock', function(){
        assert.equal( jokenpo( player1.playPaper(), player2.playSpock() ).message, 'Papel refuta Spock' )
    })
    it( 'Teste: Pedra esmaga lagarto', function(){
        assert.equal( jokenpo( player1.playRock(), player2.playLizard() ).message, 'Pedra esmaga lagarto' )
    })
    it( 'Teste: Pedra quebra tesoura', function(){
        assert.equal( jokenpo( player1.playRock(), player2.playScissor() ).message, 'Pedra quebra tesoura' )
    })
    it( 'Teste: Lagarto come papel', function(){
        assert.equal( jokenpo( player1.playLizard(), player2.playPaper() ).message, 'Lagarto come papel' )
    })
    it( 'Teste: Lagarto envenena Spock', function(){
        assert.equal( jokenpo( player1.playLizard(), player2.playSpock() ).message, 'Lagarto envenena Spock' )
    })
    it( 'Teste: Spock vaporiza pedra', function(){
        assert.equal( jokenpo( player1.playSpock(), player2.playRock() ).message, 'Spock vaporiza pedra' )
    })
    it( 'Teste: Spock esmaga (ou derrete) tesoura', function(){
        assert.equal( jokenpo( player1.playSpock(), player2.playScissor() ).message, 'Spock derrete tesoura')
    })
    it( 'Teste: Empate', function(){
        assert.equal( jokenpo( player1.playLizard(), player2.playLizard() ).message, 'Lagarto empata com lagarto' )
    })
})