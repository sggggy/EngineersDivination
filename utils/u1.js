var activities = [
  // 极限编程
  { name: "提交代码", good: "遇到冲突的几率是最低的", bad: "遇到的一大堆冲突会让你觉得自己是不是时间穿越了" },
  { name: "代码审核", good: "发现重要问题的几率大大增加", bad: "什么问题都发现不了，白白浪费时间" },
  { name: "重构", good: "代码质量得到提高", bad: "你很有可能会陷入泥潭" },
  { name: "结对编程", good: "优秀的沟通使得编程质量大大提升", bad: "沟通遇到障碍导致键盘手与陪审员大打出手" },

  // 敏捷开发
  { name: "举行冲刺回顾会", good: "收集到大量的反馈", bad: "变成了冲刺检讨会" },
  { name: "举行冲刺规划会", good: "团队自发完成了待办故事的承诺", bad: "变成了气氛尴尬的戏剧" },
  { name: "举行故事评审会", good: "团队达成了共识", bad: "所有估算都是脑拍的" },
  { name: "举行每日审会", good: "团队发现并跨越了挑战", bad: "PO寻思着暂停冲刺" },

  // 持续集成
  { name: "白天上线", good: "今天白天上线是安全的", bad: "可能导致灾难性后果" },
  { name: "晚上上线", good: "晚上是程序员精神最好的时候", bad: "白天已经筋疲力尽了" },

  // 持续测试
  { name: "改进单元测试", good: "写单元测试将减少出错", bad: "写单元测试会降低开发效率" },
  { name: "修复BUG", good: "今天对BUG的嗅觉大大提高", bad: "新产生的BUG将比修复的更多" },

  // 沟通交流
  { name: "组织培训会", good: "写代码之余放松一下打个盹，有益健康", bad: "小心被扣屎盆子背黑锅" },
  { name: "组织AAR", good: "参与成员同步了信息又改进了过程", bad: "出门右拐只有就全忘了" },

  // PoseMethod
  { name: "关键跑姿训练", good: "为了更好的落下", bad: "感觉不到脚踝是否在重心下方" },
  { name: "落下训练", good: "落下知觉得到了提升，跑步技术又进步了", bad: "弯腰低头圆肩让你缩成一团" },
  { name: "拉起训练", good: "拉起训练提升了你的跑步技术", bad: "过于在意前脚掌着地的结果是不对的" },
  { name: "弹跳训练", good: "弹性增强使得运用重力的技术提升", bad: "沉重的落地声预示着受伤的风险" },
  { name: "转换支撑训练", good: "你的知觉变得好了", bad: "坐着跑的姿势很难看的" },
  { name: "肌力训练", good: "增强力量后你的速度变得更快", bad: "DOMS让你一动都不想动" },
  { name: "力量训练", good: "增强力量后你的速度变得更快", bad: "DOMS让你一动都不想动" },

  // 周末
  { name: "读书", good: "读书是提升自己的捷径", bad: "用眼过度需要缓和", weekend: true },
  { name: "锻炼", good: "强身健体", bad: "能量没消耗多少，吃得却更多", weekend: true },
  { name: "玩PS4", good: "只狼拜年剑法习得", bad: "菜", weekend: true },
  { name: "访问B站", good: "sggggy同学的视频又更新了", bad: "你关注的UP主成为失踪人口", weekend: true },
  { name: "玩Nintendo Switch", good: "拯救塞尔达公主", bad: "被人马按着打", weekend: true }
];

var drinks = [
  "《物演通论》", 
  "《物种起源》", 
  "《科学革命的结构》", 
  "《经济发展理论》", 
  "《创新者的窘境》", 
  "《技术的本质》",
  "《第二曲线》", 
  "《众病之王 : 癌症传》", 
  "《姿势跑法（实践篇） : 跑得更快，更有效率，不受伤的跑步方法》", 
  "《CEO说：人人都应该像企业家一样思考》", 
  "《人力资源转型：为组织创造价值和达成成果》", 
  "《敏捷教练 : 如何打造优秀的敏捷团队》", 
  "《21世纪高等学校应用型特色精品规划教材·经济管理系列·项目管理:PRINCE2+PMBOK》", 
  "《什么是科学》", 
  "《犯罪心理研究》", 
  "《清单革命》",
  "《丰田套路》"
  ];

