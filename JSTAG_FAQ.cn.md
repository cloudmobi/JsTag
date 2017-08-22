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

* # 关于数据 

1.	如何区分不同渠道的数据？

可以在SSP后台创建不同的slot，生成不同的Js链接，引入不同的WAP页面，对不同渠道进行区分。

2.	上量以后，什么时候可以看到数据？

我们的后台每小时更新一次数据。

3.	为什么刚上量时收入很低？

JS Tag上量后，收入一般会有3-5天的爬坡期，然后趋于平稳，请尽量保证在此期间流量不要断。

4.	后台的浏览量是如何定义的？

浏览量：广告的展示次数。

5.	访客数是指什么？

访客数是指独立访客数，即UV。

6.	为什么后台没有访客数的实时数据？

独立访客数统计涉及数据去重，需完整的24小时才能统计得出。SSP后台数据未UTC时间，故访客数一般在北京时间第二天下午三点左右统计完毕。

7.	浏览量与填充的关系如何？为何填充数高于浏览量（广告的展示次数）？

填充指的是有多少广告符合展示条件，我们会通过算法对这些符合展示条件的广告进行筛选，最后展示出来的是转化效果更好的广告。


以上为对接JS Tag过程中常见的疑问，如有其他问题，请与运营联系，谢谢！

