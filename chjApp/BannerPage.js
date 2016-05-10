'use strict';
 
var React = require('react-native');

var AttentAcPage = require('./AttentAcPage');
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
} = React;

class BannerPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height,
    };
  }
  _onPopMy(){
    this.props.navigator.pop();
  }
  render() {
    var varText = "10月10日是个特别的日子，今天双创园微信公众号正式上线。\r\n联想起9年前的今天，双创园正式奠基，步履蹒跚地步入我国建设创新型国家，注重创新创业的历史长河。\r\n时至今日，公众对创新创业耳熟能详，大众创业，万众创新深入人心，对“双创”这个词的含义也清晰明了。\r\n如今，“双创”这个词频度颇高，作为双创园发展的亲历者，对此感受颇深，“双创”这个词的由来更值得追本溯源。\r\n早在2006年4月25日，在漕河泾开发区浦江高科技园会议室，时任漕河泾开发区总公司总经理的刘家平先生首次用\r\n“双创”高度概括和全面阐述了创新创业对开发区科技创新、产业升级、原创经济发展的意义和作用。双创园的简称也由此正式启用。\r\n今天，回想往事历历在目，双创园的发展正融入了一个崭新的大众创业、万众创新的时代，我们为能够在这个大众创业、\r\n万众创新的时代，为技术创新、管理创新、模式创新的创业者、开拓者、追梦人提供创业空间、基础服务、高端增值服务服务而感到欣慰，\r\n为他们的艰辛和努力默默地加油鼓劲，更为双创园业已脱颖而出的微松机器人、宏力达信息、科致电气、大郡动力等一批高速健康发展，行业地位凸显，直至被并购或挂牌上市的创业成功企业喝彩";

    var img
    img = require('./images/plan_2.jpg');
    if (this.props.note == 1) {
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
        </View> 
      </View>

        <ScrollView style={{flex:1,}}
        automaticallyAdjustContentInsets={false}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <Image style={{flex:1,height:(this.state.screenHeight-64)*0.35,width:this.state.screenWidth}} 
            source={img} />
        <Text style={styles.text1}>
          {varText}
        </Text>
        <Text style={styles.text2}>
          关注我们
        </Text>
        <Image style={{flex: 1, height: this.state.screenHeight*0.25, resizeMode: Image.resizeMode.contain}} 
            source={require('./images/share_code.png')} />
        </ScrollView>
      </View>
    );
}else{
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
        </View> 
      </View>

        <ScrollView style={{flex:1,}}
        automaticallyAdjustContentInsets={false}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <Image style={{flex:1,height:(this.state.screenHeight-64)*0.35,width:this.state.screenWidth}} 
            source={img} />
        <Text style={[styles.text4,{marginTop:20}]}>
          漕河泾理念
        </Text>
        <Text style={styles.text3}>
          高与新永远是我们的追求
        </Text>
        <Text style={styles.text3}>
          客户至上 追求卓越
        </Text>
        <Text style={styles.text4}>
          智立品牌·成就非凡
        </Text>
        <Text style={styles.text3}>
          · 1988年 国家级经济技术开发区
          · 1991年 国家级高级技术产业开发区
          · 2001年 通过ISO9001质量管理体系认证
          · 2002年 通过ISO14000环境管理体系认证
          · 2012年 “发展与效率”、“技术创新”指标全国第一
          · 2013年 汇聚3000多家中外高科技企业
        </Text>
        <Text style={styles.text4}>
          园区简介
        </Text>
        <Text style={styles.text3}>
         上海漕河泾新兴技术开发区，1988年经国务院批准为国家经济技术开发区；1991年，经国务院批准为国家高新技术产业开发区。2004年7月，国务院又批准漕河泾开发区扩地发展，建设占地约10.7平方公里的漕河泾开发区，其中9.4平方公里为高科技产业区，1.3平方公里为综合配套区。园区内已逐步形成以电子信息产业为依托，集生物医药、环保、新能源、汽车配套研发为主体，辅以现代生产性服务业聚集功能的产业导向。
        </Text>
        </ScrollView>
      </View>
    );
}
    
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
    fontSize: 14,
    marginLeft:15,
    marginRight:15,
    marginTop:10,
    color:'#8C8C8C',
  },
  text2: {
    fontSize: 20,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    color:'#0067B1',
  },
  text3: {
    fontSize: 14,
    marginTop:2,
    marginBottom:2,
    marginLeft:5,
    color:'#8C8C8C',
  },
  text4: {
    fontSize: 15,
    marginTop:2,
    marginBottom:2,
    marginLeft:5,
    color:'#0067B1',
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
module.exports = BannerPage;