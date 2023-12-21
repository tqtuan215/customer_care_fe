// Tree.js

import React, { useState } from 'react';
import LogicNode from './LogicNode';

const Tree = () => {
  const [rootNode, setRootNode] = useState({
    id: Date.now(),
    label: 'Root Logic',
    type: 'logic',
    operator: 'AND',
    conditions: [],
  });

  const handleDelete = (nodeId) => {
    setRootNode((prevRootNode) => ({
      ...prevRootNode,
      conditions: prevRootNode.conditions.filter((node) => node.id !== nodeId),
    }));
  };

  const handleAddNode = (parentId, newNode) => {
    setRootNode((prevRootNode) => {
      const updatedConditions = prevRootNode.conditions.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            conditions: [...node.conditions, newNode],
          };
        }
        return node;
      });

      return {
        ...prevRootNode,
        conditions: updatedConditions,
      };
    });
  };

  return (
    <div>
      <h1>React Condition Tree Example</h1>
      <LogicNode
        id={rootNode.id}
        label={rootNode.label}
        operator={rootNode.operator}
        conditions={rootNode.conditions}
        onDelete={handleDelete}
        onAddNode={handleAddNode}
      />
    </div>
  );
};

export default Tree;
