import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import { getRepos } from "../actions/apiactions";

const Repodata = (props) => {
    const {repos, getRepos} = props
    
    useEffect(() => {
        getRepos(props.match.params.username);
    }, []);
    
    return(
        <div className="container mt-4 text-center">

            <h2>{repos && repos.length && repos[0].owner.login}</h2>
            <img src={repos && repos.length && repos[0].owner.avatar_url}
            className="card-image rounded-circle center rounded mx-auto d-block m-4 border border-dark" height="100px" width="100px" />

            <span className="badge badge-pill badge-success m-2">Followers: {repos && repos.length && repos[0].owner.followers_url.length}</span> 
            <span className="badge badge-pill badge-info m-2">Following: {repos && repos.length && repos[0].owner.following_url.length}</span>
            <span className="badge badge-pill badge-warning m-2">Repositories: {repos && repos.length && repos[0].owner.repos_url.length}</span>

            <h6 className="m-4">{repos.length} Repos(s) Shown:</h6>
            {repos && repos.map((repo) => <div><a href={repo.html_url} className="m-2">{repo.full_name}</a></div>)}
            
            <a href={repos && repos.length && repos[0].owner.html_url} target="_blank" className='btn btn-dark btn-sm m-4'>Visit Profile</a>
        </div>
    )
}  

const mapStateToProps = (state) => ({
    repos: state.apiData.repos
})


export default connect(mapStateToProps, {getRepos})(Repodata);
//mapStateToProps is the state
//getRepos is the action
//Repodata is the component