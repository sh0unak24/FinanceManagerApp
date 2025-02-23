import { Appbar } from "../components/Appbar";
import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signup = () => {
  return (
    <div
      className="h-screen flex flex-col items-center"
      style={{ backgroundColor: "#e8d5c4", color: "#429ab9" }}
    >
      {/* Appbar as a centered heading */}
      <div className="w-full text-center py-4">
        <Appbar />
      </div>

      {/* Signup Form */}
      <div className="flex flex-col justify-center flex-grow">
        <div
          className="rounded-lg bg-[#c6b295] w-96 text-center p-2 h-max px-4"
          style={{ color: "#429ab9" }}
        >
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox placeholder="John" label={"First Name"} />
          <InputBox placeholder="Doe" label={"Last Name"} />
          <InputBox placeholder="sh@gmail.com" label={"Email"} />
          <InputBox placeholder="123456" label={"Password"} />
          <div className="pt-4"></div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};