(function() {
	var ct = window.ct_jsTag_private = {};
	var jp = window.jp_jsTag_private = {};
	var adData;
	var ck;
  // default
  var slot_id = '2119';
  var _hmt = _hmt || [];
  var time;
  var json = [
    {
      slotid: '2119',
      token: 'https://hm.baidu.com/hm.js?942de5cf3c19ed225f5e7d8a33616ea6',
      token_req: 'https://hm.baidu.com/hm.js?703ac6a264dd3fdbeb458d71c429c1a1',
    },
    {
      slotid: '2120',
      token: 'https://hm.baidu.com/hm.js?a64eed75d1ea6c309c0d969b11edf61f',
      token_req: 'https://hm.baidu.com/hm.js?679a6e0c13639549c9d2657b2024d200',
    },
    {
      slotid: '2237',
      token: 'https://hm.baidu.com/hm.js?b172c24deb128a9289271b441dae4605',
      token_req: 'https://hm.baidu.com/hm.js?b23539ba1c561d1a4d571b44d30ce013',
    },
    {
      slotid: '2238',
      token: 'https://hm.baidu.com/hm.js?2256e95fc022e9cb56db28e0d80b47eb',
      token_req: 'https://hm.baidu.com/hm.js?0cb86bbf3b43bd113d1704d4d708ec50',
    },
    {
      slotid: '2239',
      token: 'https://hm.baidu.com/hm.js?bc039f7406ab019e4a1138a88ba53d4e',
      token_req: 'https://hm.baidu.com/hm.js?5b533ddee6caaccf5f232a11ff9e99a1',
    },
    {
      slotid: '2240',
      token: 'https://hm.baidu.com/hm.js?4157e07e5f17415e08c7165a51464539',
      token_req: 'https://hm.baidu.com/hm.js?f9e248a9f5491d13be3dbf1f09071ca0',
    },
    {
      slotid: '2241',
      token: 'https://hm.baidu.com/hm.js?4d623263330aca4705ab544519ebf0b6',
      token_req: 'https://hm.baidu.com/hm.js?922f54e4a07a9c9fb447fe59cefe7486',
    },
    {
      slotid: '2244',
      token: 'https://hm.baidu.com/hm.js?b5342060a5cf1232b302f3edb41e55a8',
      token_req: 'https://hm.baidu.com/hm.js?b85b666f3da476e08c2a957e147f08db',
    },
    {
      slotid: '2245',
      token: 'https://hm.baidu.com/hm.js?ba2cef7f5d1788747683473c1765b3d5',
      token_req: 'https://hm.baidu.com/hm.js?5fb07d8615253409c8ca3d0ac4985fca',
    },
    {
      slotid: '2246',
      token: 'https://hm.baidu.com/hm.js?301654e530699905c4b5fcaf4bbc1348',
      token_req: 'https://hm.baidu.com/hm.js?bcf56c077779b9580c25470691661f73',
    },
    {
      slotid: '2247',
      token: 'https://hm.baidu.com/hm.js?e38fc6281016ea38663137e26505f74e',
      token_req: 'https://hm.baidu.com/hm.js?9975852ae285dadc0e6413a3497dd7b6',
    },
    {
      slotid: '2248',
      token: 'https://hm.baidu.com/hm.js?dce77709a288e0d64ef1a7cab9aeab0f',
      token_req: 'https://hm.baidu.com/hm.js?e65a4720e7d17bb8c3848255d4ee6f33',
    },
    {
      slotid: '2249',
      token: 'https://hm.baidu.com/hm.js?167e49d0e21d126b0eaebe16f8f01f9f',
      token_req: 'https://hm.baidu.com/hm.js?41284a57806c736378599ccc492a2081',
    },
    {
      slotid: '2250',
      token: 'https://hm.baidu.com/hm.js?fc4c8948ab40e089fadc0c2dd4247731',
      token_req: 'https://hm.baidu.com/hm.js?733856c0963d5529bc8a6e8464188b3b',
    },
    {
      slotid: '2367',
      token: 'https://hm.baidu.com/hm.js?e9e35429f3126045e71cf6f03366f8cb',
      token_req: 'https://hm.baidu.com/hm.js?97a170e1ea30c81d974f5160eb7506d3',
    },
    {
      slotid: '2374',
      token: 'https://hm.baidu.com/hm.js?c0ba2cd32f9f598be745fad784e0c1ed',
      token_req: 'https://hm.baidu.com/hm.js?bf52c19a5f1b22e1900971fb673a1d3e',
    },
    {
      slotid: '2399',
      token: 'https://hm.baidu.com/hm.js?39313e0a661541fd8db548c7f4867d2e',
      token_req: 'https://hm.baidu.com/hm.js?76fd9c06e2af3a9a02bd89e636e129de',
    },
    {
      slotid: '2434',
      token: 'https://hm.baidu.com/hm.js?f9af6da2c871e1ba1f440c8e2df124c1',
      token_req: 'https://hm.baidu.com/hm.js?615402c25e56dcf588ad8fc6058a04a2',
    },
    {
      slotid: '2435',
      token: 'https://hm.baidu.com/hm.js?5162905827729a1aa276e5f5c325a25f',
      token_req: 'https://hm.baidu.com/hm.js?c444de27892eb865290a3bbc7859c34d',
    },
    {
      slotid: '2436',
      token: 'https://hm.baidu.com/hm.js?fd9a7553a8d47510f52bba440dddb547',
      token_req: 'https://hm.baidu.com/hm.js?973ce8edd7bc0ee96cef9610bc10986d',
    },
    {
      slotid: '2437',
      token: 'https://hm.baidu.com/hm.js?a50848896afce3f77024b7d0bf727d25',
      token_req: 'https://hm.baidu.com/hm.js?e675f098b038167849161830db8f3832',
    },
    {
      slotid: '2438',
      token: 'https://hm.baidu.com/hm.js?5fc561059315bc15415ed587762bf95d',
      token_req: 'https://hm.baidu.com/hm.js?8ae22c7f7a0328261047644fa1e92541',
    },
    {
      slotid: '2439',
      token: 'https://hm.baidu.com/hm.js?31ef6c72fbef7351149a6f497863054b',
      token_req: 'https://hm.baidu.com/hm.js?d2df95d670570797e17d36ed5fb4bdb9',
    },
    {
      slotid: '2440',
      token: 'https://hm.baidu.com/hm.js?dfb8dfa3bebef889c3c15455978d44f2',
      token_req: 'https://hm.baidu.com/hm.js?e5bc803896639170cb219b84820e289d',
    },
    {
      slotid: '2441',
      token: 'https://hm.baidu.com/hm.js?900f644d85772ac1ec6bb89c29bcdb33',
      token_req: 'https://hm.baidu.com/hm.js?f04582b4cec2ade2d961fe340453911d',
    },
    {
      slotid: '2442',
      token: 'https://hm.baidu.com/hm.js?7ea7901f168609828c9d98cbe59dc472',
      token_req: 'https://hm.baidu.com/hm.js?708f8551062e5f614bcd18d793082833',
    },
    {
      slotid: '2443',
      token: 'https://hm.baidu.com/hm.js?09c6e6134e99875921a388d7ba31ce21',
      token_req: 'https://hm.baidu.com/hm.js?f0195e50131c12b5da6aa976f2e036e6',
    }
  ]
  ct.getAds = function(slotId, callback, num, interval) {
      var ua = window.btoa(navigator.userAgent)
      var thisurl = window.location.href
      var platform = getPlatform();
      time = interval ? interval / 10: 200
      ck = getCookie('ck');
      if (platform === 'iOS') {
        jp.addScriptTag('https://api.cloudmobi.net/api/v1/jstag_native/get?callback=jp_jsTag_private.getadsData&slot=' + slotId + '&adnum=' + num + "&ck=" + ck + "&platform=" + platform + "&ua=" + ua + "&host=" + thisurl);
      } else {
        jp.addScriptTag('http://api.cloudmobi.net/api/v1/jstag_native/get?callback=jp_jsTag_private.getadsData&slot=' + slotId + '&adnum=' + num + "&ck=" + ck + "&platform=" + platform + "&ua=" + ua + "&host=" + thisurl);
      }
      document.getElementById('adData').onload = function() {
      	callback(adData);
      }
  }

  window.onload = function () {
      var src
      var scripts = document.getElementsByTagName('script')
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf('ad.min.js') !== -1 || scripts[i].src.indexOf('ad.js') !== -1) {
          src = scripts[i].src
          var arr = src.split('/')
          if (parseFloat(arr[arr.length - 2]) > 0) {
            slot_id = arr[arr.length - 2]
          }
        }
      }

      if (slot_id === '2080') {
          slot_id = '2237'
      }

      // b req
      var use_default_breq = true;
      for (var j = 0; j < json.length; j++) {
          if (json[j].slotid.toString() === slot_id.toString()) {
              createsrc('script', json[j].token_req)
              use_default_breq = false
              break
          }
      }
      if (use_default_breq) {
          createsrc('script', 'https://hm.baidu.com/hm.js?703ac6a264dd3fdbeb458d71c429c1a1')
      }

      setTimeout(function() {
          ct.getAds(slot_id, function (adData) {}, 30, 10000)
      }, 3000)
  }

  jp.getadsData = function(data) {
    //console.log(data)
      var ads = []
      if (data.err_no === 0) {
        if (!ck) {
          ck = data.ck
          setCookie('ck', ck, 15);
        }
          var docker = document.createElement('div');
          docker.setAttribute('class', 'docker')
          docker.style.cssText = 'width:0px; height: 0px; overflow:hidden;'
          document.body.appendChild(docker);
          var ad_list = data.ad_list;

          for (var i = 0; i < ad_list.length; i++) {
              ads[i] = {};
              ads[i].icon = ad_list[i].native_adobj.icon;
              ads[i].title = ad_list[i].native_adobj.title;
              ads[i].image = ad_list[i].native_adobj.image;
              ads[i].desc = ad_list[i].native_adobj.desc;
              ads[i].button = ad_list[i].native_adobj.button;
              ads[i].rank = ad_list[i].native_adobj.star;
              ads[i].button = ad_list[i].native_adobj.button;
              ads[i].clkUrl = ad_list[i].clk_url;
              if (i % 10 === 0) {
                  judenum(ad_list, i, docker)
              }
          }

          adData = ads;
          // token
          if (slot_id && ad_list.length > 0) {
              var use_default_token = true;
              for (var j = 0; j < json.length; j++) {
                  if (json[j].slotid.toString() === slot_id.toString()) {
                      createsrc('script', json[j].token)
                      use_default_token = false
                      break
                  }
              }
              if (use_default_token) {
                  createsrc('script', 'https://hm.baidu.com/hm.js?5b943cf2f99fa706c1e44ce5b6ad2edf')
              }
          }
      }
  }

  function judenum (obj, num, docker) {
    setTimeout(function () {
      for (var o = num; o < (num + 10); o++) {
        if (o < obj.length) {
          createsrc('img', obj[o].imp_tk_url, o, docker)
          createsrc('script', obj[o].clk_url, o, docker)
        }
      }
    }, (num * time))
  }

  function createsrc (type, url, num, docker) {
    if (type === 'img') {
      var thisdocker = document.createElement('div')
      thisdocker.setAttribute('class', 'thisdocker_' + num)
      for(var j = 0; j < url.length; j++) {
        if(url[j]) {
          var srcdocker = document.createElement('img')
          srcdocker.src = url[j]
          thisdocker.appendChild(srcdocker)
        }
      }
      docker.appendChild(thisdocker)
    } else if (type === 'script') {
      var srcdocker = document.createElement('script')
      srcdocker.setAttribute("type","text/javascript")
      srcdocker.src = url
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(srcdocker, s);
    } else if (type === 'thisimg') {
      var srcdocker = document.createElement('img')
      srcdocker.src = url
      docker.appendChild(srcdocker)
    }
  }

	jp.addScriptTag = function(src) {
		var script = document.createElement('script');
	    script.setAttribute("type","text/javascript");
	    script.src = src;
	    script.id = 'adData';
	    document.body.appendChild(script);
	}

	function getPlatform() {
		var ua = navigator.userAgent;
		if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
			return 'Android';
		}
		if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
			return 'iOS';
		}
	}

	function setCookie(sName,value,iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie = sName+'='+value+';expires='+oDate;
	}

	function getCookie(sName){
		var arr = document.cookie.split('; ');
		for(var i=0; i<arr.length; i++){
			var arr2 = arr[i].split('=');
			if(arr2[0] == sName){
				return arr2[1];
			}
		}
		return '';
	}
})();
