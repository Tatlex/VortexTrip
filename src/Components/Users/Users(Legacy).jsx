/*
import React from 'react';
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from "../../Assets/Images/hero.png"
*/
/*
let UsersLegacy = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    return <div>
        {
            props.users.map((user) => <div key={user.id}>
            <span>{user.username}
                <div>
                    <img src={user.photos.small !== null
                        ? user.photos.small
                        : userPhoto} className={styles.userPhoto} alt="user"/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
                <span>
                <div></div>
            </span>

            </div>)}
    </div>
}

export default UsersLegacy;


 */