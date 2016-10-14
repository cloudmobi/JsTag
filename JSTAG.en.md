# Cloudmobi JSTag instructions of ads access

### apply files on js

apply`http://cdn.download.cloudmobi.net/adsource/ad.js` on WAP page，e.g.:

```
<head>
    <script src="http://cdn.download.cloudmobi.net/adsource/ad.js"></script>
</head>   
```

### the method of call `ct.showAd`

Call`ct.showAd(divId, slotId);`from div where the ads would be added, parameter details:

| parameter name | parameter description |
| :--: | :--: |
| div | the id of div where ads will be added |
| slotId | the id of ad position, it will be provided by the account manager after registration on cloudmobi |

### Notice: Call `ct.showAd();` after applying `ad.js`

e.g.:

```
<div id="iframe1">
    <script>
        ct.showAd('iframe1', 11);
    </script>
</div>
```

The example of ad display:

![img-en](demo.en.jpg)

