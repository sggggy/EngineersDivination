var activities = [
  // 极限编程
  { name: "提交代码", good: "遇到冲突的几率是最低的", bad: "你遇到的一大堆冲突会让你觉得自己是不是时间穿越了" },
  { name: "代码审核", good: "发现重要问题的几率大大增加", bad: "你什么问题都发现不了，白白浪费时间" },
  { name: "重构", good: "代码质量得到提高", bad: "你很有可能会陷入泥潭" },

  // 敏捷开发
  { name: "举行冲刺回顾会", good: "收集到大量的反馈", bad: "变成了冲刺检讨会" },
  { name: "举行冲刺规划会", good: "团队自发完成了待办故事的承诺", bad: "变成了气氛尴尬的戏剧" },
  { name: "举行故事评审会", good: "团队达成了共识", bad: "所有估算都是脑拍的" },
  { name: "举行每日审会", good: "团队发现并跨越了挑战", bad: "PO寻思着暂停冲刺" },

  // 持续集成
  { name: "白天上线", good: "今天白天上线是安全的", bad: "可能导致灾难性后果" },
  { name: "晚上上线", good: "晚上是程序员精神最好的时候", bad: "你白天已经筋疲力尽了" },

  // 持续测试
  { name: "改进单元测试", good: "写单元测试将减少出错", bad: "写单元测试会降低开发效率" },
  { name: "修复BUG", good: "今天对BUG的嗅觉大大提高", bad: "新产生的BUG将比修复的更多" },

  // 沟通交流
  { name: "组织培训会", good: "写代码之余放松一下打个盹，有益健康", bad: "小心被扣屎盆子背黑锅" },
  { name: "组织AAR", good: "参与成员同步了信息又改进了过程", bad: "出门右拐只有就全忘了" },

  // 周末
  { name: "读书", good: "读书是提升自己的捷径", bad: "用眼过度需要缓和", weekend: true },
  { name: "锻炼", good: "强身健体", bad: "能量没消耗多少，吃得却更多", weekend: true },
  { name: "玩PS4", good: "只狼拜年剑法习得", bad: "菜", weekend: true },
  { name: "访问B站", good: "sggggy同学的视频又更新了", bad: "你关注的UP主成为失踪人口", weekend: true },
  { name: "玩Nintendo Switch", good: "拯救塞尔达公主", bad: "被人马按着打", weekend: true }
];

var drinks = ["水", "茶", "红茶", "绿茶", "咖啡", "奶茶", "可乐", "鲜奶", "豆奶", "果汁", "果味汽水", "苏打水", "运动饮料", "酸奶", "崂山白花蛇草水"];
var directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];
module.exports = {
  activities: activities,
  drinks: drinks,
  directions: directions
}