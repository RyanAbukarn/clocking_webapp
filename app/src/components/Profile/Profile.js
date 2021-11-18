import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile({ isAuthenticated }) {
    // https://reactrouter.com/docs/en/v6/api#usenavigate
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/')
        }
    }, [])

    return (
        <div>
            LOGGED IN!
        </div>
    )
}
