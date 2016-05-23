/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict'
 
var Swiper = require('react-native-swiper');
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var base64IconMsg = 'data:image/png;base64,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'
var base64IconMsgPress='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABECAYAAADA82hFAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABrVJREFUeAHtm3tsFEUYwL/dvUevpaW1gAgVgkBRXhFQpOIrtBpRgxgtCJRoKUgQiRiNFfCPC6iEBJFoeEWLIGAggGCgoZZqQGgRUugh2NIHUA6kPPpu7653vd1xlrDkerePOXd73p2798fMfI+Zb347u3szswugHzoBnYBOQCegEyAgQBHY+JhYacjsHQtxsQbwmLBvi48uirKUl4ULZhecnt8p1ytyeGlrLMyIgTMBQTZQMFGu0kjXIYAKQGg353ZthO2z66T6QwZv3CYjMy55DXDUe1IVRaWcQoWsw/0O/Djrilj/aDGhv4x5NHnm/w4ccPWAqBdoS8wCyFzXw58JXyaCh+2mizlHt4zuxfePotC7kNA3WayvRPAQzQ4Wc452GUJsLcYXD6zbItZXIniAaDI7sRYiWsbcfdqaRHtBBgXR+AGkH/4EyOD5e+nlOwR0eCoGgg5Ph6eCgApXfeTp8FQQUOGqjzwV8AwqfCVde1gMsDhjKDw3rOus5khlA6wtqoZ2l1fSl1c8ldoL+w+GxFgjpCRZLl9rcg1qdnZi34twvKpe1jcrbQC8PXFAF5stxXbYfsLeRaZFgWhVhc7ZW0VRMJSkwZT7YsFmnQSJFqOouZfl2oYsPRx/rdEpql89fRQGN0RUxwvXFtXAR7vOBej5E7Z/4QR8wnoH6HhBm8t96sHcwvFKJ87XGSGo5vvNetEjsOWNC746Pq/pZct34MJn6TVS4PgGDQwdf9Y6yc7b+h/8qJEDx9vz+gOL0r7w9636/Pl9UuB423iLefypJc8W+fupKWsKL/fFYRBjNEgPm7uR9rQYB5QuS8/zDZy/VLfMGecrksxPHt13KW8vHHy+T3zMa0JZKk19ICFj65zHc6T0wco1hfdBxmAXaQD9k8xZvrb8PS6YY8fcx4oF+61zxlYJeaV0zMCE5Uo2pHpN4cWYGNGlG7FgLCbGzAI1XNBNHdNPyBKl/ZMs97YCBibHpRI5YaPh/RL6s17PIFJ7OTtN4ck1JKrzeFhReXcL3ShGiyb+W3ha9ODf1GExaLLEpik8h5uV3arz7Wery8sZaOZ+QdbW4T4l5EnSqptt9zZlbPZm+T9/PhWWXGzogE5Ok35rUokQ22l74yEhr5QW/VV3Ehno3wW72Xll44U8SVpW27xRsLtc7ywQ8krpn1dbihmzsVzJjkSvKbwp3/wxxeVh5acPOCqnh2U3l9gX+QZ40FYH9sb2fF+ZVP5o5e3zs74rXSnoMzeczLp029EslKXS8rrWjgXbziyU0gcr1xQe/+995cGKebUNTsmOVN5oda3Kr8kpOHer1D/Yh3IPv1xS07jDX+5b3lpSW5q++vhIXxmff3N98Qw8dbvuLxfKReU3mrO/PTOVoZmAmYJgE2yq+fSMD4CfPRS8/2TBqJSe6XFmw515WnuH13vycsOJ7O9tR683OT+VC/TYx8/Mf7hf/KqkOFOiYHertcPxs+3GVwu2lcn6/vLh03snDEqc4ttuUXn9b6+vP3EMT7VWCPWRpErTs26BRxJYJNgowdP0so0EIFrGqMNTQVOHp8NTQUCFqz7ydHgqCKhw1UeeDk8FARWu+sjT4akgoMKVbORRHNE0TkUcEelKCI9WXGaKyN4rB313T8YjakkEj0Jchah3lAvxKkwKAlQDnEF0h54IHn6l/oco5yTdPcRshmq4LWbAiAn9ZagMVVNjRnbiMzHJXxfVZQTbOE/7KsifKfqdGPmDYITVxKSNzACOzsKfFozGb8ib8GdUsrtQuHLi/VTFk0BBE15fEx0Bir7BGFD4cx0EVwBxe9iG9j2wP1tyVZwcnhBA5hoLmPoYweNQ9o0zUQYqbiximF8F96BTCh2iWG6Ft9FRAUaP7MkKum4phxaLFwov4bcfrJyUCS9XBiDnTahj5u5/CYAl2tzpUiUNm9hWz3LYOUNyb6KLfYgLZA8MlUGxN21HEAUXg6kG0bCMbWJzwxUc35eQwIMDVidw+Ed6IJTDXf37S9g9TfRGTVpNd9sFviTX3S0q1Y/gFTbvPN48l7/fKFUTCn1YwaMR+0Rn3rSgXrsIBSSpNkJz2Uq1LsgRlY9fXU2NJHB86KGDR0v9J6TWsU2Oefid32qBZaSkobxsAx4YeN64hGup3gA/fRLWDwapkxlKeH4xUG9xLed2wm6r+JKFn3U4FkMJ784tAgFdSSN6sTfv1UIMJGA0hiMkqZhCCY9DFGdjWM+8zs0zAt6QkgownOWhgkfjMbaPQewuDO5sOAMJz9gmf20Oz8D0qHQCOgGdgE6AhMA/xGMAqhr7ZgUAAAAASUVORK5CYII='
var base64IconHome = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAyxJREFUSA2tlbtrVFEQxvfuKxo1QcUsgguKL3BVtDAWCi4oWlmIJLERQf8BKy1EjKWm0YhgZWEjCIISERQkaaJE6y0tF0E7IYrJbtbfd/fM9dybfQYHZmfOmZlvHvecs6nU2iiTCNM6SOx1XSZBugbgkIXr8Eg6nb6SzWZXoCprJU/DDbgn6ie5wJW4lsvlRoMgmCZ5rdFoTKAPIb9gU2Jh9lwAvl1JHYVjzWQyF+F5Oj7jogqsZyjknoeiIv8LRUAkuE6iWVD3OuQBJwP2n8LPWNs0c862ZhElptOHgL8EaaNDM/DIh+Lu4vMO+/aEj1v2Lgx8HYAv4MdeqNlsy7pN4XcVnudcHHVGFdfXTTDwXQB9oKMblgUZdertSdW5CItgSmXiPsEXnI/dBLdsLSInAE4Q/BG+1AeA4q3w/cTO6px4qVRgS1KgWKO7DC8wuuPOs9/RWQHD4LyGpx2ORMsCwk2X+BVOW1yAAbllzyJvnnR/n0k+sDUybHJVFTwYRzD+gnWN5LQM90uKW4K3kfQk8juP0AHkICxqTrip//vlqfxMAXo6bzOFKuuvWPt5tQSsFy5PvLodhX+Co9FXYbOjximsSFskvwXfceZVE4qHxVZ27XaS/A2WIc8a4WsvCaqK7SqtoP+Wk0cKFrh8TEoXJ7EUr8+3ARbJR/gRaSNJ5iAw0+Vj49I/WjuKdYaTTUH+KiZGrZKbQzJxGMwBOs3328O50IFSMhW5XK/X3yO/uT1ERD5OtCklOaqY0VuEHekacmpvsj+IHIELsMZ6zB0uneaaF9dR7dS5HxhWT6LDbM7Q+SPfiL6e5M+R+kPR7eiJeu3cwDRqe3T0iJi+GV02f8TJ7485Tt06twfGDos/Uh08Sya7dPNXFunyaVtE28654+pqKxwRh0xrK9gHVfJheFPk3Pzf1x1vezv8q2BxAm3wDRc52eN857MkPYc+QUEjtVrtCfYfch4bGwtKpVK6UqksTk1N7cZ+LZ/Pn+IP6Tzx4wO53MKfpaW3xKfn5uZsSgptSUG5XM4Can8K+UKhcKhYLB7Eex8cTkr2ycnJVlPTt98B6+BJ70h/AfFZpzqMMOPrAAAAAElFTkSuQmCC'
var base64IconHomePress = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABECAYAAACCsBvSAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABndJREFUeAHtnX9sFEUUx9+b2Wt7kNKmBguGmAAGtEWkECQCYv1BEAQklFaKii0t6j9qTIxE/mr4S6JCVMCCxaIxCHetKD9CgpqcIZgg0CugJf4MGgMoTWxEkN7d7nMOUyK0vdu9u9mZJbtJe3ezb9578/3c/prZ2QPwF+0VQO0zdJYgg+qNQyCAAbgUJOj55TJEmi47c6Gf9Y0DacrmAJ88vAbM2HPAAtOuSG3BFpPH34B3l36vn/T2M7oxIFU35bGi8lcQWNP1TSeiLm7FV8Rbaw9fv84rn70PqVwAml6+BomtSiU6JqxZiW3VB1PZ6LrO25DmvpXPRo1MAnrZjsBeBeVdSHWtBYwXvoqIL9gB1GeDVmJ24r3HPu/77IVX5oUk++UoABmscK1TQEk/xIzPjLrQ7H4+NS7wHqSFWws5G7KeGD6fqa5k8AO8sW1epvXdructSAvXFvKbitcBM57NXijcx+t3zBd+tN/la5/gVRjVLSW8sOh1YKz+alku3iTiVea2pbuEK8qFOxk+vAEpCaio5E2h4xMyRAAwq82WmnZdQekPqXZ7KQ8WrAdGtXIA9XmlZWbLkp3ik9VXosur3sekutYRPBjYIB9QEgdu5/Vty8Qb7TThunxb+uXR+OEojkPfFsegqn7rZBUwXMymLDlNHeUnACLaHKP0hLQ8dCs32DsA/FFZPAb3yxaxiuG/URSOA3RpAUo/SE+GRgtAmwD5I4MLKXkN4kKsKDtD0XIBKqL8GKUXpOXvj+NGfjNwnCMZQ1r3ojdjPk4q7aZYWSecj5hpK0g00AfSitB4zvI2AWcPSWyvI9eIMBdvGdFNI2d0wo/7lYHSA1Jd6E7OA83i2r/SkYouGCMToIqLL9CYqg7oCidcCNkvhPrrpMa2idxiG8Vp9sx+2WlUQIytssDYAFsWXHI7LaVbUqAhdDcg7hS7lUluN9xpPCSajWTGqXRmVOz6ep3Wz8ZeGaQkIAv5YQQsyaYBbtYVu51KLC6J0Zj7o9C11zVQSiAZDe2zCNkhNwXOVSwkqxKDhUgVizsgGv4nV35T+XEdkrHy4/vEFeKXqZLSfR0CzUTkjCbM64Djn0gH5SYkNFa2zSECTw1dD/aFEbu+GVz0/FrjH4zCN3suDmaXi3K3ICFfGX5YjF3vz0XS+vigaSw/OITGzhWn55/+LSsvNyAJQO0LgHCvrEYo9juVBfOKqGzBUTixSwoo6ZAC9W3TCPELxUJKDo9T0OC9dMe9R+Fk7k/PpY+dWAGsl6yQFu7F3bOrA3zE7TKSkQ4JLLpNRuI6+iQDi2XkJR8S8W4Zievps0BKl5F8SGDt1lPQHGdFZnuiN3Y6x16vuJN+4kBFZaew5OaY6P55QEYDtPBJcMi0zNXwQY2UKTbimsyFRcx8gMkTJjKDTUdMTATGG1yIKieEBftEj8lxYJYYXzIsNK1T5uXeCHy07Hc5AV2/e7OaQ+W8ABs37Cm0oFlWo6T5JdhsXoytgZPf/XecLRhJcOyZ5BiT1HshDGkNGtBx2IRI2LTGtR+Rvp8dMH52hcTgBOyoPZOdF+e1XThxGCApMyb1mzdAxNwUoakkbzWQLDHM58WFuJK81UDyIiCFOfuQFIpvN7QPya5SCu18SArFtxvah2RXKYV2PiSF4tsN7UOyq5RCOx+SQvHthvYh2VVKoZ0PSaH4dkO73MFqNy1bdo0I5q8knpuW1lrcyA3ImOirrhV/j6e118zAo5CsRWbLt3sAmpzNwqsLHeMG9xwkT+7umBk45xhQcuvYVnMOkCKabShp0/EkJDFekMVwFFPSk52WRAoDT0JK0Z4bcpUPyQNYfUg+JA8o4IEU/S3Jh+QBBTyQor8l+ZA8oIAHUlSzJVkKLyhFL54HuFyTohpIkMjqRz6Qm8767K5pspnxo2cQSeoE5mvS/N8HNZAuGT+IPrQMZ6HjwTiZGc95ErcKi8ejZbaIJ/T/lFnN7GqpgRSuiYGFrRmlTolm2Frzc0Z1RSUrhlvE/6+c1icwX0tc+POk03q5sM+iozK78BT94xS7a+oRIBoODMem9SbmAInnEL1odh7YBWePiWknGS6doW6qqPqaUSBfbM2T7XgRD396yerp2QDhp3vs2OfaRvVBFMWPUg0FyM8DGCba9tfg7evFOOxuuDC4gcM196wLwujSAogHhAYp4oJpwvmzF8WPZWV8LHOYmW/uRQX+BV0lpAvzvebiAAAAAElFTkSuQmCC'
var base64IconEvent = 'data:image/png;base64,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'
var base64IconEventPress='data:image/png;base64,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'
var base64IconMy = 'data:image/png;base64,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'
var base64IconMyPress ='data:image/png;base64,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'
var Dimensions = require('Dimensions');

