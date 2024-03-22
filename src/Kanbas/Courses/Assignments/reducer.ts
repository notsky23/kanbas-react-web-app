import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: { title: "", course: "", description: "", points: 100 } as
        { title: string; course: string; description: string; } | null,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
        state.assignments.push({
            ...action.payload,
            course: action.payload.course || state.assignment?.course,
            _id: action.payload._id || new Date().getTime().toString(),
        });
    },
    deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
            (assignment) => assignment._id !== action.payload
        );
    },
    updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
            if (assignment._id === action.payload._id) {
                return action.payload;
            } else {
                return assignment;
            }
        });
    },
    selectAssignment: (state, action) => {
        state.assignment = state.assignments.find(
            (assignment) => assignment._id === action.payload
        ) || null;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;