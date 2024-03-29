import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"
import NavBar from "../components/NavBar"


const SignIn =()=>{
    return <div>
        <NavBar/>
        <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80- text-center p-2 h-max px-4"> 
            <Heading label={"Sign In"}/>
            <SubHeading label={"Enter your credentials to access your account"}/>
            <InputBox placeholder={"Ex: 12345@gmail.com"} label={"Email"}/>
            <InputBox placeholder={"enter password"} label={"Password"}/>
            <div className="pt-4">
                <Button label={"sign In"}/>
            </div> 
            <BottomWarning label={"Dont Have an account?"} buttontext={"Sign Up"} to={"/signup"}/>


        </div>

    </div>
    </div>
        </div>
}

export default SignIn