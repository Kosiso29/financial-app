import { Offcanvas, ListGroup, Button } from "react-bootstrap";
import storeData from "../store/storeData";

const Drawer = (props) => {
    const { show, handleClose, selectedRow } = props;
    const { Item } = ListGroup;
    const transactionData = storeData("transaction");
    const tableRow = transactionData?.[selectedRow];
    
    const handleClick = () => {
        transactionData.splice(selectedRow, 1);
        storeData("transaction", transactionData);
        handleClose();
    }

    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Transaction details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <Item><b>Transaction Id:</b> { selectedRow + 1 }</Item>
                        <Item><b>Date of transaction:</b> { tableRow?.date }</Item>
                        <Item><b>Transaction title:</b> { tableRow?.title }</Item>
                        <Item><b>Amount:</b> { tableRow?.amount }</Item>
                        <Item><b>General Ledger Account:</b> { tableRow?.account }</Item>
                        <Item><b>User:</b> { tableRow?.user }</Item>
                    </ListGroup>
                    <br />
                    <Button variant="danger" onClick={handleClick}>Delete</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Drawer;