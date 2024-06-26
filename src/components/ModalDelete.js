import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../pages/db.json'

function ModalDelete(props) {

    const { show, setShow, dataDelete } = props

    const handleClose = () => setShow(false);

    const handleDelete = () => {
        data.posts.pop(post => post.id !== dataDelete.id)
        console.log(data);
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to: <b>{dataDelete.title}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;