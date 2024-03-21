import React, { useState, useEffect } from "react";
import { Course } from "../index";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newCourseData: any, editing?: boolean) => void;
  editingCourse?: Course | null;
  setEditingCourse: React.Dispatch<React.SetStateAction<Course | null>>;
}

function DashboardModal({ isOpen, onClose, onSubmit, editingCourse, setEditingCourse }: DashboardModalProps) {
    const [name, setName] = useState(editingCourse?.name || "");
    const [number, setNumber] = useState(editingCourse?.number || "");
    const [section, setSection] = useState(editingCourse?.section || "");
    const [startDate, setStartDate] = useState(editingCourse?.startDate || "");
    const [endDate, setEndDate] = useState(editingCourse?.endDate || "");

    // Derived state for semester and sem based on startDate
    const [semester, setSemester] = useState("");
    const [sem, setSem] = useState("");

    // Ensure to reset the form states when the modal opens or editingCourse changes
    useEffect(() => {
        if (editingCourse && isOpen) {
            setName(editingCourse.name);
            setNumber(editingCourse.number);
            setSection(editingCourse.section);
            setStartDate(editingCourse.startDate);
            setEndDate(editingCourse.endDate);
        } else {
            // Reset states
            setName("");
            setNumber("");
            setSection("");
            setStartDate("");
            setEndDate("");
            setSemester("");
            setSem("");
        }
    }, [editingCourse, isOpen]);

    // Update semester and sem whenever startDate changes
    useEffect(() => {
        if (startDate) {
          const date = new Date(startDate);
          const month = date.getMonth() + 1;
          const year = date.getFullYear().toString().slice(2);
    
          if (month >= 9 && month <= 12) {
            setSemester(`Fall ${date.getFullYear()} Semester Full Term`);
            setSem(`FA${year}`);
          } else if (month >= 1 && month <= 4) {
            setSemester(`Spring ${date.getFullYear()} Semester Full Term`);
            setSem(`SP${year}`);
          } else if (month >= 5 && month <= 8) {
            setSemester(`Summer ${date.getFullYear()} Semester Full Term`);
            setSem(`SU${year}`);
          }
        } else {
            // Clear semester and sem if startDate is cleared
            setSemester("");
            setSem("");
        }
    }, [startDate]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newCourseData = {
            name,
            number,
            section,
            startDate,
            endDate,
            semester,
            sem,
            image: editingCourse?.image || "reactjs.jpg", // Default image if not editing
          };
        onSubmit(newCourseData, !!editingCourse);
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <h3>Course:</h3>
                    <br />
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-3 form-label text-end">Course Name</label>
                        <div className="col-sm-9">
                            <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Web Development" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="number" className="col-sm-3 form-label text-end">Course Number</label>
                        <div className="col-sm-9">
                            <input id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="CS5610" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section" className="col-sm-3 form-label text-end">Course Section</label>
                        <div className="col-sm-9">
                            <input id="section" name="section" value={section} onChange={(e) => setSection(e.target.value)} placeholder="10001" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="startDate" className="col-sm-3 form-label text-end">Start Date</label>
                        <div className="col-sm-9">
                            <input id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" type="date" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="endDate" className="col-sm-3 form-label text-end">End Date</label>
                        <div className="col-sm-9">
                            <input id="endDate" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-control" type="date" />
                        </div>
                    </div>
                    <input name="semester" type="hidden" value={semester} />
                    <input name="sem" type="hidden" value={sem} />

                    <br /> <br />

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary me-2">Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DashboardModal;