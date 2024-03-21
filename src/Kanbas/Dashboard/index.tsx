import React, {useState, useEffect} from "react";
import DashboardModal from "./DashboardModal";
import { Link } from "react-router-dom";
import * as db from "../Database";
import './index.css';
import { FaPlusCircle, FaMinusCircle, FaEdit } from "react-icons/fa";
import { IoNavigateCircle } from "react-icons/io5";

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

function Dashboard() {
  // const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState<Course[]>(() => {
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : db.courses;
  });
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  // useEffect(() => {
  //   // Update localStorage whenever the courses list changes
  //   localStorage.setItem('courses', JSON.stringify(courses));

  //   // Function to clear localStorage on page refresh
  //   const handleBeforeUnload = () => {
  //     localStorage.removeItem('courses');
  //   };

  //   // Add event listener for beforeunload
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, [courses]);

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

  const handleEditClick = (course: Course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  return (
    <div className="p-4">
      <div className="d-flex justify-content-between justify-content-xs-end align-items-center">
        <h1>Dashboard</h1>
        {/* <button className="btn btn-success me-2" onClick={addNewCourse}><FaPlusCircle />&nbsp;Add Course</button> */}
        <button className="btn btn-success me-5" onClick={() => setIsModalOpen(true)}><FaPlusCircle />&nbsp; Add Course</button>
      </div>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 305 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                        {course.number} {course.name}
                        <span className="card-text">
                            {course.number}.{course.section}.{course.startDate.replace(/-/g, '').slice(0, 6)}
                        </span>
                        <p className="card-subtext">
                            {/* {course.startDate.replace(/-/g, '').slice(0, 6)}&nbsp;
                            {course.semester} */}
                            {course.semester} {course.sem}
                        </p>
                    </Link>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary me-1"><IoNavigateCircle /> Go</Link>
                    <button className="btn btn-warning me-1" onClick={(event) => {
                      event.preventDefault();
                      handleEditClick(course);
                    }}>
                      <FaEdit /> Edit
                    </button>
                    <button className="btn btn-danger me-1" onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                      <FaMinusCircle /> Delete
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DashboardModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingCourse(null); // Ensure we clear the editing state when closing the modal
        }}
        onSubmit={addOrEditCourse}
        editingCourse={editingCourse} // Pass the editing course to the modal
      />
    </div>
  );
}

export default Dashboard;