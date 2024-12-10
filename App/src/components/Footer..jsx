import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsGoogle,
  BsLinkedin,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
                Leaky
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            {/*About Footer*/}
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col className="">
                <Footer.Link
                  href="https://github.com/crazydrace?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10 Projects
                </Footer.Link>
                <Link to="/about" className="text-gray-500 hover:underline">
                  Leaky Blog
                </Link>
              </Footer.LinkGroup>
            </div>
            {/*Follow us*/}
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col className="">
                <Footer.Link
                  href="https://www.github.com/crazydrace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Hub
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/sa_halali_xcp/"
                  target="_blank"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/*Legal*/}
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col className="">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="sm:flex w-full sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Leaky Blog" year={2024} />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="" />
            <Footer.Icon href="#" icon={BsGoogle} />
            <Footer.Icon href="#" icon={BsDribbble} />
            <Footer.Icon href="#" icon={BsYoutube} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
