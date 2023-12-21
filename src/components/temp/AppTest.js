import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const AppTest = () => {
    const [logs, setLogs] = useState([]);

    const handleClick = () => {
        // Duyệt dữ liệu và lấy các kết quả
        setLogs([1, 2, 3]);
    };

    return (
        <div>
            <button onClick={handleClick}>Duyệt</button>
            {logs.map((log, index) => (
                <Link to={`/log/${log}`} key={index}>
                    {log}
                </Link>
            ))}
        </div>
    );
};

export default AppTest;
