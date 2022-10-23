import { useRouter } from "next/router"
import { useEffect } from "react"
import { supabase } from "../utils"

const Logout = () => {
    const router = useRouter()
    useEffect(() => {
        const logout = async () => {
            await supabase.auth.signOut()
            router.push('/')
        }
        logout()
    }, [])
    return <p>Login</p>
}

export default Logout