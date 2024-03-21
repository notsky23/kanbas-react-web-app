import React, { useState, useEffect, CSSProperties } from 'react';
import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "../../styles.css";
import { FaEye } from "react-icons/fa";
import { Course } from "../../Kanbas";

function Courses({ courses, setLastVisitedCourseId }: { courses: Course[]; setLastVisitedCourseId: (id: string) => void; }) {
    const { courseId } = useParams<{ courseId: string }>();
    const location = useLocation();
    const [isNavVisible, setIsNavVisible] = useState(true);

    const course = courses.find((course) => course._id === courseId);

    useEffect(() => {
        if (courseId) {
            setLastVisitedCourseId(courseId);
          }

        function handleResize() {
            // Example: Hide navigation bars under 768px
            setIsNavVisible(window.innerWidth >= 768);
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on component mount

        return () => window.removeEventListener('resize', handleResize);
    }, [courseId, setLastVisitedCourseId]);

    const mainContentStyle: CSSProperties = {
        top: "100px",
        left: isNavVisible ? "320px" : "10px",
        right: isNavVisible ? "0" : "0", // Adjust this based on your right navigation visibility
        position: "fixed",
        overflowY: "scroll",
        bottom: "0",
    };

  // Helper function to map path to readable name
  const mapPathToName = (path: string): string => {
    const names: {[key: string]: string} = {
      "Assignments": "Assignments",
    };
    return names[path] || path;
  };

  const getBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    const relevantPaths = paths.slice(3); // Skip 'course' and courseId segments

    let breadcrumbs = relevantPaths.map((segment, index) => {
        const name = mapPathToName(segment);
        const pathTo = `/${paths.slice(0, 3 + index + 1).join('/')}`;

        // If it's the last segment, don't create a link
        if (index === relevantPaths.length - 1) {
            return <li className="breadcrumb-item active" aria-current="page" key={segment}>{name}</li>;
        } else {
            return (
                <li className="breadcrumb-item" key={segment}>
                    <Link to={pathTo}>{name}</Link>
                </li>
            );
        }
    });

    return breadcrumbs;
  };

  return (
    <div className="p-4">
        <div className="d-flex justify-content-between align-items-center">
            {/* Breadcrumbs */}
            <div className="d-flex align-items-center">
                <HiMiniBars3 className="courseDescription" /> &emsp;
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb custom-breadcrumb custom-link-color" style={{ marginBottom: 0, backgroundColor: "transparent", paddingLeft: "0.5rem" }}>
                        {course && (
                            <li className="breadcrumb-item">
                                <Link to={`/Kanbas/Courses/${courseId}`}>{course.number}.{course.section}.{course.sem}</Link>
                            </li>
                        )}
                        {getBreadcrumbs()}
                    </ol>
                </nav>
            </div>
            {/* Student View Button */}
            <button className="me-5"><FaEye /> Student View</button>
        </div>
        <hr />

        <div className="d-none d-md-block">
            <CourseNavigation />
        </div>
        
        <div>
            <div style={mainContentStyle}>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Zoom-Meetings" element={<h1>Zoom Meetings</h1>} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                    <Route path="Grades" element={<Grades />} />
                    <Route path="People" element={<h1>People</h1>} />
                    <Route path="Panopto-Video" element={<h1>Panopto Video</h1>} />
                    <Route path="Discussions" element={<h1>Discussions</h1>} />
                    <Route path="Announcements" element={<h1>Announcements</h1>} />
                    <Route path="Pages" element={<h1>Pages</h1>} />
                    <Route path="Files" element={<h1>Files</h1>} />
                    <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                    <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                    <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                    <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                    <Route path="Settings" element={<h1>Settings</h1>} />
                </Routes>
            </div>
        </div>

    </div>
  );
}

export default Courses;