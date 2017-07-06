# Cloudmobi JSTag 广告接入方式说明

* [第一步：引入js文件](#引入js文件)
* [第二步：调用接口获取并展示广告](#调用接口获取并展示广告)

## 第一步：引入js文件

在WAP页面引入`http://image2.cloudmobi.net/jstag/v1/{slotid}/ad.min.js`，其中需要替换掉链接中的宏`{slotid}`例如：

```
<head>
    <script src="http://image2.cloudmobi.net/jstag/v1/8888/ad.min.js"></script>
</head>   
```
| 参数名 | 参数描述 |
| :--: | :--: |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |

## 第二步：调用接口获取并展示广告


__注：需要先引入`ad.min.js`才能调用`ct.getAds(slotId, callback, 1)`__

调用`ct.getAds(slotId, callback, 1)`方法，获取广告元数据并使用callback函数对数据进行处理

| 参数名 | 参数描述 |
| :--: | :--: |
| slotId | 广告位ID，在cloudmobi注册后由账户经理进行分配 |
| callback | 回调函数，callback的参数名为data，data的类型为Array |

callback参数data组成示例：
----

```
[
    {
        "clkUrl": "https://global.ymtracking.com/trace?offer_id=5248115&app_id=131&type=6643a0e500000024&aff_sub2=2237&aff_sub3=US_svm_&aff_sub4=696-447-329_&aff_sub5=3438925352481152237-California-LosAngeles_1499251194_MTA2ODM2NjkzNw%3D%3D&aff_sub7=2CA1CDF6-9CF0-439B-B208-18FE7F82225F&aff_sub6=jtn&idfa=2CA1CDF6-9CF0-439B-B208-18FE7F82225F&android_id=&device_os=iOS&ch=ym&aff_sub8=2237"
    }
]
```

__主要字段解释__

|字段| 类型| 说明|
|:-:|:--:|:---:|
|clk_url|字符串|广告点击链接|


自行选择合适尺寸图片：

* http://cdn.image2.cloudmobi.net/manual/picture/gift/320/480.jpg
* http://cdn.image2.cloudmobi.net/manual/picture/gift/480/320.jpg
* http://cdn.image2.cloudmobi.net/manual/picture/red/720/381.jpeg
* http://cdn.image2.cloudmobi.net/manual/picture/blue/720/381.jpeg

调用示例：

```
<div>
    <script>
        ct.getAds(slotId, callback, 1);
        
        function callback(data) {
          if (data.length) {
            data.map( (obj, index) => {
              var create  = document.createElement("div")
              create.innerHTML = `
              <a href="${obj.clkUrl}">
                < img src="http://cdn.image2.cloudmobi.net/manual/picture/blue/720/381.jpeg">
              </a >
              `
              document.body.appendChild(create)
            })
          }
        }
    </script>
    
</div>

```
