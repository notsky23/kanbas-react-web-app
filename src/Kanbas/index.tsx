import {Link} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import TopMenuBar from "./TopMenuBar";

export interface Course {
   _id: string;
   name: string;
   number: string;
   section: string;
   startDate: string;
   endDate: string;
   semester: string;
   sem: string;
   image: string;
 }

function Kanbas() {
   const [courses, setCourses] = useState<Course[]>(() => {
      const savedCourses = localStorage.getItem('courses');
      return savedCourses ? JSON.parse(savedCourses) : db.courses;
    });
    const [editingCourse, setEditingCourse] = useState<Course | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addOrEditCourse = (newCourseData: Omit<Course, '_id'>) => {
      if (editingCourse) {
        // Handle course update logic here
        const updatedCourses = courses.map(course =>
          course._id === editingCourse._id ? { ...editingCourse, ...newCourseData, _id: editingCourse._id } : course
        );
        setCourses(updatedCourses);
      } else {
        // Handle adding a new course
        const newCourse: Course = { _id: new Date().getTime().toString(), ...newCourseData, image: "reactjs.jpg"};
        setCourses([...courses, newCourse ]);
      }
      setIsModalOpen(false);
      setEditingCourse(null); // Reset editing state
    };

    const updateCourse = (course: Course) => {
      setEditingCourse(course);
      setIsModalOpen(true);
    };
  
    const deleteCourse = (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };

    const [lastVisitedCourseId, setLastVisitedCourseId] = useState<string | null>(null);

    return(
      <Provider store={store}>
         <div className="d-block d-md-none sticky-top bg-black text-white p-3">
            <TopMenuBar courses={courses} />
         </div>
         <div className="d-flex">
            <div className="d-none d-md-block">
               <KanbasNavigation />
            </div>
            <div style={{ flexGrow: 1 }}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<div className="p-3"><h1>Account</h1></div>} />
                  <Route path="Dashboard" element={
                     <Dashboard
                        courses={courses}
                        addOrEditCourse={addOrEditCourse}
                        updateCourse={updateCourse}
                        editingCourse={editingCourse}
                        setEditingCourse={setEditingCourse}
                        deleteCourse={deleteCourse}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                     />
                  } />
                  <Route path="Courses" element={
                     lastVisitedCourseId ? 
                        <Navigate to={`/Kanbas/Courses/${lastVisitedCourseId}/`} replace /> : 
                        <Navigate to="/Kanbas/Dashboard" />
                  } />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses} setLastVisitedCourseId={setLastVisitedCourseId} />} />
               </Routes>
            </div>
            
       </div>
      </Provider>
       
    );
 }
 export default Kanbas