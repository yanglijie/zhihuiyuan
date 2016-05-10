/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  PanResponder
} from 'react-native';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'testzz',
      password:'123456',
      mobile:'',
      loginErr:'',
      isLogining:false,
    };
  }
  componentWillMount() {
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'red',flexDirection:'row' }}>
        <View style={{flex:1,backgroundColor:'blue'  }} ></View>
        <View style={{flex:2,backgroundColor:'white'  }} ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


class chjApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: IndexPage,
          navigationBarHidden: true,
          title:''
        }}/>
    );
  }
}

AppRegistry.registerComponent('chjApp', () => chjApp);
