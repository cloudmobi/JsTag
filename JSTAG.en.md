# Cloudmobi JSTag instructions of ads access

1. ct.showAd() is all about showing ads.
2. ct.getAds() is about getting ads data and using these data for further operation.

### introduce js file

Introduce the js file: `http://cdn.download.cloudmobi.net/adsource/ad.js` on your WAP page, e.g.:

```
<head>
    <script src="http://cdn.download.cloudmobi.net/adsource/ad.js"></script>
</head>
```

### Call `ct.showAd()`

Call `ct.showAd(divId, slotId);` from `<div>` where the ads would be added, parameters details:

| parameter name | parameter description |
| :--: | :--: |
| divId | the id of div where ads will be added |
| slotId | the id of ad slot, which will be provided by the account manager after registration on cloudmobi |

___Notice: Call `ct.showAd();` after applying `ad.js`___

e.g.:

```
<div id="iframe1">
    <script>
        ct.showAd('iframe1', 11);
    </script>
</div>
```

### example of ad display:

![img-en](demo.en.jpg)


### Call `ct.getAds(slotId,callback,num)`, in order to get ads data

| parameter name | parameter description |
| :--: | :--: |
| slotId | the id of ad slot, which will be provided by the account manager after registration on cloudmobi |
| callback | call back parameter, the parameter name of callback is data.The type of data is array |
| num | the amount of ads |

### E.g.:the composition of data, the callback parameter


```

[
	{ 
		icon: "http://cdn.cloudmobi.net/icon/1.png",
        title: "plan",
        image: "http://i1.tobei.cn/2014/1222/20141222092542930.jpg",
        desc: "御剑情缘-登录送绝版飞剑 全民DIY家园开启",
        button: "install",
        rank: 4.2
	    clkUrl: "https://github.com"
	},
	{ 
		icon: "http://cdn.cloudmobi.net/icon/1.png",
        title: "仙剑奇侠传3D回合-互动直播欢乐交友",
        image: "http://i1.tobei.cn/2014/1222/20141222092542930.jpg",
        desc: "《仙剑奇侠传3D回合》一款3DMMORPG回合制手游，由大宇全系列正版授权、盖娅互娱自主研发。游戏内置直播、个性时装",
        button: "install",
        rank: 4.2
	}
]

```

