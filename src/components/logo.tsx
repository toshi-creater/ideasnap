export const Logo = () => {
    return (
        <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-full shadow-lg">
                <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                </svg>
            </div>
            <h1 className="inline-flex items-center text-3xl font-bold text-gray-800 pl-2">
                Idea Snap
            </h1>
        </div>
    )
}