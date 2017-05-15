import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, 
        CardActions, 
        CardHeader, 
        CardMedia, 
        CardTitle, 
        CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { Projects } from '/imports/api/projects.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '/client/styles/Find.css'

// material-ui uses styles that are like this for some reason...
const styles = {
  cardContain: {
    margin: '3em auto',
    display: 'block',
  },
}

 
export default class CardInfo extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  render() {
    return(
      <div className="cardContainer">
      <Row>
      <Col xs={12}>
      <Row center="xs">
      <Col xs={6} >
        <Card style={styles.cardContain}>
          <CardTitle 
            title={this.props.project.title} 
            subtitle={this.props.project.date} 
          />
          <CardText>
              
                    {this.props.project.description}
          </CardText>
          <CardActions>
          </CardActions>
        </Card>
      </Col>
      </Row>
      </Col>
      </Row>
      </div>
    )
  }
}

CardInfo.propTypes =  {
  project: PropTypes.object.isRequired,
};



