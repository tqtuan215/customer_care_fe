// Tree.js

import React, { useState } from 'react';
import LogicNode from './LogicNode';
import { Outlet } from 'react-router-dom';
import TreeMenu from './TreeMenu';

const Tree = () => {
  const [rootNode, setRootNode] = useState({
    id: Date.now(),
    label: 'Root Logic',
    type: 'logic',
    operator: 'AND',
    conditions: [],
  });

  const handleDelete = (nodeId) => {
    setRootNode((prevRootNode) => {
      const updatedConditions = removeNode(prevRootNode.conditions, nodeId);
      return { ...prevRootNode, conditions: updatedConditions };
    });
  };

  const removeNode = (nodes, nodeId) => {
    return nodes.filter((node) => {
      if (node.id === nodeId) {
        return false;
      }
      if (node.conditions) {
        node.conditions = removeNode(node.conditions, nodeId);
        return true;
      }
      return true;
    });
  };

  // const handleDelete = (nodeId) => {
  //   setRootNode((prevRootNode) => {
  //     const removeNode = (node) => {
  //       if (node.id === nodeId) {
  //         return null; // Remove the node
  //       }

  //       if (node.type === 'logic') {
  //         return {
  //           ...node,
  //           conditions: node.conditions.filter((_, childNode) => removeNode(childNode)),
  //         };
  //       }

  //       return node;
  //     };

  //     const updatedRootNode = removeNode(prevRootNode);

  //     return {
  //       ...updatedRootNode,
  //       conditions: updatedRootNode.conditions.filter(Boolean), // Filter out null nodes
  //     };
  //   });
  // };


  const handleAddNode = (parentId, newNode) => {
    setRootNode((prevRootNode) => {
      const updatedConditions = addNode(prevRootNode.conditions, parentId, newNode);
      return { ...prevRootNode, conditions: updatedConditions };
    });
  };
  const addNode = (nodes, parentId, newNode) => {
    return nodes.map((node) => {
      if (node.id === parentId) {
        return { ...node, conditions: [...node.conditions, newNode] };
      }
      if (node.conditions) {
        return { ...node, conditions: addNode(node.conditions, parentId, newNode) };
      }
      return node;
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
      {/* <Outlet/> */}
    </div>
  );
};

export default Tree;
