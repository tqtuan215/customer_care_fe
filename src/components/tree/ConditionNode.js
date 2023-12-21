// ConditionNode.js

import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ConditionNode = ({ id, label, onDelete, onAddNode }) => {
  const [textValue, setTextValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [attribute, setAttribute] = useState()

  // const addCondition = () => {
  //   const newCondition = {
  //     id: Date.now(),
  //     label: `Condition ${id}_${Date.now()}`,
  //     type: 'condition',
  //     text: textValue,
  //     select: selectValue,
  //     color: 'blue', // Example color
  //     icon: '⚫', // Example icon
  //     description: 'This is a condition.', // Example description
  //   };

  //   // Call a callback to inform the parent component about the new condition
  //   onAddNode(id, newCondition);

  //   // Reset input values after adding a condition
  //   setTextValue('');
  //   setSelectValue('');
  // };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div style={{ marginLeft: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <div>
        <div>
          <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{label}</span>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div>
        <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
          <option value="x">Số lần mua hàng</option>
          <option value="y">Label</option>
          {/* Add more options as needed */}
        </select>
        <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
          <option value="equals">=</option>
          <option value="notEquals">!=</option>
          <option value="notEquals"> {'>'} </option>
          {/* Add more options as needed */}
        </select>
        <input
          type="text"
          placeholder="Text Input"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />

      </div>
    </div>
  );
};

export default ConditionNode;
