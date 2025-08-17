import type { InputHTMLAttributes } from "react"
import { Icons } from "./Icons"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: keyof typeof Icons
}

export const FormInput = ({ icon, children, ...props }: FormInputProps) => {
    const Icon = Icons[icon]
    return (
        <div className="relative">
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={"18px"} />
            <input
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                {...props}
            />
            {children && children}
        </div>
    )
}