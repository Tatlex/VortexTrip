import React from 'react';
import styles from './Users.module.css';
let Users = (props) => {
    return <div>
        {
            props.users.map((user) => <div key={user.id}>
            <span>{user.username}
                <div>
                    <img src={user.photoURL} className={styles.userPhoto} alt="user"/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>
            </span>
                <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
            </span>
                <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
                <div></div>
            </span>

            </div>)}
    </div>
}

export default Users;