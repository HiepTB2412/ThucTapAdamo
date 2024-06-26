import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../pages/db.json'

const ModalNew = (props) => {

    const { show, setShow } = props


    const handleClose = () => setShow(false);

    const createDay = () => {
        const today = new Date();
        const date = String(today.getDate()).padStart(2, '0'); // Lấy ngày hiện tại, thêm số 0 ở đầu nếu cần
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1 và thêm số 0 ở đầu nếu cần
        const year = today.getFullYear();

        return `${year}-${month}-${date}`;
    }

    const handleAdd = () => {
        let res = {
            id: data.posts.length + 1,
            username: username,
            title: title,
            content: content,
            createDate: createDay(),
            deadline: deadline,
            finishDay: "",
            status: "Chưa hoàn thành"
        }

        data.posts.push(res)
        setShow(false)
    }

    const [username, setUsername] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [deadline, setDeadline] = useState("")

    return (
        <>
            <Modal show={show} onHide={handleClose} size='lg' backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Content</label>
                            <input
                                type="text"
                                className="form-control"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Deadline</label>
                            <input
                                type="date"
                                className="form-control"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleAdd()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNew;