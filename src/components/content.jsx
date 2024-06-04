import "../App.css";
import Card from "./cards";
import cardData from './data/cardData'
function Content() {
  return (
    <div className="flex flex-col w-full lg:w-[60%] grayup Myworks-bg shrink-0">
      <p className="px-10 mt-4 text-3xl font-semibold py-5" id="project">
        My works
      </p>
      <ul className="flex flex-wrap gap-y-6 px-5 py-5">
        {cardData.map((i,v) => (
          <Card key={v} link={i.link} bg_img={i.bg_img}
            title={i.title}
            desc={i.desc}
            bottom_link={i.bottom_link}
            bottom_desc={i.bottom_desc}
            date={i.date} />
        ))
        }
      </ul>
    </div>
  );
}
export default Content;
