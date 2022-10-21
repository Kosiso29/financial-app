import { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import storeData from '../store/storeData';

function TransactionModal(props) {
    const { onHide } = props;
    const { Group, Label, Control, Select } = Form;

    const users = storeData("user")?.user;

    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [account, setAccount] = useState('');
    const [user, setUser] = useState(users?.[0]);

    const handleClick = () => {
        if (date && title && amount >= 10 && amount <= 2000 && account && user) {
            const transactionData = {
                date, title, amount: '$' + amount, account, user
            }
    
            const jsonData = storeData("transaction");
            jsonData.push(transactionData);
            storeData("transaction", jsonData);
            onHide();
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Transaction
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Group>
                        <Group>
                            <Row>
                                <Col>
                                    <Group>
                                        <Label htmlFor="Date">Date of transaction</Label>
                                        <Control required id="Date" type="date" placeholder="Date of transaction" onChange={(e) => setDate(e.target.value)} value={date} />
                                    </Group>
                                </Col>
                                <Col>
                                    <Group>
                                        <Label htmlFor="Title">Transaction Title</Label>
                                        <Control required id="Title" type="text" placeholder="Transaction Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                                    </Group>
                                </Col>
                            </Row>
                        </Group>
                        <br />
                        <Group>
                            <Row>
                                <Col>
                                    <Group>
                                        <Label htmlFor="Amount">Amount $</Label>
                                        <Control required id="Amount" type="number" min="10.00" max="2000.00" step="any" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
                                    </Group>
                                </Col>
                                <Col>
                                    <Group>
                                        <Label htmlFor="Account">General Ledger Account</Label>
                                        <Control required id="Account" type="text" placeholder="General Ledger Account" onChange={(e) => setAccount(e.target.value)} value={account} />
                                    </Group>
                                </Col>
                            </Row>
                        </Group>
                        <br />
                        <Group>
                            <Row>
                                <Col>
                                    <Group>
                                        <Label htmlFor="User">User</Label>
                                        <Select required id="User" type="text" onChange={(e) => setUser(e.target.value)} value={user}>
                                            {users?.map((user, index) => (
                                                <option key={index}>{user}</option>
                                            ))}
                                        </Select>
                                    </Group>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Group>
                    </Group>
                    <br />
                    <Button type='submit' onClick={handleClick}>
                        Add
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default TransactionModal;
