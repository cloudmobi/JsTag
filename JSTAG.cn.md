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
* http://resource.catch.gift/manual/picture/red/720/381.jpg
* http://resource.catch.gift/manual/picture/blue/720/381.jpg

调用示例：

```
<div>
    <script>
      function thiscallback(data) {
          if (data) {
            for (var i = 0; i < data.length; i++) {
              var create  = document.createElement("div")
              create.innerHTML = `
                <a href="${data[i].clkUrl}">
                  < img src="${data[i].image}" alt="">
                </a >
              `
              document.body.appendChild(create)
            }
          }
        }
        ct_jsTag_private.getAds(8888, function (data) {
          return thiscallback(data)
        }, 1);
    </script>
    
</div>

```

