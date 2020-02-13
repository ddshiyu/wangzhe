module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const mongoose = require('mongoose')
  // 引用模型  因为在dbjs中引用了require-all
  const article = mongoose.model('Article')
  const category = mongoose.model('Category')
  router.get('/news/init', async (req, res) => {
    const parent = await (await category.findOne({name: '新闻分类'})).populate('parents')
    
    const cat = await category.find().lean().where({
      parents: parent
    })
    
    console.log(cat)
    const newsList = ["元宵福利到 峡谷好热闹！", "2月4日全服不停机更新公告", "王者荣耀祝各位召唤师春节快乐！", "《王者荣耀》获App store推荐，带你领略五岳东方之美！", "“想玩英雄”三个都一样？违规，警告封号！", "王者荣耀祝各位召唤师春节快乐！", "《王者荣耀》获App store推荐，带你领略五岳东方之美！", "新皮肤爆料丨AI意识觉醒，机器少女妲己绚丽登场！", "五城战队团年饭，队友线下团聚回顾", "新皮肤爆料｜掌控万物，武则天化身宇宙女王！", "“想玩英雄”三个都一样？违规，警告封号！", "2月4日全服不停机更新公告", "2月1日全服不停机更新公告", "净化游戏环境声明及处罚公告", "1月31日全服不停机更新公告", "元宵福利到 峡谷好热闹！", "妲己新皮肤即将上架 全新好礼不容错过！", "除夕，年兽宝藏登录即领，抢红包抽内测皮肤！", "贺鼠年新春 领多重好礼！", "金鼠送礼 峡谷新春福利来袭", "中国电竞小伙逐梦记", "2019年赛事数据盘点，峡谷最强选手全知道！", "2020KPL春季赛大名单公示", "假期狂欢季开启，高校区域联赛战队携手虎牙人气主播开战啦！", "高校自制定格动画：说出来你可能不信，我们的“作业”打起来了！"]
    const newsData = newsList.map( title => {
      // 记住加上return
      return {
        category: cat ,
        title: title
      } 
    })
    res.send(newsData)
  })

  app.use('/web/api', router)
}