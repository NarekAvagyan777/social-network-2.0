import Profile from "./Profile";
import { connect } from "react-redux";
import { addNewPost } from "../../redux/reducers/profileReducer";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
})

export default connect(mapStateToProps,
    {addNewPost}
)
(Profile);