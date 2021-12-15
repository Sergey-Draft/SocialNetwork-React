import { connect } from "react-redux"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isAuth) {
            return <Redirect to= {"/login"} />
        }
        return <Component {...props} />
    }
    return connect(mapStateToProps)(RedirectComponent);
}