import { FormInput } from "./FormInput"
import { Icons } from "./Icons"

export const PasswordInput = () => {
    return (
        <FormInput 
            type={"password"}
            placeholder={"パスワード"}
            icon={"password"}
        >
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Icons.passwordEye size={"20px"} />
            </button>
        </FormInput>
    )
}