import htmlcssjs from '../images/htmlcssjs.png'
import reactSymbol from '../images/React-Symbol.png'
import tailwindcss from '../images/tailwindcss.png'

{/*이미지 임포트 문제 떄문에 사용하지 못함 */ }
function introC(props) {
  return (
    <div className="w-[100%] min-h-60 rounded-xl bg-white">
      <div className="p-10 flex flex-row gap-4">
              <div> <img src={props.imgsrc} /></div>
        <div>
          <div className="text-3xl font-semibold ">{props.title}</div>
          <div className="text-lg noto-sans-kr">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}
export default introC;
