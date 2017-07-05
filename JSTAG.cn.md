### Cloudmobi JSTag 广告接入方式说明

* [方式一：直接引入js文件](#直接引入js文件)
* [方式二：实用调用请求接口](#实用调用请求接口)

#### 方式一：直接引入js文件

在WAP页面引入`http://image2.cloudmobi.net/jstag/v1/{slotid}/ad.min.js`，其中需要替换掉链接中的宏`{slotid}`例如：

```
<head>
    <script src="http://image2.cloudmobi.net/jstag/v1/8888/ad.min.js"></script>
</head>   
```
| 参数名 | 参数描述 |
| :--: | :--: |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |

#### 方式二：实用调用请求接口


__注：需要先引入`ad.js`才能调用`ct.getAds(slotId, callback, 1)`__

调用`ct.getAds(slotId, callback, 1)`方法，获取广告元数据并使用callback函数对数据进行处理

| 参数名 | 参数描述 |
| :--: | :--: |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |
| callback | 回调函数，callback的参数名为data，data的类型为Array |

callback参数data组成示例：
----

```
var date = {
    "err_msg": "ok",
    "err_no": 0,
    "ad_list": [
        {
            "native_adobj": {
                "icon": "",
                "title": "",
                "image": "",
                "desc": "",
                "button": "",
                "star": 0,
                "choices_link_url": ""
            },
            "adid": "5248115",
            "impid": "3438925352481152237",
            "landing_type": 0,
            "ad_expire_time": 1000,
            "pre_click": 2,
            "clk_url": "https://global.ymtracking.com/trace?offer_id=5248115&app_id=131&type=6643a0e500000024&aff_sub2=2237&aff_sub3=US_svm_&aff_sub4=696-447-329_&aff_sub5=3438925352481152237-California-LosAngeles_1499251194_MTA2ODM2NjkzNw%3D%3D&aff_sub7=2CA1CDF6-9CF0-439B-B208-18FE7F82225F&aff_sub6=jtn&idfa=2CA1CDF6-9CF0-439B-B208-18FE7F82225F&android_id=&device_os=iOS&ch=ym&aff_sub8=2237",
            "final_url": "https://itunes.apple.com/us/app/id1068366937?mt=8",
            "clk_tks": null,
            "imp_tk_url": [
                "https://logger.cloudmobi.net/ios/v1/impression?slot=2237&aff_id=103107&city=LosAngeles&region=California&adtype=10&offer=5248115&imp=3438925352481152237&channel=ym&server_id=&sv=&method=svm&pck=2&doimp=1&pkg=1068366937&country=US&pn=jtn&user_id=f499c87052910af7df75ab4805efb9b7&ran=696-447-329&platform=iOS&ck=f499c87052910af7df75ab4805efb9b7"
            ],
            "clk_tk_url": [
                "https://logger.cloudmobi.net/ios/v1/click?slot=2237&aff_id=103107&city=LosAngeles&region=California&adtype=10&offer=5248115&imp=3438925352481152237&channel=ym&server_id=&sv=&method=svm&pck=2&doimp=1&pkg=1068366937&country=US&pn=jtn&user_id=f499c87052910af7df75ab4805efb9b7&ran=696-447-329&platform=iOS&ck=f499c87052910af7df75ab4805efb9b7"
            ]
        }
    ],
    "ck": "f499c87052910af7df75ab4805efb9b7"
};
jp.getadsData(data);
```

__主要字段解释__

|字段| 类型| 说明|
|:-:|:--:|:---:|
|err_msg|错误信息|正常为"ok"|
|clk_url|字符串|广告点击链接|
|final_url|字符串|广告最终跳转地址|
|imp_tk_url|字符串数组|曝光检测数组|
|clk_tk_url|字符串数组|点击检测数组|

自行选择合适尺寸图片：

* http://cdn.image2.cloumobi.net/

调用示例：

```
<div>
    <script>
        ct.getAds(slotId, callback, 1);
    </script>
    <image src="http://cdn.image2.cloudmobi.net/" onclick=clk_url>
</div>

```




