import "./App.css";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/twitter";
function App() {
  return (
    <body>
      {/* main page */}
      <div class="bg-[url('/public/homepagereal.jpg')] h-screen bg-no-repeat bg-[length:100px_100px] bg-cover flex flex-col items-center justify-start rounded-b-lg">
        <nav class="bg-white p-2 w-[1200px] flex justify-between items-center rounded-[100px] mt-6">
          <div className="text-gray-500 font-semibold flex flex-row p-2  ">
            <CiSearch className="mt-1 " /> Search
          </div>
          <a href="for individuals" className="text-gray-500 font-semibold">
            For individuals
          </a>
          <a href="for charity" className="text-gray-500 font-semibold">
            For charities
          </a>
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="w-[90px] h-[50px] object-cover"
            ></img>
          </div>
          <a href="how it works" className="text-gray-500 font-semibold">
            How it works
          </a>
          <a href="sign in" className="text-gray-500 font-semibold">
            Sign In
          </a>

          <div className=" outline outline-[2px] outline-green-500 rounded-[100px] mr-3 ">
            <button className="text-green-500 font-bold p-1 ">
              Start a GoFundMe
            </button>
          </div>
        </nav>

        {/* middlepart */}

        <div className="flex flex-col items-center justify-center mt-[100px] space-x-2 space-y-5 ">
          <p className="text-[#18412D] font-medium text-lg">
            Leading Crowdfunding Platform.
          </p>
          <h1 className="text-[#18412D] font-semibold text-6xl flex flex-row">
            Your home{" "}
          </h1>
          <h1 className="text-[#18412D] font-semibold text-6xl flex flex-row justify-center items-center">
            for help
          </h1>
          <button className="bg-white text-[#02A95C] rounded-xl p-5 font-semibold">
            Start a GoFundMe
          </button>
        </div>
      </div>

      {/* second page */}
      <div>
        <div className=" w-full  p-8 space-y-4">
          <h2 className="text-black text-2xl font-semibold p-4">
            Discover fundraisers inspired by what you care about...
          </h2>
          <div className="flex flex-row space-x-[900px]">
            <button className="outline outline-gray-500 rounded-[90px] font-semibold px-4 py-2 ml-4 outline-1 hover:bg-gray-100">
              Happening Worldwide
            </button>

            <div className="flex justify-end space-x-[10px]">
              <div className="w-9 h-9 rounded-full outline outline-1 outline-gray-500 flex justify-center items-center hover:bg-gray-100">
                <FaArrowLeft />
              </div>
              <div className="w-9 h-9 rounded-full outline outline-1 outline-gray-500 flex justify-center items-center hover:bg-gray-100">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* cards part */}

        <div className="flex flex-row p-5 m-5">
          <div className="p-4  bg-gray-100 rounded-3xl">
            <img
              src="/firstdiv.jpg"
              alt=""
              className=" w-[585px] h-[385px] bg-contain rounded-2xl "
            />
            <h4 className="font-bold p-5 text-m ">
              Help me for the donations for Azaylia!!!
            </h4>
            <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[340px]"></div>

            <p className="font-bold p-5 text-m">$704453 raised</p>
          </div>

          <div className="p-3 w-[600px]  bg-gray-100 rounded-3xl ml-2 ">
            <div className="flex flex-row ">
              <div>
                <img
                  src="/1.webp"
                  alt=""
                  className="w-[350px] h-[180px] bg-cover rounded-2xl p-1"
                />
                <h2 className="font-bold p-5 text-m ">
                  Help needed for Baby Alma!!!
                </h2>

                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[40px]"></div>

                <p className="font-bold p-5 text-m">$7053 raised</p>
              </div>
              <div>
                <img
                  src="/2.jpeg"
                  alt=""
                  className="w-[350px] h-[180px] bg-cover rounded-2xl p-1"
                />
                <h2 className="font-bold p-5 text-m ">
                  Evacuating aid for four families.
                </h2>
                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[60px]"></div>

                <p className="font-bold p-5 text-m">$9053 raised</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div>
                <img
                  src="/3.jpeg"
                  alt=""
                  className="w-[350px] h-[180px] bg-cover rounded-2xl p-1"
                />
                <h2 className="font-bold p-5 text-m ">
                  Help me obtain my injections so i can live and see the world
                </h2>
                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[30px]"></div>

                <p className="font-bold p-5 text-m">$5053 raised</p>
              </div>
              <div>
                <img
                  src="/4.jpeg"
                  alt=""
                  className="w-[350px] h-[180px] bg-cover rounded-2xl p-1"
                />
                <h2 className="font-bold p-5 text-m ">
                  Help me obtain my injections so i can live and see the world
                </h2>
                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[20px]"></div>

                <p className="font-bold p-5 text-m">$1043 raised</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured topics part */}

      <div>
        <h2 className="font-bold text-3xl ml-12">Featured Topics</h2>
        <div className="bg-gray-100 rounded-2xl m-9 flex flex-row justify-center items-center">
          <div>
            <img
              src="/teachers.webp"
              alt=""
              className="w-[640px] h-[300px] object-cover rounded-l-lg "
            />
          </div>
          <div className="flex flex-col p-9 space-y-3">
            <h2 className="font-semibold text-xl flex justify-start">
              Teachers Appreciation
            </h2>
            <p>
              We asked the GoFundMe community to share a memory of a teacher who
              helped them. Many people chimed in with heartwarming teacher
              appreciation quotes that will brighten your day.
            </p>
            <button className="font-bold bg-white text-green-500 p-2 w-[160px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              Learn More{">"}
            </button>
          </div>
        </div>
      </div>

      {/* three cards part*/}
      <div>
        <div className=" flex gap-7 p-9">
          <div className="bg-gray-100 rounded-lg h-[320px] w-[700px] space-y-1">
            <img src="/1st.png" alt="" className="rounded-t-lg h-[210px]" />
            <h2 className="font-semibold text-xl p-2.5">Fundraising FAQ's</h2>
            <button className="font-bold bg-white text-green-500 p-2 ml-2 w-[160px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              Learn More{">"}
            </button>
          </div>
          <div className="bg-gray-100 rounded-lg h-[320px] w-[700px] space-y-1">
            <img
              src="2nd.png"
              alt=""
              className="rounded-t-lg h-[210px] w-[400px]"
            />
            <h2 className="font-semibold text-xl p-2.5">
              How to Help: Tornado relief in MidWest
            </h2>
            <button className="font-bold bg-white  text-green-500 p-2 ml-2 w-[160px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              Donate now{">"}
            </button>
          </div>
          <div className="bg-gray-100 rounded-lg h-[320px] w-[700px] space-y-1">
            <img
              src="3rd.png"
              alt=""
              className="rounded-t-lg h-[210px] w-[400px]"
            />
            <h2 className="font-semibold text-xl p-2.5">Helps adds up</h2>
            <button className="font-bold bg-white  text-green-500 ml-2 p-2 w-[160px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              Read more{">"}
            </button>
          </div>
        </div>
      </div>

      {/* paragraph part */}
      <div className="bg-[#F0FCE9] py-[60px]">
        <h6 className="font-bold text-3xl mx-9 py-[40px]">
          Fundraising on GoFundMe is easy, powerful, and trusted.
        </h6>
        <p className="font-lg text-lg ml-9">
          Get what you need to help your fundraiser succeed on GoFundMe, whether
          your raising money for yourself, friends, family, or charity. With no
          fee to <br /> start, GoFundMe is the world leading crowdfunding
          platform from memorial tributes and funerals to medical emergencies
          and nonprofits. Whenever <br /> you need help, you can ask here.
          <br />
          <br />
          Still have questions? Learn more about how{" "}
          <a className="underline" href="www.gofundme.com">
            GoFundMe
          </a>{" "}
          works.{" "}
        </p>
      </div>

      {/* big image part */}
      <div className="mt-9">
        <div className="flex space-x-[900px]">
          <h6 className="font-bold text-xl p-2 ml-7">How GoFundMe works</h6>
          <button className="font-semibold outline outline-[1px] p-2 rounded hover:bg-green-500 hover:text-white">
            Learn More
          </button>
        </div>
        <div className=" m-2 p-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8EUGN4C33e8?si=5YbHnWvZ4LU0ZzyO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-[30px] w-[1225px] h-[600px] "
          ></iframe>
        </div>
      </div>

      {/* green para part */}
      <div>
        <p className="bg-[#012D19] text-white font-bold text-4xl p-[90px] tracking-normal leading-relaxed">
          We've got you covered. <br /> <br />
          GoFundMe is a trusted leader in online fundraising. With simple
          pricing and a team of Trust & Safety experts in your corner, you can
          raise money or make a donation with peace of mind.
        </p>
      </div>
      {/* tab by tab section  */}
      <div>
        <h2 className="font-bold text-xl mx-[80px] py-9">
          Fundraise for anyone
        </h2>
        <div>
          <h2 className="font-bold text-3xl mx-[80px] py-2">Yourself</h2>
          <p className="mx-[80px] text-xl  text-gray-500 py-3 ">
            Funds are delivered to your bank account for own use
          </p>
        </div>
        <div className="h-[1px] w-[1100px] bg-gray-200 mx-[80px]"></div>
        <br />
        <div>
          <h2 className="font-bold text-3xl mx-[80px]">Friends and Family</h2>
          <p className="mx-[80px] text-xl  text-gray-500 py-3">
            Recieve funds or distribute yourself
          </p>
        </div>
        <div className="h-[1px] w-[1100px] bg-gray-200 mx-[80px]"></div>
        <br />
        <div>
          <h2 className="font-bold text-3xl mx-[80px]">Charity</h2>
          <p className="mx-[80px] text-xl  text-gray-500 py-3">
            Funds are delivered to charity
          </p>
        </div>
        <div className="h-[1px] w-[1100px] bg-gray-200 mx-[80px]"></div>
        <br />
      </div>

      {/* footer */}
      <div className="flex flex-row space-x-[90px]  items-center gap-[300px] pl-[30px]">
        <div>
          <img src="/logo.png" alt="" className="bg-cover h-[65px] w-[65px]" />
        </div>
        <p>Copyrights by GoFundMe</p>
        <div className="space-x-[10px] ">
          <SocialIcon url="https://twitter.com" />
          <SocialIcon url="https://facebook.com" />
          <SocialIcon url="https://instagram.com" />
          <SocialIcon url="https://youtube.com" />
        </div>
      </div>
    </body>
  );
}

export default App;
