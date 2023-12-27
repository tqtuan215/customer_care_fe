// Action.js

import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Action = () => {
  const [actions, setActions] = useState([])
  const navigate = useNavigate();

  return (
    <div>
      <h1>Action List</h1>
    <ul>
      
    </ul>

      <button onClick={() => navigate('create-action')}>Them hanh dong moi</button>
      
      <Outlet/>
    </div>
  );
};

export default Action;
