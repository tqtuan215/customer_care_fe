import { faArrowDown, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const LogicNode = ({ id, removeNode }) => {
    const [logic, setLogic] = useState('AND');
    const [nodes, setNodes] = useState([]);

    const toggleLogic = () => {
        setLogic(prevLogic => prevLogic === 'AND' ? 'OR' : 'AND');
    };

    const addCondition = () => {
        setNodes(prevNodes => [...prevNodes, { type: 'condition', id: nodes.length + 1 }]);
    };

    const addLogic = () => {
        setNodes(prevNodes => [...prevNodes, { type: 'logic', id: nodes.length + 1 }]);
    };

    const deleteNode = (id) => {
        setNodes(prevNodes => prevNodes.filter(node => node.id !== id));
    };

    return (
        <div style={{ marginLeft: '20px' }}>
            <button className='btn btn-info' onClick={toggleLogic}>{logic}</button>
            <div>
                <FontAwesomeIcon icon={faPlus} onClick={addCondition} />
                <FontAwesomeIcon icon={faArrowDown} onClick={addLogic} />
                {id !== 0 && <FontAwesomeIcon icon={faTrash} color='red' onClick={() => removeNode(id)} />}
                {nodes.map(node => (
                    <Node key={node.id} node={node} removeNode={deleteNode} />
                ))}
            </div>
        </div>
    );
};

const ConditionNode = ({ id, removeNode }) => {
    const [attribute, setAttribute] = useState([])
    const [value, setValue] = useState('')

    return (
        <div style={{ marginLeft: '20px' }}>
            <input
                type="text"
                value={attribute}
                onChange={e => setAttribute(e.target.value)}
                placeholder="Enter attribute"
            />
            <select>
                <option value="label">Label</option>
                <option value="số tiền">Số tiền</option>
            </select>
            <input
                type="text"
                value={value}
                placeholder="Enter value"
                onChange={e => setValue(e.target.value)}
            />
            <FontAwesomeIcon icon={faTrash} color='red' onClick={() => removeNode(id)} />
        </div>
    );
};

const Node = ({ node, removeNode }) => {
    if (node.type === 'logic') {
        return <LogicNode id={node.id} removeNode={removeNode} />;
    } else if (node.type === 'condition') {
        return <ConditionNode id={node.id} removeNode={removeNode} />;
    } else {
        return null;
    }
};

const App2 = ({ id, onDelete }) => {
    const [root, setRoot] = useState({ type: 'logic', id: 0 });
    const handleDeleteClick = () => {
        onDelete(id)
    }
    return (
        <div>
            <Node node={root} />
        </div>
    );
};

export default App2;
