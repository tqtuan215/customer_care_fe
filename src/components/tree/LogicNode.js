// LogicNode.js

import React, { useState } from 'react';
import ConditionNode from './ConditionNode';
// import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const LogicNode = ({ id, label, operator, conditions, onDelete, onAddNode }) => {
  const [childNodes, setChildNodes] = useState(conditions);

  const addCondition = () => {
    const newCondition = {
      id: Date.now(),
      label: `Condition ${childNodes.length + 1}`,
      type: 'condition',
      text: '',
      select: '',
      color: 'blue', // Example color
      icon: '⚫', // Example icon
      description: 'This is a condition.', // Example description
    };

    setChildNodes((prevChildNodes) => [...prevChildNodes, newCondition]);
    onAddNode(id, newCondition);
  };

  const addLogic = () => {
    const newLogic = {
      id: Date.now(),
      label: `Logic ${childNodes.length + 1}`,
      type: 'logic',
      operator: operator === 'AND' ? 'OR' : 'AND',
      conditions: [],
    };

    setChildNodes((prevChildNodes) => [...prevChildNodes, newLogic]);
    onAddNode(id, newLogic);
  };

  const handleDelete = () => {
     // Remove the node from the list of child nodes
     setChildNodes((prevChildNodes) => prevChildNodes.filter((node) => node.id !== id));

     // Inform the parent component about the deletion
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
    <button onClick={addCondition}>Add Condition</button>
    <button onClick={addLogic}>Toggle Operator</button>
    {childNodes.map((childNode) =>
      childNode.type === 'logic' ? (
        <LogicNode key={childNode.id} onDelete={onDelete} onAddNode={onAddNode} {...childNode} />
      ) : (
        <ConditionNode key={childNode.id} onDelete={onDelete} onAddNode={onAddNode} {...childNode} />
      )
    )}
  </div>
  );
};

export default LogicNode;
