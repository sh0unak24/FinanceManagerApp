import { Appbar } from "../components/Appbar";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  return (
    <div
      className="h-screen flex flex-col items-center"
      style={{ backgroundColor: "#e8d5c4", color: "#429ab9" }}
    >
      {/* Appbar as a centered heading */}
      <div className="w-full text-center py-4">
        <Appbar />
      </div>

      {/* Signin Form */}
      <div className="flex flex-col justify-center flex-grow ">
        <div
          className="rounded-lg w-90 bg-[#c6b295] text-center py-6 h-max px-4"
          style={{ color: "#429ab9" }}
        >
          <Heading label={"Sign in"} className = "" />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox placeholder="sh@gmail.com" label={"Email"} />
          <InputBox placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign in"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};