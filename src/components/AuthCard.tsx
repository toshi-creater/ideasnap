import type { ReactNode } from "react"

interface AuthCardProps {
    children: ReactNode
}

export const AuthCard = ({ children }: AuthCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {children}
        </div>
    )
}