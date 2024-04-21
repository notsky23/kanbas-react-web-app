import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
// import * as db from "./Database";
import TopMenuBar from "./TopMenuBar";
import axios from "axios";
import * as client from "./Dashboard/client";
import { NotificationProvider } from "./NotificationContext";

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

 
console.log('Current API Base URL:', process.env.REACT_APP_API_BASE);
const API_BASE = process.env.REACT_APP_API_BASE?.replace(/\/+$/, "");

function Kanbas() {
   // const COURSES_API = "http://localhost:4000/api/courses";
   // const COURSES_API = "https://kanbas-node-server-app-vvg4.onrender.com/api/courses";
   const COURSES_API = "https://kanbas-node-server-app-vmbu.onrender.com/api/courses";
   // const COURSES_API = `${API_BASE}/api/courses`;
   const [courses, setCourses] = useState<any[]>([]);
   const [editingCourse, setEditingCourse] = useState<Course | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [lastVisitedCourseId, setLastVisitedCourseId] = useState<string | null>(null);

   // Read/Retrieve all the courses to be displayed in the Dashboard
   const fetchCourses = async () => {
      try {
         console.log(`Making API call to: ${COURSES_API}`);
         const fetchedCourses: Course[] = await client.findAllCourses();
         const formattedCourses = fetchedCourses.map((course: Course) => ({
            ...course,
            startDate: new Date(course.startDate).toISOString().split('T')[0],  // Converts to YYYY-MM-DD format
            endDate: new Date(course.endDate).toISOString().split('T')[0]        // Converts to YYYY-MM-DD format
         }));
         setCourses(formattedCourses);
      } catch (error) {
         console.error('Failed to fetch courses:', error);
      }
   };
   useEffect(() => {fetchCourses();}, []);

   const addOrEditCourse = async (newCourseData: any) => {
      try {
        if (editingCourse) {
          const updatedCourse = await client.updateCourse(editingCourse._id, newCourseData);
          setCourses(courses => courses.map(course => course._id === editingCourse._id ? updatedCourse : course));
          setIsModalOpen(false);
          setEditingCourse(null);
        } else {
          const newCourse = await client.createCourse(newCourseData);
          setCourses(courses => [...courses, newCourse]);
        }
        setIsModalOpen(false);
        setEditingCourse(null);
      } catch (error) {
        console.error('Failed to add or edit course:', error);
      }
   };

   const updateCourse = (course: Course) => {
      setEditingCourse(course);
      setIsModalOpen(true);
   };

   const deleteCourse = async (courseId: string) => {
      try {
         await client.deleteCourse(courseId);
         setCourses(courses.filter((c) => c._id !== courseId));
      } catch (error) {
         console.error('Failed to delete course:', error);
      }
   };

   return(
   <Provider store={store}>
      <NotificationProvider>
         <div className="d-block d-md-none sticky-top bg-black text-white p-3">
            {/* <TopMenuBar courses={courses} /> */}
            {courses.length > 0 && <TopMenuBar courses={courses} />}
         </div>
         <div className="d-flex">
            <div className="d-none d-md-block">
               <KanbasNavigation />
            </div>
            <div style={{ flexGrow: 1, maxWidth: '100%' }}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account/*" element={<Account />} />
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
      </NotificationProvider>
   </Provider>
      
   );
 }
 export default Kanbas