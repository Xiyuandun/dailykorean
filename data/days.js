// DailyKorean - 韩语 30 天每日内容周期数据源（由 tools/gen_days_template.py 生成，请勿手改）
window.DAY_PLAN = [
  {
    "words": [
      {
        "word": "안녕하세요",
        "phonetic": "annyeonghaseyo",
        "meaning": "你好（问候语）",
        "example": "안녕하세요, 반갑습니다!",
        "exampleZh": "你好，很高兴见到你！"
      },
      {
        "word": "감사합니다",
        "phonetic": "gamsahamnida",
        "meaning": "谢谢",
        "example": "도와주셔서 감사합니다.",
        "exampleZh": "谢谢你的帮助。"
      },
      {
        "word": "죄송합니다",
        "phonetic": "joesonghamnida",
        "meaning": "对不起",
        "example": "죄송합니다, 늦었어요.",
        "exampleZh": "对不起，我迟到了。"
      },
      {
        "word": "네",
        "phonetic": "ne",
        "meaning": "是；好",
        "example": "네, 알겠습니다.",
        "exampleZh": "好，我知道了。"
      },
      {
        "word": "아니요",
        "phonetic": "aniyo",
        "meaning": "不；不是",
        "example": "아니요, 괜찮아요.",
        "exampleZh": "不，没关系。"
      },
      {
        "word": "좋아요",
        "phonetic": "joayo",
        "meaning": "好；喜欢",
        "example": "이거 정말 좋아요.",
        "exampleZh": "这个真的很喜欢。"
      },
      {
        "word": "물",
        "phonetic": "mul",
        "meaning": "水",
        "example": "물 한 잔 주세요.",
        "exampleZh": "请给我一杯水。"
      },
      {
        "word": "사람",
        "phonetic": "saram",
        "meaning": "人",
        "example": "저기 사람이 많아요.",
        "exampleZh": "那边人很多。"
      },
      {
        "word": "집",
        "phonetic": "jip",
        "meaning": "家；房子",
        "example": "저녁에 집에 가요.",
        "exampleZh": "晚上回家。"
      },
      {
        "word": "학교",
        "phonetic": "hakgyo",
        "meaning": "学校",
        "example": "우리는 학교에서 만나요.",
        "exampleZh": "我们在学校见面。"
      }
    ],
    "article": {
      "title": "아침 인사",
      "titleZh": "早晨的问候",
      "paragraphs": [
        {
          "en": "한국 사람들은 아침에 ‘안녕하세요’라고 인사합니다.",
          "phonetic": "hanguk saramdeureun a-chim-e annyeonghaseyo-rago insahamnida",
          "zh": "韩国人早上会用“안녕하세요”打招呼。"
        },
        {
          "en": "‘안녕하세요’는 가장 흔한 인사말입니다.",
          "phonetic": "annyeonghaseyo-neun gajang heunhan insamarimnida",
          "zh": "“안녕하세요”是最常见的问候语。"
        },
        {
          "en": "친구 사이에는 ‘안녕’이라고 짧게 말합니다.",
          "phonetic": "chingu saien-eun annyeong-irago jjalbge malhamnida",
          "zh": "朋友之间会简短地说“안녕”。"
        },
        {
          "en": "모르는 사람에게는 ‘안녕하세요’라고 해야 합니다.",
          "phonetic": "moreuneun saram-ege-neun annyeonghaseyo-rago haeya hamnida",
          "zh": "对陌生人应该说“안녕하세요”。"
        }
      ],
      "phrases": [
        {
          "phrase": "아침 인사",
          "meaning": "早晨问候"
        },
        {
          "phrase": "인사말",
          "meaning": "问候语"
        }
      ],
      "grammar": [
        {
          "point": "라고 인사합니다",
          "explain": "表示“……地打招呼”，이라고 加在名词后。"
        },
        {
          "point": "해야 합니다",
          "explain": "表示“应该做……”，해요 体中的必须用法。"
        }
      ],
      "tips": [
        "안녕 = 熟人间的“你好/再见”。",
        "합니다 是正式的敬语结束语。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "‘안녕하세요’是最常用的什么？",
            "options": [
              "问候语",
              "告别语",
              "感谢语",
              "道歉语"
            ],
            "answer": 0
          },
          {
            "q": "朋友之间通常用什么打招呼？",
            "options": [
              "안녕하세요",
              "안녕",
              "잘 가",
              "또 봐요"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "早晨见面要说 _하세요。",
            "answer": "안녕"
          }
        ],
        "writing": {
          "prompt": "用韩语写一句早晨对老师的问候。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "咖啡店点咖啡",
        "situationZh": "你在咖啡店里想点一杯冰美式。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어서 오세요! 뭘 드릴까요?",
            "phonetic": "eoseo ose-yo! mwol deurilkkayo?",
            "zh": "欢迎光临！请问需要什么？"
          },
          {
            "role": "user",
            "ko": "아이스 아메리카노 한 잔 주세요.",
            "phonetic": "aiseu americano han jan ju-se-yo",
            "zh": "请给我一杯冰美式。"
          },
          {
            "role": "clerk",
            "ko": "크기는 어떻게 할까요?",
            "phonetic": "keugi-neun eotteoke halkkayo?",
            "zh": "请问要什么杯型？"
          },
          {
            "role": "user",
            "ko": "큰 컵으로 주세요.",
            "phonetic": "keun keob-eu-ro ju-se-yo",
            "zh": "大杯，谢谢。"
          },
          {
            "role": "clerk",
            "ko": "다른 것은 필요 없으세요?",
            "phonetic": "dareun geoseun piryo eops-eu-se-yo?",
            "zh": "还需要别的吗？"
          },
          {
            "role": "user",
            "ko": "아니요, 그게 다예요. 감사합니다.",
            "phonetic": "ani-yo, geuge daye-yo. gamsahamnida",
            "zh": "不用了，就这些。谢谢。"
          }
        ],
        "tips": [
          "어서 오세요 = 欢迎光临。",
          "한 잔 주세요 = 请给我一杯。",
          "아메리카노 = 美式咖啡。"
        ]
      },
      {
        "scene": "餐厅点餐",
        "situationZh": "你在餐厅想点一份泡菜炒饭。",
        "roles": {
          "clerk": "服务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "몇 분이세요?",
            "phonetic": "myeot buniseyo?",
            "zh": "请问几位？"
          },
          {
            "role": "user",
            "ko": "두 명이에요.",
            "phonetic": "du myeong-ie-yo",
            "zh": "两位。"
          },
          {
            "role": "clerk",
            "ko": "여기 메뉴입니다.",
            "phonetic": "yeo-gi menyu-imnida",
            "zh": "这是菜单。"
          },
          {
            "role": "user",
            "ko": "김치 볶음밥 하나 주세요.",
            "phonetic": "gimchi bokkeumbap hana ju-se-yo",
            "zh": "请给我一份泡菜炒饭。"
          },
          {
            "role": "clerk",
            "ko": "음료수는요?",
            "phonetic": "eumnyosu-neun-yo?",
            "zh": "喝点什么？"
          },
          {
            "role": "user",
            "ko": "물 한 잔만요.",
            "phonetic": "mul han jan-man-yo",
            "zh": "只要一杯水。"
          }
        ],
        "tips": [
          "몇 분이세요 = 有几位？",
          "주세요 = 请给我……。",
          "김치 볶음밥 = 泡菜炒饭。"
        ]
      },
      {
        "scene": "初次见面自我介绍",
        "situationZh": "在语学院初次见到韩国同学，互相打招呼并了解对方的国籍。",
        "roles": {
          "clerk": "同学",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요! 저는 김민수예요.",
            "phonetic": "annyeonghaseyo! jeoneun giminsu-ye-yo.",
            "zh": "你好！我是金敏秀。"
          },
          {
            "role": "user",
            "ko": "안녕하세요. 저는 유진이라고 해요.",
            "phonetic": "annyeonghaseyo. jeoneun yujin-i-rago haeyo.",
            "zh": "你好。我叫裕珍。"
          },
          {
            "role": "clerk",
            "ko": "만나서 반가워요. 유진 씨는 한국 사람이에요?",
            "phonetic": "mannaseo bangawoyo. yujin ssineun hanguk saram-i-e-yo?",
            "zh": "很高兴见到你。裕珍是韩国人吗？"
          },
          {
            "role": "user",
            "ko": "아니요, 저는 중국 사람이에요.",
            "phonetic": "aniyo, jeoneun jungguk saram-i-e-yo.",
            "zh": "不是，我是中国人。"
          },
          {
            "role": "clerk",
            "ko": "아, 정말요? 한국어를 정말 잘 하시네요!",
            "phonetic": "a, jeongmallyo? hangug-eoreul jeongmal jal hasineyo!",
            "zh": "啊，真的吗？你韩语说得真好啊！"
          },
          {
            "role": "user",
            "ko": "아직 배우는 중이에요.",
            "phonetic": "ajik baeuneun jung-i-e-yo.",
            "zh": "我还在学习当中。"
          }
        ],
        "tips": [
          "见面时用「안녕하세요」问好，回答时也要回「안녕하세요」。",
          "告诉名字时用「이름은…예요」或「…이라고 해요」。",
          "「반가워요」表示“很高兴”，初次见面常用「만나서 반가워요」。"
        ]
      },
      {
        "scene": "早上和同事打招呼",
        "situationZh": "早上上班时在办公室门口遇到同事，互相问候并约好一起吃午饭。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요! 좋은 아침이에요.",
            "phonetic": "annyeonghaseyo! joeun achim-i-e-yo.",
            "zh": "你好！早上好。"
          },
          {
            "role": "user",
            "ko": "안녕하세요! 오늘도 힘내요!",
            "phonetic": "annyeonghaseyo! oneuldo himnaeyo!",
            "zh": "你好！今天也加油！"
          },
          {
            "role": "clerk",
            "ko": "네, 고마워요. 오늘 일이 많아요?",
            "phonetic": "ne, gomawoyo. oneul iri mannayo?",
            "zh": "嗯，谢谢。今天工作多吗？"
          },
          {
            "role": "user",
            "ko": "좀 있어요. 하지만 괜찮아요.",
            "phonetic": "jom isseoyo. hajiman gwaenchanayo.",
            "zh": "有点多，但没关系。"
          },
          {
            "role": "clerk",
            "ko": "그럼 같이 점심을 먹어요.",
            "phonetic": "geureom gachi jeomsimeul meogeoyo.",
            "zh": "那我们一起吃午饭吧。"
          },
          {
            "role": "user",
            "ko": "좋아요! 그렇게 해요.",
            "phonetic": "joayo! geureoke haeyo.",
            "zh": "好呀！就这么办。"
          }
        ],
        "tips": [
          "早上见面的问候语是「좋은 아침이에요」或更正式的「좋은 아침입니다」。",
          "「힘내요」表示“加油”，常用来鼓励身边的人。",
          "提议一起做某事时用「같이…해요」。"
        ]
      },
      {
        "scene": "和邻居打招呼",
        "situationZh": "刚搬来新家，在楼梯间遇到邻居，互相认识并允许对方遇到困难时求助。",
        "roles": {
          "clerk": "邻居",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요! 새로 이사 오셨어요?",
            "phonetic": "annyeonghaseyo! saero isa osyeosseoyo?",
            "zh": "你好！您是刚搬过来的吗？"
          },
          {
            "role": "user",
            "ko": "네, 어제 이사 왔어요. 잘 부탁드려요.",
            "phonetic": "ne, eoje isa wasseoyo. jal butakdeuryeoyo.",
            "zh": "是的，我昨天搬过来的。请多关照。"
          },
          {
            "role": "clerk",
            "ko": "저는 옆집에 사는 김 씨예요.",
            "phonetic": "jeoneun yeopjie saneun gim ssieyo.",
            "zh": "我是住在隔壁的金先生。"
          },
          {
            "role": "user",
            "ko": "만나서 반가워요. 저는 유진이에요.",
            "phonetic": "mannaseo bangawoyo. jeoneun yujin-i-e-yo.",
            "zh": "很高兴认识你，我是裕珍。"
          },
          {
            "role": "clerk",
            "ko": "혹시 도움이 필요하면 말씀해요.",
            "phonetic": "hoksi doumi piryohamyeon malsseumhaeyo.",
            "zh": "如果有什么需要帮助的就跟我说。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 정말 고마워요.",
            "phonetic": "gamsahamnida. jeongmal gomawoyo.",
            "zh": "谢谢，真的太感谢了。"
          }
        ],
        "tips": [
          "对长辈或初次见面的人使用敬语「…세요」和「말씀하세요」。",
          "「잘 부탁드려요」是“请多关照”的常用表达。",
          "搬家用动词「이사 오다」，表示“搬过来”。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "먹다",
        "phonetic": "meokda",
        "meaning": "吃",
        "example": "밥을 먹어요.",
        "exampleZh": "吃饭。"
      },
      {
        "word": "마시다",
        "phonetic": "masida",
        "meaning": "喝",
        "example": "커피를 마셔요.",
        "exampleZh": "喝咖啡。"
      },
      {
        "word": "가다",
        "phonetic": "gada",
        "meaning": "去",
        "example": "학교에 가요.",
        "exampleZh": "去学校。"
      },
      {
        "word": "오다",
        "phonetic": "oda",
        "meaning": "来",
        "example": "친구가 왔어요.",
        "exampleZh": "朋友来了。"
      },
      {
        "word": "보다",
        "phonetic": "boda",
        "meaning": "看；见面",
        "example": "영화를 봐요.",
        "exampleZh": "看电影。"
      },
      {
        "word": "듣다",
        "phonetic": "deutda",
        "meaning": "听",
        "example": "음악을 들어요.",
        "exampleZh": "听音乐。"
      },
      {
        "word": "하다",
        "phonetic": "hada",
        "meaning": "做",
        "example": "숙제를 해요.",
        "exampleZh": "做作业。"
      },
      {
        "word": "배우다",
        "phonetic": "baeuda",
        "meaning": "学习",
        "example": "한국어를 배워요.",
        "exampleZh": "学习韩语。"
      },
      {
        "word": "만나다",
        "phonetic": "mannada",
        "meaning": "见面；遇见",
        "example": "친구를 만나요.",
        "exampleZh": "和朋友见面。"
      },
      {
        "word": "좋다",
        "phonetic": "jota",
        "meaning": "好；喜欢",
        "example": "여기가 좋아요.",
        "exampleZh": "这里很好。"
      }
    ],
    "article": {
      "title": "한국어 학습",
      "titleZh": "学习韩语",
      "paragraphs": [
        {
          "en": "한국어를 배우는 것은 재미있습니다.",
          "phonetic": "hangugoreul baeuneun geoseun jaemi-itseumnida",
          "zh": "学习韩语很有趣。"
        },
        {
          "en": "매일 조금씩 연습하면 좋아집니다.",
          "phonetic": "maeil jogeumssik yeonseuphamyeon joah-jimnida",
          "zh": "每天练习一点就会变好。"
        },
        {
          "en": "친구와 대화하며 배울 수 있습니다.",
          "phonetic": "chinguwa dae-hwa-hamyeo baeul su itseumnida",
          "zh": "可以和朋友边聊天边学。"
        },
        {
          "en": "꾸준함이 가장 중요합니다.",
          "phonetic": "kkujunhani gajang jungyohamnida",
          "zh": "坚持最重要。"
        }
      ],
      "phrases": [
        {
          "phrase": "조금씩",
          "meaning": "一点点地"
        },
        {
          "phrase": "꾸준함",
          "meaning": "坚持；持之以恒"
        }
      ],
      "grammar": [
        {
          "point": "배우는 것",
          "explain": "冠形词+것，把动词变成名词性“学习的（事）”。"
        }
      ],
      "tips": [
        "배우다 = 学习。",
        "가장 중요합니다 = 最重要。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "‘꾸준함’是什么意思？",
            "options": [
              "聪明",
              "坚持",
              "勤奋",
              "耐心"
            ],
            "answer": 1
          },
          {
            "q": "文中说怎样学韩语？",
            "options": [
              "每天练习一点",
              "只学语法",
              "背单词",
              "不用练习"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "한국어를 배_는 것은 재미있습니다.",
            "answer": "우"
          }
        ],
        "writing": {
          "prompt": "用韩语写一句“我喜欢学习韩语”。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "购物问价",
        "situationZh": "你在店里想买一件 T 恤并问价格。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "무엇을 찾으세요?",
            "phonetic": "mueoseul chajeuse-yo?",
            "zh": "您要找什么？"
          },
          {
            "role": "user",
            "ko": "티셔츠를 보고 싶어요.",
            "phonetic": "tisyeocheuleul bogo sipeo-yo",
            "zh": "我想看看 T 恤。"
          },
          {
            "role": "clerk",
            "ko": "이거 어떻게 하세요?",
            "phonetic": "igeo eotteoke hase-yo?",
            "zh": "这个怎么样？"
          },
          {
            "role": "user",
            "ko": "이거 얼마예요?",
            "phonetic": "igeo eolma-ye-yo?",
            "zh": "这个多少钱？"
          },
          {
            "role": "clerk",
            "ko": "만 오천 원이에요.",
            "phonetic": "man ocheon won-ie-yo",
            "zh": "一万五千韩元。"
          },
          {
            "role": "user",
            "ko": "조금 비싸네요.",
            "phonetic": "jogeum bissaneyo",
            "zh": "有点贵呢。"
          }
        ],
        "tips": [
          "얼마예요 = 多少钱？",
          "만 오천 원 = 一万五千韩元。"
        ]
      },
      {
        "scene": "和朋友见面",
        "situationZh": "你和朋友约好在学校门口见面。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "언제 만날까요?",
            "phonetic": "eonje mannalkkayo?",
            "zh": "我们什么时候见面？"
          },
          {
            "role": "user",
            "ko": "오후 세 시에 학교 앞에서 만나요.",
            "phonetic": "ohu se sie hakgyo apeseo manna-yo",
            "zh": "下午三点在学校前面见吧。"
          },
          {
            "role": "clerk",
            "ko": "좋아요. 같이 한국어를 공부해요.",
            "phonetic": "joayo. gachi hangugeoreul gongbu-hae-yo",
            "zh": "好啊。我们一起学韩语吧。"
          },
          {
            "role": "user",
            "ko": "네, 그리고 밥도 먹어요.",
            "phonetic": "ne, geurigo bapdo meogeo-yo",
            "zh": "好，然后再一起吃饭。"
          },
          {
            "role": "clerk",
            "ko": "그럼 그때 봐요!",
            "phonetic": "geureom geuttae bwa-yo",
            "zh": "那到时见！"
          },
          {
            "role": "user",
            "ko": "네, 그럼 그때 봐요!",
            "phonetic": "ne, geureom geuttae bwa-yo!",
            "zh": "好的，那么到时见！"
          }
        ],
        "tips": [
          "언제 = 什么时候。",
          "만나다 = 见面。",
          "~에서 만나다 = 在……见面。"
        ]
      },
      {
        "scene": "请韩国朋友教韩语",
        "situationZh": "和朋友一起学习韩语，朋友讲某个生词的意思。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘은 어떤 걸 배울까요?",
            "phonetic": "oneureun eotteon geol ba-ulkkayo?",
            "zh": "今天想学点什么呢？"
          },
          {
            "role": "user",
            "ko": "오늘은 한국어 문법을 배우고 싶어요.",
            "phonetic": "oneureun hangug-eo munbeobeul baeugo sipeoyo.",
            "zh": "今天想学韩语语法。"
          },
          {
            "role": "clerk",
            "ko": "좋아요. 그럼 여기부터 시작해요.",
            "phonetic": "joayo. geureom yeogi-buteo sijakhaeyo.",
            "zh": "好啊，那我们从这里开始吧。"
          },
          {
            "role": "user",
            "ko": "그런데 \"안녕\"은 무슨 뜻이에요?",
            "phonetic": "geureonde \"annyeong\"-eun museun tteusi-e-yo?",
            "zh": "不过，“안녕”是什么意思呢？"
          },
          {
            "role": "clerk",
            "ko": "\"안녕\"은 인사말이에요.",
            "phonetic": "\"annyeong\"-eun insa-mari-e-yo.",
            "zh": "“안녕”是问候语。"
          },
          {
            "role": "user",
            "ko": "아하, 알겠어요! 감사해요.",
            "phonetic": "aha, algesseoyo! gamsahaeyo.",
            "zh": "啊哈，明白了！谢谢你。"
          }
        ],
        "tips": [
          "「…을/를 배우고 싶어요」表示“我想学……”。",
          "「무슨」作定语，表示“什么样的、什么”。",
          "「…은 무슨 뜻이에요?」用于询问“……是什么意思”。"
        ]
      },
      {
        "scene": "在书店买韩语教材",
        "situationZh": "在书店让店员推荐适合初学者的韩语教材，并询问价格。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어떤 책을 찾으세요?",
            "phonetic": "eotteon chaegeul chajeuseyo?",
            "zh": "您在找什么书呢？"
          },
          {
            "role": "user",
            "ko": "한국어 교재를 찾고 있어요.",
            "phonetic": "hangug-eo gyojae-reul chatgo isseoyo.",
            "zh": "我在找韩语教材。"
          },
          {
            "role": "clerk",
            "ko": "이 책은 입문자에게 딱 좋아요.",
            "phonetic": "i chaegeun imunjae-ge ttak joayo.",
            "zh": "这本书很适合初学者。"
          },
          {
            "role": "user",
            "ko": "이 책은 얼마예요?",
            "phonetic": "i chaegeun eol-maye-yo?",
            "zh": "这本书多少钱？"
          },
          {
            "role": "clerk",
            "ko": "만 오천 원이에요.",
            "phonetic": "man ocheon won-i-e-yo.",
            "zh": "一万五千韩元。"
          },
          {
            "role": "user",
            "ko": "비싸네요. 좀 싼 책은 없어요?",
            "phonetic": "bissangeyo. jom ssan chaegeun eopseoyo?",
            "zh": "有点贵。有便宜一点的书吗？"
          }
        ],
        "tips": [
          "「얼마예요?」用来询问价格，意为“多少钱？”。",
          "数字中「만」表示一万，「오천」表示五千。",
          "「딱 좋아요」表示“正合适、刚好”。"
        ]
      },
      {
        "scene": "请老师纠正发音",
        "situationZh": "韩语课上老师带学生做发音练习，并表扬学生发音准确。",
        "roles": {
          "clerk": "老师",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘은 발음 연습을 해 볼게요.",
            "phonetic": "oneureun barum yeonseubeul hae bolgeyo.",
            "zh": "今天我们来做发音练习。"
          },
          {
            "role": "user",
            "ko": "이 단어를 어떻게 읽어요?",
            "phonetic": "i daneoreul eoddeoke ilgeoyo?",
            "zh": "这个单词怎么读？"
          },
          {
            "role": "clerk",
            "ko": "천천히 다시 말해 보세요.",
            "phonetic": "cheoncheonhi dasi malhae boseyo.",
            "zh": "请慢慢再说一遍。"
          },
          {
            "role": "user",
            "ko": "\"키가 커요\". 맞아요?",
            "phonetic": "\"kiga keoyo\". majayo?",
            "zh": "“키가 커요”，对吗？"
          },
          {
            "role": "clerk",
            "ko": "아주 잘했어요! 발음이 좋아요.",
            "phonetic": "aju jareosseoyo! barumi joayo.",
            "zh": "说得非常好！发音很好。"
          },
          {
            "role": "user",
            "ko": "정말요? 기분이 너무 좋아요.",
            "phonetic": "jeongmallyo? gibuni neomu joayo.",
            "zh": "真的吗？我心情太好了。"
          }
        ],
        "tips": [
          "「어떻게 읽어요?」表示“怎么读？”，是询问读法常用句。",
          "「천천히」表示“慢慢地”，请求对方放慢语速时用。",
          "「…해 보세요」表示“请尝试着做……”，是委婉的请求。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "날씨",
        "phonetic": "nalsi",
        "meaning": "天气",
        "example": "오늘 날씨가 좋아요.",
        "exampleZh": "今天天气很好。"
      },
      {
        "word": "맑다",
        "phonetic": "makta",
        "meaning": "晴朗",
        "example": "하늘이 맑아요.",
        "exampleZh": "天空晴朗。"
      },
      {
        "word": "비",
        "phonetic": "bi",
        "meaning": "雨",
        "example": "비가 와요.",
        "exampleZh": "下雨了。"
      },
      {
        "word": "눈",
        "phonetic": "nun",
        "meaning": "雪",
        "example": "눈이 와요.",
        "exampleZh": "下雪了。"
      },
      {
        "word": "춥다",
        "phonetic": "chupda",
        "meaning": "冷",
        "example": "겨울은 추워요.",
        "exampleZh": "冬天很冷。"
      },
      {
        "word": "덥다",
        "phonetic": "deopda",
        "meaning": "热",
        "example": "여름은 더워요.",
        "exampleZh": "夏天很热。"
      },
      {
        "word": "따뜻하다",
        "phonetic": "ttadeuthada",
        "meaning": "暖和",
        "example": "봄날은 따뜻해요.",
        "exampleZh": "春日很暖和。"
      },
      {
        "word": "시원하다",
        "phonetic": "siwonhada",
        "meaning": "凉爽",
        "example": "바람이 시원해요.",
        "exampleZh": "风很凉爽。"
      },
      {
        "word": "많다",
        "phonetic": "manta",
        "meaning": "多",
        "example": "사람이 많아요.",
        "exampleZh": "人很多。"
      },
      {
        "word": "적다",
        "phonetic": "jeokda",
        "meaning": "少",
        "example": "비가 적게 와요.",
        "exampleZh": "雨很少下。"
      }
    ],
    "article": {
      "title": "사계절",
      "titleZh": "四季",
      "paragraphs": [
        {
          "en": "한국에는 사계절이 있습니다.",
          "phonetic": "hangugeneun sagyejeori itseumnida",
          "zh": "韩国有四季。"
        },
        {
          "en": "봄에는 꽃이 피고 날씨가 따뜻합니다.",
          "phonetic": "bomeneun kkochi pigo nalsiga ttadeuthamnida",
          "zh": "春天花开，天气暖和。"
        },
        {
          "en": "여름에는 덥고 비가 많이 옵니다.",
          "phonetic": "yeoreumeneun deopgo biga mani omnida",
          "zh": "夏天炎热，雨水很多。"
        },
        {
          "en": "겨울에는 춥고 눈이 올 수도 있습니다.",
          "phonetic": "gyeoreuneun chupgo nuni ol sudo itseumnida",
          "zh": "冬天寒冷，可能会下雪。"
        }
      ],
      "phrases": [
        {
          "phrase": "꽃이 피고",
          "meaning": "花开"
        },
        {
          "phrase": "눈이 올 수도",
          "meaning": "可能会下雪"
        }
      ],
      "grammar": [
        {
          "point": "사계절",
          "explain": "四季。"
        }
      ],
      "tips": [
        "날씨 = 天气。",
        "-아요/-어요 是句尾敬语变体。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "韩国有几个季节？",
            "options": [
              "2",
              "3",
              "4",
              "5"
            ],
            "answer": 2
          },
          {
            "q": "冬季天气特点是？",
            "options": [
              "热",
              "冷",
              "暖和",
              "凉爽"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "봄에는 날씨가 따뜻_니다.",
            "answer": "합"
          }
        ],
        "writing": {
          "prompt": "用韩语写一句形容今天天气的话。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "聊天气",
        "situationZh": "你和朋友在聊今天的天气。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘 날씨 어때요?",
            "phonetic": "oneul nalsi eottae-yo?",
            "zh": "今天天气怎么样？"
          },
          {
            "role": "user",
            "ko": "오늘은 맑고 시원해요.",
            "phonetic": "oneureun makgo siwonhae-yo",
            "zh": "今天晴朗又凉爽。"
          },
          {
            "role": "clerk",
            "ko": "내일은 비가 온대요.",
            "phonetic": "naeirin biga on-da-yo",
            "zh": "听说明天会下雨。"
          },
          {
            "role": "user",
            "ko": "그럼 우산을 챙겨야겠네요.",
            "phonetic": "geureom usaneul chaenggyeoyagenn-e-yo",
            "zh": "那得带伞了。"
          },
          {
            "role": "clerk",
            "ko": "출근할 때 주의하세요.",
            "phonetic": "chulgeunhal ttae ju-ui-hase-yo",
            "zh": "上班路上要小心。"
          },
          {
            "role": "user",
            "ko": "네, 알겠어요. 고마워요.",
            "phonetic": "ne, algesseoyo. gomawoyo.",
            "zh": "好的，我知道了。谢谢。"
          }
        ],
        "tips": [
          "날씨 어때요 = 天气怎么样？",
          "비가 온대요 = 听说要下雨。"
        ]
      },
      {
        "scene": "春秋出游",
        "situationZh": "你和朋友商量春天去爬山。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "봄에 같이 등산 어때요?",
            "phonetic": "bome gachi deungsan eottae-yo?",
            "zh": "春天一起去爬山怎么样？"
          },
          {
            "role": "user",
            "ko": "좋아요. 날씨가 따뜻해서 좋겠어요.",
            "phonetic": "joayo. nalsiga ttadeuthaeseo jotgetseo-yo",
            "zh": "好啊。天气暖和的话不错。"
          },
          {
            "role": "clerk",
            "ko": "주말에 비 안 오는 날 갔으면 좋겠어요.",
            "phonetic": "jumare bi an oneun nal gasseumyeon jotgetseo-yo",
            "zh": "希望是周末没下雨的一天去。"
          },
          {
            "role": "user",
            "ko": "네, 그럼 언제가 좋을까요?",
            "phonetic": "ne, geureom eonjega joeulkka-yo?",
            "zh": "好，那什么时候去好呢？"
          },
          {
            "role": "clerk",
            "ko": "다음 주 토요일 어때요?",
            "phonetic": "daeum ju toyoil eottae-yo?",
            "zh": "下周六怎么样？"
          },
          {
            "role": "user",
            "ko": "좋아요! 그때 만나요.",
            "phonetic": "joayo! geuttae manna-yo",
            "zh": "好啊！到时间见。"
          }
        ],
        "tips": [
          "~어때요 = ……怎么样？",
          "등산 = 爬山。",
          "비 안 오는 날 = 不下雨的日子。"
        ]
      },
      {
        "scene": "冬天下雪",
        "situationZh": "冬天看到窗外下雪，和朋友讨论天气并提议一起堆雪人。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "와, 오늘 눈이 와요!",
            "phonetic": "wa, oneul nuni wayo!",
            "zh": "哇，今天下雪了！"
          },
          {
            "role": "user",
            "ko": "정말 예뻐요. 추워서 두꺼운 옷을 입었어요.",
            "phonetic": "jeongmal yeppeoyo. chuwo-seo dukkeoun oseul ibeosseoyo.",
            "zh": "真漂亮。太冷了，所以穿了厚衣服。"
          },
          {
            "role": "clerk",
            "ko": "그래요. 겨울에는 눈이 자주 와요.",
            "phonetic": "geuraeyo. gyeoul-eneun nuni jaju wayo.",
            "zh": "是啊。冬天经常下雪。"
          },
          {
            "role": "user",
            "ko": "같이 눈사람을 만들어 볼래요?",
            "phonetic": "gachi nunsarameul mandeuleo bol-laeyo?",
            "zh": "我们一起堆个雪人好吗？"
          },
          {
            "role": "clerk",
            "ko": "좋아요! 하지만 손이 너무 차요.",
            "phonetic": "joayo! hajiman soni neomu chayo.",
            "zh": "好呀！但是手太冷了。"
          },
          {
            "role": "user",
            "ko": "장갑을 끼고 하면 돼요.",
            "phonetic": "jang-ga-beul kkigo hamyeon dwaeyo.",
            "zh": "戴上手套做就行。"
          }
        ],
        "tips": [
          "「눈이 와요」表示“下雪了”，雪下声明用「와요」。",
          "形容词「춥다」表示“冷”，使用时变成「추워서」。",
          "「…하면 돼요」表示“做……就行”，给建议时常用。"
        ]
      },
      {
        "scene": "夏天的炎热",
        "situationZh": "闷热的夏天，和朋友聊到想吃冰的东西，并约好周末去海边。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘 정말 덥죠?",
            "phonetic": "oneul jeongmal deopjyo?",
            "zh": "今天真的很热吧？"
          },
          {
            "role": "user",
            "ko": "네, 더워서 아이스크림이 먹고 싶어요.",
            "phonetic": "ne, deowoseo ai-seu-keu-rimi meokko sipeoyo.",
            "zh": "是啊，热得想吃冰淇淋。"
          },
          {
            "role": "clerk",
            "ko": "저는 시원한 수박을 먹을 거예요.",
            "phonetic": "jeoneun siwonhan subageul meogeul geoyeyo.",
            "zh": "我要吃凉爽的西瓜。"
          },
          {
            "role": "user",
            "ko": "여름에는 바다에 가고 싶어요.",
            "phonetic": "yeoreum-eneun badae gago sipeoyo.",
            "zh": "夏天想去海边。"
          },
          {
            "role": "clerk",
            "ko": "주말에 같이 바다에 갈래요?",
            "phonetic": "jumare gachi badae gallaeyo?",
            "zh": "周末要不要一起去海边？"
          },
          {
            "role": "user",
            "ko": "좋아요! 그때는 덜 더울 거예요.",
            "phonetic": "joayo! geuttaeneun deol deoul geoyeyo.",
            "zh": "好呀！到时候应该就没那么热了。"
          }
        ],
        "tips": [
          "「춥다(冷)/덥다(热)」分别用来形容寒冷和炎热。",
          "「…을 먹고 싶어요」表示“我想吃……”。",
          "「…갈래요?」是亲近朋友之间提议一起做事的说法。"
        ]
      },
      {
        "scene": "下雨天借伞",
        "situationZh": "下班时发现下雨了，同事好心借伞，并叮嘱路上小心。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "밖에 비가 와요. 우산 가져왔어요?",
            "phonetic": "bakke biga wayo. usan gajyeowasseoyo?",
            "zh": "外面下雨了。你带伞了吗？"
          },
          {
            "role": "user",
            "ko": "아니요, 우산을 안 가져왔어요.",
            "phonetic": "aniyo, usaneul an gajyeowasseoyo.",
            "zh": "没有，我没带伞。"
          },
          {
            "role": "clerk",
            "ko": "그럼 이 우산을 빌려 드릴까요?",
            "phonetic": "geureom i usaneul billyeo deurilkkayo?",
            "zh": "那我把这把伞借给你好吗？"
          },
          {
            "role": "user",
            "ko": "정말 감사합니다. 내일 돌려 드릴게요.",
            "phonetic": "jeongmal gamsahamnida. naeil dollyeo deurilgeyo.",
            "zh": "太感谢了。我明天还给您。"
          },
          {
            "role": "clerk",
            "ko": "천천히 해도 돼요. 조심해서 가요.",
            "phonetic": "cheoncheonhi haedo dwaeyo. josimhaeseo gayo.",
            "zh": "慢慢来就好。路上小心。"
          },
          {
            "role": "user",
            "ko": "네, 덕분에 잘 갈 수 있어요.",
            "phonetic": "ne, deokbune jal gal su isseoyo.",
            "zh": "好的，多亏您我可以顺利去了。"
          }
        ],
        "tips": [
          "「비가 와요」表示“下雨了”，“밖에 비가 와요”意为“外面在下雨”。",
          "「빌려 드릴까요?」表示“要我借给您吗？”，是礼貌的提议。",
          "「조심해서 가요」是“路上小心”的常用叮嘱。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "밥",
        "phonetic": "bap",
        "meaning": "饭",
        "example": "밥을 먹어요.",
        "exampleZh": "吃饭。"
      },
      {
        "word": "김치",
        "phonetic": "gimchi",
        "meaning": "泡菜",
        "example": "김치가 맛있어요.",
        "exampleZh": "泡菜很好吃。"
      },
      {
        "word": "주세요",
        "phonetic": "juse-yo",
        "meaning": "请给我",
        "example": "커피 주세요.",
        "exampleZh": "请给我咖啡。"
      },
      {
        "word": "맛있다",
        "phonetic": "masitda",
        "meaning": "好吃；美味",
        "example": "이 음식이 맛있어요.",
        "exampleZh": "这道菜很好吃。"
      },
      {
        "word": "막다",
        "phonetic": "makda",
        "meaning": "咸",
        "example": "국이 너무 짜요.",
        "exampleZh": "汤太咸了。"
      },
      {
        "word": "매운",
        "phonetic": "mae-eun",
        "meaning": "辣的",
        "example": "매운 음식을 좋아해요.",
        "exampleZh": "我喜欢吃辣。"
      },
      {
        "word": "메뉴",
        "phonetic": "menyu",
        "meaning": "菜单",
        "example": "메뉴 좀 보여주세요.",
        "exampleZh": "请给我看看菜单。"
      },
      {
        "word": "계산이요",
        "phonetic": "gyesan-iyo",
        "meaning": "买单；结账",
        "example": "계산이요!",
        "exampleZh": "买单！"
      },
      {
        "word": "숟가락",
        "phonetic": "sutgarak",
        "meaning": "勺子",
        "example": "숟가락 주세요.",
        "exampleZh": "请给我勺子。"
      },
      {
        "word": "먹다",
        "phonetic": "meokda",
        "meaning": "吃",
        "example": "과일을 먹어요.",
        "exampleZh": "吃水果。"
      }
    ],
    "article": {
      "title": "한국 음식",
      "titleZh": "韩国饮食",
      "paragraphs": [
        {
          "en": "한국 음식은 맵고 맛있습니다.",
          "phonetic": "han-guk eumsigeun maepgo masitseumnida",
          "zh": "韩国菜辣而美味。"
        },
        {
          "en": "김치와 밥은 기본 음식입니다.",
          "phonetic": "gimchiwa babeun gibo-neum-sikimnida",
          "zh": "泡菜和米饭是基本饮食。"
        },
        {
          "en": "한국 사람들은 매운 음식을 자주 먹습니다.",
          "phonetic": "hanguk saramdeureun mae-uneumsigeul jaju meokseumnida",
          "zh": "韩国人常吃辣的食物。"
        },
        {
          "en": "식사할 때 김치가 꼭 필요합니다.",
          "phonetic": "siksalttae gimchiga kkok piryohamnida",
          "zh": "吃饭时泡菜是必备的。"
        }
      ],
      "phrases": [
        {
          "phrase": "한국 음식",
          "meaning": "韩国饮食"
        },
        {
          "phrase": "매운 음식",
          "meaning": "辣的食物"
        }
      ],
      "grammar": [
        {
          "point": "맵고 맛있습니다",
          "explain": "形容词连接尾-고，表示“又辣又好吃”。"
        }
      ],
      "tips": [
        "한국 음식 = 韩国饮食。",
        "맵다 = 辣；짓다 = 咸。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "文中说韩国菜怎么样？",
            "options": [
              "辣而美味",
              "清淡",
              "很甜",
              "很苦"
            ],
            "answer": 0
          },
          {
            "q": "下面哪个是基本饮食？",
            "options": [
              "泡菜和米饭",
              "比萨和汉堡",
              "面包和咖喱",
              "只有面包"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "한국 음식은 _고 맛있습니다.",
            "answer": "맵"
          }
        ],
        "writing": {
          "prompt": "用韩语写一句你最喜欢吃的韩国菜。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "在烤肉店点餐",
        "situationZh": "你在烤肉店点上烤五花肉和汽水。",
        "roles": {
          "clerk": "服务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "뭐 드시겠어요?",
            "phonetic": "mwo deusi-gett-seo-yo?",
            "zh": "您想吃点什么？"
          },
          {
            "role": "user",
            "ko": "돼지고기 삼겹살 두 인분 주세요.",
            "phonetic": "dwaejigogi samgyeopsal du inbun ju-se-yo",
            "zh": "请给我两份五花肉。"
          },
          {
            "role": "clerk",
            "ko": "음료수는 뭐 드릴까요?",
            "phonetic": "eumnyosuneun mwo deurilkkayo?",
            "zh": "喝什么饮料？"
          },
          {
            "role": "user",
            "ko": "사이다 한 잔 주세요.",
            "phonetic": "saida han jan ju-se-yo",
            "zh": "请给我一杯汽水。"
          },
          {
            "role": "clerk",
            "ko": "다음 주세요.",
            "phonetic": "daeum ju-se-yo",
            "zh": "请稍等。"
          },
          {
            "role": "user",
            "ko": "네, 기다릴게요. 감사합니다.",
            "phonetic": "ne, gidarilgeyo. gamsahamnida.",
            "zh": "好的，我会等的。谢谢。"
          }
        ],
        "tips": [
          "인분 = 一人份。",
          "삼겹살 = 五花肉。",
          "다음 주세요 = 请稍等。"
        ]
      },
      {
        "scene": "在餐厅点面",
        "situationZh": "你在面馆点一碗刀切面并付款。",
        "roles": {
          "clerk": "服务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "무엇으로 드릴까요?",
            "phonetic": "mueoseuro deurilkkayo?",
            "zh": "给您上什么？"
          },
          {
            "role": "user",
            "ko": "칼국수 하나 주세요.",
            "phonetic": "kalguksu hana ju-se-yo",
            "zh": "请给我一碗刀切面。"
          },
          {
            "role": "clerk",
            "ko": "맵게 해 드릴까요?",
            "phonetic": "maepge hae deurilkkayo?",
            "zh": "要做得辣一些吗？"
          },
          {
            "role": "user",
            "ko": "아니요, 순하게 해 주세요.",
            "phonetic": "ani-yo, sunhage hae ju-se-yo",
            "zh": "不用，做得清淡一些。"
          },
          {
            "role": "clerk",
            "ko": "네, 잠시만요.",
            "phonetic": "ne, jamsimanyo",
            "zh": "好的，请稍等。"
          },
          {
            "role": "user",
            "ko": "네, 천천히 해 주세요.",
            "phonetic": "ne, cheoncheonhi hae juseyo.",
            "zh": "好的，请慢慢来。"
          }
        ],
        "tips": [
          "칼국수 = 刀切面。",
          "맵게 하다 = 做辣。",
          "순하게 = 清淡地。"
        ]
      },
      {
        "scene": "在炸鸡店点外卖",
        "situationZh": "在炸鸡店点原味炸鸡和可乐，并告诉店家不要加辣。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "주문하시겠어요?",
            "phonetic": "jumunhasigesseoyo?",
            "zh": "您要点单吗？"
          },
          {
            "role": "user",
            "ko": "후라이드 치킨 한 마리 주세요.",
            "phonetic": "huraideu chikin han mari juseyo.",
            "zh": "请给我一份原味炸鸡。"
          },
          {
            "role": "clerk",
            "ko": "음료도 같이 드릴까요?",
            "phonetic": "eumnyodo gachi deurilkkayo?",
            "zh": "饮料也要一起给您吗？"
          },
          {
            "role": "user",
            "ko": "네, 콜라 한 개 주세요.",
            "phonetic": "ne, kolla han gae juseyo.",
            "zh": "好的，请给我一瓶可乐。"
          },
          {
            "role": "clerk",
            "ko": "매운 맛으로 할까요?",
            "phonetic": "maeun maseuro halkkayo?",
            "zh": "要做成辣味的吗？"
          },
          {
            "role": "user",
            "ko": "아니요, 안 매운 걸로 주세요.",
            "phonetic": "aniyo, an maeun geollo juseyo.",
            "zh": "不，请给我不辣的。"
          },
          {
            "role": "clerk",
            "ko": "네, 조금만 기다려 주세요.",
            "phonetic": "ne, jogeumman gidaryeo juseyo.",
            "zh": "好的，请稍等。"
          }
        ],
        "tips": [
          "量词「한 마리」用于动物和整只炸鸡。",
          "「매운 맛」表示“辣味”，“안 매운 걸로”表示“要不辣的”。",
          "点餐时说「… 주세요」，是最常用的请求用语。"
        ]
      },
      {
        "scene": "在甜品店点刨冰",
        "situationZh": "夏天在甜品店点草莓刨冰，并选择了普通份量和加料。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "무엇을 드릴까요?",
            "phonetic": "mueoseul deurilkkayo?",
            "zh": "您需要点些什么？"
          },
          {
            "role": "user",
            "ko": "딸기 빙수 하나 주세요.",
            "phonetic": "ttalgi bingsu hana juseyo.",
            "zh": "请给我一份草莓刨冰。"
          },
          {
            "role": "clerk",
            "ko": "크기는 어떻게 할까요?",
            "phonetic": "keugineun eoddeoke halkkayo?",
            "zh": "份量要哪种？"
          },
          {
            "role": "user",
            "ko": "보통 크기로 주세요.",
            "phonetic": "botong keukiro juseyo.",
            "zh": "请给我普通份量。"
          },
          {
            "role": "clerk",
            "ko": "딸기 토핑을 더 올려 드릴까요?",
            "phonetic": "ttalgi topingeul deo ollyeo deurilkkayo?",
            "zh": "要再给您加一些草莓配料吗？"
          },
          {
            "role": "user",
            "ko": "네, 좋아요. 기다리는 동안 여기 앉을게요.",
            "phonetic": "ne, joayo. gidarineun dong-an yeogi anjeulge-yo.",
            "zh": "好的。等待的时候我坐在这里是吧。"
          }
        ],
        "tips": [
          "量词「빙수」是“刨冰”，常用「…하나 주세요」点一份。",
          "「크기」表示“大小、份量”。",
          "「토핑」即“topping、配料”，加料时用「…을 더 올려 드릴까요?」。"
        ]
      },
      {
        "scene": "在夜市小吃摊点餐",
        "situationZh": "在夜市的小吃摊点炒年糕和鱼饼串，要求做特辣。",
        "roles": {
          "clerk": "店主",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "뭐 드릴까요?",
            "phonetic": "mwo deurilkkayo?",
            "zh": "来点什么？"
          },
          {
            "role": "user",
            "ko": "떡볶이 한 접시 주세요.",
            "phonetic": "tteokbokki han jeopsi juseyo.",
            "zh": "请给我一盘炒年糕。"
          },
          {
            "role": "clerk",
            "ko": "매운 정도는 어떻게 할까요?",
            "phonetic": "maeun jeongdoneun eoddeoke halkkayo?",
            "zh": "辣度要怎么样？"
          },
          {
            "role": "user",
            "ko": "아주 매운 걸로 주세요.",
            "phonetic": "aju maeun geollo juseyo.",
            "zh": "请给我做特辣。"
          },
          {
            "role": "clerk",
            "ko": "아, 매운 거 잘 드시는 분이네요!",
            "phonetic": "a, maeun geo jal deusineun bun-ineyo!",
            "zh": "啊，看来您很能吃辣呢！"
          },
          {
            "role": "user",
            "ko": "네, 매운 거 좋아해요. 어묵도 하나 주세요.",
            "phonetic": "ne, maeun geo joahaeyo. eomukdo hana juseyo.",
            "zh": "是的，我喜欢吃辣的，再来一份鱼饼串。"
          }
        ],
        "tips": [
          "「떡볶이」是辣炒年糕，“한 접시”表示“一盘”。",
          "「매운 정도」指“辣度”，可以说「아주 매운 걸로」要最辣。",
          "「어묵」是“鱼饼串”，夜市里常和炒年糕一起点。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "하나",
        "phonetic": "hana",
        "meaning": "一",
        "example": "하나 주세요.",
        "exampleZh": "请给我一个。"
      },
      {
        "word": "둘",
        "phonetic": "dul",
        "meaning": "二",
        "example": "둘 있어요.",
        "exampleZh": "有两个。"
      },
      {
        "word": "셋",
        "phonetic": "set",
        "meaning": "三",
        "example": "사람 셋이에요.",
        "exampleZh": "有三人。"
      },
      {
        "word": "넷",
        "phonetic": "net",
        "meaning": "四",
        "example": "사과 넷이에요.",
        "exampleZh": "有四个苹果。"
      },
      {
        "word": "다섯",
        "phonetic": "daseot",
        "meaning": "五",
        "example": "책 다섯 권이에요.",
        "exampleZh": "有五本书。"
      },
      {
        "word": "시간",
        "phonetic": "sigan",
        "meaning": "时间；小时",
        "example": "시간이 없어요.",
        "exampleZh": "没有时间。"
      },
      {
        "word": "지금",
        "phonetic": "jigeum",
        "meaning": "现在",
        "example": "지금 몇 시예요?",
        "exampleZh": "现在几点了？"
      },
      {
        "word": "몇 시",
        "phonetic": "myeoch-si",
        "meaning": "几点",
        "example": "몇 시에 출근해요?",
        "exampleZh": "几点上班？"
      },
      {
        "word": "반",
        "phonetic": "ban",
        "meaning": "半",
        "example": "열 시 반이에요.",
        "exampleZh": "十点半。"
      },
      {
        "word": "약속",
        "phonetic": "yaksok",
        "meaning": "约定",
        "example": "약속이 있어요.",
        "exampleZh": "我有约。"
      }
    ],
    "article": {
      "title": "한국어 숫자",
      "titleZh": "韩语数字",
      "paragraphs": [
        {
          "en": "한국어에는 두 가지 숫자가 있습니다.",
          "phonetic": "hangugeoneun du gaji sutjaga itseumnida",
          "zh": "韩语里有两种数字。"
        },
        {
          "en": "하나는 고유어 숫자이고, 다른 하나는 한자어 숫자입니다.",
          "phonetic": "hananeun goyu-eoSujjagi-ko, dareun hananeun hanja-eo-sutjaimnida",
          "zh": "一种是固有数字，另一种是汉字数字。"
        },
        {
          "en": "시간을 말할 때는 고유어 숫자를 씁니다.",
          "phonetic": "siganeul malhal ttaeneun goyu-eo sutjareul sseumnida",
          "zh": "说时间时用固有数字。"
        },
        {
          "en": "숫자를 잘 외우면 물건을 사기에 편리합니다.",
          "phonetic": "sutjareul jal oeumyeon mulgeoneul sagie pyeollihamnida",
          "zh": "记好数字，买东西很方便。"
        }
      ],
      "phrases": [
        {
          "phrase": "두 가지",
          "meaning": "两种"
        },
        {
          "phrase": "물건을 사다",
          "meaning": "买东西"
        }
      ],
      "grammar": [
        {
          "point": "시간을 말할 때",
          "explain": "“当说时间的时候”，명+을+말하다+时引导。"
        }
      ],
      "tips": [
        "하나,둘,셋… = 固有数字。",
        "몇 시 = 几点。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "韩语里有几种数字？",
            "options": [
              "1",
              "2",
              "3",
              "4"
            ],
            "answer": 1
          },
          {
            "q": "说时间时用哪种数字？",
            "options": [
              "固有数字",
              "汉字数字",
              "英语",
              "罗马数字"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "现在 _ 시예요?（几点）",
            "answer": "몇"
          }
        ],
        "writing": {
          "prompt": "用韩语写出你现在的时间，比如“现在3点”。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "问现在几点",
        "situationZh": "朋友问你电影几点开场，你回答时间。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "지금 몇 시예요?",
            "phonetic": "jigeum myeoch siye-yo?",
            "zh": "现在几点了？"
          },
          {
            "role": "user",
            "ko": "지금 두 시 반이에요.",
            "phonetic": "jigeum du si ban-ie-yo",
            "zh": "现在两点半。"
          },
          {
            "role": "clerk",
            "ko": "영화는 몇 시에 시작해요?",
            "phonetic": "yeonghwaneun myeoch sie sijakhae-yo?",
            "zh": "电影几点开始？"
          },
          {
            "role": "user",
            "ko": "세 시에 시작해요.",
            "phonetic": "se sie sijakhae-yo",
            "zh": "三点开始。"
          },
          {
            "role": "clerk",
            "ko": "그럼 늦지 않겠네요.",
            "phonetic": "geureom neutji angenn-e-yo",
            "zh": "那不会迟到呢。"
          },
          {
            "role": "user",
            "ko": "네, 다행이에요.",
            "phonetic": "ne, dahaeng-ieyo.",
            "zh": "好的，那太好了。"
          }
        ],
        "tips": [
          "몇 시 = 几点。",
          "-시 반 = 几点半。",
          "시작하다 = 开始。"
        ]
      },
      {
        "scene": "约周末见面",
        "situationZh": "你约朋友周末见面并确定时间。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "주말에 시간 있어요?",
            "phonetic": "jumare sigan isseo-yo?",
            "zh": "周末有空吗？"
          },
          {
            "role": "user",
            "ko": "토요일 오후에 시간 있어요.",
            "phonetic": "toyoil ohu-e sigan isseo-yo",
            "zh": "周六下午有空。"
          },
          {
            "role": "clerk",
            "ko": "그럼 토요일 세 시에 보자.",
            "phonetic": "geureom toyoil se sie boja",
            "zh": "那就周六三点见吧。"
          },
          {
            "role": "user",
            "ko": "네, 어디에서 만날까요?",
            "phonetic": "ne, eodieseo mannalkka-yo?",
            "zh": "好，在哪见？"
          },
          {
            "role": "clerk",
            "ko": "지하철 역 앞에서 만나요.",
            "phonetic": "jihacheol yeog apeseo manna-yo",
            "zh": "在地铁站前面见吧。"
          },
          {
            "role": "user",
            "ko": "좋아요! 그때 봐요.",
            "phonetic": "joayo! geuttae bwa-yo",
            "zh": "好啊！到时见。"
          }
        ],
        "tips": [
          "시간 있어요 = 有空。",
          "보자 = 见（半语）。",
          "어디에서 = 在哪。"
        ]
      },
      {
        "scene": "问火车班次时间",
        "situationZh": "在车站售票处询问到釜山的车程、发车时间以及票价。",
        "roles": {
          "clerk": "售票员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어디로 가세요?",
            "phonetic": "eodiro gaseyo?",
            "zh": "您要去哪里？"
          },
          {
            "role": "user",
            "ko": "부산까지 얼마나 걸려요?",
            "phonetic": "busankkaji eolmana geollyeoyo?",
            "zh": "到釜山要多久？"
          },
          {
            "role": "clerk",
            "ko": "기차로 두 시간 반이에요.",
            "phonetic": "gicharo du sigan bani-e-yo.",
            "zh": "坐火车要两个半小时。"
          },
          {
            "role": "user",
            "ko": "다음 기차는 몇 시에 출발해요?",
            "phonetic": "daeum gichaneun myeot sie chulbalhaeyo?",
            "zh": "下一班火车几点出发？"
          },
          {
            "role": "clerk",
            "ko": "세 시 십오 분에 출발해요.",
            "phonetic": "se si sibo bune chulbalhaeyo.",
            "zh": "在三点十五分出发。"
          },
          {
            "role": "user",
            "ko": "표는 얼마예요?",
            "phonetic": "pyoneun eolmayeyo?",
            "zh": "票价是多少？"
          }
        ],
        "tips": [
          "「얼마나 걸려요?」询问“需要多久”。",
          "时间的表达：数字+시（点）+분（分），如「세 시 십오 분」。",
          "「기차로」表示“坐火车”，用「…로」表工具。"
        ]
      },
      {
        "scene": "预约餐厅时间",
        "situationZh": "打电话给餐厅预约四人晚餐，并询问能否把时间改到八点半。",
        "roles": {
          "clerk": "前台",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "몇 시에 예약하시겠어요?",
            "phonetic": "myeot sie yeyakhasigesseoyo?",
            "zh": "您要预约几点？"
          },
          {
            "role": "user",
            "ko": "저녁 여덟 시쯤 예약하고 싶어요.",
            "phonetic": "jeonyeok yeodeol si-jjeum yeyakago sipeoyo.",
            "zh": "想约晚饭八点左右。"
          },
          {
            "role": "clerk",
            "ko": "모두 몇 분이세요?",
            "phonetic": "modu myeot buniseyo?",
            "zh": "总共有几位？"
          },
          {
            "role": "user",
            "ko": "네 명이에요.",
            "phonetic": "ne myeong-i-e-yo.",
            "zh": "四位。"
          },
          {
            "role": "clerk",
            "ko": "여덟 시에 네 명, 예약 완료했습니다.",
            "phonetic": "yeodeol sie ne myeong, yeyak wanryohaesseumnida.",
            "zh": "八点四位，预订已完成。"
          },
          {
            "role": "user",
            "ko": "혹시 여덟 시 반으로 바꿀 수 있을까요?",
            "phonetic": "hoksi yeodeol ssi baneuro bakkul su isseulkkayo?",
            "zh": "能不能改成八点半呢？"
          }
        ],
        "tips": [
          "「몇 시」表示“几点”，「몇 분」表示“几位（人）”。",
          "「여덟 시쯤」意为“八点左右”。",
          "预约结束时用「예약 완료했습니다」表示“预约已完成”。"
        ]
      },
      {
        "scene": "买东西问价",
        "situationZh": "在市场买苹果，问价格后决定买两个。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "무엇을 찾으세요?",
            "phonetic": "mueoseul chajeuseyo?",
            "zh": "您在找什么？"
          },
          {
            "role": "user",
            "ko": "이 사과는 어떻게 팔아요?",
            "phonetic": "i sagwaneun eoddeoke parayo?",
            "zh": "这苹果是怎么卖的？"
          },
          {
            "role": "clerk",
            "ko": "세 개에 오천 원이에요.",
            "phonetic": "se gae-e ocheon won-i-e-yo.",
            "zh": "三个五千韩元。"
          },
          {
            "role": "user",
            "ko": "한 개만 살 수 있나요?",
            "phonetic": "han gaeman sal su innayo?",
            "zh": "能只买一个吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 한 개에 이천 원이에요.",
            "phonetic": "ne, han gae-e icheon won-i-e-yo.",
            "zh": "可以，一个两千韩元。"
          },
          {
            "role": "user",
            "ko": "그럼 두 개 주세요.",
            "phonetic": "geureom du gae juseyo.",
            "zh": "那请给我两个。"
          }
        ],
        "tips": [
          "「세 개에 오천 원」表示“三个五千韩元”，数量用「개」量词。",
          "「…만 살 수 있나요?」表示“能不能只买……”。",
          "问价时常用「…은 얼마예요?」或「어떻게 팔아요?」。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "지하철",
        "phonetic": "jihacheol",
        "meaning": "地铁（名词）",
        "example": "지하철을 타고 학교에 가요.",
        "exampleZh": "我坐地铁去学校。"
      },
      {
        "word": "버스",
        "phonetic": "beoseu",
        "meaning": "公交车（名词）",
        "example": "버스가 언제 와요?",
        "exampleZh": "公交车什么时候来？"
      },
      {
        "word": "택시",
        "phonetic": "taeksi",
        "meaning": "出租车（名词）",
        "example": "택시를 불러 주세요.",
        "exampleZh": "请帮我叫一辆出租车。"
      },
      {
        "word": "역",
        "phonetic": "yeok",
        "meaning": "车站（名词）",
        "example": "이 역에서 내려요.",
        "exampleZh": "在这个站下车。"
      },
      {
        "word": "정류장",
        "phonetic": "jeongnyujang",
        "meaning": "（公交/车站）站台；停靠站（名词）",
        "example": "버스 정류장이 어디예요?",
        "exampleZh": "公交车站在哪里？"
      },
      {
        "word": "타다",
        "phonetic": "tada",
        "meaning": "乘坐（动词）",
        "example": "오늘 지하철을 탔어요.",
        "exampleZh": "今天我坐了地铁。"
      },
      {
        "word": "내리다",
        "phonetic": "naerida",
        "meaning": "下车；下来（动词）",
        "example": "두 정거장 뒤에 내리세요.",
        "exampleZh": "请在两站之后下车。"
      },
      {
        "word": "환승하다",
        "phonetic": "hwanseunghada",
        "meaning": "换乘（动词）",
        "example": "시청역에서 2호선으로 환승해요.",
        "exampleZh": "在市厅站换乘2号线。"
      },
      {
        "word": "표",
        "phonetic": "pyo",
        "meaning": "票（名词）",
        "example": "교통카드로 표를 살 수 있어요.",
        "exampleZh": "可以用交通卡买票。"
      },
      {
        "word": "얼마나 걸리다",
        "phonetic": "eolmana geollida",
        "meaning": "花多少（时间）（动词短语）",
        "example": "지하철로 얼마나 걸려요?",
        "exampleZh": "坐地铁要花多长时间？"
      }
    ],
    "article": {
      "title": "한국 교통 이용하기",
      "titleZh": "使用韩国公共交通",
      "paragraphs": [
        {
          "en": "한국에서는 지하철과 버스가 가장 편리한 교통수단입니다.",
          "phonetic": "hangugeseoneun jihacheolgwa beoseuga gajang pyeollihan gyotongsudanimnida",
          "zh": "在韩国，地铁和公交是最方便的交通工具。"
        },
        {
          "en": "먼저 지하철을 타려면 교통카드를 준비해야 합니다.",
          "phonetic": "meonjeo jihacheoreul taryeomyeon gyotongkadeureul junbihaeya hamnida",
          "zh": "坐地铁之前，要先准备好交通卡。"
        },
        {
          "en": "역 안에 있는 자판기에서 표를 살 수 있습니다.",
          "phonetic": "yeok ane itneun japangieseo pyoreul sal su itseumnida",
          "zh": "可以在车站里的自动售票机上买票。"
        },
        {
          "en": "다음 역에서 내릴 때는 '내릴 준비'라고 말하며 출입문 근처에 서 있어야 합니다.",
          "phonetic": "daeum yeogeseo naeril ttaeneun naeril junbirago malhamyeo churimmun geuncheoe seo isseoya hamnida",
          "zh": "要在下一站下车时，应站到车门附近，并说“我要下车”。"
        }
      ],
      "phrases": [
        {
          "phrase": "지하철을 타다",
          "meaning": "坐地铁"
        },
        {
          "phrase": "버스 정류장",
          "meaning": "公交车站"
        },
        {
          "phrase": "내릴 준비",
          "meaning": "准备下车"
        },
        {
          "phrase": "환승을 하다",
          "meaning": "换乘"
        }
      ],
      "grammar": [
        {
          "point": "-(으)려면",
          "explain": "表示“要想……的话”，用于表达做某事的前提条件，如 타려면（想要乘坐的话）。"
        },
        {
          "point": "-에서 -로 환승하다",
          "explain": "表示“在……站换乘到……线路”，예: 시청역에서 2호선으로 환승해요。"
        },
        {
          "point": "-(으)ㄹ 수 있다",
          "explain": "表示“能够、可以”，예: 표를 살 수 있어요.（可以买票。）"
        }
      ],
      "tips": [
        "坐地铁/公交时，韩国常用 “교통카드(交通卡)” 刷卡更方便。",
        "下车前用 “내릴 준비” 或按车门上的按钮提示司机。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "‘지하철을 타다’是什么意思？",
            "options": [
              "坐地铁",
              "坐公交",
              "坐出租车",
              "坐火车"
            ],
            "answer": 0
          },
          {
            "q": "换乘韩语怎么说？",
            "options": [
              "내리다",
              "환승하다",
              "타다",
              "걸리다"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "从市厅站换乘到2号线：시청역에서 2_선으로 환승해요.",
            "answer": "호"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你今天是怎么坐地铁或公交去某个地方的，包括在哪里上车、在哪一站下车、花了多长时间。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "지하철 안내",
        "situationZh": "你在首尔地铁站内向车站工作人员咨询坐车路线。",
        "roles": {
          "clerk": "车站工作人员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요, 어디로 가세요?",
            "phonetic": "annyeonghaseyo, eodiro gaseyo?",
            "zh": "您好，您要去哪里？"
          },
          {
            "role": "user",
            "ko": "서울역에 가고 싶은데, 어떻게 가요?",
            "phonetic": "seouryeoge gago sipeunde, eotteoke gayo?",
            "zh": "我想去首尔站，该怎么走？"
          },
          {
            "role": "clerk",
            "ko": "4호선을 타고 두 정거장 가면 돼요.",
            "phonetic": "sahoseoneul tago du jeonggeojang gamyeon dwaeyo.",
            "zh": "坐4号线，坐两站就到了。"
          },
          {
            "role": "user",
            "ko": "어디에서 환승해야 해요?",
            "phonetic": "eodieseo hwanseunghaeya haeyo?",
            "zh": "我需要在哪儿换乘？"
          },
          {
            "role": "clerk",
            "ko": "환승은 필요 없어요. 그대로 타면 돼요.",
            "phonetic": "hwanseung-eun piryo eopseoyo. geudaero tamyeon dwaeyo.",
            "zh": "不需要换乘，直接坐就行。"
          },
          {
            "role": "user",
            "ko": "네, 알겠습니다. 감사합니다!",
            "phonetic": "ne, algesseumnida. gamsahamnida!",
            "zh": "好的，我明白了。谢谢！"
          }
        ],
        "tips": [
          "4호선 = 4号线，호(线)表示地铁线路号。",
          "“얼마나 걸려요?” 可用于询问所需时间。"
        ]
      },
      {
        "scene": "버스 안에서",
        "situationZh": "你在公交车上，下车前向附近的乘客确认站名。",
        "roles": {
          "clerk": "乘客",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "다음 정류장은 시청입니다.",
            "phonetic": "daeum jeongnyujang-eun sicheongimnida.",
            "zh": "下一站是市厅。"
          },
          {
            "role": "user",
            "ko": "여기서 내리면 되는 거예요?",
            "phonetic": "yeogiseo naerimyeon doeneun geoyeyo?",
            "zh": "我在这里下车就可以了吗？"
          },
          {
            "role": "clerk",
            "ko": "아니요, 두 정거장 더 가야 해요.",
            "phonetic": "aniyo, du jeonggeojang deo gaya haeyo.",
            "zh": "不，还要再坐两站。"
          },
          {
            "role": "user",
            "ko": "그럼 언제 내려야 해요?",
            "phonetic": "geureom eonje naeryeoya haeyo?",
            "zh": "那我应该什么时候下车？"
          },
          {
            "role": "clerk",
            "ko": "시청역 다음 정류장에서 내리세요.",
            "phonetic": "sicheongyeok daeum jeongnyujang-eseo naeriseyo.",
            "zh": "在市厅站的下一站下车。"
          },
          {
            "role": "user",
            "ko": "네, 고맙습니다.",
            "phonetic": "ne, gomapseumnida.",
            "zh": "好的，谢谢。"
          }
        ],
        "tips": [
          "“다음 정류장(下一站)” 在公交上常听到。",
          "“몇 정거장(几站)” 用于询问坐几站路。"
        ]
      },
      {
        "scene": "地铁票购买",
        "situationZh": "在地铁站的售票机前，我向站务员询问买票方法并购票付款。",
        "roles": {
          "clerk": "站务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "실례지만, 표는 여기서 끊어요?",
            "phonetic": "shil-lye-ji-man, pyo-neun yeo-gi-seo kkeun-eo-yo?",
            "zh": "请问，票是在这里买吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 저쪽에 있는 자동 발매기에서 끊으시면 돼요.",
            "phonetic": "ne, jeo-jjok-e it-neun ja-dong bal-mae-gi-e-seo kkeun-eu-si-myeon dwae-yo.",
            "zh": "是的，可以在那边的自动售票机上购买。"
          },
          {
            "role": "user",
            "ko": "명동까지는 얼마예요?",
            "phonetic": "myeong-dong-kka-ji-neun eol-ma-ye-yo?",
            "zh": "到明洞要多少钱？"
          },
          {
            "role": "clerk",
            "ko": "1회용 카드로 하면 1,450원입니다.",
            "phonetic": "il-hoe-yong ka-deu-ro ha-myeon cheon-sa-baek-o-sip-won-im-ni-da.",
            "zh": "如果用一次用交通卡的话是 1,450 韩元。"
          },
          {
            "role": "user",
            "ko": "좀 비싸네요. 교통카드는 어디서 사요?",
            "phonetic": "jom bi-ssa-ne-yo. gyo-tong-ka-deu-neun eo-di-seo sa-yo?",
            "zh": "有点贵呢。交通卡在哪里买？"
          },
          {
            "role": "clerk",
            "ko": "편의점이나 지하철 역무실에서 사실 수 있어요.",
            "phonetic": "pyeon-ui-jeom-i-na ji-ha-cheol yeong-mu-sil-e-seo sa-sil su it-sseo-yo.",
            "zh": "在便利店或地铁站的办公室都可以购买。"
          }
        ],
        "tips": [
          "1회용 카드 是一次用交通卡，比普通交通卡稍贵。",
          "역무실 指地铁站内的工作人员办公室。",
          "교통카드 是韩国常用的交通卡（如 T-money）。"
        ]
      },
      {
        "scene": "乘坐出租车",
        "situationZh": "在路边叫了出租车，告知司机目的地并询问大概需要多久。",
        "roles": {
          "clerk": "出租车司机",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "기사님, 서울역까지 가 주세요.",
            "phonetic": "gi-sa-nim, seo-ul-yeon-kka-ji ga ju-se-yo.",
            "zh": "师傅，请到首尔站。"
          },
          {
            "role": "clerk",
            "ko": "네, 조금 일찍 도착하면 좋겠네요.",
            "phonetic": "ne, jo-geum il-jjik do-cha-ka-myeon jo-kket-ne-yo.",
            "zh": "好的，希望我们能早点到。"
          },
          {
            "role": "user",
            "ko": "이 시간엔 차가 막히나요?",
            "phonetic": "i si-ga-nen cha-ga mak-ki-na-yo?",
            "zh": "这个时间会堵车吗？"
          },
          {
            "role": "clerk",
            "ko": "요즘엔 좀 막혀요. 아마 한 40분쯤 걸릴 거예요.",
            "phonetic": "yo-jeu-men jom ma-kyeo-yo. a-ma han sib-sa-bun-jjeum geol-lil geo-ye-yo.",
            "zh": "最近有点堵，大概要花 40 分钟左右。"
          },
          {
            "role": "user",
            "ko": "그럼 빨리 갈 수 있는 길로 가 주세요.",
            "phonetic": "geu-reom ppal-li gal su it-neun gil-lo ga ju-se-yo.",
            "zh": "那就走能快点到的路吧。"
          },
          {
            "role": "clerk",
            "ko": "알겠습니다. 카드로 계산하시겠어요?",
            "phonetic": "al-get-sseum-ni-da. ka-deu-ro gye-san-ha-si-get-sseo-yo?",
            "zh": "好的。请问用卡结算吗？"
          }
        ],
        "tips": [
          "对出租车司机用 기사님 称呼表示尊敬。",
          "막히다 表示交通拥堵、堵车。",
          "카드로 계산하다 意为用（交通）卡/信用卡结算。"
        ]
      },
      {
        "scene": "在机场巴士上",
        "situationZh": "坐上机场大巴，向司机确认下车时间和终点站信息。",
        "roles": {
          "clerk": "巴士司机",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "기사님, 인천공항에 얼마나 걸려요?",
            "phonetic": "gi-sa-nim, in-cheon-gong-hang-e eol-ma-na geol-lyeo-yo?",
            "zh": "师傅，到仁川机场要多长时间？"
          },
          {
            "role": "clerk",
            "ko": "보통 한 시간쯤 걸립니다.",
            "phonetic": "bo-tong han si-gan-jjeum geol-lim-ni-da.",
            "zh": "一般需要一个小时左右。"
          },
          {
            "role": "user",
            "ko": "어느 정류장에서 내려야 해요?",
            "phonetic": "eo-neu jeong-nyu-jang-e-seo nae-ryeo-ya hae-yo?",
            "zh": "我应该在哪一站下车？"
          },
          {
            "role": "clerk",
            "ko": "끝까지 가시면 됩니다. 제2여객터미널에서 내리세요.",
            "phonetic": "kkeut-kka-ji ga-si-myeon dwem-ni-da. je-i-yeo-gaek-teo-mi-neol-e-seo nae-ri-se-yo.",
            "zh": "坐到终点站就可以了，请在第二航站楼下车。"
          },
          {
            "role": "user",
            "ko": "짐은 어디에 둘까요?",
            "phonetic": "jim-eun eo-di-e dul-kka-yo?",
            "zh": "行李该放哪里呢？"
          },
          {
            "role": "clerk",
            "ko": "버스 밑에 있는 짐칸에 넣어 주세요.",
            "phonetic": "beo-seu mi-te it-neun jim-kan-e neo-eo ju-se-yo.",
            "zh": "请放到巴士底部的行李舱里。"
          }
        ],
        "tips": [
          "인천공항 是仁川国际机场。",
          "여객터미널 指航站楼（旅客航站）。",
          "짐칸 指车上放行李的行李舱。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "길",
        "phonetic": "gil",
        "meaning": "路；道路（名词）",
        "example": "이 길로 쭉 가세요.",
        "exampleZh": "沿着这条路一直走。"
      },
      {
        "word": "방향",
        "phonetic": "banghyang",
        "meaning": "方向（名词）",
        "example": "이 방향이 맞아요?",
        "exampleZh": "这个方向对吗？"
      },
      {
        "word": "왼쪽",
        "phonetic": "oenjjok",
        "meaning": "左边（名词）",
        "example": "여기서 왼쪽으로 가세요.",
        "exampleZh": "请从这里向左走。"
      },
      {
        "word": "오른쪽",
        "phonetic": "oreunjjok",
        "meaning": "右边（名词）",
        "example": "오른쪽에 은행이 있어요.",
        "exampleZh": "银行在右边。"
      },
      {
        "word": "앞",
        "phonetic": "ap",
        "meaning": "前面（名词）",
        "example": "건물 앞에서 만나요.",
        "exampleZh": "我们在楼前见面。"
      },
      {
        "word": "뒤",
        "phonetic": "dwi",
        "meaning": "后面（名词）",
        "example": "화장실은 건물 뒤에 있어요.",
        "exampleZh": "洗手间在大楼后面。"
      },
      {
        "word": "건너편",
        "phonetic": "geonneopyeon",
        "meaning": "对面（名词）",
        "example": "약국은 건너편에 있어요.",
        "exampleZh": "药房在对面。"
      },
      {
        "word": "근처",
        "phonetic": "geuncheo",
        "meaning": "附近（名词）",
        "example": "주변에 편의점이 있어요?",
        "exampleZh": "附近有便利店吗？"
      },
      {
        "word": "찾다",
        "phonetic": "chatda",
        "meaning": "寻找（动词）",
        "example": "길을 찾고 있어요.",
        "exampleZh": "我正在找路。"
      },
      {
        "word": "모르다",
        "phonetic": "moreuda",
        "meaning": "不知道（动词）",
        "example": "저는 이 길을 잘 몰라요.",
        "exampleZh": "我对这条路不太熟悉。"
      }
    ],
    "article": {
      "title": "길을 물어볼 때",
      "titleZh": "问路的时候",
      "paragraphs": [
        {
          "en": "모르는 길에서는 지나가는 사람에게 물어보는 게 좋습니다.",
          "phonetic": "moreuneun gireseoneun jinaganeun saramege mureoboneun ge joseumnida",
          "zh": "不认识路时，最好向路过的人问一问。"
        },
        {
          "en": "먼저 '실례합니다'라고 인사하고 길을 묻습니다.",
          "phonetic": "meonjeo silyehamnidarago insahago gireul mutseumnida",
          "zh": "先打声招呼“打扰一下”，然后问路。"
        },
        {
          "en": "대부분의 사람들은 친절하게 길을 가르쳐 줍니다.",
          "phonetic": "daebubunui saramdeureun chinjeolhage gireul gareuchyeo jumnida",
          "zh": "大部分人会亲切地为你指路。"
        },
        {
          "en": "필요하면 지도 앱으로 다시 확인할 수 있습니다.",
          "phonetic": "piryohamyeon jido aebeuro dasi hwaginh-al su itseumnida",
          "zh": "如果需要，还可以用地图应用再确认一遍。"
        }
      ],
      "phrases": [
        {
          "phrase": "실례합니다",
          "meaning": "打扰一下；失礼了"
        },
        {
          "phrase": "길을 묻다",
          "meaning": "问路"
        },
        {
          "phrase": "길을 가르쳐 주다",
          "meaning": "给……指路"
        },
        {
          "phrase": "쭉 가다",
          "meaning": "一直走"
        },
        {
          "phrase": "~쪽으로 돌다",
          "meaning": "朝……方向转"
        }
      ],
      "grammar": [
        {
          "point": "-(으)로",
          "explain": "表示“往、朝某个方向”，예: 왼쪽으로 가세요.（往左走。）"
        },
        {
          "point": "~쪽",
          "explain": "表示“方向、侧”，如 왼쪽(左边)、오른쪽(右边)。"
        },
        {
          "point": "잘 모르다",
          "explain": "表示“不熟悉、不太清楚”，如 저는 잘 몰라요.（我不太清楚。）"
        },
        {
          "point": "-ㄹ 수 있다",
          "explain": "表示“可以、能够”，예: 확인할 수 있어요.（可以确认。）"
        }
      ],
      "tips": [
        "问路先礼貌说 “실례합니다(打扰一下)”。",
        "用钢笔指着地图说 “여기(这里)” 会更有效。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“왼쪽”是什么意思？",
            "options": [
              "右边",
              "前面",
              "左边",
              "对面"
            ],
            "answer": 2
          },
          {
            "q": "问路时先说什么？",
            "options": [
              "실례합니다",
              "잘 가요",
              "안 먹어요",
              "천천히요"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "请从这里往左走：여기서 _으로 가세요.",
            "answer": "왼쪽"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段文字，说明从你学校到附近的便利店怎么走路，要用到“왼쪽/오른쪽/쭉 가다”等指路表达。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "길 묻기",
        "situationZh": "你在街上迷路了，向路人询问附近地铁站的位置。",
        "roles": {
          "clerk": "路人",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "무엇을 도와드릴까요?",
            "phonetic": "mueoseul dowadeurilkkayo?",
            "zh": "需要帮您什么忙吗？"
          },
          {
            "role": "user",
            "ko": "실례합니다, 지하철역이 어디예요?",
            "phonetic": "silyehamnida, jihacheollyeogi eodiyeyo?",
            "zh": "打扰一下，地铁站在哪里？"
          },
          {
            "role": "clerk",
            "ko": "저쪽으로 쭉 가세요.",
            "phonetic": "jeojjogeuro jjuk gaseyo.",
            "zh": "往那边一直走。"
          },
          {
            "role": "user",
            "ko": "왼쪽인가요, 오른쪽인가요?",
            "phonetic": "oenjjogingayo, oreunjjogingayo?",
            "zh": "是左边还是右边？"
          },
          {
            "role": "clerk",
            "ko": "계속 가다가 건물 뒤에서 왼쪽으로 도세요.",
            "phonetic": "gyesok gadaga geonmul dwieseo oenjjogeuro doseyo.",
            "zh": "一直走，到楼后面往左转。"
          },
          {
            "role": "user",
            "ko": "네, 알겠어요. 감사합니다!",
            "phonetic": "ne, algesseoyo. gamsahamnida!",
            "zh": "好的，我知道了。谢谢！"
          }
        ],
        "tips": [
          "“실례합니다” 是问路时最常用的礼貌开场。",
          "“쭉 가세요(一直走)” 常配合方向使用。"
        ]
      },
      {
        "scene": "편의점 찾기",
        "situationZh": "你在寻找附近的便利店，向店员确认方向。",
        "roles": {
          "clerk": "路人/店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "네, 뭐 찾고 계세요?",
            "phonetic": "ne, mwo chatgo gyeseyo?",
            "zh": "您好，您在找什么吗？"
          },
          {
            "role": "user",
            "ko": "근처에 편의점이 있어요?",
            "phonetic": "geuncheoe pyeonuijeomi isseoyo?",
            "zh": "附近有便利店吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 바로 오른쪽에 있어요.",
            "phonetic": "ne, baro oreunjjoge isseoyo.",
            "zh": "有，就在右边。"
          },
          {
            "role": "user",
            "ko": "가까워요?",
            "phonetic": "gakkawoyo?",
            "zh": "近吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 여기서 2분이면 돼요.",
            "phonetic": "ne, yeogiseo ibuni-myeon dwaeyo.",
            "zh": "是的，从这里走2分钟就到了。"
          },
          {
            "role": "user",
            "ko": "네, 정말 고맙습니다!",
            "phonetic": "ne, jeongmal gomapseumnida!",
            "zh": "好的，非常感谢！"
          }
        ],
        "tips": [
          "“바로(就在、 바로)” 用来强调距离很近。",
          "“~분이면 돼요” 表示“……分钟就能到”。"
        ]
      },
      {
        "scene": "在银行问路",
        "situationZh": "在街上向路人打听银行的最近位置，并确认营业时间。",
        "roles": {
          "clerk": "路人",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "실례합니다, 은행이 어디 있어요?",
            "phonetic": "shil-lye-ham-ni-da, eun-haeng-i eo-di it-sseo-yo?",
            "zh": "打扰一下，银行在哪里？"
          },
          {
            "role": "clerk",
            "ko": "저쪽 사거리를 건너서 오른쪽으로 가세요.",
            "phonetic": "jeo-jjok sa-geo-ri-reul geon-neo-seo o-reun-jjo-geu-ro ga-se-yo.",
            "zh": "过那边的十字路口后往右走。"
          },
          {
            "role": "user",
            "ko": "걸어서 얼마나 걸려요?",
            "phonetic": "geol-eo-seo eol-ma-na geol-lyeo-yo?",
            "zh": "走路要多久？"
          },
          {
            "role": "clerk",
            "ko": "5분이면 충분해요. 옆에 편의점이 있어서 찾기 쉬워요.",
            "phonetic": "o-bun-i-myeon chung-bun-hae-yo. yeo-pe pyeon-ui-jeo-mi it-sseo-seo chat-gi swi-wo-yo.",
            "zh": "五分钟就够了，旁边有便利店，很好找。"
          },
          {
            "role": "user",
            "ko": "은행은 몇 시까지 해요?",
            "phonetic": "eun-haeng-eun myeot-si-kka-ji hae-yo?",
            "zh": "银行营业到几点？"
          },
          {
            "role": "clerk",
            "ko": "보통 4시에 문을 닫아요.",
            "phonetic": "bo-tong ne-si-e mu-neul da-da-yo.",
            "zh": "通常四点关门。"
          }
        ],
        "tips": [
          "사거리 指十字路口。",
          "~건너서 意为穿过、越过。",
          "문을 닫다 意为关门、停业。"
        ]
      },
      {
        "scene": "询问地铁站",
        "situationZh": "在市中心向一名保安询问最近的地铁站和人流情况。",
        "roles": {
          "clerk": "保安",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "아저씨, 지하철역이 가까워요?",
            "phonetic": "a-jeo-ssi, ji-ha-cheo-ryeok-i ga-kka-wo-yo?",
            "zh": "大叔，地铁站近吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 바로 앞에 있어요. 골목을 따라 직진하세요.",
            "phonetic": "ne, ba-ro a-pe it-sseo-yo. gol-mo-geul tta-ra jik-jin-ha-se-yo.",
            "zh": "是的，就在前面，沿着巷子一直走。"
          },
          {
            "role": "user",
            "ko": "그 지하철역은 어느 번이에요?",
            "phonetic": "geu ji-ha-cheo-ryeok-eun eo-neu beon-i-e-yo?",
            "zh": "那个地铁站是几号线？"
          },
          {
            "role": "clerk",
            "ko": "2호선이에요. 종로 쪽으로 가세요.",
            "phonetic": "i-ho-seon-i-e-yo. jong-ro-jjo-geu-ro ga-se-yo.",
            "zh": "是二号线，往钟路方向走。"
          },
          {
            "role": "user",
            "ko": "이 시간엔 사람이 많아요?",
            "phonetic": "i si-ga-nen sa-ra-mi ma-na-yo?",
            "zh": "这个时间人多吗？"
          },
          {
            "role": "clerk",
            "ko": "조금 많지만 괜찮아요. 조심히 다녀오세요.",
            "phonetic": "jo-geum man-chi-man gwaen-chan-a-yo. jo-sim-hi da-nyeo-o-se-yo.",
            "zh": "虽然有点多但没关系，路上小心。"
          }
        ],
        "tips": [
          "직진하다 意为直走。",
          "호선 指地铁线路（几号线）。",
          "조심히 다녀오세요 是送别时常说的“路上小心”。"
        ]
      },
      {
        "scene": "问停车场",
        "situationZh": "开车来到商场附近，向管理员询问停车场位置和费用。",
        "roles": {
          "clerk": "管理员",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "죄송한데, 이 근처에 주차장이 있나요?",
            "phonetic": "joe-song-han-de, i geun-cheo-e ju-cha-jang-i in-na-yo?",
            "zh": "不好意思，这附近有停车场吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 맞은편 건물 지하에 있어요.",
            "phonetic": "ne, ma-jeun-pyeon geon-mul ji-ha-e it-sseo-yo.",
            "zh": "有，在对面的建筑物地下。"
          },
          {
            "role": "user",
            "ko": "주차 요금이 어떻게 되요?",
            "phonetic": "ju-cha yo-geum-i eo-tteo-ke dwae-yo?",
            "zh": "停车费怎么算？"
          },
          {
            "role": "clerk",
            "ko": "처음 30분은 무료이고, 이후엔 30분마다 1,000원이에요.",
            "phonetic": "cheo-eum sam-sib-bu-neun mu-ryo-i-go, i-hu-en sam-sip-bun-ma-da cheon-won-i-e-yo.",
            "zh": "头 30 分钟免费，之后每 30 分钟 1,000 韩元。"
          },
          {
            "role": "user",
            "ko": "포함 고객이라면 할인이 돼요?",
            "phonetic": "po-ham go-kke-k-i-ra-myeon ha-ri-ni dwae-yo?",
            "zh": "如果是商场顾客有优惠吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 구매 영수증을 보여주시면 2시간 무료예요.",
            "phonetic": "ne, gu-mae yeong-su-jeung-eul bo-yeo-ju-si-myeon du-si-gan mu-ryo-ye-yo.",
            "zh": "是的，出示购物小票可以免费停 2 小时。"
          }
        ],
        "tips": [
          "주차장 指停车场。",
          "무료 意为免费。",
          "영수증 指收据、小票。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "전화하다",
        "phonetic": "jeonhwahada",
        "meaning": "打电话（动词）",
        "example": "내일 전화할게요.",
        "exampleZh": "明天我给你打电话。"
      },
      {
        "word": "보내다",
        "phonetic": "bonaeda",
        "meaning": "发送；寄（动词）",
        "example": "문자를 보내 주세요.",
        "exampleZh": "请给我发条短信。"
      },
      {
        "word": "받다",
        "phonetic": "batda",
        "meaning": "接收；接（电话）（动词）",
        "example": "전화를 받지 못했어요.",
        "exampleZh": "没接到电话。"
      },
      {
        "word": "걸다",
        "phonetic": "geolda",
        "meaning": "打电话（拨号）（动词）",
        "example": "지금 전화를 걸고 있어요.",
        "exampleZh": "我现在正在打电话。"
      },
      {
        "word": "연락하다",
        "phonetic": "yeollakhada",
        "meaning": "联系（动词）",
        "example": "나중에 다시 연락할게요.",
        "exampleZh": "稍后我再联系你。"
      },
      {
        "word": "기다리다",
        "phonetic": "gidarida",
        "meaning": "等待（动词）",
        "example": "잠시만 기다려 주세요.",
        "exampleZh": "请稍等一下。"
      },
      {
        "word": "들리다",
        "phonetic": "deullida",
        "meaning": "听见；听清（动词）",
        "example": "잘 안 들려요.",
        "exampleZh": "我听不太清楚。"
      },
      {
        "word": "바쁘다",
        "phonetic": "bappeuda",
        "meaning": "忙（形容词）",
        "example": "지금 좀 바빠요.",
        "exampleZh": "我现在有点忙。"
      },
      {
        "word": "메시지",
        "phonetic": "mesiji",
        "meaning": "留言；消息（名词）",
        "example": "메시지를 남겨 주세요.",
        "exampleZh": "请留言。"
      },
      {
        "word": "잠시만",
        "phonetic": "jamsiman",
        "meaning": "稍等一会儿（副词）",
        "example": "잠시만요, 금방 연락드릴게요.",
        "exampleZh": "请稍等，我马上联系您。"
      }
    ],
    "article": {
      "title": "전화 통화",
      "titleZh": "打电话通话",
      "paragraphs": [
        {
          "en": "한국에서 전화를 받으면 먼저 '여보세요'라고 말합니다.",
          "phonetic": "hangugeseo jeonhwareul badeumyeon meonjeo yeoboseyorago malhamnida",
          "zh": "在韩国，接电话时先说要先说“여보세요(喂)”。"
        },
        {
          "en": "전화를 걸 때는 '안녕하세요'라고 인사하고 용건을 말합니다.",
          "phonetic": "jeonhwareul geol ttaeneun annyeonghaseyorago insahago yonggeoneul malhamnida",
          "zh": "打电话时要先问候“안녕하세요”，然后说明来意。"
        },
        {
          "en": "상대방이 없으면 메시지를 남길 수 있습니다.",
          "phonetic": "sangdaebangi eopseumyeon mesijireul namgil su itseumnida",
          "zh": "如果对方不在，可以留言。"
        },
        {
          "en": "잘 안 들리면 예의 바르게 다시 말해 달라고 부탁합니다.",
          "phonetic": "jar an deullimyeon yeui bareuge dasi malhae dallago butakhamnida",
          "zh": "听不清时，会有礼貌地请对方再说一遍。"
        }
      ],
      "phrases": [
        {
          "phrase": "여보세요",
          "meaning": "喂（接电话用语）"
        },
        {
          "phrase": "잠시만요",
          "meaning": "请稍等"
        },
        {
          "phrase": "나중에 다시 연락할게요",
          "meaning": "稍后再联系你"
        },
        {
          "phrase": "잘 안 들려요",
          "meaning": "听不太清"
        },
        {
          "phrase": "메시지를 남기다",
          "meaning": "留言"
        }
      ],
      "grammar": [
        {
          "point": "여보세요",
          "explain": "韩语接电话时的专用“喂”，与普通问候不同。"
        },
        {
          "point": "-(으)ㄹ게요",
          "explain": "表示“我会……（将来承诺）”，예: 연락할게요.（我会联系。）"
        },
        {
          "point": "달라고 하다",
          "explain": "表示“请求、让某人做某事”，예: 다시 말해 달라고 부탁해요.（请对方再说一遍。）"
        },
        {
          "point": "잘 안 + 动词",
          "explain": "表示“不太……”，예: 잘 안 들려요.（听不太清。）"
        }
      ],
      "tips": [
        "韩国接电话固定说 “여보세요(喂)”。",
        "听不清就说 “잠시만요, 잘 안 들려요.” 请对方重复。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "韩语接电话时一般先说什么？",
            "options": [
              "안녕",
              "여보세요",
              "반갑습니다",
              "고마워요"
            ],
            "answer": 1
          },
          {
            "q": "“잠시만 기다려 주세요”是什么意思？",
            "options": [
              "稍等一下",
              "不要等",
              "马上出发",
              "等一下吃饭"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "请稍等一下：_ 기다려 주세요.",
            "answer": "잠시만"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段给朋友的电话内容，说明你明天几点打电话、为什么打电话，并用上“전화할게요、잠시만、여보세요”等表达。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "전화 예약",
        "situationZh": "你打电话给餐厅，预订明晚6点两个人的座位。",
        "roles": {
          "clerk": "餐厅店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "여보세요, ○○식당입니다.",
            "phonetic": "yeoboseyo, ○○sikdangimnida.",
            "zh": "喂，您好，这里是○○餐厅。"
          },
          {
            "role": "user",
            "ko": "내일 저녁 6시에 자리 예약하고 싶어요.",
            "phonetic": "naeil jeonyeok yeoseotsie jari yeyakhago sipeoyo.",
            "zh": "我想预订明晚6点的座位。"
          },
          {
            "role": "clerk",
            "ko": "몇 분이세요?",
            "phonetic": "myeot buniseyo?",
            "zh": "请问几位？"
          },
          {
            "role": "user",
            "ko": "두 명이요.",
            "phonetic": "du myeong-iyo.",
            "zh": "两位。"
          },
          {
            "role": "clerk",
            "ko": "네, 예약 완료입니다. 내일 뵙겠습니다.",
            "phonetic": "ne, yeyak wanryoimnida. naeil boepgetseumnida.",
            "zh": "好的，预订完成了。明天见。"
          },
          {
            "role": "user",
            "ko": "네, 감사합니다. 내일 뵙겠습니다.",
            "phonetic": "ne, gamsahamnida. naeil boepgetseumnida.",
            "zh": "好的，谢谢。明天见！"
          }
        ],
        "tips": [
          "“여보세요” 是接电话专用“喂”。",
          "“몇 분이세요?” 用于礼貌询问就餐人数。"
        ]
      },
      {
        "scene": "메시지 남기기",
        "situationZh": "你打电话给朋友没人接，于是留言告诉他你晚点到。",
        "roles": {
          "clerk": "语音留言提示",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "지금 전화를 받을 수 없습니다.",
            "phonetic": "jigeum jeonhwareul badeul su eopseumnida.",
            "zh": "现在无法接听电话。"
          },
          {
            "role": "user",
            "ko": "안녕, 나 민수야.",
            "phonetic": "annyeong, na minsuya.",
            "zh": "嗨，我是民洙。"
          },
          {
            "role": "clerk",
            "ko": "메시지를 남겨 주세요.",
            "phonetic": "mesijireul namgyeo juseyo.",
            "zh": "请留言。"
          },
          {
            "role": "user",
            "ko": "조금 늦게 도착할 거야.",
            "phonetic": "jogeum neutge dochak-al geoya.",
            "zh": "我会晚一点到。"
          },
          {
            "role": "user",
            "ko": "나중에 다시 전화할게.",
            "phonetic": "najunge dasi jeonhwahalgae.",
            "zh": "我回头再打给你。"
          },
          {
            "role": "user",
            "ko": "그럼 안녕.",
            "phonetic": "geureom annyeong.",
            "zh": "那就再见吧。"
          }
        ],
        "tips": [
          "给朋友留言可以用轻松随意的语气。",
          "“나중에 (回头/稍后)” 用于表示之后再做某事。"
        ]
      },
      {
        "scene": "电话打错了",
        "situationZh": "我拨打号码时发现打错电话，向对方道歉并确认号码。",
        "roles": {
          "clerk": "接电话的人",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "여보세요, 김철수 씨 계세요?",
            "phonetic": "yeo-bo-se-yo, gim-cheol-su ssi gye-se-yo?",
            "zh": "喂，请问金哲洙在吗？"
          },
          {
            "role": "clerk",
            "ko": "아니요, 여긴 그런 사람 없는데요.",
            "phonetic": "a-ni-yo, yeo-gin geu-reon sa-ram eom-neun-de-yo.",
            "zh": "不是，这里没有这个人。"
          },
          {
            "role": "user",
            "ko": "어? 전화 잘못 걸었나 보네요.",
            "phonetic": "eo? jeon-hwa jal-mot geo-reon-na bo-ne-yo.",
            "zh": "咦？看来我打错电话了。"
          },
          {
            "role": "clerk",
            "ko": "어머니 전화번호가 몇 번이세요?",
            "phonetic": "eom-ne-ni jeon-hwa-beo-neo-ga myeot-beo-ni-se-yo?",
            "zh": "您的电话号码是多少呢？"
          },
          {
            "role": "user",
            "ko": "제가 실수했네요. 정말 죄송합니다.",
            "phonetic": "je-ga sil-su-haen-ne-yo. jeong-mal joe-song-ham-ni-da.",
            "zh": "我搞错了，真的很抱歉。"
          },
          {
            "role": "clerk",
            "ko": "괜찮아요. 다음에 확인하고 걸으세요.",
            "phonetic": "gwaen-chan-a-yo. da-eu-me hwa-gin-ha-go geol-eu-se-yo.",
            "zh": "没关系，下次确认好再打电话吧。"
          }
        ],
        "tips": [
          "여보세요 是接电话/打电话时的招呼用语“喂”。",
          "잘못 걸다 意为打错（电话）。",
          "실수하다 意为犯错误、搞错。"
        ]
      },
      {
        "scene": "打电话订披萨",
        "situationZh": "打电话到披萨店订餐，询问配送时间和菜单价格。",
        "roles": {
          "clerk": "披萨店职员",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "여보세요, 배달 가능한가요?",
            "phonetic": "yeo-bo-se-yo, bae-dal ga-neung-han-ga-yo?",
            "zh": "喂，能外送吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 가능합니다. 어떤 메뉴 찾으세요?",
            "phonetic": "ne, ga-neung-ham-ni-da. eo-tteon me-nyu cha-jeu-se-yo?",
            "zh": "可以，需要点哪个菜单呢？"
          },
          {
            "role": "user",
            "ko": "페퍼로니 피자 한 판 주세요.",
            "phonetic": "pe-peo-ro-ni pi-ja han pan ju-se-yo.",
            "zh": "请来一份腊肠披萨。"
          },
          {
            "role": "clerk",
            "ko": "한 판에 19,000원이에요. 시간이 얼마나 걸려요?",
            "phonetic": "han pa-ne il-gu-man-won-i-e-yo. si-ga-ni eol-ma-na geol-lyeo-yo?",
            "zh": "一份 19,000 韩元，需要多长时间？"
          },
          {
            "role": "user",
            "ko": "지금 배달하면 30분 안에 도착해요.",
            "phonetic": "jip-gil ba-dal-ha-myeon sam-sip-bun a-ne do-cha-kae-yo.",
            "zh": "现在下单的话 30 分钟内送到。"
          },
          {
            "role": "clerk",
            "ko": "집 주소 좀 알려주세요.",
            "phonetic": "jip ju-so jom al-lyeo-ju-se-yo.",
            "zh": "请告诉我家庭住址。"
          }
        ],
        "tips": [
          "배달 意为配送、外送。",
          "한 판 是披萨/饼类的量词“一份”。",
          "~안에 意为在……之内。"
        ]
      },
      {
        "scene": "给朋友打电话",
        "situationZh": "我打电话给朋友，因为朋友没接，改天再打的对话。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "여보세요, 지민아?",
            "phonetic": "yeo-bo-se-yo, ji-min-a?",
            "zh": "喂，智敏吗？"
          },
          {
            "role": "clerk",
            "ko": "응, 나 전화 왜 이렇게 갑자기?",
            "phonetic": "eung, na jeon-hwa wae i-reo-ke gap-ja-gi?",
            "zh": "嗯，怎么突然打电话？"
          },
          {
            "role": "user",
            "ko": "내일 같이 점심 먹을 수 있을까?",
            "phonetic": "nae-il gat-i jeom-sim meo-geul su it-seul-kka?",
            "zh": "明天能一起吃午饭吗？"
          },
          {
            "role": "clerk",
            "ko": "좋아, 몇 시에 만날까?",
            "phonetic": "jo-a, myeot-si-e man-nal-kka?",
            "zh": "好啊，几点见？"
          },
          {
            "role": "user",
            "ko": "12시에 우리 집 앞에서 어때?",
            "phonetic": "yeol-du-si-e u-ri jip a-pe-seo eo-ttae?",
            "zh": "12 点在我家门前见面怎么样？"
          },
          {
            "role": "clerk",
            "ko": "그래, 그럼 그때 보자!",
            "phonetic": "geu-rae, geu-reom geu-ttae bo-ja!",
            "zh": "好，那就到时候见！"
          }
        ],
        "tips": [
          "여보세요 接电话时用，对熟人可说 ~아/야 呼唤名字。",
          "갑자기 意为突然。",
          "~보자 是“那样吧/到时候见”的轻松说法。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "날짜",
        "phonetic": "naljja",
        "meaning": "日期（名词）",
        "example": "오늘 날짜가 며칠이에요?",
        "exampleZh": "今天是几号？"
      },
      {
        "word": "요일",
        "phonetic": "yoil",
        "meaning": "星期（名词）",
        "example": "오늘은 무슨 요일이에요?",
        "exampleZh": "今天是星期几？"
      },
      {
        "word": "월요일",
        "phonetic": "woryoil",
        "meaning": "星期一（名词）",
        "example": "월요일에 회의가 있어요.",
        "exampleZh": "星期一有会议。"
      },
      {
        "word": "주말",
        "phonetic": "jumal",
        "meaning": "周末（名词）",
        "example": "주말에 뭐 할 거예요?",
        "exampleZh": "周末打算做什么？"
      },
      {
        "word": "생일",
        "phonetic": "saengil",
        "meaning": "生日（名词）",
        "example": "내일은 내 생일이에요.",
        "exampleZh": "明天是我的生日。"
      },
      {
        "word": "주",
        "phonetic": "ju",
        "meaning": "周；星期（名词）",
        "example": "다음 주에 만나요.",
        "exampleZh": "我们下周见。"
      },
      {
        "word": "오늘",
        "phonetic": "oneul",
        "meaning": "今天（名词）",
        "example": "오늘 날씨가 좋아요.",
        "exampleZh": "今天天气很好。"
      },
      {
        "word": "내일",
        "phonetic": "naeil",
        "meaning": "明天（名词）",
        "example": "내일 다시 연락할게요.",
        "exampleZh": "明天再联系你。"
      },
      {
        "word": "어제",
        "phonetic": "eoje",
        "meaning": "昨天（名词）",
        "example": "어제 친구를 만났어요.",
        "exampleZh": "昨天见了朋友。"
      },
      {
        "word": "며칠",
        "phonetic": "myeochil",
        "meaning": "几号（名词）",
        "example": "오늘이 며칠이에요?",
        "exampleZh": "今天是几号？"
      }
    ],
    "article": {
      "title": "날짜와 요일",
      "titleZh": "日期与星期",
      "paragraphs": [
        {
          "en": "한국어에서는 날짜와 요일을 함께 말할 때가 많습니다.",
          "phonetic": "hangugeoneseoneun naljja-wa yoireul hamkke malhal ttaega manseumnida",
          "zh": "在韩语中，常会一起说到日期与星期。"
        },
        {
          "en": "예를 들어 '오늘은 9월 13일 토요일입니다'라고 합니다.",
          "phonetic": "yereul deureo oneureun guwol sipssamiril toyoirimnidarago hamnida",
          "zh": "例如会说“今天是9月13日星期六”。"
        },
        {
          "en": "날짜는 숫자에 '일'을 붙여서 읽습니다.",
          "phonetic": "naljjaneun sutsae ir-eul butyeoseo ilgseumnida",
          "zh": "日期是在数字后加上“日”来读。"
        },
        {
          "en": "'며칠'은 보통 몇 날짜인지 물을 때 사용합니다.",
          "phonetic": "myeochireun botong myeot naljjainji mureul ttai sayonghamnida",
          "zh": "“며칠(几号)” 一般用来询问是哪一天。"
        }
      ],
      "phrases": [
        {
          "phrase": "며칠이에요?",
          "meaning": "是几号？"
        },
        {
          "phrase": "무슨 요일이에요?",
          "meaning": "是星期几？"
        },
        {
          "phrase": "다음 주",
          "meaning": "下周"
        },
        {
          "phrase": "주말에",
          "meaning": "在周末"
        }
      ],
      "grammar": [
        {
          "point": "-(이)에요",
          "explain": "表示“是……”的敬语卑称，用于结尾，예: 오늘이 며칠이에요?（今天是几号？）"
        },
        {
          "point": "무슨 + 名词",
          "explain": "表示“什么样的、哪个”，예: 무슨 요일이에요?（星期几？）"
        },
        {
          "point": "-을/를 붙이다",
          "explain": "表示“加上、贴上”，예: 숫자에 '일'을 붙여서 읽어요.（在数字后加“日”来读。）"
        }
      ],
      "tips": [
        "星期表达：월요일(一)~일요일(日)。",
        "问日期用 “며칠”, 问星期用 “무슨 요일”。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“무슨 요일이에요?” 是在问什么？",
            "options": [
              "几号",
              "几月",
              "星期几",
              "几点"
            ],
            "answer": 2
          },
          {
            "q": "“주말” 指的是哪几天？",
            "options": [
              "周一",
              "周六和周日",
              "周三",
              "周五"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "今天是几号：오늘 _이에요?",
            "answer": "며칠"
          }
        ],
        "writing": {
          "prompt": "用韩语写一句话，介绍今天或你生日当天的完整日期和星期，例如“今天是2026年9月13日星期六”。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "약속 날짜 정하기",
        "situationZh": "你和朋友商量约好哪天见面。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "우리 언제 만날까요?",
            "phonetic": "uri eonje mannalkkayo?",
            "zh": "我们什么时候见面呢？"
          },
          {
            "role": "user",
            "ko": "다음 주 수요일 어때요?",
            "phonetic": "daeum ju suyoil eottaeyo?",
            "zh": "下周三怎么样？"
          },
          {
            "role": "clerk",
            "ko": "죄송한데 수요일은 좀 바빠요.",
            "phonetic": "joesonghande suyoir-eun jom bappayo.",
            "zh": "抱歉，周三我有点忙。"
          },
          {
            "role": "user",
            "ko": "그럼 목요일은 어때요?",
            "phonetic": "geureom mogyoir-eun eottaeyo?",
            "zh": "那周四呢？"
          },
          {
            "role": "clerk",
            "ko": "좋아요! 목요일 몇 시에요?",
            "phonetic": "joayo! mogyoil myeot sieyo?",
            "zh": "好啊！周四几点？"
          },
          {
            "role": "user",
            "ko": "오후 두 시는 어때요?",
            "phonetic": "ohu du sineun eottaeyo?",
            "zh": "下午两点怎么样？"
          }
        ],
        "tips": [
          "“언제 만날까요?” 用来提议约见时间。",
          "“-는 어때요?” 用于征求意见“……怎么样？”。"
        ]
      },
      {
        "scene": "생일 축하",
        "situationZh": "朋友告诉你生日快到了，你询问是哪一天并表示祝贺。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "내 생일이 다음 주 화요일이야.",
            "phonetic": "nae saengiri daeum ju hwayoir-iya.",
            "zh": "我生日是下周二。"
          },
          {
            "role": "user",
            "ko": "오, 다음 주 화요일이 몇 일이야?",
            "phonetic": "o, daeum ju hwayoir-i myeochir-iya?",
            "zh": "哦，下周二几号呀？"
          },
          {
            "role": "clerk",
            "ko": "9월 17일이야.",
            "phonetic": "guwol sipechir-iya.",
            "zh": "是9月17日。"
          },
          {
            "role": "user",
            "ko": "생일 축하해!",
            "phonetic": "saengil chukhahae!",
            "zh": "生日快乐！"
          },
          {
            "role": "clerk",
            "ko": "고마워! 같이 밥 먹자.",
            "phonetic": "gomawo! gati bap meokja.",
            "zh": "谢谢！咱们一起吃饭吧。"
          },
          {
            "role": "user",
            "ko": "좋아! 그날 보자!",
            "phonetic": "joa! geunal boja!",
            "zh": "好啊！那天见！"
          }
        ],
        "tips": [
          "“생일 축하해(요/합니다)” 用于祝贺生日。",
          "和朋友说话可用非正式语气，如 “~이야”。"
        ]
      },
      {
        "scene": "询问今天日期",
        "situationZh": "在办公室里向同事确认今天几号、星期几以及日期写法。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "오늘 며칠이에요?",
            "phonetic": "o-neul myeo-chil-i-e-yo?",
            "zh": "今天几号？"
          },
          {
            "role": "clerk",
            "ko": "오늘은 9월 13일이에요.",
            "phonetic": "o-neu-reun gu-wol si-b-i-i-e-yo.",
            "zh": "今天是 9 月 13 日。"
          },
          {
            "role": "user",
            "ko": "그럼 무슨 요일이에요?",
            "phonetic": "geu-reom mu-seun yo-il-i-e-yo?",
            "zh": "那今天是星期几？"
          },
          {
            "role": "clerk",
            "ko": "일요일이에요.",
            "phonetic": "il-yo-il-i-e-yo.",
            "zh": "是星期天。"
          },
          {
            "role": "user",
            "ko": "며칠을 어떻게 써요?",
            "phonetic": "myeo-chi-reul eo-tteo-ke sseo-yo?",
            "zh": "日期怎么写呢？"
          },
          {
            "role": "clerk",
            "ko": "년·월·일 순서예요. 예를 들어 2026년 9월 13일이요.",
            "phonetic": "nyeon-wol-il sun-seo-ye-yo. ye-reul deu-reo i-cheon-i-si-bi-shik-nyeon gu-wol si-b-i-i-yo.",
            "zh": "按年·月·日的顺序，比如 2026 年 9 月 13 日。"
          }
        ],
        "tips": [
          "며칠 意为“几号”（问日期）。",
          "요일 指星期几。",
          "韩国日期书写顺序为 年·月·日（년·월·일）。"
        ]
      },
      {
        "scene": "约定会议日期",
        "situationZh": "与上司商量安排会议，确认时间并定在星期三上午。",
        "roles": {
          "clerk": "上司",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "사장님, 회의를 언제 할까요?",
            "phonetic": "sa-jang-nim, hoe-ui-reul eon-je hal-kka-yo?",
            "zh": "社长，会议什么时候开呢？"
          },
          {
            "role": "clerk",
            "ko": "이번 주 화요일은 어때요?",
            "phonetic": "i-beon ju hwa-yo-il-eun eo-ttae-yo?",
            "zh": "这周的周二怎么样？"
          },
          {
            "role": "user",
            "ko": "화요일엔 제가 바빠서 수요일은 어떤가요?",
            "phonetic": "hwa-yo-il-en je-ga ba-ppa-seo su-yo-il-eun eo-tteon-ga-yo?",
            "zh": "周二我很忙，周三怎么样？"
          },
          {
            "role": "clerk",
            "ko": "좋아요. 수요일 오전 10시에 시작합시다.",
            "phonetic": "jo-a-yo. su-yo-il o-jeon yeol-si-e si-jak-hap-si-da.",
            "zh": "好，就周三上午 10 点开始吧。"
          },
          {
            "role": "user",
            "ko": "회의실은 예약해 드릴게요.",
            "phonetic": "hoe-ui-sil-eun ye-ya-kae deu-ril-ge-yo.",
            "zh": "我帮您预约会议室。"
          },
          {
            "role": "clerk",
            "ko": "고마워요. 그럼 수요일에 뵙겠습니다.",
            "phonetic": "go-ma-wo-yo. geu-reom su-yo-i-re boep-kket-sseum-ni-da.",
            "zh": "谢谢，那我们周三见。"
          }
        ],
        "tips": [
          "요일 用 화요일（周二）、수요일（周三）表达星期。",
          "오전 意为上午。",
          "회의 指会议，회의실 指会议室。"
        ]
      },
      {
        "scene": "预约生日日期",
        "situationZh": "打电话到餐厅为下周生日做预约，确认具体日期和时间。",
        "roles": {
          "clerk": "餐厅接待",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "다음 주에 생일 파티를 하려고 하는데요.",
            "phonetic": "da-eum ju-e saeng-il pa-ti-reul ha-ryeo-go ha-neun-de-yo.",
            "zh": "下周想办生日派对。"
          },
          {
            "role": "clerk",
            "ko": "네, 며칠에 오실 건가요?",
            "phonetic": "ne, myeo-chi-re o-sil geon-ga-yo?",
            "zh": "好的，请问哪天来？"
          },
          {
            "role": "user",
            "ko": "토요일 날에 가요.",
            "phonetic": "to-yo-il na-re ga-yo.",
            "zh": "周六去。"
          },
          {
            "role": "clerk",
            "ko": "토요일이면 이번 주 19일이네요.",
            "phonetic": "to-yo-il-i-myeon i-beon ju sip-ki-ri-ne-yo.",
            "zh": "如果周六的话就是这周 19 号了。"
          },
          {
            "role": "user",
            "ko": "시간은 저녁 7시로 부탁해요.",
            "phonetic": "si-gan-eun jeo-nyeok il-gop-si-ro bu-ta-kae-yo.",
            "zh": "时间请定在晚上 7 点。"
          },
          {
            "role": "clerk",
            "ko": "네, 저녁 7시에 예약해 드리겠습니다.",
            "phonetic": "ne, jeo-nyeok il-gop-si-e ye-ya-kae deu-ri-get-sseum-ni-da.",
            "zh": "好的，为您预约晚上 7 点。"
          }
        ],
        "tips": [
          "생일 指生日，생일 파티 是生日派对。",
          "며칠에 意为在几号。",
          "토요일 是周六（一周中的周六）。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "가족",
        "phonetic": "gajok",
        "meaning": "家庭；家人（名词）",
        "example": "우리 가족은 네 명이에요.",
        "exampleZh": "我们家有四位成员。"
      },
      {
        "word": "아버지",
        "phonetic": "abeoji",
        "meaning": "父亲（名词）",
        "example": "아버지는 선생님이세요.",
        "exampleZh": "我爸爸是老师。"
      },
      {
        "word": "어머니",
        "phonetic": "eomeoni",
        "meaning": "母亲（名词）",
        "example": "어머니는 회사에 다니세요.",
        "exampleZh": "妈妈在公司上班。"
      },
      {
        "word": "아빠",
        "phonetic": "appa",
        "meaning": "爸爸（名词·口语）",
        "example": "아빠, 뭐 하세요?",
        "exampleZh": "爸爸，您在做什么？"
      },
      {
        "word": "엄마",
        "phonetic": "eomma",
        "meaning": "妈妈（名词·口语）",
        "example": "엄마가 집밥을 해 주세요.",
        "exampleZh": "妈妈给我做家常饭。"
      },
      {
        "word": "형",
        "phonetic": "hyeong",
        "meaning": "哥哥（男性称呼年长男性）（名词）",
        "example": "형이 저를 많이 도와줘요.",
        "exampleZh": "哥哥经常帮我。"
      },
      {
        "word": "누나",
        "phonetic": "nuna",
        "meaning": "姐姐（男性称呼年长女性）（名词）",
        "example": "누나가 맛있는 걸 사 줬어요.",
        "exampleZh": "姐姐给我买了好吃的。"
      },
      {
        "word": "여동생",
        "phonetic": "yeodongsaeng",
        "meaning": "妹妹（名词）",
        "example": "여동생은 대학생이에요.",
        "exampleZh": "我妹妹是大学生。"
      },
      {
        "word": "남동생",
        "phonetic": "namdongsaeng",
        "meaning": "弟弟（名词）",
        "example": "남동생이 축구를 좋아해요.",
        "exampleZh": "我弟弟喜欢踢足球。"
      },
      {
        "word": "할머니",
        "phonetic": "halmeoni",
        "meaning": "奶奶；祖母（名词）",
        "example": "할머니 댁에 자주 가요.",
        "exampleZh": "我常去奶奶家。"
      }
    ],
    "article": {
      "title": "우리 가족",
      "titleZh": "我的家人",
      "paragraphs": [
        {
          "en": "우리 가족은 모두 다섯 명입니다.",
          "phonetic": "uri gajogeun modu daseot myeongimnida",
          "zh": "我们家一共有五口人。"
        },
        {
          "en": "아버지와 어머니, 형, 여동생 그리고 제가 함께 삽니다.",
          "phonetic": "abeojiwa eomeoni, hyeong, yeodongsaeng geurigo jegah hamkke samnida",
          "zh": "爸爸、妈妈、哥哥、妹妹和我住在一起。"
        },
        {
          "en": "아버지는 은행에서 일하시고 어머니는 병원에서 일하십니다.",
          "phonetic": "abeojineun eunhaeng-eseo irhasigo eomeonineun byeongwon-eseo irhasimnida",
          "zh": "爸爸在银行工作，妈妈在医院工作。"
        },
        {
          "en": "저는 가족과 함께 있는 시간이 가장 좋습니다.",
          "phonetic": "jeoneun gajokgwa hamkke itneun sigani gajang joseumnida",
          "zh": "和家人在一起的时光是我最喜欢的。"
        }
      ],
      "phrases": [
        {
          "phrase": "가족과 함께",
          "meaning": "和家人一起"
        },
        {
          "phrase": "일하시다",
          "meaning": "（敬语）工作"
        },
        {
          "phrase": "~명",
          "meaning": "……位（人数单位）"
        },
        {
          "phrase": "가장 좋다",
          "meaning": "最喜欢；最好"
        }
      ],
      "grammar": [
        {
          "point": "-(이)세요",
          "explain": "表示“是……”的敬语疑问句，예: 아버지가 되세요?（您父亲是老师吗？）"
        },
        {
          "point": "-시-",
          "explain": "尊称主体的敬语词缀，放在动词谓词后，如 일하시다(工作-敬语)、주무시다(睡觉-敬语)。"
        },
        {
          "point": "~명",
          "explain": "人数单位“……位、……个人”，예: 네 명(四人)。"
        },
        {
          "point": "가장",
          "explain": "副词“最”，예: 가장 좋아해요.（最喜欢。）"
        }
      ],
      "tips": [
        "称呼长辈要用敬语，如 “아버지/−세요”。",
        "“아버지/어머니” 是正式，口语用 “아빠/엄마”。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“어머니” 指的是谁？",
            "options": [
              "爸爸",
              "妈妈",
              "哥哥",
              "奶奶"
            ],
            "answer": 1
          },
          {
            "q": "“우리 가족은 네 명이에요” 说的是几人？",
            "options": [
              "三人",
              "四人",
              "五人",
              "六人"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "我们家有五口人：우리 가족은 다섯 _입니다.",
            "answer": "명"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段简单的介绍，说说你的家人都有谁、在哪里工作或上学，并用上“아버지、어머니、형、여동생”等家庭词汇。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "가족 소개",
        "situationZh": "你向新朋友介绍自己家人的情况。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "가족이 몇 명이 있어요?",
            "phonetic": "gajogi myeot myeong-i isseoyo?",
            "zh": "你家有几口人呢？"
          },
          {
            "role": "user",
            "ko": "우리 가족은 네 명이에요.",
            "phonetic": "uri gajogeun ne myeong-ieyo.",
            "zh": "我们家有四口人。"
          },
          {
            "role": "clerk",
            "ko": "누가 누가 있니?",
            "phonetic": "nuga nuga inne?",
            "zh": "家里都有谁呀？"
          },
          {
            "role": "user",
            "ko": "아버지, 어머니, 여동생 그리고 저예요.",
            "phonetic": "abeoji, eomeoni, yeodongsaeng geurigo jeoyeyo.",
            "zh": "爸爸、妈妈、妹妹和我。"
          },
          {
            "role": "clerk",
            "ko": "여동생이 몇 살이야?",
            "phonetic": "yeodongsaeng-i myeot sar-iya?",
            "zh": "你妹妹几岁呀？"
          },
          {
            "role": "user",
            "ko": "여동생은 스무 살이야.",
            "phonetic": "yeodongsaeng-eun seumu sar-iya.",
            "zh": "妹妹今年二十岁。"
          }
        ],
        "tips": [
          "“몇 살” 用来问年龄。",
          "口语中 “-이야/-니” 用于亲密的朋友之间。"
        ]
      },
      {
        "scene": "집에서 대화",
        "situationZh": "你放学回家后，和妈妈在厨房里的一段对话。",
        "roles": {
          "clerk": "妈妈",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "학교에서 잘 다녀왔니?",
            "phonetic": "hakgyo-eseo jar danyeowanni?",
            "zh": "从学校顺利回来了吗？"
          },
          {
            "role": "user",
            "ko": "네, 엄마 오늘 뭐 해 줄 거예요?",
            "phonetic": "ne, eomma oneul mwo hae jul geoyeyo?",
            "zh": "嗯，妈妈今天要给我做什么？"
          },
          {
            "role": "clerk",
            "ko": "좋아하는 김치찌개를 끓였어.",
            "phonetic": "joahaneun kimchijjigaereul kkeuryeosseo.",
            "zh": "做了你喜欢吃的泡菜汤。"
          },
          {
            "role": "user",
            "ko": "와, 엄마 최고예요!",
            "phonetic": "wa, eomma choegoyeyo!",
            "zh": "哇，妈妈太棒了！"
          },
          {
            "role": "clerk",
            "ko": "빨리 씻고 밥 먹자.",
            "phonetic": "ppalli siskko bap meokja.",
            "zh": "快去洗漱，然后吃饭吧。"
          },
          {
            "role": "user",
            "ko": "네, 금방 갈게요!",
            "phonetic": "ne, geumbang galgeyo!",
            "zh": "好的，我马上来！"
          }
        ],
        "tips": [
          "和家人说 “다녀왔니?” 表示“回来了吗？”。",
          "“-자” 用于提议“一起做……吧”。"
        ]
      },
      {
        "scene": "介绍哥哥的工作",
        "situationZh": "和朋友聊起哥哥的工作，朋友询问家人的情况。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오빠는 뭐 하세요?",
            "phonetic": "op-pa-neun mwo ha-se-yo?",
            "zh": "哥哥是做什么的？"
          },
          {
            "role": "user",
            "ko": "오빠는 회사원이에요.",
            "phonetic": "op-pa-neun hoe-sa-won-i-e-yo.",
            "zh": "哥哥是公司职员。"
          },
          {
            "role": "clerk",
            "ko": "어디에서 일하세요?",
            "phonetic": "eo-di-e-seo il-ha-se-yo?",
            "zh": "在哪里上班？"
          },
          {
            "role": "user",
            "ko": "서울의 IT 회사에서 일해요.",
            "phonetic": "seo-ur-e IT hoe-sa-e-seo il-hae-yo.",
            "zh": "在首尔的一家 IT 公司工作。"
          },
          {
            "role": "clerk",
            "ko": "오빠가 몇 살이에요?",
            "phonetic": "op-pa-ga myeot-sa-ri-e-yo?",
            "zh": "哥哥多大了？"
          },
          {
            "role": "user",
            "ko": "올해 서른 살이에요. 결혼도 했어요.",
            "phonetic": "ol-hae seo-reun sa-ri-e-yo. gyeol-hon-do hae-sseo-yo.",
            "zh": "今年三十岁，也结婚了。"
          }
        ],
        "tips": [
          "오빠 指女子称呼哥哥，男生则用 형。",
          "회사원 意为公司职员。",
          "서른 살 指三十岁。"
        ]
      },
      {
        "scene": "看家人照片",
        "situationZh": "把手机里的家人照片给同事看，介绍爸爸妈妈和妹妹。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "이건 우리 가족 사진이에요.",
            "phonetic": "i-geon u-ri ga-jok sa-jin-i-e-yo.",
            "zh": "这是我们家庭的照片。"
          },
          {
            "role": "clerk",
            "ko": "와, 가족이 몇 명이에요?",
            "phonetic": "wa, ga-jo-gi myeot myeong-i-e-yo?",
            "zh": "哇，家里有几口人？"
          },
          {
            "role": "user",
            "ko": "아빠, 엄마, 저, 여동생까지 네 명이에요.",
            "phonetic": "ap-ppa, eom-ma, jeo, yeo-dong-saeng-kka-ji ne myeong-i-e-yo.",
            "zh": "爸爸、妈妈、我、妹妹，一共四口人。"
          },
          {
            "role": "clerk",
            "ko": "여동생이 대학생이에요?",
            "phonetic": "yeo-dong-saeng-i dae-hak-saeng-i-e-yo?",
            "zh": "妹妹是大学生吗？"
          },
          {
            "role": "user",
            "ko": "아니요, 고등학생이에요.",
            "phonetic": "a-ni-yo, go-deung-hak-saeng-i-e-yo.",
            "zh": "不是，是高中生。"
          },
          {
            "role": "clerk",
            "ko": "부모님이랑 같이 사세요?",
            "phonetic": "bu-mo-nim-rang gat-i sa-se-yo?",
            "zh": "和父母住在一起吗？"
          }
        ],
        "tips": [
          "가족 指家庭、家人。",
          "여동생 指妹妹，오빠/형 兄弟等因性别而异。",
          "부모님 是称呼父母的敬语。"
        ]
      },
      {
        "scene": "周末和家人一起",
        "situationZh": "和家人商量周末去哪里玩，最后决定一起去看电影。",
        "roles": {
          "clerk": "妈妈",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "엄마, 이번 주말에 뭐 할까요?",
            "phonetic": "eom-ma, i-beon ju-ma-re mwo hal-kka-yo?",
            "zh": "妈妈，这个周末做什么呢？"
          },
          {
            "role": "clerk",
            "ko": "영화 보러 갈래? 요즘 좋은 영화가 나왔대.",
            "phonetic": "yeong-hwa bo-reo gal-lae? yo-jeum jo-eun yeong-hwa-ga na-wat-dae.",
            "zh": "去看电影吗？最近有好电影上映了。"
          },
          {
            "role": "user",
            "ko": "좋아요! 그럼 아빠도 같이 가요?",
            "phonetic": "jo-a-yo! geu-reom ap-ppa-do gat-i ga-yo?",
            "zh": "好啊！那爸爸也一起去吗？"
          },
          {
            "role": "clerk",
            "ko": "응, 아빠도 같이 가자고 하셨어.",
            "phonetic": "eung, ap-ppa-do gat-i ga-ja-go ha-syeo-sseo.",
            "zh": "嗯，爸爸说他也一起去。"
          },
          {
            "role": "user",
            "ko": "몇 시 영화로 볼까요?",
            "phonetic": "myeot-si yeong-hwa-ro bol-kka-yo?",
            "zh": "看几点的电影？"
          },
          {
            "role": "clerk",
            "ko": "오후 2시에 시작하는 걸로 하자.",
            "phonetic": "o-hu du-si-e si-jak-ha-neun geol-lo ha-ja.",
            "zh": "就定下午 2 点开场的那场吧。"
          }
        ],
        "tips": [
          "주말 指周末。",
          "영화 보다 意为看电影。",
          "반말（~자）用于亲近的家人间对话。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "학교",
        "phonetic": "hakgyo",
        "meaning": "学校（名词）",
        "example": "저는 학교에 갑니다.",
        "exampleZh": "我去学校。"
      },
      {
        "word": "선생님",
        "phonetic": "seonsaengnim",
        "meaning": "老师（名词）",
        "example": "선생님이 질문하셨어요.",
        "exampleZh": "老师提问了。"
      },
      {
        "word": "학생",
        "phonetic": "haksaeng",
        "meaning": "学生（名词）",
        "example": "학생이 많아요.",
        "exampleZh": "学生很多。"
      },
      {
        "word": "공부하다",
        "phonetic": "gongbuhada",
        "meaning": "学习（动词）",
        "example": "매일 한국어를 공부해요.",
        "exampleZh": "我每天学习韩语。"
      },
      {
        "word": "교실",
        "phonetic": "gyosil",
        "meaning": "教室（名词）",
        "example": "교실이 아주 넓어요.",
        "exampleZh": "教室很宽敞。"
      },
      {
        "word": "수업",
        "phonetic": "sueop",
        "meaning": "课、授课（名词）",
        "example": "수업이 오전 9시에 시작해요.",
        "exampleZh": "课在上午九点开始。"
      },
      {
        "word": "책",
        "phonetic": "chaek",
        "meaning": "书（名词）",
        "example": "이 책은 재미있어요.",
        "exampleZh": "这本书很有趣。"
      },
      {
        "word": "도서관",
        "phonetic": "doseogwan",
        "meaning": "图书馆（名词）",
        "example": "도서관에서 공부해요.",
        "exampleZh": "我在图书馆学习。"
      },
      {
        "word": "숙제",
        "phonetic": "sukje",
        "meaning": "作业（名词）",
        "example": "숙제를 다 끝냈어요.",
        "exampleZh": "我做完了全部作业。"
      },
      {
        "word": "시험",
        "phonetic": "siheom",
        "meaning": "考试（名词）",
        "example": "내일 한국어 시험이 있어요.",
        "exampleZh": "明天有韩语考试。"
      }
    ],
    "article": {
      "title": "학교 첫날",
      "titleZh": "开学第一天",
      "paragraphs": [
        {
          "en": "오늘은 학교에 가는 첫날이에요. 아침 일찍 일어나서 가방을 챙겼어요.",
          "phonetic": "oneureun hakgyo-e ganeun cheonnaliyeyo. achim iljjik ireonaseo gabangeul chaenggyeosseoyo.",
          "zh": "今天是去学校的第一天。早上很早就起床整理了书包。"
        },
        {
          "en": "교실에 들어가니 친구들이 많았어요. 선생님이 친절하게 인사해 주셨어요.",
          "phonetic": "gyosil-e deureogani chingudeuri manasseoyo. seonsaengnimi chinjeolhage insahae jusyeosseoyo.",
          "zh": "一进教室，朋友很多。老师亲切地和我打了招呼。"
        },
        {
          "en": "첫 수업은 한국어였어요. 나는 열심히 듣고 노트에 적었어요.",
          "phonetic": "cheot sueobeun hangugeoyeosseoyo. naneun yeolsimhi deutgo noteue jeogeosseoyo.",
          "zh": "第一堂课是韩语课。我认真听讲并记了笔记。"
        },
        {
          "en": "점심에는 도서관에 가서 책을 빌렸어요. 내일 수업이 또 기대돼요.",
          "phonetic": "jeomsimeneun doseogwan-e gaseo chaegeul billyeosseoyo. naeil sueobi tto gidaedwaeyo.",
          "zh": "午休时去图书馆借了书。我很期待明天的课。"
        }
      ],
      "phrases": [
        {
          "phrase": "학교에 가다",
          "meaning": "去学校"
        },
        {
          "phrase": "공부를 열심히 하다",
          "meaning": "努力学习"
        },
        {
          "phrase": "숙제를 내다",
          "meaning": "交作业"
        },
        {
          "phrase": "시험을 보다",
          "meaning": "参加考试"
        }
      ],
      "grammar": [
        {
          "point": "-에 가다",
          "explain": "表示“去某处”。助词 -에 跟在场所名词后面，加动词 가다，意思是“去……”。例：학교에 가요（去学校）。"
        },
        {
          "point": "-부터 -까지",
          "explain": "表示“从……到……”的时间或范围。例：오전 9시부터 오후 3시까지 수업이 있어요（从上午9点到下午3点有课）。"
        },
        {
          "point": "-하고 싶어요",
          "explain": "用在动词词干后，表示“想……”。例：책을 읽고 싶어요（我想读书）。"
        }
      ],
      "tips": [
        "助词 -에 常用于表示去向或所在地点，是韩语最常用的助词之一。",
        "韩语动词放在句末，主谓宾顺序与中文不同，要多练习语序。",
        "숙제(作业)、시험(考试)一类的学习词汇在日常对话中出现频率很高，建议反复记忆。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“去学校”用韩语怎么说？",
            "options": [
              "학교에서 오다",
              "학교에 가다",
              "학교를 보다",
              "학교부터 듣다"
            ],
            "answer": 1
          },
          {
            "q": "“我努力学习”用韩语怎么说？",
            "options": [
              "저는 열심히 공부해요",
              "저는 천천히 공부해요",
              "저는 쉬면서 공부해요",
              "저는 잠만 자요"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "나는 도서관____ 책을 빌렸어요.（在图书馆借了书）",
            "answer": "에서"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，介绍你喜欢的学习场所，例如图书馆或教室，并说明为什么喜欢、平时在那里做什么。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "교실에서",
        "situationZh": "开学第一天，新同学向大家作自我介绍，老师欢迎并询问情况。",
        "roles": {
          "clerk": "老师",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 오늘은 새 친구가 왔어요.",
            "phonetic": "annyeonghaseyo. oneureun sae chinguga wasseoyo.",
            "zh": "大家好。今天来了一位新朋友。"
          },
          {
            "role": "user",
            "ko": "안녕하세요. 저는 김민수라고 해요.",
            "phonetic": "annyeonghaseyo. jeoneun gimminsuragohaeyo.",
            "zh": "大家好。我叫金敏秀。"
          },
          {
            "role": "clerk",
            "ko": "반갑습니다. 어디에서 왔어요?",
            "phonetic": "bangapseumnida. eodieseo wasseoyo?",
            "zh": "很高兴认识你。你是从哪儿来的？"
          },
          {
            "role": "user",
            "ko": "저는 중국에서 왔어요. 한국어를 배우고 있어요.",
            "phonetic": "jeoneun junggukeseo wasseoyo. hangugeoreul baeugo isseoyo.",
            "zh": "我从中国来，正在学韩语。"
          },
          {
            "role": "clerk",
            "ko": "잘 배웠네요. 열심히 공부합시다.",
            "phonetic": "jal baewonneyo. yeolsimhi gongbuhapsida.",
            "zh": "你学得不错呢。让我们一起努力学习吧。"
          },
          {
            "role": "user",
            "ko": "네, 선생님. 감사합니다.",
            "phonetic": "ne, seonsaengnim. gamsahamnida.",
            "zh": "好的，老师。谢谢您。"
          }
        ],
        "tips": [
          "自我介绍常用“저는 ……라고 해요”（我叫……）。",
          "对老师要用敬语“합니다体”，显得更礼貌。"
        ]
      },
      {
        "scene": "도서관에서",
        "situationZh": "在图书馆里向图书管理员借韩语学习的书籍。",
        "roles": {
          "clerk": "图书管理员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 무엇을 도와드릴까요?",
            "phonetic": "annyeonghaseyo. mueoseul dowadeurilkkayo?",
            "zh": "您好。有什么可以帮您的吗？"
          },
          {
            "role": "user",
            "ko": "한국어 책을 찾고 싶어요.",
            "phonetic": "hangugeo chaegeul chatgo sipeoyo.",
            "zh": "我想找韩语书。"
          },
          {
            "role": "clerk",
            "ko": "이쪽에 있어요. 따라오세요.",
            "phonetic": "ijjoge isseoyo. ttaraoseyo.",
            "zh": "在这边，请跟我来。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 이 책 한 권 빌릴 수 있어요?",
            "phonetic": "gamsahamnida. i chaek han gwon billil su isseoyo?",
            "zh": "谢谢。这本书我能借一本吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 가능해요. 학생증이 필요해요.",
            "phonetic": "ne, ganeunghaeyo. haksaengjeungi piryohaeyo.",
            "zh": "可以，需要学生证。"
          },
          {
            "role": "user",
            "ko": "네, 여기 있어요. 고마워요.",
            "phonetic": "ne, yeogi isseoyo. gomawoyo.",
            "zh": "好的，在这里。谢谢您。"
          }
        ],
        "tips": [
          "借书时“한 권（一本）”这类量词要记好，指示卷数的量词用“권”。",
          "“따라오세요”（请跟我来）在问路、带路时很常用。"
        ]
      },
      {
        "scene": "운동장에서",
        "situationZh": "开学典礼在操场举行，老师整队并安排各班位置。",
        "roles": {
          "clerk": "老师",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "운동장에 모여 주세요. 오늘은 입학식이 있어요.",
            "phonetic": "undongjang-e-moyeo-juseyo. oneureun-iphaksigi-isseoyo.",
            "zh": "请到操场集合，今天要举行开学典礼。"
          },
          {
            "role": "user",
            "ko": "선생님, 우리 반은 어디에 서요?",
            "phonetic": "seonsaengnim, uri-baneun-eodie-seoyo?",
            "zh": "老师，我们班站哪里？"
          },
          {
            "role": "clerk",
            "ko": "이쪽이에요. 선생님 뒤로 와 주세요.",
            "phonetic": "ijjogi-eyo. seonsaengnim-dwiro-wa-juseyo.",
            "zh": "在这边，请到老师后面来。"
          },
          {
            "role": "user",
            "ko": "네, 모두 모였어요.",
            "phonetic": "ne, modu-moyeosseoyo.",
            "zh": "好的，都到齐了。"
          },
          {
            "role": "clerk",
            "ko": "반갑습니다. 같이 열심히 다닙시다.",
            "phonetic": "bangapseumnida. gati-yeolsimhi-danipsida.",
            "zh": "很高兴认识大家，让我们一同努力上学吧。"
          },
          {
            "role": "user",
            "ko": "네, 잘 부탁드려요!",
            "phonetic": "ne, jal-butakdeuryeoyo!",
            "zh": "好的，请多多关照！"
          }
        ],
        "tips": [
          "整队集合时说“여기 모여 주세요”（请到这里集合）很常用。",
          "晨会/开学典礼的“입학식（入学式）”是开学季高频词。"
        ]
      },
      {
        "scene": "급식실에서",
        "situationZh": "午饭时间在食堂排队打饭，向阿姨询问今天的菜色。",
        "roles": {
          "clerk": "食堂阿姨",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어서 오세요. 오늘 메뉴는 불고기예요.",
            "phonetic": "eoseo-oseyo. oneul-menyuneun-bulgogiyeyo.",
            "zh": "欢迎光临，今天的菜单是烤牛肉。"
          },
          {
            "role": "user",
            "ko": "맛있겠어요. 한 그릇 주세요.",
            "phonetic": "masitgettseoyo. han-geureut-juseyo.",
            "zh": "看起来很好吃，请给我一份。"
          },
          {
            "role": "clerk",
            "ko": "그래요. 국도 드시겠어요?",
            "phonetic": "geuraeyo. gukdo-deusigesseoyo?",
            "zh": "好的，汤也要来一份吗？"
          },
          {
            "role": "user",
            "ko": "네, 주세요. 감사합니다.",
            "phonetic": "ne, juseyo. gamsahamnida.",
            "zh": "好的，请给我，谢谢。"
          },
          {
            "role": "clerk",
            "ko": "많이 드세요. 맛있게 먹을 거예요.",
            "phonetic": "mani-deuseyo. masitge-meogeul-geoyeyo.",
            "zh": "请多吃点，希望你会觉得好吃。"
          },
          {
            "role": "user",
            "ko": "네, 잘 먹겠습니다!",
            "phonetic": "ne, jal-meokgesseumnida!",
            "zh": "好的，我开动了！"
          }
        ],
        "tips": [
          "食前说“잘 먹겠습니다”（我开动了），食后说“잘 먹었습니다”（我吃好了）。",
          "打饭的量词用“그릇（碗）”，比如“한 그릇”（一碗）。"
        ]
      },
      {
        "scene": "동아리 방에서",
        "situationZh": "在社团活动室想加入音乐社团，请教负责的学长学姐。",
        "roles": {
          "clerk": "学长/学姐",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "동아리 방에 온 걸 환영해요.",
            "phonetic": "dongari-bange-on-geol-hwanyeonghaeyo.",
            "zh": "欢迎来到社团活动室。"
          },
          {
            "role": "user",
            "ko": "우리 동아리는 어떤 걸 해요?",
            "phonetic": "uri-dongarineun-eotteon-geol-haeyo?",
            "zh": "我们社团平时做什么？"
          },
          {
            "role": "clerk",
            "ko": "음악 동아리예요. 매주 금요일에 연습해요.",
            "phonetic": "eumak-dongariyeyo. maeju-geumyoire-yeonseubhaeyo.",
            "zh": "是音乐社团，每周五练习。"
          },
          {
            "role": "user",
            "ko": "재미있겠네요. 가입할 수 있어요?",
            "phonetic": "jaemiitgettneyo. gaiphal-su-isseoyo?",
            "zh": "好像很有意思，我能加入吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 신청서만 쓰면 돼요.",
            "phonetic": "ne, sincheongseoman-sseumyeon-dwaeyo.",
            "zh": "可以，只要填好申请表就行。"
          },
          {
            "role": "user",
            "ko": "좋아요. 저도 신청할게요!",
            "phonetic": "joayo. jeodo-sincheonghalgeyo!",
            "zh": "太好了，我也要报名！"
          }
        ],
        "tips": [
          "“동아리”指社团，大学里“동아리에 가입하다”表示加入社团。",
          "询问做法时用“어떻게 해요?”或“무엇을 해요?”，很口语化。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "일하다",
        "phonetic": "ilhada",
        "meaning": "工作、干活（动词）",
        "example": "저는 회사에서 일해요.",
        "exampleZh": "我在公司工作。"
      },
      {
        "word": "회사",
        "phonetic": "hoesa",
        "meaning": "公司（名词）",
        "example": "회사가 서울에 있어요.",
        "exampleZh": "公司在首尔。"
      },
      {
        "word": "직장",
        "phonetic": "jikjang",
        "meaning": "工作单位、职场（名词）",
        "example": "직장까지 지하철로 가요.",
        "exampleZh": "我坐地铁去上班。"
      },
      {
        "word": "직업",
        "phonetic": "jigeop",
        "meaning": "职业（名词）",
        "example": "당신의 직업이 뭐예요?",
        "exampleZh": "你的职业是什么？"
      },
      {
        "word": "사장님",
        "phonetic": "sajangnim",
        "meaning": "社长、老板（名词）",
        "example": "사장님이 회의에 나와요.",
        "exampleZh": "社长来参加会议。"
      },
      {
        "word": "동료",
        "phonetic": "dongnyo",
        "meaning": "同事（名词）",
        "example": "동료들과 점심을 먹어요.",
        "exampleZh": "我和同事们一起吃午饭。"
      },
      {
        "word": "출근하다",
        "phonetic": "chulgeunhada",
        "meaning": "上班（动词）",
        "example": "아침 아홉 시에 출근해요.",
        "exampleZh": "我早上九点上班。"
      },
      {
        "word": "퇴근하다",
        "phonetic": "toegeunhada",
        "meaning": "下班（动词）",
        "example": "오늘 일찍 퇴근했어요.",
        "exampleZh": "今天提前下班了。"
      },
      {
        "word": "월급",
        "phonetic": "wolgeup",
        "meaning": "工资、薪水（名词）",
        "example": "월급이 매달 25일에 나와요.",
        "exampleZh": "工资每月25号发。"
      },
      {
        "word": "회의",
        "phonetic": "hoenui",
        "meaning": "会议（名词）",
        "example": "오후에 중요한 회의가 있어요.",
        "exampleZh": "下午有一个重要的会议。"
      }
    ],
    "article": {
      "title": "나의 직장생활",
      "titleZh": "我的职场生活",
      "paragraphs": [
        {
          "en": "저는 서울에 있는 회사에서 일해요. 매일 아침 9시에 출근해서 오후 6시에 퇴근해요.",
          "phonetic": "jeoneun seoure inneun hoesa-eseo ilhaeyo. maeil achim ahop si-e chulgeunhaeseo ohu yeoseot si-e toegeunhaeyo.",
          "zh": "我在首尔的一家公司工作。每天上午9点上班，下午6点下班。"
        },
        {
          "en": "우리 회사 직원들은 모두 친절해요. 동료들이 자주 저를 도와줘요.",
          "phonetic": "uri hoesa jikwondeureun modu chinjeolhaeyo. dongnyodeuri jaju jeoreul dowajwoyo.",
          "zh": "我们公司的员工都很和善。同事们经常帮助我。"
        },
        {
          "en": "오늘은 2시에 팀 회의가 있었어요. 사장님도 회의에 오셨어요.",
          "phonetic": "oneureun du si-e tim hoeuiga isseosseoyo. sajangnimdo hoeui-e osyeosseoyo.",
          "zh": "今天下午两点开了一个团队会议。社长也来参加了会议。"
        },
        {
          "en": "일이 많지만 재미있어요. 나는 이 직업이 정말 좋아요.",
          "phonetic": "iri manjiman jaemiisseoyo. naneun i jigeobi jeongmal joayo.",
          "zh": "工作虽然很多，但很有意思。我很喜欢这份职业。"
        }
      ],
      "phrases": [
        {
          "phrase": "출근하다",
          "meaning": "上班"
        },
        {
          "phrase": "퇴근하다",
          "meaning": "下班"
        },
        {
          "phrase": "회의를 하다",
          "meaning": "开会"
        },
        {
          "phrase": "일을 하다",
          "meaning": "做工作、干活"
        }
      ],
      "grammar": [
        {
          "point": "-지만",
          "explain": "表示转折，“虽然……但是……”。接在动词/形容词词干后。例：일이 많지만 재미있어요（工作虽多，但有意思）。"
        },
        {
          "point": "-ㅂ니다/습니다体",
          "explain": "正式的敬语陈述句结尾，职场、演讲等正式场合常用。例：퇴근합니다（下班了）。"
        },
        {
          "point": "도",
          "explain": "表示“也”。例：사장님도 회의에 오셨어요（社长也来开会了）。"
        }
      ],
      "tips": [
        "职场中要多用“합니다体”（正式敬语）与上司和客户交流，以示尊重。",
        "“출근”和“퇴근”分别表示上/下班，两者的词形要区分清楚。",
        "讨论工资或私事一般是同事间私下话题，公共场合会显得失礼。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“我下午6点下班”用韩语怎么说？",
            "options": [
              "저는 오후 6시에 출근해요",
              "저는 아침 6시에 퇴근해요",
              "저는 오후 6시에 퇴근해요",
              "저는 오후 6시에 잠을 자요"
            ],
            "answer": 2
          },
          {
            "q": "下面哪个词表示“同事”？",
            "options": [
              "동료",
              "동생",
              "동네",
              "동상"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "사장님____ 회의에 오셨어요.（社长也来开会了）",
            "answer": "도"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话介绍你的职业与工作内容，包括工作地点、时间安排，以及你是否喜欢这份工作，并说明理由。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "직장에서",
        "situationZh": "在公司里第一次见到新同事，互相作介绍并简单寒暄。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 같이 일하게 돼서 반가워요.",
            "phonetic": "annyeonghaseyo. gachi ilhage dwaeseo bangawoyo.",
            "zh": "你好。能一起工作真高兴。"
          },
          {
            "role": "user",
            "ko": "안녕하세요. 저는 이번에 새로 온 김민수예요.",
            "phonetic": "annyeonghaseyo. jeoneun ibeone saero on gimminsuyeyo.",
            "zh": "你好。我是这次新来的金敏秀。"
          },
          {
            "role": "clerk",
            "ko": "만나서 반갑습니다. 저는 박지훈이에요.",
            "phonetic": "mannaseo bangapseumnida. jeoneun bakjihunieyo.",
            "zh": "见到你很高兴，我是朴智勋。"
          },
          {
            "role": "user",
            "ko": "박지훈님은 무엇을 하시는 분이에요?",
            "phonetic": "bakjihunimeun mueoseul hasineun bunieyo?",
            "zh": "智勋哥（先生）是做哪方面工作的？"
          },
          {
            "role": "clerk",
            "ko": "저는 마케팅 담당이에요. 궁금한 게 있으면 물어봐요.",
            "phonetic": "jeoneun maketing damdangieyo. gunggeumhan ge isseumyeon mureobwayo.",
            "zh": "我是负责营销的。有什么疑问尽管问我。"
          },
          {
            "role": "user",
            "ko": "네, 잘 부탁드립니다.",
            "phonetic": "ne, jal butakdeurimnida.",
            "zh": "好的，请多关照。"
          }
        ],
        "tips": [
          "韩国职场初次见面常用“잘 부탁드립니다”（请多关照）来结束问候。",
          "对不熟的同事或前辈要用“합니다体”表示尊重。"
        ]
      },
      {
        "scene": "회의 시간",
        "situationZh": "开会前向同事请教会议材料和安排。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "회의가 몇 시에 시작해요?",
            "phonetic": "hoeui-ga myeot si-e sijakhaeyo?",
            "zh": "会议几点开始？"
          },
          {
            "role": "user",
            "ko": "오후 두 시에 시작해요. 자료는 준비했어요.",
            "phonetic": "ohu du si-e sijakhaeyo. jaryoneun junbihaesseoyo.",
            "zh": "下午两点开始。资料我已经准备好了。"
          },
          {
            "role": "clerk",
            "ko": "고마워요. 회의실은 어디예요?",
            "phonetic": "gomawoyo. hoeuisireun eodieyo?",
            "zh": "谢谢。会议室在哪里？"
          },
          {
            "role": "user",
            "ko": "3층에 있어요. 같이 올라가요.",
            "phonetic": "sam cheunge isseoyo. gachi ollagayo.",
            "zh": "在三楼，我们一起上去吧。"
          },
          {
            "role": "clerk",
            "ko": "좋아요. 오늘 안건은 뭐예요?",
            "phonetic": "joayo. oneul anggeoneun mwoyeyo?",
            "zh": "好的。今天讨论什么议题？"
          },
          {
            "role": "user",
            "ko": "새 프로젝트 계획이에요.",
            "phonetic": "sae peurojekteu gyehoegieyo.",
            "zh": "是关于新项目的计划。"
          }
        ],
        "tips": [
          "“자료”（资料）和“계획”（计划）是职场高频词。",
          "问楼层时用“-층”（层），如“3층”（三层）。"
        ]
      },
      {
        "scene": "출근 시간",
        "situationZh": "早晨上班刷卡进门，在门口和同事互相问候。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어서 오세요. 오늘도 힘내요!",
            "phonetic": "eoseo-oseyo. oneuldo-himnaeyo!",
            "zh": "你来啦，今天也加油！"
          },
          {
            "role": "user",
            "ko": "네, 잘 부탁드려요. 오늘 일정이 많아요?",
            "phonetic": "ne, jal-butakdeuryeoyo. oneul-iljeongi-manayo?",
            "zh": "好的，请多关照。今天日程多吗？"
          },
          {
            "role": "clerk",
            "ko": "오전에 회의가 두 개 있어요.",
            "phonetic": "ojeone-hoeui-ga-du-gae-isseoyo.",
            "zh": "上午有两个会议。"
          },
          {
            "role": "user",
            "ko": "그래요? 그럼 같이 점심 먹어요.",
            "phonetic": "geuraeyo? geureom-gati-jeomsim-meogeoyo.",
            "zh": "是吗？那我们一起吃午饭吧。"
          },
          {
            "role": "clerk",
            "ko": "좋아요. 점심에 봬요.",
            "phonetic": "joayo. jeomsime-bwaeyo.",
            "zh": "好啊，午饭时见。"
          },
          {
            "role": "user",
            "ko": "네, 그럼 먼저 들어갈게요.",
            "phonetic": "ne, geureom-meonjeo-deureogalgeyo.",
            "zh": "好的，那我先进去了。"
          }
        ],
        "tips": [
          "上班问候常说“힘내요”（加油），“출근（上班）”与“퇴근（下班）”是一对常用词。",
          "约时间见面用“-에 봬요”（……时候见），如“점심에 봬요”。"
        ]
      },
      {
        "scene": "점심 시간",
        "situationZh": "和同事在公司附近餐厅边吃边聊准备点什么。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘 점심은 뭐 먹을까요?",
            "phonetic": "oneul-jeomsimeun-mwo-meogeulkkayo?",
            "zh": "今天午饭吃什么？"
          },
          {
            "role": "user",
            "ko": "김치찌개 어때요? 얼큰하고 좋아요.",
            "phonetic": "gimchijjigae-eottaeyo? eolkeunhago-joayo.",
            "zh": "泡菜汤怎么样？辣辣的很好。"
          },
          {
            "role": "clerk",
            "ko": "저는 냉면이 먹고 싶은데요.",
            "phonetic": "jeoneun-naengmyeoni-meokgo-sipeundeoyo.",
            "zh": "我想吃冷面。"
          },
          {
            "role": "user",
            "ko": "그럼 각자 시킬까요?",
            "phonetic": "geureom-gakja-sikilkkayo?",
            "zh": "那我们就各点各的吧。"
          },
          {
            "role": "clerk",
            "ko": "네, 여기 식당은 정말 맛있어요.",
            "phonetic": "ne, yeogi-sikdangeun-jeongmal-masisseoyo.",
            "zh": "好的，这家店真的很好吃。"
          },
          {
            "role": "user",
            "ko": "좋아요. 빨리 먹고 일하러 가요.",
            "phonetic": "joayo. ppalli-meokgo-ilhareo-gayo.",
            "zh": "好啊，赶紧吃完去工作吧。"
          }
        ],
        "tips": [
          "推荐食物时用“-어때요?”（……怎么样？），如“김치찌개 어때요?”。",
          "表达想吃某物用“먹고 싶어요”，是搭伴吃饭的常用句型。"
        ]
      },
      {
        "scene": "상사에게 보고",
        "situationZh": "到上司办公室汇报项目进展并说明截止日期较紧。",
        "roles": {
          "clerk": "部长",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "네, 들어오세요. 오늘 보고할 게 있어요?",
            "phonetic": "ne, deureooseyo. oneul-bogohal-ge-isseoyo?",
            "zh": "嗯，请进。今天有什么要汇报的吗？"
          },
          {
            "role": "user",
            "ko": "네, 부장님. 프로젝트가 일정대로 진행 중이에요.",
            "phonetic": "ne, bujangnim. peurojekteuga-iljeongdaero-jinhaeng-jungieyo.",
            "zh": "是的，部长。项目正按计划进行中。"
          },
          {
            "role": "clerk",
            "ko": "잘 하고 있네요. 문제는 없어요?",
            "phonetic": "jal-hago-inneyo. munjeneun-eopseoyo?",
            "zh": "做得不错，没什么问题吧？"
          },
          {
            "role": "user",
            "ko": "마감일이 조금 빠듯하지만 잘 해내겠어요.",
            "phonetic": "magamiri-jogeum-ppadeuthajiman-jal-haenaegesseoyo.",
            "zh": "截止日期有点紧，但我会做好的。"
          },
          {
            "role": "clerk",
            "ko": "그럼 수고했어요. 필요하면 도와줄게요.",
            "phonetic": "geureom-sugohaesseoyo. piryohamyeon-dowajulgeyo.",
            "zh": "那辛苦你了，需要的话我会帮你。"
          },
          {
            "role": "user",
            "ko": "감사합니다, 부장님!",
            "phonetic": "gamsahamnida, bujangnim!",
            "zh": "谢谢您，部长！"
          }
        ],
        "tips": [
          "对上级要用敬语，汇报工作时常用“보고드리다”。",
          "“수고했어요”（辛苦了）是道谢对方付出时的惯用语。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "병원",
        "phonetic": "byeongwon",
        "meaning": "医院（名词）",
        "example": "배가 아파서 병원에 갔어요.",
        "exampleZh": "因为肚子疼，去了医院。"
      },
      {
        "word": "아프다",
        "phonetic": "apeuda",
        "meaning": "疼痛、生病（形容词/动词）",
        "example": "머리가 아파요.",
        "exampleZh": "我头疼。"
      },
      {
        "word": "아픔",
        "phonetic": "apeum",
        "meaning": "疼痛（名词）",
        "example": "아픔이 점점 심해져요.",
        "exampleZh": "疼痛越来越严重。"
      },
      {
        "word": "열이 나다",
        "phonetic": "yeori nada",
        "meaning": "发烧（惯用语）",
        "example": "어제부터 열이 나고 있어요.",
        "exampleZh": "从昨天开始一直发烧。"
      },
      {
        "word": "기침하다",
        "phonetic": "gichimhada",
        "meaning": "咳嗽（动词）",
        "example": "기침이 오래 쉬지 않아요.",
        "exampleZh": "咳嗽一直不停。"
      },
      {
        "word": "약",
        "phonetic": "yak",
        "meaning": "药（名词）",
        "example": "식사 후에 약을 먹으세요.",
        "exampleZh": "饭后请吃药。"
      },
      {
        "word": "의사",
        "phonetic": "uisa",
        "meaning": "医生（名词）",
        "example": "의사 선생님이 처방을 내주셨어요.",
        "exampleZh": "医生给我开了处方。"
      },
      {
        "word": "진찰",
        "phonetic": "jinchal",
        "meaning": "诊断、检查（名词）",
        "example": "진찰을 받고 바로 돌아왔어요.",
        "exampleZh": "做了检查就马上回来了。"
      },
      {
        "word": "주사",
        "phonetic": "jusa",
        "meaning": "打针、注射（名词）",
        "example": "한 번 주사를 맞았어요.",
        "exampleZh": "打了一针。"
      },
      {
        "word": "다치다",
        "phonetic": "dachida",
        "meaning": "受伤（动词）",
        "example": "운동하다가 다리를 다쳤어요.",
        "exampleZh": "运动的时候伤了腿。"
      }
    ],
    "article": {
      "title": "병원에 가다",
      "titleZh": "去医院",
      "paragraphs": [
        {
          "en": "어제 밤부터 열이 나고 기침도 했어요. 아침에 몸이 너무 아파서 병원에 갔어요.",
          "phonetic": "eoje bam-buteo yeori nago gichimdo haesseoyo. achime momi neomu apaseo byeongwon-e gasseoyo.",
          "zh": "昨晚开始发烧，还一直咳嗽。早上身体太难受，所以就去了医院。"
        },
        {
          "en": "병원에서 접수를 하고 진료를 기다렸어요. 사람이 많아서 조금 걸렸어요.",
          "phonetic": "byeongwon-eseo jeopsureul hago jinryoreul gidaryeosseoyo. sarami manaseo jogeum geollesseoyo.",
          "zh": "在医院挂号后等待就诊。因为人多，等了很久。"
        },
        {
          "en": "의사 선생님이 저의 증상을 잘 들으시고 약을 처방해 주셨어요.",
          "phonetic": "uisa seonsaengnimi jeoui jeungsangeul jal deureusigo yageul cheobanghae jusyeosseoyo.",
          "zh": "医生仔细听取了我的症状，并给我开了药。"
        },
        {
          "en": "약국에서 약을 사서 집에 왔어요. 약을 잘 먹으면 곧 나을 거예요.",
          "phonetic": "yaguk-eseo yageul saseo jibe wasseoyo. yageul jal meogeumyeon got naeul geoyeyo.",
          "zh": "在药房买完药回到家。好好吃药很快就会好起来。"
        }
      ],
      "phrases": [
        {
          "phrase": "병원에 가다",
          "meaning": "去医院"
        },
        {
          "phrase": "약을 먹다",
          "meaning": "吃药"
        },
        {
          "phrase": "열이 나다",
          "meaning": "发烧"
        }
      ],
      "grammar": [
        {
          "point": "-고 있다",
          "explain": "表示动作正在进行中，“正在……”。例：기침을 하고 있어요（正在咳嗽）。"
        },
        {
          "point": "-아서/어서",
          "explain": "表示“因为……所以……”。例：몸이 아파서 병원에 갔어요（因为身体难受所以去了医院）。"
        },
        {
          "point": "-(으)ㄹ 거예요",
          "explain": "表示对未来的推测或打算，“将会……”。例：곧 나을 거예요（很快就会好起来）。"
        }
      ],
      "tips": [
        "韩国医院一般先“접수(挂号)”再“진료(就诊)”，最后到“약국(药房)”取药。",
        "描述症状时常用“……가 아파요”(……疼)的句型，如“머리가 아파요”(头疼)。",
        "向医生说明发烧用“열이 나요”，咳嗽用“기침을 해요”。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“我头疼”用韩语怎么说？",
            "options": [
              "배가 아파요",
              "머리가 아파요",
              "다리가 다쳤어요",
              "목이 말라요"
            ],
            "answer": 1
          },
          {
            "q": "“昨天开始发烧”用韩语怎么说？",
            "options": [
              "어제부터 열이 났어요",
              "어제부터 기침했어요",
              "어제부터 약을 먹었어요",
              "어제부터 병원에 갔어요"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "몸이 아파서 병원에 ____（因为身体难受所以去了医院，空格填“去”的过去时）",
            "answer": "갔어요"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你或别人生病去看医生的情景，包括症状、就诊过程和医生给的服用建议。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "진료실에서",
        "situationZh": "在诊室里向医生描述自己的病情。",
        "roles": {
          "clerk": "医生",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어디가 불편하세요?",
            "phonetic": "eodiga bulpyeonhaseyo?",
            "zh": "哪里不舒服？"
          },
          {
            "role": "user",
            "ko": "어제부터 열이 나고 기침이 나요.",
            "phonetic": "eoje-buteo yeori nago gichimi nayo.",
            "zh": "从昨天开始发烧还咳嗽。"
          },
          {
            "role": "clerk",
            "ko": "목도 안 좋아요? 열이 있는지 재볼게요.",
            "phonetic": "mongdo an joayo? yeori itneunji jaebolgeyo.",
            "zh": "喉咙也不舒服吗？我给您量一下体温。"
          },
          {
            "role": "user",
            "ko": "네, 목이 좀 아파요.",
            "phonetic": "ne, mogi jom apayo.",
            "zh": "是的，喉咙有点疼。"
          },
          {
            "role": "clerk",
            "ko": "감기네요. 약을 며칠 동안 드세요.",
            "phonetic": "gamgineyo. yageul myeochil dongan deuseyo.",
            "zh": "是感冒。请吃几天药。"
          },
          {
            "role": "user",
            "ko": "고맙습니다. 얼마나 먹어야 해요?",
            "phonetic": "gomapseumnida. eolmana meogeoya haeyo?",
            "zh": "谢谢您。要吃多久呢？"
          },
          {
            "role": "clerk",
            "ko": "하루에 세 번, 식사 후에 먹으면 돼요.",
            "phonetic": "harue se boen, sisa hue meogeumyeon dwaeyo.",
            "zh": "一天三次，饭后吃就可以了。"
          }
        ],
        "tips": [
          "描述病情常用“……가 아파요”，如“목이 아파요”(喉咙疼)。",
          "问病程可以说“언제부터 아팠어요?”(从什么时候开始疼的)。"
        ]
      },
      {
        "scene": "약국에서",
        "situationZh": "在药房取药，询问服药方法。",
        "roles": {
          "clerk": "药剂师",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 처방전을 보여 주세요.",
            "phonetic": "annyeonghaseyo. cheobangjeoneul boyeo juseyo.",
            "zh": "您好。请给我看一下处方。"
          },
          {
            "role": "user",
            "ko": "네, 여기 있어요. 이 약은 어떻게 먹어요?",
            "phonetic": "ne, yeogi isseoyo. i yageun eotteoke meogeoyo?",
            "zh": "好的，在这里。这个药怎么吃？"
          },
          {
            "role": "clerk",
            "ko": "아침과 저녁, 식사 전에 한 번씩 먹으세요.",
            "phonetic": "achimgwa jeonyeok, sisa jeone han beonssik meogeuseyo.",
            "zh": "早饭和晚饭前各吃一次。"
          },
          {
            "role": "user",
            "ko": "물로 먹으면 돼요?",
            "phonetic": "mullo meogeumyeon dwaeyo?",
            "zh": "用水送服就可以吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 미지근한 물로 드세요. 드시는 동안 운전은 조심하세요.",
            "phonetic": "ne, mijigeunhan mullo deuseyo. deusineun dongan unjeoneun josimhaseyo.",
            "zh": "是的，用温水送服。吃药期间驾车要注意安全。"
          },
          {
            "role": "user",
            "ko": "네, 알겠습니다. 고맙습니다.",
            "phonetic": "ne, algetseumnida. gomapseumnida.",
            "zh": "好的，我明白了。谢谢您。"
          }
        ],
        "tips": [
          "询问用法说“어떻게 먹어요?”(怎么吃？)。",
          "“식사 전에”(饭前)、“식사 후에”(饭后)是重要的服药时间表达。"
        ]
      },
      {
        "scene": "접수처에서",
        "situationZh": "在医院挂号处办理初次就诊挂号并询问费用。",
        "roles": {
          "clerk": "挂号员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 어디가 아프세요?",
            "phonetic": "annyeonghaseyo. eodiga-apeuseyo?",
            "zh": "您好，哪里不舒服？"
          },
          {
            "role": "user",
            "ko": "배가 아파서 왔어요. 진료를 받고 싶어요.",
            "phonetic": "baega-apaseo-wasseoyo. jillyoreul-batgo-sipeoyo.",
            "zh": "我肚子疼来看病，想挂号就诊。"
          },
          {
            "role": "clerk",
            "ko": "처음 오셨으니 여기서 접수하시면 돼요.",
            "phonetic": "cheoeum-oseyeosseuni-yeogiseo-jeopsuhasimyeon-dwaeyo.",
            "zh": "您是第一次来，在这里挂号就行。"
          },
          {
            "role": "user",
            "ko": "접수비는 얼마예요?",
            "phonetic": "jeopsubineun-eolmayeyo?",
            "zh": "挂号费是多少？"
          },
          {
            "role": "clerk",
            "ko": "오천 원이에요. 여기에 건강보험증 있으세요?",
            "phonetic": "ocheon-wonieyo. yeogie-gyeonggangboheomjeung-isseuseyo?",
            "zh": "五千韩元，您带医保卡了吗？"
          },
          {
            "role": "user",
            "ko": "네, 여기 있어요. 감사합니다.",
            "phonetic": "ne, yeogi-isseoyo. gamsahamnida.",
            "zh": "带了，在这里，谢谢您。"
          }
        ],
        "tips": [
          "挂号叫“접수”，首次就诊要填表并出示医保卡（건강보험증）。",
          "描述身体不适时用“어디가 아파요?”（哪里疼？）。"
        ]
      },
      {
        "scene": "검사실에서",
        "situationZh": "医生安排检查，在检查室配合护士量血压并抽血。",
        "roles": {
          "clerk": "护士",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "혈압을 재볼게요. 소매를 걷어 주세요.",
            "phonetic": "hyeorabeul-jaebolgeyo. somaereul-geodeo-juseyo.",
            "zh": "我来量血压，请把袖子卷起来。"
          },
          {
            "role": "user",
            "ko": "네, 이렇게 하면 되나요?",
            "phonetic": "ne, ireoke-hamyeon-doeynayo?",
            "zh": "好的，这样可以吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 좋아요. 오늘 아침은 드셨어요?",
            "phonetic": "ne, joayo. oneul-achimeun-deusyeosseoyo?",
            "zh": "可以，很好。今天早上吃东西了吗？"
          },
          {
            "role": "user",
            "ko": "아니요, 아직 안 먹었어요.",
            "phonetic": "aniyo, ajik-an-meogeosseoyo.",
            "zh": "没有，还没吃。"
          },
          {
            "role": "clerk",
            "ko": "그럼 피 검사가 필요해요. 잠시 기다리세요.",
            "phonetic": "geureom-pi-geomsaga-piryohaeyo. jamsi-gidariseyo.",
            "zh": "那就需要做血液检查，请稍等一下。"
          },
          {
            "role": "user",
            "ko": "네, 알겠습니다.",
            "phonetic": "ne, algesseumnida.",
            "zh": "好的，明白了。"
          }
        ],
        "tips": [
          "“혈압을 재다”是量血压，“피 검사”是抽血检查。",
          "是否吃过饭的问法“밥을 먹다/안 먹었다”在检查前很常被问。"
        ]
      },
      {
        "scene": "주사실에서",
        "situationZh": "在注射室准备打针前有些害怕，与护士沟通。",
        "roles": {
          "clerk": "护士",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "주사 맞을 준비하세요. 살짝 아파요.",
            "phonetic": "jusa-majeul-junbihaseyo. saljjak-apayo.",
            "zh": "请准备打针，会稍微有点疼。"
          },
          {
            "role": "user",
            "ko": "저는 주사가 무서워요. 많이 아파요?",
            "phonetic": "jeoneun-jusaga-museowoyo. mani-apayo?",
            "zh": "我怕打针，会很疼吗？"
          },
          {
            "role": "clerk",
            "ko": "괜찮아요. 금방 끝나요. 조금만 참으세요.",
            "phonetic": "gwaenchanayo. geumbang-kkeutnayo. jogeumman-chameuseyo.",
            "zh": "没关系，很快就结束，忍一下就好。"
          },
          {
            "role": "user",
            "ko": "네, 그럼 부탁드려요.",
            "phonetic": "ne, geureom-butakdeuryeoyo.",
            "zh": "好的，那拜托您了。"
          },
          {
            "role": "clerk",
            "ko": "다 됐어요. 잘 참으셨어요.",
            "phonetic": "da-dwaesseoyo. jal-chameusyeosseoyo.",
            "zh": "打完了，您忍得很好。"
          },
          {
            "role": "user",
            "ko": "아, 고마워요. 이제 괜찮아요.",
            "phonetic": "a, gomawoyo. ije-gwaenchanayo.",
            "zh": "啊，谢谢您，现在好多了。"
          }
        ],
        "tips": [
          "打针说“주사를 맞다”，怕针说“주사가 무섭다”。",
          "安慰别人用“괜찮아요”（没关系）和“조금만 참으세요”（忍一下）。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "은행",
        "phonetic": "eunhaeng",
        "meaning": "银行（名词）",
        "example": "은행에 돈을 예금했어요.",
        "exampleZh": "我把钱存在了银行。"
      },
      {
        "word": "돈",
        "phonetic": "don",
        "meaning": "钱（名词）",
        "example": "돈을 좀 찾고 싶어요.",
        "exampleZh": "我想取一些钱。"
      },
      {
        "word": "환전",
        "phonetic": "hwanjeon",
        "meaning": "换钱、兑换外币（名词）",
        "example": "공항에서 환전을 했어요.",
        "exampleZh": "我在机场兑换了外币。"
      },
      {
        "word": "계좌",
        "phonetic": "gyejwa",
        "meaning": "账户（名词）",
        "example": "계좌를 새로 만들고 싶어요.",
        "exampleZh": "我想新开一个账户。"
      },
      {
        "word": "통장",
        "phonetic": "tongjang",
        "meaning": "存折、活期存折（名词）",
        "example": "통장에 돈이 얼마 있어요?",
        "exampleZh": "存折上有多少钱？"
      },
      {
        "word": "현금",
        "phonetic": "hyeongeum",
        "meaning": "现金（名词）",
        "example": "현금이 부족해요.",
        "exampleZh": "现金不够。"
      },
      {
        "word": "카드",
        "phonetic": "kadeu",
        "meaning": "卡（名词）",
        "example": "카드로 계산해도 돼요?",
        "exampleZh": "可以用卡结算吗？"
      },
      {
        "word": "이자",
        "phonetic": "ija",
        "meaning": "利息（名词）",
        "example": "예금 이자가 좋은 편이에요.",
        "exampleZh": "存款利率还算不错。"
      },
      {
        "word": "인출",
        "phonetic": "inchul",
        "meaning": "取款、提取（名词）",
        "example": "ATM에서 현금을 인출했어요.",
        "exampleZh": "我在ATM取出了现金。"
      },
      {
        "word": "환율",
        "phonetic": "hwanyul",
        "meaning": "汇率（名词）",
        "example": "오늘 환율이 좀 올랐어요.",
        "exampleZh": "今天的汇率涨了一些。"
      }
    ],
    "article": {
      "title": "은행에서 돈을 찾다",
      "titleZh": "在银行取钱",
      "paragraphs": [
        {
          "en": "오늘은 은행에 가서 돈을 좀 찾으려고 해요. 카드와 통장을 가져갔어요.",
          "phonetic": "oneureun eunhaeng-e gaseo doneul jom chajeuryeogo haeyo. kadeuwa tongjangeul gajyeogasseoyo.",
          "zh": "今天打算去银行取些钱。我带上了卡和存折。"
        },
        {
          "en": "은행에 사람이 많아서 번호표를 뽑고 조금 기다렸어요.",
          "phonetic": "eunhaeng-e sarami manaseo beonhopyeoreul ppopgo jogeum gidaryeosseoyo.",
          "zh": "银行人很多，我取了号稍微等了一会儿。"
        },
        {
          "en": "창구에서 여권이 필요하다고 해서 환전도 함께 했어요.",
          "phonetic": "changgu-eseo yeogwoni piryohadago haeseo hwanjeondo hamkke haesseoyo.",
          "zh": "柜台说需要护照，所以顺便一起换了钱。"
        },
        {
          "en": "오늘 환율이 좋아서 생각보다 많은 돈을 받았어요.",
          "phonetic": "oneul hwanyuri joaseo saenggakboda maneun doneul batasseoyo.",
          "zh": "今天汇率不错，比想象中换到了更多的钱。"
        }
      ],
      "phrases": [
        {
          "phrase": "돈을 찾다",
          "meaning": "取钱"
        },
        {
          "phrase": "돈을 넣다",
          "meaning": "存钱"
        },
        {
          "phrase": "환전을 하다",
          "meaning": "换钱"
        },
        {
          "phrase": "계좌를 만들다",
          "meaning": "开户"
        }
      ],
      "grammar": [
        {
          "point": "-(으)려고 하다",
          "explain": "表示“打算做……”。接在动词词干后。例：돈을 찾으려고 해요（打算去取钱）。"
        },
        {
          "point": "-(아)서 / -(으)니까",
          "explain": "表示原因，“因为……”。例：환율이 좋아서 많이 받았어요（因为汇率好，所以拿到了很多）。"
        },
        {
          "point": "보다",
          "explain": "跟在名词后表示比较，“比……”。例：생각보다 많아요（比想象中多）。"
        }
      ],
      "tips": [
        "韩国银行开户一般需要护照或外国人登录证。",
        "换钱说“환전”，取钱说“돈을 찾다”，存钱说“돈을 넣다”，注意区分。",
        "ATM叫“현금인출기”或直接叫“ATM”，很常用。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“我想换钱”用韩语怎么说？",
            "options": [
              "돈을 찾고 싶어요",
              "환전하고 싶어요",
              "돈을 넣고 싶어요",
              "계좌를 만들고 싶어요"
            ],
            "answer": 1
          },
          {
            "q": "“需要护照”用韩语怎么说？",
            "options": [
              "여권이 필요해요",
              "카드가 필요해요",
              "통장이 필요해요",
              "현금이 필요해요"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "환율이 좋아서 생각____ 많은 돈을 받았어요.（因为汇率好，所以比想象中拿到了更多的钱）",
            "answer": "보다"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你去银行兑换外币或在ATM取钱的经过，包括带了什么证件、汇率如何。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "은행 창구에서",
        "situationZh": "在银行柜台办理取款业务。",
        "roles": {
          "clerk": "银行职员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 무엇을 도와드릴까요?",
            "phonetic": "annyeonghaseyo. mueoseul dowadeurilkkayo?",
            "zh": "您好。有什么可以帮您的吗？"
          },
          {
            "role": "user",
            "ko": "현금을 좀 찾고 싶어요.",
            "phonetic": "hyeongeumeul jom chatgo sipeoyo.",
            "zh": "我想取一些现金。"
          },
          {
            "role": "clerk",
            "ko": "얼마를 찾으세요? 통장이나 카드가 있으세요?",
            "phonetic": "eolmareul chajeuseyo? tongjangeona kadeuga isseuseyo?",
            "zh": "要取多少？有存折或卡吗？"
          },
          {
            "role": "user",
            "ko": "통장으로 50만 원을 찾고 싶어요.",
            "phonetic": "tongjangeuro osipman woneul chatgo sipeoyo.",
            "zh": "我想用存折取50万韩元。"
          },
          {
            "role": "clerk",
            "ko": "여기 서류에 사인해 주세요. 잠시만 기다려 주세요.",
            "phonetic": "yeogi seoryue sainhae juseyo. jamsiman gidaryeo juseyo.",
            "zh": "请在这份文件上签字，请稍等。"
          },
          {
            "role": "user",
            "ko": "네, 고맙습니다.",
            "phonetic": "ne, gomapseumnida.",
            "zh": "好的，谢谢您。"
          }
        ],
        "tips": [
          "取款说“돈을 찾다”，说金额可用“……만 원”(……万韩元)。",
          "柜台取款一般需要签字确认。"
        ]
      },
      {
        "scene": "환전소에서",
        "situationZh": "在换钱所把美元换成韩元。",
        "roles": {
          "clerk": "工作人员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "환전하러 오셨나요?",
            "phonetic": "hwanjeonharyeo osyeonnayo?",
            "zh": "您是来换钱的吗？"
          },
          {
            "role": "user",
            "ko": "네, 달러를 원화로 바꾸고 싶어요.",
            "phonetic": "ne, dalleoreul wonhwaro bakkugo sipeoyo.",
            "zh": "是的，我想把美元换成韩元。"
          },
          {
            "role": "clerk",
            "ko": "오늘 환율이 좋아요. 지금 많이 받으실 수 있어요.",
            "phonetic": "oneul hwanyuri joayo. jigeum mani badeusil su isseoyo.",
            "zh": "今天的汇率不错。现在可以换很多。"
          },
          {
            "role": "user",
            "ko": "여기에 300달러를 바꿔 주세요.",
            "phonetic": "yeogie sambaek dalleoreul bakkwo juseyo.",
            "zh": "请在这里换300美元。"
          },
          {
            "role": "clerk",
            "ko": "네, 여권을 보여 주시겠어요?",
            "phonetic": "ne, yeogwoneul boyeo jusigesseoyo?",
            "zh": "好的，请出示一下护照好吗？"
          },
          {
            "role": "user",
            "ko": "여기 있어요. 모두 얼마에요?",
            "phonetic": "yeogi isseoyo. modu eolmaeyo?",
            "zh": "在这里。一共是多少？"
          },
          {
            "role": "clerk",
            "ko": "오늘 환율로 33만 원입니다.",
            "phonetic": "oneul hwanyullo samsipsamman wonimnida.",
            "zh": "按今天的汇率是33万韩元。"
          }
        ],
        "tips": [
          "换钱说“환전”，说货币可以加“달러(美元)、원화(韩元)”。",
          "兑换外币通常需要出示护照。"
        ]
      },
      {
        "scene": "ATM기기에서",
        "situationZh": "在自动取款机前取款，接受大堂经理的指导。",
        "roles": {
          "clerk": "大堂经理",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "ATM을 처음 쓰시면 안내해 드릴게요.",
            "phonetic": "aetem-eul-cheoeum-sseusimyeon-annaehae-deurilgeyo.",
            "zh": "如果是第一次用自动取款机，我为您介绍一下。"
          },
          {
            "role": "user",
            "ko": "현금을 인출하고 싶어요. 어떻게 해요?",
            "phonetic": "hyeongeumeul-inchulhago-sipeoyo. eotteoke-haeyo?",
            "zh": "我想取现金，怎么操作？"
          },
          {
            "role": "clerk",
            "ko": "카드를 넣고 비밀번호를 눌러 주세요.",
            "phonetic": "kadeureul-neotgo-bimilbeonhoreul-nulleo-juseyo.",
            "zh": "插入银行卡并输入密码即可。"
          },
          {
            "role": "user",
            "ko": "한 번에 얼마나 인출할 수 있어요?",
            "phonetic": "han-beone-eolmana-inchulhal-su-isseoyo?",
            "zh": "一次最多能取多少？"
          },
          {
            "role": "clerk",
            "ko": "한 번에 백만 원까지 가능해요.",
            "phonetic": "han-beone-baengman-wonkkaji-ganeunghaeyo.",
            "zh": "一次最多可取一百万韩元。"
          },
          {
            "role": "user",
            "ko": "네, 잘 알았어요. 감사합니다.",
            "phonetic": "ne, jal-arasseoyo. gamsahamnida.",
            "zh": "好的，明白了，谢谢您。"
          }
        ],
        "tips": [
          "取款用“인출하다”，存款用“입금하다”，是银行常用动词。",
          "提醒密码时用“비밀번호를 누르다”（输入密码）。"
        ]
      },
      {
        "scene": "계좌 개설",
        "situationZh": "在银行柜台申请开一个新账户。",
        "roles": {
          "clerk": "银行柜员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 무엇을 도와드릴까요?",
            "phonetic": "annyeonghaseyo. mueoseul-dowadeurilkkayo?",
            "zh": "您好，需要办理什么业务？"
          },
          {
            "role": "user",
            "ko": "새 계좌를 만들고 싶어요.",
            "phonetic": "sae-gyejwareul-mandeulgo-sipeoyo.",
            "zh": "我想开一个新账户。"
          },
          {
            "role": "clerk",
            "ko": "신분증이 필요해요. 가져오셨어요?",
            "phonetic": "sinbunjeungi-piryohaeyo. gajyeooseyeosseoyo?",
            "zh": "需要身份证，您带来了吗？"
          },
          {
            "role": "user",
            "ko": "네, 여기 있어요. 이 카드는 뭔가요?",
            "phonetic": "ne, yeogi-isseoyo. i-kadeuneun-mwongayo?",
            "zh": "带了，在这里。这张卡是什么？"
          },
          {
            "role": "clerk",
            "ko": "체크카드예요. 현금처럼 쓸 수 있어요.",
            "phonetic": "chekeukadeuyeyo. hyeongeumcheoreom-sseul-su-isseoyo.",
            "zh": "是借记卡，可以像现金一样使用。"
          },
          {
            "role": "user",
            "ko": "좋아요. 그걸로 만들어 주세요.",
            "phonetic": "joayo. geugeollo-mandeureo-juseyo.",
            "zh": "好啊，那就办这个吧。"
          }
        ],
        "tips": [
          "“계좌를 개설하다”（开户）是银行常见表达。",
          "借记卡叫“체크카드”，信用卡叫“신용카드”。"
        ]
      },
      {
        "scene": "송금하기",
        "situationZh": "在柜台向房东转账支付房租。",
        "roles": {
          "clerk": "银行柜员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어떤 걸 도와드릴까요?",
            "phonetic": "eotteon-geol-dowadeurilkkayo?",
            "zh": "需要什么帮助？"
          },
          {
            "role": "user",
            "ko": "집주인에게 돈을 송금하고 싶어요.",
            "phonetic": "jipjuinege-doneul-songgeumhago-sipeoyo.",
            "zh": "我想转账给房东。"
          },
          {
            "role": "clerk",
            "ko": "받는 분의 계좌번호를 알려 주세요.",
            "phonetic": "batneun-bunui-gyejwa-beonhoreul-allyeo-juseyo.",
            "zh": "请把收款人的账号告诉我。"
          },
          {
            "role": "user",
            "ko": "여기에 적어 왔어요.",
            "phonetic": "yeogie-jeogeo-wasseoyo.",
            "zh": "我写在纸上带来了。"
          },
          {
            "role": "clerk",
            "ko": "이쪽 창구에서 하시면 편해요.",
            "phonetic": "ijjok-changgu-eseo-hasimyeon-pyeonhaeyo.",
            "zh": "在对面这个柜台办理会更方便。"
          },
          {
            "role": "user",
            "ko": "그럼 그쪽에서 할게요. 감사합니다.",
            "phonetic": "geureom-geujjogeseo-halgeyo. gamsahamnida.",
            "zh": "那就在那边办吧，谢谢您。"
          }
        ],
        "tips": [
          "转账说“송금하다”，收款方说“받는 사람/받는 분”。",
          "柜台叫“창구”，指引换窗口时常用“이쪽/저쪽 창구”。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "호텔",
        "phonetic": "hotel",
        "meaning": "酒店（名词）",
        "example": "서울에 있는 호텔을 예약했어요.",
        "exampleZh": "我预约了首尔的一家酒店。"
      },
      {
        "word": "예약",
        "phonetic": "yeyak",
        "meaning": "预约、预订（名词）",
        "example": "이 호텔에 방을 예약하고 싶어요.",
        "exampleZh": "我想在这家酒店订一个房间。"
      },
      {
        "word": "객실",
        "phonetic": "gaeksil",
        "meaning": "客房（名词）",
        "example": "객실이 아주 깨끗해요.",
        "exampleZh": "客房非常干净。"
      },
      {
        "word": "체크인",
        "phonetic": "chekeuin",
        "meaning": "办理入住（名词）",
        "example": "오후 3시부터 체크인이 가능해요.",
        "exampleZh": "从下午3点起可以办理入住。"
      },
      {
        "word": "체크아웃",
        "phonetic": "chekeuaut",
        "meaning": "退房（名词）",
        "example": "체크아웃은 11시까지예요.",
        "exampleZh": "退房时间是11点之前。"
      },
      {
        "word": "프런트",
        "phonetic": "peureonteu",
        "meaning": "前台（名词）",
        "example": "프런트에 문의해 보세요.",
        "exampleZh": "请到前台咨询。"
      },
      {
        "word": "창문",
        "phonetic": "changmun",
        "meaning": "窗户（名词）",
        "example": "방 안에 창문이 있어요.",
        "exampleZh": "房间里有一扇窗户。"
      },
      {
        "word": "침대",
        "phonetic": "chimdae",
        "meaning": "床（名词）",
        "example": "침대가 부드럽고 편해요.",
        "exampleZh": "床又软又舒服。"
      },
      {
        "word": "수건",
        "phonetic": "sugeon",
        "meaning": "毛巾（名词）",
        "example": "수건을 하나 더 주세요.",
        "exampleZh": "请再给我一条毛巾。"
      },
      {
        "word": "와이파이",
        "phonetic": "waipai",
        "meaning": "无线网络 Wi-Fi（名词）",
        "example": "와이파이 비밀번호가 뭐예요?",
        "exampleZh": "Wi-Fi密码是多少？"
      }
    ],
    "article": {
      "title": "호텔에서의 하루",
      "titleZh": "在酒店的一天",
      "paragraphs": [
        {
          "en": "서울 여행 중에 좋은 호텔을 예약했어요. 오후에 도착해서 체크인을 했어요.",
          "phonetic": "seoul yeohaeng jung-e joheun hoteureul yeyakhaesseoyo. ohu-e dochakaeseo chekeuin-eul haesseoyo.",
          "zh": "首尔旅行期间预约了一家很好的酒店。下午到达后办理了入住。"
        },
        {
          "en": "프런트에서 직원이 친절하게 안내해 주셨어요. 방으로 가서 짐을 풀었어요.",
          "phonetic": "peureonteu-eseo jigwoni chinjeolhage annaehae jusyeosseoyo. bang-euro gaseo jimeul pureosseoyo.",
          "zh": "前台工作人员热情地给我指路。我回到房间放下行李。"
        },
        {
          "en": "새침하고 깨끗한 객실이 정말 좋았어요. 창문 밖으로 도시가 보였어요.",
          "phonetic": "saechimhago kkaekkeuthan gaeksiri jeongmal joasseoyo. changmun bakk-euro dosiga boyeosseoyo.",
          "zh": "崭新整洁的客房真的很棒。窗外可以看到城市。"
        },
        {
          "en": "아침에는 호텔 식당에서 맛있는 식사를 했어요. 체크아웃은 11시까지라서 여유가 있었어요.",
          "phonetic": "achimeneun hotel sikdang-eseo masinneun siksareul haesseoyo. chekeuaut-eun yeolhan si kkajiraseo yeoyuga isseosseoyo.",
          "zh": "早上在酒店餐厅享用了美味的早餐。退房是11点前，所以时间很充裕。"
        }
      ],
      "phrases": [
        {
          "phrase": "방을 예약하다",
          "meaning": "订房间"
        },
        {
          "phrase": "체크인을 하다",
          "meaning": "办理入住"
        },
        {
          "phrase": "체크아웃을 하다",
          "meaning": "退房"
        },
        {
          "phrase": "방을 바꾸다",
          "meaning": "换房间"
        }
      ],
      "grammar": [
        {
          "point": "-부터 …까지",
          "explain": "表示“从……到……”的时间范围。例：오후 3시부터 체크인이 가능해요（从下午3点起可以入住）。"
        },
        {
          "point": "-(으)ㄹ 수 있어요",
          "explain": "表示“能够……、可以……”。例：창문 밖으로 도시를 볼 수 있어요（透过窗外可以看到城市）。"
        },
        {
          "point": "밖으로",
          "explain": "表示方向“向外面”。“밖”是“外面”，“-으로”表朝向。例：창문 밖으로 도시가 보여요（窗外可以看到城市）。"
        }
      ],
      "tips": [
        "韩国酒店的入住时间一般在下午3点，退房在上午11点。",
        "要求换房间、加毛巾等都可以到前台(프런트)沟通。",
        "预订房间用“방을 예약하다”，入住用“체크인”，退房用“체크아웃”。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“我想订一个房间”用韩语怎么说？",
            "options": [
              "방을 바꾸고 싶어요",
              "방을 예약하고 싶어요",
              "방을 청소할래요",
              "방을 나가고 싶어요"
            ],
            "answer": 1
          },
          {
            "q": "“退房时间是11点”用韩语怎么说？",
            "options": [
              "체크인은 11시예요",
              "체크아웃은 9시예요",
              "체크아웃은 11시까지예요",
              "체크인은 11시까지예요"
            ],
            "answer": 2
          }
        ],
        "fill": [
          {
            "q": "오후 3시____ 체크인이 가능해요.（从下午3点起可以办理入住）",
            "answer": "부터"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你在酒店办理入住时的情景，包括预订的房间、入住时间以及你对房间的初步印象。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "호텔 프런트에서",
        "situationZh": "在酒店前台办理入住手续。",
        "roles": {
          "clerk": "前台工作人员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 예약하셨나요?",
            "phonetic": "annyeonghaseyo. yeyakhassyeonayo?",
            "zh": "您好。您预订过了吗？"
          },
          {
            "role": "user",
            "ko": "네, 김민수 예약을 했어요.",
            "phonetic": "ne, gimminsu yeyageul haesseoyo.",
            "zh": "是的，我以金敏秀的名字预订了。"
          },
          {
            "role": "clerk",
            "ko": "확인해 볼게요. 여권을 보여 주시겠어요?",
            "phonetic": "hwaginhaebolgeyo. yeogwoneul boyeo jusigesseoyo?",
            "zh": "我核实一下。请出示护照好吗？"
          },
          {
            "role": "user",
            "ko": "여기 있어요. 이틀 묵을 거예요.",
            "phonetic": "yeogi isseoyo. iteul mugeul geoyeyo.",
            "zh": "在这里。我打算住两天。"
          },
          {
            "role": "clerk",
            "ko": "확인됐어요. 3층 301호입니다. 카드까지 여기 있습니다.",
            "phonetic": "hwagin-dwaesseoyo. sam cheung sambaegi-ho imnida. kadeukkaji yeogi itseumnida.",
            "zh": "已确认。是301号房间。房卡也在这里。"
          },
          {
            "role": "user",
            "ko": "고맙습니다. 아침은 어디에서 먹어요?",
            "phonetic": "gomapseumnida. achimeun eodieseo meogeoyo?",
            "zh": "谢谢。早餐在哪里吃？"
          },
          {
            "role": "clerk",
            "ko": "1층 식당에서 7시부터 9시까지예요.",
            "phonetic": "il cheung sikdang-eseo ilgop si-buteo ahop si kkajiyeyo.",
            "zh": "在一楼餐厅，从7点到9点。"
          }
        ],
        "tips": [
          "办理入住时说“체크인 부탁드립니다”(麻烦办一下入住)。",
          "确认预订会说“예약을 확인하다”(确认预订)。"
        ]
      },
      {
        "scene": "객실 안에서",
        "situationZh": "入住后在房间内遇到问题，打电话向前台求助。",
        "roles": {
          "clerk": "前台工作人员",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "여보세요? 프런트인가요?",
            "phonetic": "yeoboseyo? peureonteuingayo?",
            "zh": "喂？是前台吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 프런트입니다. 어떻게 도와드릴까요?",
            "phonetic": "ne, peureonteuimnida. eotteoke dowadeurilkkayo?",
            "zh": "是的，这里是前台。有什么可以帮您？"
          },
          {
            "role": "user",
            "ko": "방에 수건이 부족해요. 하나 더 보내 주시겠어요?",
            "phonetic": "bang-e sugeoni bujokhaeyo. hana deo bonae jusigesseoyo?",
            "zh": "房间里毛巾不够，能再送一条来吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 곧 보내 드릴게요. 또 필요한 게 있으세요?",
            "phonetic": "ne, got bonae deurilgeyo. tto piryohan ge isseuseyo?",
            "zh": "好的，马上给您送去。还需要别的吗？"
          },
          {
            "role": "user",
            "ko": "와이파이 비밀번호도 알려 주세요.",
            "phonetic": "waipai bimilbeonhodo allyeo juseyo.",
            "zh": "也请告诉我Wi-Fi密码。"
          },
          {
            "role": "clerk",
            "ko": "와이파이는 방 번호 뒤에 1234예요.",
            "phonetic": "waipaineun bang beonho dwie ilsamsa yeoyo.",
            "zh": "Wi-Fi密码是房间号加1234。"
          },
          {
            "role": "user",
            "ko": "네, 알겠습니다. 감사합니다.",
            "phonetic": "ne, algetseumnida. gamsahamnida.",
            "zh": "好的，我明白了。谢谢您。"
          }
        ],
        "tips": [
          "打电话接听常说“여보세요?”(喂?)。",
          "“보내 주세요”(请送来)、“비밀번호”(密码)是酒店常用表达。"
        ]
      },
      {
        "scene": "룸서비스 주문",
        "situationZh": "在客房打电话向客房送餐服务点餐。",
        "roles": {
          "clerk": "客房送餐服务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 룸서비스입니다.",
            "phonetic": "annyeonghaseyo. rumsseobiseuimnida.",
            "zh": "您好，这里是客房送餐服务。"
          },
          {
            "role": "user",
            "ko": "오늘 정식이 먹고 싶어요.",
            "phonetic": "oneul-jeongsigi-meokgo-sipeoyo.",
            "zh": "我想吃今天的套餐。"
          },
          {
            "role": "clerk",
            "ko": "정식은 오후 두 시까지만 가능해요.",
            "phonetic": "jeongsigeun-ohu-du-sikkajiman-ganeunghaeyo.",
            "zh": "套餐只在下午两点前提供。"
          },
          {
            "role": "user",
            "ko": "그럼 김밥과 콜라 주세요.",
            "phonetic": "geureom-gimbap-gwa-kolla-juseyo.",
            "zh": "那就来紫菜包饭和可乐吧。"
          },
          {
            "role": "clerk",
            "ko": "네, 15분 후에 방으로 가져다 드릴게요.",
            "phonetic": "ne, sibobun-hue-bangeuro-gajeoda-deurilgeyo.",
            "zh": "好的，15分钟后送到房间。"
          },
          {
            "role": "user",
            "ko": "네, 기다릴게요. 고마워요.",
            "phonetic": "ne, gidarilgeyo. gomawoyo.",
            "zh": "好的，我等您，谢谢。"
          }
        ],
        "tips": [
          "客房送餐叫“룸서비스”，点“식사”或“정식（套餐）”很常见。",
          "送餐到房用“가져다 드리다”（送来为您），是酒店常用敬语。"
        ]
      },
      {
        "scene": "조식 뷔페에서",
        "situationZh": "早餐时间在自助餐厅向服务员询问取餐位置。",
        "roles": {
          "clerk": "服务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "조식 시간은 오전 7시부터 10시까지예요.",
            "phonetic": "josik-siganeun-ojeon-ilsibuteo-yeolsikkaji-yeyo.",
            "zh": "早餐时间是早上7点到10点。"
          },
          {
            "role": "user",
            "ko": "커피는 어디에 있어요?",
            "phonetic": "keopineun-eodie-isseoyo?",
            "zh": "咖啡在哪里？"
          },
          {
            "role": "clerk",
            "ko": "저쪽 음료 코너에 있어요.",
            "phonetic": "jeojjok-eumnyo-koneoe-isseoyo.",
            "zh": "在那边的饮料区。"
          },
          {
            "role": "user",
            "ko": "토스트도 있나요?",
            "phonetic": "toseuteudo-inayo?",
            "zh": "有吐司吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 빵 코너에 매일 준비돼 있어요.",
            "phonetic": "ne, ppang-koneoe-maeil-junbidoe-isseoyo.",
            "zh": "有的，面包区每天都有准备。"
          },
          {
            "role": "user",
            "ko": "네, 잘 알겠어요. 감사합니다.",
            "phonetic": "ne, jal-algesseoyo. gamsahamnida.",
            "zh": "好的，明白了，谢谢您。"
          }
        ],
        "tips": [
          "早餐叫“조식”，取餐自助区叫“뷔페”。",
          "酒店的取餐区常用“코너”（区域），如“빵 코너”“음료 코너”。"
        ]
      },
      {
        "scene": "체크아웃할 때",
        "situationZh": "退房时结算房费，并向前台询问寄存行李事宜。",
        "roles": {
          "clerk": "前台服务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "체크아웃을 도와드릴까요?",
            "phonetic": "chekeuaut-eul-dowadeurilkkayo?",
            "zh": "需要帮您办理退房吗？"
          },
          {
            "role": "user",
            "ko": "네, 열두 시에 비행기예요. 짐을 먼저 맡길 수 있어요?",
            "phonetic": "ne, yeoldusi-e-bihaenggiyeyo. jimeul-meonjeo-matgil-su-isseoyo?",
            "zh": "是的，我12点的飞机，能先寄存一下行李吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 가능해요. 프런트에 맡기시면 돼요.",
            "phonetic": "ne, ganeunghaeyo. peureunte-e-matgisimyeon-dwaeyo.",
            "zh": "可以的，寄存在前台就行。"
          },
          {
            "role": "user",
            "ko": "추가 요금이 있어요?",
            "phonetic": "chuga-yogeumi-isseoyo?",
            "zh": "有额外费用吗？"
          },
          {
            "role": "clerk",
            "ko": "아니요, 짐 보관은 무료예요.",
            "phonetic": "aniyo, jim-bogwaneun-muryoyeyo.",
            "zh": "没有，行李寄存是免费的。"
          },
          {
            "role": "user",
            "ko": "좋아요. 그렇게 할게요. 감사합니다!",
            "phonetic": "joayo. geureoke-halgeyo. gamsahamnida!",
            "zh": "太好了，那就这样办，谢谢您！"
          }
        ],
        "tips": [
          "入住叫“체크인”，退房叫“체크아웃”。",
          "寄存行李说“짐을 맡기다”，问是否收费说“요금이 있나요?/무료예요?”。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "머리",
        "phonetic": "meori",
        "meaning": "名词(头) 头发",
        "example": "머리가 길어요.",
        "exampleZh": "我的头发很长。"
      },
      {
        "word": "미용실",
        "phonetic": "miyongsil",
        "meaning": "名词 美发厅、理发店",
        "example": "미용실에 갔어요.",
        "exampleZh": "我去了美发厅。"
      },
      {
        "word": "파마",
        "phonetic": "pama",
        "meaning": "名词 烫发",
        "example": "파마를 하고 싶어요.",
        "exampleZh": "我想烫头发。"
      },
      {
        "word": "염색",
        "phonetic": "yeomsaek",
        "meaning": "名词 染发",
        "example": "검은색으로 염색했어요.",
        "exampleZh": "我把头发染成黑色了。"
      },
      {
        "word": "이발",
        "phonetic": "ibal",
        "meaning": "名词 理发(剪发)",
        "example": "이발을 하러 갔어요.",
        "exampleZh": "我去理发了。"
      },
      {
        "word": "앞머리",
        "phonetic": "apmeori",
        "meaning": "名词 刘海",
        "example": "앞머리를 잘라 주세요.",
        "exampleZh": "请帮我剪一下刘海。"
      },
      {
        "word": "미용사",
        "phonetic": "miyongsa",
        "meaning": "名词 美容师、理发师",
        "example": "미용사가 머리를 감겨 줬어요.",
        "exampleZh": "理发师给我洗了头。"
      },
      {
        "word": "예약",
        "phonetic": "yeyak",
        "meaning": "名词 预约",
        "example": "예약을 하고 싶어요.",
        "exampleZh": "我想预约。"
      },
      {
        "word": "숱",
        "phonetic": "sut",
        "meaning": "名词 (头发等)量的多寡、厚薄",
        "example": "숱을 좀 줄여 주세요.",
        "exampleZh": "请帮我打薄一点。"
      },
      {
        "word": "편리하다",
        "phonetic": "pyeollihada",
        "meaning": "形容词 方便的",
        "example": "미용실 예약이 편리해요.",
        "exampleZh": "预约美发厅很方便。"
      }
    ],
    "article": {
      "title": "미용실에서",
      "titleZh": "在美发厅",
      "paragraphs": [
        {
          "en": "저는 이번 주말에 미용실에 가요.",
          "phonetic": "jeoneun ibeon jumare miyongsire gayo",
          "zh": "我这个周末要去美发厅。"
        },
        {
          "en": "미용사에게 앞머리와 숱을 조금 잘라 달라고 했어요.",
          "phonetic": "miyongsa-ege apmeoriwa sureul jogeum jjalla dallago haesseoyo",
          "zh": "我请理发师帮我稍微剪一下刘海并打薄头发。"
        },
        {
          "en": "저는 검은색으로 머리를 염색하고 싶어요.",
          "phonetic": "jeoneun geomeunsaekeuro meorireul yeomsaekago sipeoyo",
          "zh": "我想把头发染成黑色。"
        },
        {
          "en": "파마는 시간이 오래 걸리지만 예약하면 편리해요.",
          "phonetic": "pamaneun sigani orae geollijiman yeyakamyeon pyeollihaeyo",
          "zh": "烫发很花时间，但如果预约的话就方便了。"
        }
      ],
      "phrases": [
        {
          "phrase": "머리를 깎다",
          "meaning": "剪头发、理头发"
        },
        {
          "phrase": "염색을 하다",
          "meaning": "染发"
        },
        {
          "phrase": "예약을 하다",
          "meaning": "预约"
        },
        {
          "phrase": "길이를 짧게 하다",
          "meaning": "把头发剪短"
        },
        {
          "phrase": "고객",
          "meaning": "顾客"
        }
      ],
      "grammar": [
        {
          "point": "~고 싶다",
          "explain": "表示“想……”的愿望，接在动词词干后。如：하고 싶어요(想做)。"
        },
        {
          "point": "~아/어 주세요",
          "explain": "表示“请为我做……”，礼貌地请求对方为说话人做某事。如：잘라 주세요(请帮我剪)。"
        },
        {
          "point": "~지만",
          "explain": "连接两个句子，表示“虽然……但是……”。如：오래 걸리지만(虽然很花时间，但是)。"
        },
        {
          "point": "~면",
          "explain": "表示假设条件“如果……”。如：예약하면(如果预约的话)。"
        }
      ],
      "tips": [
        "在韩国美发厅，可以先预约(예약)，周末人多如果不预约可能等很久。",
        "“깎다”用于剪(剪短)，而“자르다”更强调剪掉、裁切，两者都可礼貌地搭配주세요使用。",
        "说出你想要的效果时，可以配上长度词，如짧게(短一点)、길게(长一点)、많이(多一点)、조금(一点点)。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“我想预约”用韩语怎么说？",
            "options": [
              "예약하고 싶어요.",
              "예약해서요.",
              "예약할게요 없어요.",
              "예약은 아니에요."
            ],
            "answer": 0
          },
          {
            "q": "“请帮我打薄头发”中的“打薄”对应哪个词？",
            "options": [
              "염색",
              "파마",
              "숱을 줄이다",
              "이발"
            ],
            "answer": 2
          }
        ],
        "fill": [
          {
            "q": "머리를 염색_고 싶어요.",
            "answer": "하"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话：你今天去美发厅理发，说明你想烫发、染发，并描写理发师给你洗头和剪发的过程（至少5句）。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "미용실에서",
        "situationZh": "在美发厅，顾客向理发师提出烫发、染发的需求",
        "roles": {
          "clerk": "미용사(理发师)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 무엇을 도와드릴까요?",
            "phonetic": "annyeonghaseyo. mueoseul dowadeurilkkayo?",
            "zh": "你好，有什么可以帮您？"
          },
          {
            "role": "user",
            "ko": "저는 파마를 하고 싶어요. 미리 예약했어요.",
            "phonetic": "jeoneun pamareul hago sipeoyo. miri yeyakhaesseoyo",
            "zh": "我想烫头发，已经提前预约了。"
          },
          {
            "role": "clerk",
            "ko": "네, 그럼 머리 길이는 어떻게 할까요?",
            "phonetic": "ne, geureom meori girieun eotteoke hallkkayo?",
            "zh": "好的，那头发长度要怎么处理呢？"
          },
          {
            "role": "user",
            "ko": "앞머리를 조금 자르고 숱도 줄여 주세요.",
            "phonetic": "apmeorireul jogeum jareugo sutdo juryeo juseyo",
            "zh": "请帮我稍微剪一下刘海，顺便打薄一点头发。"
          },
          {
            "role": "clerk",
            "ko": "알겠습니다. 그럼 먼저 머리를 감고 파마를 시작할게요.",
            "phonetic": "algesseumnida. geureom meonjeo meorireul gamgo pamareul sijakalgeyo",
            "zh": "好的，那我先帮您洗头，然后开始烫发。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 시간이 얼마나 걸려요?",
            "phonetic": "gamsahamnida. sigani eolmana geollyeoyo?",
            "zh": "谢谢。需要多长时间呢？"
          }
        ],
        "tips": [
          "可以先说예약했어요确认已预约，让对方知悉时间安排。",
          "每提出一个明确需求(如자르고、줄여 주세요)后用주세요征得对方帮忙。",
          "用얼마나 걸려요询问所需时间，是日常高频表达。"
        ]
      },
      {
        "scene": "염색 상담",
        "situationZh": "在美发厅咨询染发颜色和价格",
        "roles": {
          "clerk": "미용사(理发师)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어떤 색으로 염색하시겠어요?",
            "phonetic": "eotteon saekeuro yeomsakhasigesseoyo?",
            "zh": "您想染成什么颜色呢？"
          },
          {
            "role": "user",
            "ko": "갈색으로 하고 싶어요. 그래도 너무 밝지 않게 해 주세요.",
            "phonetic": "galsaekeuro hago sipeoyo. geuraedo neomu bakji ane ke hae juseyo",
            "zh": "我想染成棕色，不过请别弄得太亮。"
          },
          {
            "role": "clerk",
            "ko": "이 색이 잘 어울릴 것 같아요. 가격은 얼마예요?",
            "phonetic": "i saegi jal eoullil geot gatayo. gageogeun eolmayeyo?",
            "zh": "这个颜色应该会很适合。价格是多少呢？"
          },
          {
            "role": "user",
            "ko": "가격이 좀 비싸네요. 조금 깎아 주실 수 있어요?",
            "phonetic": "gageogi jom bissaneyo. jogeum kkakka jusil su isseoyo?",
            "zh": "价格有点贵呢，能稍微便宜一点吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 오늘은 이벤트로 10퍼센트 할인해 드릴게요.",
            "phonetic": "ne, oneureun ibeonteuro 10 peosenteu halinhae deurilgeyo",
            "zh": "好的，今天是活动价，给您打九折。"
          },
          {
            "role": "user",
            "ko": "좋아요. 그럼 부탁드릴게요.",
            "phonetic": "joayo. geureom butakdeurilgeyo",
            "zh": "太好了，那就拜托您了。"
          }
        ],
        "tips": [
          "用어떤 색으로询问颜色，是商量染发时的常用句。",
          "表达“太亮”可用너무 밝게，并加上지 않게(别……)来表示克制程度。",
          "砍价可说조금 깎아 주실 수 있어요，礼貌又自然。"
        ]
      },
      {
        "scene": "预约理发",
        "situationZh": "我打电话到美发厅预约今天的理发时间。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "여보세요, 헤어샵입니다.",
            "phonetic": "yeo-bo-se-yo, he-eo-syap-im-ni-da.",
            "zh": "喂，您好，这里是美发店。"
          },
          {
            "role": "user",
            "ko": "안녕하세요, 커트 예약하고 싶어요.",
            "phonetic": "an-nyeong-ha-se-yo, keo-teu ye-yak-ha-go si-peo-yo.",
            "zh": "您好，我想预约剪发。"
          },
          {
            "role": "clerk",
            "ko": "네, 몇 시에 오실 수 있으세요?",
            "phonetic": "ne, myeot si-e o-sil su i-sseu-se-yo?",
            "zh": "好的，您几点能来呢？"
          },
          {
            "role": "user",
            "ko": "오후 두 시쯤 괜찮아요?",
            "phonetic": "o-hu du si-jjeum gwaen-cha-na-yo?",
            "zh": "下午两点左右可以吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 두 시에 예약해 드릴게요.",
            "phonetic": "ne, du si-e ye-yak-hae deu-ril-ge-yo.",
            "zh": "好，我帮您约在两点。"
          },
          {
            "role": "user",
            "ko": "감사합니다, 그때 뵐게요.",
            "phonetic": "gam-sa-ham-ni-da, geu-ttae boel-ge-yo.",
            "zh": "谢谢，我们到时候见。"
          }
        ],
        "tips": [
          "예약하다（预约）/ 예약（预约）是美发店常用词。",
          "몇 시에（几点）用于询问具体时间。",
          "뵈요 是 보다（见面）的敬语形式，正式场合很礼貌。"
        ]
      },
      {
        "scene": "烫发咨询",
        "situationZh": "我在美发厅询问烫发的费用和所需时间。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "파마 하는 데 얼마나 걸려요?",
            "phonetic": "pa-ma ha-neun de eol-ma-na geol-lyeo-yo?",
            "zh": "烫发需要花多长时间？"
          },
          {
            "role": "clerk",
            "ko": "보통 한 시간 반 정도 걸립니다.",
            "phonetic": "bo-tong han si-gan ban jeong-do geol-lim-ni-da.",
            "zh": "一般大概需要一个半小时。"
          },
          {
            "role": "user",
            "ko": "가격은 어떻게 되나요?",
            "phonetic": "ga-gyeok-eun eo-tteo-ke doe-na-yo?",
            "zh": "价格是多少呢？"
          },
          {
            "role": "clerk",
            "ko": "긴 머리는 팔만 원입니다.",
            "phonetic": "gin meo-ri-neun pal-man won-im-ni-da.",
            "zh": "长发是八万韩元。"
          },
          {
            "role": "user",
            "ko": "좀 비싸네요, 다른 방법이 있을까요?",
            "phonetic": "jom bi-ssa-ne-yo, da-reun bang-beop-i i-sseul-kka-yo?",
            "zh": "有点贵呢，有没有别的办法？"
          },
          {
            "role": "clerk",
            "ko": "그럼 부분 파마를 추천해 드려요.",
            "phonetic": "geu-reom bu-bun pa-ma-reul chu-cheon-hae deu-ryeo-yo.",
            "zh": "那我推荐您做局部烫发。"
          }
        ],
        "tips": [
          "파마（烫发）是外来语，源自英语 perm。",
          "얼마나 걸리다（需要多久）询问时间，가격（价格）询问价钱。",
          "추천하다（推荐）在服务场合很常用。"
        ]
      },
      {
        "scene": "结账付款",
        "situationZh": "理发结束后我在柜台结账，店员询问付款方式。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "이번에 하고 싶은 것이 다 끝났습니다.",
            "phonetic": "i-beon-e ha-go si-peun geo-si da kkeut-nat-seup-ni-da.",
            "zh": "这次您想做的项目都做完了。"
          },
          {
            "role": "clerk",
            "ko": "결제는 어떻게 하시겠어요?",
            "phonetic": "gyeol-je-neun eo-tteo-ke ha-si-gess-eo-yo?",
            "zh": "您要怎么结账呢？"
          },
          {
            "role": "user",
            "ko": "카드로 할게요.",
            "phonetic": "ka-deu-ro hal-ge-yo.",
            "zh": "我用卡结账。"
          },
          {
            "role": "clerk",
            "ko": "네, 카드를 여기에 넣어 주세요.",
            "phonetic": "ne, ka-deu-reul yeo-gi-e neo-eo ju-se-yo.",
            "zh": "好的，请把卡放到这里。"
          },
          {
            "role": "user",
            "ko": "영수증도 받을 수 있을까요?",
            "phonetic": "yeong-su-jeung-do ba-deul su i-sseul-kka-yo?",
            "zh": "我可以拿收据吗？"
          },
          {
            "role": "clerk",
            "ko": "물론이죠, 여기 있습니다. 감사합니다.",
            "phonetic": "mul-lon-i-jyo, yeo-gi it-seum-ni-da. gam-sa-ham-ni-da.",
            "zh": "当然可以，给您。谢谢光临。"
          }
        ],
        "tips": [
          "결제하다（结账），카드로 하다（用卡付款）都是购物常用语。",
          "영수증（收据）在需要报销时常用。",
          "영수증 받다（拿收据）中 받다 是“收到”的意思。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "취미",
        "phonetic": "chwimi",
        "meaning": "名词 兴趣、爱好",
        "example": "제 취미는 독서예요.",
        "exampleZh": "我的爱好是读书。"
      },
      {
        "word": "노래",
        "phonetic": "norae",
        "meaning": "名词 歌曲、唱歌",
        "example": "저는 노래를 잘 부르지 못해요.",
        "exampleZh": "我唱歌唱得不太好。"
      },
      {
        "word": "사진",
        "phonetic": "sajin",
        "meaning": "名词 照片、摄影",
        "example": "사진을 찍는 것을 좋아해요.",
        "exampleZh": "我喜欢拍照。"
      },
      {
        "word": "음악",
        "phonetic": "eumak",
        "meaning": "名词 音乐",
        "example": "클래식 음악을 자주 들어요.",
        "exampleZh": "我经常听古典音乐。"
      },
      {
        "word": "요리",
        "phonetic": "yori",
        "meaning": "名词 料理、烹饪",
        "example": "주말마다 한국 요리를 만들어요.",
        "exampleZh": "每个周末我都做韩国料理。"
      },
      {
        "word": "영화",
        "phonetic": "yeonghwa",
        "meaning": "名词 电影",
        "example": "주말에 영화를 봐요.",
        "exampleZh": "我周末看电影。"
      },
      {
        "word": "그림",
        "phonetic": "geurim",
        "meaning": "名词 画、绘画",
        "example": "어렸을 때 그림을 그리기를 좋아했어요.",
        "exampleZh": "小时候我喜欢画画。"
      },
      {
        "word": "여행",
        "phonetic": "yeohaeng",
        "meaning": "名词 旅行",
        "example": "한국 여행을 계획하고 있어요.",
        "exampleZh": "我正在计划韩国旅行。"
      },
      {
        "word": "시간",
        "phonetic": "sigan",
        "meaning": "名词 时间",
        "example": "취미를 위한 시간이 없어요.",
        "exampleZh": "我没有用来发展兴趣爱好的时间。"
      },
      {
        "word": "즐기다",
        "phonetic": "jeulgida",
        "meaning": "动词 享受、欣赏",
        "example": "나는 피아노 연주를 즐겨요.",
        "exampleZh": "我喜欢(享受)弹钢琴。"
      }
    ],
    "article": {
      "title": "제 취미",
      "titleZh": "我的爱好",
      "paragraphs": [
        {
          "en": "제 취미는 노래 부르기와 사진 찍기예요.",
          "phonetic": "je chwimineun norae bureugiwa sajin jjikgiyeyo",
          "zh": "我的爱好是唱歌和拍照。"
        },
        {
          "en": "주말에는 친구와 함께 노래방에 가서 노래를 부르고, 산에 올라가 사진을 찍어요.",
          "phonetic": "jumareneun chingugwa hamkke noraebang-e gaseo noraeleul bureugo, sane olleogaga sajineul jjigeoyo",
          "zh": "周末我和朋友一起去卡拉OK唱歌，还上山去拍照。"
        },
        {
          "en": "요리도 좋아해서 유튜브를 보면서 새로운 요리를 배워요.",
          "phonetic": "yorido joahaeseo yutyubeureul bomyeonseo saeroun yorireul baewoyo",
          "zh": "我也喜欢烹饪，一边看YouTube一边学做新菜。"
        },
        {
          "en": "취미를 즐기면 스트레스가 줄고 기분이 좋아져요.",
          "phonetic": "chwimireul jeulgimyeon seuteureseu-ga julgode gibuni joajyeoyo",
          "zh": "享受兴趣爱好能减轻压力、让心情变好。"
        }
      ],
      "phrases": [
        {
          "phrase": "취미를 가지다",
          "meaning": "拥有兴趣爱好"
        },
        {
          "phrase": "노래를 부르다",
          "meaning": "唱歌"
        },
        {
          "phrase": "사진을 찍다",
          "meaning": "拍照、摄影"
        },
        {
          "phrase": "요리를 하다",
          "meaning": "做菜、烹饪"
        },
        {
          "phrase": "스트레스가 풀리다",
          "meaning": "缓解压力"
        }
      ],
      "grammar": [
        {
          "point": "~기도 하다",
          "explain": "表示“也……”，强调兼有或多种情况。如：요리도 좋아해서(也喜欢烹饪)。"
        },
        {
          "point": "~(으)면서",
          "explain": "表示两个动作同时进行，“一边……一边……”。如：유튜브를 보면서(一边看YouTube一边)。"
        },
        {
          "point": "~(으)려고/A/V아/어요",
          "explain": "此处用-서表示原因，“因为……所以”。如：좋아해서(因为喜欢所以)。"
        },
        {
          "point": "~(으)면",
          "explain": "表示假设条件“如果……”。如：즐기면(如果享受的话)。"
        }
      ],
      "tips": [
        "노래방(卡拉OK)是韩国很流行的聚会场所，和朋友去唱歌很普遍。",
        "表达“没有”时用없어요，例如：시간이 없어요(没有时间)。",
        "动词词干+n是常把动作名词化的方式，如노래 부르기(唱歌这件事)、사진 찍기(拍照)。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“我的爱好是唱歌”用韩语怎么说？",
            "options": [
              "제 취미는 노래 부르기예요.",
              "저는 만화예요.",
              "제 취미가 없어요.",
              "노래는 좋아하지 않아요."
            ],
            "answer": 0
          },
          {
            "q": "“一边看YouTube一边学做菜”中的“一边……一边……”对应哪个语法？",
            "options": [
              "~(으)면서",
              "~(으)면",
              "~지만",
              "~아서"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "사진을 찍_ 것을 좋아해요.",
            "answer": "는"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话介绍你的兴趣爱好：说明你日常喜欢做什么（如听音乐、拍照、做料理），并解释为什么喜欢它（至少5句）。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "취미 이야기",
        "situationZh": "和朋友聊天，聊各自的兴趣爱好",
        "roles": {
          "clerk": "친구(朋友)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "너는 취미가 뭐야?",
            "phonetic": "neoneun chwimiga mwoya?",
            "zh": "你有什么爱好呀？"
          },
          {
            "role": "user",
            "ko": "나는 노래 부르기와 사진 찍기를 좋아해. 네 취미는 뭐야?",
            "phonetic": "naneun norae bureugiwa sajin jjikgireul joahae. ne chwimineun mwoya?",
            "zh": "我喜欢唱歌和拍照。你的爱好是什么呢？"
          },
          {
            "role": "clerk",
            "ko": "나는 요리하는 걸 좋아해. 주말마다 새로운 요리를 만들어 봐.",
            "phonetic": "naneun yorihaneun geol joahae. jumalmada saeroun yorireul mandeureo bwa",
            "zh": "我喜欢做菜，每个周末都会试着做新菜。"
          },
          {
            "role": "user",
            "ko": "우와, 대단하다! 나도 다음에 같이 요리해 볼래?",
            "phonetic": "uwa, daedanhada! nado daeume gachi yorihae bollae?",
            "zh": "哇，真厉害！下次要不要我们一起做菜？"
          },
          {
            "role": "clerk",
            "ko": "좋아, 그럼 다음 주말에 우리 집에서 같이 만들자.",
            "phonetic": "joa, geureom daeum jumare uri jibeseo gachi mandeulja",
            "zh": "好啊，那下周末到我家一起做吧。"
          },
          {
            "role": "user",
            "ko": "그래, 약속해! 그때 필요한 재료는 내가 준비할게.",
            "phonetic": "geurae, yaksokhae! geuttae piryohan jaeryoneun naega junbihalge",
            "zh": "好，说定了！到时候需要的材料我来准备。"
          }
        ],
        "tips": [
          "朋友间用半语(해체)，如뭐야、만들자，正式场合要用해요体。",
          "介绍自己喜欢做什么可加걸 좋아해요/좋아해(喜欢……这件事)。",
          "邀請一起做事用같이 ~할래?(要不要一起……)很自然。"
        ]
      },
      {
        "scene": "취미 수업 신청",
        "situationZh": "在文化中心咨询并报名绘画课程",
        "roles": {
          "clerk": "직원(工作人员)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 어떤 수업을 찾으세요?",
            "phonetic": "annyeonghaseyo. eotteon sueobeul chajeuseyo?",
            "zh": "您好，您想找什么样的课程呢？"
          },
          {
            "role": "user",
            "ko": "그림 그리기 수업을 듣고 싶어요. 언제 열려요?",
            "phonetic": "geurim geurigi sueobeul deudgo sipeoyo. eonje yeollyeoyo?",
            "zh": "我想上绘画课。它什么时候开课呢？"
          },
          {
            "role": "clerk",
            "ko": "매주 수요일 저녁에 열려요. 한 달에 4시간씩이에요.",
            "phonetic": "maeju suyoil jeonyeoge yeollyeoyo. han dare 4 siganjjigiyeyo",
            "zh": "每周三晚上开课，一个月上4次。"
          },
          {
            "role": "user",
            "ko": "수강료는 얼마예요? 신청은 어떻게 하면 돼요?",
            "phonetic": "sugangnyoneun eolmayeyo? sincheongeun eotteoke hamyeon dwaeyo?",
            "zh": "学费是多少呢？该怎么报名？"
          },
          {
            "role": "clerk",
            "ko": "한 달에 5만 원이에요. 홈페이지에서 온라인으로 신청하시면 됩니다.",
            "phonetic": "han dare omang wonieyo. hompeijieseo onrain-euro sincheonghasimyeon doemnida",
            "zh": "一个月五万韩元，在网上申请就可以了。"
          },
          {
            "role": "user",
            "ko": "알겠습니다. 그럼 온라인으로 신청할게요. 감사합니다.",
            "phonetic": "algesseumnida. geureom onrain-euro sincheonghalgeyo. gamsahamnida",
            "zh": "我知道了，那我就在网上报名。谢谢。"
          }
        ],
        "tips": [
          "询问时间/次数用언제、며칠、몇 번这样的疑问词更清楚。",
          "问价格用얼마예요，问申请方式用어떻게 하면 돼요。",
          "“就可以”用하면 됩니다，是常用的许可表达。"
        ]
      },
      {
        "scene": "聊摄影爱好",
        "situationZh": "我和朋友聊起自己的摄影爱好以及喜欢的拍摄题材。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "너 취미가 뭐야?",
            "phonetic": "neo chwi-mi-ga mwo-ya?",
            "zh": "你的爱好是什么？"
          },
          {
            "role": "user",
            "ko": "사진 찍는 걸 좋아해요.",
            "phonetic": "sa-jin jjing-neun geol jo-a-hae-yo.",
            "zh": "我喜欢拍照。"
          },
          {
            "role": "clerk",
            "ko": "주로 뭘 찍어?",
            "phonetic": "ju-ro mwol jji-kkeo?",
            "zh": "你主要拍什么？"
          },
          {
            "role": "user",
            "ko": "풍경이나 길거리 사진을 자주 찍어요.",
            "phonetic": "pung-gyeong-i-na gil-geo-ri sa-jin-eul ja-ju jji-kkeo-yo.",
            "zh": "我经常拍风景或街拍。"
          },
          {
            "role": "clerk",
            "ko": "와, 멋지다! 카메라 뭐 써?",
            "phonetic": "wa, meot-ji-da! ka-me-ra mwo sseo?",
            "zh": "哇，真酷！你用的是什么相机？"
          },
          {
            "role": "user",
            "ko": "미러리스 카메라를 쓰는데, 한번 같이 찍으러 갈래?",
            "phonetic": "mi-reo-ri-seu ka-me-ra-reul sseu-neun-de, han-beon ga-chi jji-kkeu-reo gal-lae?",
            "zh": "我用微单，要不要一起去拍一次？"
          }
        ],
        "tips": [
          "취미（爱好）和 사진 찍다（拍照）是聊爱好时的核心词汇。",
          "주로（主要）用于说明习惯。",
          "-ㄹ래?（要不要…?）是亲近朋友间的提议语气。"
        ]
      },
      {
        "scene": "讨论网上课程",
        "situationZh": "我和同事聊最近上网课学习乐器的计划。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "요즘 온라인 강의 듣고 있어요?",
            "phonetic": "yo-jeum on-la-in gang-ui deud-go i-sseo-yo?",
            "zh": "你最近在上线上课程吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 피아노 강의를 듣고 있어요.",
            "phonetic": "ne, pi-a-no gang-ui-reul deud-go i-sseo-yo.",
            "zh": "是的，我在上钢琴课。"
          },
          {
            "role": "user",
            "ko": "처음부터 배우기 쉬워요?",
            "phonetic": "cheo-eum-bu-teo bae-u-gi swi-wo-yo?",
            "zh": "从头学起来容易吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 선생님이 아주 친절하게 가르쳐요.",
            "phonetic": "ne, seon-saeng-nim-i a-ju chin-jeol-ha-ge ga-reu-chyeo-yo.",
            "zh": "是的，老师教得非常耐心。"
          },
          {
            "role": "user",
            "ko": "나도 취미로 하나 시작해 볼까?",
            "phonetic": "na-do chwi-mi-ro ha-na si-jak-hae bol-kka?",
            "zh": "我也要不要开始学一门当爱好呢？"
          },
          {
            "role": "clerk",
            "ko": "꼭 해 봐, 재미있더라!",
            "phonetic": "kkok hae bwa, jae-mi-it-deo-ra!",
            "zh": "一定要试试，真的很有意思！"
          }
        ],
        "tips": [
          "온라인 강의（线上课程）/ 강의를 듣다（上课，听课程）。",
          "-고 있다（正在做某事）表示进行时。",
          "친절하다（亲切，耐心）常用于形容老师或服务人员。"
        ]
      },
      {
        "scene": "乐器学习的梦想",
        "situationZh": "我向老师请教想学的乐器，并了解难易程度。",
        "roles": {
          "clerk": "老师",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "선생님, 기타를 배우고 싶어요.",
            "phonetic": "seon-saeng-nim, gi-ta-reul bae-u-go si-peo-yo.",
            "zh": "老师，我想学吉他。"
          },
          {
            "role": "clerk",
            "ko": "좋아요, 처음이세요?",
            "phonetic": "jo-a-yo, cheo-eum-i-se-yo?",
            "zh": "好的，您是初学者吗？"
          },
          {
            "role": "user",
            "ko": "네, 완전 초보예요.",
            "phonetic": "ne, wan-jeon cho-bo-ye-yo.",
            "zh": "是的，完全是新手。"
          },
          {
            "role": "clerk",
            "ko": "괜찮아요, 기본부터 천천히 배우면 돼요.",
            "phonetic": "gwaen-cha-na-yo, gi-bon-bu-teo cheon-cheon-hi bae-u-myeon dwae-yo.",
            "zh": "没关系，从基础慢慢学就行。"
          },
          {
            "role": "user",
            "ko": "한 달이면 어느 정도 쳐요?",
            "phonetic": "han dal-i-myeon eo-neu jeong-do chyeo-yo?",
            "zh": "一个月的话能达到什么程度？"
          },
          {
            "role": "clerk",
            "ko": "기본 코드 몇 개는 칠 수 있게 돼요.",
            "phonetic": "gi-bon ko-deu myeot gae-neun chil su it-ge dwae-yo.",
            "zh": "差不多能弹几个基本和弦了。"
          }
        ],
        "tips": [
          "초보（新手）vs 초보자（初学者），常用于兴趣学习。",
          "기존부터（从基础开始）是学习建议常用语。",
          "어느 정도（到什么程度）用于询问水平。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "여행",
        "phonetic": "yeohaeng",
        "meaning": "名词 旅行、旅游",
        "example": "방학 때 한국에 여행을 가요.",
        "exampleZh": "放假时我去韩国旅行。"
      },
      {
        "word": "관광",
        "phonetic": "gwan-gwang",
        "meaning": "名词 观光、游览",
        "example": "제주도를 관광하고 싶어요.",
        "exampleZh": "我想去济州岛观光。"
      },
      {
        "word": "호텔",
        "phonetic": "hotel",
        "meaning": "名词 酒店、旅馆",
        "example": "호텔을 미리 예약했어요.",
        "exampleZh": "我提前订好了酒店。"
      },
      {
        "word": "지도",
        "phonetic": "jido",
        "meaning": "名词 地图",
        "example": "지도를 보고 길을 찾았어요.",
        "exampleZh": "我看着地图找到了路。"
      },
      {
        "word": "관광지",
        "phonetic": "gwanggwangji",
        "meaning": "名词 旅游景点",
        "example": "이곳은 유명한 관광지예요.",
        "exampleZh": "这里是有名的旅游景点。"
      },
      {
        "word": "지하철",
        "phonetic": "jihacheol",
        "meaning": "名词 地铁",
        "example": "지하철을 타고 시내로 갔어요.",
        "exampleZh": "我坐地铁去了市中心。"
      },
      {
        "word": "예매",
        "phonetic": "yemae",
        "meaning": "名词 购票、订票",
        "example": "기차표를 온라인으로 예매했어요.",
        "exampleZh": "我在网上订了火车票。"
      },
      {
        "word": "명소",
        "phonetic": "myeongso",
        "meaning": "名词 名胜、著名场所",
        "example": "서울의 명소를 구경했어요.",
        "exampleZh": "我游览了首尔的名胜。"
      },
      {
        "word": "적다",
        "phonetic": "jeokda",
        "meaning": "动词 少、(数量)少",
        "example": "관광객이 많지 않아서 사람이 적어요.",
        "exampleZh": "游客不多，所以人很少。"
      },
      {
        "word": "아름답다",
        "phonetic": "areumdapda",
        "meaning": "形容词 美丽的",
        "example": "남산의 야경이 정말 아름다워요.",
        "exampleZh": "南山夜景真的很美。"
      }
    ],
    "article": {
      "title": "한국 여행",
      "titleZh": "韩国旅行",
      "paragraphs": [
        {
          "en": "저는 지난주에 친구와 함께 한국에 여행을 갔어요.",
          "phonetic": "jeoneun jinjujue chingugwa hamkke hanguge yeohaengeul gasseoyo",
          "zh": "上周我和朋友一起去韩国旅行了。"
        },
        {
          "en": "서울에 도착해서 지하철을 타고 시내의 명소들을 구경했어요.",
          "phonetic": "seoure dochakaeseo jihacheoreul tago sina-ui myeongso-deureul gugyeonghaesseoyo",
          "zh": "到达首尔后，我坐地铁游览了市内的名胜。"
        },
        {
          "en": "저녁에는 남산에 올라가 도시의 아름다운 야경을 보았어요.",
          "phonetic": "jeonyeog-eun namsane olleogaga dosi-ui areumdaun yagyeong-eul boasseoyo",
          "zh": "晚上我登上南山，欣赏了城市美丽的夜景。"
        },
        {
          "en": "다음에는 제주도로 가서 관광하고 싶습니다.",
          "phonetic": "daeum-eneun jejudo-ro gaseo gwanggwangago sipseumnida",
          "zh": "下次我想去济州岛观光旅行。"
        }
      ],
      "phrases": [
        {
          "phrase": "여행을 가다",
          "meaning": "去旅行"
        },
        {
          "phrase": "관광을 하다",
          "meaning": "观光、游览"
        },
        {
          "phrase": "호텔을 예약하다",
          "meaning": "预订酒店"
        },
        {
          "phrase": "지하철을 타다",
          "meaning": "乘坐地铁"
        },
        {
          "phrase": "야경을 보다",
          "meaning": "欣赏夜景"
        }
      ],
      "grammar": [
        {
          "point": "~(으)러 가다",
          "explain": "表示“去(做某事)”。如：여행을 가다(去旅行)、구경하러 가다(去看/逛)。"
        },
        {
          "point": "~아서/어서",
          "explain": "表示先后顺序或原因。如：도착해서(到达之后)、타고(乘坐并)。"
        },
        {
          "point": "~았/었어요",
          "explain": "过去式，“……了”，用于描述过去的经历。如：갔어요(去了)、보았어요(看了)。"
        },
        {
          "point": "~(으)ㄹ 겁니다/입니다",
          "explain": "表示将来的打算、计划，“将要/打算”。如：관광하고 싶습니다(想去观光)。"
        }
      ],
      "tips": [
        "在韩国自由行，下载地铁路线图지도很方便，用지하철换乘比打车省时省钱。",
        "온라인 예매(在线订票)通常比现场购票方便，早订还常有优惠。",
        "问路或确认地点常用얼마나 걸려요、어디에 있어요，礼貌得体。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“我坐地铁去了市中心”用韩语怎么说？",
            "options": [
              "지하철을 타고 시내로 갔어요.",
              "버스를 타고 멀리 갔어요.",
              "걸어서 집에 갔어요.",
              "비행기를 타고 여행했어요."
            ],
            "answer": 0
          },
          {
            "q": "“预订酒店”对应的韩语短语是？",
            "options": [
              "관광을 하다",
              "호텔을 예약하다",
              "지도를 보다",
              "명소를 구경하다"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "지하철을 타고 시내로 갔어요. 지하철을 타_ 나는 서울에 도착했어요.",
            "answer": "고"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话描述你的旅行经历：介绍一下你去过的地方、乘坐的交通工具以及看到的景色（至少5句）。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "호텔 체크인",
        "situationZh": "在酒店前台办理入住登记",
        "roles": {
          "clerk": "호텔 직원(酒店前台)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 예약하셨나요?",
            "phonetic": "annyeonghaseyo. yeyakhassyeonayo?",
            "zh": "您好，请问有预订吗？"
          },
          {
            "role": "user",
            "ko": "네, 김민수라는 이름으로 예약했어요.",
            "phonetic": "ne, gimminsu-raneun ireumeuro yeyakhaesseoyo",
            "zh": "有的，我用金敏秀的名字订的。"
          },
          {
            "role": "clerk",
            "ko": "확인했습니다. 여권을 좀 보여 주시겠어요?",
            "phonetic": "hwaginhae-ssumnida. yeogwoneul jom boyeo jusigesseoyo?",
            "zh": "已确认。请出示一下护照好吗？"
          },
          {
            "role": "user",
            "ko": "여기 있습니다. 아침 식사는 몇 시부터예요?",
            "phonetic": "yeogi itsseumnida. achim sikssaneun myeot sibuteoyeyo?",
            "zh": "给你。早餐几点开始呢？"
          },
          {
            "role": "clerk",
            "ko": "아침 식사는 7시부터 9시까지입니다. 여기 열쇠와 가이드북을 드릴게요.",
            "phonetic": "achim siksaneun 7si-buteo 9si-kkajiimnida. yeogi yeolsoewa gaideubukeul deurilgeyo",
            "zh": "早餐从7点到9点。给您房卡和旅行指南。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 잘 묵겠습니다.",
            "phonetic": "gamsahamnida. jal mukgesseumnida",
            "zh": "谢谢，我会好好住下(投宿)的。"
          }
        ],
        "tips": [
          "用예약하셨나요确认预订情况，入住需出示여권(护照)。",
          "问时段用몇 시부터예요，如早餐时间。",
          "정중한表达잘 묵겠습니다(好好住下)。"
        ]
      },
      {
        "scene": "관광지에서",
        "situationZh": "在旅游咨询处询问景点和交通路线",
        "roles": {
          "clerk": "안내원(咨询员)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "무엇을 도와드릴까요?",
            "phonetic": "mueoseul dowadeurilkkayo?",
            "zh": "有什么可以帮您的吗？"
          },
          {
            "role": "user",
            "ko": "이 근처에 유명한 관광지가 어디 있나요?",
            "phonetic": "i geuncheoe yumyeonghan gwanggwangjiga eodi issnayo?",
            "zh": "这附近有什么有名的景点呢？"
          },
          {
            "role": "clerk",
            "ko": "경복궁이 추천할 만해요. 지하철 3호선을 타고 가면 됩니다.",
            "phonetic": "gyeongbokgungi chucheonhal manhaeyo. jihacheol samhoseoneul tago gamyeon doemnida",
            "zh": "我推荐景福宫，坐地铁3号线就能到。"
          },
          {
            "role": "user",
            "ko": "거기까지 얼마나 걸려요? 표는 어떻게 예매하나요?",
            "phonetic": "geogikkaji eolmana geollyeoyo? pyoneun eotteoke yemaehanayo?",
            "zh": "到那里要多久？门票怎么买呢？"
          },
          {
            "role": "clerk",
            "ko": "삼십 분쯤 걸려요. 입장료는 온라인으로 예매하시면 할인이 돼요.",
            "phonetic": "samsib punjjeum geollyeoyo. ipjangnyoneun onrain-euro yemaehasimyeon halini dwae-yo",
            "zh": "大约30分钟。门票在网上预订的话有优惠。"
          },
          {
            "role": "user",
            "ko": "정말 도움이 됐어요. 감사합니다.",
            "phonetic": "jeongmal doumi dwaesseoyo. gamsahamnida",
            "zh": "真的很有帮助，谢谢。"
          }
        ],
        "tips": [
          "推荐某地可用…이 추천할 만해요(……值得推荐)。",
          "问交通时间用얼마나 걸려요，问怎么去用어떻게 가나요。",
          "网上预约可享优惠，可说온라인 예매하면 할인돼요。"
        ]
      },
      {
        "scene": "在餐厅点餐",
        "situationZh": "在旅行途中我在餐厅点餐，服务员询问口味偏好。",
        "roles": {
          "clerk": "服务员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "뭘 드시겠어요?",
            "phonetic": "mwol deu-si-gess-eo-yo?",
            "zh": "您想吃点什么？"
          },
          {
            "role": "user",
            "ko": "비빔밥 하나 주세요.",
            "phonetic": "bi-bim-bap ha-na ju-se-yo.",
            "zh": "请给我一份拌饭。"
          },
          {
            "role": "clerk",
            "ko": "맵게 해 드릴까요?",
            "phonetic": "maep-ge hae deu-ril-kka-yo?",
            "zh": "要帮您做得辣一点吗？"
          },
          {
            "role": "user",
            "ko": "네, 조금 맵게 해 주세요.",
            "phonetic": "ne, jo-geum maep-ge hae ju-se-yo.",
            "zh": "好，稍微做得辣一点。"
          },
          {
            "role": "clerk",
            "ko": "음료는 뭘로 드릴까요?",
            "phonetic": "eum-nyo-neun mwol-lo deu-ril-kka-yo?",
            "zh": "饮料要给您上什么？"
          },
          {
            "role": "user",
            "ko": "물 하나랑 산수유차 주세요.",
            "phonetic": "mul ha-na-rang san-su-yu-cha ju-se-yo.",
            "zh": "请上一杯水和一杯山茱萸茶。"
          }
        ],
        "tips": [
          "드시다 是 먹다（吃）的敬语，点餐时用 드시겠어요。",
          "맵게 하다（做得辣）表示调整辣度。",
          "주세요（请给我）在点单时最常用。"
        ]
      },
      {
        "scene": "向路人问路",
        "situationZh": "我在韩国旅游时向路人询问去地铁站的路线。",
        "roles": {
          "clerk": "路人",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "실례합니다, 지하철역이 어디예요?",
            "phonetic": "sil-lye-ham-ni-da, ji-ha-cheol-yeog-i eo-di-ye-yo?",
            "zh": "打扰一下，地铁站在哪里？"
          },
          {
            "role": "clerk",
            "ko": "이 길로 쭉 가면 돼요.",
            "phonetic": "i gil-lo jjuk ga-myeon dwae-yo.",
            "zh": "沿着这条路一直走就行。"
          },
          {
            "role": "user",
            "ko": "멀어요?",
            "phonetic": "meo-reo-yo?",
            "zh": "远吗？"
          },
          {
            "role": "clerk",
            "ko": "아니요, 오 분 정도 걸려요.",
            "phonetic": "a-ni-yo, o bun jeong-do geol-lyeo-yo.",
            "zh": "不远，大概五分钟就到了。"
          },
          {
            "role": "user",
            "ko": "그 옆에 커피숍이 있나요?",
            "phonetic": "geu yeo-pe keo-pi-syob-i in-na-yo?",
            "zh": "那边附近有咖啡店吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 역 바로 앞에 있어요.",
            "phonetic": "ne, yeok ba-ro a-pe i-sseo-yo.",
            "zh": "有，就在地铁站正前面。"
          }
        ],
        "tips": [
          "실례합니다（打扰了）是问路的礼貌开场。",
          "쭉 가다（一直走）、오 분 정도（大约五分钟）是常见指路表达。",
          "있나요? 是非正式问“有…吗？”的说法。"
        ]
      },
      {
        "scene": "购买纪念品",
        "situationZh": "我在纪念品店想买礼物，询问价格并讲价。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "이 키링은 얼마예요?",
            "phonetic": "i ki-ring-eun eol-ma-ye-yo?",
            "zh": "这个钥匙扣多少钱？"
          },
          {
            "role": "clerk",
            "ko": "만 원이에요.",
            "phonetic": "man won-i-e-yo.",
            "zh": "一万韩元。"
          },
          {
            "role": "user",
            "ko": "두 개 사면 할인해 주세요.",
            "phonetic": "du gae sa-myeon hal-in-hae ju-se-yo.",
            "zh": "买两个的话请给我便宜一点。"
          },
          {
            "role": "clerk",
            "ko": "그럼 만 오천 원에 드릴게요.",
            "phonetic": "geu-reom man o-cheon won-e deu-ril-ge-yo.",
            "zh": "那就一个一万五千韩元卖给您。"
          },
          {
            "role": "user",
            "ko": "좋아요, 두 개 주세요.",
            "phonetic": "jo-a-yo, du gae ju-se-yo.",
            "zh": "好的，请给我两个。"
          },
          {
            "role": "clerk",
            "ko": "선물용으로 포장해 드릴까요?",
            "phonetic": "seon-mul-yong-eu-ro po-jang-hae deu-ril-kka-yo?",
            "zh": "需要帮您按礼品包装吗？"
          }
        ],
        "tips": [
          "얼마예요?（多少钱？）是购物最常用价格问句。",
          "할인하다（打折）、사면（如果买）与讲价有关。",
          "포장하다（包装）、선물용（送礼用）在购买礼物时常用。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "장르",
        "phonetic": "jangneu",
        "meaning": "名词 体裁、类型(影视/音乐)",
        "example": "제가 좋아하는 장르는 코미디예요.",
        "exampleZh": "我喜欢的类型是喜剧。"
      },
      {
        "word": "예고편",
        "phonetic": "yegopyeon",
        "meaning": "名词 预告片、预告",
        "example": "영화 예고편을 자주 봐요.",
        "exampleZh": "我经常看电影预告片。"
      },
      {
        "word": "감상",
        "phonetic": "gamsang",
        "meaning": "名词/动词 欣赏、鉴赏",
        "example": "주말마다 영화 감상을 즐겨요.",
        "exampleZh": "每个周末我都喜欢欣赏电影。"
      },
      {
        "word": "배우",
        "phonetic": "baeu",
        "meaning": "名词 演员",
        "example": "제가 좋아하는 배우가 나와요.",
        "exampleZh": "有我喜欢的演员出演。"
      },
      {
        "word": "결말",
        "phonetic": "gyeolmal",
        "meaning": "名词 结尾、结局",
        "example": "영화의 결말이 놀라웠어요.",
        "exampleZh": "电影的结局很令人惊讶。"
      },
      {
        "word": "흥미",
        "phonetic": "heungmi",
        "meaning": "名词 兴趣、趣味",
        "example": "이 책은 정말 흥미로워요.",
        "exampleZh": "这本书真的很有趣。"
      },
      {
        "word": "대본",
        "phonetic": "daebon",
        "meaning": "名词 剧本、台词",
        "example": "대본을 읽으며 연습해요.",
        "exampleZh": "我读着剧本进行练习。"
      },
      {
        "word": "추천하다",
        "phonetic": "chucheonhada",
        "meaning": "动词 推荐",
        "example": "재미있는 영화를 추천해 주세요.",
        "exampleZh": "请给我推荐一部有趣的电影。"
      },
      {
        "word": "기대하다",
        "phonetic": "gidaehada",
        "meaning": "动词 期待、期望",
        "example": "이 영화를 정말 기대하고 있어요.",
        "exampleZh": "我真的很期待这部电影。"
      },
      {
        "word": "인상적",
        "phonetic": "insangjeok",
        "meaning": "冠形词/名词 印象深刻的",
        "example": "배우의 연기가 인상적이었어요.",
        "exampleZh": "演员的表演令人印象深刻。"
      }
    ],
    "article": {
      "title": "영화 감상을 좋아해요",
      "titleZh": "我喜欢看电影",
      "paragraphs": [
        {
          "en": "저는 좋아하는 배우가 나오는 영화는 꼭 봐요.",
          "phonetic": "jeoneun joahaneun baeuga naoneun yeonghwaneun kkok bwayo",
          "zh": "有我喜欢的演员出演的电影我一定会看。"
        },
        {
          "en": "지난주에는 판타지 장르의 영화를 보았는데, 결말이 정말 인상적이었어요.",
          "phonetic": "jinjujue-neun pantaji jang-neu-ui yeonghwareul boanneunde, gyeolmari jeongmal insangjeog-ieosseoyo",
          "zh": "上周我看了部奇幻题材电影，结局真的很令人印象深刻。"
        },
        {
          "en": "영화를 보기 전에 예고편을 보고 줄거리를 미리 알아봐요.",
          "phonetic": "yeonghwareul bogi jeone yegopyeoneul bogo julgeorireul miri arabwayo",
          "zh": "看电影前我会先看预告片，提前了解剧情。"
        },
        {
          "en": "요즘은 친구와 대본을 읽으며 연습하는 취미도 생겼어요.",
          "phonetic": "yojeumeun chingugwa daeboneul ilgeumyeonseo yeonseubhaneun chwimido saenggyeosseoyo",
          "zh": "最近我也养成了和朋友读剧本练习的爱好。"
        }
      ],
      "phrases": [
        {
          "phrase": "영화를 보다",
          "meaning": "看电影"
        },
        {
          "phrase": "예고편을 보다",
          "meaning": "看预告片"
        },
        {
          "phrase": "줄거리를 알아보다",
          "meaning": "了解剧情"
        },
        {
          "phrase": "인상적이다",
          "meaning": "令人印象深刻"
        },
        {
          "phrase": "취미가 생기다",
          "meaning": "养成/产生兴趣爱好"
        }
      ],
      "grammar": [
        {
          "point": "~는데요",
          "explain": "用于句尾，带转折或缘由，常表示“话说……/不过……”。如：보았는데요(看了，然后……)。"
        },
        {
          "point": "~기 전에",
          "explain": "表示“在……之前”。如：보기 전에(在看之前)。"
        },
        {
          "point": "~(으)며",
          "explain": "表示伴随/并列，“一边……一边……”。如：대본을 읽으며(读着剧本)。"
        },
        {
          "point": "~ㄴ/은적이 있다",
          "explain": "表示“有……的经历”。如：감상한 적이 있어요(有欣赏过的经历)。"
        }
      ],
      "tips": [
        "看电影前先看예고편(预告片)是了解剧情的好方法。",
        "描述对作品的感受可用인상적이다、흥미롭다、감동했다(受感动)。",
        "推荐作品时说재미있는 영화를 추천해 주세요(请推荐有趣的电影)很常用。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“在看电影之前”用韩语怎么说？",
            "options": [
              "보기 전에",
              "본 후에",
              "보는 동안",
              "본 다음에니까"
            ],
            "answer": 0
          },
          {
            "q": "“我真的很期待这部电影”中用哪个动词？",
            "options": [
              "기대하다",
              "추천하다",
              "감상하다",
              "연기하다"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "대본을 읽(으)며 연습해요. → 括号部分应填：대본을 읽__ 연습해요.",
            "answer": "으며"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话介绍你最近看的一部电影：说明题材、大概剧情和你最喜欢的部分，并给出推荐理由（至少5句）。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "영화 고르기",
        "situationZh": "和朋友商量一起去看哪部电影",
        "roles": {
          "clerk": "친구(朋友)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "이번 주말에 영화 볼래? 어떤 장르 좋아해?",
            "phonetic": "ibeon jumare yeonghwa bollae? eotteon jangneu joahae?",
            "zh": "这周末要看电影吗？你喜欢什么类型呀？"
          },
          {
            "role": "user",
            "ko": "나는 코미디를 좋아해. 재미있는 영화를 추천해 줘.",
            "phonetic": "naneun komidireul joahae. jaeminneuen yeonghwareul chucheonhae jwo",
            "zh": "我喜欢喜剧，请给我推荐个有趣的电影吧。"
          },
          {
            "role": "clerk",
            "ko": "그래? 그럼 <행복한 하루>가 어때? 예고편을 봤는데 정말 웃기더라.",
            "phonetic": "geurae? geureom <haengbokan haru>-ga eottae? yegopyeoneul bwatneunde jeongmal utgideora",
            "zh": "是吗？那《幸福的一天》怎么样？我看了预告片，真的很好笑。"
          },
          {
            "role": "user",
            "ko": "좋아! 좋아하는 배우가 나와? 인기가 어때?",
            "phonetic": "joa! joahaneun baeuga na-wa? ingiga eottae?",
            "zh": "好啊！有我喜欢演员出演吗？人气怎么样？"
          },
          {
            "role": "clerk",
            "ko": "응, 주연 배우가 유명하고 인기도 굉장해. 곧 개봉해서 같이 보자.",
            "phonetic": "eung, juyeon baeuga yumyeonghago ingido goengjanghae. got gaebonghaeseo gachi boja",
            "zh": "嗯，主演演员很有名，也特别受欢迎。马上就上映了，一起看吧。"
          },
          {
            "role": "user",
            "ko": "좋아, 그럼 주말에 만나서 같이 영화 보자!",
            "phonetic": "joa, geureom jumare mannaseo gachi yeonghwa boja!",
            "zh": "好呀，那周末见面一起看电影吧！"
          }
        ],
        "tips": [
          "问爱好类型用어떤 장르 좋아해，推荐用어때?/추천해 줘。",
          "描述观感可说웃기다(好笑)、감동하다(感动)、재미있다(有趣)。",
          "정말用于强调程度，如정말 웃기더라(真的好好笑)。"
        ]
      },
      {
        "scene": "영화 관람 후 대화",
        "situationZh": "看完电影后和朋友交流感想",
        "roles": {
          "clerk": "친구(朋友)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "영화 어땠어? 재미있었어?",
            "phonetic": "yeonghwa eottasseo? jaemiisseosseo?",
            "zh": "电影怎么样？好看吗？"
          },
          {
            "role": "user",
            "ko": "정말 재미있었어! 특히 결말이 인상적이었어.",
            "phonetic": "jeongmal jaemiisseosseo! teukhi gyeolmari insangjeog-ieosseo",
            "zh": "真的很好看！尤其是结局令人印象深刻。"
          },
          {
            "role": "clerk",
            "ko": "나도 그 생각이야. 배우의 연기가 정말 좋았어.",
            "phonetic": "nado geu saenggag-iya. baeu-ui yeongiga jeongmal joasseo",
            "zh": "我也这么想。演员的演技真的很好。"
          },
          {
            "role": "user",
            "ko": "맞아, 그래서 출연진을 다시 찾아보게 됐어.",
            "phonetic": "mata, geuraeseo chulryeonjineul dasi chajaboge dwaesseo",
            "zh": "对呀，所以我重新去查了出演阵容。"
          },
          {
            "role": "clerk",
            "ko": "그럼 다음에 이 감독의 다른 작품도 같이 볼래?",
            "phonetic": "geureom daeume i gamdok-ui dareun jakpumdo gachi bollae?",
            "zh": "那下次要不要一起看这位导演的其他作品？"
          },
          {
            "role": "user",
            "ko": "좋아! 이번에는 내가 추천할게.",
            "phonetic": "joa! ibeon-eneun naega chucheonhalge",
            "zh": "好！这次我来推荐吧。"
          }
        ],
        "tips": [
          "问观影感受用영화 어땠어?,表示优秀用재미있었어、연기가 좋았어。",
          "表达“我也这么想”用나도 그 생각이야。",
          "用다음에 ~볼래?(下次要不要……)自然地约定下次。"
        ]
      },
      {
        "scene": "在电影院订票",
        "situationZh": "我去电影院买票，售票员确认场次和座位。",
        "roles": {
          "clerk": "售票员",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "오늘 저녁 영화 두 장 주세요.",
            "phonetic": "o-neul jeo-nyeok yeong-hwa du jang ju-se-yo.",
            "zh": "请给我两张今晚的电影票。"
          },
          {
            "role": "clerk",
            "ko": "어떤 영화 보실 거예요?",
            "phonetic": "eo-tteon yeong-hwa bo-sil geo-ye-yo?",
            "zh": "您要看哪部电影？"
          },
          {
            "role": "user",
            "ko": "새로 나온 액션 영화요.",
            "phonetic": "sae-ro na-on aeg-syeon yeong-hwa-yo.",
            "zh": "刚上映的动作片。"
          },
          {
            "role": "clerk",
            "ko": "일곱 시 상영이 남았어요.",
            "phonetic": "il-gop si sang-yeong-i nam-a-sseo-yo.",
            "zh": "七点的场次还有票。"
          },
          {
            "role": "user",
            "ko": "그걸로 증간 자리로 부탁해요.",
            "phonetic": "geu-geol-lo jung-gan ja-ri-ro bu-tak-hae-yo.",
            "zh": "那就买那个，麻烦中间座位。"
          },
          {
            "role": "clerk",
            "ko": "네, 오늘 저녁 일곱 시 액션 영화 두 장입니다.",
            "phonetic": "ne, o-neul jeo-nyeok il-gop si aeg-syeon yeong-hwa du jang-im-ni-da.",
            "zh": "好的，今晚七点的动作片两张。"
          }
        ],
        "tips": [
          "표를 사다（买票）、두 장（两张）是电影院常用语。",
          "상영（上映）、남다（剩余）指示场次和余票。",
          "가운데/증간 자리（中间座位）是选座常见词。"
        ]
      },
      {
        "scene": "聊喜欢的演员",
        "situationZh": "和朋友聊天时谈起自己最喜欢的演员和他的作品。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "최근에 본 영화 중에 뭐가 제일 좋았어?",
            "phonetic": "choe-geun-e bon yeong-hwa jung-e mwo-ga je-il jo-at-a?",
            "zh": "最近看的电影里哪部最好？"
          },
          {
            "role": "user",
            "ko": "이야기가 정말 재미있는 영화였어.",
            "phonetic": "i-ya-gi-ga jeong-mal jae-mi-it-neun yeong-hwa-yeot-eo.",
            "zh": "是一部故事很有意思的电影。"
          },
          {
            "role": "clerk",
            "ko": "누가 나왔어?",
            "phonetic": "nu-ga na-wat-eo?",
            "zh": "都有谁出演？"
          },
          {
            "role": "user",
            "ko": "내가 좋아하는 배우가 주연이야.",
            "phonetic": "nae-ga jo-a-ha-neun bae-u-ga ju-yeon-i-ya.",
            "zh": "是我喜欢的演员主演的。"
          },
          {
            "role": "clerk",
            "ko": "그 배우 연기 정말 좋지!",
            "phonetic": "geu bae-u yeon-gi jeong-mal jo-chi!",
            "zh": "那个演员演技真不错！"
          },
          {
            "role": "user",
            "ko": "그치? 나중에 꼭 같이 보자.",
            "phonetic": "geu-chi? na-jung-e kkok ga-chi bo-ja.",
            "zh": "对吧？下次一定一起看吧。"
          }
        ],
        "tips": [
          "재미있다（有意思）vs 지루하다（无聊）是评价电影常用词。",
          "주연／조연（主演／配角），배우（演员）。",
          "-고 있어（正在…）和 -자（一起…吧）用于日常聊天。"
        ]
      },
      {
        "scene": "在家看电影提议",
        "situationZh": "我向家人提议今晚在家一起看电影并选影片。",
        "roles": {
          "clerk": "家人",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "오늘 밤에 영화 볼래?",
            "phonetic": "o-neul bam-e yeong-hwa bol-lae?",
            "zh": "今晚要不要看电影？"
          },
          {
            "role": "clerk",
            "ko": "좋지, 뭐 볼까?",
            "phonetic": "jo-chi, mwo bol-kka?",
            "zh": "好啊，看什么？"
          },
          {
            "role": "user",
            "ko": "로맨스 영화는 어때?",
            "phonetic": "ro-maen-seu yeong-hwa-neun eo-ttae?",
            "zh": "爱情片怎么样？"
          },
          {
            "role": "clerk",
            "ko": "나는 코미디가 좋은데.",
            "phonetic": "na-neun ko-mi-di-ga jo-eun-de.",
            "zh": "我更喜欢喜剧。"
          },
          {
            "role": "user",
            "ko": "그럼 의견을 맞추자. 코미디 보자!",
            "phonetic": "geu-reom ui-gyeon-eul ma-chu-ja. ko-mi-di bo-ja!",
            "zh": "那就听你的，看喜剧吧！"
          },
          {
            "role": "clerk",
            "ko": "좋아, 나팡 가져올게.",
            "phonetic": "jo-a, na-ping ga-jyeo-ol-ge.",
            "zh": "好，我去拿爆米花。"
          }
        ],
        "tips": [
          "-ㄹ래?（要不要？）和 -자（一起…吧）都用于亲近关系中的提议。",
          "로맨스／코미디／액션 是外来语电影类型词。",
          "팝corn/나팔（爆米花）在家看电影时常提到。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "운동",
        "phonetic": "undong",
        "meaning": "名词 运动、锻炼",
        "example": "매일 아침에 운동을 해요.",
        "exampleZh": "我每天早上锻炼。"
      },
      {
        "word": "헬스",
        "phonetic": "helseu",
        "meaning": "名词 (健身房)健身",
        "example": "주말마다 헬스장에 가요.",
        "exampleZh": "我每个周末都去健身房。"
      },
      {
        "word": "조깅",
        "phonetic": "joging",
        "meaning": "名词 慢跑",
        "example": "공원에서 조깅을 해요.",
        "exampleZh": "我在公园里慢跑。"
      },
      {
        "word": "튼튼하다",
        "phonetic": "teunteunhada",
        "meaning": "形容词 结实的、强健的(身体)",
        "example": "운동을 하면 몸이 튼튼해져요.",
        "exampleZh": "运动能让身体变得强壮。"
      },
      {
        "word": "건강",
        "phonetic": "geongang",
        "meaning": "名词 健康",
        "example": "건강을 위해 걷기를 해요.",
        "exampleZh": "为了健康我去散步。"
      },
      {
        "word": "줄넘기",
        "phonetic": "julleomgi",
        "meaning": "名词 跳绳",
        "example": "아이들이 줄넘기를 좋아해요.",
        "exampleZh": "孩子们喜欢跳绳。"
      },
      {
        "word": "스트레칭",
        "phonetic": "seuteureching",
        "meaning": "名词 伸展、拉伸",
        "example": "운동 전에 스트레칭을 해요.",
        "exampleZh": "运动前我会先做拉伸。"
      },
      {
        "word": "자세",
        "phonetic": "jase",
        "meaning": "名词 姿势",
        "example": "올바른 자세로 운동해야 해요.",
        "exampleZh": "要用正确的姿势运动。"
      },
      {
        "word": "규칙적",
        "phonetic": "gyuchikjeok",
        "meaning": "冠形词/名词 有规律的、定期的",
        "example": "규칙적으로 운동하는 게 중요해요.",
        "exampleZh": "有规律地运动很重要。"
      },
      {
        "word": "쉬다",
        "phonetic": "swida",
        "meaning": "动词 休息",
        "example": "운동 후에는 꼭 쉬어야 해요.",
        "exampleZh": "运动后一定要休息。"
      }
    ],
    "article": {
      "title": "건강을 위한 운동",
      "titleZh": "为了健康的运动",
      "paragraphs": [
        {
          "en": "저는 건강을 위해 매일 조깅과 스트레칭을 해요.",
          "phonetic": "jeoneun geongangeul wihae maeil joginggwa seuteureching-eul haeyo",
          "zh": "为了健康，我每天进行慢跑和拉伸。"
        },
        {
          "en": "주말에는 친구와 함께 공원에서 배드민턴을 치거나 등산을 해요.",
          "phonetic": "jumare-neun chingugwa hamkke gongwon-eseo baedemin-teoneul chigeona deungsan-eul haeyo",
          "zh": "周末我和朋友在公园打羽毛球或去登山。"
        },
        {
          "en": "운동할 때는 올바른 자세가 정말 중요해요.",
          "phonetic": "undonghal ttaeneun olbareun jasega jeongmal jung-yohae-yo",
          "zh": "运动时正确的姿势非常重要。"
        },
        {
          "en": "규칙적으로 운동하면 몸이 튼튼해지고 스트레스도 풀려요.",
          "phonetic": "gyuchikjeogeuro undonghamyeon momi teunteunhaeji-go seuteureseudo pullyeoyo",
          "zh": "有规律地运动会让我身体强壮，压力也能得到缓解。"
        }
      ],
      "phrases": [
        {
          "phrase": "운동을 하다",
          "meaning": "做运动、锻炼"
        },
        {
          "phrase": "헬스장에 가다",
          "meaning": "去健身房"
        },
        {
          "phrase": "조깅을 하다",
          "meaning": "慢跑"
        },
        {
          "phrase": "몸이 튼튼해지다",
          "meaning": "身体变强壮"
        },
        {
          "phrase": "스트레칭을 하다",
          "meaning": "做拉伸"
        }
      ],
      "grammar": [
        {
          "point": "~기 위해",
          "explain": "表示“为了……”。如：건강을 위해(为了健康)。"
        },
        {
          "point": "~(으)거나",
          "explain": "表示两者之间的选择，“或”。如：배드민턴을 치거나 등산을 해요(打羽毛球或登山)。"
        },
        {
          "point": "~아/어지다",
          "explain": "表示状态变化，“变得……”。如：튼튼해지고(变得强壮)。"
        },
        {
          "point": "~면 그렇다/~니까/규칙적",
          "explain": "本课强调条件与规律性，如규칙적으로 운동하면(如果规律地运动)。"
        }
      ],
      "tips": [
        "开始运动前做스트레칭(拉伸)能减少受伤风险。",
        "描述“变得”可用…아/어져요，如몸이 튼튼해져요(身体变强壮)。",
        "建议他人运动常说규칙적으로 운동하세요(请有规律地运动)。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“为了健康我去散步”用韩语怎么说？",
            "options": [
              "건강을 위해 걷기를 해요.",
              "건강해서 걷지 않아요.",
              "걷기 위해 쉬어요.",
              "건강을 잃고 걸어요."
            ],
            "answer": 0
          },
          {
            "q": "“正确的姿势”对应的韩语是？",
            "options": [
              "규칙적 자세",
              "올바른 자세",
              "위험한 자세",
              "늦은 자세"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "운동을 하지 않으면 몸이 약해져요. → “正确的姿势”的韩语是：___ 자세",
            "answer": "올바른"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话介绍你的运动习惯：说明你每天或每周做什么运动、为什么这样做，以及运动带来的好处（至少5句）。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "헬스장에서",
        "situationZh": "在健身房向前台咨询会员办理和教练课",
        "roles": {
          "clerk": "프런트 직원(前台工作人员)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 헬스장을 처음 오셨나요?",
            "phonetic": "annyeonghaseyo. helseujangeul cheoeum osyeotnayo?",
            "zh": "您好，您是第一次来这家健身房吗？"
          },
          {
            "role": "user",
            "ko": "네, 멤버십을 등록하고 싶어요. 가격이 어떻게 돼요?",
            "phonetic": "ne, membeosipeul deungnokago sipeoyo. gageogi eotteoke dwaeyo?",
            "zh": "是的，我想办会员。价格是怎样的呢？"
          },
          {
            "role": "clerk",
            "ko": "한 달에 8만 원이고, 개인 트레이너 수업은 따로 있어요.",
            "phonetic": "han dare 8man wonigo, gaein teureineo sueobeun ttaro isseoyo",
            "zh": "一个月8万韩元，私教课是另收费的。"
          },
          {
            "role": "user",
            "ko": "첫 수업은 무료 체험을 할 수 있어요? 이용 시간은 언제까지예요?",
            "phonetic": "cheot sueobeun muryo cheheomeul hal su isseoyo? iyong siganeun eonjekkaji-yeyo?",
            "zh": "第一节可以免费体验吗？营业到几点呢？"
          },
          {
            "role": "clerk",
            "ko": "네, 일주일에 무료 체험을 한 번 할 수 있어요. 오전 6시부터 밤 11시까지 운영해요.",
            "phonetic": "ne, ilju-il-e muryo cheheomeul han beon hal su isseoyo. ojeon 6si-buteo bam 11si-kkaji unyeonghaeyo",
            "zh": "可以，每周能免费体验一次。我们营业到早上6点到晚上11点。"
          },
          {
            "role": "user",
            "ko": "좋아요. 그럼 이번 주말에 체험을 한 번 해 볼게요.",
            "phonetic": "joayo. geureom ibeon jumare cheheomeul han beon hae bolgeyo",
            "zh": "好的，那我这周末来体验一次。"
          }
        ],
        "tips": [
          "问价格用가격이 어떻게 돼요，问营业时间用언제까지예요。",
          "免费体验说무료 체험，可以先试课再决定。",
          "办理时可说멤버십을 등록하고 싶어요。"
        ]
      },
      {
        "scene": "공원에서 만나",
        "situationZh": "和朋友约好一起在公园慢跑并交流运动心得",
        "roles": {
          "clerk": "친구(朋友)",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘 같이 조깅하자. 날씨가 운동하기 좋아.",
            "phonetic": "oneul gachi joginghaja. nalssiga undonghagi joa",
            "zh": "今天一起慢跑吧，天气很适合运动。"
          },
          {
            "role": "user",
            "ko": "좋아! 하지만 먼저 스트레칭을 하고 시작하자.",
            "phonetic": "joa! hajiman meonjeo seuteureching-eul hago sijakaja",
            "zh": "好呀！不过我们先做拉伸再开始吧。"
          },
          {
            "role": "clerk",
            "ko": "그래, 준비 운동이 중요하니까. 이번 주에 얼마나 운동했어?",
            "phonetic": "geurae, junbi undongi jung-yohanikka. ibeon jue eolmana undonghaesseo?",
            "zh": "对，因为热身很重要。这周你运动了多少呀？"
          },
          {
            "role": "user",
            "ko": "매일 아침에 공원에서 30분쯤 조깅했어. 너는 어때?",
            "phonetic": "maeil achim-e gongwon-eseo samsib punjjeum joginghaesseo. neoneun eottae?",
            "zh": "我每天早上在公园慢跑30分钟左右。你呢？"
          },
          {
            "role": "clerk",
            "ko": "나는 헬스장에서 근력 운동을 했어. 몸이 훨씬 좋아졌어.",
            "phonetic": "naneun helseujang-eseo geullyeok undong-eul haesseo. momi hwolssin joajyeosseo",
            "zh": "我在健身房做力量训练，身体好多了。"
          },
          {
            "role": "user",
            "ko": "정말 좋은 일이네! 계속 같이 운동하자.",
            "phonetic": "jeongmal joeun ir-ine! gyesok gachi undonghaja",
            "zh": "真好呀！我们继续一起运动吧。"
          }
        ],
        "tips": [
          "热身准备可说준비 운동 또는 스트레칭을 하고 시작하자。",
          "约一起做某事用같이 ~하자/~하자고，是朋友间的自然说法。",
          "表达身体状况改善用몸이 좋아졌어(身体变好了)。"
        ]
      },
      {
        "scene": "清晨跑步",
        "situationZh": "早晨我在公园跑步，遇到邻居聊起跑步的好处。",
        "roles": {
          "clerk": "邻居",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "아침마다 여기서 달리세요?",
            "phonetic": "a-chim-ma-da yeo-gi-seo dal-li-se-yo?",
            "zh": "您每天早上都在这里跑步吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 매일 아침 달리기 운동을 해요.",
            "phonetic": "ne, mae-il a-chim dal-li-gi un-dong-eul hae-yo.",
            "zh": "是的，我每天早上都跑步锻炼。"
          },
          {
            "role": "user",
            "ko": "얼마나 오래 달리세요?",
            "phonetic": "eol-ma-na o-rae dal-li-se-yo?",
            "zh": "您跑多久？"
          },
          {
            "role": "clerk",
            "ko": "보통 삼십 분 정도 달려요.",
            "phonetic": "bo-tong sam-sip bun jeong-do dal-lyeo-yo.",
            "zh": "一般跑大概三十分钟。"
          },
          {
            "role": "user",
            "ko": "허리에 좋다고 들었어요.",
            "phonetic": "heo-ri-e jo-t-da-go deu-reot-eo-yo.",
            "zh": "我听说对腰很好。"
          },
          {
            "role": "clerk",
            "ko": "맞아요, 같이 달리다 보면 정말 상쾌해요.",
            "phonetic": "ma-ja-yo, ga-chi dal-li-da bo-myeon jeong-mal sang-kwae-hae-yo.",
            "zh": "对，跑起来真的会神清气爽。"
          }
        ],
        "tips": [
          "달리다／달리기（跑步），운동하다（运动）。",
          "얼마나 오래（多久）询问时长。",
          "좋다고 들다（听说好）用于转述听到的信息。"
        ]
      },
      {
        "scene": "上瑜伽课",
        "situationZh": "我在健身房里上瑜伽课，请教老师课堂的安排。",
        "roles": {
          "clerk": "老师",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "선생님, 요가 수업은 언제 있어요?",
            "phonetic": "seon-saeng-nim, yo-ga su-eop-eun eon-je i-sseo-yo?",
            "zh": "老师，瑜伽课什么时候有？"
          },
          {
            "role": "clerk",
            "ko": "매주 화요일과 목요일 저녁이에요.",
            "phonetic": "mae-ju hwa-yo-il-gwa mok-yo-il jeo-nyeok-i-e-yo.",
            "zh": "每周二和周四晚上有。"
          },
          {
            "role": "user",
            "ko": "한 시간짜리인가요?",
            "phonetic": "han si-gan-jja-ri-in-ga-yo?",
            "zh": "是一个小时的课吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 오십 분 동안 진행합니다.",
            "phonetic": "ne, o-sip bun dong-an jin-haeng-ham-ni-da.",
            "zh": "对，进行五十分钟。"
          },
          {
            "role": "user",
            "ko": "초보자도 따라 할 수 있을까요?",
            "phonetic": "cho-bo-ja-do tta-ra hal su i-sseul-kka-yo?",
            "zh": "初学者也能跟得上吗？"
          },
          {
            "role": "clerk",
            "ko": "물론이죠, 부담 없이 오세요.",
            "phonetic": "mul-lon-i-jyo, bu-dam eops-i o-se-yo.",
            "zh": "当然，请轻松地过来吧。"
          }
        ],
        "tips": [
          "요가（瑜伽）、수업（课）、진행하다（进行）。",
          "화요일／목요일（周二／周四）等星期表达。",
          "초보자도 따라 하다（初学者也能跟上），부담 없다（无负担，轻松）。"
        ]
      },
      {
        "scene": "健康饮食建议",
        "situationZh": "在健身房我和教练聊起运动和饮食搭配的建议。",
        "roles": {
          "clerk": "教练",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "운동 후에 뭘 먹는 게 좋아요?",
            "phonetic": "un-dong hu-e mwol meok-neun ge jo-a-yo?",
            "zh": "运动后吃点什么好？"
          },
          {
            "role": "clerk",
            "ko": "단백질을 충분히 섭취하는 게 좋아요.",
            "phonetic": "dan-baek-jil-eul chung-bun-hi seop-chwi-ha-neun ge jo-a-yo.",
            "zh": "要充分摄入蛋白质比较好。"
          },
          {
            "role": "user",
            "ko": "물은 얼마나 마셔야 돼요?",
            "phonetic": "mul-eun eol-ma-na ma-syeo-ya dwae-yo?",
            "zh": "水要喝多少呢？"
          },
          {
            "role": "clerk",
            "ko": "하루에 두 리터 정도 마시세요.",
            "phonetic": "ha-ru-e du ri-teo jeong-do ma-si-se-yo.",
            "zh": "一天大约喝两升。"
          },
          {
            "role": "user",
            "ko": "야식은 피해야 하나요?",
            "phonetic": "ya-sik-eun pi-hae-ya ha-na-yo?",
            "zh": "夜宵要避免吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 과한 야식은 건강에 나빠요.",
            "phonetic": "ne, gwa-han ya-sik-eun geon-gang-e na-ppa-yo.",
            "zh": "是的，过多的夜宵对健康不好。"
          }
        ],
        "tips": [
          "섭취하다（摄入）、단백질（蛋白质）、리터（升）。",
          "어떤 게 좋다（什么好）、얼마나（多少）用于问建议。",
          "피하다（避开）、건강에 나쁘다（对健康不好）。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "만나다",
        "phonetic": "mannada",
        "meaning": "动词：见面，相见",
        "example": "주말에 친구를 만나요.",
        "exampleZh": "周末跟朋友见面。"
      },
      {
        "word": "약속",
        "phonetic": "yaksok",
        "meaning": "名词：约定，约会",
        "example": "우리 약속이 있어요.",
        "exampleZh": "我们有一个约定。"
      },
      {
        "word": "시간",
        "phonetic": "sigan",
        "meaning": "名词：时间",
        "example": "시간이 있으면 같이 커피 마실까요?",
        "exampleZh": "如果有时间，要一起喝杯咖啡吗？"
      },
      {
        "word": "장소",
        "phonetic": "jangso",
        "meaning": "名词：场所，地点",
        "example": "만날 장소는 어디예요?",
        "exampleZh": "见面的地点是哪？"
      },
      {
        "word": "좋아요",
        "phonetic": "joayo",
        "meaning": "形容词/感叹：好，好的",
        "example": "그 약속 좋아요.",
        "exampleZh": "那个约定挺好的。"
      },
      {
        "word": "바쁘다",
        "phonetic": "bappeuda",
        "meaning": "形容词：忙",
        "example": "이번 주는 좀 바빠요.",
        "exampleZh": "这周有点忙。"
      },
      {
        "word": "빠지다",
        "phonetic": "ppajida",
        "meaning": "动词：缺席；错过",
        "example": "모임에 빠지지 마세요.",
        "exampleZh": "不要错过聚会。"
      },
      {
        "word": "전화하다",
        "phonetic": "jeonhwahada",
        "meaning": "动词：打电话",
        "example": "나중에 전화할게요.",
        "exampleZh": "我待会打电话给你。"
      },
      {
        "word": "함께",
        "phonetic": "hamkke",
        "meaning": "副词：一起",
        "example": "우리 함께 저녁을 먹어요.",
        "exampleZh": "我们一起吃晚饭吧。"
      },
      {
        "word": "쉬다",
        "phonetic": "swida",
        "meaning": "动词：休息",
        "example": "주말에 푹 쉬고 싶어요.",
        "exampleZh": "周末想好好休息。"
      }
    ],
    "article": {
      "title": "주말에 친구와 만나기",
      "titleZh": "周末和朋友见面",
      "paragraphs": [
        {
          "en": "주말에 친구와 만나기로 약속했어요.",
          "phonetic": "jumare chinguwa mannagiro yaksokaesseoyo.",
          "zh": "我约好了周末和朋友见面。"
        },
        {
          "en": "친구는 바빠서 오후에 시간이 있어요.",
          "phonetic": "chinguneun bappaseo ohue sigani isseoyo.",
          "zh": "朋友很忙，下午才有时间。"
        },
        {
          "en": "우리는 카페에서 만나서 같이 커피를 마실 거예요.",
          "phonetic": "urineun kapeseo mannaseo gachi keopireul masil geoyeyo.",
          "zh": "我们要在咖啡店见面，一起喝咖啡。"
        },
        {
          "en": "약속한 시간과 장소를 꼭 확인하고 가세요.",
          "phonetic": "yaksokhan sigangwa jangsoreul kkok hwaginhago gaseyo.",
          "zh": "一定要确认好约定的时间和地点再出发。"
        }
      ],
      "phrases": [
        {
          "phrase": "약속을 잡다",
          "meaning": "定约定，约时间"
        },
        {
          "phrase": "장소를 정하다",
          "meaning": "定地点"
        },
        {
          "phrase": "시간이 맞다",
          "meaning": "时间合适"
        }
      ],
      "grammar": [
        {
          "point": "-기로 하다",
          "explain": "表示决定做某事，常用于约定、计划。如 '만나기로 했어요'（决定见面）。"
        },
        {
          "point": "-고 싶다",
          "explain": "表示愿望'想…'，如 '쉬고 싶어요'（想休息）。"
        },
        {
          "point": "을/를 예요? (의문)",
          "explain": "疑问句尾，口语中常用 '인가요/예요' 表确认，如 '장소는 어디예요?'"
        }
      ],
      "tips": [
        "韩国人约会常用 '몇 시에? 어디에서?' 直接确认时间地点，显得干脆利落。",
        "迟到时要说 '죄송합니다. 늦었어요!' 表示道歉。",
        "聚会结束时常说 '다음에 또 만나요'（下次再见）。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "'주말에 친구를 만나요' 的中文意思是？",
            "options": [
              "周末去上班",
              "周末见朋友",
              "周末做饭",
              "周末学习"
            ],
            "answer": 1
          },
          {
            "q": "'장소' 的意思是？",
            "options": [
              "时间",
              "地点",
              "朋友",
              "咖啡"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "我们约好了周末见面。 __________. (만나기로 했어요)",
            "answer": "주말에 만나기로 했어요"
          },
          {
            "q": "想一起喝杯咖啡吗？ __________________? (마실까요)",
            "answer": "같이 커피 마실까요"
          }
        ],
        "writing": {
          "prompt": "写一段韩语对话，内容是和朋友约好周末见面，确定时间、地点，并互相告别。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "약속 정하기",
        "situationZh": "和朋友打电话，商量周末见面的时间和地点",
        "roles": {
          "clerk": "朋友 미나",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "이번 주말에 시간 있어?",
            "phonetic": "ibeon jumal-e sigani isseo?",
            "zh": "这周末你有时间吗？"
          },
          {
            "role": "user",
            "ko": "응, 토요일 오후에는 괜찮아.",
            "phonetic": "eung, toyoil ohu-oneun gwaenchana.",
            "zh": "嗯，周六下午没问题。"
          },
          {
            "role": "clerk",
            "ko": "그럼 어디에서 만날까?",
            "phonetic": "geureom eodieseo mannalkka?",
            "zh": "那么我们去哪儿见面？"
          },
          {
            "role": "user",
            "ko": "학교 근처 카페는 어때?",
            "phonetic": "hakgyo geuncheo khapeneun eottae?",
            "zh": "学校附近的咖啡店怎么样？"
          },
          {
            "role": "clerk",
            "ko": "좋아! 세 시에 만나자.",
            "phonetic": "joa! se sie mannaja.",
            "zh": "好啊！三点见吧。"
          },
          {
            "role": "user",
            "ko": "그래, 그럼 거기서 보자.",
            "phonetic": "geurae, geureom geogiseo boja.",
            "zh": "好，那就在那里见。"
          }
        ],
        "tips": [
          "口语中常用 '있어?'(有吗)、'어때?'(怎么样) 等亲切用语。",
          "'만나자' 是敬语的 '만나요' 的亲密体，朋友间使用。"
        ]
      },
      {
        "scene": "약속 바꾸기",
        "situationZh": "因为临时有事，跟朋友改约见面时间",
        "roles": {
          "clerk": "朋友 재민",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "내일 저녁에 시간 될까?",
            "phonetic": "nae-il jeonyeog-e sigan doelkka?",
            "zh": "明晚有空吗？"
          },
          {
            "role": "user",
            "ko": "미안, 내일은 좀 바빠.",
            "phonetic": "mian, nae-ir-eun jom bappa.",
            "zh": "抱歉，明天有点忙。"
          },
          {
            "role": "clerk",
            "ko": "그럼 언제가 괜찮아?",
            "phonetic": "geureom eonjega gwaenchana?",
            "zh": "那什么时候方便？"
          },
          {
            "role": "user",
            "ko": "주말이 더 좋을 것 같아.",
            "phonetic": "jumal-i deo jo-eul geot gata.",
            "zh": "周末可能更好。"
          },
          {
            "role": "clerk",
            "ko": "알겠어. 그러면 토요일로 하자.",
            "phonetic": "algetseo. geureomyeon toyoil-lo haja.",
            "zh": "明白了。那就定周六吧。"
          },
          {
            "role": "user",
            "ko": "응, 그때 꼭 보자!",
            "phonetic": "eung, geuttae kkok boja!",
            "zh": "嗯，到时候一定要见！"
          }
        ],
        "tips": [
          "改约时说 '미안'（抱歉）先表达歉意很自然。",
          "'로 하자' 表示'就定在…吧'，用于确定时间。"
        ]
      },
      {
        "scene": "迟到了",
        "situationZh": "和朋友约好在咖啡厅见面，但朋友迟到了一会儿，到了之后互相打招呼。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "미안해, 조금 늦었어. 기다렸지?",
            "phonetic": "mian-hae, jo-geum neu-jeot-seo. gi-da-ryeot-jji?",
            "zh": "对不起，我迟到了一会儿。你等了很久吧？"
          },
          {
            "role": "user",
            "ko": "괜찮아, 나도 방금 도착했어. 뭐 마실래?",
            "phonetic": "gwaen-chan-a, na-do bang-geum do-chak-hae-sseo. mwo ma-sil-lae?",
            "zh": "没关系，我刚到。想喝点什么？"
          },
          {
            "role": "clerk",
            "ko": "아이스 아메리카노 한 잔 주세요.",
            "phonetic": "a-i-seu a-me-ri-ka-no han jan ju-se-yo.",
            "zh": "请给我一杯冰美式。"
          },
          {
            "role": "user",
            "ko": "알았어, 그럼 난 카페 라테 마실게.",
            "phonetic": "a-ra-sseo, geu-reom nan ka-pe ra-te ma-sil-ge.",
            "zh": "好的，那我喝拿铁。"
          },
          {
            "role": "clerk",
            "ko": "오랜만에 보니까 너무 반가워!",
            "phonetic": "o-raen-man-e bo-ni-kka neo-mu ban-ga-wo!",
            "zh": "好久不见，见到你太开心了！"
          },
          {
            "role": "user",
            "ko": "나도 반가워! 오늘 뭐 할까?",
            "phonetic": "na-do ban-ga-wo! o-neul mwo hal-kka?",
            "zh": "我也是，很高兴见到你！今天做点什么呢？"
          }
        ],
        "tips": [
          "迟到的道歉常用'미안해, 조금 늦었어'（对不起，迟到了一会儿）。",
          "'오랜만에'意为'好久'，是韩语中常用的见面寒暄表达。",
          "咖啡饮品名常用外来语，如'아이스 아메리카노（冰美式）'。"
        ]
      },
      {
        "scene": "聊近况",
        "situationZh": "在咖啡厅边喝边聊，问候彼此最近过得怎么样。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "요즘 어떻게 지내고 있어?",
            "phonetic": "yo-jeum eo-tteo-ke ji-nae-go i-sseo?",
            "zh": "最近过得怎么样？"
          },
          {
            "role": "clerk",
            "ko": "매일 회사 다니느라 바빠. 너는 어때?",
            "phonetic": "mae-il hoe-sa da-ni-neu-ra ba-ppa. neo-neun eo-ttae?",
            "zh": "每天都忙着上班。你呢？"
          },
          {
            "role": "user",
            "ko": "나는 새로 시작한 취미가 생겼어.",
            "phonetic": "na-neun sae-ro si-jak-han chwi-mi-ga saeng-gyeo-sseo.",
            "zh": "我有了一个新开始的爱好。"
          },
          {
            "role": "clerk",
            "ko": "정말? 어떤 취미야?",
            "phonetic": "jeong-mal? eo-tteon chwi-mi-ya?",
            "zh": "真的吗？是什么样的爱好？"
          },
          {
            "role": "user",
            "ko": "등산을 시작했어. 주말마다 산에 가.",
            "phonetic": "deung-san-eul si-jak-hae-sseo. ju-mal-ma-da san-e ga.",
            "zh": "我开始爬山了。每个周末都去山上。"
          },
          {
            "role": "clerk",
            "ko": "대단하다! 다음에 같이 가자.",
            "phonetic": "dae-dan-ha-da! da-eum-e ga-chi ga-ja.",
            "zh": "真了不起！下次一起去吧。"
          }
        ],
        "tips": [
          "'어떻게 지내고 있어?'（过得怎么样）是经典的问候语。",
          "'정말?'意为'真的吗？'，表示惊讶或兴趣。",
          "'다음에 같이 가자'（下次一起去吧）是自然拉近距离的邀约表达。"
        ]
      },
      {
        "scene": "约定下次见面",
        "situationZh": "聚会结束，约好下次见面并道别。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "오늘 정말 즐거웠어. 시간이 너무 빨리 갔네.",
            "phonetic": "o-neul jeong-mal jeul-geo-wot-sseo. si-gan-i neo-mu ppal-li gan-ne.",
            "zh": "今天真的很开心。时间过得好快。"
          },
          {
            "role": "clerk",
            "ko": "그러게 말이야. 다음에 또 만나자.",
            "phonetic": "geu-reo-ge ma-ri-ya. da-eum-e tto man-na-ja.",
            "zh": "就是说啊。下次再见面吧。"
          },
          {
            "role": "user",
            "ko": "응, 다음 주말 어때?",
            "phonetic": "eung, da-eum ju-mal eo-ttae?",
            "zh": "嗯，下个周末怎么样？"
          },
          {
            "role": "clerk",
            "ko": "좋아! 주말에 시간 있어.",
            "phonetic": "jo-a! ju-mal-e si-gan i-sseo.",
            "zh": "好啊！周末我有时间。"
          },
          {
            "role": "user",
            "ko": "그럼 그때 연락할게. 조심해서 가.",
            "phonetic": "geu-reom geu-ttae yeon-rak-hal-ge. jo-sim-hae-seo ga.",
            "zh": "那到时候联系你。路上小心。"
          },
          {
            "role": "clerk",
            "ko": "응, 너도 조심히 가고 연락 기다릴게!",
            "phonetic": "eung, neo-do jo-sim-hi ga-go yeon-rak gi-da-ril-ge!",
            "zh": "嗯，你也路上小心，我等你的联系！"
          }
        ],
        "tips": [
          "'정말 즐거웠어'表示'真的很开心'，适合聚会结束后表达满足。",
          "'주말 어때?'（周末怎么样？）用于提议见面时间。",
          "'조심해서 가'（路上小心）是韩语道别时常用的关怀表达。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "설날",
        "phonetic": "seollal",
        "meaning": "名词：春节",
        "example": "설날에 가족들이 다 모여요.",
        "exampleZh": "春节时家人都聚在一起。"
      },
      {
        "word": "추석",
        "phonetic": "chuseok",
        "meaning": "名词：中秋",
        "example": "추석에는 가족과 송편을 먹어요.",
        "exampleZh": "中秋节和家人一起吃松饼。"
      },
      {
        "word": "세배하다",
        "phonetic": "sebaehada",
        "meaning": "动词：拜年（行礼问候）",
        "example": "아이들이 어른들께 세배를 해요.",
        "exampleZh": "孩子们向长辈拜年。"
      },
      {
        "word": "떡국",
        "phonetic": "tteokguk",
        "meaning": "名词：年糕汤",
        "example": "설날 아침에 떡국을 먹어요.",
        "exampleZh": "春节早上吃年糕汤。"
      },
      {
        "word": "덕담",
        "phonetic": "deokdam",
        "meaning": "名词：吉祥话，祝福语",
        "example": "새해에는 서로 덕담을 나눠요.",
        "exampleZh": "新年互相说吉祥话。"
      },
      {
        "word": "전통",
        "phonetic": "jeontong",
        "meaning": "名词：传统",
        "example": "한복 입기는 전통 풍습이에요.",
        "exampleZh": "穿韩服是传统风俗。"
      },
      {
        "word": "고향",
        "phonetic": "gohyang",
        "meaning": "名词：家乡",
        "example": "추석에 고향에 갑니다.",
        "exampleZh": "中秋回老家。"
      },
      {
        "word": "가족",
        "phonetic": "gajok",
        "meaning": "名词：家人",
        "example": "가족과 함께 보내요.",
        "exampleZh": "和家人一起度过。"
      },
      {
        "word": "조상",
        "phonetic": "josang",
        "meaning": "名词：祖先",
        "example": "추석에는 조상께 제사를 지내요.",
        "exampleZh": "中秋举行祭祀祖先的仪式。"
      },
      {
        "word": "보름달",
        "phonetic": "boreumdal",
        "meaning": "名词：满月",
        "example": "추석에 보름달이 아주 밝아요.",
        "exampleZh": "中秋的满月非常亮。"
      }
    ],
    "article": {
      "title": "한국의 추석",
      "titleZh": "韩国中秋",
      "paragraphs": [
        {
          "en": "추석은 한국의 큰 명절입니다.",
          "phonetic": "chuseogeun hangung-eui keun myeongjeorimnida.",
          "zh": "中秋是韩国重大的节日。"
        },
        {
          "en": "설날과 함께 가장 중요한 가족의 날이에요.",
          "phonetic": "seollalgwa hamkke gajang jung-yohan gajog-eui nari-eyo.",
          "zh": "与春节一样，这是最重要的家庭团聚之日。"
        },
        {
          "en": "추석에는 사람들이 고향에 가서 가족을 만납니다.",
          "phonetic": "chuseog-eun saramdeul-i gohyang-e gaseo gajogeul mannapnida.",
          "zh": "中秋节人们回到家乡与家人团聚。"
        },
        {
          "en": "조상께 제사를 지내고 송편을 나누어 먹어요.",
          "phonetic": "josangkke jesareul jinae-go songpyeoneul nanueo meogeoyo.",
          "zh": "先为祖先举行祭祀，然后分享松饼。"
        }
      ],
      "phrases": [
        {
          "phrase": "명절을 보내다",
          "meaning": "过节，度过节日"
        },
        {
          "phrase": "제사를 지내다",
          "meaning": "举行祭祀"
        },
        {
          "phrase": "덕담을 나누다",
          "meaning": "互致吉祥话"
        }
      ],
      "grammar": [
        {
          "point": "와/과 함께",
          "explain": "表示'和…一起'，如 '가족과 함께'（和家人一起）。"
        },
        {
          "point": "에서/에게/께",
          "explain": "'께'是宾语对象'에게'的尊敬形，如 '조상께 제사를 지내다'。"
        },
        {
          "point": "-할게요/-합니다 (격식체)",
          "explain": "正式的陈述结尾，用于书面或郑重场合，如 '갑니다'、'만납니다'。"
        }
      ],
      "tips": [
        "韩国过节常说 '즐거운 명절 보내세요'（祝你节日愉快）。",
        "过中秋要回家乡，高速非常堵车，路上习惯说 '길이 너무 막혀요'（路太堵了）。",
        "春节长辈会给压岁钱，叫做 '세뱃돈'。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "'송편' 是什么？",
            "options": [
              "年糕汤",
              "松饼（中秋节传统点心）",
              "饺子",
              "泡菜"
            ],
            "answer": 1
          },
          {
            "q": "韩国人春节早上一般吃什么？",
            "options": [
              "떡국 (年糕汤)",
              "송편 (松饼)",
              "비빔밥 (拌饭)",
              "떡볶이 (炒年糕)"
            ],
            "answer": 0
          }
        ],
        "fill": [
          {
            "q": "亲人们在中秋聚在一起。 추석에는 가족들이 ________. (모여요)",
            "answer": "모여요"
          },
          {
            "q": "周末和家人一起吃松饼。 주말에 가족과 __________. (먹어요)",
            "answer": "송편을 먹어요"
          }
        ],
        "writing": {
          "prompt": "用韩语写一小段文章，介绍你的中秋节（或春节）是怎么和家人一起度过的，提到了食物和活动。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "설날 인사",
        "situationZh": "春节期间到长辈家拜年，行礼并说祝福语",
        "roles": {
          "clerk": "长辈 할머니",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "설날 잘 지냈어요?",
            "phonetic": "seollal jal jinaesseoyo?",
            "zh": "春节过得好吗？"
          },
          {
            "role": "user",
            "ko": "네, 할머니께 세배 드리러 왔어요.",
            "phonetic": "ne, halmeonikke sebae deurireo wasseoyo.",
            "zh": "是的，我来给您拜年了。"
          },
          {
            "role": "clerk",
            "ko": "오, 고맙구나. 올해도 건강해야 한다.",
            "phonetic": "o, gomapguna. olhaedo geonganghaeya handa.",
            "zh": "哦，真懂事。今年也要健健康康的。"
          },
          {
            "role": "user",
            "ko": "할머니도 새해 복 많이 받으세요.",
            "phonetic": "halmeoni-do saehae bok mani badeuseyo.",
            "zh": "奶奶也祝您新年多福。"
          },
          {
            "role": "clerk",
            "ko": "여기 세뱃돈이다.",
            "phonetic": "yeogi sebaetdonida.",
            "zh": "这是给你的压岁钱。"
          },
          {
            "role": "user",
            "ko": "할머니, 감사합니다!",
            "phonetic": "halmeoni, gamsahamnida!",
            "zh": "奶奶，谢谢您！"
          }
        ],
        "tips": [
          "拜年用语 '새해 복 많이 받으세요'（新年多福）是春节最常用祝福。",
          "对长辈一定要用敬语 '드리러 왔어요'。"
        ]
      },
      {
        "scene": "송편 만들기",
        "situationZh": "和家人一起做中秋松饼，聊天",
        "roles": {
          "clerk": "妈妈 어머니",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘 같이 송편 만들자.",
            "phonetic": "oneul gachi songpyeon mandeulja.",
            "zh": "今天一起做松饼吧。"
          },
          {
            "role": "user",
            "ko": "좋아요! 어떻게 만드는지 가르쳐 주세요.",
            "phonetic": "joayo! eotteoke mandeuneunji gareuchyeo juseyo.",
            "zh": "好啊！请教我怎么做。"
          },
          {
            "role": "clerk",
            "ko": "반죽에 팥소를 넣고 반달 모양으로 빚어요.",
            "phonetic": "banjug-e patsoreul neokko bandal moyang-euro bityeoyo.",
            "zh": "把红豆馅放进面团里，捏成半月形。"
          },
          {
            "role": "user",
            "ko": "어렵지 않네요. 한번 해 볼게요.",
            "phonetic": "eoryeopji anneyo. hanbeon hae bolgeyo.",
            "zh": "原来不难。我来试试。"
          },
          {
            "role": "clerk",
            "ko": "잘했어! 찌면 이제 곧 먹을 수 있어.",
            "phonetic": "jalhaesseo! jjimyeon ije got meogeul su isseo.",
            "zh": "做得好！蒸好就可以吃了。"
          },
          {
            "role": "user",
            "ko": "와, 기대돼요!",
            "phonetic": "wa, gidaedwaeyo!",
            "zh": "哇，好期待！"
          }
        ],
        "tips": [
          "'반달 모양'（半月形）是松饼的传统形状。",
          "做松饼时如果馅漏出来就'속이 빠지다'（露馅），也有'出岔子'的引申义。"
        ]
      },
      {
        "scene": "长辈问候",
        "situationZh": "中秋和长辈见面，向长辈行大礼问安并收红包。",
        "roles": {
          "clerk": "长辈",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "할아버지, 할머니, 추석 잘 보내셨어요?",
            "phonetic": "ha-ra-beo-ji, hal-meo-ni, chu-seok jal bo-nae-syeo-sseo-yo?",
            "zh": "爷爷、奶奶，中秋节过得好吗？"
          },
          {
            "role": "clerk",
            "ko": "그래, 잘 지냈구나. 얼른 밥이나 먹자.",
            "phonetic": "geu-rae, jal ji-naet-gu-na. eol-leun ba-bi-na meok-ja.",
            "zh": "是啊，过得挺好的。快先吃饭吧。"
          },
          {
            "role": "user",
            "ko": "네, 새해처럼 건강히 지내세요.",
            "phonetic": "ne, sae-hae-cheo-reom geon-gang-hi ji-nae-se-yo.",
            "zh": "好的，像新年一样希望您身体健康。"
          },
          {
            "role": "clerk",
            "ko": "고맙다. 좀 더 먹어야 별로 크지.",
            "phonetic": "go-map-da. jom deo meo-geo-ya ol-lo keu-ji.",
            "zh": "谢谢。要多吃点才能长高啊。"
          },
          {
            "role": "user",
            "ko": "접사하고 세배할게요. 새해 복 많이 받으세요!",
            "phonetic": "jeop-sa-ha-go se-bae-hal-ge-yo. sae-hae bok ma-ni ba-deu-se-yo!",
            "zh": "我给您行大礼拜年。祝您新年福气满满！"
          },
          {
            "role": "clerk",
            "ko": "오냐, 뭐든지 하나라도 좋으니 열심히 해라.",
            "phonetic": "o-nya, mwo-deun-ji ha-na-ra-do jo-eu-ni yeol-sim-hi hae-ra.",
            "zh": "好，不管做什么事，用心做就行。"
          }
        ],
        "tips": [
          "'세배'是韩国拜年行大礼的礼仪，用在春节或节假日问候长辈。",
          "'새해 복 많이 받으세요'（祝您新年多福）是经典祝福语。",
          "'할아버지/할머니'分别为爷爷/奶奶，称呼长辈时要使用敬语。"
        ]
      },
      {
        "scene": "和家人烤肉",
        "situationZh": "中秋家庭聚餐，大家一起烤肉并互相夹菜照顾。",
        "roles": {
          "clerk": "家人",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "고기 잘 구워지고 있어?",
            "phonetic": "go-gi jal gu-wo-ji-go i-sseo?",
            "zh": "肉烤好了吗？"
          },
          {
            "role": "clerk",
            "ko": "응, 이제 먹을 만해. 먼저 먹어 봐.",
            "phonetic": "eung, i-je meo-geul man-hae. meon-jeo meo-geo bwa.",
            "zh": "嗯，现在可以吃了。先尝尝看。"
          },
          {
            "role": "user",
            "ko": "와, 정말 맛있어! 소스 좀 더 줄래?",
            "phonetic": "wa, jeong-mal ma-si-sseo! so-seu jom deo jul-lae?",
            "zh": "哇，真的很好吃！能再给点酱料吗？"
          },
          {
            "role": "clerk",
            "ko": "여기 있어. 너 이것도 먹어 봐.",
            "phonetic": "yeo-gi i-sseo. neo i-geot-do meo-geo bwa.",
            "zh": "给你。你也尝尝这个。"
          },
          {
            "role": "user",
            "ko": "우와, 이거 정말 맛있네! 나중에 주말마다 먹자.",
            "phonetic": "u-wa, i-geo jeong-mal ma-sin-ne! na-jung-e ju-mal-ma-da meok-ja.",
            "zh": "哇，这个真好吃！以后我们每个周末都吃吧。"
          },
          {
            "role": "clerk",
            "ko": "그래, 같이 있는 게 제일 좋지 않아.",
            "phonetic": "geu-rae, ga-chi it-neun ge je-il jo-chi a-na.",
            "zh": "是啊，大家在一起的时光才是最好的。"
          }
        ],
        "tips": [
          "'맛있어/맛있네'分别表示'好吃'和对他人做法的赞叹。",
          "聚餐时用'더 줄래?'（能再给一点吗）来礼貌地请求添加。",
          "'제일 좋지'意为'最好的'，用于表达情感或观点。"
        ]
      },
      {
        "scene": "感谢与道别",
        "situationZh": "节假日晚餐结束，向长辈表示感谢并道别。",
        "roles": {
          "clerk": "长辈",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "오늘 정말 맛있는 음식 잘 먹었어요.",
            "phonetic": "o-neul jeong-mal ma-sin-neun eum-sik jal meo-geo-sseo-yo.",
            "zh": "今天真高兴吃到这么美味的食物。"
          },
          {
            "role": "clerk",
            "ko": "제대로 뭐 먹기도 어려운데 고마워.",
            "phonetic": "je-dae-ro mwo meok-gi-do eo-ryeo-un-de go-ma-wo.",
            "zh": "能好好吃顿饭也不容易，谢谢。"
          },
          {
            "role": "user",
            "ko": "다음에 또 뵐게요. 조심히 지내세요.",
            "phonetic": "da-eum-e tto boel-ge-yo. jo-sim-hi ji-nae-se-yo.",
            "zh": "下次再来看您，请保重身体。"
          },
          {
            "role": "clerk",
            "ko": "그래, 너도 몸 조심하고 힘내라.",
            "phonetic": "geu-rae, neo-do mom jo-sim-ha-go him-nae-ra.",
            "zh": "好，你也注意身体，加油。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 새해에도 잘 부탁드려요!",
            "phonetic": "gam-sa-ham-ni-da. sae-hae-e-do jal bu-tak-deu-ryeo-yo!",
            "zh": "谢谢您。新的一年也请多多关照！"
          },
          {
            "role": "clerk",
            "ko": "응, 잘 가. 다음에 또 보자.",
            "phonetic": "eung, jal ga. da-eum-e tto bo-ja.",
            "zh": "嗯，慢走。下次再见。"
          }
        ],
        "tips": [
          "面对长辈用'났어요'和'고마워'等敬语表达感谢和祝福。",
          "'뵙다'是'见面'的敬语形式，'잘 뵙겠습니다'用于告别。",
          "'감사합니다'（谢谢）是对长辈最常用的正式感谢语。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "메시지",
        "phonetic": "mesiji",
        "meaning": "名词：消息，信息",
        "example": "메시지를 보내 주세요.",
        "exampleZh": "请发个消息给我。"
      },
      {
        "word": "문자",
        "phonetic": "munja",
        "meaning": "名词：短信",
        "example": "나중에 문자할게요.",
        "exampleZh": "我待会发短信给你。"
      },
      {
        "word": "앱",
        "phonetic": "aep",
        "meaning": "名词：App，应用",
        "example": "이 앱을 다운로드하세요.",
        "exampleZh": "请下载这个应用。"
      },
      {
        "word": "다운로드하다",
        "phonetic": "daunrodeuhada",
        "meaning": "动词：下载",
        "example": "사진을 다운로드했어요.",
        "exampleZh": "我下载了照片。"
      },
      {
        "word": "업로드하다",
        "phonetic": "eomrodeuhada",
        "meaning": "动词：上传",
        "example": "방금 영상을 업로드했어요.",
        "exampleZh": "我刚刚上传了视频。"
      },
      {
        "word": "연결하다",
        "phonetic": "yeon-gyeolhada",
        "meaning": "动词：连接",
        "example": "인터넷에 잘 연결됐어요.",
        "exampleZh": "网络连接得很好。"
      },
      {
        "word": "친구 추가",
        "phonetic": "chin-gu chuga",
        "meaning": "名词：加好友",
        "example": "카카오톡에서 친구 추가를 해요.",
        "exampleZh": "在KakaoTalk上加好友。"
      },
      {
        "word": "사이버",
        "phonetic": "saibeo",
        "meaning": "名词：网络的，虚拟的",
        "example": "사이버 공간에서 만났어요.",
        "exampleZh": "我们在网络空间里认识了。"
      },
      {
        "word": "보내다",
        "phonetic": "bonaeda",
        "meaning": "动词：发送",
        "example": "파일을 보낼게요.",
        "exampleZh": "我把文件发给你。"
      },
      {
        "word": "확인하다",
        "phonetic": "hwagin hada",
        "meaning": "动词：确认，查看",
        "example": "메시지를 확인했어요.",
        "exampleZh": "我确认了消息。"
      }
    ],
    "article": {
      "title": "카카오톡으로 친구에게 메시지 보내기",
      "titleZh": "用KakaoTalk给朋友发消息",
      "paragraphs": [
        {
          "en": "나는 앱으로 친구에게 메시지를 보냅니다.",
          "phonetic": "naneun aebeuro chinguege mesijireul bonamnida.",
          "zh": "我用应用给朋友发消息。"
        },
        {
          "en": "한국에서는 카카오톡을 가장 많이 사용해요.",
          "phonetic": "hangukeseoneun kakaotokeul gajang mani sayonghaeyo.",
          "zh": "在韩国使用最多的就是KakaoTalk。"
        },
        {
          "en": "친구 추가를 하면 바로 대화할 수 있어요.",
          "phonetic": "chinguchugareul hamyeon baro daehwahal su isseoyo.",
          "zh": "加上好友之后就能立刻对话了。"
        },
        {
          "en": "사진과 파일을 보내려면 '보내기' 버튼을 누르세요.",
          "phonetic": "sajingwa pailreul bonaeryeomyeon 'bonaegi' beoteuneul nureuseyo.",
          "zh": "想发送照片和文件就按下'发送'按钮。"
        }
      ],
      "phrases": [
        {
          "phrase": "메시지를 보내다",
          "meaning": "发送消息"
        },
        {
          "phrase": "친구를 추가하다",
          "meaning": "添加好友"
        },
        {
          "phrase": "화상 통화를 하다",
          "meaning": "进行视频通话"
        }
      ],
      "grammar": [
        {
          "point": "-려면 (하려면)",
          "explain": "表示'如果想要…'，如 '보내려면'（如果想发送）。"
        },
        {
          "point": "-면 바로",
          "explain": "'只要…就立刻'，如 '추가를 하면 바로 대화해요'（加了就能聊）。"
        },
        {
          "point": "-하세요 (명령 존대)",
          "explain": "请求/命令的敬语形，如 '누르세요'（请按）、'보세요'（请看）。"
        }
      ],
      "tips": [
        "韩国最流行的通讯软件是 '카카오톡'（KakaoTalk），外国人也常用 '라인'(Line) 和 '텔레그램'(Telegram)。",
        "韩国人常在聊天里用 'ㅋㅋ' 表示笑声（相当于'哈哈'），非常常见。",
        "看到对方已读但没回信时说 '읽고 답장을 안 하다'，意为'已读不回'。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "'메시지를 보내다' 的中文意思是？",
            "options": [
              "收消息",
              "发送消息",
              "删除消息",
              "转发消息"
            ],
            "answer": 1
          },
          {
            "q": "韩国最常用的聊天软件是？",
            "options": [
              "WeChat (微信)",
              "카카오톡 (KakaoTalk)",
              "Telegram",
              "Line"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "请每天给我发一个消息。 매일 저에게 ________. (보내세요)",
            "answer": "메시지를 보내세요"
          },
          {
            "q": "加了朋友就可以立刻聊天。 친구를 추가하면 __________. (대화할 수 있어요)",
            "answer": "바로 대화할 수 있어요"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段对话，内容是和朋友用APP沟通，约好见面并确认消息是否收到。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "채팅 시작하기",
        "situationZh": "在KakaoTalk上发起对话，和朋友打招呼并约时间",
        "roles": {
          "clerk": "朋友 지훈",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕! 잘 지내?",
            "phonetic": "annyeong! jal jinae?",
            "zh": "嗨！过得好吗？"
          },
          {
            "role": "user",
            "ko": "응, 잘 지내. 너는?",
            "phonetic": "eung, jal jinae. neoneun?",
            "zh": "嗯，挺好的。你呢？"
          },
          {
            "role": "clerk",
            "ko": "나도 괜찮아. 내일 시간 있어?",
            "phonetic": "nado gwaenchana. naeil sigani isseo?",
            "zh": "我也挺好。明天有空吗？"
          },
          {
            "role": "user",
            "ko": "있어. 몇 시에?",
            "phonetic": "isseo. myeoch sie?",
            "zh": "有。几点？"
          },
          {
            "role": "clerk",
            "ko": "오후 두 시에 역 앞에서 보자.",
            "phonetic": "ohu du sie yeog apeseo boja.",
            "zh": "下午两点在车站前见吧。"
          },
          {
            "role": "user",
            "ko": "좋아, 그럼 ㅋㅋ 내일 보자!",
            "phonetic": "joa, geureom heukheuk naeil boja!",
            "zh": "好，那明天见吧！"
          }
        ],
        "tips": [
          "聊天时'ㅋㅋ'代表笑声，相当于'哈哈'。",
          "'역 앞'(车站前)是韩国常见的见面地点。"
        ]
      },
      {
        "scene": "파일 보내기",
        "situationZh": "上传照片和文件给朋友，并确认对方收到",
        "roles": {
          "clerk": "朋友 유나",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "아까 찍은 사진 좀 보내 줄래?",
            "phonetic": "akka jjigeun sajin jom bonae jullae?",
            "zh": "能把你刚拍的照片发给我吗？"
          },
          {
            "role": "user",
            "ko": "응, 지금 업로드해서 보낼게.",
            "phonetic": "eung, jigeum eomrodeuhaeseo bonaelge.",
            "zh": "嗯，我现在上传后发给你。"
          },
          {
            "role": "clerk",
            "ko": "받았어! 잘 보여.",
            "phonetic": "badasseo! jal boyeo.",
            "zh": "收到了！很清楚。"
          },
          {
            "role": "user",
            "ko": "그 파일도 확인해 봐.",
            "phonetic": "geu paildo hwaginhae bwa.",
            "zh": "你也看看那个文件吧。"
          },
          {
            "role": "clerk",
            "ko": "확인했어, 고마워!",
            "phonetic": "hwaginhaesseo, gomawo!",
            "zh": "确认了，谢谢！"
          },
          {
            "role": "user",
            "ko": "응, 도움이 됐다니 다행이야.",
            "phonetic": "eung, doumi dwaetdani dahaeng-iya.",
            "zh": "嗯，能帮上忙真好。"
          }
        ],
        "tips": [
          "上传说 '업로드하다'，下载说 '다운로드하다'。",
          "'받았어'(收到了)是很常用的确认回复。"
        ]
      },
      {
        "scene": "约出去玩",
        "situationZh": "用KakaoTalk发消息约朋友周末出去玩。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "주말에 시간 있어?",
            "phonetic": "ju-mal-e si-gan i-sseo?",
            "zh": "周末有时间吗？"
          },
          {
            "role": "clerk",
            "ko": "응, 토요일에 시간 나. 왠지 그냥 물어보는 거지?",
            "phonetic": "eung, to-yo-il-e si-gan na. waen-ji geun-yang mu-reo-bo-neun geo-ji?",
            "zh": "嗯，周六有空。怎么突然问这个呢？"
          },
          {
            "role": "user",
            "ko": "영화 보고 싶은데 같이 갈래?",
            "phonetic": "yeong-hwa bo-go si-peun-de ga-chi gal-lae?",
            "zh": "我想看电影，要一起去吗？"
          },
          {
            "role": "clerk",
            "ko": "좋아! 무슨 영화 볼 거야?",
            "phonetic": "jo-a! mu-seun yeong-hwa bol geo-ya?",
            "zh": "好啊！要看什么电影？"
          },
          {
            "role": "user",
            "ko": "액션 영화 어때? 몇 시에 볼까?",
            "phonetic": "aek-syeon yeong-hwa eo-ttae? myeot si-e bol-kka?",
            "zh": "动作片怎么样？几点看合适呢？"
          },
          {
            "role": "clerk",
            "ko": "오후 2시쯤에 보자. 좋은 거 같아.",
            "phonetic": "o-hu du si-jjeum-e bo-ja. jo-eun geo ga-ta.",
            "zh": "我们下午2点左右看吧。听起来不错。"
          }
        ],
        "tips": [
          "'~할래?'是问对方意愿的口语表达，相当于'要不要…？'",
          "'어때?'（怎么样？）用来征询对方的意见。",
          "'~쯤'表示'大约'，如'2시쯤'即'大约两点'。"
        ]
      },
      {
        "scene": "分享照片",
        "situationZh": "旅行回来后把照片发给朋友分享。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "야, 방금 여행 다녀왔어!",
            "phonetic": "ya, bang-geum yeo-haeng da-nyeo-wa-sseo!",
            "zh": "嘿，我刚旅行回来了！"
          },
          {
            "role": "clerk",
            "ko": "진짜? 어디 갔었어?",
            "phonetic": "jin-jja? eo-di ga-sseo-sseo?",
            "zh": "真的吗？去了哪里？"
          },
          {
            "role": "user",
            "ko": "부산에 다녀왔어. 사진 보여줄게.",
            "phonetic": "bu-san-e da-nyeo-wa-sseo. sa-jin bo-yeo-jul-ge.",
            "zh": "去了釜山。我把照片发给你看看。"
          },
          {
            "role": "clerk",
            "ko": "와, 사진 엄청 이쁘네! 어떤 곳 갔어?",
            "phonetic": "wa, sa-jin eom-cheong i-ppeu-ne! eo-tteon got ga-sseo?",
            "zh": "哇，照片超好看！去了哪些地方？"
          },
          {
            "role": "user",
            "ko": "해변하고 시장에 갔었어. 정말 좋았어!",
            "phonetic": "hae-byeon-ha-go si-jang-e ga-sseo-sseo. jeong-mal jo-a-sseo!",
            "zh": "去了海边和市场。真的太好了！"
          },
          {
            "role": "clerk",
            "ko": "부럽다! 다음에 나도 같이 가고 싶어.",
            "phonetic": "bu-reop-da! da-eum-e na-do ga-chi ga-go si-peo.",
            "zh": "真羡慕！下次我也想一起去。"
          }
        ],
        "tips": [
          "'야'（哎/嘿）是KakaoTalk聊天时很随意的称呼开头。",
          "'사진 보여줄게'表示'我把照片发给你看'，常用的分享表达。",
          "'부럽다'意为'羡慕，真棒'，对朋友的分享表示羡慕。"
        ]
      },
      {
        "scene": "讨论约定内容",
        "situationZh": "朋友见面迟到，用消息确认见面地点和时间。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "지금 어디 있어? 좀 늦을 것 같아.",
            "phonetic": "ji-geum eo-di i-sseo? jom neu-jeul geot ga-ta.",
            "zh": "现在在哪里？我可能要迟到了。"
          },
          {
            "role": "user",
            "ko": "벌써 도착했는데 어디서 기다릴까?",
            "phonetic": "beol-sseo do-chak-hae-neun-de eo-di-seo gi-da-ril-kka?",
            "zh": "我已经到了，在哪里等你呢？"
          },
          {
            "role": "clerk",
            "ko": "카페 앞에서 기다려 줘. 곧 갈게.",
            "phonetic": "ka-pe ap-e-seo gi-da-ryeo jwo. got gal-ge.",
            "zh": "在咖啡厅前面等我吧。我马上到。"
          },
          {
            "role": "user",
            "ko": "알았어. 느긋하게 와. 여기서 기다릴게.",
            "phonetic": "a-ra-sseo. neu-geut-ha-ge wa. yeo-gi-seo gi-da-ril-ge.",
            "zh": "好的。慢点来。我在这里等你。"
          },
          {
            "role": "clerk",
            "ko": "고마워! 10분 안에 갈 길게.",
            "phonetic": "go-ma-wo! sip-bun an-e gal-gil-ge.",
            "zh": "谢谢你！我十分钟内到。"
          },
          {
            "role": "user",
            "ko": "천천히 와, 안 추워. 여기 밝혀 있어.",
            "phonetic": "cheon-cheon-hi wa, an chu-wo. yeo-gi bar-kyeo i-sseo.",
            "zh": "慢慢来，不冷。这里很亮。"
          }
        ],
        "tips": [
          "'~할 수 있어?'是询问对方掌握程度或能力，这里用在确认时间上。",
          "'숙제해서 갈기다'等表达要留意，常用't고련히'为主，但这是寒暄。",
          "迟到时用'좀 늦을 것 같아'（可能要晚点）自然告知对方。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "방",
        "phonetic": "bang",
        "meaning": "名词：房间，屋子",
        "example": "방이 아주 넓어요.",
        "exampleZh": "房间非常宽敞。"
      },
      {
        "word": "세",
        "phonetic": "se",
        "meaning": "名词：月租",
        "example": "월세가 어떻게 되요?",
        "exampleZh": "月租是多少？"
      },
      {
        "word": "보증금",
        "phonetic": "bojeunggeum",
        "meaning": "名词：保证金，押金",
        "example": "보증금은 100만 원이에요.",
        "exampleZh": "保证金是一百万韩元。"
      },
      {
        "word": "계약",
        "phonetic": "gyeyak",
        "meaning": "名词：合同，契约",
        "example": "계약서에 서명했어요.",
        "exampleZh": "我在合同上签了名。"
      },
      {
        "word": "계약하다",
        "phonetic": "gyeyakhada",
        "meaning": "动词：签约",
        "example": "다음 주에 계약하기로 했어요.",
        "exampleZh": "我们决定下周签约。"
      },
      {
        "word": "부동산",
        "phonetic": "budongsan",
        "meaning": "名词：房产中介",
        "example": "부동산에서 방을 알아봤어요.",
        "exampleZh": "我在房产中介那里看了房。"
      },
      {
        "word": "월세",
        "phonetic": "wolse",
        "meaning": "名词：房租（月租）",
        "example": "월세를 한 달에 한 번 내요.",
        "exampleZh": "房租一个月交一次。"
      },
      {
        "word": "설비",
        "phonetic": "seolbi",
        "meaning": "名词：设施，设备",
        "example": "이 방에는 에어컨 설비가 있어요.",
        "exampleZh": "这间房配有空调。"
      },
      {
        "word": "이사하다",
        "phonetic": "isahada",
        "meaning": "动词：搬家",
        "example": "다음 달에 한국으로 이사해요.",
        "exampleZh": "下个月搬家到韩国。"
      },
      {
        "word": "새집",
        "phonetic": "saejip",
        "meaning": "名词：新家",
        "example": "새집은 정말 깨끗해요.",
        "exampleZh": "新家真的很干净。"
      }
    ],
    "article": {
      "title": "홀로 쓰는 새 방을 구하다",
      "titleZh": "找一间自己的新房子",
      "paragraphs": [
        {
          "en": "저는 부동산을 찾아가 방을 알아봤어요.",
          "phonetic": "jeoneun budongsaneul chajaga bangeul arabwaseoyo.",
          "zh": "我去房产中介看了房子。"
        },
        {
          "en": "그 방은 월세가 50만 원이고 보증금이 500만 원이에요.",
          "phonetic": "geu bangeun wolsega osinman wongigo bojeunggeumi obaekman woni-eyo.",
          "zh": "那间房月租50万韩元，押金500万韩元。"
        },
        {
          "en": "방 안에는 침대와 책상, 에어컨이 있어요.",
          "phonetic": "bang anen chimdaewa chaeksang, e-eokeoni isseoyo.",
          "zh": "房间里有床、书桌和空调。"
        },
        {
          "en": "저는 마음에 들어서 다음 주에 계약하려고 해요.",
          "phonetic": "jeoneun maeume deureoseo daeum jue gyeyakaryeogo haeyo.",
          "zh": "我很满意，所以打算下周签合同。"
        }
      ],
      "phrases": [
        {
          "phrase": "방을 알아보다",
          "meaning": "找房，看房"
        },
        {
          "phrase": "월세를 내다",
          "meaning": "交房租"
        },
        {
          "phrase": "계약서에 서명하다",
          "meaning": "在合同上签名"
        }
      ],
      "grammar": [
        {
          "point": "-기로 하다",
          "explain": "表示'决定做…'，如 '계약하기로 했어요'（决定签约）。"
        },
        {
          "point": "-려고 하다",
          "explain": "表示'打算/想要做…'，如 '계약하려고 해요'（打算签约）。"
        },
        {
          "point": "에 있어요/없어요",
          "explain": "表示'在某处有/没有…'，用于描述房间设施，如 '책상이 있어요'。"
        }
      ],
      "tips": [
        "韩国租房常涉及 '보증금'(押金)和 '월세'(月租)，是租约的核心条款。",
        "看房时问清楚 '전기요금, 수도비, 관리비'（电费、水费、管理费）是否另算。",
        "签约前一定要在 '부동산'（中介）确认纸质合同。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "'보증금' 的中文意思是？",
            "options": [
              "房租",
              "押金，保证金",
              "水电费",
              "管理费"
            ],
            "answer": 1
          },
          {
            "q": "'이사하다' 的意思是？",
            "options": [
              "上班",
              "搬家",
              "买东西",
              "出差"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "房间的月租是三十万韩元。 방의 월세가 ________. (30만 원이에요)",
            "answer": "삼십만 원이에요"
          },
          {
            "q": "这个房间里有床和桌子。 이 방에는 __________. (침대와 책상이 있어요)",
            "answer": "침대와 책상이 있어요"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你租了一间新房，包括月租、押金以及房间里的设施。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "방 보러 가기",
        "situationZh": "在房产中介处询问房子并看房",
        "roles": {
          "clerk": "中介",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어떤 방을 찾으세요?",
            "phonetic": "eotteon bangeul chajeuseyo?",
            "zh": "您想找什么样的房子？"
          },
          {
            "role": "user",
            "ko": "조용하고 월세가 싼 방이 좋아요.",
            "phonetic": "joyounghago wolsega ssan bangi joayo.",
            "zh": "我想要安静、房租便宜的房间。"
          },
          {
            "role": "clerk",
            "ko": "한 번 보여 드리겠습니다.",
            "phonetic": "han beon boyeo deurigetseumnida.",
            "zh": "我带您看一遍。"
          },
          {
            "role": "user",
            "ko": "방이 참 밝고 깨끗하네요.",
            "phonetic": "bangi cham barkgo kkaekkeuthaneyo.",
            "zh": "房间真明亮又干净。"
          },
          {
            "role": "user",
            "ko": "관리는 얼마나 내야 하나요?",
            "phonetic": "gwanrineun eolmana naeya hanayo?",
            "zh": "管理费要交多少？"
          },
          {
            "role": "clerk",
            "ko": "관리비까지 한 달에 이십만 원이에요.",
            "phonetic": "gwanbibikkaji han dare isipman woni-eyo.",
            "zh": "把管理费算上，一个月二十万韩元。"
          }
        ],
        "tips": [
          "询问费用用 '얼마나 내야 해요?'（要交多少）。",
          "看房时要看看采光 '밝다'(明亮) 和朝向。"
        ]
      },
      {
        "scene": "계약하기",
        "situationZh": "决定租房并和房东签合同",
        "roles": {
          "clerk": "中介/房东",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "이 방으로 결정하시겠어요?",
            "phonetic": "i bangeuro gyeoljeonghasigesseoyo?",
            "zh": "您决定要这间房吗？"
          },
          {
            "role": "user",
            "ko": "네, 이 방으로 하겠습니다.",
            "phonetic": "ne, i bangeuro hagetseumnida.",
            "zh": "是的，我决定要这间房。"
          },
          {
            "role": "clerk",
            "ko": "그럼 계약서를 작성합니다.",
            "phonetic": "geureom gyeyangseoreul jaksenghamnida.",
            "zh": "那么我们签订合同。"
          },
          {
            "role": "user",
            "ko": "계약 기간은 얼마나 되나요?",
            "phonetic": "gyeyak giganeun eolmana doenayo?",
            "zh": "合同期限是多久？"
          },
          {
            "role": "clerk",
            "ko": "보통 이 년입니다.",
            "phonetic": "botong i nyeonimnida.",
            "zh": "通常是两年。"
          },
          {
            "role": "user",
            "ko": "알겠습니다. 여기에 서명할게요.",
            "phonetic": "algetseumnida. yeogie seomyeonghalgeyo.",
            "zh": "明白了。我在这里签名。"
          }
        ],
        "tips": [
          "韩国租房合同通常是一到两年，签约时要看清期限。",
          "'서명'(签名)在签约时必不可少。"
        ]
      },
      {
        "scene": "打听房源",
        "situationZh": "在中介看房，询问房子的租金和条件。",
        "roles": {
          "clerk": "中介",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "이 근처에 방 하나 구할 수 있을까요?",
            "phonetic": "i geun-cheo-e bang ha-na gu-hal su i-sseul-kka-yo?",
            "zh": "这附近能找到一间房吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 이 근처에 원룸이 있습니다. 보러 가실래요?",
            "phonetic": "ne, i geun-cheo-e wol-lum-i it-seup-ni-da. bo-reo ga-si-llae-yo?",
            "zh": "是的，这附近有单间公寓。要去看一下吗？"
          },
          {
            "role": "user",
            "ko": "보증금은 얼마예요?",
            "phonetic": "bo-jeung-geum-eun eol-ma-ye-yo?",
            "zh": "保证金是多少？"
          },
          {
            "role": "clerk",
            "ko": "보증금 500만 원에 월세 40만 원이에요.",
            "phonetic": "bo-jeung-geum o-baek-man won-e wol-se sa-sip-man won-i-e-yo.",
            "zh": "保证金500万韩元，月租40万韩元。"
          },
          {
            "role": "user",
            "ko": "월세에 관리비는 포함이에요?",
            "phonetic": "wol-se-e gwal-ri-bi-neun po-ham-i-e-yo?",
            "zh": "月租里包含管理费吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 관리비 포함입니다. 바로 옆에 역도 있어요.",
            "phonetic": "ne, gwal-ri-bi po-ham-im-ni-da. ba-ro yeop-e yeok-do i-sseo-yo.",
            "zh": "是的，管理费包含在内。旁边还有地铁站。"
          }
        ],
        "tips": [
          "韩语找房常说'보증금'（保证金）和'월세'（月租）。",
          "'~있어요'表示'有/存在'，回家问条件时很常用。",
          "'관리비'指'管理费'，看房前务必确认是否包含在月租里。"
        ]
      },
      {
        "scene": "确认设施与细节",
        "situationZh": "看房时确认厨房、卫生间和周边设施。",
        "roles": {
          "clerk": "中介",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "주방 시설은 어떤가요?",
            "phonetic": "ju-bang si-seol-eun eo-tteon-ga-yo?",
            "zh": "厨房设施怎么样？"
          },
          {
            "role": "clerk",
            "ko": "가스레인지하고 냉장고 다 있어요.",
            "phonetic": "ga-seu-re-in-ji-ha-go naeng-jang-go da i-sseo-yo.",
            "zh": "燃气灶和冰箱都有。"
          },
          {
            "role": "user",
            "ko": "세탁기도 있어요?",
            "phonetic": "se-tak-gi-do i-sseo-yo?",
            "zh": "有洗衣机吗？"
          },
          {
            "role": "clerk",
            "ko": "세탁기는 복도 공용으로 있어요.",
            "phonetic": "se-tak-gi-neun bok-do gong-yong-eu-ro i-sseo-yo.",
            "zh": "洗衣机在走廊是共用的。"
          },
          {
            "role": "user",
            "ko": "주변에 편의시설은 많아요?",
            "phonetic": "ju-byeon-e pyeon-ui-si-seol-eun ma-na-yo?",
            "zh": "周边有很多便利设施吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 편의점하고 카페가 가까이 있어요.",
            "phonetic": "ne, pyeon-ui-jeom-ha-go ka-pe-ga ga-kka-i i-sseo-yo.",
            "zh": "是的，便利店和咖啡厅都在附近。"
          }
        ],
        "tips": [
          "看房常问'스레인지（灶台）'、'냉장고（冰箱）'等家电是否齐全。",
          "'공용'表示'共用'，如'공용 세탁기'就是'公用洗衣机'。",
          "'편의시설'泛指'便利设施'，如便利店、咖啡店等。"
        ]
      },
      {
        "scene": "签约前咨询",
        "situationZh": "决定签约，咨询中介签约需要准备的资料和条件。",
        "roles": {
          "clerk": "中介",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "이 방으로 계약하고 싶어요. 어떻게 해야 하나요?",
            "phonetic": "i bang-eu-ro gye-yak-ha-go si-peo-yo. eo-tteo-ke hae-ya ha-na-yo?",
            "zh": "我想签这个房间，应该怎么做呢？"
          },
          {
            "role": "clerk",
            "ko": "계약 시 신분증하고 계약금이 필요해요.",
            "phonetic": "gye-yak si sin-bun-jeung-ha-go gye-yak-geum-i pil-yo-hae-yo.",
            "zh": "签约时需要身份证和订金。"
          },
          {
            "role": "user",
            "ko": "계약 기간은 보통 얼마예요?",
            "phonetic": "gye-yak gi-gan-eun bo-tong eol-ma-ye-yo?",
            "zh": "合同期一般是多少？"
          },
          {
            "role": "clerk",
            "ko": "보통 1년 계약이 많아요.",
            "phonetic": "bo-tong il-nyeon gye-yak-i ma-na-yo.",
            "zh": "一般签一年合同居多。"
          },
          {
            "role": "user",
            "ko": "처음에 얼마를 내면 되나요?",
            "phonetic": "cheo-eum-e eol-ma-reul nae-myeon doe-na-yo?",
            "zh": "一开始要付多少钱？"
          },
          {
            "role": "clerk",
            "ko": "계약금으로 한 달 치 월세 수준을 내시면 됩니다.",
            "phonetic": "gye-yak-geum-eu-ro han dal chi wol-se su-jun-eul nae-si-myeon doem-ni-da.",
            "zh": "订金交相当于一个月月租的金额就可以了。"
          }
        ],
        "tips": [
          "'신분증'指'身份证'，签约时必须携带。",
          "'계약금'意为'订金/定金'，是签约当天要交的金额。",
          "'계약 기간'指'合同期限'，韩语租房通常以一年为单位。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "면접",
        "phonetic": "myeonjeop",
        "meaning": "名词：面试",
        "example": "내일 회사 면접이 있어요.",
        "exampleZh": "明天有公司面试。"
      },
      {
        "word": "지원하다",
        "phonetic": "jiwonhada",
        "meaning": "动词：申请，应聘",
        "example": "그 회사에 지원했어요.",
        "exampleZh": "我应聘了那家公司。"
      },
      {
        "word": "경력",
        "phonetic": "gyeongnyeok",
        "meaning": "名词：工作经验",
        "example": "저는 2년 경력이 있어요.",
        "exampleZh": "我有两年的工作经验。"
      },
      {
        "word": "이력서",
        "phonetic": "iryeokseo",
        "meaning": "名词：简历",
        "example": "이력서를 미리 제출하세요.",
        "exampleZh": "请提前递交简历。"
      },
      {
        "word": "자기소개",
        "phonetic": "jagisogae",
        "meaning": "名词：自我介绍",
        "example": "자기소개를 간단히 해 주세요.",
        "exampleZh": "请简单做一下自我介绍。"
      },
      {
        "word": "장점",
        "phonetic": "jangjeom",
        "meaning": "名词：优点",
        "example": "제 장점은 책임감이에요.",
        "exampleZh": "我的优点是责任心。"
      },
      {
        "word": "단점",
        "phonetic": "danjeom",
        "meaning": "名词：缺点",
        "example": "단점도 솔직히 말씀했어요.",
        "exampleZh": "我也坦诚地说了缺点。"
      },
      {
        "word": "합격",
        "phonetic": "hapgyeok",
        "meaning": "名词：合格，录取",
        "example": "면접에 합격했어요!",
        "exampleZh": "我面试合格了！"
      },
      {
        "word": "노력하다",
        "phonetic": "noryeokhada",
        "meaning": "动词：努力",
        "example": "꿈을 위해 열심히 노력해요.",
        "exampleZh": "为了梦想而努力。"
      },
      {
        "word": "팀워크",
        "phonetic": "timwokeu",
        "meaning": "名词：团队合作",
        "example": "저는 팀워크를 중요하게 생각해요.",
        "exampleZh": "我很看重团队合作。"
      }
    ],
    "article": {
      "title": "첫 면접을 잘 보는 방법",
      "titleZh": "第一次面试做好的方法",
      "paragraphs": [
        {
          "en": "면접 전에 이력서를 다시 확인해요.",
          "phonetic": "myeonjeop jeone iryeokseoreul dasi hwaginhae-yo.",
          "zh": "面试前要再次检查简历。"
        },
        {
          "en": "첫인상이 중요하니 정돈된 옷차림을 하세요.",
          "phonetic": "cheosin-sangi jungyohani jeongdondoen otcharimeul haseyo.",
          "zh": "第一印象很重要，穿着要整洁。"
        },
        {
          "en": "회사와 직무에 대해 미리 공부해요.",
          "phonetic": "hoesawa jingmue daehae miri gongbu-hae-yo.",
          "zh": "事先了解公司和岗位。"
        },
        {
          "en": "질문에는 자신 있게 답하고 웃음을 잃지 마세요.",
          "phonetic": "jilmumeneun jasin itge daphago useumeul ilhji maseyo.",
          "zh": "回答问题要自信，并且不要失去笑容。"
        }
      ],
      "phrases": [
        {
          "phrase": "이력서를 제출하다",
          "meaning": "提交简历"
        },
        {
          "phrase": "자기소개를 하다",
          "meaning": "做自我介绍"
        },
        {
          "phrase": "면접에 합격하다",
          "meaning": "通过面试"
        }
      ],
      "grammar": [
        {
          "point": "-기 전에",
          "explain": "表示'在…之前'，如 '면접 전에 확인해요'（面试前确认）。"
        },
        {
          "point": "-면 좋겠다 / -도록",
          "explain": "表示愿望或目标，'있으면 좋겠어요'（有就好了）。"
        },
        {
          "point": "-기에/-아서 (이유)",
          "explain": "表示原因'因为…'，如 '중요하니 정돈된 옷차림을 하세요'。"
        }
      ],
      "tips": [
        "面谈前一定要复习基本问题：'자기소개해 주세요'(请自我介绍)、'장점과 단점은?'(优缺点是什么？)。",
        "韩国面试常问'입력하신 지원 동기는 무엇입니까?'（申请动机是什么）。",
        "回答要简洁有力，多用敬语，并保持眼神交流。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "'이력서' 的中文意思是？",
            "options": [
              "合同",
              "简历",
              "名片",
              "申请表"
            ],
            "answer": 1
          },
          {
            "q": "'면접에 합격하다' 的意思是？",
            "options": [
              "获得面试机会",
              "通过面试",
              "放弃面试",
              "延长面试"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "面试前重新看看你的简历。 면접 전에 이력서를 ________. (확인해요)",
            "answer": "다시 확인해요"
          },
          {
            "q": "请做一下自我介绍。 __________ 해 주세요. (자기소개)",
            "answer": "자기소개를"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段你的自我介绍，包括姓名、专业或工作经历、你的优点和申请动机。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "면접 시작",
        "situationZh": "进入面试间，和面试官做自我介绍并回答提问",
        "roles": {
          "clerk": "面试官",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "자기소개를 간단히 해 주세요.",
            "phonetic": "jagisogaereul gandanhi hae juseyo.",
            "zh": "请简单做一下自我介绍。"
          },
          {
            "role": "user",
            "ko": "안녕하세요. 저는 이민수라고 합니다.",
            "phonetic": "annyeonghaseyo. jeoneun iminsu-rago hamnida.",
            "zh": "您好，我叫李敏秀。"
          },
          {
            "role": "clerk",
            "ko": "왜 우리 회사에 지원했습니까?",
            "phonetic": "wae uri hoesae jiwonhaetseumnikka?",
            "zh": "您为什么申请我们公司？"
          },
          {
            "role": "user",
            "ko": "회사의 미래가 밝다고 생각해서 지원했습니다.",
            "phonetic": "hoesae miraega barkdago saenggakaeseo jiwonhaetseumnida.",
            "zh": "因为觉得公司的未来很光明，所以我申请了。"
          },
          {
            "role": "clerk",
            "ko": "열심히 하실 자신 있습니까?",
            "phonetic": "yeolsimhi hasil jasin itseumnikka?",
            "zh": "您有努力干的信心吗？"
          },
          {
            "role": "user",
            "ko": "네, 저는 책임감이 강하기 때문에 반드시 잘하겠습니다.",
            "phonetic": "ne, jeoneun chaegimgami ganghagi ttaemun-e bandeusi jalhagetseumnida.",
            "zh": "是的，因为我责任心很强，所以一定会做好的。"
          }
        ],
        "tips": [
          "面试开头自我介绍的固定句式是 '안녕하세요. 저는 …라고 합니다.'。",
          "答'为什么应聘'时要结合公司特点，说 '회사의 … 좋아서 지원했습니다'。"
        ]
      },
      {
        "scene": "면접 마무리",
        "situationZh": "面试接近尾声，确认结果时间并告别",
        "roles": {
          "clerk": "面试官",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "좋은 답변이었습니다.",
            "phonetic": "joeun dapbyeoni-eotseumnida.",
            "zh": "回答得很好。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 좋은 말씀 감사드립니다.",
            "phonetic": "gamsahamnida. joeun malsseum gamsadeurimnida.",
            "zh": "谢谢，非常感谢您的好评。"
          },
          {
            "role": "clerk",
            "ko": "결과는 일주일 안에 알려 드리겠습니다.",
            "phonetic": "gyeolgwaneun ilju-il ane allyeo deurigetseumnida.",
            "zh": "结果会在一个星期内通知您。"
          },
          {
            "role": "user",
            "ko": "네, 기대하고 기다리겠습니다.",
            "phonetic": "ne, gidaehago gidarigetseumnida.",
            "zh": "是的，我会期待并等待。"
          },
          {
            "role": "clerk",
            "ko": "오늘 수고하셨습니다.",
            "phonetic": "oneul sugo hasilseumnida.",
            "zh": "今天辛苦了。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 안녕히 계세요.",
            "phonetic": "gamsahamnida. annyeonghi gyeseyo.",
            "zh": "谢谢，再见。"
          }
        ],
        "tips": [
          "结束时要礼貌致谢 '김사합니다'，并说 '수고하셨습니다'。",
          "接到通知后常说 '기다리겠습니다'（我会等待）。"
        ]
      },
      {
        "scene": "自我介绍",
        "situationZh": "面试官让我简单介绍自己，并说明自己的背景。",
        "roles": {
          "clerk": "面试官",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "먼저 자기소개를 해 주세요.",
            "phonetic": "meon-jeo ja-gi-so-gae-reul hae ju-se-yo.",
            "zh": "请先做个自我介绍。"
          },
          {
            "role": "user",
            "ko": "안녕하세요. 저는 김민수라고 합니다.",
            "phonetic": "an-nyeong-ha-se-yo. jeo-neun gim-min-su-ra-go ham-ni-da.",
            "zh": "您好，我是金敏秀。"
          },
          {
            "role": "user",
            "ko": "대학교에서 컴퓨터공학을 전공했습니다.",
            "phonetic": "dae-hak-gyo-e-seo keom-pyu-teo-gong-hak-eul jeon-gong-hae-sseum-ni-da.",
            "zh": "我在大学里主修了计算机工程。"
          },
          {
            "role": "clerk",
            "ko": "그럼 경력 같은 게 있으세요?",
            "phonetic": "geu-reom gyeong-ryeok ga-teun ge i-seu-se-yo?",
            "zh": "那有什么相关经历吗？"
          },
          {
            "role": "user",
            "ko": "네, 작년에 인턴으로 6개월 일했습니다.",
            "phonetic": "ne, jak-nyeon-e in-teon-eu-ro yeok-gae-wol il-hae-sseum-ni-da.",
            "zh": "是的，去年做了6个月的实习。"
          },
          {
            "role": "clerk",
            "ko": "알겠습니다. 좋은 인상이네요.",
            "phonetic": "al-get-seum-ni-da. jo-eun in-sang-i-ne-yo.",
            "zh": "好的，印象不错。"
          }
        ],
        "tips": [
          "面试先介绍名字时用'저는 ~라고 합니다'（我是…）。",
          "'전공하다'意为'主修'，介绍专业背景时常用。",
          "'경력'指'经历/履历'，面试官常追问是否有相关经验。"
        ]
      },
      {
        "scene": "回答工作问题",
        "situationZh": "面试官问为什么想来本公司和工作计划。",
        "roles": {
          "clerk": "面试官",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "왜 우리 회사에 지원하셨어요?",
            "phonetic": "wae u-ri hoe-sa-e ji-won-ha-syeo-sseo-yo?",
            "zh": "为什么想申请我们公司？"
          },
          {
            "role": "user",
            "ko": "제가 배운 기술을 실제로 활용하고 싶어서요.",
            "phonetic": "je-ga bae-un gi-sul-eul sil-je-jeu-ro hwal-yong-ha-go si-peo-seo-yo.",
            "zh": "因为我希望把学到的技术实际应用起来。"
          },
          {
            "role": "user",
            "ko": "또한 팀 분위기가 존중되는 곳에서 일하고 싶습니다.",
            "phonetic": "tto-han tim bun-wi-gi-ga jon-jung-doe-neun go-seo seo il-ha-go sip-seum-ni-da.",
            "zh": "而且我想在尊重团队氛围的地方工作。"
          },
          {
            "role": "clerk",
            "ko": "장래의 계획은 어떤가요?",
            "phonetic": "jang-rae-ui gye-hoe-geun eo-tteon-ga-yo?",
            "zh": "对未来的规划是怎样的？"
          },
          {
            "role": "user",
            "ko": "오래 다니면서 회사와 함께 성장하고 싶습니다.",
            "phonetic": "o-rae da-ni-myeon-seo hoe-sa-wa ham-kke seong-jang-ha-go sip-seum-ni-da.",
            "zh": "我想长期在这里工作，与公司一起成长。"
          },
          {
            "role": "clerk",
            "ko": "좋은 대답이네요. 더 궁금한 점 있으세요?",
            "phonetic": "jo-eun dae-dap-i-ne-yo. deo gung-geum-han jeom i-seu-se-yo?",
            "zh": "回答得很好。还有什么想问的吗？"
          }
        ],
        "tips": [
          "'왜 지원하셨어요?'（为什么申请）是面试必问题，要结合技术或理念回答。",
          "'장래의 계획'指'未来的规划'，提前想好可加分。",
          "'오래 다니면서 성장하고 싶다'表达稳定与成长意愿，体现忠诚度。"
        ]
      },
      {
        "scene": "面试提问与结束",
        "situationZh": "面试结束时礼貌提问，并向面试官道别。",
        "roles": {
          "clerk": "面试官",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "질문이 있으시면 여쭤보세요.",
            "phonetic": "jil-mun-i i-seu-si-myeon yeo-jjweo-bo-se-yo.",
            "zh": "如果有问题可以提问。"
          },
          {
            "role": "user",
            "ko": "회사에서 신입에게 기대하는 점을 알고 싶습니다.",
            "phonetic": "hoe-sa-e-seo sin-ib-e-ge gi-dae-ha-neun jeom-eul al-go sip-seum-ni-da.",
            "zh": "我想了解公司对新人有怎样的期望。"
          },
          {
            "role": "clerk",
            "ko": "적극성과 책임감이 가장 중요하다고 생각합니다.",
            "phonetic": "jeok-geuk-seong-gwa chaek-im-gam-i ga-jang jung-yo-ha-da-go saeng-gak-ham-ni-da.",
            "zh": "我们认为主动性和责任感最重要。"
          },
          {
            "role": "user",
            "ko": "네, 이해했습니다. 감사합니다.",
            "phonetic": "ne, i-hae-hae-sseum-ni-da. gam-sa-ham-ni-da.",
            "zh": "是的，我理解了。谢谢。"
          },
          {
            "role": "clerk",
            "ko": "오늘 면접은 여기까지입니다. 수고하셨습니다.",
            "phonetic": "o-neul myeon-jeop-eun yeo-gi-kka-ji-im-ni-da. su-go-ha-syeot-seum-ni-da.",
            "zh": "今天的面试到此结束。辛苦了。"
          },
          {
            "role": "user",
            "ko": "네, 저도 좋은 기회 감사합니다. 인사드리겠습니다.",
            "phonetic": "ne, jeo-do jo-eun gi-hoe gam-sa-ham-ni-da. in-sa-deu-ri-get-seum-ni-da.",
            "zh": "好的，也很感谢您给我这个机会。我先告辞了。"
          }
        ],
        "tips": [
          "面试结束向'신입（新人）'提问展现积极态度很加印象分。",
          "'수고하셨습니다'意为'辛苦了'，面试结束时常对考官说。",
          "'인사드리겠습니다'是礼貌地行告别礼的表达，体现教养。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "기쁘다",
        "phonetic": "gippeuda",
        "meaning": "形容词，高兴、快乐",
        "example": "오늘 소식을 들으니 정말 기쁘다.",
        "exampleZh": "今天听到这个消息真的很高兴。"
      },
      {
        "word": "슬프다",
        "phonetic": "seulpeuda",
        "meaning": "形容词，伤心、难过",
        "example": "헤어지는 모습을 보니 슬프다.",
        "exampleZh": "看到离别的样子，心里很难过。"
      },
      {
        "word": "화나다",
        "phonetic": "hwanada",
        "meaning": "动词，生气、恼怒",
        "example": "기다리게 되면 화가 나요.",
        "exampleZh": "被人晾着等久了就会生气。"
      },
      {
        "word": "놀라다",
        "phonetic": "nollada",
        "meaning": "动词，吃惊、惊讶",
        "example": "갑자기 나타나서 정말 놀랐어요.",
        "exampleZh": "突然出现，真把我吓了一跳。"
      },
      {
        "word": "부끄럽다",
        "phonetic": "bukkeureopda",
        "meaning": "形容词，害羞、不好意思",
        "example": "사람들 앞에서 노래하면 부끄러워요.",
        "exampleZh": "在大家面前唱歌会觉得不好意思。"
      },
      {
        "word": "긴장되다",
        "phonetic": "ginjangdoeda",
        "meaning": "动词，紧张",
        "example": "첫 출근이라서 조금 긴장되네요.",
        "exampleZh": "因为是第一次上班，有点紧张。"
      },
      {
        "word": "편안하다",
        "phonetic": "pyeonanhada",
        "meaning": "形容词，舒适、轻松、安心",
        "example": "집에 있으면 마음이 편안해요.",
        "exampleZh": "待在家里就会心情轻松。"
      },
      {
        "word": "외롭다",
        "phonetic": "oeropda",
        "meaning": "形容词，孤单、寂寞",
        "example": "혼자 사니까 가끔 외로워요.",
        "exampleZh": "因为一个人住，有时会觉得孤单。"
      },
      {
        "word": "설레다",
        "phonetic": "seolleda",
        "meaning": "动词，心动、激动、期待",
        "example": "여행을 가기 전날 밤에 설레요.",
        "exampleZh": "去旅行前的那一晚会激动不已。"
      },
      {
        "word": "스트레스",
        "phonetic": "seuteureseu",
        "meaning": "名词，压力",
        "example": "요즘 일이 많아서 스트레스가 커요.",
        "exampleZh": "最近工作很多，压力很大。"
      }
    ],
    "article": {
      "title": "감정 표현",
      "titleZh": "情绪表达",
      "paragraphs": [
        {
          "en": "감정은 우리 마음의 신호입니다.",
          "phonetic": "Gamjeong-eun uri maeum-ui sinho-imnida.",
          "zh": "情绪是我们内心的信号。"
        },
        {
          "en": "사람마다 감정을 나타내는 방법이 다릅니다.",
          "phonetic": "Sarammada gamjeong-eul natanaeneun bangbeobi dareumnida.",
          "zh": "每个人表达情绪的方式各不相同。"
        },
        {
          "en": "기쁠 때는 웃고, 슬플 때는 울기도 합니다.",
          "phonetic": "Gippeul ttaeneun utgo, seulpeul ttaeneun ulgido hamnida.",
          "zh": "高兴时会笑，难过时也会流泪。"
        },
        {
          "en": "감정을 잘 표현하면 사람과의 관계가 더 좋아집니다.",
          "phonetic": "Gamjeong-eul jal pyohyeonhamyeon saram-gwa-ui gwangyega deo joajimnida.",
          "zh": "善于表达情绪，人际关系就会变得更好。"
        }
      ],
      "phrases": [
        {
          "phrase": "기분이 좋다",
          "meaning": "心情好"
        },
        {
          "phrase": "기분이 안 좋다",
          "meaning": "心情不好"
        },
        {
          "phrase": "화가 나다",
          "meaning": "生气"
        },
        {
          "phrase": "긴장이 풀리다",
          "meaning": "放松下来"
        }
      ],
      "grammar": [
        {
          "point": "-ㄹ 때",
          "explain": "表示时间点，意为“当……的时候”。例：기쁠 때 웃어요（高兴的时候笑）。"
        },
        {
          "point": "-기 때문에",
          "explain": "表示原因，意为“因为……”。例：기분이 좋기 때문에 웃어요（因为心情好所以笑）。"
        },
        {
          "point": "-아/어지다",
          "explain": "表示变成某种状态，意为“变得……”。例：마음이 편해지다（心情变得轻松）。"
        }
      ],
      "tips": [
        "表达情绪时常用“기분”（心情）这个词，记得搭配“좋다/나쁘다”使用。",
        "“화가 나다”里的“화”是火，字面意思是“火冒上来”，用来形容生气很形象。",
        "想表达“我有点……”时可用“조금 + 形容词”，如“조금 긴장돼요（我有点紧张）”。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“기분이 안 좋아요”是什么意思？",
            "options": [
              "心情很好",
              "心情不好",
              "有点紧张",
              "非常孤单"
            ],
            "answer": 1
          },
          {
            "q": "下面哪个词表示“孤单、寂寞”？",
            "options": [
              "놀라다",
              "외롭다",
              "부끄럽다",
              "설레다"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "오늘은 기분이 _ 정말 기쁘다.（意思是“今天心情真的很好”）",
            "answer": "정말"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你最近一次感到高兴或紧张的经历，至少三句，注意使用情绪相关词汇和“-기 때문에”表达理由。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "기분 이야기",
        "situationZh": "和朋友聊天，聊最近的心情和情绪。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "요즘 왜 기분이 좋아 보여요?",
            "phonetic": "Yojeum wae gibuni joa boyeoyo?",
            "zh": "最近为什么看起来心情很好呀？"
          },
          {
            "role": "user",
            "ko": "친구를 만났기 때문이에요.",
            "phonetic": "Chingu-reul mannatgi ttaemun-ieyo.",
            "zh": "因为见到了朋友。"
          },
          {
            "role": "clerk",
            "ko": "정말요? 누구예요?",
            "phonetic": "Jeongmallo? Nuguyeyo?",
            "zh": "真的吗？是哪个朋友呀？"
          },
          {
            "role": "user",
            "ko": "대학교 때 친구예요.",
            "phonetic": "Daehakgyo ttae chingu-yeyo.",
            "zh": "是大学时期的朋友。"
          },
          {
            "role": "clerk",
            "ko": "다음에 같이 소개해 주세요.",
            "phonetic": "Daeume gachi sogaehae juseyo.",
            "zh": "下次介绍给我认识吧。"
          },
          {
            "role": "user",
            "ko": "좋아요. 그러면 기분이 더 좋을 거예요.",
            "phonetic": "Joayo. Geureomyeon gibuni deo joeul geoyeyo.",
            "zh": "好的，那样的话心情会更高兴。"
          }
        ],
        "tips": [
          "“-기 때문이에요”是表达原因的常用句型，适合口语。",
          "和朋友聊天时语气可以更随意，不必用太正式的敬语。"
        ]
      },
      {
        "scene": "음식점 대화",
        "situationZh": "在餐厅等了很久菜还没来，向店员表达不满。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "손님, 무엇을 도와드릴까요?",
            "phonetic": "Sonnim, mueoseul dowadeurilkkayo?",
            "zh": "客人，需要我帮忙吗？"
          },
          {
            "role": "user",
            "ko": "주문한 음식이 아직 안 와요.",
            "phonetic": "Jumunhan eumsigi ajik an wayo.",
            "zh": "我点的菜还没来。"
          },
          {
            "role": "clerk",
            "ko": "정말 죄송합니다. 바로 확인하겠습니다.",
            "phonetic": "Jeongmal joesonghamnida. Baro hwaginhagetsseumnida.",
            "zh": "非常抱歉，我马上确认一下。"
          },
          {
            "role": "user",
            "ko": "기다리는 시간이 너무 길어서 조금 화가 나요.",
            "phonetic": "Gidarineun sigani neomu gireoseo jogeum hwaga nayo.",
            "zh": "等得太久了，我有点生气。"
          },
          {
            "role": "clerk",
            "ko": "금방 준비해 드릴게요. 잠시만 기다려 주세요.",
            "phonetic": "Geumbang junbihae deurilgeyo. Jamsimman gidaryeo juseyo.",
            "zh": "马上为您准备好，请稍等。"
          },
          {
            "role": "user",
            "ko": "네, 기다리겠습니다. 감사합니다.",
            "phonetic": "Ne, gidarigetsseumnida. Gamsahamnida.",
            "zh": "好的，我等您。谢谢。"
          }
        ],
        "tips": [
          "表达不满时加上“정말（真的）”和敬语“죄송합니다”，语气会更礼貌。",
          "“-아/어서”表示原因，如“너무 길어서 화가 나요（因为太久所以生气）”。"
        ]
      },
      {
        "scene": "시험 전 긴장",
        "situationZh": "考试前一天，向朋友诉说自己的紧张心情并寻求安慰。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "내일 시험이 있어서 너무 긴장돼요.",
            "phonetic": "Naeil siheomi isseoseo neomu ginjangdoeyo.",
            "zh": "明天有考试，我特别紧张。"
          },
          {
            "role": "clerk",
            "ko": "괜찮아요, 열심히 준비했으니까 자신 있어요.",
            "phonetic": "Gwaenchanayo, yeolsimhi junbihaesseunikka jasin isseoyo.",
            "zh": "没关系，你好好准备了，要有信心。"
          },
          {
            "role": "user",
            "ko": "그런데 마음이 너무 불안해요.",
            "phonetic": "Geureonde maeumi neomu buranhae-yo.",
            "zh": "可是我心里太不安了。"
          },
          {
            "role": "clerk",
            "ko": "깊게 숨을 쉬면서 천천히 생각해 보세요.",
            "phonetic": "Gipge sumeul swimyeonseo cheoncheonhi saenggakhae boseyo.",
            "zh": "深呼吸，然后慢慢思考吧。"
          },
          {
            "role": "user",
            "ko": "조언해 주셔서 마음이 좀 편해졌어요.",
            "phonetic": "Jo-eonhae jusyeoseo maeumi jom pyeonhaejyeosseoyo.",
            "zh": "听了你的建议，我心里舒服了一点。"
          },
          {
            "role": "clerk",
            "ko": "다음에 또 긴장되면 언제든지 연락하세요.",
            "phonetic": "Daeume tto ginjangdoemyeon eonjedeunji yeollakhaseyo.",
            "zh": "下次再紧张的话，随时联系我。"
          }
        ],
        "tips": [
          "“긴장되다”表示紧张，口语里也常说“떨리다”。",
          "“마음이 불안하다”是形容心里不安，非常常用。",
          "安慰别人时常说“괜찮아요”和“자신 있어요（有信心）”。"
        ]
      },
      {
        "scene": "슬픈 친구 위로",
        "situationZh": "朋友因为离别而难过，在一旁倾听并安慰他。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "친구가 외국으로 가서 너무 슬퍼요.",
            "phonetic": "Chinguga oekkeuro gaseo neomu seulpeoyo.",
            "zh": "朋友去国外了，我太难过了。"
          },
          {
            "role": "user",
            "ko": "그게 정말 안타깝네요. 많이 보고 싶겠어요.",
            "phonetic": "Geuge jeongmal antakkapneyo. Mani bogosipgess-eoyo.",
            "zh": "那真是太让人难过了，一定很想念吧。"
          },
          {
            "role": "clerk",
            "ko": "네, 생각만 해도 눈물이 나요.",
            "phonetic": "Ne, saenggakman haedo nunmuri nayo.",
            "zh": "嗯，一想到就忍不住掉眼泪。"
          },
          {
            "role": "user",
            "ko": "힘들 테지만 잘 이겨낼 수 있을 거예요.",
            "phonetic": "Himdeul tejiman jal igyeonael su isseul geoyeyo.",
            "zh": "虽然会辛苦，但你一定能挺过去。"
          },
          {
            "role": "clerk",
            "ko": "지금은 조금만 울어도 되죠?",
            "phonetic": "Jigeumeun jogeumman ureodo doejyo?",
            "zh": "现在稍微哭一下也没关系吧？"
          },
          {
            "role": "user",
            "ko": "물론이죠, 눈물을 흘리면 마음이 더 가벼워요.",
            "phonetic": "Mullonimjyo, nunmureul heullimyeon maeumi deo gabyeowoyo.",
            "zh": "当然啦，哭出来心里会更轻松。"
          }
        ],
        "tips": [
          "“슬프다”是形容词“难过”，名词形式是“슬픔”。",
          "“눈물이 나요”表示“流眼泪”，很形象。",
          "安慰他人可用“괜찮아요”和“이겨낼 수 있어요（能挺过去）”。"
        ]
      },
      {
        "scene": "좋은 소식 전하기",
        "situationZh": "拿到好消息，开心地告诉朋友并一起分享喜悦。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "드디어 승진했어요! 정말 기뻐요.",
            "phonetic": "Deudieo seungjinhaesseoyo! Jeongmal gippeoyo.",
            "zh": "我终于升职了！真高兴。"
          },
          {
            "role": "clerk",
            "ko": "와, 진짜 축하해요! 정말 대단해요.",
            "phonetic": "Wa, jinjja chukhahaeyo! Jeongmal daedanhaeyo.",
            "zh": "哇，真的恭喜你！太厉害了。"
          },
          {
            "role": "user",
            "ko": "고마워요. 지금 기분이 너무 좋아서 설레요.",
            "phonetic": "Gomawoyo. Jigeum gibuni neomu joaseo seollaeyo.",
            "zh": "谢谢你，我现在心情太好，激动得不行。"
          },
          {
            "role": "clerk",
            "ko": "그동안의 노력이 드디어 인정받은 거예요.",
            "phonetic": "Geudong-an-ui noryeogi deudieo injeongbadeun geoyeyo.",
            "zh": "这段时间的努力终于得到认可了。"
          },
          {
            "role": "user",
            "ko": "그래서 오늘 저녁에 같이 밥 먹어요.",
            "phonetic": "Geuraeseo oneul jeonyeoge gachi bap meogeoyo.",
            "zh": "所以今天晚上一起吃饭吧。"
          },
          {
            "role": "clerk",
            "ko": "좋아요! 기쁜 일은 다 같이 축하해야죠.",
            "phonetic": "Joayo! Gippeun ireun da gachi chukhahaeyajyo.",
            "zh": "好啊！高兴的事就该大家一起庆祝。"
          }
        ],
        "tips": [
          "“승진하다”是“升职”，和“축하하다(祝贺)”搭配使用。",
          "“정말 대단해요”表示“真了不起”，用来称赞他人。",
          "“설레요”是心动、激动，常用于喜事。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "컴퓨터",
        "phonetic": "keompyuteo",
        "meaning": "名词，电脑",
        "example": "저는 컴퓨터로 서류를 만들어요.",
        "exampleZh": "我用电脑做文件。"
      },
      {
        "word": "문서",
        "phonetic": "munseo",
        "meaning": "名词，文档、文件",
        "example": "이 문서를 저장해 주세요.",
        "exampleZh": "请保存这份文档。"
      },
      {
        "word": "파일",
        "phonetic": "pail",
        "meaning": "名词，文件",
        "example": "그 파일을 저에게 보내 주세요.",
        "exampleZh": "请把那个文件发给我。"
      },
      {
        "word": "저장하다",
        "phonetic": "jeojanghada",
        "meaning": "动词，保存",
        "example": "작업이 끝나면 반드시 저장하세요.",
        "exampleZh": "工作结束后一定要保存。"
      },
      {
        "word": "보내다",
        "phonetic": "bonaeda",
        "meaning": "动词，发送",
        "example": "메일을 보내서 확인해 주세요.",
        "exampleZh": "请发邮件确认一下。"
      },
      {
        "word": "인쇄하다",
        "phonetic": "inwaehada",
        "meaning": "动词，打印",
        "example": "계약서를 두 장 인쇄해 주세요.",
        "exampleZh": "请把合同打印两份。"
      },
      {
        "word": "회의",
        "phonetic": "hoeui",
        "meaning": "名词，会议",
        "example": "오후에 회의가 있어요.",
        "exampleZh": "下午有会议。"
      },
      {
        "word": "보고서",
        "phonetic": "bogoseo",
        "meaning": "名词，报告、报告书",
        "example": "보고서를 내일 아침까지 제출해 주세요.",
        "exampleZh": "请在明天早上之前提交报告。"
      },
      {
        "word": "프린터",
        "phonetic": "peurinteo",
        "meaning": "名词，打印机",
        "example": "프린터가 고장나서 인쇄를 못 해요.",
        "exampleZh": "打印机坏了，没法打印。"
      },
      {
        "word": "이메일",
        "phonetic": "imeil",
        "meaning": "名词，电子邮件",
        "example": "이메일 주소를 알려 주세요.",
        "exampleZh": "请告诉我电子邮件地址。"
      }
    ],
    "article": {
      "title": "사무실에서",
      "titleZh": "在办公室里",
      "paragraphs": [
        {
          "en": "저는 매일 아침 컴퓨터를 켜고 일을 시작합니다.",
          "phonetic": "Jeoneun maeil achim keompyuteoreul kyeogo ireul sijakhamnida.",
          "zh": "我每天早上打开电脑然后开始工作。"
        },
        {
          "en": "중요한 문서는 반드시 파일로 저장해야 합니다.",
          "phonetic": "Jung-yohan munseoneun bandeusi pairo jeojanghaeya hamnida.",
          "zh": "重要的文档一定要保存成文件。"
        },
        {
          "en": "오후에는 동료들과 회의를 합니다.",
          "phonetic": "Ohueneun dongnyodeulgwa hoeuireul hamnida.",
          "zh": "下午和同事们开会。"
        },
        {
          "en": "회의가 끝나면 보고서를 작성해서 메일로 보냅니다.",
          "phonetic": "Hoegiga kkeutnamyeon bogoseoreul jakseonghaeseo meillo bonamnida.",
          "zh": "会议结束后写好报告，然后用邮件发送。"
        }
      ],
      "phrases": [
        {
          "phrase": "컴퓨터를 켜다",
          "meaning": "打开电脑"
        },
        {
          "phrase": "문서를 보내다",
          "meaning": "发送文件"
        },
        {
          "phrase": "회의를 하다",
          "meaning": "开会"
        },
        {
          "phrase": "보고서를 제출하다",
          "meaning": "提交报告"
        }
      ],
      "grammar": [
        {
          "point": "-야 하다",
          "explain": "表示“必须”“应该”，意为“一定要……”。例：저장해야 합니다（一定要保存）。"
        },
        {
          "point": "-고 나서",
          "explain": "表示先做完前一件事再做后一件事，意为“……之后”。例：일이 끝나고 나서 쉬어요（做完工作之后休息）。"
        },
        {
          "point": "-은/는 반드시",
          "explain": "“반드시”表示“一定、必须”，加强语气。例：반드시 저장하세요（一定要保存）。"
        }
      ],
      "tips": [
        "“저장하다”在电脑操作里是“保存”，口语里常说“저장해 주세요（请保存）”。",
        "“보내다”既可指“发送邮件”，也可指“寄包裹”，词义很灵活。",
        "开会常用“회의를 하다”，加班则说“야근하다”，注意区分。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "“문서를 저장하다”的意思是什么？",
            "options": [
              "发送文档",
              "打印文档",
              "保存文档",
              "删除文档"
            ],
            "answer": 2
          },
          {
            "q": "下面哪一个表示“会议”？",
            "options": [
              "보고서",
              "회의",
              "이메일",
              "프린터"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "오후에 _이 있어서 조금 바빠요.（意思是“下午有会议，所以有点忙”）",
            "answer": "회의"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你平时的上班或学习流程，至少三句，注意使用“컴퓨터”、“회의”、“보고서”等词汇，并尝试用“-고 나서”连接先后动作。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "사무실 부탁",
        "situationZh": "在办公室里，请同事帮忙发送和打印文件。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "이 문서를 좀 봐 주시겠어요?",
            "phonetic": "I munseoreul jom bwa jusigess-eoyo?",
            "zh": "能帮我看看这份文档吗？"
          },
          {
            "role": "user",
            "ko": "네, 잠깐만요. 지금 파일을 열겠습니다.",
            "phonetic": "Ne, jamkkanmanyo. Jigeum paireul yeolgessseumnida.",
            "zh": "好的，稍等一下。我现在打开文件。"
          },
          {
            "role": "clerk",
            "ko": "그리고 이 보고서를 인쇄해 주세요.",
            "phonetic": "Geurigo i bogoseoreul inwaehae juseyo.",
            "zh": "还有，请打印这份报告。"
          },
          {
            "role": "user",
            "ko": "네, 몇 장 인쇄할까요?",
            "phonetic": "Ne, myeot jang inwaehallkkayo?",
            "zh": "好的，打印几份呢？"
          },
          {
            "role": "clerk",
            "ko": "두 장이면 됩니다.",
            "phonetic": "Du jang-imyeon doemnida.",
            "zh": "两份就够了。"
          },
          {
            "role": "user",
            "ko": "네, 알겠습니다. 확인 후에 드릴게요.",
            "phonetic": "Ne, algessseumnida. Hwagin hu-e deurilgeyo.",
            "zh": "好的，明白。确认后再给您。"
          }
        ],
        "tips": [
          "“-시겠어요”比“-세요”更恭敬客气，适合请求同事帮忙。",
          "“두 장이면 됩니다（两份就够了）”里“-면 되다”表示“只要……就行”。"
        ]
      },
      {
        "scene": "메일 문의",
        "situationZh": "刚收到一封邮件，同事询问细节并请你确认。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "이메일을 확인하셨어요?",
            "phonetic": "Imeil-eul hwaginhasyeosseoyo?",
            "zh": "您确认过邮件了吗？"
          },
          {
            "role": "user",
            "ko": "아직 확인을 못 했어요.",
            "phonetic": "Ajik hwagineul mot haesseoyo.",
            "zh": "还没能确认。"
          },
          {
            "role": "clerk",
            "ko": "첨부 파일이 있으니 꼭 확인해 보세요.",
            "phonetic": "Cheombu pail-i isseuni kkok hwaginhae boseyo.",
            "zh": "有附件，请一定要看一下。"
          },
          {
            "role": "user",
            "ko": "네, 지금 저장하고 다시 보내 드릴게요.",
            "phonetic": "Ne, jigeum jeojanghago dasi bonaedeurilgeyo.",
            "zh": "好的，我现在保存好再发给您。"
          },
          {
            "role": "clerk",
            "ko": "감사합니다. 도와주셔서 고맙습니다.",
            "phonetic": "Gamsahamnida. Dowajusyeoseo gomapseumnida.",
            "zh": "谢谢，多亏您帮忙。"
          },
          {
            "role": "user",
            "ko": "아니에요. 좋은 하루 되세요.",
            "phonetic": "anieyo. joeun haru doeseyo.",
            "zh": "不客气。祝您今天愉快。"
          }
        ],
        "tips": [
          "“첨부 파일”指电子邮件的附件，工作邮件中很常用。",
          "“꼭”表示“一定、务必”，语气比“반드시”稍轻但更口语。"
        ]
      },
      {
        "scene": "회의 시간 정하기",
        "situationZh": "在办公室里和同事商量会议的合适时间。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "회의 시간을 언제로 할까요?",
            "phonetic": "Hoeui siganeul eonjero halkkayo?",
            "zh": "会议时间定在几点好呢？"
          },
          {
            "role": "user",
            "ko": "오후 2시가 어떨까요?",
            "phonetic": "Ohu dusi-ga eotteolkka-yo?",
            "zh": "下午两点怎么样？"
          },
          {
            "role": "clerk",
            "ko": "저는 2시에 다른 약속이 있어서 어려워요.",
            "phonetic": "Jeoneun dusi-e dareun yaksok-i isseoseo eoryeowoyo.",
            "zh": "我两点有其他约定，不太方便。"
          },
          {
            "role": "user",
            "ko": "그러면 4시는 괜찮으세요?",
            "phonetic": "Geureomyeon nesi-neun gwaenchan-euseyo?",
            "zh": "那四点可以吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 4시가 좋겠어요. 회의실을 예약할게요.",
            "phonetic": "Ne, nesi-ga jogess-eoyo. Hoeuisireul yeyakhalgeyo.",
            "zh": "好的，四点可以。我去预约会议室。"
          },
          {
            "role": "user",
            "ko": "네, 그러면 보고서도 준비해서 갈게요.",
            "phonetic": "Ne, geureomyeon bogoseo-do junbihaeseo galgeyo.",
            "zh": "好的，那我准备好报告再过去。"
          }
        ],
        "tips": [
          "询问会议时间常用“언제로 할까요（定在什么时候）”。",
          "“어떨까요”用来征询意见，比“어때요”更客气。",
          "“회의실을 예약하다”是预约会议室的常用表达。"
        ]
      },
      {
        "scene": "서류 결재 요청",
        "situationZh": "写好文件目录在办公室里请上级签字批准。",
        "roles": {
          "clerk": "科长",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "과장님, 결재할 서류를 여쭤보고 싶어요.",
            "phonetic": "Gwajangnim, gyeoljaehal seoryureul yeojjwobogo sipeoyo.",
            "zh": "科长，我想请教一下要审批的文件。"
          },
          {
            "role": "clerk",
            "ko": "네, 어떤 서류예요?",
            "phonetic": "Ne, eotteon seoryuyeyo?",
            "zh": "好的，是什么文件？"
          },
          {
            "role": "user",
            "ko": "새 프로젝트 예산 문서입니다.",
            "phonetic": "Sae peurojekteu yesan munsu-imnida.",
            "zh": "是新项目的预算文件。"
          },
          {
            "role": "clerk",
            "ko": "확인했어요. 여기에 서명할게요.",
            "phonetic": "Hwaginhaesseoyo. Yeogie seomyeonghalgeyo.",
            "zh": "确认过了，我在这里签名。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 바로 넘기겠습니다.",
            "phonetic": "Gamsahamnida. Baro neomgigessseumnida.",
            "zh": "谢谢，我马上呈上去。"
          },
          {
            "role": "clerk",
            "ko": "네, 다음부터는 먼저 메일로 확인해 주세요.",
            "phonetic": "Ne, daeumbuteoneun meonjeo meillo hwaginhae juseyo.",
            "zh": "好的，以后请先用邮件确认一下。"
          }
        ],
        "tips": [
          "“결재하다”是“审批、批核”，跟“서명하다(签名)”常搭配。",
          "职场上用手“서류(文件)”很正式，口语也用“문서”。",
          "请示上级常用“여쭤보다”，比“묻다”更敬语。"
        ]
      },
      {
        "scene": "야근 결정",
        "situationZh": "下班时间快到了，和同事讨论今天要不要加班。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "오늘도 야근할 거예요?",
            "phonetic": "Oneuldo yageunhal geoyeyo?",
            "zh": "今天也要加班吗？"
          },
          {
            "role": "user",
            "ko": "네, 보고서를 오늘 안에 끝내야 해요.",
            "phonetic": "Ne, bogoseoreul oneul an-e kkeutnaeya haeyo.",
            "zh": "嗯，报告得今天之内做完。"
          },
          {
            "role": "clerk",
            "ko": "그럼 같이 저녁 먹고 할까요?",
            "phonetic": "Geureom gachi jeonyeok meokgo halkkayo?",
            "zh": "那我们一起吃完晚饭再做吧？"
          },
          {
            "role": "user",
            "ko": "좋아요. 좀 쉬면서 일하면 집중이 더 잘 돼요.",
            "phonetic": "Joayo. Jom swimyeonseo ilhamyeon jipjung-i deo jal doeyo.",
            "zh": "好啊，边休息边工作更能集中精神。"
          },
          {
            "role": "clerk",
            "ko": "그럼 다 끝나면 같이 퇴근해요.",
            "phonetic": "Geureom da kkeunamyeon gachi toeeunhaeyo.",
            "zh": "那做完以后一起下班吧。"
          },
          {
            "role": "user",
            "ko": "그렇게 해요. 힘내서 해봐요!",
            "phonetic": "Geureoke haeyo. Himnaeseo haebwayo!",
            "zh": "就这么办，加油干吧！"
          }
        ],
        "tips": [
          "“야근하다”是“加班”，是上班族常用词。",
          "“끝내야 해요”用“-아/어야 하다”表示“必须做完”。",
          "“힘내세요”是“加油、打起精神”的鼓励语。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "초대하다",
        "phonetic": "chodaehada",
        "meaning": "动词，邀请",
        "example": "친구를 집에 초대했어요.",
        "exampleZh": "我邀请朋友来家里了。"
      },
      {
        "word": "인사하다",
        "phonetic": "insahada",
        "meaning": "动词，打招呼、问候",
        "example": "처음 만나면 먼저 인사해요.",
        "exampleZh": "第一次见面时会先打招呼。"
      },
      {
        "word": "건배하다",
        "phonetic": "geonbaehada",
        "meaning": "动词，干杯",
        "example": "모두 건강을 위해 건배합시다.",
        "exampleZh": "让我们为健康一起干杯吧。"
      },
      {
        "word": "대접하다",
        "phonetic": "daejeophada",
        "meaning": "动词，款待、招待",
        "example": "맛있는 음식으로 손님을 대접해요.",
        "exampleZh": "用美味的食物款待客人。"
      },
      {
        "word": "어서 오세요",
        "phonetic": "eoseo oseyo",
        "meaning": "短语，欢迎光临、请进",
        "example": "어서 오세요, 오늘은 편하게 쉬세요.",
        "exampleZh": "欢迎光临，今天请随意休息。"
      },
      {
        "word": "환영하다",
        "phonetic": "hwanyeonghada",
        "meaning": "动词，欢迎",
        "example": "여러분을 진심으로 환영합니다.",
        "exampleZh": "真心欢迎各位。"
      },
      {
        "word": "선물",
        "phonetic": "seonmul",
        "meaning": "名词，礼物",
        "example": "생일에 선물을 받아서 기뻤어요.",
        "exampleZh": "生日收到礼物，我很高兴。"
      },
      {
        "word": "식사하다",
        "phonetic": "siksahada",
        "meaning": "动词，用餐、吃饭",
        "example": "다 같이 맛있게 식사했어요.",
        "exampleZh": "大家一起愉快地用餐了。"
      },
      {
        "word": "잡수시다",
        "phonetic": "japsusida",
        "meaning": "动词（敬语），用餐",
        "example": "할머니, 맛있게 잡수세요.",
        "exampleZh": "奶奶，请慢慢享用。"
      },
      {
        "word": "특별하다",
        "phonetic": "teukbyeolhada",
        "meaning": "形容词，特别的",
        "example": "오늘은 특별한 날이에요.",
        "exampleZh": "今天是特别的日子。"
      }
    ],
    "article": {
      "title": "제사와 모임",
      "titleZh": "聚会与礼仪",
      "paragraphs": [
        {
          "en": "한국에서는 초대를 받으면 꼭 답장하고, 시간을 지켜야 합니다.",
          "phonetic": "Hangugeseoneun chodaereul badeumyeon kkok dapjanghago, siganeul jikyeoya hamnida.",
          "zh": "在韩国，收到邀请后一定要回复，并且要守时。"
        },
        {
          "en": "모임에 가면 장유유서에 따라 윗사람에게 먼저 인사합니다.",
          "phonetic": "Moime gamyeon jangyuyuseoe ttara witsaram-ege meonjeo insahamnida.",
          "zh": "参加聚会时要按长幼尊卑，先向长辈问好。"
        },
        {
          "en": "식사 자리에서는 어른이 먼저 젓가락을 들 때까지 기다립니다.",
          "phonetic": "Siksa jarieseoneun eoreuni meonjeo jeotgarak-eul deul ttaekkaji gidarimnida.",
          "zh": "用餐时，要等到长辈先动筷子才行。"
        },
        {
          "en": "건배할 때는 상대방의 눈을 보고, 기분 좋게 건배합니다.",
          "phonetic": "Geonbaehal ttaeneun sangdaebang-ui nuneul bogo, gibun jokke geonbaehamnida.",
          "zh": "干杯时要看着对方的眼睛，气氛愉快地干杯。"
        }
      ],
      "phrases": [
        {
          "phrase": "어서 오세요",
          "meaning": "欢迎光临"
        },
        {
          "phrase": "잘 먹겠습니다",
          "meaning": "我开动了（饭前用语）"
        },
        {
          "phrase": "잘 먹었습니다",
          "meaning": "我吃好了（饭后用语）"
        },
        {
          "phrase": "감사합니다",
          "meaning": "谢谢"
        }
      ],
      "grammar": [
        {
          "point": "-(으)세요",
          "explain": "敬语命令/请求形，语调比“-요”更恭敬。例：맛있게 잡수세요（请慢用）。"
        },
        {
          "point": "-(으)ㅂ시다",
          "explain": "敬语共动形，意为“我们一起……吧”。例：건배합시다（干杯吧）。"
        },
        {
          "point": "-에 따라",
          "explain": "表示“按照、依据”。例：나이에 따라 대접해요（按年龄来招待）。"
        }
      ],
      "tips": [
        "韩国饭前说“잘 먹겠습니다”，饭后说“잘 먹었습니다”，这是基本餐桌礼仪。",
        "对长辈或上司用餐时用敬语“잡수시다”，对非正式场合一般用“먹다”。",
        "“어서 오세요”是主人迎接客人的常用语，字面是“快请进”。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "喝酒前大家一起说“건배합시다”，它的意思是什么？",
            "options": [
              "我们吃饭吧",
              "我们干杯吧",
              "我们回家吧",
              "我们唱歌吧"
            ],
            "answer": 1
          },
          {
            "q": "对长辈盛菜时，最好用下面哪个词表示“请吃”？",
            "options": [
              "먹으세요",
              "잡수세요",
              "드세요",
              "바빠세요"
            ],
            "answer": 2
          }
        ],
        "fill": [
          {
            "q": "_ 오세요, 오늘은 편하게 있어요.（意思是“欢迎光临，今天请随意坐”）",
            "answer": "어서"
          }
        ],
        "writing": {
          "prompt": "用韩语写一段话，描述你参加一次朋友聚会或饭局的经过，至少三句，注意使用“초대하다”、“인사하다”、“건배하다”等敬语词汇。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "집에 초대",
        "situationZh": "朋友受邀来你家做客，你热情欢迎并安排入座。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어서 오세요. 오늘 와 주셔서 감사합니다.",
            "phonetic": "Eoseo oseyo. Oneul wa jusyeoseo gamsahamnida.",
            "zh": "欢迎光临，谢谢您今天来。"
          },
          {
            "role": "user",
            "ko": "초대해 주셔서 감사해요.",
            "phonetic": "Chodaehae jusyeoseo gamsahaeyo.",
            "zh": "谢谢您的邀请。"
          },
          {
            "role": "clerk",
            "ko": "편하게 앉으세요. 음료수 마실래요?",
            "phonetic": "Pyeonhage anjeuseyo. Eumnyosu masillaeyo?",
            "zh": "请随便坐，要喝饮料吗？"
          },
          {
            "role": "user",
            "ko": "네, 물이 좋아요.",
            "phonetic": "Ne, muri joayo.",
            "zh": "好的，水就可以。"
          },
          {
            "role": "clerk",
            "ko": "천천히 쉬세요. 식사 준비할게요.",
            "phonetic": "Cheoncheonhi swiseyo. Siksa junbihalgeyo.",
            "zh": "慢慢休息，我去准备饭菜。"
          },
          {
            "role": "user",
            "ko": "네, 도와드릴까요?",
            "phonetic": "Ne, dowadeurilkkayo?",
            "zh": "好的，需要我帮忙吗？"
          }
        ],
        "tips": [
          "“어서 오세요”迎接客人最常用，非常自然。",
          "“도와드릴까요”比“도와줄까요”更客气，体现对主人的尊重。"
        ]
      },
      {
        "scene": "직장 회식",
        "situationZh": "公司聚餐，大家欢迎新来的同事并一起干杯。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 만나서 반갑습니다.",
            "phonetic": "Annyeonghaseyo. Mannaseo banggapseumnida.",
            "zh": "您好，很高兴见到您。"
          },
          {
            "role": "user",
            "ko": "저도 만나서 반갑습니다. 잘 부탁드립니다.",
            "phonetic": "Jeodo mannaseo banggapseumnida. Jal butakdeurimnida.",
            "zh": "我也很高兴见到您，请多关照。"
          },
          {
            "role": "clerk",
            "ko": "먼저 건배하시겠어요?",
            "phonetic": "Meonjeo geonbaehasigess-eoyo?",
            "zh": "先一起干杯吧？"
          },
          {
            "role": "user",
            "ko": "네, 우리 모두 건강을 위해 건배합시다.",
            "phonetic": "Ne, uri modu geongangeul wihae geonbaehapsida.",
            "zh": "好的，为我们大家的健康干杯。"
          },
          {
            "role": "clerk",
            "ko": "잘 먹겠습니다.",
            "phonetic": "Jal meokgetsseumnida.",
            "zh": "我开动了。"
          },
          {
            "role": "user",
            "ko": "맛있게 먹겠습니다.",
            "phonetic": "Masitge meokgetsseumnida.",
            "zh": "我会吃得香香的。"
          }
        ],
        "tips": [
          "初次见面说“반갑습니다（很高兴认识）”加“잘 부탁드립니다（请多关照）”，正式又得体。",
          "用餐前后记得说“잘 먹겠습니다 / 잘 먹었습니다”。注意“잘 먹겠습니다”要写在吃饭前。"
        ]
      },
      {
        "scene": "생일 파티",
        "situationZh": "朋友生日，在聚会上送上祝福并一起切蛋糕。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "생일 축하해요! 케이크를 준비했어요.",
            "phonetic": "Saengil chukhahaeyo! Keikeureul junbihaesseoyo.",
            "zh": "生日快乐！我准备了蛋糕。"
          },
          {
            "role": "clerk",
            "ko": "와, 고마워요! 정말 멋진 케이크네요.",
            "phonetic": "Wa, gomawoyo! Jeongmal meotjin keikeuneyo.",
            "zh": "哇，谢谢！真是漂亮的蛋糕。"
          },
          {
            "role": "user",
            "ko": "먼저 소원을 빌고 불어 주세요.",
            "phonetic": "Meonjeo sowoneul bilgo bureo juseyo.",
            "zh": "先许个愿再吹蜡烛吧。"
          },
          {
            "role": "clerk",
            "ko": "소원을 빌고 이제 불게요. 다 같이요.",
            "phonetic": "Sowoneul bilgo ije bulgeyo. Da gachiyo.",
            "zh": "许完愿，现在大家一起吹吧。"
          },
          {
            "role": "user",
            "ko": "오늘 하루가 정말 즐거워서 좋아요.",
            "phonetic": "Oneul haruga jeongmal jeulgeowoseo joayo.",
            "zh": "今天过得太开心了，真好。"
          },
          {
            "role": "clerk",
            "ko": "다들 와 줘서 진심으로 감사해요!",
            "phonetic": "Dadeul wa jwoseo jinsimeuro gamsahaeyo!",
            "zh": "谢谢大家能来，我由衷感激！"
          }
        ],
        "tips": [
          "生日说“생일 축하해요”，是“生日快乐”。",
          "“소원을 빌다”是“许愿”，聚会吹蜡烛时常用。",
          "“다 같이”是“大家一起”，适合集体场合。"
        ]
      },
      {
        "scene": "손님 접대",
        "situationZh": "朋友来家里做客，招待他们喝茶吃点心。",
        "roles": {
          "clerk": "客人",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "어서 오세요. 안으로 들어오세요.",
            "phonetic": "Eoseo oseyo. Aneuro deureooseyo.",
            "zh": "欢迎欢迎，请进来吧。"
          },
          {
            "role": "clerk",
            "ko": "초대해 줘서 고마워요.",
            "phonetic": "Chodaedae jwoseo gomawoyo.",
            "zh": "谢谢你邀请我。"
          },
          {
            "role": "user",
            "ko": "차를 한 잔 마실래요?",
            "phonetic": "Chareul han jan masyillaeyo?",
            "zh": "要喝一杯茶吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 좋아요. 뭐라고 차인가요?",
            "phonetic": "Ne, joayo. Mworago chain-gayo?",
            "zh": "好呀，这是什么茶呢？"
          },
          {
            "role": "user",
            "ko": "녹차예요. 부드러워서 편안하게 마셔요.",
            "phonetic": "Nokchayeyo. Budeureowoseo pyeonanhage masyeoyo.",
            "zh": "是绿茶，口感温润，喝起来很放松。"
          },
          {
            "role": "clerk",
            "ko": "차도 맛있고 분위기도 좋네요.",
            "phonetic": "Chado masitgo bunwigi-do jonneyo.",
            "zh": "茶好喝，气氛也好。"
          }
        ],
        "tips": [
          "款待来客进门说“어서 오세요”，是欢迎语。",
          "“차를 마시다”是“喝茶”，韩国待客很常见。",
          "客人夸赞可回应“고마워요”，礼仪得体。"
        ]
      },
      {
        "scene": "약속 시간 변경",
        "situationZh": "因为临时有事，礼貌地请求推迟和朋友的见面约定。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "미안한데 오늘 약속을 좀 미룰 수 있을까요?",
            "phonetic": "Mianhande oneul yaksogeul jom mirul su isseulkkayo?",
            "zh": "不好意思，今天约好的事能推迟一点吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 괜찮아요. 왜요?",
            "phonetic": "Ne, gwaenchanayo. Waeyo?",
            "zh": "好的，没关系。怎么了？"
          },
          {
            "role": "user",
            "ko": "회사 일이 갑자기 생겨서 늦게 도착해요.",
            "phonetic": "Hoesa iri gapjagi saenggyeoseo neutge dochakhae-yo.",
            "zh": "突然有公司的事，我会晚点到。"
          },
          {
            "role": "clerk",
            "ko": "알겠어요. 몇 시쯤 오세요?",
            "phonetic": "Algess-eoyo. Myeot sijjeum oseyo?",
            "zh": "知道了，大概几点来呢？"
          },
          {
            "role": "user",
            "ko": "한 시간쯤 늦을 것 같아요. 정말 죄송해요.",
            "phonetic": "Han siganjjeum neujeul geot gatayo. Jeongmal joesonghaeyo.",
            "zh": "大概会晚一个小时，真的很抱歉。"
          },
          {
            "role": "clerk",
            "ko": "괜찮아요. 조심해서 천천히 오세요.",
            "phonetic": "Gwaenchanayo. Josimhaeseo cheoncheonhi oseyo.",
            "zh": "没事，路上小心慢慢来。"
          }
        ],
        "tips": [
          "“약속을 미루다”是“推迟约定”。",
          "抱歉时先说“미안해요/죄송해요”，礼仪很重要。",
          "“조심해서 오세요”是“路上小心”，送别常用。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "제목",
        "phonetic": "jemok",
        "meaning": "名词，标题",
        "example": "메일 제목을 간단하게 써 주세요.",
        "exampleZh": "请把邮件标题写得简单一点。"
      },
      {
        "word": "본문",
        "phonetic": "bonmun",
        "meaning": "名词，正文",
        "example": "본문에 자세한 내용을 적어요.",
        "exampleZh": "在正文里写详细的内容。"
      },
      {
        "word": "첨부",
        "phonetic": "cheombu",
        "meaning": "名词，附件",
        "example": "첨부 파일을 확인해 주세요.",
        "exampleZh": "请确认附件。"
      },
      {
        "word": "인사말",
        "phonetic": "insamal",
        "meaning": "名词，问候语",
        "example": "편지의 인사말을 쓰는 연습을 해요.",
        "exampleZh": "练习写书信的问候语。"
      },
      {
        "word": "작성하다",
        "phonetic": "jakseonghada",
        "meaning": "动词，撰写、编写",
        "example": "내일까지 신청서를 작성해야 해요.",
        "exampleZh": "要在明天之前填写申请表。"
      },
      {
        "word": "확인하다",
        "phonetic": "hwaginhada",
        "meaning": "动词，确认",
        "example": "답장을 확인하고 다시 연락드립니다.",
        "exampleZh": "确认回复后再次联系您。"
      },
      {
        "word": "답장",
        "phonetic": "dapjang",
        "meaning": "名词，回信、回复",
        "example": "답장을 기다리고 있습니다.",
        "exampleZh": "一直在等待您的回复。"
      },
      {
        "word": "감사합니다",
        "phonetic": "gamsahamnida",
        "meaning": "惯用语，感谢、谢谢",
        "example": "도와주셔서 정말 감사합니다.",
        "exampleZh": "非常感谢您的帮助。"
      },
      {
        "word": "양식",
        "phonetic": "yangsik",
        "meaning": "名词，格式、表格",
        "example": "신청 양식을 알려 주세요.",
        "exampleZh": "请告诉我申请表格的格式。"
      },
      {
        "word": "끝맺다",
        "phonetic": "kkeutmajda",
        "meaning": "动词，结尾、收尾",
        "example": "마지막 인사로 편지를 끝맺어요.",
        "exampleZh": "用最后的问候语来给信件收尾。"
      }
    ],
    "article": {
      "title": "간단한 이메일 쓰기",
      "titleZh": "写简单的电子邮件",
      "paragraphs": [
        {
          "en": "이메일을 쓸 때는 먼저 제목을 분명하게 정합니다.",
          "phonetic": "Imeil-eul sseul ttaeneun meonjeo jemokeul bunmyeonghage jeonghamnida.",
          "zh": "写邮件时，首先要明确地定好标题。"
        },
        {
          "en": "본문은 짧고 명확하게, 그리고 인사말로 시작합니다.",
          "phonetic": "Bonmuneun jjakko myeonghwakhage, geurigo insamallo sijakhamnida.",
          "zh": "正文要简短明确，并以问候语开头。"
        },
        {
          "en": "중요한 내용은 첨부 파일로 보내고 꼭 확인을 부탁합니다.",
          "phonetic": "Jung-yohan naeyong-eun cheombu pail-lo bonaego kkok hwagineul butakhamnida.",
          "zh": "重要内容可以附上附件，并务必请求对方确认。"
        },
        {
          "en": "마지막에는 “감사합니다”로 끝맺고 이름을 적습니다.",
          "phonetic": "Majimak-eneun gamsahamnida-ro kkeutmajgo ireumeul jeoksseumnida.",
          "zh": "结尾时用“感谢”收尾并写上自己的名字。"
        }
      ],
      "phrases": [
        {
          "phrase": "안녕하세요",
          "meaning": "您好（邮件开头问候）"
        },
        {
          "phrase": "잘 부탁드립니다",
          "meaning": "请多关照"
        },
        {
          "phrase": "이메일을 보내다",
          "meaning": "发送电子邮件"
        },
        {
          "phrase": "첨부 파일을 열다",
          "meaning": "打开附件"
        }
      ],
      "grammar": [
        {
          "point": "-도록",
          "explain": "表示目标或程度，意为“以便、使……”。例：확인하도록 부탁합니다（写邮件时常用，意为‘请审阅’）。"
        },
        {
          "point": "-(으)ㄹ게요",
          "explain": "表示说话人的决心或计划，意为“我会……”。例：답장을 보낼게요（我会回信）。"
        },
        {
          "point": "-기 바라다",
          "explain": "表达期望，意为“希望……”，正式邮件很常用。例：이해해 주시기 바랍니다（请您谅解）。"
        }
      ],
      "tips": [
        "正式中文或邮件开头常用“안녕하세요”，结尾写“감사합니다”并署上姓名。",
        "请求对方做某事时，“-도록 부탁드립니다”比“-세요”更正式。",
        "写邮件时“제목（标题）”要简短清楚，方便对方一眼看懂重点。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "邮件的“附件”用韩语怎么说？",
            "options": [
              "제목",
              "본문",
              "첨부 파일",
              "인사말"
            ],
            "answer": 2
          },
          {
            "q": "写商务邮件结尾时，最合适的一句话是？",
            "options": [
              "오늘 날씨가 좋아요",
              "감사합니다",
              "컴퓨터가 필요해요",
              "저는 학생이에요"
            ],
            "answer": 1
          }
        ],
        "fill": [
          {
            "q": "메일 제목을 _있게 쓰면 좋아요.（意思是“邮件标题写得清楚些比较好”）",
            "answer": "분명"
          }
        ],
        "writing": {
          "prompt": "用韩语写一封简短邮件：先问候，再说明你本周五想请假一天，结尾请求对方确认并表示感谢，注意标题、问候语和称呼。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "메일 보내기",
        "situationZh": "给老师发一封邮件，说明交作业的时间并请求确认。",
        "roles": {
          "clerk": "老师",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요, 교수님.",
            "phonetic": "Annyeonghaseyo, gyosunim.",
            "zh": "教授您好。"
          },
          {
            "role": "user",
            "ko": "안녕하세요, 교수님. 과제를 보냅니다.",
            "phonetic": "Annyeonghaseyo, gyosunim. Gwajereul bonamnida.",
            "zh": "教授您好，我把作业发送给您。"
          },
          {
            "role": "clerk",
            "ko": "과제 제목이 무엇인가요?",
            "phonetic": "Gwaje jemogi mueosingayo?",
            "zh": "作业的标题是什么？"
          },
          {
            "role": "user",
            "ko": "“한국어 작문” 과제입니다.",
            "phonetic": "Hangugeo jakmun gwaje-imnida.",
            "zh": "是“韩语作文”作业。"
          },
          {
            "role": "clerk",
            "ko": "잘 받았습니다. 검토해 보겠습니다.",
            "phonetic": "Jal badatsseumnida. Geomtohae bogetsseumnida.",
            "zh": "收到了，我会审阅的。"
          },
          {
            "role": "user",
            "ko": "감사합니다. 답장 기다리겠습니다.",
            "phonetic": "Gamsahamnida. Dapjang gidarigetsseumnida.",
            "zh": "谢谢您，恭候您的回信。"
          }
        ],
        "tips": [
          "对教授或长辈要用“침니다/입니다”结尾的正式敬语，避免口语。",
          "邮件开头先说问候“안녕하세요”，再说来意，最后致谢署名。"
        ]
      },
      {
        "scene": "직장 답장",
        "situationZh": "收到同事的邮件，礼貌地回复并告知已确认内容。",
        "roles": {
          "clerk": "同事",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "답장을 드립니다. 잘 확인했습니다.",
            "phonetic": "Dapjangeul deurimnida. Jal hwaginhaesseumnida.",
            "zh": "给您回信，我已经确认过了。"
          },
          {
            "role": "user",
            "ko": "네, 첨부 파일도 확인해 주세요.",
            "phonetic": "Ne, cheombu pail-do hwaginhae juseyo.",
            "zh": "好的，也请查看一下附件。"
          },
          {
            "role": "clerk",
            "ko": "첨부 파일까지 열어 봤습니다.",
            "phonetic": "Cheombu pailkkaji yeoreo bwatsseumnida.",
            "zh": "附件我也打开了。"
          },
          {
            "role": "user",
            "ko": "고생하셨습니다. 확인해 주셔서 감사합니다.",
            "phonetic": "Gosaenghasyeotseumnida. Hwaginhae jusyeoseo gamsahamnida.",
            "zh": "辛苦了，谢谢您的确认。"
          },
          {
            "role": "clerk",
            "ko": "네, 다음에 또 연락 드리겠습니다.",
            "phonetic": "Ne, daeume tto yeollak deurigetsseumnida.",
            "zh": "好的，下次再联系您。"
          },
          {
            "role": "user",
            "ko": "네, 기다리겠습니다. 수고하세요.",
            "phonetic": "ne, gidarigesseumnida. sugohaseyo.",
            "zh": "好的，我会等的。辛苦了。"
          }
        ],
        "tips": [
          "“고생하셨습니다”是感谢对方辛劳的敬语，职场很常用。",
          "回复邮件可用“답장을 드립니다”，比“답장이에요”更正式。"
        ]
      },
      {
        "scene": "감사 메일 보내기",
        "situationZh": "给帮助过自己的前辈写一封简短的感谢邮件。",
        "roles": {
          "clerk": "前辈",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "안녕하세요, 선배님. 도움 주셔서 감사합니다.",
            "phonetic": "Annyeonghaseyo, seonbaenim. Doum jusyeoseo gamsahamnida.",
            "zh": "您好，前辈。非常感谢您的帮助。"
          },
          {
            "role": "clerk",
            "ko": "안녕하세요. 도움이 됐다니 다행이에요.",
            "phonetic": "Annyeonghaseyo. Doumi dwaetdani dahaeng-ieyo.",
            "zh": "您好。能帮到你真是太好了。"
          },
          {
            "role": "user",
            "ko": "선배님 덕분에 일을 잘 마칠 수 있었어요.",
            "phonetic": "Seonbaenim deokbune ireul jal machil su isseosseoyo.",
            "zh": "多亏了前辈，工作才能顺利完成。"
          },
          {
            "role": "clerk",
            "ko": "별말씀을요. 어려운 일 있으면 또 말해 주세요.",
            "phonetic": "Byeoramalleulseum-eul-yo. Eoryeoun il isseumyeon tto malhae juseyo.",
            "zh": "不客气。有困难的话随时跟我说。"
          },
          {
            "role": "user",
            "ko": "네, 감사합니다. 좋은 하루 보내세요.",
            "phonetic": "Ne, gamsahamnida. Joeun haru bonaeseyo.",
            "zh": "好的，谢谢。祝您今天愉快。"
          },
          {
            "role": "clerk",
            "ko": "네, 선배도 좋은 하루 보내요.",
            "phonetic": "Ne, seonbaedo joeun haru bonaeyo.",
            "zh": "好，前辈也祝你愉快。"
          }
        ],
        "tips": [
          "写邮件起头常用“안녕하세요 + 称呼”，如“선배님”。",
          "“감사합니다”是正式感谢，邮件很常用。",
          "结尾可用“좋은 하루 보내세요（祝您愉快）”。"
        ]
      },
      {
        "scene": "안부 메일 보내기",
        "situationZh": "很久没联系朋友，写邮件问候近况。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "요즘 잘 지내고 있어요?",
            "phonetic": "Yojeum jal jinaego isseoyo?",
            "zh": "最近过得好吗？"
          },
          {
            "role": "clerk",
            "ko": "응, 잘 지내고 있어. 너는?",
            "phonetic": "Eung, jal jinaego isseo. Neoneun?",
            "zh": "嗯，过得挺好。你呢？"
          },
          {
            "role": "user",
            "ko": "나도 잘 지내고 있어. 보고 싶었어.",
            "phonetic": "Nado jal jinaego isseo. Bogosipeosseo.",
            "zh": "我也挺好的，挺想你的。"
          },
          {
            "role": "clerk",
            "ko": "나도 정말 보고 싶었어.",
            "phonetic": "Nado jeongmal bogosipeosseo.",
            "zh": "我也特别想见你。"
          },
          {
            "role": "user",
            "ko": "다음 주말에 시간 있으면 같이 만나자.",
            "phonetic": "Daeum jumare sigan isseumyeon gachi mannaja.",
            "zh": "下周末有空的话我们见一面吧。"
          },
          {
            "role": "clerk",
            "ko": "좋아! 그때 연락할게.",
            "phonetic": "Jo-a! Geuttae yeonrakhalge.",
            "zh": "好啊！到时候联系你。"
          }
        ],
        "tips": [
          "熟悉的朋友之间邮件和对话都可用半语（해요/해体）。",
          "“요즘 잘 지내고 있어요”是最常用的问候。",
          "结尾用“-자”是提议体，表示“~吧”。"
        ]
      },
      {
        "scene": "답변 요청 메일",
        "situationZh": "邮件已经发送几天，礼貌地催对方尽快回复。",
        "roles": {
          "clerk": "客户",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "지난번 메일을 확인해 주셨는지 궁금해요.",
            "phonetic": "Jinambeon meileul hwaginhae jusyeoss-neunji gunggeumhaeyo.",
            "zh": "想请问您是否确认了我上次发的邮件。"
          },
          {
            "role": "clerk",
            "ko": "아직 답변을 못 드렸네요. 죄송합니다.",
            "phonetic": "Ajik dapbyeoneul mot deuryeossneyo. Joesonghamnida.",
            "zh": "还没能回复您，抱歉。"
          },
          {
            "role": "user",
            "ko": "혹시 회신해 주실 수 있는지 여쭤보려고요.",
            "phonetic": "Hoksi hoesinhae jusil su issneunji yeojjwoboryeogoyo.",
            "zh": "我想请教您是否能尽快回信。"
          },
          {
            "role": "clerk",
            "ko": "내일 중으로 답변드리겠습니다.",
            "phonetic": "Naeil jung-euro dapbyeondeurigessseumnida.",
            "zh": "明天之内会答复您。"
          },
          {
            "role": "user",
            "ko": "네, 기다리겠습니다. 감사합니다.",
            "phonetic": "Ne, gidarigessseumnida. Gamsahamnida.",
            "zh": "好的，我等您。谢谢。"
          },
          {
            "role": "clerk",
            "ko": "도움이 되도록 바로 준비할게요.",
            "phonetic": "Doumi doedorok baro junbihalgeyo.",
            "zh": "我会尽快准备好给您帮助的。"
          }
        ],
        "tips": [
          "催回复用“여쭤보려고요”，比直接问更礼貌。",
          "“답변드리겠습니다”是“会答复您”的敬语。",
          "“내일 중으로”是“明天之内”的意思。"
        ]
      }
    ]
  },
  {
    "words": [
      {
        "word": "예약하다",
        "phonetic": "yeyakhada",
        "meaning": "动词，预约",
        "example": "레스토랑을 예약하고 싶어요.",
        "exampleZh": "我想预约餐厅。"
      },
      {
        "word": "주문하다",
        "phonetic": "jumunhada",
        "meaning": "动词，点餐、订购",
        "example": "이 메뉴를 주문할게요.",
        "exampleZh": "我要点这个菜单。"
      },
      {
        "word": "배달하다",
        "phonetic": "baedalhada",
        "meaning": "动词，配送、送外卖",
        "example": "음식을 집으로 배달해 주세요.",
        "exampleZh": "请把食物送到家里。"
      },
      {
        "word": "손님",
        "phonetic": "sonnim",
        "meaning": "名词，客人、顾客",
        "example": "손님이 지금 도착했어요.",
        "exampleZh": "客人现在已经到了。"
      },
      {
        "word": "주말",
        "phonetic": "jumal",
        "meaning": "名词，周末",
        "example": "주말에는 친구를 만나요.",
        "exampleZh": "周末时和朋友见面。"
      },
      {
        "word": "계획하다",
        "phonetic": "gyehoekhada",
        "meaning": "动词，计划",
        "example": "여행 계획을 세우고 있어요.",
        "exampleZh": "正在制定旅行计划。"
      },
      {
        "word": "만나다",
        "phonetic": "mannada",
        "meaning": "动词，见面、遇到",
        "example": "내일 몇 시에 만날까요?",
        "exampleZh": "明天几点见面呢？"
      },
      {
        "word": "연락하다",
        "phonetic": "yeollakhada",
        "meaning": "动词，联系",
        "example": "나중에 다시 연락할게요.",
        "exampleZh": "我稍后再联系你。"
      },
      {
        "word": "도와주다",
        "phonetic": "dowajuda",
        "meaning": "动词，帮助",
        "example": "문을 여는 것을 도와주세요.",
        "exampleZh": "请帮我开门。"
      },
      {
        "word": "편리하다",
        "phonetic": "pyeollihada",
        "meaning": "形容词，方便、便利",
        "example": "지하철이 있어서 정말 편리해요.",
        "exampleZh": "因为有地铁，真的很方便。"
      }
    ],
    "article": {
      "title": "일상생활 총정리",
      "titleZh": "日常生活大总结",
      "paragraphs": [
        {
          "en": "한 달 동안 한국어를 열심히 공부했습니다.",
          "phonetic": "Han dal dong-an hangugeo-reul yeolsimhi gongbuhaetsseumnida.",
          "zh": "这个月我努力学习韩语。"
        },
        {
          "en": "이제 식당에서 주문하고, 사람들과 약속도 잡을 수 있습니다.",
          "phonetic": "Ije sikdang-eseo jumunhago, saramdeulgwa yaksok-do jabeul su isseumnida.",
          "zh": "现在我可以在餐厅点餐，也能和别人约见面了。"
        },
        {
          "en": "사무실에서 메일을 보내고, 감정도 잘 표현할 수 있게 되었습니다.",
          "phonetic": "Samusil-eseo meil-eul bonaego, gamjeong-do jal pyohyeonhal su itge doe-eotseumnida.",
          "zh": "我能发办公邮件，也学会更好地表达情绪了。"
        },
        {
          "en": "앞으로도 꾸준히 연습해서 더 편리한 생활을 만들어 봅시다.",
          "phonetic": "Ap-eurodo kkujunhi yeonseuphaeseo deo pyeollihan saenghwar-eul mandeureo bopsida.",
          "zh": "今后也要坚持练习，为生活带来更多便利吧。"
        }
      ],
      "phrases": [
        {
          "phrase": "예약을 하다",
          "meaning": "进行预约"
        },
        {
          "phrase": "메뉴를 주문하다",
          "meaning": "点菜"
        },
        {
          "phrase": "약속을 잡다",
          "meaning": "定下约定"
        },
        {
          "phrase": "서로 도와주다",
          "meaning": "互相帮助"
        }
      ],
      "grammar": [
        {
          "point": "-ㅂ시다",
          "explain": "敬语共动形，意为“我们一起……吧”。例：화이팅합시다（加油吧）。"
        },
        {
          "point": "-을 수 있다",
          "explain": "表示“能够……”，强调能力。例：주문할 수 있어요（我会点餐）。"
        },
        {
          "point": "-(으)ㄹ게요",
          "explain": "表示说话人的打算，意为“我会……”。例：연락할게요（我会联系你）。"
        }
      ],
      "tips": [
        "把第26-29天学到的表达串起来：点餐、预约、发邮件、表达情绪，都是日常高频场景。",
        "学会“-(으)ㅂ시다”就能在邀约时用“一起……吧”，非常实用。",
        "每天多说几句完整句子，比机械背单词进步更快。"
      ],
      "quiz": {
        "choice": [
          {
            "q": "下面哪句最适合用来约朋友见面？",
            "options": [
              "내일 시간 있으면 만나요",
              "오늘 날씨가 좋아요",
              "저녁 먹고 싶어요",
              "아침에 일어나요"
            ],
            "answer": 0
          },
          {
            "q": "“주말”指的是哪天？",
            "options": [
              "星期一",
              "星期三",
              "星期六和星期日",
              "星期五"
            ],
            "answer": 2
          }
        ],
        "fill": [
          {
            "q": "레스토랑을 _하고 싶어요.（意思是“我想预约餐厅”）",
            "answer": "예약"
          }
        ],
        "writing": {
          "prompt": "用韩语写一篇短日记，回顾这一周你用所学韩语做的一件事（如点餐、发邮件、和朋友聊天），至少四句，尽量把不同场景的表达串起来。"
        }
      }
    },
    "scenarios": [
      {
        "scene": "식당 예약",
        "situationZh": "给餐厅打电话预订座位，并确认菜单和人数。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "안녕하세요. 무엇을 도와드릴까요?",
            "phonetic": "Annyeonghaseyo. Mueoseul dowadeurilkkayo?",
            "zh": "您好，有什么可以帮您？"
          },
          {
            "role": "user",
            "ko": "오늘 저녁 두 명으로 예약하고 싶어요.",
            "phonetic": "Oneul jeonyeok du myeong-euro yeyakhago sipeoyo.",
            "zh": "我想预约今晚两个人的座位。"
          },
          {
            "role": "clerk",
            "ko": "몇 시에 오실 건가요?",
            "phonetic": "Myeot sie osil geongayo?",
            "zh": "您几点来呢？"
          },
          {
            "role": "user",
            "ko": "일곱 시에 갈게요.",
            "phonetic": "Ilgop sie galgeyo.",
            "zh": "我七点到。"
          },
          {
            "role": "clerk",
            "ko": "네, 예약 완료했습니다.",
            "phonetic": "Ne, yeyak wanryohamyeosseumnida.",
            "zh": "好的，预约已完成。"
          },
          {
            "role": "user",
            "ko": "네, 감사합니다. 그때 뵐게요.",
            "phonetic": "ne, gamsahamnida. geuttae boelgeyo.",
            "zh": "好的，谢谢。到时见。"
          }
        ],
        "tips": [
          "预约座位说“예약하고 싶어요”，要注意报上人数和时间。",
          "“두 명”指两个人，“네 명”是四个人，注意量词“명”。"
        ]
      },
      {
        "scene": "즐거운 주말",
        "situationZh": "和朋友在周末见面，一起商量行程并互相帮忙。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "이번 주말에 시간 있어요?",
            "phonetic": "Ibeon jumale sigan isseoyo?",
            "zh": "这个周末有空吗？"
          },
          {
            "role": "user",
            "ko": "토요일 오후에 비어요.",
            "phonetic": "Toyoil ohu-e bieoyo.",
            "zh": "周六下午我有空。"
          },
          {
            "role": "clerk",
            "ko": "같이 시내에 놀러 갈까요?",
            "phonetic": "Gachi sinae-e nolleo galkkayo?",
            "zh": "要不要一起去市区玩？"
          },
          {
            "role": "user",
            "ko": "좋아요. 만나서 쇼핑하고 싶어요.",
            "phonetic": "Joayo. Mannaseo syopinghago sipeoyo.",
            "zh": "好啊，见面后我想去购物。"
          },
          {
            "role": "clerk",
            "ko": "그럼 저녁은 같이 먹어요.",
            "phonetic": "Geureom jeonyeok-eun gachi meogeoyo.",
            "zh": "那晚餐我们一起吃吧。"
          },
          {
            "role": "user",
            "ko": "네, 기대돼요. 주말에 만나요!",
            "phonetic": "Ne, gidaedoeyo. Jumale mannayo!",
            "zh": "好耶，很期待。周末见！"
          }
        ],
        "tips": [
          "约人可问“시간 있어요?（有时间吗？）”，很自然。",
          "表示期待可用“기대돼요”，用来结束邀约很有气氛。"
        ]
      },
      {
        "scene": "커피숍에서 주문",
        "situationZh": "在咖啡馆点单，询问推荐并购买咖啡。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어서 오세요. 무엇으로 주문하시겠어요?",
            "phonetic": "Eoseo oseyo. Mueoseuro jumunhasigess-eoyo?",
            "zh": "欢迎光临，请问需要点什么？"
          },
          {
            "role": "user",
            "ko": "따뜻한 아메리카노 한 잔 주세요.",
            "phonetic": "Ttatteuthan amerikano han jan juseyo.",
            "zh": "请给我一杯热美式咖啡。"
          },
          {
            "role": "clerk",
            "ko": "사이즈는 어떻게 할까요?",
            "phonetic": "Saijeuneun eotteoke halkkayo?",
            "zh": "要什么尺寸（杯型）呢？"
          },
          {
            "role": "user",
            "ko": "보통 사이즈로 주세요.",
            "phonetic": "Botong saijeuro juseyo.",
            "zh": "给我普通杯就好。"
          },
          {
            "role": "clerk",
            "ko": "테이크아웃하시나요, 아니면 여기서 드세요?",
            "phonetic": "Teikeu-aut-hasina-yo, animyeon yeogiseo deuseyo?",
            "zh": "是带走，还是在这里喝呢？"
          },
          {
            "role": "user",
            "ko": "여기서 마실게요. 감사합니다.",
            "phonetic": "Yeogiseo masilgeyo. Gamsahamnida.",
            "zh": "我在这里喝，谢谢。"
          }
        ],
        "tips": [
          "“한 잔”是一杯，点饮料很方便。",
          "“사이즈”是“杯型”，咖啡店常用外借词。",
          "“테이크아웃”是“外带”，现也常说“포장”。"
        ]
      },
      {
        "scene": "백화점에서 쇼핑",
        "situationZh": "在百货商店挑选手袋，询问价格并购买。",
        "roles": {
          "clerk": "店员",
          "user": "我"
        },
        "turns": [
          {
            "role": "clerk",
            "ko": "어서 오세요. 보고 있으신데요?",
            "phonetic": "Eoseo oseyo. Bogo iss-eusindeyo?",
            "zh": "欢迎光临，您在挑选吗？"
          },
          {
            "role": "user",
            "ko": "이 가방이 얼마예요?",
            "phonetic": "I gabang-i eolmayeyo?",
            "zh": "这个包多少钱？"
          },
          {
            "role": "clerk",
            "ko": "이 가방은 10만 원이에요.",
            "phonetic": "I gabang-eun simman won-ieyo.",
            "zh": "这个包是十万元。"
          },
          {
            "role": "user",
            "ko": "조금 비싸네요. 다른 색도 있어요?",
            "phonetic": "Jogeum bissaneyo. Dareun saekdo isseoyo?",
            "zh": "有点贵呢，还有别的颜色吗？"
          },
          {
            "role": "clerk",
            "ko": "네, 검은색과 갈색이 있어요.",
            "phonetic": "Ne, geomeunsaekgwa galsaegi isseoyo.",
            "zh": "有的，有黑色和棕色。"
          },
          {
            "role": "user",
            "ko": "그럼 검은색으로 주세요. 카드로 계산할게요.",
            "phonetic": "Geureom geomeunsaegeuro juseyo. Kadeuro gyesanhalgeyo.",
            "zh": "那请给我黑色，我用卡结账。"
          }
        ],
        "tips": [
          "询问价格说“얼마예요”，非常常用。",
          "购物可问“다른 색도 있어요（还有别的颜色吗）”。",
          "“카드로 계산하다”是“刷卡结账”的意思。"
        ]
      },
      {
        "scene": "친구와 약속 잡기",
        "situationZh": "周末和好朋友约好一起出去玩。",
        "roles": {
          "clerk": "朋友",
          "user": "我"
        },
        "turns": [
          {
            "role": "user",
            "ko": "이번 주말에 같이 놀을래요?",
            "phonetic": "Ibeon jumare gachi nol-eullae-yo?",
            "zh": "这周末要不要一起出去玩？"
          },
          {
            "role": "clerk",
            "ko": "좋아요! 어디로 갈까요?",
            "phonetic": "Joayo! Eodiro galkkayo?",
            "zh": "好啊！去哪儿呢？"
          },
          {
            "role": "user",
            "ko": "한강에 가서 자전거를 타면 어떨까요?",
            "phonetic": "Hangange gaseo jaejeon-georeul tamyeon eotteolkka-yo?",
            "zh": "去汉江骑骑车怎么样？"
          },
          {
            "role": "clerk",
            "ko": "재미있겠네요. 언제 만나요?",
            "phonetic": "Jaemiissgessneyo. Eonje mannayo?",
            "zh": "听起来很有意思。几点见呢？"
          },
          {
            "role": "user",
            "ko": "오전 10시에 한강역에서 만나요.",
            "phonetic": "Ojeon yeolsi-e hangang yeokeseo mannayo.",
            "zh": "上午十点在汉江站见吧。"
          },
          {
            "role": "clerk",
            "ko": "좋아요! 그때 봐요.",
            "phonetic": "Joayo! Geuttae bwayo.",
            "zh": "好的！到时候见。"
          }
        ],
        "tips": [
          "提议一起玩说“같이 놀을래요”。",
          "“-면 어떨까요”是“…怎么样”的商量语气。",
          "“그때 봐요”是“到时候见”，告别常用。"
        ]
      }
    ]
  }
];
