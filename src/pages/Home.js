import React, { useState } from 'react'
import ModalNew from '../components/ModalNew'
import data from './db.json'
import ModalUpdate from '../components/ModalUpdate';
import ModalDelete from '../components/ModalDelete';

const Home = () => {
    const [showModalNew, setShowModalNew] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [search, setSearch] = useState("")


    const handleClickUpdate = (item) => {
        // console.log(item)
        setDataUpdate(item)
        setShowModalUpdate(true)
    }

    const handleClickDelete = (item) => {
        // console.log(item)
        setDataDelete(item)
        setShowModalDelete(true)
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredPosts = data.posts.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='todo-container' style={{ paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='title' style={{ fontSize: '24px', fontWeight: '600' }}>
                Todo App
            </div>
            <div className='todo-content' style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='table-job-container' style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10px' }}>
                        <button
                            className='btn btn-primary'
                            onClick={() => setShowModalNew(true)}
                            style={{
                                marginRight: '10px',
                                padding: '8px 16px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                transition: 'background-color 0.3s ease'
                            }}
                        >
                            Add
                        </button>
                        <div className="input-group mb-1" style={{ display: 'flex', alignItems: 'end', width: '520px', margin: '4px' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title..."
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                style={{
                                    borderTopLeftRadius: '4px',
                                    borderBottomLeftRadius: '4px',
                                }}
                                value={search}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                                style={{
                                    borderTopRightRadius: '4px',
                                    borderBottomRightRadius: '4px'
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>



                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col">CreateDate</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">FinishDay</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.username}</td>
                                        <td>{item.title}</td>
                                        <td>{item.content}</td>
                                        <td>{item.createDate}</td>
                                        <td>{item.deadline}</td>
                                        <td>{item.finishDay}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button className='btn btn-success mx-2' onClick={() => handleClickUpdate(item)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => handleClickDelete(item)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center">No data</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <ModalNew show={showModalNew} setShow={setShowModalNew} />
                <ModalUpdate show={showModalUpdate} setShow={setShowModalUpdate} dataUpdate={dataUpdate} />
                <ModalDelete show={showModalDelete} setShow={setShowModalDelete} dataDelete={dataDelete} />
            </div>
        </div>
    )
}

export default Home
