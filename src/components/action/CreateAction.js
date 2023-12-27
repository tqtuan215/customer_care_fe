import React, { useState } from 'react';
import InputTextSelect from './InputTextSelect';
import Criteria from './Criteria';
import ResultTemplate from './ResultTemplate';

const CreatAction = () => {

    const purposes = [{ id: 1, value: "md mot" }, { id: 2, value: "md hai" }]

    return (
        <div>
            <InputTextSelect options={purposes} name={'muc dich'} />
            <label>Nhap hanh dong: </label>
            <input type='text' />
            <Criteria />
            <ResultTemplate />
            <button>Save</button>
        </div>
    );
};

export default CreatAction;
