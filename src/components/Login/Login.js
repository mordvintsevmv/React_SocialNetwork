import LoginForm from "./LoginForm";
import LoginCSS from './Login.module.css'

const Login = () => {
    return (<div>

        <div className={LoginCSS.page_name}>Login!</div>

        <LoginForm/>
    </div>)
}

export default Login;