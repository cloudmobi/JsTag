# Cloudmobi JSTag 广告接入方式说明

* [第一步：引入js文件](#引入js文件)
* [第二步：调用接口获取并展示广告](#调用接口获取并展示广告)

## 第一步：引入js文件

在WAP页面引入`http://resource.catch.gift/jstag/v1/{slotid}/ad.min.js`，其中需要替换掉链接中的宏`{slotid}`例如：

```
<head>
    <script src="http://resource.catch.gift/jstag/v1/8888/ad.min.js"></script>
</head>   
```
| 参数名 | 参数描述 |
| :--: | :--: |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |

## 第二步：调用接口获取并展示广告


__注：需要先引入`ad.min.js`才能调用`ct_jsTag_private.getAds(slotId, callback, 1)`__

调用`ct_jsTag_private.getAds(slotId, callback, 1)`方法，获取广告元数据并使用callback函数对数据进行处理

| 参数名 | 参数描述 |
| :--: | :--: |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |
| callback | 回调函数，callback的参数名为data，data的类型为Array |

callback参数data组成示例：
----

```
[
    {
        "clkUrl": "https://global.ymtracking.com/trace?offer_id=5248115&app_id=131&type=6643a0e500000024&aff_sub2=8888&aff_sub3=US_svm_&aff_sub4=696-447-329_&aff_sub5=3438925352481152237-California-LosAngeles_1499251194_MTA2ODM2NjkzNw%3D%3D&aff_sub7=2CA1CDF6-9CF0-439B-B208-18FE7F82225F&aff_sub6=jtn&device_os=iOS&ch=ym&aff_sub8=8888"
    }
]
```

__主要字段解释__

|字段| 类型| 说明|
|:-:|:--:|:---:|
|clk_url|字符串|广告点击链接|


自行选择合适尺寸图片：

* http://resource.catch.gift/manual/picture/gift/320/480.jpg
* http://resource.catch.gift/manual/picture/gift/480/320.jpg
* http://resource.catch.gift/manual/picture/red/720/381.jpeg
* http://resource.catch.gift/manual/picture/blue/720/381.jpg

调用示例：

```
<div>
    <script>
        ct_jsTag_private.getAds(slotId, callback, 1);

        function callback(data) {
          if (data) {
            for (var i = 0; i < data.length; i++) {
              var create  = document.createElement("div")
              create.innerHTML = `
              <a href="${obj.clkUrl}">
                < img src="http://resource.catch.gift/manual/picture/blue/720/381.jpeg">
              </a >
              `
              document.body.appendChild(create)
            }
          }
        }
    </script>
    
</div>

```

## FAQ

![ssp-backend](https://user-images.githubusercontent.com/5916447/28417259-02be5252-6d8a-11e7-8823-1dc1e4bb302f.png)

1. SSP后台中，Facebook和Admob的广告位ID是否需要填写？

Facebook和Admob的广告仅用于SDK对接，对接JsTag时不需要填写。

2. 为什么jstag请求返回的是链接而不是广告图片？

返回的链接是smartlink，每次广告落地页会动态生成，请根据自己的广告位，选择以下合适的素材：

![http://resource.catch.gift/manual/picture/gift/320/480.jpg](http://resource.catch.gift/manual/picture/gift/320/480.jpg)
![http://resource.catch.gift/manual/picture/gift/480/320.jpg](http://resource.catch.gift/manual/picture/gift/480/320.jpg)
![http://resource.catch.gift/manual/picture/red/720/381.jpeg](http://resource.catch.gift/manual/picture/red/720/381.jpeg)
![http://resource.catch.gift/manual/picture/blue/720/381.jpeg](http://resource.catch.gift/manual/picture/blue/720/381.jpeg)

3. 图片尺寸只有文档中已有的4种吗?

默认为以上4种尺寸。如果对图片有其他需求，可以把需要的图片尺寸、样式和示例反馈给我们，我们设计好提供给您。

4. 如果不希望图片素材是固定单张，如何解决？

如果不希望设置成固定单张，可以做几张图片进行轮播，例如可以在Js里创建个数组，把图片链接都写进去，然后每次生成一个随机数，随机选一个图片进行展示。

5. 一般情况下，对单个用户广告展示频率有什么建议？

建议单个用户每天最多展示五次广告，否则可能影响用户体验及变现效果。

6. 如何区分不同渠道的数据？

可以在SSP后台创建不同的slot，生成不同的Js链接，引入不同的WAP页面，对不同渠道进行区分。

7. 放量以后，什么时候可以看到数据？

我们的后台每小时更新一次数据。

8. JsTag展示的广告是来自哪里？

都是苹果应用商店(AppStore)的推广。

以上为对接JS Tag过程中常见的疑问，如有其他问题，请与运营联系，谢谢
