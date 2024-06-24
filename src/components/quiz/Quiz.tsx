import quizData from "@/data/QuizData";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useState } from "react";

interface QuestionResult {
  question: string;
  isCorrect: boolean;
  correctAnswer: string;
}

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [results, setResults] = useState<QuestionResult[]>([]);

  const handleAnswerOptionClick = (isCorrect: boolean, answer: string) => {
    const questionResult: QuestionResult = {
      question: quizData[currentQuestionIndex].question,
      isCorrect,
      correctAnswer: quizData[currentQuestionIndex].answer,
    };

    setResults([...results, questionResult]);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getComment = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) return "素晴らしい！全問正解です！";
    if (percentage >= 80) return "とても良いです！ほとんど正解です。";
    if (percentage >= 50) return "まあまあです。もう少し頑張りましょう。";
    return "もっと練習が必要です。";
  };

  return (
    <Container>
      {showResult ? (
        <Box mt={5} textAlign="center">
          <Typography variant="h4">
            あなたのスコアは {score} 点です。
          </Typography>
          <Typography variant="h6" mt={3}>
            {getComment()}
          </Typography>
          <Box mt={5}>
            {results.map((result, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">質問 {index + 1}</Typography>
                  <Typography variant="body1" mt={1}>
                    {result.question}
                  </Typography>
                  <Typography
                    variant="body2"
                    mt={1}
                    color={result.isCorrect ? "green" : "red"}
                  >
                    {result.isCorrect
                      ? "正解"
                      : `不正解 - 正しい答え: ${result.correctAnswer}`}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h6">
              質問 {currentQuestionIndex + 1}/{quizData.length}
            </Typography>
            <Typography
              textAlign={"center"}
              variant="h5"
              component="div"
              mt={2}
            >
              {quizData[currentQuestionIndex].question}
            </Typography>
            <Box mt={3}>
              {quizData[currentQuestionIndex].options.map((option, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    handleAnswerOptionClick(
                      option === quizData[currentQuestionIndex].answer,
                      option
                    )
                  }
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  {option}
                </Button>
              ))}
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Quiz;
