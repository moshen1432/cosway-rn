
import React, { PureComponent } from 'react'
import { Text, StyleSheet ,TouchableOpacity} from 'react-native'
import { scale, width,colors } from '@/utils/device';

export default class LargeBtn extends PureComponent {
  render(){
    return(
      <TouchableOpacity style={[styles.btn,this.props.btnStyle]} 
        activeOpacity={0.6} onPress={this.props.press}> 
        <Text style={styles.btnText}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  btn: {
    marginTop: scale(25),
    marginBottom: scale(20),
    height: scale(44),
    backgroundColor: colors.blue2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: scale(18),
    color: 'white'
  },
})