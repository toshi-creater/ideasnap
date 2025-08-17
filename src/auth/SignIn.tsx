import { AuthCard } from "../components/AuthCard";
import { Logo } from "../components/logo";
import { SignInForm } from "../components/SignInForm";
import { SignInWithGoogleButton } from "../components/SignInWithGoogleButton";

export const SignIn = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-full max-w-md">
                <Logo />
                <AuthCard>
                    <div className="text-center mb-6 rounded-lg p-1">
                        <span className="text-2xl font-bold text-gray-700">
                            ログイン
                        </span>
                    </div>
                    <SignInForm />
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">
                                または
                            </span>
                        </div>
                    </div>
                    <SignInWithGoogleButton />
                    <div className="mt-8 text-end">
                        <p className="text-sm text-gray-500">
                            アカウントを作成していない方は
                            <a href="./signup" className="text-cyan-600 hover:underline">
                                こちら
                            </a>
                        </p>
                    </div>
                </AuthCard>
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        © 2025 Idea Snap. すべての権利を保有しています。
                    </p>
                </div>
            </div>
        </div>
    );
};
