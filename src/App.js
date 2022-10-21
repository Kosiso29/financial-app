import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import Datatable from "./components/datatable";
import Drawer from "./components/drawer";
import TransactionModal from "./components/transactionModal";
import UserModal from "./components/userModal";
import storeData from "./store/storeData";

import classes from './App.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [modalShowUser, setModalShowUser] = useState(false);
    const [modalShowTransaction, setModalShowTransaction] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        if (!storeData("user")) {
            storeData("user", { user: [] })
        }
        if (!storeData("transaction")) {
            storeData("transaction", [])
        }
    }, [])
  
    const handleClose = () => setOpenDrawer(false);
    const handleShow = (e, index) => {
        setOpenDrawer(true);
        setSelectedRow(index);
        console.log(e, e.target.innerHTML, index)
    }
    
    return (
        <div className={classes.App}>
            <Drawer show={openDrawer} selectedRow={selectedRow} handleClose={handleClose} />
            <TransactionModal show={modalShowTransaction} onHide={setModalShowTransaction} content="User" title="User Title" />
            <UserModal show={modalShowUser} onHide={setModalShowUser} content="Transaction" title="Transaction Title" />
            <div className={classes.user}>
                <Button variant="primary" onClick={setModalShowUser}>Add a new user account</Button>
            </div>
            <div className={classes.table}>
                <div className={classes.transaction}>
                    <Button variant="info" onClick={setModalShowTransaction}>Create a new transaction</Button>
                </div>
                <Datatable openDrawer={handleShow} />
            </div>
        </div>
    );
}

export default App;
