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
  WebView
} from 'react-native';

var WebViewBridge = require('react-native-webview-bridge');


class Optionpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:''
    };
  }
 
 _onPopMy(){

    this.props.navigator.pop();
  }
  render() {
    var note = this.props.note;
    return (
    	<View style={{flex:1}}>
         <View>
        <View style={styles.container}>
          <TouchableHighlight
                  style={{flex:1}}
                  underlayColor='gray'
                  onPress={this._onPopMy.bind(this)}
                  >
                <Image
                  style={styles.backImage}
                  source={require('image!left_arrow')} />
              </TouchableHighlight>
        </View> 
      </View>
        <WebView style={styles.webview_style} 
          automaticallyAdjustContentInsets={false}
          source={{url:note}}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
    webview_style:{  
       backgroundColor:'white',   
    },
   container: {
    flex:1,
    marginTop: 20,
    backgroundColor:'#0067B1',
    height:44,
    flexDirection:'row'
  },
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },
});
module.exports = Optionpage;