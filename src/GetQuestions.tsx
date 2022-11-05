function GetQuestions(questionNo): string[] {
  let ques = "q" + questionNo;
  switch (ques) {
    case "q1":
      return [
        "Who is earliest SAS joinee among the following?",
        "Rushikesh",
        "Priyanka",
        "Amit",
        "Indranil",
        "A",
      ];
    case "q2":
      return [
        "What is the model of the bike that Rushikesh is going to purchase?",
        "Enfield Hunter 350",
        "Bajaj Pulsar N160",
        "Yamaha FZ V3",
        "Avenger Cruise 220",
        "B",
      ];
    case "q3":
      return [
        "When was Shashank's Birthday?",
        "19 oct",
        "20 oct",
        "17 oct",
        "18 oct",
        "D",
      ];
    case "q4":
      return [
        "Who is the richest person in the panchatantra?",
        "Amit",
        "Rushikesh",
        "Priyanka",
        "Shashank",
        "B",
      ];
    case "q5":
      return [
        "Champagne is manufactured in which country?",
        "America",
        "Germany",
        "Russia",
        "France",
        "D",
      ];
    case "q6":
      return [
        "What is the model of Amit's new watch?",
        "Galaxy watch 4",
        "Galaxy watch 5",
        "Boat Flash RTL",
        "Galaxy watch 3",
        "A",
      ];
    case "q7":
      return [
        "Priyanka is directly responsible for the resignation of atleast how many people in SAS ?",
        "1",
        "2",
        "3",
        "4",
        "C",
      ];
    case "q8":
      return [
        "What is the model of Shashank's iphone ?",
        "iphone 14",
        "iphone 13",
        "iphone 12",
        "iphone 13 Pro",
        "B",
      ];
    case "q9":
      return [
        "What is the strongest repulsive force in nature ?",
        "Gravity",
        "Rushikesh and Jidong",
        "Shashank and his car",
        "Amit and Alex",
        "D",
      ];
    case "q10":
      return [
        "What was the budget of Indranil's Ladakh trip per head ?",
        "Rs. 45000",
        "Rs. 35000",
        "Rs. 100000",
        "Rs. 33000",
        "D",
      ];
    case "q11":
      return [
        "Inme se konsa vyakti SAS pehle quit karega ?",
        "Nilesh",
        "Harshil",
        "Indranil",
        "Shantesh",
        "B",
      ];
    case "q12":
      return [
        "How many pairs of shoes does Priyanka currently has?",
        "2",
        "5 to 7",
        "7 to 10",
        "more than 10",
        "C",
      ];
    case "q13":
      return [
        "What is the full form of SAS?",
        "SAS Analytics Software",
        "Statistics Analytical Software",
        "Statistical Analytical Software",
        "Statistical Analytical System",
        "C",
      ];
    case "q14":
      return [
        "What is the favourite beverage of Pooja?",
        "wine",
        "beer",
        "whiskey",
        "scotch",
        "B",
      ];
  }
  return [];
}

export default GetQuestions;
