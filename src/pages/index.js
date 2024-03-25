import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableComponent from '../components/table';
import "../style.css";
import { MenuItem, Pagination, Select, Typography } from '@mui/material';
import TableFeatures from '../components/tableFeatures';

const App = () => {
  // State variables
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  // Calculate start and end entry numbers
  const startEntry = (page - 1) * rowsPerPage + 1;
  const endEntry = page * rowsPerPage;

  // Fetch the  data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`api/books?page=${page}&limit=${rowsPerPage}`);
      setData(response.data.data);
      setTotalCount(response.data.count);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage]);

  // Pagination event handler 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <div className='container'>
    
      <TableFeatures data={data}/>
      <TableComponent data={data} loading={loading} />
      <div className='common-pagination'>
        <Typography variant="caption" display="block" gutterBottom>
          Showing {startEntry} to {endEntry} of {totalCount} entries
        </Typography>
        <div  className='page-size'>
        <span>Page Size:</span>

          <Select
          id="rows-per-page"
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
          <Pagination
            variant="outlined" shape="rounded"
            count={totalCount}
            page={page}
            onChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10, 20, 30]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            component="div"
          />
        </div>

      </div>


    </div>
  );
};

export default App;