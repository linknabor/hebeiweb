let config = {
	//首页请求
	index:{
		//商品订单
		url1:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/orderpay.html':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/orderpay.html':
		'https://www.e-shequ.com/shijiazhuang/weixin/orderpay.html',

		//保修单
		url2:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/repair/index.html':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/repair/index.html':
		'https://www.e-shequ.com/shijiazhuang/weixin/repair/index.html',

		//绑定房屋 我是业主
		url3:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/wuye/index.html?#/myHouse':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/wuye/index.html?#/myHouse':
		'https://www.e-shequ.com/shijiazhuang/weixin/wuye/index.html?#/myHouse',
	},
	footer:{
		//底部导航 社区
		url1:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/home/index.html':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/home/index.html':
		'https://www.e-shequ.com/shijiazhuang/weixin/home/index.html'
	},
	notices:{
		//我的消息
		url1:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/orderpay.html':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/orderpay.html':
		'https://www.e-shequ.com/shijiazhuang/weixin/orderpay.html'
	},
	register:{
		// 注册
		url1:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/person/index.html':
		/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/person/index.html':
		'https://www.e-shequ.com/shijiazhuang/weixin/person/index.html'
	}
		
};


export default config