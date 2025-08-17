import type { HTMLAttributes } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: ButtonProps) => {
    return (
        <button 
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            {...props}
        />
    )
}