'use strict';
 



var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Component
} = React;

class myScorePage extends Component {

	constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:'',
      valueG:'',
      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height,

    };
  }
  queryStringForQueryAndPage(data) {
      var querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');
        console.log(querystring)
      return querystring;
  };
  _onLoadOption(e){
    try {
      console.log(this.props.Gapp.cmdUrl +"Home/Login/getOption")
      fetch(this.props.Gapp.cmdUrl +"Home/Login/getOption", {
      method: 'post',
      body: this.queryStringForQueryAndPage({ 
          'lusername': this.props.Gapp.user.username,
          'lpassword': this.props.Gapp.user.password,
          'type':'integral',
      })})
      .then((response) => response.json())
      .then((json) => {
        //http success
        if(json.status == 0){
          //login success
          console.log('load image success');
          
          
          this.setState({valueG:json.detail[0].value});
          
          //console.log(this.state.valueG)
          return this.state.valueG;
        }else{
        }
      })
      .catch((error) => {
        console.warn(error);
      });
    }catch(e){
      console.log('image failed');
      return false;
    }

    return false;

  }
   componentWillMount() {
    
        this._onLoadOption();
     
    
    }
	_onPopMy(){

		this.props.navigator.pop();
	}

  render() {


     return (
      <ScrollView style={{flex:1,}}
      bounces={false}
      automaticallyAdjustContentInsets={false}>
        
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
              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>我的积分</Text>
        </View> 
      </View>

      <View style={{flex:1,}}>
        
          <View style={{flex:1,height:(this.state.screenHeight-64)*0.4,}}>
            <Text style={{color:'#0067B1',fontSize:15,marginTop:this.state.screenHeight*0.5*0.1,marginLeft:5,}}>
              积分统计
            </Text>
    
           <Image
                style={{height:2,marginTop:(this.state.screenHeight-64)*0.1*0.5,marginLeft:this.state.screenWidth*0.05,width:this.state.screenWidth*0.9}}
                source={require('./images/enterprise_integral.png')} />
           <View>
              <View style={{flex:1,flexDirection:'row',marginTop:(this.state.screenHeight-64)*0.4*0.1}}>
                <Text style={styles.text1}>
                  个人积分
                </Text>
                <Text style={[styles.text2,{marginLeft:this.state.screenWidth-220}]}>
                  {this.props.Gapp.user.score1}
                </Text>
              </View>
          </View>
          <View>
            <View style={{flex:1,flexDirection:'row',marginTop:(this.state.screenHeight-64)*0.4*0.1}}>
              <Text style={styles.text1}>
                企业积分
              </Text>
              <Text style={[styles.text2,{marginLeft:this.state.screenWidth-220}]}>
                {this.props.Gapp.user.score2}
              </Text>
            </View>
          </View>
        </View>
          <View style={{flex:1,}}>
            <Text style={{color:'#0067B1',fontSize:15,marginLeft:5}}>
              积分规则
            </Text>
            <Image
                style={{height:2,marginTop:this.state.screenHeight*0.1*0.5,marginLeft:this.state.screenWidth*0.05,width:this.state.screenWidth*0.9}}
                source={require('./images/enterprise_integral.png')} />
             <Text style={{color:'gray',fontSize:15,marginTop:this.state.screenHeight*0.5*0.1,marginLeft:20}}>
              {this.state.valueG}
             </Text>
          </View >
      </View>
      </ScrollView>
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
  text1: {
    color: 'gray',
    fontSize:15,
    marginLeft:20
  },
  text2:{
  	color:'red',
  	fontSize:15,
  	textAlign: 'right',
  	width:100
  },
  backImage: {
    marginTop:7,
    marginLeft:10,
    width: 30,
    height: 30
  },

});

module.exports = myScorePage;