export interface vocabFrenchEnglish {
  french: string;
  english: string;
  stage: string;
  "wrong date": Date;
  "next date": Date;
  status: cardStatus;
  display: string;
  answer: string;
}

enum cardStatus {
  back = "back",
  front = "front",
}
