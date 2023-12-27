import React, { useState } from 'react';
import TreeMenu from './TreeMenu';

const TreeNode = ({ node, onAddCondition, onAddLogic, onUpdateCondition, onUpdateLogicType }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleConditionChange = (e) => {
        onUpdateCondition(node, e.target.value);
    };

    const handleLogicTypeChange = (e) => {
        onUpdateLogicType(node, e.target.value);
    };

    return (
        <div style={{ marginLeft: `${node.depth * 20}px` }}>
            <div>
                <button onClick={toggleExpansion}>
                    {isExpanded ? 'Collapse' : 'Expand'}
                </button>
                {node.type === 'logic' ? (
                    <>
                        <select value={node.logicType} onChange={handleLogicTypeChange}>
                            <option value="and">AND</option>
                            <option value="or">OR</option>
                        </select>
                        <button onClick={() => onAddLogic(node)}>Add Logic</button>
                    </>
                ) : null}
                {node.type === 'condition' ? (
                    <>
                        <input
                            type="text"
                            value={node.condition}
                            onChange={handleConditionChange}
                        />
                    </>
                ) : null}
                <button onClick={() => onAddCondition(node)}>Add Condition</button>
            </div>
            {isExpanded &&
                node.children.map((child, index) => (
                    <TreeNode
                        key={index}
                        node={child}
                        onAddCondition={onAddCondition}
                        onAddLogic={onAddLogic}
                        onUpdateCondition={onUpdateCondition}
                        onUpdateLogicType={onUpdateLogicType}
                    />
                ))}
        </div>
    );
};

const TreeTest = () => {
    const [treeData, setTreeData] = useState({
        type: 'logic',
        depth: 0,
        logicType: 'and',
        children: [],
    });

    const addCondition = (parent) => {
        const newCondition = { type: 'condition', condition: '', depth: parent.depth + 1 };
        setTreeData((prevData) => ({
            ...prevData,
            children: [...prevData.children, newCondition],
        }));
    };

    const addLogic = (parent) => {
        const newLogic = { type: 'logic', depth: parent.depth + 1, logicType: 'and', children: [] };
        setTreeData((prevData) => ({
            ...prevData,
            children: [...prevData.children, newLogic],
        }));
    };

    const updateCondition = (node, newCondition) => {
        setTreeData((prevData) => {
            const updatedData = { ...prevData };
            const updatedNode = findNode(updatedData, node);
            if (updatedNode && updatedNode.type === 'condition') {
                updatedNode.condition = newCondition;
            }
            return updatedData;
        });
    };

    const updateLogicType = (node, newLogicType) => {
        setTreeData((prevData) => {
            const updatedData = { ...prevData };
            const updatedNode = findNode(updatedData, node);
            if (updatedNode && updatedNode.type === 'logic') {
                updatedNode.logicType = newLogicType;
            }
            return updatedData;
        });
    };

    const findNode = (parent, targetNode) => {
        if (parent === targetNode) {
            return parent;
        } else if (parent.children) {
            for (const child of parent.children) {
                const foundNode = findNode(child, targetNode);
                if (foundNode) {
                    return foundNode;
                }
            }
        }
        return null;
    };

    return (
        <div>

            <h1>TREE TEST</h1>
            <TreeNode
                node={treeData}
                onAddCondition={addCondition}
                onAddLogic={addLogic}
                onUpdateCondition={updateCondition}
                onUpdateLogicType={updateLogicType}
            />
        </div>
    );
};

export default TreeTest;
