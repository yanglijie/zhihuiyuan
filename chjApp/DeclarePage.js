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
  WebView,
  Linking
} from 'react-native';

var WebViewBridge = require('react-native-webview-bridge');
var MyservicePage = require('./MyServicePage');

class DeclarePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:''
    };
  }
  _getVerifyCode(e){
    console.log('login');
    console.log(this.state.username);
    console.log(this.state.password);
  }
  _onDoRegister(){
    console.log('register');

  }
  componentWillMount(){

  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.refs.webviewbridge.sendToBridge("hahaha");
    // }, 5000);
		console.log(this.state.webUrl)
  }
  onBridgeMessage(message) {
    console.log(message);
    switch (message){
    	case 'navPop':
    		console.log('back');
    		this.props.navigator.pop();
    		break;
      case 'navService':
        this.props.navigator.push({
        component:MyservicePage,
        navigationBarHidden:true,
        passProps:{Gapp:this.props.Gapp}});
        break;
      case 'html':
        Linking.openURL("http://www.shlinganghr.com/").catch(err => console.error('An error occurred', err));
    	default:
    		console.log('default');
    	break;
    }
  }
  render() {
  	var injectScript ="var Guname = '"+this.props.Gapp.user.username+"';var Gpwd ='"+this.props.Gapp.user.password+"';"+`
			if (window.WebViewBridge) {
		      window.WebViewBridge.onMessage = function (message) {
		      	alert('got a message from Native: ' + message);
		      }
		    }
			`;
			console.log(injectScript);
    return (
    	<View style={{flex:1}}>
        <WebViewBridge style={styles.webview_style} 
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          scrollEnabled={false}
          ref="webviewbridge"
	        onBridgeMessage={this.onBridgeMessage.bind(this)}
	        source={{uri: 'newApp'+this.props.webName}}
	        injectedJavaScript={injectScript}
          >
        </WebViewBridge>
      </View>
    );
  }
}
var styles = StyleSheet.create({
    webview_style:{  
       backgroundColor:'white',   
    }
});
module.exports = DeclarePage;