import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfileActionCreator} from "../../../redux/profile-reduser";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9`)
            .then(response => {
                this.props.setUsersProfileActionCreator(response.data);
            })
    }

    render () {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUsersProfileActionCreator}) (ProfileContainer);