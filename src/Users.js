import React, { Component } from 'react';

import UserItem from './components/UserItems';
import Loading from './components/Loading'

const Users = (props) => {
    if (props.loading) {
        return <Loading />;
    } else {
        return <div style={userStyle}>
            {props.users.map((user) => (
                <UserItem key={user.id} user={user}  />
            ))}
        </div>
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}


export default Users;