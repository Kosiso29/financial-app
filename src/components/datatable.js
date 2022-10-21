import { Table } from "react-bootstrap";
import storeData from "../store/storeData";

const Datatable = (props) => {
    const { openDrawer } = props;

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Date of transaction</th>
                        <th>Transaction title</th>
                        <th>Amount</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeData("transaction")?.map((item, index) => (
                            <tr onClick={(e) => { openDrawer(e, index) }} key={index}>
                                <td>{item.date}</td>
                                <td>{item.title}</td>
                                <td>{item.amount}</td>
                                <td>{item.user}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Datatable;