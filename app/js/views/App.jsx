import { grey900, grey800, grey700, cyan500, grey100 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from './Home';
import Root from './Root';
import MainContent from './MainContent';
import GameStats from './GameStats';

import * as actionCreators from '../actions';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'white',
    secondaryTextColor: grey900,
    alternateTextColor: 'white',
    primary1Color: 'black',
    primary2Color: grey800,
    primary3Color: grey700,
    accent1Color: cyan500,
    accent2Color: cyan500,
  },
  appBar: {
    // height: 50,
  },
  drawer: {
    color: grey900,
  }
});

function mapStateToProps(state) {
  // console.log('s', state)
  return { sportsData: state };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

const routes = (
  <div>
    <Redirect from="/" to="nba" />
    <Route path=":sport" component={Home}>
      <Route path="(:gameID)" component={GameStats} />
    </Route>
  </div>
);

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  createElement = (Component, injectedProps) => {
    return <Component {...{...injectedProps, ...this.props}} />;
  }

  render() {
    return (
     <MuiThemeProvider muiTheme={muiTheme}>
       <Router history={browserHistory} createElement={this.createElement}>
         {routes}
       </Router>
     </MuiThemeProvider>
   );
  }
}
