import { createSlice } from "@reduxjs/toolkit";
import{
    fetchExamsAdmin,
    fetchExamById,
    createExam,
    updateExam,
    deleteExam
} from "../thunks/examThunks";


const examSlice = createSlice({
    name:"exam",
    initialState:{
        exams:[],
        selectedExam:null,
        loading:false,
        error:null
    },
    reducers:{
        clearSelectedExam(state){
            state.selectedExam = null
        },
    },
    extraReducers:(builder) =>{
        /*=======================================================
        FETCH ALL EXAMS
        ========================================================*/
        builder
        .addCase(fetchExamsAdmin.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchExamsAdmin.fulfilled,(state, action)=>{
            state.loading = false;
            state.exams = action.payload;
        })
        .addCase(fetchExamsAdmin.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        /*=======================================================
        FETCH EXAM BY ID
        ========================================================*/
        builder
        .addCase(fetchExamById.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchExamById.fulfilled,(state, action)=>{
            state.loading = false;
            state.selectedExam = action.payload;
        })
        .addCase(fetchExamById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        /*=======================================================
        CREATE EXAM
        ========================================================*/
        builder
        .addCase(createExam.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(createExam.fulfilled,(state, action)=>{
            state.loading = false;
            state.exams.unshift(action.payload);
        })
        .addCase(createExam.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        /*=======================================================
        UPDATE EXAM
        ========================================================*/
        .addCase(updateExam.fulfilled,(state , action)=>{
            const index = state.exams.findIndex(
                (e) => e._id === action.payload._id
            );
            if(index !== -1){
                state.exams[index] = action.payload;
            }
            // state.selectedExam = action.payload;
        })

        /*=======================================================
        DELETE EXAM
        ========================================================*/
        .addCase(deleteExam.fulfilled,(state, action)=>{
            state.exams = state.exams.filter(
                (e) => e._id !== action.payload
            );
        })
    }
})


export const {clearSelectedExam} = examSlice.actions;
export default examSlice.reducer