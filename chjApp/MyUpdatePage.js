'use strict';
 

var Dimensions = require('Dimensions');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  Component
} = React;
var ReactNativeAutoUpdater = require('react-native-auto-updater');
class MyUpdatePage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:'',
      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height,

    };
  }
	_onPopMy(){

		this.props.navigator.pop();
	}

  render() {

    



    return (
      <View style={{flex:1,}}>
        
        <View>
          <View style={styles.container}>
            <TouchableHighlight
                    style={{flex:1}}
                    underlayColor='transparent'
                    onPress={this._onPopMy.bind(this)}
                    >
                  <Image
                    style={styles.backImage}
                    source={require('image!left_arrow')} />
                </TouchableHighlight>
                <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>检查更新</Text>
          </View> 
        </View>
      
      <View>
      	<Image style={[styles.cont],{width:this.state.screenWidth}}
          source={require('image!login_bg')} >

           <View>
            <View style={[styles.ts,{flex:1,alignItems:'center',height:this.state.screenHeight*0.3}]}>
            <Image
              style={{width:this.state.screenHeight*0.3*0.4,height:this.state.screenHeight*0.3*0.4,marginTop:this.state.screenHeight*0.3*0.3,}}
              source={require('image!myIcon')} />
          </View>
          </View>
          <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.1}}>
              <Text style={[styles.text1,{marginLeft:this.state.screenWidth*0.15}]}>
                  当前版本
              </Text>
              <Text style={[styles.text2,{marginLeft:this.state.screenWidth*0.3}]}>
                  1.4.3   
              </Text>
            </View>
          </View>
          <View>
            <View style={{flex:1,flexDirection:'row',height:this.state.screenHeight*0.1}}>
              <Text style={[styles.text1,{marginLeft:this.state.screenWidth*0.15}]}>
                    最新版本
              </Text>
              <Text style={[styles.text2,{marginLeft:this.state.screenWidth*0.3}]}>
                    1.4.9
              </Text>
            </View>
          </View>
        
        </Image>
      </View>
    </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
    backgroundColor:'#0067B1',
    height:44,
    flexDirection:'row'
  },
  cont: {
    flex: 4,
    flexDirection:'column',
    resizeMode:'stretch'
  },
  ts:{
    backgroundColor:'transparent'
  },

  text1: {
    color: 'white',
    fontSize:15,
    backgroundColor:'transparent',
  },
  text2:{
    color:'white',
    fontSize:15,
    backgroundColor:'transparent',
  },
  text3: {
    fontSize: 15,
    color:'white',
    textAlign: 'center',
  },
   buttonStyle: {
    flex:1,
    borderRadius: 6,
    backgroundColor:'#0067B1',
  },
  
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },

});

module.exports = MyUpdatePage;