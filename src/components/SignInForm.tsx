import { ForgottenPassword } from "./ForgottenPassword";
import { FormInput } from "./FormInput";
import { Button } from "./Button";
import { PasswordInput } from "./PasswordInput";

export const SignInForm = () => {
    return (
        <form>
            <div className="space-y-4">
                <FormInput
                    type={"email"}
                    placeholder={"メールアドレス"}
                    icon={"atSign"}
                />
                <PasswordInput />
                <ForgottenPassword />
                <Button>ログイン</Button>
            </div>
        </form>
    );
};
