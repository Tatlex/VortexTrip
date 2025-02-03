import React from 'react';
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from "../../Assets/Images/hero.png"


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        let { currentPage } = this.props;
        if (pagesCount > 10) {
            if (currentPage <= 5) {
                pages = [1, 2, 3, 4, 5, "...", pagesCount];
            } else if (currentPage >= pagesCount - 4) {
                pages = [1, "...", pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
            } else {
                pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", pagesCount];
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }
        }
        return <div>
            <div className={styles.pagination}>
                {pages.map(page => {
                    return <span className={this.props.currentPage === page ? styles.selectedPage : undefined}
                                 onClick={(event) => {this.onPageChanged(page)}}>{page}</span>
                })}
            </div>
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