// import React from 'react'
// import { useEffect , useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchExamsAdmin ,
//     createExam,
//     updateExam,
//     deleteExam
// } from '../../../Redux/thunks/examThunks'


// import ExamsHeder from './components/ExamsHeder'
// import ExmsFilters from './components/ExmsFilters'
// import ExamsTable from './components/ExamsTable'
// import ExamsModel from './components/ExamsModel'

// const Exams = () => {
//     const dispatch = useDispatch()
//     const {exams , loading , error} = useSelector(state => state.exams)

//     const token = localStorage.getItem("token")

//     // UI STATE
//     const [search , setSearch] = useState("")
//     const [satusFilter , setSatusFilter] = useState("")
//     const [classFilter , setClassFilter] = useState("")
//     const [openModal , setOpenModal] = useState(false)
//     const [selectedExam , setSelectedExam] = useState(null)

//     useEffect(()=>{
//         dispatch(fetchExamsAdmin({token}))
//     },[dispatch , token])

//     /*==========================================
//         CREATE NEW EXAM || UPDATE EXAM
//     ==========================================*/
//     const handleSubmitExam = (formData) =>{
//         if(selectedExam){
//             dispatch(
//                 updateExam({
//                     token,
//                     id:selectedExam._id,
//                     payload:formData
//                 })
//             );
//         } else {
//             dispatch(
//                 createExam({
//                     token,
//                     payload:formData
//                 })
//             );
//         }
//         setOpenModal(false);
//         setSelectedExam(null);
//     }

//     /*==========================================
//         DELETE EXAM
//     ==========================================*/
//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this course?")) {
//           dispatch(deleteExam({ token, id }));
//         }
//     }
//   return (
//     <div className='p-6 space-y-6'>
//         {/* Header */}
//         <ExamsHeder onAdd={() => setOpenModal(true)} />

//             {/* Filters */}
//             <ExmsFilters
//                 search={search}
//                 setSearch={setSearch}
//                 classFilter={classFilter}
//                 setClassFilter={setClassFilter}
//                 setSatusFilter={setSatusFilter}
//                 satusFilter={satusFilter}
//             />

//             {/* Table */}
//             <ExamsTable
//                 exams={exams}
//                 loading={loading}
//                 error={error}
//                 search={search}
//                 classFilter={classFilter}
//                 statusFilter={satusFilter}
//                 onEdit={(exam) => {
//                     setSelectedExam(exam);
//                     setOpenModal(true);
//                 }}
//                 onDelete={handleDelete}
//             />

//             {/* Model */}
//             {
//                 openModal && (
//                     <ExamsModel
//                     exam={selectedExam}
//                     onClose={() => {
//                             setSelectedExam(null);
//                             setOpenModal(false);
//                         }}
//                         onSubmit={handleSubmitExam}
//                     />
//                 )
//             }
//     </div>
//   )
// }

// export default Exams


import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchExamsAdmin,
  createExam,
  updateExam,
  deleteExam,
} from "../../../Redux/thunks/examThunks";

import ExamsHeader from "./components/ExamsHeder";
import ExamsFilters from "./components/ExmsFilters";
import ExamsTable from "./components/ExamsTable";
import ExamsModal from "./components/ExamsModel";

const Exams = () => {
  const dispatch = useDispatch();
  const { exams = [], loading, error } = useSelector(
    (state) => state.exams
  );

  const token = localStorage.getItem("token");

  /* ================= UI STATE ================= */
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    dispatch(fetchExamsAdmin({ token }));
  }, [dispatch, token]);

  /* ================= FILTER LOGIC ================= */
  const filteredExams = useMemo(() => {
    return exams.filter((exam) => {
      const matchSearch = exam.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchClass = classFilter
        ? exam.classLevel === classFilter
        : true;

      const matchStatus = statusFilter
        ? statusFilter === "published"
          ? exam.isPublished
          : !exam.isPublished
        : true;

      return matchSearch && matchClass && matchStatus;
    });
  }, [exams, search, classFilter, statusFilter]);

  /* ================= CREATE / UPDATE ================= */
  const handleSubmitExam = (form) => {
    const payload = {
      title: form.title,
      description: form.description,
      duration: Number(form.duration),
      classLevel: form.classLevel,
      startDate: new Date(form.startDate).toISOString(),
      endDate: new Date(form.endDate).toISOString(),
      isPublished: form.isPublished,
    };

    console.log("Exam Payload 👉", payload);

    if (selectedExam) {
      dispatch(
        updateExam({
          token,
          id: selectedExam._id,
          payload,
        })
      );
    } else {
      dispatch(
        createExam({
          token,
          payload,
        })
      );
    }

    setOpenModal(false);
    setSelectedExam(null);
  };

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this exam?")) {
      dispatch(deleteExam({ token, id }));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <ExamsHeader onAdd={() => setOpenModal(true)} />

      {/* Filters */}
      <ExamsFilters
        search={search}
        setSearch={setSearch}
        classFilter={classFilter}
        setClassFilter={setClassFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Table */}
      <ExamsTable
        exams={filteredExams}
        loading={loading}
        error={error}
        onEdit={(exam) => {
          setSelectedExam(exam);
          setOpenModal(true);
        }}
        onDelete={handleDelete}
      />

      {/* Modal */}
      {openModal && (
        <ExamsModal
          exam={selectedExam}
          onClose={() => {
            setSelectedExam(null);
            setOpenModal(false);
          }}
          onSubmit={handleSubmitExam}
        />
      )}
    </div>
  );
};

export default Exams;