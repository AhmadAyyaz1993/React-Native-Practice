import React, { Component } from 'react'

import Home from '../components/home'
import Home2 from '../components/home2'
import { connect } from 'react-redux'
import { StackNavigator , addNavigationHelpers} from 'react-navigation'

export const Navigator = new StackNavigator({
  Home: { screen: Home },
  Home2: { screen: Home2 },
},{
  initialRouteName: 'Home',
})

class Nav extends Component {
    render() {
      return (
        <Navigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
        })} />
      )
    }
  }
      
  const mapStateToProps = state => ({
    navigation: state.navigation,
  })
  
  export default connect(mapStateToProps)(Nav)