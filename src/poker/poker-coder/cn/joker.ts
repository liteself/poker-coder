import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const JokerCards: PokerCard[] = [
  {
    key: CardKey.BigJoker,
    type: CardSuit.Jokers,
    coder: "大卫·海尼梅尔·汉森",
    gender: UserGender.Male,
    picture: "http://qiniu.ningo.cloud/David_Heinemeier_Hansson.jpg",
    milestone: [
      { year: 2003, event: "创造了 Ruby on Rails" },
    ],
    quote: "如果你不立即践行你的最佳创意，那么你一定会与之擦肩而过。"
  },
  {
    key: CardKey.LittleJoker,
    type: CardSuit.Jokers,
    coder: "中本聪",
    gender: UserGender.Other,
    picture: "http://qiniu.ningo.cloud/Satoshi_Nakamoto.jpg",
    milestone: [
      { year: 2008, event: "发明了区块链" },
      { year: 2008, event: "设计了比特币" },
    ],
    quote: "使用基于秘钥的电子货币，资金可以安全且方便地进行交易，同时无需信任第三方中间商。"
  }
]

export default JokerCards
