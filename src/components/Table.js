import React,{Component} from 'react';
import '../table.css'
class Table extends React.Component{
    render(){
        return(
            <table>
            
            <thead>
            
            <tr>
            <td>Names</td>
            <td>Ages</td>
            <td>DOB</td>
            <td>Degree</td>
            </tr>
            </thead>

            <tbody>
            <tr>
            <td>Collins</td>
            <td>21</td>
            <td>3/1/01</td>
            <td>Comp. Science</td>
            </tr>
            
            </tbody>

            </table>
        )
    }
}

export default Table;