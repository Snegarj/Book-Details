import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';



export default function TableComponent(props) {
    const {loading,data}=props;
  return (
    <TableContainer className='common-table' component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
             
              <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Pages</TableCell>
            <TableCell>Year</TableCell>

    
            </TableRow>
          </TableHead>
          <TableBody>
          {loading ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (<>
            {data == null ? 
             <TableRow>
             <TableCell colSpan={8} align="center">
             <div>No data found!</div>
             </TableCell>
           </TableRow>
            : <>
            {data?.map((book) => (
              <TableRow key={book.id} onClick={()=>window.open(book.link,'_blank')}>
                   <TableCell>{book.id}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.country}</TableCell>
              <TableCell>{book.language}</TableCell>
              <TableCell>
                <a href={book.link} target="_blank" >
                  {book.link}
                </a>
              </TableCell>
              <TableCell>{book.pages}</TableCell>
              <TableCell>{book.year}</TableCell>
              </TableRow>
            ))}</>}</>)}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
