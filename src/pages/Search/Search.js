import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { db } from '../../firebase/firebase';
import './Search.css';

const Search = () => {
    const [data, setData] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("name");
    // console.log(search);

    useEffect(() => {
        searchData();
        console.log(searchData())
    }, [search]);


    //search contact by name
    const searchData = () => {
        db.collection("contacts").where("name", "==", search).onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                console.log(data)
                setData(data);
            })


        })
    }
    console.log(typeof (data))

    return (
        <div style={{ height: '100vh' }} className=''>
            <div className='w-50 mx-auto my-5'>
                {
                    Object.keys(data).length === 0 ? <h2>No contact found by the name {data.name}</h2> :
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                }

            </div>
        </div>
    );
};

export default Search;