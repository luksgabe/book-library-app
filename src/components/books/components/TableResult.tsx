import { Row, Table } from "react-bootstrap"
import { DataItem } from "../types"

interface TableResultComponent {
    searchResults: DataItem[]
}

export const TableResult = ({ searchResults }: TableResultComponent) => {

    return(
        <Row className="mb-12">
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Total Copies</th>
                        <th>Copies in Use</th>
                        <th>Type</th>
                        <th>Isbn</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                {searchResults.map(item => (
                    <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.totalCopies}</td>
                    <td>{item.copiesInUse}</td>
                    <td>{item.type}</td>
                    <td>{item.isbn}</td>
                    <td>{item.category}</td>
                    </tr>
                ))}
                </tbody>
            </Table >                    
        </Row>
    )
}
