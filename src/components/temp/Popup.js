import React, { useState } from 'react';

const Popup = () => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    // Hiển thị popup loading
    setLoading(true);

    // Giả lập thời gian chờ hoặc các công việc xử lý bất đồng bộ
    setTimeout(() => {
      // Ẩn popup loading khi công việc hoàn thành
      setLoading(false);
    }, 2000); // Giả sử công việc mất 2 giây
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>

      {/* Popup loading */}
      {loading && (
        <div className="loading-popup">
          Loading...
        </div>
      )}

      {/* Nội dung khác của component */}
    </div>
  );
};

export default Popup;
