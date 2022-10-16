import { useEffect } from "react";
import { connect } from "react-redux";
import Users from './Users';
import { onPageChangeCreator, setUsers } from '../../redux/reducers/usersReducer';
import Preloader from "../../components/common/Preloader/Preloader";



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = (props) => {
    useEffect(() => {
        props.onPageChangeCreator(props.currentPage, props.pageSize)
    }, [])

    return  (
        <div>
            {props.isFetching ? <Preloader /> : null}
            <Users 
                users={props.users} 
                totalCount={props.totalCount} 
                pageSize={props.pageSize} 
                currentPage={props.currentPage} 
                setUsers={props.setUsers}
                onPageChangeCreator={props.onPageChangeCreator}
            />
        </div>
    )
}

export default connect(mapStateToProps, {
    setUsers, onPageChangeCreator
})
(UsersContainer);