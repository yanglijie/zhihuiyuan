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
  Component,
  ScrollView,
  WebView
} = React;


//去掉html标签
function removeHtmlTab(tab) {
 return tab.replace(/<[^<>]+?>/g,'');//删除所有HTML标签
}
//普通字符转换成转意符
function html2Escape(sHtml) {
 return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
}
//转意符换成普通字符
function escape2Html(str) {
 var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
 return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}

class MsgDetailsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {


      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height
    };
  }

 _onPopMy(){

    this.props.navigator.pop();
  }
  render() {

    var eventData = this.props.eventData;
    var img = require('image!myIcon');
    
    var content = eventData.Message_content.content;
    var contentHTML = removeHtmlTab(escape2Html(content));


    return (
      <View  style={{flex:1,}}>
        
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
              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>消息详情</Text>
        </View> 
      </View>

      <View style={{flex:3}}
        automaticallyAdjustContentInsets={false}>
        <View>
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1}}>
              <View style={{flex:1,flexDirection:'row',marginLeft:this.state.screenWidth*0.03,marginTop:this.state.screenWidth*0.08}}>
                <Text style={[styles.text1,{}]}>
                        标题
                </Text>    
                <Text style={[styles.text2,{marginLeft:this.state.screenWidth*0.05,width:this.state.screenWidth*0.8}]} numberOfLines={1}>
                        {eventData.Message_content.title}
                </Text>
             </View>
              <View style={{flex:1,flexDirection:'row',marginLeft:this.state.screenWidth*0.03,marginTop:this.state.screenWidth*0.08}}>
                <Text style={[styles.text1,{}]}>
                        时间
                </Text>    
                <Text style={[styles.text2,{marginLeft:this.state.screenWidth*0.05,width:this.state.screenWidth*0.8}]} numberOfLines={1}>
                        {eventData.Message_content.create_time}
                </Text>
              </View>
            </View>
          </View>
        </View>
        
          <Text style={{fontSize:15,color:'#0067B1',marginLeft:this.state.screenWidth*0.03,marginTop:this.state.screenWidth*0.08,height:this.state.screenWidth*0.1}}>
            内容详情
          </Text>
        <ScrollView style={{flex:3}}
        bounces={false}
        showsVerticalScrollIndicator={false}
        >
          <Text 
              style={{flex:1,fontSize:14,color:'#505050',marginLeft:this.state.screenWidth*0.03,marginRight:this.state.screenWidth*0.03,}}
            >
            {contentHTML}
            </Text>
        </ScrollView>
          
        
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

  backImage: {
    marginTop:7,
    marginLeft:10,

    width: 30,
    height: 30
  },
  text1: {
    fontSize: 15,
    color:'#0067B1',
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    color:'#1E1E1E',
  },
   buttonStyle: {
    flex:1,
    backgroundColor:'#0067B1',
    marginLeft:60,
    marginRight:60,
    marginBottom:15,
    marginTop:15,
    borderRadius: 6,
  },
});
module.exports = MsgDetailsPage;