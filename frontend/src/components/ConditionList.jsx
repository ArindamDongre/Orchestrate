


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConditionRow from "./ConditionRow";
import axios from "axios";
import './ConditionList.css'

const ConditionList = () => {
  const [rows, setRows] = useState([{}]);
  const [error, setError] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const navigate = useNavigate();
  const [workflowName, setWorkflowName] = useState('');

  // Handler for input change
  const handleNameChange = (event) => {
    setWorkflowName(event.target.value);
  };
  const addRow = () => {
    setRows((prevRows) => [...prevRows, {}]);
    setError("");
  };

  const handleConditionChange = (index, condition) => {
    console.log(index, condition);
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index] = condition;
      return updatedRows;
    });
  };

  

  const handleSaveClick = async () => {
    if (1) {
      const workflow = {
        name: workflowName, 
        steps: rows.map((row) => ({
          action: {name: row.Action},
          condition: {conditionText: row.Condition},
          activity: {name: row.Activity},
        })),
      };
      console.log(workflow);
      try {
        const response = await axios.post(
          "http://localhost:8080/workflows",
          workflow
        );
        console.log(response);
        setSaveMessage("Workflow saved successfully!");
      } catch (error) {
        setError("Error saving workflow. Please try again.", error);
      }
    } else {
      setError("Please fill in all fields correctly before saving.");
    }
  };

  const handleRedirect = () => {
    navigate("/view-workflows");
  };

  return (
    <div className="condition-list-container">
      <div className="form-group">
        <label htmlFor="workflowName" className="form-label">Workflow Name:</label>
        <input
          type="text"
          id="workflowName"
          className="form-input"
          value={workflowName}
          onChange={handleNameChange}
        />
      </div>
      {rows.map((_, index) => (
        <ConditionRow
          key={index}
          index={index}
          onConditionChange={handleConditionChange}
        />
      ))}
      <div>
        <button className="button" onClick={addRow}>
          Add Condition
        </button>
        <button className="button" onClick={handleSaveClick}>
          Save Workflow
        </button>
        <button className="button" onClick={handleRedirect}>
          View Workflows
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {saveMessage && <div className="success-message">{saveMessage}</div>}
    </div>
  );
};

export default ConditionList;
