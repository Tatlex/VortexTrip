import React from 'react';
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from "../../Assets/Images/hero.png"


class Users extends React.Component {


    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <div>
            {
                this.props.users.map((user) => <div key={user.id}>
            <span>{user.username}
                <div>
                    <img src={user.photos.small !== null
                        ? user.photos.small
                        : userPhoto} className={styles.userPhoto} alt="user"/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            this.props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
                    <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
                    <span>
                <div>{/* user.location.country */}</div>
                <div>{/* user.location.city */}</div>
                <div></div>
            </span>

                </div>)}
        </div>
    }
}

export default Users;