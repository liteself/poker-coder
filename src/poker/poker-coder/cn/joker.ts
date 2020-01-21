import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const JokerCards: PokerCard[] = [
  {
    key: CardKey.BigJoker,
    type: CardSuit.Jokers,
    coder: "David Heinemeier Hansson",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/David_Heinemeier_Hansson.jpg",
    milestone: [
      { year: 2003, event: "创造了 Ruby on Rails" },
    ],
    quote: "If you're not working on your best idea right now, you're doing it wrong."
  },
  {
    key: CardKey.LittleJoker,
    type: CardSuit.Jokers,
    coder: "Satoshi Nakamoto",
    gender: UserGender.Other,
    picture: "http://q3259ne1t.bkt.clouddn.com/Satoshi_Nakamoto.jpg",
    milestone: [
      { year: 2008, event: "发明了区块链" },
      { year: 2008, event: "设计了比特币" },
    ],
    quote: "With e-currency based on cryptographic proof, without the need to trust a third party middle-man, money can be secure and transactions effortless."
  }
]

export default JokerCards