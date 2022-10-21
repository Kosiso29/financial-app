import { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import storeData from "../store/storeData";

function UserModal(props) {
    const { title, onHide } = props;
    const { Group, Label, Control } = Form;

    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        if (inputValue) {
            const userData = storeData("user")?.user;
            userData.push(inputValue);
            storeData("user", { user: userData });
            onHide();
        }
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Group>
                        <Label htmlFor="User">User</Label>
                        <Control User="Id" required type="text" placeholder="User" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                    </Group>
                    <br />
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button style={{width: "100%"}} type='submit' onClick={handleClick}>
                                Add
                            </Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default UserModal;
