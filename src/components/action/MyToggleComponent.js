import React, { useState } from 'react';
import App2 from '../tree1/App2';
import { Button } from 'react-bootstrap';


const MyToggleComponent = ({ options, index, onDelete }) => {
  const [inputs, setInputs] = useState([]);

  const handleAddInputClick = (type) => {
    setInputs((prevInputs) => [...prevInputs, { type, value: '' }]);
  };

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const getResult = () => {
    return inputs.map(e => e.value).join(' ')
  }

  return (
    <div>
      {inputs.map((input, index) => (
        <span key={index}>
          {input.type === 'text' ? (
            <input
              type="text"
              value={input.value}
              onChange={(event) => handleInputChange(index, event)}
            />
          ) : (
            <select
              value={input.value}
              onChange={(event) => handleInputChange(index, event)}
            >
              {options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </span>
      ))}

      <div>
        <Button onClick={() => handleAddInputClick('text')}>Add Text Input</Button>
        <Button style={{margin:10}} onClick={() => handleAddInputClick('select')}>Add Select Input</Button>
      </div>

      <div>
        <ul>
          {inputs.map((input, index) => (
            <li key={index}>{`${input.type}: ${input.value}`}</li>
          ))}
        </ul>
      </div>
      <div>Final: {getResult()}</div>
      <App2/>
      <hr/>
    </div>
  );
};

export default MyToggleComponent;
