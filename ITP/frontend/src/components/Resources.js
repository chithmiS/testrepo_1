import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../utils/constants';



const Resources = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [search, setSearch] = useState('')
  
  



//for search
  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/search`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);
//search end

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/getAllFiles`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);
  

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };


//extra
const filterData = filesList.filter( item => {
  return item.subject.toLowerCase().includes(search.toLowerCase())

})
  

//end extra

  return (
    <div className="files-container">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <div>
        <br></br>
        <h2>Reference Books</h2>
        <br></br>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={ e => setSearch(e.target.value)}/>
      <button class="btn btn-success " type="submit">Search</button>
    </form>
    <br></br>
      </div>
      <table className="files-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Title</th>
            <th>Auther</th>
            <th>Edition</th>
            <th>File</th>
            
          </tr>
        </thead>
        <tbody>
          {filterData.length > 0 ? (
            filterData.map(
              ({ _id, subject, title, auther, edition, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-subject">{subject}</td>
                  <td className="file-title">{title}</td>
                  <td className="file-auther">{auther}</td>
                  <td className="file-edition">{edition}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </td>
                 
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
  
};


export default Resources;