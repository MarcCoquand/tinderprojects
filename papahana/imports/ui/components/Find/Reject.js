
import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, 
        CardActions, 
        CardHeader, 
        CardMedia, 
        CardTitle, 
        CardText} from 'material-ui/Card';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


const style = {
    marginRight: 20,

};

// Handles finding projects and the logic with the upvote and downvote buttons
export default class Reject extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  
  render() {
    return(
        <div>
         <FloatingActionButton 
          className="button"
          onTouchTap={() => this.props.onTap()}
          style={style}
          secondary={true}>
          <FontIcon className="material-icons">
            event_busy
          </FontIcon>
         </FloatingActionButton>
        </div>
    )
  }
}
Reject.propTypes =  {
  onTap : PropTypes.func,
};


