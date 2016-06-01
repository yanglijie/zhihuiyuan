'use strict';
 
var React = require('react-native');

var AttentAcPage = require('./AttentAcPage');
var Dimensions = require('Dimensions');
var AttentEventPage = require('./AttentEventPage');

var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  Component,
  ScrollView,
} = React;




class ExplainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:'',
      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height,

    };
  }

 _onPushAttent(){
    var eventData = this.props.eventData;
    if (eventData.status == '1') {
      this.props.navigator.push({
        title: '活动预约',
        component: AttentEventPage,
        navigationBarHidden: true,
        passProps: {Gapp: this.props.Gapp,eventData:eventData}
      });

    };
  }
  _onPopMy(){

    this.props.navigator.pop();
  }
  render() {

    var eventData = this.props.eventData;

    var img
    switch (eventData.type_id){
      case "0":
        img = require('./images/plan_1.jpg');
        break;
      case "1":
        img = require('./images/plan_2.jpg');
        break;
      case "2":
        img = require('./images/plan_3.jpg');
        break;
      case "3":
        img = require('./images/plan_4.jpg');
        break;
      case "4":
        img = require('./images/plan_5.jpg');
        break;
      case "5":
        img = require('./images/plan_6.jpg');
        break;
      default:
        img = require('./images/plan_7.jpg');
        break;
    }
    var buttonColor
    switch (eventData.status){
      case "1":
        buttonColor='#0067B1';
        break;
        default:
        buttonColor='gray';
        break;
    }



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
              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>活动详情</Text>
        </View> 
      </View>

      <View style={{flex:3,}}>
        <View>
          <Image style={[styles.image,{height:(this.state.screenHeight-113)*0.4}]} 
            source={img} />
        </View>
        <ScrollView style={{flex:3,}}
        bounces={false}
        showsVerticalScrollIndicator={false}>
          <View style={{flex:2,flexDirection:'row'}}>
            <View style={{flex:2,flexDirection:'row',width:this.state.screenWidth*0.5}}>
              <Text style={styles.text2}>
              开始时间
              </Text>
              <Text style={[styles.text3,{width:this.state.screenWidth*0.3}]}>
              {eventData.stime}
              </Text>
            </View>
            <View style={{flex:2,flexDirection:'row',width:this.state.screenWidth*0.5}}>
              <Text style={styles.text2}>
              结束时间
              </Text>
              <Text style={[styles.text3,{width:this.state.screenWidth*0.3}]}>
              {eventData.etime}
              </Text>
            </View>
          </View>
          <Image
                style={{height:2,marginTop:5,width:350}}
                source={require('./images/enterprise_integral.png')} />
          <View style={{flex:2,flexDirection:'row'}}>
              <Text style={styles.text2}>
              地点
              </Text>
              <Text style={{fontSize: 15,marginLeft:5,color:'gray',marginTop:10,}}>
              {eventData.address}
              </Text>
          </View>
          <Image
                style={{height:2,marginTop:10,width:350}}
                source={require('./images/enterprise_integral.png')} />
          <Text style={styles.text2}>
              活动详情
          </Text>
          <Text style={{fontSize: 15,marginLeft:10,color:'gray',marginTop:10,marginRight:10}}>
              {eventData.explain}
          </Text>
        </ScrollView>
        <View>
          <TouchableHighlight
                  style={[styles.buttonStyle,{backgroundColor:buttonColor}]}
                  underlayColor='gray'
                  onPress={this._onPushAttent.bind(this)}
                  >
                <Text style={styles.text1}>
                立即参与
                </Text>
              </TouchableHighlight>
        </View>
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
  image: {
    marginLeft:0,
    marginRight:0,
  },
  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },
  text1: {
    fontSize: 15,
    marginBottom:10,
    marginTop:10,
    color:'white',
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    marginTop:10,
    width:60,
    marginLeft:10,
    textAlign: 'left',
    color:'#0067B1',
  },
  text3: {
    fontSize: 15,
    marginLeft:10,
    color:'gray',
    textAlign: 'left',
  },
   buttonStyle: {
    flex:1,
    marginLeft:60,
    marginRight:60,
    marginBottom:15,
    marginTop:15,
    borderRadius: 6,
  },
});
module.exports = ExplainPage;