import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom'

import { query, initIHPBackend, DataSubscription, createRecord, updateRecord, deleteRecord, createRecords, ensureIsUser, logout, getCurrentUserId } from 'ihp-backend';
import { useQuery, useCurrentUser } from 'ihp-backend/react';

function App() {
    // With `useQuery()` you can access your database:
    // 
    //     const todos = useQuery(query('todos').orderBy('createdAt'));

    return <div className="container">
        <AppNavbar/>
    </div>
}

function AppNavbar() {
    // Use the `useCurrentUser()` react hook to access the current logged in user
    const user = useCurrentUser();

    // This navbar requires bootstrap js helpers for the dropdown
    // If the dropdown is not working, you like removed the bootstrap JS from your index.html

    return <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {user?.email}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#" onClick={() => logout()}>Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
}

// This needs to be run before any calls to `query`, `createRecord`, etc.
initIHPBackend({ host: process.env.BACKEND_URL });

// Redirects to the login page if not logged in already
ensureIsUser().then(() => {
    // Start the React app
    ReactDOM.render(<App/>, document.getElementById('app'));
});
