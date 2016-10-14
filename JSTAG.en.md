# Cloudmobi JSTag instructions of ads access

### introduce js file

Introduce the js file: `http://cdn.download.cloudmobi.net/adsource/ad.js` on your WAP page, e.g.:

```
<head>
    <script src="http://cdn.download.cloudmobi.net/adsource/ad.js"></script>
</head>
```

### Call `ct.showAd()`

Call `ct.showAd(divId, slotId);` from `<div>` where the ads would be added, parameters details:

| parameters name | parameters description |
| :--: | :--: |
| divId | the id of div where ads will be added |
| slotId | the id of ad slot, it will be provided by the account manager after registration on cloudmobi |

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

