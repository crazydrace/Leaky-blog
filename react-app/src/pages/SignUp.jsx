import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left side */}
        <div className="flex-1">
          {/* logo */}
          <Link to="/" className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg text-white">
              Leaky
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This page is made for Practice in making a good web, You can sign up
            with your google account.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-5">
            <div>
              <Label value="Your username" />
              <TextInput placeholder="Username" type="text" id="username" />
            </div>
            <div>
              <Label value="Your email " />
              <TextInput
                placeholder="name@company.com"
                type="email"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput placeholder="Password" type="Password" id="pass" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
