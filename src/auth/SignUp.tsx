import { AuthCard } from "../components/AuthCard";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { Logo } from "../components/logo";
import { PasswordInput } from "../components/PasswordInput";

export const SignUp = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-full max-w-md">
                <Logo />
                <AuthCard>
                    <div className="text-center mb-6 rounded-lg p-1">
                        <span className="text-2xl font-bold text-gray-700">
                            アカウント登録
                        </span>
                    </div>
                    <form>
                        <div className="space-y-4">
                            <FormInput
                                type={"text"}
                                placeholder={"ユーザー名"}
                                icon={"user"}
                            />
                            <FormInput
                                type={"email"}
                                placeholder={"メールアドレス"}
                                icon={"atSign"}
                            />
                            <PasswordInput />
                            <FormInput
                                type={"password"}
                                placeholder={"パスワード確認用"}
                                icon={"password"}
                            />
                            <Button>アカウント作成</Button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500">
                            アカウントを作成することで、
                            <button className="text-cyan-600 hover:underline mx-1">
                                利用規約
                            </button>
                            と
                            <button className="text-cyan-600 hover:underline mx-1">
                                プライバシーポリシー
                            </button>
                            に同意したものとみなされます。
                        </p>
                    </div>
                </AuthCard>
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        © 2025 Connect. すべての権利を保有しています。
                    </p>
                </div>
            </div>
        </div>
    );
};
