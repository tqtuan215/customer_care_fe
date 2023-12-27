import React, { useState } from "react";
import { Button, Table } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { finalActionData } from "../../utils/FetchData";
import Header from "../header/Header";

const UploadExcel = () => {
  const url = "http://localhost:8080"
  const [file, setFile] = useState();
  const [uploadStatus, setUploadStatus] = useState(null);
  const [isLoading, setIsLoading] = useState()
  const [data, setData] = useState([]);
  const finalActionDatas = finalActionData
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0])
  };

  // hủy comment để chạy localhost

  // const handleUpload = async () => {
  //   try {
  //     setIsLoading(true)
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     const response = await fetch(url + "/api/upload-excel/log", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.status === 200) {
  //       const rs = await response.json();
  //       console.log(rs);
  //       setData(rs);
  //       setUploadStatus('Duyệt thành công! success');

  //     } else {
  //       setUploadStatus('Failed!');
  //       throw new Error("Duyệt thất bại");

  //     }

  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false)
  //   }
  // };

  // data after running api above for save time
  const handleUpload = () => {
    setIsLoading(true)
    setTimeout(() => {
      setData(finalActionDatas)
      setIsLoading(false)
    }, 3000)
  }

  return (
    <>
      
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input type="file" className="form-control" id="fileInput" onChange={handleFileChange} />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" style={{ marginLeft: 10 }} onClick={() => { handleUpload(); setUploadStatus() }} disabled={isLoading}>
                  {!isLoading ? 'Duyệt' : 'Đang duyệt...'}
                </button>
              </div>
              <div className="input-group-append">
                <Button variant="primary" style={{ marginLeft: 10 }} onClick={() => { setData([]); setUploadStatus() }}>Clear</Button>
              </div>
            </div>
            {uploadStatus && <p className={`mt-3 ${uploadStatus.includes('success') ? 'text-success' : 'text-danger'}`}>{uploadStatus}</p>}
          </div>
        </div>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Action</th>
          </tr>
        </thead>
        {data.length > 0 ? (
          <tbody>
            {data ? data.map(x => (
              <tr key={x.log_id}>
                <td>
                  {/* <Link to={`/log/${x.finalActionId}`}>{x.customer.name}</Link> */}
                  <Link to={`/log/${x.customer.customerId}`}>{x.customer.name}</Link>
                </td>
                <td>
                  {x.action.name}{': '}
                  {x.finalActionValue.map(valueX => (
                    <span key={valueX.finalActionValueId}>{valueX.finalActionAttribute.criteria.name === 'nội dung' ? ` "${valueX.value}"` : ` ${valueX.value}`}</span>
                  ))}

                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="2">No data available</td>
              </tr>
            )}
          </tbody>
        ) : <tr>
          <td colSpan="2">No data available</td>
        </tr>}
      </Table >
    </>
  );
};

export default UploadExcel;