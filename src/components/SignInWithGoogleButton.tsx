import { Icons } from "./Icons"

export const SignInWithGoogleButton = () => {
    return (
        <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md">
            <Icons.google className="w-5 h-5" />
            Googleでサインイン
        </button>
    )
}