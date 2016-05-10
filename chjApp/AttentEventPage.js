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
var MyActivityPage = require('./MyActivityPage');

class AttentEventPage extends Component {
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
      case 'navEvent':
        console.log('navEvent');
        this.props.navigator.push({
          component: MyActivityPage,
          navigationBarHidden: true,
          passProps: {Gapp: this.props.Gapp}
        });
      break;
    	default:
    		console.log('default');
    	break;
    }
  }
  render() {
  	var injectScript = "showEvent("+ this.props.eventData.id+",'"+this.props.Gapp.user.username+"','"+this.props.Gapp.user.password+"')";
        
          //"gEid = " + this.props.eventData.id+";Guname = '"+this.props.Gapp.user.username+"';Gpwd ='"+this.props.Gapp.user.password+"';}";
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
	        source={{uri: 'newApp/Reservation.html'}}
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
module.exports = AttentEventPage;