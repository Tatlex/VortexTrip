import styles from "./Users.module.css";
import userPhoto from "../../Assets/Images/hero.png";
import React from "react";



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
                <div>{/* user.location.country */}</div>
                <div>{/* user.location.city */}</div>
                <div></div>
            </span>

            </div>)}
    </div>
}

export default Users;