import quizData from "@/data/QuizData";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
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

  return (
    <Container>
      {showResult ? (
        <Box mt={5}>
          <Typography textAlign={"center"} variant="h5">
            結果
          </Typography>
          <Typography mt={2} textAlign={"center"} variant="h5">
            正解数： {score} / {quizData.length}
          </Typography>
          <Box mt={3}>
            {results.map((result, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid
                    container
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">質問 {index + 1}</Typography>
                    </Grid>
                    <Grid item xs={6} textAlign={"right"}>
                      <Button variant="outlined" size="small">
                        My単語に登録
                      </Button>
                    </Grid>
                  </Grid>
                  <Box textAlign="center">
                    <Typography variant="h5" mt={1}>
                      {result.question}
                    </Typography>
                    <Typography
                      variant="h6"
                      mt={1}
                      color={result.isCorrect ? "green" : "red"}
                    >
                      {result.isCorrect ? "◎" : "✖︎"}
                    </Typography>
                    <Typography
                      variant="body2"
                      mt={1}
                      color={result.isCorrect ? "green" : "red"}
                    >
                      {result.isCorrect
                        ? `${result.correctAnswer}`
                        : `正しい答え: ${result.correctAnswer}`}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ) : (
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
          }}
        >
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
