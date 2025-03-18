import LoginFormValues from "@/types/LoginFormValues";
import { useCustomForm } from "@/utils/useFormHook";
import { loginSchema } from "@/utils/Vaildation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Headline from "../cards/Headline";
import Link from "../forms/Link";
import Icons from "../forms/Icons";
import { Facebook, Github, MailPlus } from "lucide-react";
import useLogin from "@/services/authService";

function Formlogin() {
    const { control, handleSubmit, formState: { errors } } = useCustomForm<LoginFormValues>(loginSchema);
    const Login=useLogin()
    const onSubmit = (data: LoginFormValues) => {
        Login.mutate(data,{
            onSuccess:(res)=>{
                localStorage.setItem("token",res.token)
                console.log("login successfuly");
                
            },
            onError:(err)=>{
                console.log(err);
                
            }
        })
    };
    return (
        // <Form {...control}>    </Form>
        <div className="flex justify-center items-center ">
            <div className="w-96 !mt-20 shadow-2xl">
                <form className="!p-10 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center "><Headline text="Login" size="text-4xl" /> </div>
                    <div className="!mb-4">
                        <Label className="!mb-2">Email</Label>
                        <Input {...control.register("email")} placeholder="Email" />
                        {errors.email && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="!mb-4">
                        <Label className="!mb-2">Password</Label>
                        <Input {...control.register("password")} type="password" placeholder="Password" />
                        {errors.password && <p className="text-red-600 bg-red-100 !mt-1 !p-2 rounded-md text-sm">{errors.password.message}</p>}
                    </div>
                    <div className="text-center !mb-4"> <Button className="text-xl cursor-pointer !px-5 !py-6 bg-[#09cc7f] hover:bg-[#24ac75]" type="submit">Login</Button></div>
                    <div className="text-center">
                        <Link content="SignUp" className={false} />
                    </div>
                    <div className="flex justify-center !mt-4 items-center">
          <Icons component={[<Facebook className="transition-all duration-300 transform hover:text-[#09cc7f] hover:scale-x-[-1]" size={32} />, <Github className="transform !mx-4 hover:text-[#09cc7f] hover:scale-x-[-1]" size={32} />, <MailPlus className="transform hover:text-[#09cc7f] hover:scale-x-[-1]" size={32} />]} />

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formlogin