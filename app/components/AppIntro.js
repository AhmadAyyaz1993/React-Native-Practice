import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationActions } from 'react-navigation'
const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 320,
    }
  });
  
  const slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      //image: 'https://goo.gl/Bnc3XP',
      //imageStyle: styles.image,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      //image: 'https://goo.gl/Bnc3XP',
      //imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      //image: 'https://goo.gl/Bnc3XP',
      //imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    }
  ];

export default class AppIntro extends React.Component {
    static navigationOptions = () => ({
        header: null
      })
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    _onDone = () => {
        // User finished the introduction. Show "real" app
        //this.props.navigation.navigate('Home')

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})]
        });
        this.props.navigation.dispatch(resetAction);
      }
      render() {
        return (
          <AppIntroSlider
            slides={slides}
            onDone={this._onDone}
          />
        );
      }
}