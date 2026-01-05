
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// thunks
import {
  fetchQuestionsByExam,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../../../Redux/thunks/questionThunks";

// components
import QuestionsHeader from "./components/QuestionHeader";
import QuestionsTable from "./components/QuestionsTable";
import QuestionModal from "./components/QuestionModal";

const ExamQuestions = () => {
  const { examId } = useParams();
  const dispatch = useDispatch();

  const { questions, loading, error } = useSelector(
    (state) => state.questions
  );

  const token = localStorage.getItem("token");

  // UI State
  const [openModal, setOpenModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  /* ===============================
     FETCH QUESTIONS BY EXAM
  =============================== */
  useEffect(() => {
    if (!examId || !token) return;
    dispatch(fetchQuestionsByExam({ token, examId }));
  }, [dispatch, examId, token]);

  /* ===============================
     ADD / UPDATE QUESTION
  =============================== */
  const handleSubmitQuestion = (form) => {
    // ✅ mapping الصح للـ backend
    const payload = {
      question: form.text.trim(),          // ⭐ أهم تعديل
      type: form.type,
      options: form.options,
      correctAnswer: form.type === "true-false"
        ? String(form.correctAnswer)
        : form.correctAnswer,
      // points: form.points,
    };

    if(form.type === "multiple-choice") {
      payload.options = form.options
      .map((option) => option.trim() )
      .filter(Boolean);
      if(payload.options.length < 2) {
        return alert("Please add at least 2 options");
      }
      if(!payload.options.includes(payload.correctAnswer)) {
        return alert("Correct answer must be one of the options");
      }
    }

    console.log("PAYLOD SENT", payload);
    

    if (selectedQuestion) {
      // UPDATE
      dispatch(
        updateQuestion({
          token,
          id: selectedQuestion._id,
          payload: payload,
        })
      );
    } else {
      // CREATE
      dispatch(
        createQuestion({
          token,
          payload: {
            ...payload,
            exam: examId,
          },
        })
      );
    }
    setOpenModal(false);
    setSelectedQuestion(null);
  };

  /* ===============================
     DELETE QUESTION
  =============================== */
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      dispatch(deleteQuestion({ token, id }));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <QuestionsHeader
        onAdd={() => {
          setSelectedQuestion(null);
          setOpenModal(true);
        }}
      />

      {/* Table */}
      <QuestionsTable
        questions={questions}
        loading={loading}
        error={error}
        onEdit={(question) => {
          setSelectedQuestion(question);
          setOpenModal(true);
        }}
        onDelete={handleDelete}
      />

      {/* Modal */}
      {openModal && (
        <QuestionModal
          question={selectedQuestion}
          onClose={() => {
            setSelectedQuestion(null);
            setOpenModal(false);
          }}
          onSubmit={handleSubmitQuestion}
        />
      )}
    </div>
  );
};

export default ExamQuestions;