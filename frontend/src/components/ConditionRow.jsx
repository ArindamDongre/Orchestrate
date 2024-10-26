
import React, { useState, useEffect } from "react";
import "./ConditionRow.css";

const ConditionRow = ({ index, onConditionChange, prefill }) => {
  const [firstDropdown, setFirstDropdown] = useState(prefill?.Action || "");
  const [textBoxValue, setTextBoxValue] = useState(prefill?.Condition || "");
  const [secondDropdown, setSecondDropdown] = useState(prefill?.Activity || "");

  const parameters1 = ["AgeCheck", "GenderCheck", "PincodeCheck"];
  const parameters2 = ["AgeCheck", "GenderCheck", "PincodeCheck", "LoanStatus"];

  // const validateTextBoxValue = () => {
  //   if (firstDropdown === "AgeCheck") {
  //     return /^age[<>]\d+(\s+or\s+age[<>]\d+)?$/.test(textBoxValue);      // change  age>25, age<30
  //   } else if (firstDropdown === "GenderCheck") {
  //     return ["male", "female"].includes(textBoxValue.toLowerCase());
  //   } else if (firstDropdown === "PincodeCheck") {
  //   }
  //   return true;
  // };

  const validateTextBoxValue = () => {
    return true;
    // if (firstDropdown === "AgeCheck") {
    //   // Regex to match patterns like 'age>40 or age<33'
    //   const agePattern = /^age[<>]\d+(\s+or\s+age[<>]\d+)?$/;
    //   return agePattern.test(textBoxValue);
    // } else if (firstDropdown === "GenderCheck") {
    //   // Check if the value is either 'male' or 'female'
    //   return ["male", "female"].includes(textBoxValue.toLowerCase());
    // } else if (firstDropdown === "PincodeCheck") {
    //   // Regex to match patterns like 'Start with 22' or 'Start with <anynumber>'
    //   const pincodePattern = /^Start with (\d+)$/;
    //   const match = textBoxValue.match(pincodePattern);
    //   if (match) {
    //     const prefix = match[1]; // Extracted number from 'Start with <number>'
    //     return textBoxValue.startsWith(prefix);
    //   }
    //   return false; // Return false if the format does not match
    // }
    // return false; // Return false if the dropdown selection is invalid or not matched
  };
  

  useEffect(() => {
    if (validateTextBoxValue()) {
      onConditionChange(index, {
        Action: firstDropdown,
        Condition: textBoxValue,
        Activity: secondDropdown,
      });
    }
  }, [firstDropdown, textBoxValue, secondDropdown, index]);

  const getPlaceholder = () => {
    if (firstDropdown === "AgeCheck") return "age>30 or age<45";
    if (firstDropdown === "GenderCheck") return "male or female";
    if (firstDropdown === "PincodeCheck") return "6-digit PIN code or Start with XX";
    return "";
  };

  return (
    <div className="condition-row">
      <select
        value={firstDropdown}
        onChange={(e) => setFirstDropdown(e.target.value)}
      >
        <option value="">Select Parameter</option>
        {parameters1.map((param) => (
          <option key={param} value={param}>
            {param}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={textBoxValue}
        onChange={(e) => setTextBoxValue(e.target.value)}
        placeholder={getPlaceholder()}
      />
      <select
        value={secondDropdown}
        onChange={(e) => setSecondDropdown(e.target.value)}
      >
        <option value="">Select Parameter</option>
        {parameters2.map((param) => (
          <option key={param} value={param}>
            {param}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConditionRow;

