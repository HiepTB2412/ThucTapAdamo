import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
// import data from '../pages/db.json'

const ModalUpdate = (props) => {

    const { show, setShow, dataUpdate } = props


    const handleClose = () => setShow(false);

    const [username, setUsername] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [deadline, setDeadline] = useState("")
    const [status, setStatus] = useState("")

    const formatDate = (date) => {
        const d = new Date(date);
        const month = `${d.getMonth() + 1}`.padStart(2, '0');
        const day = `${d.getDate()}`.padStart(2, '0');
        const year = d.getFullYear();
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setUsername(dataUpdate.username)
            setTitle(dataUpdate.title)
            setContent(dataUpdate.content)
            setDeadline(formatDate(new Date(dataUpdate.deadline)))
            setStatus(dataUpdate.status)
        }
    }, [dataUpdate])

    const createDay = () => {
        const today = new Date();
        const date = String(today.getDate()).padStart(2, '0'); // Lấy ngày hiện tại, thêm số 0 ở đầu nếu cần
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1 và thêm số 0 ở đầu nếu cần
        const year = today.getFullYear();

        return `${year}-${month}-${date}`;
    }

    const handleUpdate = () => {
        dataUpdate.username = username
        dataUpdate.title = title
        dataUpdate.content = content
        dataUpdate.deadline = deadline
        dataUpdate.status = status
        if (status === "Hoàn thành") {
            dataUpdate.finishDay = createDay()
        } else {
            dataUpdate.finishDay = ""
        }
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} size='lg' backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
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
                        <div className="col-md-4">
                            <label className="form-label">Status</label>
                            <select id="inputState" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value={"Chưa hoàn thành"}>Chưa hoàn thành</option>
                                <option value={"Hoàn thành"}>Hoàn thành</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleUpdate()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdate;