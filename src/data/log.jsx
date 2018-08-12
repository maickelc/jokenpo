
class Log{
    constructor(){
        this.plays ={
            lizard: {
                paper: () => 'Lagarto come papel',
                spock: () => 'Lagarto envenena Spock',
                lizard: () => 'Lagarto empata com lagarto'
            },
            paper: {
                rock: () => 'Papel cobre pedra',
                spock: () => 'Papel refuta Spock',
                paper: () => 'Papel empata com papel'
            },
            rock: {
                lizard: () => 'Pedra esmaga lagarto',
                scissor: () => 'Pedra quebra tesoura',
                rock: () => 'Pedra empata com pedra'
            },
            scissor: {
                lizard: () => 'Tesoura decapita lagarto',
                paper: () => 'Tesoura corta papel',
                scissor: () => 'Tesoura empata com tesoura'
            },
            spock: {
                rock: () => 'Spock vaporiza pedra',
                scissor: () => 'Spock derrete tesoura',
                spock: () => 'Spock empata com Spock'
            }
        }
    }

    message( played1, played2 ){
        var result = { winner: '' }

        if( played1.type !== played2.type ){
            result[ 'winner' ] = played1.player.name
        }
        result[ 'message' ] = this.plays[ played1.type ][ played2.type ]()

        return result;

    }
}

export default Log;