import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsCalendarFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
function AboutMe() {
  const list_class =
    "items-center w-full md:w-[50%] lg:w-[30%] flex flex-row justify-evenly md:justify-center h-20  md:hover:w-[39%] hover:bg-[aliceblue] transition-all duration-300";
  return (
    <div className="w-4/5">
      <p className="text-6xl font-bold font-sans text-center my-12">About Me</p>
      <ul className=" w-full flex gap-y-4 justify-between flex-wrap">
        <li className={list_class}>
          <FaUser className="text-5xl "></FaUser>
          <div className="ml-3 w-[40%]">
            <p className="text-lg font-semibold mb-2">이름</p>
            <p className=""> 신윤수</p>
          </div>
        </li>
        <li className={list_class}>
          <BsCalendarFill className="text-5xl"></BsCalendarFill>
          <div className="ml-3 w-[40%]">
            <p className="text-xl font-semibold mb-2">생년월일</p>
            <p className="">04.10.14</p>
          </div>
        </li>
        <li className={list_class}>
          <IoLocationSharp className="text-6xl"></IoLocationSharp>
          <div className="ml-3 w-[40%]">
            <p className="text-xl font-semibold mb-2">주소</p>
            <p className=""> 서울시 송파구</p>
          </div>
        </li>
        <li className={list_class}>
          <BsFillTelephoneFill className=" text-5xl"></BsFillTelephoneFill>
          <div className="ml-3 w-[40%]">
            <p className="text-xl font-semibold mb-2">전화번호</p>
            <p className="">010-9666-1332</p>
          </div>
        </li>
        <li className={list_class}>
          <IoIosMail className="text-6xl"></IoIosMail>
          <div className="ml-3 w-[40%]">
            <p className="text-xl font-semibold mb-2">이메일</p>
            <p className=""> yunsu102896@gmail.com</p>
          </div>
        </li>
        <li className={list_class}>
          <BsFillPencilFill className="text-5xl"></BsFillPencilFill>
          <div className="ml-3 w-[40%]">
            <p className="text-xl font-semibold mb-2">학력</p>
            <p className=" whitespace-nowrap">
              한양대학교<br></br>(정보시스템학과) 1학년
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe