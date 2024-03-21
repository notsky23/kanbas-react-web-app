import React, { useState, useEffect } from "react";
import "./index.css";
import { modules as initialModules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer"
import { KanbasState } from "../../store";

interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  course: string;
  name: string;
  description: string;
  lessons?: Lesson[];
}

function ModuleList() {
  const { courseId } = useParams();
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  // Set the initial selected module to the first module of the course
  useEffect(() => {
    const firstModule = moduleList.find((module) => module.course === courseId);
    if (firstModule) {
      setSelectedModuleId(firstModule._id);
    }
  }, [courseId]);

  // Handler to toggle the selected module
  const handleSelectModule = (moduleId: string) => {
    // Toggle module selection: if it's already selected, deselect it, otherwise select it
    setSelectedModuleId(selectedModuleId === moduleId ? null : moduleId);
  };

  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-group wd-modules">
        {/* <button className="btn btn-success" onClick={() => addModule()}>+ Add</button> */}
        <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId, lessons: [] }))}>+ Add</button>
        {/* <button className="btn btn-primary" onClick={ updateModule }>Update</button> */}
        <button className="btn btn-primary" onClick={() => dispatch(updateModule(module)) }>Update</button>
        <li className="list-group-item">
          <li>
            <h3>Add Modules</h3>
          </li>
          <ul>
            <li>
              <input
                className="form-control"
                value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              />
            </li>
            <li>
              <textarea
                className="form-control"
                value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              />
            </li>
          </ul>
        </li>

        {moduleList
          .filter((mod) => mod.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className={`list-group-item ${selectedModuleId === module._id ? 'selected' : ''}`}
              onClick={() => handleSelectModule(module._id)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button className="btn btn-warning px-2 me-1" onClick={() => {
                    // event.stopPropagation();
                    // handleEditModule(module);
                    dispatch(setModule(module))
                  }}>
                    Edit
                  </button>
                  <button className="btn btn-danger px-2 me-3" onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModuleId === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: Lesson, index: number) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
        ))}
      </ul>
    </>
  );
}

export default ModuleList;