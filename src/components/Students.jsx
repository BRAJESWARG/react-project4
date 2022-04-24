import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(name, age, course, batch, change){
    return { name, age, course, batch, change }
}

const rows = [
    createData("John", 24, "MERN", "October", "Edit"),
    createData("Doe", 25, "MERN", "November", "Edit"),
    createData("Biden", 26, "MERN", "October", "Edit"),
    createData("Barar", 22, "MERN", "September", "Edit"),
    createData("Christ", 23, "MERN", "October", "Edit"),
    createData("Elent", 24, "MERN", "November", "Edit"),
    createData("Brajeswar", 24, "EIE", "August", "Edit"),
  ]
  
function Student(){
    return(
        <div className="tableData">
            <div className="tableData-head">
                <h1 className="student-text">Student Details</h1>
                <button className="add-btn">Add New Student</button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Course</TableCell>
                            <TableCell align="right">Batch</TableCell>
                            <TableCell align="right">Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row)=> (
                            <TableRow key={row.name} sx={{"&:last-child td, &:last-child th": { border: 0 }}}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.course}</TableCell>
                                <TableCell align="right">{row.batch}</TableCell>
                                <TableCell align="right">{row.change}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Student;