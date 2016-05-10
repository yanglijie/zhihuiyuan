'use strict';
 var React = require('react-native');

var RefreshableListView = require('react-native-refreshable-listview');
var MsgDetailsPage = require('./MsgDetailsPage');
var Dimensions = require('Dimensions');

var {
  AppRegistry,
  StyleSheet,
  Image, 
  View,
  Text,
  TouchableHighlight,
  ListView,
  Component,
  WebView,
  AlertIOS
} = React;

//去掉html标签
function removeHtmlTab(tab) {
 return tab.replace(/<[^>]+>/g,' ');//删除所有HTML标签
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

function toQueryString(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class MyMsgPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        verifyCode: '',
        mobile:'',
        //EventdataList:React.PropTypes.array.isRequired,
        EventdataSource:ds.cloneWithRows([]),

        screenWidth:Dimensions.get('window').width,

      };
    }

  componentWillMount() {
    
        this._onLoadEvent();
        console.log(this.props.Mpage);
    
    }
  _onPopMy(){

    this.props.navigator.pop();
  }

  queryStringForQueryAndPage(data) {
      var querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');
        console.log(querystring)
      return querystring;
  };
   _onLoadEvent(e){
        try {
          console.log(this.props.Gapp.cmdUrl +"Home/cmd/getMsg")
          fetch(this.props.Gapp.cmdUrl +"Home/cmd/getMsg", {
          method: 'post',
          body: this.queryStringForQueryAndPage({ 
              'lusername': this.props.Gapp.user.username,
              'lpassword': this.props.Gapp.user.password
          })})
          .then((response) => response.json())
          .then((json) => {
            //http success
            if(json.status == 0 ){
              //login success
              //console.log('load Msg success');
              this.setState({EventdataSource:ds.cloneWithRows(json.detail)})
              //console.log(this.state.EventdataSource)
               var x;
              var count=0;
              for (x in json.detail)
      {
        if (!json.detail[x].Message_content) {

           }else {
          if (json.detail[x].is_read == 2) {
            
          }
          else
          {
            count ++;
          }
        }
      }
             
      this.props.Gapp.user.notifCount=count;

              return this.state.EventdataSource;
            }else{
            }
          })
          .catch((error) => {
            console.warn(error);
          });
        }catch(e){
          console.log('msg failed');
          return false;
        }

        return false;

  }
 //消息详情传参
  rowPressed(eventData) {
    
    this.props.navigator.push({
      component: MsgDetailsPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,eventData:eventData}
    });
  
  }
  //未读消息详情传参
  rowPressedRead(eventData) {
    if (eventData.is_read ==2) {
      this.props.navigator.push({
      component: MsgDetailsPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,eventData:eventData}
    });
    }else{
      try {

          fetch(this.props.Gapp.cmdUrl +"Home/cmd/setMsgIsread",{
          method: 'post',
          body: this.queryStringForQueryAndPage({ 
            'lusername': this.props.Gapp.user.username,
             'lpassword': this.props.Gapp.user.password,
             'id':eventData.id,
          })})
          .then((response) => response.json())
          .then((json) => {
            //http success
            console.log(json);
            this.props.navigator.push({
              component: MsgDetailsPage,
              navigationBarHidden: true,
              passProps: {Gapp: this.props.Gapp,eventData:eventData}
            });
            console.log('详情返回')
            this._onLoadEvent();

            this.props.Mpage._onLoadEvent1();
            // if(json.status == 0){
            //   //login success
            //   console.log('faSong success');
              
          
              
            // }else{
            //   console.log('fail');
            // }
          })
          .catch((error) => {
            console.warn(error);
          });
        }catch(e){
          console.log('resetpassword failed');
          return false;
        }
     }

        return false;
    
  }
    onDel_btn(rowData){

    try {
        
          console.log(this.props.Gapp.cmdUrl +"Home/cmd/delMessage");
          console.log(rowData.id);
          fetch(this.props.Gapp.cmdUrl +"Home/cmd/delMessage", {
          method: 'post',
          body: this.queryStringForQueryAndPage({ 
              'lusername': this.props.Gapp.user.username,
              'lpassword': this.props.Gapp.user.password,
              'id':rowData.id
          })})
          .then((response) => response.json())
          .then((json) => {
            //http success
            console.log(json);
            if(json.status == 0){
              //login success
              console.log('sanchu success');

          AlertIOS.alert(
               '删除成功',
            )
          this.props.Mpage._onLoadEvent1();
          this._onLoadEvent();
          
            }
            else{
              console.log('fail');
            }
          })
          .catch((error) => {
            console.warn(error);
          });
        }catch(e){
          console.log('shanchu failed');
          return false;
        }

        return false;

 
  }
  _getDate(strTime){
    var arr = strTime.split(" ");
    return arr[0];
    //return "2014-00-00";
  }
  renderRow(rowData, sectionID, rowID) {

    var img = require('./images/m_message_left.png')


    if (!rowData.Message_content) {

      return(<View></View>);
    }else{
      var create_time = this._getDate(rowData.Message_content.create_time);

      var content = rowData.Message_content.content;
    var contentHTML = removeHtmlTab(escape2Html(content));
    var textColor;
    if (rowData.is_read ==2) {
        textColor='#505050';
    }else{
      
      textColor='#000000';
    }
    if (rowData.is_read ==2) {

    };
      return (
      
     <TouchableHighlight style={{flex:1,marginLeft:10,marginRight:10,marginBottom:10,backgroundColor:'white'}} underlayColor='transparent' 
      onLongPress={() => AlertIOS.alert(
            '要删除该消息吗',
            null,
            [
              {text: 'Yes', onPress:() => this.onDel_btn(rowData)},
              {text: 'No',},
            ]
          )}
      onPress={() => this.rowPressedRead(rowData)}>

      <View>
        <View style={{flex:1,flexDirection:'row'}}>
          <Image
            style={{width:20,height:20,marginTop:5,marginLeft:10,marginRight:10}}
            source={img} />
          <View style={{flex:3,}}>
            <Text
              style={{fontSize:15,color:textColor,marginTop:8,marginRight:10}}
              numberOfLines={1}
              >{rowData.Message_content.title}
            </Text>
            <Text 
              style={{flex:1,fontSize:14,marginTop:10,color:textColor}}
              numberOfLines={3}
            >
            {contentHTML}
            </Text>
            <Text
              style={{fontSize:14,color:textColor,marginTop:5,marginBottom:5}}
              >{create_time}
            </Text>
          </View>
        </View>
        </View>
      </TouchableHighlight>

    );
    }
    
  }
  render() {
    return (
     <View style={{flex:1,flexDirection:'column',backgroundColor:'#f1f1f1',}}>
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
              <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginRight:this.state.screenWidth-120,marginTop:15}}>我的消息</Text>
        </View>
      </View>
          <View style={{flex:1,}}>
            <RefreshableListView
            automaticallyAdjustContentInsets={false}
              dataSource={this.state.EventdataSource}
              renderRow={this.renderRow.bind(this)}
              loadData={this._onLoadEvent.bind(this)}
              refreshDescription='正在刷新消息列表...'
            />
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
  text1: {
    color: 'gray',
    fontSize:18,
    marginLeft:20
  },
  row: {
    height: 210,
    flex: 1,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
  },
  backImage: {
    marginTop:7,
    marginLeft:10,
    width: 30,
    height: 30
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
});

module.exports = MyMsgPage;