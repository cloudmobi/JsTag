Cloudmobi JSTag instructions of ads request
====

* [ct.showAd() is all about showing ads](#showAd)
* [ct.getAds() is about getting ads data and using these data for further operation](#getAds)

introduce js file
----

Introduce the js file: `http://download.cloudmobi.net/adsource/ad.js` on your WAP page, e.g.:

```
<head>
    <script src="http://cdn.download.cloudmobi.net/adsource/ad.js"></script>
</head>
```

showAd
----

Call `ct.showAd(divId, slotId);` in `<div>` where the ads would be added, parameters details:

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

example of ad display using `ct.showAd()`:
----

![img-en](demo.en.jpg)


getAds
----

Call `ct.getAds(slotId, callback, num)`, in order to get ads data and handle response data in function callback

| parameter name | parameter description |
| :--: | :--: |
| slotId | the id of ad slot, which will be provided by the account manager after registration on cloudmobi |
| callback | call back parameter, the parameter name of callback is data.The type of data is array |
| num | the amount of ads |

E.g.:the composition of data, the callback parameter
----


```

[
	{ 
		icon: "http://cdn.cloudmobi.net/icon/1.png",
        title: "plan",
        image: "http://i1.tobei.cn/2014/1222/20141222092542930.jpg",
        desc: "awesome description",
        button: "install",
        rank: 4.2
	    clkUrl: "https://github.com"
	},
	{ 
		icon: "http://cdn.cloudmobi.net/icon/1.png",
        title: "some ads",
        image: "http://i1.tobei.cn/2014/1222/20141222092542930.jpg",
        desc: "some description",
        button: "install",
        rank: 4.2
	}
]

```

