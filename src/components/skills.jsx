import Frame from "../images/Frame.png";
import React from "react";
import Frame3 from "../images/Frame3.png";
function Skills() {
  return (
    <div className="w-full bg-gray-100 lg:w-[20%] pb-4">
      <div className=" flex flex-col w-full sm:w-1/2 lg:w-[100%] gap-4 px-2 pt-10 ">
        <div className="text-3xl w-full font-semibold ml-3 mb-5"> Skills</div >
        <div className="bg-indigo-200 rounded-3xl flex flex-col hover:-translate-y-3 transition-all">
          <div className=" pt-2 px-3 border-1 text-2xl w-fit font-semibold underline-offset-4">
            FrontEnd
          </div>
          <img src={Frame} className="w-[90%] self-center" />
        </div>
        <div className="bg-indigo-200 rounded-3xl flex flex-col hover:-translate-y-3 transition-all">
          <div className=" pt-2 px-3 border-1 text-2xl w-fit font-semibold underline-offset-4">
            BackEnd
          </div>
          <img src={Frame3} className="w-[90%] self-center" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
