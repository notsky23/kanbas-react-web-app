import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import './index.css';

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (7)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
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
                            {course.startDate.replace(/-/g, '').slice(0, 6)}&nbsp;
                            {course.semester}
                        </p>
                    </Link>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary"> Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;