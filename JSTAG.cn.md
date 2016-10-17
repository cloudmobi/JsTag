# Cloudmobi JSTag 广告接入方式说明

### 引入js文件

在WAP页面引入`http://cdn.download.cloudmobi.net/adsource/ad.min.js`，例如：

```
<head>
    <script src="http://cdn.download.cloudmobi.net/adsource/ad.min.js"></script>
</head>   
```

### 调用`ct.showAd`方法

在要插入广告的div里调用`ct.showAd(divId, slotId);`，参数说明:

| 参数名 | 参数描述 |
| :--: | :--: |
| divId | 要插入广告的div的id |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |

注：需要先引入`ad.min.js`才能调用`ct.showAd();`

调用示例：

```
<div id="iframe1">
    <script>
        ct.showAd('iframe1', 11);
    </script>
</div>
```

广告展示示例：

![img-cn](demo.cn.jpg)

