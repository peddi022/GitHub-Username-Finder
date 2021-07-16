import React, { useState } from 'react';
import {connect} from "react-redux";
import { getusers, getRepos } from "../actions/apiactions";
import { Link } from "react-router-dom";

const Apidata = (props) => {
    const { users, getusers } = props;
    let [ username, setUsername ] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        getusers(username);
    }

    const clear = (e) => {
        e.preventDefault();
        // getusers("")
        // users = []
        document.location.reload();
    }

    return (
        <div className="container mt-4">
            <h1 className='text-center'>GitHub User Finder <medium className="text-muted">API</medium></h1>
            <form onSubmit={onSubmit}>
            <label htmlFor="username"><strong>Enter Username:</strong></label>
            <input 
                type="text" 
                id="username" 
                name={username}
                className="m-4"
                onChange = { (e) => setUsername(e.target.value) }
                
                
            />
            <button className='btn btn-outline-info m-2' type='submit'>Find</button>
            <button className='btn btn-outline-danger' type='button' onClick={clear}>Clear</button>
            
            </form>
            

            <h6>{users.length} user(s) found:</h6>
            {users && <div className="row mb-3">
                        {users.map((user) => {
                            return <div key={user.id} className="card col-3 h-25">
                                <img src={user && user.avatar_url}
                                className="card-image rounded-circle small center rounded mx-auto d-block mt-4 border border-dark" height="100px" width="100px" />
                                <div className="card-body">
                                    <p className="card-title text-center">{user.login}</p>
                                    <div className="card-actions text-center mt-2">
                                        {/* <button className="btn btn-dark btn-sm">More</button> */}
                                        <span className="badge badge-pill badge-success m-2">Followers: {user.followers_url.length}</span> 
                                        <span className="badge badge-pill badge-info">Following: {user.following_url.length}</span>
                                        <Link to={`/user/${user.login}`} className='btn btn-dark btn-sm'>More</Link>
                                        {/* <span class="badge badge-pill badge-warning">Repositories: {user.repos_url.length}</span> */}

                                        
                                    </div>
                                </div>
                            </div>
                        })}
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    users : state.apiData.users
});

export default connect(mapStateToProps, { getusers, getRepos })(Apidata);
