import htmlcssjs from "../images/htmlcssjs.png";
import reactSymbol from "../images/React-Symbol.png";
import tailwindcss from "../images/tailwindcss.png";
import Frame2 from "../images/Frame2.png";
import introdutionData from "./data/introdutionData";
function intro() {
  return (
    <div className="w-full min-h-80 flex flex-col items-center lithium">
      <div className="text-4xl w-4/5 font-semibold mt-12 mb-10">
        상세 기술스택
      </div>
      <div className="w-4/5 flex flex-col gap-y-4 gap-x-2 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-4 py-10 md:px-10 justify-evenly w-[100%] min-h-60 rounded-xl bg-white hover-outline-blue">
          <div className="md:w-[30%] w-1/2">
            <img src={htmlcssjs} />
          </div>
          <div className="md:w-[60%] pl-3 flex flex-col gap-2">
            <div className="text-3xl font-semibold">
              {introdutionData[0].title}
            </div>
            <div className="text-lg noto-sans-kr break-keep">
              {introdutionData[0].desc}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 py-10 md:px-10 justify-evenly w-[100%] min-h-60 rounded-xl bg-white hover-outline-blue">
          <div className="md:w-[30%] w-1/2">
            <img src={tailwindcss} />
          </div>
          <div className="md:w-[60%] pl-3 flex flex-col gap-2">
            <div className="text-3xl font-semibold">
              {introdutionData[1].title}
            </div>
            <div className="text-lg noto-sans-kr break-keep">
              {introdutionData[1].desc}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 py-4 md:px-10 justify-evenly w-[100%] min-h-60 rounded-xl bg-white hover-outline-blue">
          <div className="md:w-[30%] w-1/2">
            <img src={reactSymbol} />
          </div>
          <div className="md:w-[60%] pl-3 flex flex-col gap-2">
            <div className="text-3xl font-semibold flex">
              {introdutionData[2].title}
            </div>
            <div className="text-lg noto-sans-kr break-keep">
              {introdutionData[2].desc}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 py-10 md:px-10 justify-evenly w-[100%] min-h-60 rounded-xl bg-white hover-outline-blue">
          <div className="md:w-[30%] w-1/2">
            <img src={Frame2} />
          </div>
          <div className="md:w-[60%] pl-3 flex flex-col gap-2">
            <div className="text-3xl font-semibold">
              {introdutionData[3].title}
            </div>
            <div className="text-lg noto-sans-kr break-keep">
              {introdutionData[3].desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default intro;
