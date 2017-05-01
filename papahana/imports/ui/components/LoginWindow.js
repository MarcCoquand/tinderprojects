import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import AccountUI from './AccountsUIWrapper'
import '/client/styles/LoginWindow.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
export default class LoginWindow extends Component {





  render() {
    if (!this.props.user) {
      return (
          <div>
            <video autoPlay loop className="video-background" muted>
              <source src=
              "https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761"
              type="video/mp4">
              </source>
            </video>

            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col xs={5} className="flux-centerblock">
                  <h1 className="welcome-text">Login to Papahana</h1>
                  <div className="facebook-button"><AccountUI /></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
      );
    } else {
      return (<div>Not logged in</div>)
    }
  }
}

LoginWindow.propTypes =  {
    user:PropTypes.object,
};
