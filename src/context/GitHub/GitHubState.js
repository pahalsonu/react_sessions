import React, { useReducer } from "react";

import githubContext from "./githubContext";
import axios from "axios"
import GithubReducer from "./githubReducer"

import {SET_LOADING, SEARCH_USERS} from "../types"; // Action (Action Types)

const GitHubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
// create a function for set loading

const setLoading = () =>  dispatch({ type : SET_LOADING})
     //Search User Function which is going as props to Search Component
     const searchUsers = async (text) => {
     setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        dispatch({
            type : SEARCH_USERS,
            payload : res.data.items
        })
        setLoading()
    }



    return (
        <githubContext.Provider value = {{
            users : state.users, 
            user : state.user, 
            repos: state.repos,
            loading : state.loading,
            searchUsers
        }}>
            {props.children}
        </ githubContext.Provider >


    )


};

export default GitHubState