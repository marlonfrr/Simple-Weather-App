import React from 'react';
import {Button, Platform, Image, View, Text} from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/test1.jpg')}
        style={{width: 30, height: 30}}
      />
    );
  }
}
