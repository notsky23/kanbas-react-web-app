import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video",
    "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { pathname } = useLocation();
  // const formatLink = (link: string) => link.replace(/ /g, '-');
  const formatLink = (link: string) => `/Kanbas/Courses/${pathname.split('/')[3]}/${link.replace(/ /g, '-')}`;

  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(formatLink(link)) ? "wd-active" : ""}>
          <Link to={formatLink(link)}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;