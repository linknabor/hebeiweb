var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
		  'https://www.e-shequ.com/pay/';
let config = {
	//请求头公共部分
	baseUrl:/127|test/.test(location.origin)?'https://test.e-shequ.com/wechat/hexie/wechat/':
  			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/wechat/hexie/wechat/':
  			'https://www.e-shequ.com/shijiazhuang/wechat/hexie/wechat/',
	repair_orderdetail:{
		url1: pay+'shijiazhuang'+'orderpay.html',	
	}
			
}

export default config;