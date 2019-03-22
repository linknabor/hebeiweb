let config = {
	//个人中心
		//首页请求
		person_index:{
			//商品订单
			url1:/127|test/.test(location.origin)?'https://test.e-shequ.com/pay/'+'shijiazhuang'+'orderpay.html':
			/uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/'+ 'shijiazhuang'+'orderpay.html':
			'https://www.e-shequ.com/pay/'+'shijiazhuang'+'orderpay.html',

			//报修单
			url2:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/repair/index.html':
			/test/.test(location.origin)?'https://uat.e-shequ.com/xsq/weixin/repair/index.html':
			'https://www.e-shequ.com/shijiazhuang/weixin/repair/index.html',

			//绑定房屋 我是业主
			url3:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/wuye/index.html?#/myHouse':
			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/weixin/wuye/index.html?#/myHouse':
			'https://www.e-shequ.com/shijiazhuang/weixin/wuye/index.html?#/myHouse',
		},
		person_footer:{
			//底部导航 社区
			url1:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/home/index.html':
			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/weixin/home/index.html':
			'https://www.e-shequ.com/shijiazhuang/weixin/home/index.html'
		},
		person_register:{
			// 注册
			url1:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/person/index.html':
			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/weixin/person/index.html':
			'https://www.e-shequ.com/shijiazhuang/weixin/person/index.html'
		}
	
		
};


export default config