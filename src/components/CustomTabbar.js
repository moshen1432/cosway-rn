
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
} from 'react-native'


export default class CustomTabBar extends Component {
    constructor(props: TabBarProps) {
        super(props);

        this.state = {
            activeDefaultColor: '#08086b',
            inactiveDefaultColor: '#666666'
        }
    }

    _renderTab(name, page, isTabActive, onPressHandler) {
        const { textStyle } = this.props;
        const textColor = isTabActive ? this.props.activeColor : this.props.inactiveColor;

        const fontWeight = isTabActive ? 'bold' : 'normal';

        return (<TouchableOpacity
            style={[styles.tab, this.props.tabstyle]}
            key={page}
            onPress={() => onPressHandler(page)}
        >
            <Text style={[{ color: textColor, fontWeight }]}>
                {name}
            </Text>
        </TouchableOpacity>);
    }

    _renderUnderline() {
        const containerWidth = this.props.containerWidths;
        const numberOfTabs = this.props.tabs.length;
        const underlineWidth = this.props.tabUnderlineDefaultWidth ? this.props.tabUnderlineDefaultWidth : containerWidth / (numberOfTabs * 2);
        const scale = this.props.tabUnderlineScaleX ? this.props.tabUnderlineScaleX : 3;
        const deLen = this.props.deLens ? this.props.deLens : (containerWidth / numberOfTabs - underlineWidth) / 2;

        const tabUnderlineStyle = {
            position: 'absolute',
            width: underlineWidth,
            height: 2,
            borderRadius: 2,
            backgroundColor: this.props.activeColor,
            bottom: 0,
            left: deLen
        };

        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs],
        });

        const scaleValue = (defaultScale) => {
            let arr = new Array(numberOfTabs * 2);
            return arr.fill(0).reduce(function (pre, cur, idx) {
                idx == 0 ? pre.inputRange.push(cur) : pre.inputRange.push(pre.inputRange[idx - 1] + 0.5);
                idx % 2 ? pre.outputRange.push(defaultScale) : pre.outputRange.push(1)
                return pre
            }, { inputRange: [], outputRange: [] })
        }

        const scaleX = this.props.scrollValue.interpolate(scaleValue(scale));

        return (
            <Animated.View
                style={[
                    tabUnderlineStyle,
                    {
                        transform: [
                            { translateX },
                            { scaleX }
                        ],
                    },
                    this.props.underlineStyle,
                ]}
            />
        )
    }

    render() {
      return (
          <View style={[styles.tabs, this.props.style]}>
              <View style={[styles.tabveiw, this.props.tabview]}>
                  {
                      this.props.tabs.map((name, page) => {
                          const isTabActive = this.props.activeTab === page;
                          return this._renderTab(name, page, isTabActive, this.props.goToPage)
                      })
                  }
                  {
                      this._renderUnderline()
                  }
              </View>
          </View>
        );
    };
}



const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
    },
    tabs: {
        borderColor: '#f4f4f4',
        borderBottomWidth: 1,
    },
    tabveiw: {
        flexDirection: 'row',
    }
});