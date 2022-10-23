import { useEffect } from "react"
import { supabase } from "../utils"

const Login = () => {
    useEffect(() => {
        supabase.auth.signInWithOAuth({
            provider: 'github'
        })
    }, [])
    return <p>Login</p>
}

export default Login