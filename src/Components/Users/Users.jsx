import styles from "./Users.module.css";
import userPhoto from "../../Assets/Images/hero.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";



let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let { currentPage } = props;
    let delta = 2;

    if (pagesCount > 10) {
        let leftBoundary = Math.max(2, currentPage - delta);
        let rightBoundary = Math.min(pagesCount - 1, currentPage + delta);

        pages = [1];

        if (leftBoundary > 2) {
            pages.push("...");
        }

        for (let i = leftBoundary; i <= rightBoundary; i++) {
            pages.push(i);
        }

        if (rightBoundary < pagesCount - 1) {
            pages.push("...");
        }

        pages.push(pagesCount);
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }

    return <div>
        <div className={styles.pagination}>
            {pages.map(page => {
                return <span className={props.currentPage === page ? styles.selectedPage : undefined}
                             onClick={(event) => {props.onPageChanged(page)}}>{page}</span>
            })}
        </div>
        {
            props.users.map((user) => <div key={user.id}>
            <span>{user.username}
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null
                        ? user.photos.small
                        : userPhoto} className={styles.userPhoto} alt="user"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c7fc7458-7d30-4172-9b95-be34708ab3f2"
                                }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                });
                            }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},{
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c7fc7458-7d30-4172-9b95-be34708ab3f2"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                });
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

export default Users;