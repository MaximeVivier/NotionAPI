export interface vocabFrenchEnglish {
  french: String,
  english: String,
  stage: String,
  "wrong date": Date,
  "next date": Date,
  status: cardStatus,
  display: String,
  answer: String
}

enum cardStatus {
  back = "back",
  front = "front",
}