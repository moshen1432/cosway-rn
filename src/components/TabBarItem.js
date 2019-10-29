
import React, { PureComponent } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { scale, width } from '@/utils/device';

export default class TabBarItem extends PureComponent {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <View style={[styles.tabItem, this.props.style]}>
                <Image
                    source={this.props.focused
                        ? selectedImage
                        : this.props.normalImage}
                    style={[styles.tabImg, { tintColor: this.props.tintColor }]}
                />
                <Text style={[styles.tabLable, { color: this.props.tintColor }]}>{this.props.text}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    tabItem: {
        height: scale(52),
        minWidth: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 0,
    },
    tabLable: {
        width: width * 0.16,
        fontSize: 10,
        textAlign: 'center',
    },
    tabImg: {
        width: scale(20),
        height: scale(20),
        marginLeft:0.5
    },
})