var DeclarePage = require('./DeclarePage');

var SharePage = require('./SharePage');
var EventPage = require('./EventPage');
var BannerPage = require('./BannerPage');


var ExplainPage = require('./ExplainPage');
var RefreshableListView = require('react-native-refreshable-listview');
var MyActivityPage = require('./MyActivityPage');
var MyservicePage = require('./MyServicePage');
var MyScorePage = require('./MyScorePage');
var MyPasswordPage = require('./MyPasswordPage');
var MyMsgPage = require('./MyMsgPage');
var MyUpdatePage = require('./MyUpdatePage');
var MsgDetailsPage = require('./MsgDetailsPage');
var OptionPage = require('./OptionPage');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TabBarIOS,
  PanResponder,
  Animated,
  Easing,
  ListView,
  StatusBarIOS,
  NativeModules,
  PushNotificationIOS,
  WebView,

  AlertIOS
} from 'react-native';

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
var imagedata = new Array();

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
      mobile:'',
      
      presses:0,
      selectedTab:'indexTab',
      moveDx:new Animated.Value(0),
      Msg_id:'',
      startWidth:0,
      imageSource:'',
      sliderWidth:Dimensions.get('window').width*0.6,
      screenWidth:Dimensions.get('window').width,
      screenHeight:Dimensions.get('window').height,
      //EventdataList:React.PropTypes.array.isRequired,
      EventdataSource:ds.cloneWithRows([]),
      EventdataSource1:ds.cloneWithRows([]),
      imageSwiperStr :[<View style={styles.slide} >
                <Image style={styles.image}  />
              </View>],
      isshowslider:true
    };
  }

   
  
  _pressSwiper(e){
    console.log('e');
  }

  _onPressHomeBtn1(e){

    this.props.navigator.push({
      title: '融资上市',
      component: DeclarePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,webName:'/Financing.html'}
    });
  }
  _onPressHomeBtn2(e){
  	
    this.props.navigator.push({
      title: '申报项目',
      component: DeclarePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,webName:'/Declare.html'}
    });
  }
  _onPressHomeBtn3(e){
    this.props.navigator.push({
      title: '技术服务',
      component: DeclarePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,webName:'/Technical.html'}
    });
    
  }
  _onPressHomeBtn4(e){
    this.props.navigator.push({
      title: '人才服务',
      component: DeclarePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,webName:'/Talent.html'}
    });
  }
  _onPressHomeBtn5(e){
    this.props.navigator.push({
      title: '帮我推荐',
      component: DeclarePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,webName:'/Help.html'}
    });
  }  

  _onTopBtn1(e){
    var sliderWidth = this.state.sliderWidth;
    var toWidth = 0;
    if(this.state.moveDx._value < (sliderWidth/2) ){
      toWidth = sliderWidth;
    }
    
    console.log(toWidth)
    

    this._onSlider(toWidth);
  }
  _onTopBtn2(e){
  	console.log('你触碰了屏幕');
  }
  _onTopBtn3(e){
    this.props.navigator.push({
      title: '分享',
      component: SharePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp}
    });
  }
  _onTopBtn4(e){
  	this._onLoginOut();
    this.props.navigator.pop();
  }
  queryStringForQueryAndPage(data) {
    var querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');
      console.log(querystring)
    return querystring;
  };
 _onLoginOut(e){
    try {
      console.log(this.props.Gapp.cmdUrl +"Home/Login/logout")
      fetch(this.props.Gapp.cmdUrl +"Home/Login/logout", {
      method: 'post',
      body: this.queryStringForQueryAndPage({ 
          'lusername': this.props.Gapp.user.username,
          'lpassword': this.props.Gapp.user.password
      })})
      .then((response) => response.json())
      .then((json) => {
        //http success
        if(json.status == 0){
          //login success
          console.log('logout success');
          
        }else{
        }
      })
      .catch((error) => {
        console.warn(error);
      });
    }catch(e){
      console.log('event failed');
      return false;
    }

    return false;

  }
  _onLoadEvent(e){
    try {
      console.log(this.props.Gapp.cmdUrl +"Home/cmd/getEvent")
      fetch(this.props.Gapp.cmdUrl +"Home/cmd/getEvent", {
      method: 'post',
      body: this.queryStringForQueryAndPage({ 
          'lusername': this.props.Gapp.user.username,
          'lpassword': this.props.Gapp.user.password
      })})
      .then((response) => response.json())
      .then((json) => {
        //http success
        //console.log(json);
        var ss = this.queryStringForQueryAndPage({ 
          'lusername': this.props.Gapp.user.username,
          'lpassword': this.props.Gapp.user.password
      })
        console.log(ss);
        if(json.status == 0){
          //login success
          console.log('load event success');
          this.setState({EventdataSource:ds.cloneWithRows(json.detail)})
          
          return this.state.EventdataSource;
        }else{
        }
      })
      .catch((error) => {
        console.warn(error);
      });
    }catch(e){
      console.log('event failed');
      return false;
    }

    return false;

  }

  //活动详情传参
  rowPressedA(eventData) {
    console.log('eventData for pass')
        ///console.log(eventData)
    this.props.navigator.push({
      title: eventData.title,
      component: ExplainPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,eventData: eventData}
    });
  
  }
  _getDate(strTime){
    var arr = strTime.split(" ");
    return arr[0];
    //return "2014-00-00";
  }
  renderRow(rowData, sectionID, rowID) {
    var img
    switch (rowData.type_id){
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
    var buttonTitle
    switch (rowData.status){
      case "1":
        buttonColor='#0067B1';
        buttonTitle='预约中';
        break;
        default:
        buttonColor='gray';
        buttonTitle='已结束';
        break;
    }

    var sTime = this._getDate(rowData.stime);
    var eTime = this._getDate(rowData.etime);

    return (
      <TouchableHighlight style={{flex:1}} underlayColor='#dddddd' 

      onPress={() => this.rowPressedA(rowData)}>

      <View>
        <View style={{flex:1,flexDirection:'row'}}>
          <Image
            style={{width:70,height:70,margin:10,}}
            source={img} />
          <View>
            <Text
              style={{fontSize:15,color:'#2B2F2C',marginTop:10,}}
              >{rowData.title}
            </Text>
            <Text 
              style={{fontSize:12,marginTop:10,color:'#969696',width:this.state.screenWidth*0.8-30}}
              numberOfLines={1}
              >地点：{rowData.address}
            </Text>
            <View style={{flex:1,flexDirection:'row',marginTop:10,}}>
              <View
                style={{width:50,height:20,backgroundColor:buttonColor,borderRadius: 4,}}>
                <Text style={{fontSize: 12,marginBottom:3,marginTop:3,textAlign: 'center',color:'#FFFFFF'}}>
                   {buttonTitle}
                </Text>
                </View>
                <Text style={{fontSize:12,marginLeft:5,marginTop:2,color:'#969696'}}>
                {sTime}
                ---
                {eTime}
              </Text>
            </View>
          </View>

        </View>
        <View style={styles.separator}/>
        </View>
      </TouchableHighlight>

    );
  }

//获取消息列表
_onLoadEvent1(e){

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
              this.setState({EventdataSource1:ds.cloneWithRows(json.detail)})
              //console.log(this.state.EventdataSource1)
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
			

            return this.state.EventdataSource1;
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
  //删除消息
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
          this._onLoadEvent1();
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
    }
    else{
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
            this._onLoadEvent1();
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
 
  renderRow1(rowData, sectionID, rowID) {
    var img = require('./images/m_message_left.png')

   
    if (!rowData.Message_content) {
     
      return(<View></View>);
    }else{
      var create_time = this._getDate(rowData.Message_content.create_time);

      var content = rowData.Message_content.content;
    var contentHTML = removeHtmlTab(escape2Html(content));
    var textColor;
    if (rowData.is_read ==2) {
        textColor='#505050'
    }else{
      
      textColor='#000000'
    }
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
  //轮播图的请求
  _onLoadOption(e){
    try {
      console.log(this.props.Gapp.cmdUrl +"Home/Login/getOption")
      fetch(this.props.Gapp.cmdUrl +"Home/Login/getOption", {
      method: 'post',
      body: this.queryStringForQueryAndPage({ 
          'lusername': this.props.Gapp.user.username,
          'lpassword': this.props.Gapp.user.password,
          'type':'banner'
      })})
      .then((response) => response.json())
      .then((json) => {
        //http success
        if(json.status == 0){
          //login success
          console.log('load image success');
          var imageStr = [];
          imagedata=json.detail;
          console.log('imageStr:')
          
          //this.setState({imageSwiperStr:imageStr});
          
          //console.log(imageStr)
          return imagedata;
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
   _onPressOption(note){

    this.props.navigator.push({
      title: '轮播图',
      component: OptionPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,note:note}
    });
  }  
  _onPressOptionLocal(note){
  	this.props.navigator.push({
      title: '轮播图',
      component: BannerPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,note:note}
    });
  }
  _renderContent(color: string, pageText: string, num?: number) {

  	var image1 = require('image!home_btn2');
  	var image2 = require('image!home_btn2');
    var urldata=[];
    var valuedata=[];
    for (var i=0; i<imagedata.length;i++){
            valuedata=valuedata.concat(imagedata[i].value)
            urldata=urldata.concat(imagedata[i].note)
          }
 
    if(pageText == 'indexTab'){
      var sss = (<View style={styles.slide} >
                <Image style={styles.image} source={{uri: 'http://139.196.105.5/update_json/zhihuiyuan/2.png'}} />
              </View>);
      
      	return(
      
        <View style={{flex:1,flexDirection:'column'}} >
          <View style={[styles.navBar,{width:this.state.screenWidth}]} {...this._panResponder.panHandlers}  >
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}} >
              <TouchableHighlight style={styles.minbtn1}
                onPress={this._onTopBtn1.bind(this)}
                underlayColor='transparent'>
                <Image
                  style={styles.minbtn}
                  source={require('image!slideBtn')} />
              </TouchableHighlight>
            </View>
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
              <TouchableHighlight style={styles.minbtn}
                underlayColor='transparent'>
                <Image
                  style={styles.minbtn}
                  source={require('image!topBtn')} />
              </TouchableHighlight>
            </View>
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight style={[styles.minbtn1,{marginLeft:this.state.screenWidth*0.1}]}
                onPress={this._onTopBtn3.bind(this)}
                underlayColor='transparent'>
                <Image
                  style={[styles.minbtn,{alignItems: 'center'}]}
                  source={require('image!shareBtn')} />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{flex:1}}>
            <Swiper style={styles.wrapper} height={(Dimensions.get('window').height-113)*0.4}
             
              dot={<View style={{backgroundColor:'rgba(255,255,255,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, }} />}
              activeDot={<View style={{backgroundColor: '#FFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, }} />}
              paginationStyle={{}} loop={true}
              autoplay={true}
              >
              

              <TouchableHighlight style={styles.slide} 
                  onPress={() => this._onPressOption(urldata[0])}
                  underlayColor='transparent'
                    >
                <Image style={[styles.image,{height:(Dimensions.get('window').height-113)*0.4}]} source={{uri: valuedata[0]}} />
              </TouchableHighlight>
              <TouchableHighlight style={styles.slide} 
                  onPress={() => this._onPressOption(urldata[1])}
                  underlayColor='transparent'
                    >
                <Image style={styles.image} source={{uri: valuedata[1]}} />
              </TouchableHighlight>
              <TouchableHighlight style={styles.slide} 
                  onPress={() => this._onPressOption(urldata[2])}
                  underlayColor='transparent'
                    >
                <Image style={[styles.image,{height:(Dimensions.get('window').height-113)*0.4}]} source={{uri: valuedata[2]}} />
              </TouchableHighlight>
              <TouchableHighlight style={styles.slide} 
                  onPress={() => this._onPressOption(urldata[3])}
                  underlayColor='transparent'
                    >
                <Image style={[styles.image,{height:(Dimensions.get('window').height-113)*0.4}]} source={{uri: valuedata[3]}} />
              </TouchableHighlight>
              <TouchableHighlight style={styles.slide} 
                  onPress={() => this._onPressOption(urldata[4])}
                  underlayColor='transparent'
                    >
                <Image style={[styles.image,{height:(Dimensions.get('window').height-113)*0.4}]} source={{uri: valuedata[4]}} />
              </TouchableHighlight>
            </Swiper>
          </View>
          <View style={{flex:2,flexDirection:'row',marginTop:(Dimensions.get('window').height-113)*0.1,width:this.state.screenWidth}} {...this._panResponder.panHandlers}>
            <Image
              style={{flex:1,resizeMode: Image.resizeMode.contain,flexDirection:'column',height:(Dimensions.get('window').height-113)*0.6}}
              source={require('image!home_bg')}>
              <View style={{flex:1,flexDirection:'row',marginTop:(Dimensions.get('window').height-113)*0.01}}>
                <View style={{flex:5}}>
                  <TouchableHighlight style={{flex:1,flexDirection:'row',}}
                    onPress={this._onPressHomeBtn1.bind(this)}
                    underlayColor='transparent'>
                    <Image

                      style={{flex:1,resizeMode: Image.resizeMode.contain,height:((Dimensions.get('window').height-113)*0.6-70)/3}}
                      source={require('image!home_btn1')} />
                  </TouchableHighlight>
                </View>
                <View style={{flex:1}}></View>
                <View style={{flex:5}}>
                  <TouchableHighlight style={{flex:1,flexDirection:'row'}}
                  onPress={this._onPressHomeBtn2.bind(this)}
                    underlayColor='transparent'>
                    <Image
                      style={{flex:1,resizeMode: Image.resizeMode.contain,height:((Dimensions.get('window').height-113)*0.6-70)/3}}
                      source={require('image!home_btn2')} />
                  </TouchableHighlight>
                </View>
              </View>
              <View style={{flex:1,flexDirection:'row',}}>
                <View style={{flex:5}}>
                  <TouchableHighlight style={{flex:1,flexDirection:'row'}}
                  onPress={this._onPressHomeBtn5.bind(this)}
                    underlayColor='transparent'>
                    <Image
                      style={{flex:1,resizeMode: Image.resizeMode.contain,height:((Dimensions.get('window').height-113)*0.6-70)/3,marginLeft:-this.state.screenWidth*0.15}}
                      source={require('image!home_btn5')} />
                  </TouchableHighlight>
                </View>
                <View style={{flex:1}}></View>
                <View style={{flex:4}}>
                  <TouchableHighlight style={{flex:1,flexDirection:'row'}}
                  onPress={this._onPressHomeBtn3.bind(this)}
                    underlayColor='transparent'>
                    <Image
                      style={{flex:1,resizeMode: Image.resizeMode.contain,height:((Dimensions.get('window').height-113)*0.6-70)/3,marginLeft:this.state.screenWidth*0.02}}
                      source={require('image!home_btn3')} />
                  </TouchableHighlight>
                </View>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:5}}></View>
                <View style={{flex:5}}>
                  <TouchableHighlight style={{flex:1,flexDirection:'row',position:'relative',left:20}}
                  onPress={this._onPressHomeBtn4.bind(this)}
                    underlayColor='transparent'>
                    <Image
                      style={{flex:1,resizeMode: Image.resizeMode.contain,height:((Dimensions.get('window').height-113)*0.6-70)/3}}
                      source={require('image!home_btn4')} />
                  </TouchableHighlight>
                </View>
              </View>

            </Image>
          </View>
          <View style={{width:this.state.screenWidth,height:10,backgroundColor:'white'}} />
          <View style={{width:this.state.screenWidth,height:5,marginBottom:49,backgroundColor:'#f1f1f1'}} />
        </View>

        )

    }else if(pageText == 'eventTab'){
      return(
      <View style={{flex:1,flexDirection:'column'}} >
          <View style={[styles.navBar,{width:this.state.screenWidth}]} >
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}}>
            </View>
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight style={styles.minbtn}
                underlayColor='transparent'>
                <Image
                  style={styles.minbtn}
                  source={require('image!topBtn')} />
              </TouchableHighlight>
            </View>
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}}>

            </View>
          </View>
          <View style={{flex:1}}>
            <RefreshableListView
              automaticallyAdjustContentInsets={false}
              dataSource={this.state.EventdataSource}
              renderRow={this.renderRow.bind(this)}
              loadData={this._onLoadEvent.bind(this)}
              refreshDescription='正在刷新活动列表...'
            />
          </View>
          <View style={{width:this.state.screenWidth,height:10,backgroundColor:'white'}} />
          <View style={{width:this.state.screenWidth,height:5,marginBottom:49,backgroundColor:'#f1f1f1'}} />
      </View>
      );
    }else if(pageText == 'msgTab'){
      return(
       <View style={{flex:1,flexDirection:'column',backgroundColor:'#f1f1f1',}}>
          <View style={[styles.navBar,{width:this.state.screenWidth}]} >
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}}>
            </View>
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight style={styles.minbtn}
                underlayColor='transparent'>
                <Image
                  style={styles.minbtn}
                  source={require('image!topBtn')} />
              </TouchableHighlight>
            </View>
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}}>

            </View>
          </View>
          <View style={{flex:1}} >
              <RefreshableListView
              automaticallyAdjustContentInsets={false}
              dataSource={this.state.EventdataSource1}
              renderRow={this.renderRow1.bind(this)}
              loadData={this._onLoadEvent1.bind(this)}
              refreshDescription='正在刷新消息列表...'
            />
          </View>
          <View style={{width:this.state.screenWidth,height:10,backgroundColor:'white'}} />
          <View style={{width:this.state.screenWidth,height:5,marginBottom:49,backgroundColor:'#f1f1f1'}} />
      </View>
      );
    }else{
    	var redColor;
    	if (this.props.Gapp.user.notifCount> 0) {
    		redColor='red';
    	}else
    	{
    		redColor='transparent';
    	}
    return (
      <View style={{flex:1,flexDirection:'column'}}  >
          <View style={[styles.navBar,{width:this.state.screenWidth}]} {...this._panResponder.panHandlers} 
          accessible={true}
          onAccessibilityTap={this._onTopBtn2.bind(this)}>
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}}>
            </View>
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight style={styles.minbtn}
                underlayColor='transparent'>
                <Image
                  style={styles.minbtn}
                  source={require('image!topBtn')} />
              </TouchableHighlight>
            </View>
            <View style={{width:80,alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight style={[styles.minbtn1,{justifyContent:'center', alignItems:'center'}]}
                onPress={this._onTopBtn4.bind(this)}
                underlayColor='transparent'>
                <Text
                  style={{fontSize:15,color:'white',textAlign:'center'}}
                >退出</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{flex:3}}>
            <View style={{flexDirection:'row',height:(this.state.screenHeight-113)/10*2,backgroundColor:'#0094FF'}}>
              <Image style={{width:(this.state.screenHeight-113)/10*1.2,height:(this.state.screenHeight-113)/10*1.2,marginTop:(this.state.screenHeight-113)/10*0.4,marginLeft:20}}
                  source={require('image!my_logo')} />
                  <View>
                      <Text style={{width:180,height:20,marginTop:(this.state.screenHeight-113)/10*0.5,marginLeft:30,fontSize:15,color:'#ffffff'}}>
                      创       客：{this.props.Gapp.user.username}
                      </Text>
                      <Text style={{width:180,height:20,marginTop:(this.state.screenHeight-113)/10*0.25,marginLeft:30,fontSize:15,color:'#ffffff'}}>
                      营业执照：{this.props.Gapp.user.zhizhao}
                      </Text>
                  </View>
            </View>
            <View>

              <View style={{flex:6,flexDirection:'column',}}>
                <TouchableHighlight
                  style={{flex:1,height:(this.state.screenHeight-113)/10}}
                  underlayColor='gray'
                  onPress={this._onMyEvent.bind(this)}
                  >
                  <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Text style={[styles.sliderText1,{marginLeft:this.state.screenWidth*0.05}]} >预约的活动</Text>
                    <Image
                      style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                      source={require('image!right_arrow')} />
                  </View>
                </TouchableHighlight>
                <View style={styles.separator}/>
                <TouchableHighlight
                style={{flex:1,height:(this.state.screenHeight-113)/10}}
                underlayColor='gray'
                onPress={this._onMyService.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText1,{marginLeft:this.state.screenWidth*0.05}]}>申请的服务</Text>
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <View style={styles.separator}/>
              <TouchableHighlight
                style={{flex:1,height:(this.state.screenHeight-113)/10}}
                underlayColor='gray'
                onPress={this._onMyScore.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText1,{marginLeft:this.state.screenWidth*0.05}]}>我的积分</Text>
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <View style={styles.separator}/>
              <TouchableHighlight
                style={{flex:1,height:(this.state.screenHeight-113)/10}}
                underlayColor='gray'
                onPress={this._onMyPwd.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText1,{marginLeft:this.state.screenWidth*0.05}]} >修改密码</Text>
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <View style={styles.separator}/>
              <TouchableHighlight
                style={{flex:1,height:(this.state.screenHeight-113)/10}}
                underlayColor='gray'
                onPress={this._onMyMsg.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText1,{marginLeft:this.state.screenWidth*0.05}]} >我的消息</Text>
         
             
                   	<Text style={{fontSize:15,color:'white',height:20,marginRight:this.state.screenWidth*0.02,backgroundColor:redColor,borderRadius:10,width:20,textAlign:'center',
                   }} >{this.props.Gapp.user.notifCount> 0 ? this.props.Gapp.user.notifCount : undefined}</Text>
          
                  
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <View style={styles.separator}/>
              
              
              </View>


            </View>
            <View>
             <TouchableHighlight
                style={{flex:1,height:(this.state.screenHeight-113)/10}}
                underlayColor='transparent'
                onPress={this._onTelephone.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1,flexDirection:'column'}}>
                    <Text style={{fontSize:15,color:'#2B2F2C',backgroundColor:'transparent',marginLeft:this.state.screenWidth*0.05,marginTop:5}}>联系我们</Text>
                    <View style={{flex:1,flexDirection:'row',marginTop:(this.state.screenHeight-113)/10*0.05}}>
                      <Text style={{fontSize:10,color:'#2B2F2C',backgroundColor:'transparent',marginLeft:this.state.screenWidth*0.05}}>服务电话：:</Text>
                      <Text style={{fontSize:10,color:'red',backgroundColor:'transparent',marginLeft:0}}>021-3463-7000</Text>
                    </View>
                  </View>
                  <Image style={{marginRight:this.state.screenWidth*0.07,height:(this.state.screenHeight-113)/10,width:(this.state.screenHeight-113)/10*1.1,}} source={require('./images/slide_phone.png')} />
                </View>
              </TouchableHighlight>
              <View style={{flex:1,marginLeft:this.state.screenWidth/2*0.8}}>
              	<Image style={{height:(this.state.screenHeight-113)/10*1.5,resizeMode: Image.resizeMode.contain,width:this.state.screenWidth/2,}} source={require('./images/my_back.png')} />
              </View>
            </View>
          </View>
         
          <View style={{width:this.state.screenWidth,height:5,marginBottom:49,backgroundColor:'#f1f1f1'}} />
      </View>
      );
  }
}

  componentWillMount() {

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onMoveShouldSetPanResponder: (evt, gestureState) => {
      	console.log(gestureState);
      	if( (Math.abs(gestureState.dx)+Math.abs(gestureState.dy))>10){
      		return true;
      	}else
      	return false
      },
      onPanResponderGrant: (evt, gestureState) => {
        // The guesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.{x,y}0 will be set to zero now
        this.setState({startWidth:this.state.moveDx._value});
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
       // gestureState.d{x,y}
       var dx = gestureState.dx+this.state.startWidth;
       var widthDx = (dx <0)?0:dx;
       var sliderWidth = this.state.sliderWidth;
       widthDx = (widthDx<sliderWidth)?widthDx:sliderWidth;
       //console.log("dx:"+dx)
       //this.state.moveDx.Value(widthDx);
       this.setState({moveDx:new Animated.Value(widthDx)});

      },
      onResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        var sliderWidth = this.state.sliderWidth;
        var toWidth = 0;

        if(gestureState.dx > (sliderWidth/5) ){
          toWidth = sliderWidth;
        }else if(gestureState.dx < (0-sliderWidth/5) ){
          toWidth = 0;
        }

        this._onSlider(toWidth);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
    });

    //event
    this._onLoadEvent1();
    this._onLoadOption();
    this._onLoadEvent();
    //push
    PushNotificationIOS.addEventListener('notification', this._onNotification.bind(this));
  }

  componentWillUnmount() {
    PushNotificationIOS.removeEventListener('notification', this._onNotification.bind(this));
  }

    _onNotification(notification) {
  	//这里是消息处理的地方
  	console.log('get msg for notification');

    AlertIOS.alert(
      '您有新的消息',
      notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
    this._onLoadEvent1();

  }
  _onTrue(){
    return true
  }
  _onMove(e){

  }
  _onSlider(toWidth){
    var sliderWidth = this.state.sliderWidth;
    var dtime = Math.abs(this.state.moveDx._value-toWidth)/sliderWidth*300;
    Animated.timing(this.state.moveDx, {
      toValue: toWidth, // 目标值
      duration: dtime, // 动画时间
      easing: Easing.linear // 缓动函数
    }).start();

    //check
    if(toWidth == 0){
    	this.setState({isshowslider:true})
    }else{this.setState({isshowslider:false})}
  }

  _onMyEvent(){
    this.props.navigator.push({
      component: MyActivityPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp}
    });
  }
  _onMyService(){

    this.props.navigator.push({
      component: MyservicePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp}
    });

  }
  _onMyScore(){

    this.props.navigator.push({
      component: MyScorePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp}
    });
  }
  _onMyPwd(){

    this.props.navigator.push({
      component: MyPasswordPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp}
    });

  }
  _onMyMsg(){
  	console.log("刷新数据");
    this._onLoadEvent1();

    this.props.navigator.push({
      component: MyMsgPage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp,Mpage:this}
    });
    

  }
  _onMyUpdate(){

    this.props.navigator.push({
      component: MyUpdatePage,
      navigationBarHidden: true,
      passProps: {Gapp: this.props.Gapp}
    });

  }
  _onTelephone(){
    //tel
    var InteractManager = NativeModules.InteractManager;
    InteractManager.addEvent(1, '02134637000');
    //1 means tel

  }
  render() {
  var dissliderbtn = !this.state.isshowslider?(<View
  		style={{backgroundColor:'transparent',position:'absolute',width:this.state.screenWidth,height:this.state.screenHeight,top:0,left:0,opacity:0}}
  		><TouchableHighlight 
        	style={{backgroundColor:'transparent',position:'absolute',width:this.state.screenWidth,height:this.state.screenHeight,top:0,left:0,opacity:0}}
        	onPress={() => {
        		console.log('dis sliderbar');
            this._onSlider(0);
          }}

           ><View></View>
        </TouchableHighlight></View>):(<View  {...this._panResponder.panHandlers}></View>);
    return (
      <View style={{flex:1,flexDirection:'row'}}  >
        <Animated.View style={{width:this.state.moveDx,overflow:'hidden'}} {...this._panResponder.panHandlers}
        accessible={true}
        onAccessibilityTap={this._onTopBtn2.bind(this)}>
          <Image 
            style={{flex:1,width:this.state.sliderWidth,flexDirection:'column'}} 
            source={require('image!slider_bg')}
          >
            <Image style={{flex:2,alignItems:'center',flexDirection:'row'}}
              source={require('image!slider_title_bg')}
            >
              <Image
                style={{height:60,resizeMode: Image.resizeMode.contain,flex:1}}
                source={require('image!my_logo')}/>
              <Text style={[styles.sliderText,{flex:2,marginRight:this.state.screenWidth/3*2*0.5*0.5}]}>创客:{this.props.Gapp.user.username}</Text>
            </Image>
            <Image style={{height:2,width:this.state.screenWidth/3*2-20}} source={require('image!slider_line')} />
            <View style={{flex:6,flexDirection:'column'}}>
              <TouchableHighlight
                style={{flex:1}}
                underlayColor='transparent'
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText,{marginLeft:this.state.screenWidth*0.05}]}>{this.props.Gapp.user.username}</Text>
                </View>
              </TouchableHighlight>
              <Image style={{height:1,width:this.state.screenWidth/3*2-20}} source={require('image!slider_line')} />
              <TouchableHighlight
                style={{flex:1}}
                underlayColor='gray'
                onPress={this._onMyEvent.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText,{marginLeft:this.state.screenWidth*0.05}]}>预约的活动</Text>
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <Image style={{height:1,width:this.state.screenWidth/3*2-20}} source={require('image!slider_line')} />
              <TouchableHighlight
                style={{flex:1}}
                underlayColor='gray'
                onPress={this._onMyService.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText,{marginLeft:this.state.screenWidth*0.05}]} >申请的服务</Text>
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <Image style={{height:1,width:this.state.screenWidth/3*2-20}} source={require('image!slider_line')} />
              <TouchableHighlight
                style={{flex:1}}
                underlayColor='gray'
                onPress={this._onMyScore.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText,{marginLeft:this.state.screenWidth*0.05}]} >我的积分</Text>
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <Image style={{height:1,width:this.state.screenWidth/3*2-20}} source={require('image!slider_line')} />
              <TouchableHighlight
                style={{flex:1}}
                underlayColor='gray'
                onPress={this._onMyPwd.bind(this)}
                >
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText,{marginLeft:this.state.screenWidth*0.05}]} >修改密码</Text>
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <Image style={{height:1,width:this.state.screenWidth/3*2-20}} source={require('image!slider_line')} />
              <TouchableHighlight
                style={{flex:1}}
                underlayColor='gray'
                onPress={this._onMyMsg.bind(this)}
                >
                <View style={{flex:3,flexDirection:'row',alignItems:'center'}}>
                  <Text style={[styles.sliderText,{marginLeft:this.state.screenWidth*0.05}]} >我的消息</Text>
                
                  <Image
                    style={[styles.sliderRight,{marginRight:this.state.screenWidth*0.05}]}
                    source={require('image!right_arrow')} />
                </View>
              </TouchableHighlight>
              <Image style={{height:1,width:this.state.screenWidth/3*2-20}} source={require('image!slider_line')} />
              
            </View>
             <TouchableHighlight style={{flex:2,alignItems:'center',flexDirection:'row'}}
                  underlayColor='transparent'
                  onPress={this._onTelephone.bind(this)}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:5,flexDirection:'column',marginTop:-(this.state.screenHeight-113)/11*0.01}}>
                  <Text style={{fontSize:15,color:'white',backgroundColor:'transparent',marginLeft:this.state.screenWidth*0.05,marginBottom:10,}}>联系我们</Text>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <Text style={{fontSize:10,color:'white',backgroundColor:'transparent',marginLeft:this.state.screenWidth*0.05}}>服务电话:</Text>
                    <Text style={{fontSize:10,color:'red',backgroundColor:'transparent',}}>021-3463-7000</Text>
                  </View>
               </View>
               <Image style={{marginRight:this.state.screenWidth*0.05,height:(this.state.screenHeight-113)/11*0.8,width:(this.state.screenHeight-113)/11,}} source={require('./images/slide_phone.png')} />
              	
             </View>
            </TouchableHighlight>

          </Image>

        </Animated.View>
      <View 
        style={{width:this.state.screenWidth}}
        >

      
      <TabBarIOS 
        //tintColor="transparent"
        barTintColor="white">
        <TabBarIOS.Item

          title="首页"
          icon={{uri: base64IconHome, scale: 1}}
          selected={this.state.selectedTab === 'indexTab'}
          selectedIcon={{uri: base64IconHomePress, scale: 2.6}}
          onPress={() => {
            this.setState({

              selectedTab: 'indexTab',
              
            });

          }}
          >
          {this._renderContent('#414A8C', 'indexTab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="活动"
          icon={{uri: base64IconEvent, scale: 1.6}}
          selected={this.state.selectedTab === 'eventTab'}
          selectedIcon={{uri: base64IconEventPress, scale: 2.6}}

          onPress={() => {
            this.setState({
              selectedTab: 'eventTab',
            });
          }}>
          {this._renderContent('#414A8C', 'eventTab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="消息"
          icon={{uri: base64IconMsg, scale: 1.6}}
          badge={this.props.Gapp.user.notifCount > 0 ? this.props.Gapp.user.notifCount : undefined}
          selected={this.state.selectedTab === 'msgTab'}
          selectedIcon={{uri: base64IconMsgPress, scale: 2.6}}
          onPress={() => {
            this.setState({
              selectedTab: 'msgTab',
              notifCount: this.props.Gapp.user.notifCount,
            });
          } }>
          {this._renderContent('#783E33', 'msgTab', this.props.Gapp.user.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: base64IconMy, scale: 1.6}}
          title="我的"
          selected={this.state.selectedTab === 'myTab'}
          selectedIcon={{uri: base64IconMyPress, scale: 2.6}}
          onPress={() => {
            this.setState({
              selectedTab: 'myTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'myTab', this.state.presses)}
        </TabBarIOS.Item>

        </TabBarIOS>
        {dissliderbtn}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  cont: {
    flex: 1,
    flexDirection:'column'
  },
  icon:{
    flex:1,
  },
  tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    },
  ts:{
    backgroundColor:'transparent'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:'red'
  },
  img:{
    flex:1
  },
  inputs: {
    height:36,
    flex: 1,
    fontSize: 18,
    borderWidth: 0,
    color:'white'
  },
  button:{
    height: 36,
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#48BBEC',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop:40
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  label:{
    color:'white',
    fontSize:18,
    margin:9,
    flex:1,
    backgroundColor:'transparent'
  },
  wrapper: {
    flex:1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
  imagebtn:{

  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  minbtn1:{
    width:55,
    height:35
  },
   minbtn:{
    width:35,
    height:35
  },
  sliderline:{

  },
  sliderText:{
    flex:1,
    fontSize:15,
    color:'white',
    backgroundColor:'transparent'
  },
   sliderText1:{
    flex:1,
    fontSize:15,
    color:'#2B2F2C',
    backgroundColor:'transparent'
  },
  sliderRight:{
    width:25,
    resizeMode:'contain'
  },

    separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  navBar:{
    backgroundColor:'#0067B1',
    marginTop:20,
    height:44,
    flexDirection:'row',
  }

});

module.exports = MainPage;
