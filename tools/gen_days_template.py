#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
DailyKorean - 30 天内容生成脚本（占位，待分批复写完整数据）
作用：把第 1-30 天的每日内容（词/文章/场景）序列化为 data/days.js 并校验 JS 语法。
"""
import json
import re
import subprocess
import sys

OUT = '/workspace/dailykorean/data/days.js'

# day[i] = 第 i+1 天内容。按索引递增顺序填写。
PLAN = [
{  # 第 1 天 · 问候
  "words": [
    {"word":"안녕하세요","phonetic":"annyeonghaseyo","meaning":"你好（问候语）","example":"안녕하세요, 반갑습니다!","exampleZh":"你好，很高兴见到你！"},
    {"word":"감사합니다","phonetic":"gamsahamnida","meaning":"谢谢","example":"도와주셔서 감사합니다.","exampleZh":"谢谢你的帮助。"},
    {"word":"죄송합니다","phonetic":"joesonghamnida","meaning":"对不起","example":"죄송합니다, 늦었어요.","exampleZh":"对不起，我迟到了。"},
    {"word":"네","phonetic":"ne","meaning":"是；好","example":"네, 알겠습니다.","exampleZh":"好，我知道了。"},
    {"word":"아니요","phonetic":"aniyo","meaning":"不；不是","example":"아니요, 괜찮아요.","exampleZh":"不，没关系。"},
    {"word":"좋아요","phonetic":"joayo","meaning":"好；喜欢","example":"이거 정말 좋아요.","exampleZh":"这个真的很喜欢。"},
    {"word":"물","phonetic":"mul","meaning":"水","example":"물 한 잔 주세요.","exampleZh":"请给我一杯水。"},
    {"word":"사람","phonetic":"saram","meaning":"人","example":"저기 사람이 많아요.","exampleZh":"那边人很多。"},
    {"word":"집","phonetic":"jip","meaning":"家；房子","example":"저녁에 집에 가요.","exampleZh":"晚上回家。"},
    {"word":"학교","phonetic":"hakgyo","meaning":"学校","example":"우리는 학교에서 만나요.","exampleZh":"我们在学校见面。"}
  ],
  "article": {
    "title":"아침 인사","titleZh":"早晨的问候",
    "paragraphs":[
      {"en":"한국 사람들은 아침에 ‘안녕하세요’라고 인사합니다.","phonetic":"hanguk saramdeureun a-chim-e annyeonghaseyo-rago insahamnida","zh":"韩国人早上会用“안녕하세요”打招呼。"},
      {"en":"‘안녕하세요’는 가장 흔한 인사말입니다.","phonetic":"annyeonghaseyo-neun gajang heunhan insamarimnida","zh":"“안녕하세요”是最常见的问候语。"},
      {"en":"친구 사이에는 ‘안녕’이라고 짧게 말합니다.","phonetic":"chingu saien-eun annyeong-irago jjalbge malhamnida","zh":"朋友之间会简短地说“안녕”。"},
      {"en":"모르는 사람에게는 ‘안녕하세요’라고 해야 합니다.","phonetic":"moreuneun saram-ege-neun annyeonghaseyo-rago haeya hamnida","zh":"对陌生人应该说“안녕하세요”。"}
    ],
    "phrases":[{"phrase":"아침 인사","meaning":"早晨问候"},{"phrase":"인사말","meaning":"问候语"}],
    "grammar":[{"point":"라고 인사합니다","explain":"表示“……地打招呼”，이라고 加在名词后。"},{"point":"해야 합니다","explain":"表示“应该做……”，해요 体中的必须用法。"}],
    "tips":["안녕 = 熟人间的“你好/再见”。","합니다 是正式的敬语结束语。"],
    "quiz":{"choice":[{"q":"‘안녕하세요’是最常用的什么？","options":["问候语","告别语","感谢语","道歉语"],"answer":0},{"q":"朋友之间通常用什么打招呼？","options":["안녕하세요","안녕","잘 가","또 봐요"],"answer":1}],"fill":[{"q":"早晨见面要说 _하세요。","answer":"안녕"}],"writing":{"prompt":"用韩语写一句早晨对老师的问候。"}}
  },
  "scenarios":[
    {"scene":"咖啡店点咖啡","situationZh":"你在咖啡店里想点一杯冰美式。","roles":{"clerk":"店员","user":"我"},
     "turns":[
       {"role":"clerk","ko":"어서 오세요! 뭘 드릴까요?","phonetic":"eoseo ose-yo! mwol deurilkkayo?","zh":"欢迎光临！请问需要什么？"},
       {"role":"user","ko":"아이스 아메리카노 한 잔 주세요.","phonetic":"aiseu americano han jan ju-se-yo","zh":"请给我一杯冰美式。"},
       {"role":"clerk","ko":"크기는 어떻게 할까요?","phonetic":"keugi-neun eotteoke halkkayo?","zh":"请问要什么杯型？"},
       {"role":"user","ko":"큰 컵으로 주세요.","phonetic":"keun keob-eu-ro ju-se-yo","zh":"大杯，谢谢。"},
       {"role":"clerk","ko":"다른 것은 필요 없으세요?","phonetic":"dareun geoseun piryo eops-eu-se-yo?","zh":"还需要别的吗？"},
       {"role":"user","ko":"아니요, 그게 다예요. 감사합니다.","phonetic":"ani-yo, geuge daye-yo. gamsahamnida","zh":"不用了，就这些。谢谢。"}
     ],
     "tips":["어서 오세요 = 欢迎光临。","한 잔 주세요 = 请给我一杯。","아메리카노 = 美式咖啡。"]},
    {"scene":"餐厅点餐","situationZh":"你在餐厅想点一份泡菜炒饭。","roles":{"clerk":"服务员","user":"我"},
     "turns":[
       {"role":"clerk","ko":"몇 분이세요?","phonetic":"myeot buniseyo?","zh":"请问几位？"},
       {"role":"user","ko":"두 명이에요.","phonetic":"du myeong-ie-yo","zh":"两位。"},
       {"role":"clerk","ko":"여기 메뉴입니다.","phonetic":"yeo-gi menyu-imnida","zh":"这是菜单。"},
       {"role":"user","ko":"김치 볶음밥 하나 주세요.","phonetic":"gimchi bokkeumbap hana ju-se-yo","zh":"请给我一份泡菜炒饭。"},
       {"role":"clerk","ko":"음료수는요?","phonetic":"eumnyosu-neun-yo?","zh":"喝点什么？"},
       {"role":"user","ko":"물 한 잔만요.","phonetic":"mul han jan-man-yo","zh":"只要一杯水。"}
     ],
     "tips":["몇 분이세요 = 有几位？","주세요 = 请给我……。","김치 볶음밥 = 泡菜炒饭。"]}
  ]
},
{  # 第 2 天 · 常用动词
  "words": [
    {"word":"먹다","phonetic":"meokda","meaning":"吃","example":"밥을 먹어요.","exampleZh":"吃饭。"},
    {"word":"마시다","phonetic":"masida","meaning":"喝","example":"커피를 마셔요.","exampleZh":"喝咖啡。"},
    {"word":"가다","phonetic":"gada","meaning":"去","example":"학교에 가요.","exampleZh":"去学校。"},
    {"word":"오다","phonetic":"oda","meaning":"来","example":"친구가 왔어요.","exampleZh":"朋友来了。"},
    {"word":"보다","phonetic":"boda","meaning":"看；见面","example":"영화를 봐요.","exampleZh":"看电影。"},
    {"word":"듣다","phonetic":"deutda","meaning":"听","example":"음악을 들어요.","exampleZh":"听音乐。"},
    {"word":"하다","phonetic":"hada","meaning":"做","example":"숙제를 해요.","exampleZh":"做作业。"},
    {"word":"배우다","phonetic":"baeuda","meaning":"学习","example":"한국어를 배워요.","exampleZh":"学习韩语。"},
    {"word":"만나다","phonetic":"mannada","meaning":"见面；遇见","example":"친구를 만나요.","exampleZh":"和朋友见面。"},
    {"word":"좋다","phonetic":"jota","meaning":"好；喜欢","example":"여기가 좋아요.","exampleZh":"这里很好。"}
  ],
  "article": {
    "title":"한국어 학습","titleZh":"学习韩语",
    "paragraphs":[
      {"en":"한국어를 배우는 것은 재미있습니다.","phonetic":"hangugoreul baeuneun geoseun jaemi-itseumnida","zh":"学习韩语很有趣。"},
      {"en":"매일 조금씩 연습하면 좋아집니다.","phonetic":"maeil jogeumssik yeonseuphamyeon joah-jimnida","zh":"每天练习一点就会变好。"},
      {"en":"친구와 대화하며 배울 수 있습니다.","phonetic":"chinguwa dae-hwa-hamyeo baeul su itseumnida","zh":"可以和朋友边聊天边学。"},
      {"en":"꾸준함이 가장 중요합니다.","phonetic":"kkujunhani gajang jungyohamnida","zh":"坚持最重要。"}
    ],
    "phrases":[{"phrase":"조금씩","meaning":"一点点地"},{"phrase":"꾸준함","meaning":"坚持；持之以恒"}],
    "grammar":[{"point":"배우는 것","explain":"冠形词+것，把动词变成名词性“学习的（事）”。"}],
    "tips":["배우다 = 学习。","가장 중요합니다 = 最重要。"],
    "quiz":{"choice":[{"q":"‘꾸준함’是什么意思？","options":["聪明","坚持","勤奋","耐心"],"answer":1},{"q":"文中说怎样学韩语？","options":["每天练习一点","只学语法","背单词","不用练习"],"answer":0}],"fill":[{"q":"한국어를 배_는 것은 재미있습니다.","answer":"우"}],"writing":{"prompt":"用韩语写一句“我喜欢学习韩语”。"}}
  },
  "scenarios":[
    {"scene":"购物问价","situationZh":"你在店里想买一件 T 恤并问价格。","roles":{"clerk":"店员","user":"我"},
     "turns":[
       {"role":"clerk","ko":"무엇을 찾으세요?","phonetic":"mueoseul chajeuse-yo?","zh":"您要找什么？"},
       {"role":"user","ko":"티셔츠를 보고 싶어요.","phonetic":"tisyeocheuleul bogo sipeo-yo","zh":"我想看看 T 恤。"},
       {"role":"clerk","ko":"이거 어떻게 하세요?","phonetic":"igeo eotteoke hase-yo?","zh":"这个怎么样？"},
       {"role":"user","ko":"이거 얼마예요?","phonetic":"igeo eolma-ye-yo?","zh":"这个多少钱？"},
       {"role":"clerk","ko":"만 오천 원이에요.","phonetic":"man ocheon won-ie-yo","zh":"一万五千韩元。"},
       {"role":"user","ko":"조금 비싸네요.","phonetic":"jogeum bissaneyo","zh":"有点贵呢。"}
     ],
     "tips":["얼마예요 = 多少钱？","만 오천 원 = 一万五千韩元。"]},
    {"scene":"和朋友见面","situationZh":"你和朋友约好在学校门口见面。","roles":{"clerk":"朋友","user":"我"},
     "turns":[
       {"role":"clerk","ko":"언제 만날까요?","phonetic":"eonje mannalkkayo?","zh":"我们什么时候见面？"},
       {"role":"user","ko":"오후 세 시에 학교 앞에서 만나요.","phonetic":"ohu se sie hakgyo apeseo manna-yo","zh":"下午三点在学校前面见吧。"},
       {"role":"clerk","ko":"좋아요. 같이 한국어를 공부해요.","phonetic":"joayo. gachi hangugeoreul gongbu-hae-yo","zh":"好啊。我们一起学韩语吧。"},
       {"role":"user","ko":"네, 그리고 밥도 먹어요.","phonetic":"ne, geurigo bapdo meogeo-yo","zh":"好，然后再一起吃饭。"},
       {"role":"clerk","ko":"그럼 그때 봐요!","phonetic":"geureom geuttae bwa-yo","zh":"那到时见！"}
     ],
     "tips":["언제 = 什么时候。","만나다 = 见面。","~에서 만나다 = 在……见面。"]}
  ]
},
{  # 第 3 天 · 天气与季节
  "words": [
    {"word":"날씨","phonetic":"nalsi","meaning":"天气","example":"오늘 날씨가 좋아요.","exampleZh":"今天天气很好。"},
    {"word":"맑다","phonetic":"makta","meaning":"晴朗","example":"하늘이 맑아요.","exampleZh":"天空晴朗。"},
    {"word":"비","phonetic":"bi","meaning":"雨","example":"비가 와요.","exampleZh":"下雨了。"},
    {"word":"눈","phonetic":"nun","meaning":"雪","example":"눈이 와요.","exampleZh":"下雪了。"},
    {"word":"춥다","phonetic":"chupda","meaning":"冷","example":"겨울은 추워요.","exampleZh":"冬天很冷。"},
    {"word":"덥다","phonetic":"deopda","meaning":"热","example":"여름은 더워요.","exampleZh":"夏天很热。"},
    {"word":"따뜻하다","phonetic":"ttadeuthada","meaning":"暖和","example":"봄날은 따뜻해요.","exampleZh":"春日很暖和。"},
    {"word":"시원하다","phonetic":"siwonhada","meaning":"凉爽","example":"바람이 시원해요.","exampleZh":"风很凉爽。"},
    {"word":"많다","phonetic":"manta","meaning":"多","example":"사람이 많아요.","exampleZh":"人很多。"},
    {"word":"적다","phonetic":"jeokda","meaning":"少","example":"비가 적게 와요.","exampleZh":"雨很少下。"}
  ],
  "article": {
    "title":"사계절","titleZh":"四季",
    "paragraphs":[
      {"en":"한국에는 사계절이 있습니다.","phonetic":"hangugeneun sagyejeori itseumnida","zh":"韩国有四季。"},
      {"en":"봄에는 꽃이 피고 날씨가 따뜻합니다.","phonetic":"bomeneun kkochi pigo nalsiga ttadeuthamnida","zh":"春天花开，天气暖和。"},
      {"en":"여름에는 덥고 비가 많이 옵니다.","phonetic":"yeoreumeneun deopgo biga mani omnida","zh":"夏天炎热，雨水很多。"},
      {"en":"겨울에는 춥고 눈이 올 수도 있습니다.","phonetic":"gyeoreuneun chupgo nuni ol sudo itseumnida","zh":"冬天寒冷，可能会下雪。"}
    ],
    "phrases":[{"phrase":"꽃이 피고","meaning":"花开"},{"phrase":"눈이 올 수도","meaning":"可能会下雪"}],
    "grammar":[{"point":"사계절","explain":"四季。"}],
    "tips":["날씨 = 天气。","-아요/-어요 是句尾敬语变体。"],
    "quiz":{"choice":[{"q":"韩国有几个季节？","options":["2","3","4","5"],"answer":2},{"q":"冬季天气特点是？","options":["热","冷","暖和","凉爽"],"answer":1}],"fill":[{"q":"봄에는 날씨가 따뜻_니다.","answer":"합"}],"writing":{"prompt":"用韩语写一句形容今天天气的话。"}}
  },
  "scenarios":[
    {"scene":"聊天气","situationZh":"你和朋友在聊今天的天气。","roles":{"clerk":"朋友","user":"我"},
     "turns":[
       {"role":"clerk","ko":"오늘 날씨 어때요?","phonetic":"oneul nalsi eottae-yo?","zh":"今天天气怎么样？"},
       {"role":"user","ko":"오늘은 맑고 시원해요.","phonetic":"oneureun makgo siwonhae-yo","zh":"今天晴朗又凉爽。"},
       {"role":"clerk","ko":"내일은 비가 온대요.","phonetic":"naeirin biga on-da-yo","zh":"听说明天会下雨。"},
       {"role":"user","ko":"그럼 우산을 챙겨야겠네요.","phonetic":"geureom usaneul chaenggyeoyagenn-e-yo","zh":"那得带伞了。"},
       {"role":"clerk","ko":"출근할 때 주의하세요.","phonetic":"chulgeunhal ttae ju-ui-hase-yo","zh":"上班路上要小心。"}
     ],
     "tips":["날씨 어때요 = 天气怎么样？","비가 온대요 = 听说要下雨。"]},
    {"scene":"春秋出游","situationZh":"你和朋友商量春天去爬山。","roles":{"clerk":"朋友","user":"我"},
     "turns":[
       {"role":"clerk","ko":"봄에 같이 등산 어때요?","phonetic":"bome gachi deungsan eottae-yo?","zh":"春天一起去爬山怎么样？"},
       {"role":"user","ko":"좋아요. 날씨가 따뜻해서 좋겠어요.","phonetic":"joayo. nalsiga ttadeuthaeseo jotgetseo-yo","zh":"好啊。天气暖和的话不错。"},
       {"role":"clerk","ko":"주말에 비 안 오는 날 갔으면 좋겠어요.","phonetic":"jumare bi an oneun nal gasseumyeon jotgetseo-yo","zh":"希望是周末没下雨的一天去。"},
       {"role":"user","ko":"네, 그럼 언제가 좋을까요?","phonetic":"ne, geureom eonjega joeulkka-yo?","zh":"好，那什么时候去好呢？"},
       {"role":"clerk","ko":"다음 주 토요일 어때요?","phonetic":"daeum ju toyoil eottae-yo?","zh":"下周六怎么样？"},
       {"role":"user","ko":"좋아요! 그때 만나요.","phonetic":"joayo! geuttae manna-yo","zh":"好啊！到时间见。"}
     ],
     "tips":["~어때요 = ……怎么样？","등산 = 爬山。","비 안 오는 날 = 不下雨的日子。"]}
  ]
},
{  # 第 4 天 · 食物与点餐
  "words": [
    {"word":"밥","phonetic":"bap","meaning":"饭","example":"밥을 먹어요.","exampleZh":"吃饭。"},
    {"word":"김치","phonetic":"gimchi","meaning":"泡菜","example":"김치가 맛있어요.","exampleZh":"泡菜很好吃。"},
    {"word":"주세요","phonetic":"juse-yo","meaning":"请给我","example":"커피 주세요.","exampleZh":"请给我咖啡。"},
    {"word":"맛있다","phonetic":"masitda","meaning":"好吃；美味","example":"이 음식이 맛있어요.","exampleZh":"这道菜很好吃。"},
    {"word":"막다","phonetic":"makda","meaning":"咸","example":"국이 너무 짜요.","exampleZh":"汤太咸了。"},
    {"word":"매운","phonetic":"mae-eun","meaning":"辣的","example":"매운 음식을 좋아해요.","exampleZh":"我喜欢吃辣。"},
    {"word":"메뉴","phonetic":"menyu","meaning":"菜单","example":"메뉴 좀 보여주세요.","exampleZh":"请给我看看菜单。"},
    {"word":"계산이요","phonetic":"gyesan-iyo","meaning":"买单；结账","example":"계산이요!","exampleZh":"买单！"},
    {"word":"숟가락","phonetic":"sutgarak","meaning":"勺子","example":"숟가락 주세요.","exampleZh":"请给我勺子。"},
    {"word":"먹다","phonetic":"meokda","meaning":"吃","example":"과일을 먹어요.","exampleZh":"吃水果。"}
  ],
  "article": {
    "title":"한국 음식","titleZh":"韩国饮食",
    "paragraphs":[
      {"en":"한국 음식은 맵고 맛있습니다.","phonetic":"han-guk eumsigeun maepgo masitseumnida","zh":"韩国菜辣而美味。"},
      {"en":"김치와 밥은 기본 음식입니다.","phonetic":"gimchiwa babeun gibo-neum-sikimnida","zh":"泡菜和米饭是基本饮食。"},
      {"en":"한국 사람들은 매운 음식을 자주 먹습니다.","phonetic":"hanguk saramdeureun mae-uneumsigeul jaju meokseumnida","zh":"韩国人常吃辣的食物。"},
      {"en":"식사할 때 김치가 꼭 필요합니다.","phonetic":"siksalttae gimchiga kkok piryohamnida","zh":"吃饭时泡菜是必备的。"}
    ],
    "phrases":[{"phrase":"한국 음식","meaning":"韩国饮食"},{"phrase":"매운 음식","meaning":"辣的食物"}],
    "grammar":[{"point":"맵고 맛있습니다","explain":"形容词连接尾-고，表示“又辣又好吃”。"}],
    "tips":["한국 음식 = 韩国饮食。","맵다 = 辣；짓다 = 咸。"],
    "quiz":{"choice":[{"q":"文中说韩国菜怎么样？","options":["辣而美味","清淡","很甜","很苦"],"answer":0},{"q":"下面哪个是基本饮食？","options":["泡菜和米饭","比萨和汉堡","面包和咖喱","只有面包"],"answer":0}],"fill":[{"q":"한국 음식은 _고 맛있습니다.","answer":"맵"}],"writing":{"prompt":"用韩语写一句你最喜欢吃的韩国菜。"}}
  },
  "scenarios":[
    {"scene":"在烤肉店点餐","situationZh":"你在烤肉店点上烤五花肉和汽水。","roles":{"clerk":"服务员","user":"我"},
     "turns":[
       {"role":"clerk","ko":"뭐 드시겠어요?","phonetic":"mwo deusi-gett-seo-yo?","zh":"您想吃点什么？"},
       {"role":"user","ko":"돼지고기 삼겹살 두 인분 주세요.","phonetic":"dwaejigogi samgyeopsal du inbun ju-se-yo","zh":"请给我两份五花肉。"},
       {"role":"clerk","ko":"음료수는 뭐 드릴까요?","phonetic":"eumnyosuneun mwo deurilkkayo?","zh":"喝什么饮料？"},
       {"role":"user","ko":"사이다 한 잔 주세요.","phonetic":"saida han jan ju-se-yo","zh":"请给我一杯汽水。"},
       {"role":"clerk","ko":"다음 주세요.","phonetic":"daeum ju-se-yo","zh":"请稍等。"}
     ],
     "tips":["인분 = 一人份。","삼겹살 = 五花肉。","다음 주세요 = 请稍等。"]},
    {"scene":"在餐厅点面","situationZh":"你在面馆点一碗刀切面并付款。","roles":{"clerk":"服务员","user":"我"},
     "turns":[
       {"role":"clerk","ko":"무엇으로 드릴까요?","phonetic":"mueoseuro deurilkkayo?","zh":"给您上什么？"},
       {"role":"user","ko":"칼국수 하나 주세요.","phonetic":"kalguksu hana ju-se-yo","zh":"请给我一碗刀切面。"},
       {"role":"clerk","ko":"맵게 해 드릴까요?","phonetic":"maepge hae deurilkkayo?","zh":"要做得辣一些吗？"},
       {"role":"user","ko":"아니요, 순하게 해 주세요.","phonetic":"ani-yo, sunhage hae ju-se-yo","zh":"不用，做得清淡一些。"},
       {"role":"clerk","ko":"네, 잠시만요.","phonetic":"ne, jamsimanyo","zh":"好的，请稍等。"}
     ],
     "tips":["칼국수 = 刀切面。","맵게 하다 = 做辣。","순하게 = 清淡地。"]}
  ]
},
{  # 第 5 天 · 数字与时间
  "words": [
    {"word":"하나","phonetic":"hana","meaning":"一","example":"하나 주세요.","exampleZh":"请给我一个。"},
    {"word":"둘","phonetic":"dul","meaning":"二","example":"둘 있어요.","exampleZh":"有两个。"},
    {"word":"셋","phonetic":"set","meaning":"三","example":"사람 셋이에요.","exampleZh":"有三人。"},
    {"word":"넷","phonetic":"net","meaning":"四","example":"사과 넷이에요.","exampleZh":"有四个苹果。"},
    {"word":"다섯","phonetic":"daseot","meaning":"五","example":"책 다섯 권이에요.","exampleZh":"有五本书。"},
    {"word":"시간","phonetic":"sigan","meaning":"时间；小时","example":"시간이 없어요.","exampleZh":"没有时间。"},
    {"word":"지금","phonetic":"jigeum","meaning":"现在","example":"지금 몇 시예요?","exampleZh":"现在几点了？"},
    {"word":"몇 시","phonetic":"myeoch-si","meaning":"几点","example":"몇 시에 출근해요?","exampleZh":"几点上班？"},
    {"word":"반","phonetic":"ban","meaning":"半","example":"열 시 반이에요.","exampleZh":"十点半。"},
    {"word":"약속","phonetic":"yaksok","meaning":"约定","example":"약속이 있어요.","exampleZh":"我有约。"}
  ],
  "article": {
    "title":"한국어 숫자","titleZh":"韩语数字",
    "paragraphs":[
      {"en":"한국어에는 두 가지 숫자가 있습니다.","phonetic":"hangugeoneun du gaji sutjaga itseumnida","zh":"韩语里有两种数字。"},
      {"en":"하나는 고유어 숫자이고, 다른 하나는 한자어 숫자입니다.","phonetic":"hananeun goyu-eoSujjagi-ko, dareun hananeun hanja-eo-sutjaimnida","zh":"一种是固有数字，另一种是汉字数字。"},
      {"en":"시간을 말할 때는 고유어 숫자를 씁니다.","phonetic":"siganeul malhal ttaeneun goyu-eo sutjareul sseumnida","zh":"说时间时用固有数字。"},
      {"en":"숫자를 잘 외우면 물건을 사기에 편리합니다.","phonetic":"sutjareul jal oeumyeon mulgeoneul sagie pyeollihamnida","zh":"记好数字，买东西很方便。"}
    ],
    "phrases":[{"phrase":"두 가지","meaning":"两种"},{"phrase":"물건을 사다","meaning":"买东西"}],
    "grammar":[{"point":"시간을 말할 때","explain":"“当说时间的时候”，명+을+말하다+时引导。"}],
    "tips":["하나,둘,셋… = 固有数字。","몇 시 = 几点。"],
    "quiz":{"choice":[{"q":"韩语里有几种数字？","options":["1","2","3","4"],"answer":1},{"q":"说时间时用哪种数字？","options":["固有数字","汉字数字","英语","罗马数字"],"answer":0}],"fill":[{"q":"现在 _ 시예요?（几点）","answer":"몇"}],"writing":{"prompt":"用韩语写出你现在的时间，比如“现在3点”。"}}
  },
  "scenarios":[
    {"scene":"问现在几点","situationZh":"朋友问你电影几点开场，你回答时间。","roles":{"clerk":"朋友","user":"我"},
     "turns":[
       {"role":"clerk","ko":"지금 몇 시예요?","phonetic":"jigeum myeoch siye-yo?","zh":"现在几点了？"},
       {"role":"user","ko":"지금 두 시 반이에요.","phonetic":"jigeum du si ban-ie-yo","zh":"现在两点半。"},
       {"role":"clerk","ko":"영화는 몇 시에 시작해요?","phonetic":"yeonghwaneun myeoch sie sijakhae-yo?","zh":"电影几点开始？"},
       {"role":"user","ko":"세 시에 시작해요.","phonetic":"se sie sijakhae-yo","zh":"三点开始。"},
       {"role":"clerk","ko":"그럼 늦지 않겠네요.","phonetic":"geureom neutji angenn-e-yo","zh":"那不会迟到呢。"}
     ],
     "tips":["몇 시 = 几点。","-시 반 = 几点半。","시작하다 = 开始。"]},
    {"scene":"约周末见面","situationZh":"你约朋友周末见面并确定时间。","roles":{"clerk":"朋友","user":"我"},
     "turns":[
       {"role":"clerk","ko":"주말에 시간 있어요?","phonetic":"jumare sigan isseo-yo?","zh":"周末有空吗？"},
       {"role":"user","ko":"토요일 오후에 시간 있어요.","phonetic":"toyoil ohu-e sigan isseo-yo","zh":"周六下午有空。"},
       {"role":"clerk","ko":"그럼 토요일 세 시에 보자.","phonetic":"geureom toyoil se sie boja","zh":"那就周六三点见吧。"},
       {"role":"user","ko":"네, 어디에서 만날까요?","phonetic":"ne, eodieseo mannalkka-yo?","zh":"好，在哪见？"},
       {"role":"clerk","ko":"지하철 역 앞에서 만나요.","phonetic":"jihacheol yeog apeseo manna-yo","zh":"在地铁站前面见吧。"},
       {"role":"user","ko":"좋아요! 그때 봐요.","phonetic":"joayo! geuttae bwa-yo","zh":"好啊！到时见。"}
     ],
     "tips":["시간 있어요 = 有空。","보자 = 见（半语）。","어디에서 = 在哪。"]}
  ]
},
]

# ================= 生成器主体（读者可忽略） =================
import json as _json
import glob
import os

SEG_DIR = '/workspace/dailykorean/data/days_segments'


def _load_segments():
    """加载 days_segments 目录下的 dayNN.json，按序号合并进 PLAN。"""
    segs = {}
    if os.path.isdir(SEG_DIR):
        for fp in glob.glob(os.path.join(SEG_DIR, 'day*.json')):
            base = os.path.basename(fp).replace('.json', '')  # day07
            try:
                idx = int(''.join(ch for ch in base if ch.isdigit()))
            except ValueError:
                continue
            with open(fp, 'r', encoding='utf-8') as f:
                segs[idx] = _json.load(f)
    plan = list(PLAN)
    for n in sorted(segs):
        while len(plan) <= n - 1:
            plan.append(None)
        plan[n - 1] = segs[n]
    return [d for d in plan if d is not None]


def to_js(plan):
    return 'window.DAY_PLAN = ' + json.dumps(plan, ensure_ascii=False, indent=2) + ';\n'


def main():
    merged = _load_segments()
    if not merged:
        raise SystemExit('内容为空，尚未填充 30 天数据。')
    js = ('// DailyKorean - 韩语 30 天每日内容周期数据源（由 tools/gen_days_template.py 生成，请勿手改）\n'
          + to_js(merged))
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(js)
    with open(OUT.replace('.js', '.tmp.js'), 'w', encoding='utf-8') as f:
        f.write('module.exports = ' + json.dumps(merged, ensure_ascii=False) + ';\n')
    print(f'✔ 写入 {OUT}，共 {len(merged)} 天')


if __name__ == '__main__':
    main()