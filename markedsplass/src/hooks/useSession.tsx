"use client"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/firebase"
import { useRouter } from "next/navigation"

const useSession = () => {
    const [user, setUser] = useState<any>()
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
                router.push('/')
            }
        })
    }, [])

    return [user, setUser]
}

export default useSession