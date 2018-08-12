import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../scss/styles.scss';

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PlayedStore from '../store/playedStore';
import { Container } from 'flux/utils';
import SideNav from '../components/sidenav';

class App extends React.Component {
  static getStores() {
    return [ PlayedStore ];
  }
  static calculateState(prevState) {
    return PlayedStore.getState();
  }

  render(){
    var winner = "";
    if ( this.state.message.winner ){
      winner = this.state.message.winner + " ganhou";
    }
    return (
        <div>
            <SideNav />
            <Row className="center">
                <Col sm={ 12 }>
                    <h1> { winner } </h1>
                </Col>
                <Col sm={ 6 }>
                    <h1> Você </h1>
                </Col>
                <Col sm={ 6 }>
                    <h1> Computador </h1>
                </Col>
                <Col sm={ 6 }>
                    { this.state.iconPlayer }
                </Col>
                <Col sm={ 6 }>
                    { this.state.iconPC }
                </Col>
                <Col sm={ 12 }>
                    <h3> { this.state.message.message } </h3>
                </Col>
            </Row>
        </div>
    )
  }
}

export default Container.create(App)
