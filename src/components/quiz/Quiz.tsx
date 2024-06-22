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

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
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

  return (
    <Container>
      {showResult ? (
        <Box mt={5} textAlign="center">
          <Typography variant="h4">
            あなたのスコアは {score} 点です。
          </Typography>
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
                      option === quizData[currentQuestionIndex].answer
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
