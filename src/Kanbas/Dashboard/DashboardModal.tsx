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
    // Convert dates to the correct format for input[type="date"]
    const formatDate = (dateString: string | undefined) => {
        return dateString ? new Date(dateString).toISOString().split('T')[0] : '';
    };

    const initialFormState = {
        name: '',
        number: '',
        section: '',
        startDate: '',
        endDate: '',
        semester: '',
        sem: '',
        image: 'reactjs.jpg',  // Assuming a default image for new courses
    };
    const [formData, setFormData] = useState(initialFormState);

    // Ensure to reset the form states when the modal opens or editingCourse changes
    useEffect(() => {
        if (editingCourse && isOpen) {
            setFormData({
                name: editingCourse.name || '',
                number: editingCourse.number || '',
                section: editingCourse.section || '',
                startDate: formatDate(editingCourse.startDate),
                endDate: formatDate(editingCourse.endDate),
                semester: editingCourse.semester || '',
                sem: editingCourse.sem || '',
                image: editingCourse.image || 'default.jpg',
            });
        }
    }, [editingCourse, isOpen]);

    // Update semester and sem whenever startDate changes
    useEffect(() => {
        if (formData.startDate) {
          const date = new Date(formData.startDate);
          const month = date.getMonth() + 1;
          const year = date.getFullYear().toString().slice(2);
    
          if (month >= 9 && month <= 12) {
            setFormData(prev => ({ ...prev, semester: `Fall ${date.getFullYear()} Semester Full Term`, sem: `FA${year}` }));
          } else if (month >= 1 && month <= 4) {
            setFormData(prev => ({ ...prev, semester: `Spring ${date.getFullYear()} Semester Full Term`, sem: `SP${year}` }));
          } else if (month >= 5 && month <= 8) {
            setFormData(prev => ({ ...prev, semester: `Summer ${date.getFullYear()} Semester Full Term`, sem: `SU${year}` }));
          }
        } else {
            // Clear semester and sem if startDate is cleared
            setFormData(prev => ({ ...prev, semester: "", sem: "" }));
        }
    }, [formData.startDate]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData, !!editingCourse);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h3>Course:</h3>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <hr /><br />

                    <div className="modal-body">
                        <div className="row mb-3">
                            <label htmlFor="name" className="col-sm-3 form-label text-md-end">Course Name</label>
                            <div className="col-sm-9">
                                <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Web Development" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="number" className="col-sm-3 form-label text-md-end">Course Number</label>
                            <div className="col-sm-9">
                                <input id="number" name="number" value={formData.number} onChange={handleChange} placeholder="CS5610" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="section" className="col-sm-3 form-label text-md-end">Course Section</label>
                            <div className="col-sm-9">
                                <input id="section" name="section" value={formData.section} onChange={handleChange} placeholder="10001" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="startDate" className="col-sm-3 form-label text-md-end">Start Date</label>
                            <div className="col-sm-9">
                                <input id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="form-control" type="date" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="endDate" className="col-sm-3 form-label text-md-end">End Date</label>
                            <div className="col-sm-9">
                                <input id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} className="form-control" type="date" />
                            </div>
                        </div>
                        <input name="semester" type="hidden" value={formData.semester} />
                        <input name="sem" type="hidden" value={formData.sem} />
                    </div>
                    <br /><hr />

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary me-2">Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DashboardModal;