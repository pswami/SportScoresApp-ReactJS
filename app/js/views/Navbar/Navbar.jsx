import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // isMobile = () => {
  //   return window.innerWidth < 840;
  // }

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { router } = this.props;

    const responsiveView = {
      onLeftIconButtonTouchTap: this.toggleDrawer,
      iconClassNameRight: "muidocs-icon-navigation-expand-more",
    };

    return (
      <div className="navigation">
        <AppBar
          className="navbar"
          title="Scores"
          {...responsiveView}
        />
        <Drawer
          containerClassName="drawer"
          // docked={!this.isMobile()}
          width={250}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}
        >
          <MenuItem
            onClick={() => router.push('/nba')}
            leftIcon={<FontIcon className="material-icons" color="white">donut_large</FontIcon>}
          >
            NBA
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/nfl')}
            leftIcon={<FontIcon className="material-icons" color="white">cloud_download</FontIcon>}
          >
            NFL
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/mlb')}
            leftIcon={<FontIcon className="material-icons" color="white">dns</FontIcon>}
          >
            MLB
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/nhl')}
            leftIcon={<FontIcon className="material-icons" color="white">dns</FontIcon>}
          >
            NHL
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