var quotes = [
  "如果在这个不完美的世界一切都是不完美的，爱是不完美中最为完美的。——《第七封印》",
  "不是所有的寻找都有答案，但我们将在寻找中慢慢长大，这才是寻找的意义。——《尖叫的海棠》",
  "不管是坏孩子还是好孩子，疼痛都是一样的——《爱在高中》",
  "生命是什么呢？生命是时时刻刻不知道如何是好。——《哥伦比亚的倒影》",
  "一个人必须得准备好为自己的新年忍受痛苦，还要为自己的懒惰和不诚实以及无知忍受痛苦。——《斯通纳》",
  "用沙子垒砌的城堡，无论是出于保护还是禁锢的目的，在大浪面前，下场都没什么差异。总有人会对身后的危险浑然不觉，免于受难的幸运而欢欣雀跃之余，忘记了自己的幸运要靠牺牲来换",
  "每当你想批评别人的时候，要记住，这世上并不是所有人，都有你拥有的那些优越条件",
  "真正接受并能持续坚持训练，必须先明白原理，就是为什么要这么做，才会去很好的执行。",
  "认知水平决定执行力度和训练效果。",
  "When you have nothing you have nothing to lose.",
  "How you do one thing is how you do everything.",
  "Exercise can be a tool for self-improvement, if you choose to treat it as such.",
  "To children, play is innate — an instinctive, evolutionary behavior — and the boundary between play and reality doesn’t exist. When a child is a dragon, they are a dragon. When you’re the dragon? You’re acting” — and this acting comes more naturally for some than for others.",
  "For people to respond to you, you must respond to them, instead of reacting.",
  "“Quit trying to control everything and just let go” — Tyler Durden, Fight Club",
  "Empiricism is the act of making decisions based on what is actually experienced.",
  "“In complex environments, what will happen is unknown.”",
  "The working product is the primary measure of progress.",
  "Technical Debt is scary stuff.",
  "Definitions of Done create transparency over the Product Increment.",
  "Transparency is hard because it requires us to be vulnerable with each other, but you can start with baby steps.",
  "看看什么是行之有效的，然后去行动吧",
  "夏天终归是会来的。但它只向着忍耐它的人们走来。——《给青年诗人的信》",
  "“The 21st century is defined by uncertainty,” says Andrews. “You can find yourself, very efficiently, doing the wrong thing.”",
  "讽刺是智慧的最低级形式——《红玫瑰》",
  "你在做小事的时候一定要考虑大事，这样的话所有小事才能朝着正确的方向发展。 ——阿尔文·托夫勒",
  "长期愿景或方向有助于我们集中思想和行动，因为如果没有愿景或方向，各种建议在接受评估时将是各自独立的，而不是作为整体努力的一部分。",
  "确定长期愿景或方向可能是比较微妙的，有时甚至是危险的。",
  "丰田公司意识到低成本的一个主要来源并不是机器本身的高效运转，而应该是从一道工序到下一道工序之间的流程不被中断，并几乎没有浪费。",
  "丰田公司持续改善所重复使用的方法是：①考虑愿景、方向或者目标；②最先了解当前的环境；③明确了通往愿景之路的下一阶段的目标状态；④当我们努力一步步向目标状态迈进时，会遇到很多障碍，这需要通过学习来解决",
  "我每天都会学习自己需要的知识，为明天的工作做好准备。",
  "同一视野内的事物不可能具有一成不变的定义。我们每迈出一步都会改变自己的视野，迫使我们去观察以前认为完全不同的事物。——历史学家　阿诺德·汤因比",
  "计划是不断发生变化的。 ——张富士夫",
  "假设是一种网：只有勇于撒网，我们才能有所收获。 ——德国浪漫思想家 诺瓦里斯",
  "无论是来自权威的声音，还是推理和论证的说服力，它们的重要性都比不上实验。",
  "原则上，科学游戏是永无止境的。如果有人认为，科学论述未来将不需要经过实验就可以被看做是得到了证实，那么他就从这场游戏中退出了。 ——卡尔·波普尔",
  "如果我们的认知保持在问题产生时的水平，那永远不可能解决问题。 ——爱因斯坦",
  "没有失败的实验，只有结果出乎意料的实验。 ——理查德·巴克明斯特·福勒",
  "我们可以接受这个事实：学习是伴随我们一生的、帮助我们了解最新情况的过程。最紧迫的任务是教会人们学习的方法。 ——彼得·德鲁克",
  "如果学生没学好，那肯定是老师没教好。 ——丰田公司",
  "The problem is that we are attempting to build systems that are beyond our ability to intellectually manage.",
  "熬夜不是出于苦工，而是为了自由的滋味。——《我执》",
  "大多数人都不会想母亲是好看还是不好看，母亲就是母亲。——《启蒙时代》",
  "在这个世界上，所有真性情的人，想法总是与众不同。——《边城》",
  "Unless commitment is made, there are only promises and hopes… but no plans. – Peter F. Drucker",
  "所谓之人，不厌生，不惧死，昂首挺胸，上不愧于天，下不愧于地，中不愧于己。",
  "有时候，坚持了你最不想干的事情之后，便可能得到你最想要的的东西。——《天空之城》宫崎骏",
  "有多少关系死在得寸进尺上，有多少感情死在贪得无厌上。",
  "风立ちぬ、いざ生きめやも 纵有疾风起，人生不言弃。——《起风了》",
  "所有形式的献身、虔诚、效忠和自我抹杀，本质上都是对一种事物牢牢攀附——攀附着一件可以带给我们渺小人生意义与价值的东西。"
];


var directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];
module.exports = {
  activities: activities,
  drinks: drinks,
  quotes: quotes,
  directions: directions
}