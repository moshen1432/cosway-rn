
import React, {Component} from 'react';
import {Text, View, Image, 
  TouchableOpacity
} from 'react-native';
export default class SplitView extends Component{
  render(){
    const container = {
      height: this.props.height,
      backgroundColor: '#f0f0f0'
    }
    return(
      <View style={container}>
      </View>
    )
  }
}