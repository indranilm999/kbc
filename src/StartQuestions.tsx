import GetQuestions from "./GetQuestions";

function StartQuestions(questionNo) {
  // toggleClock();
  const qBank = GetQuestions(questionNo);
  return (
    <div>
      <div className="Question">
        {questionNo}. {qBank[0]}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => ValidateAnswer(questionNo, e)}
        className="optionA"
      >
        optionA {qBank[1]}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => ValidateAnswer(questionNo, e)}
        className="optionB"
      >
        optionB {qBank[2]}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => ValidateAnswer(questionNo, e)}
        className="optionC"
      >
        optionC {qBank[3]}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => ValidateAnswer(questionNo, e)}
        className="optionD"
      >
        optionD {qBank[4]}
      </div>
    </div>
  );
}

export default StartQuestions;
