import "../App.css";
function Card(props) {
  return (
    <a
      className="w-full md:w-1/2 px-4 duration-150 hover:-translate-y-3
        "
      href={props.link}
    >
      <figure className={`card-image ${props.bg_img}`}></figure>
      <div className="card-desc flex flex-col justify-between">
        <p className="text-wrap">
          <p className="mb-3 text-xl font-semibold noto-sans-kr break-keep">{props.title}</p>
          <p className="break-keep">{props.desc}</p>
        </p>
        <div className="flex flex-row justify-between ">
          <p>{props.date}</p>
          <a
            className="text-right z-50 text-lg text-green-500 "
            href={props.bottom_link}
          >
            {props.bottom_desc}
          </a>
        </div>
      </div>
    </a>
  );
}
export default Card;
