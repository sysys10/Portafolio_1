function Links() {
  return (
    <div className="w-full flex flex-col lg:w-[20%] bg-[#2c3e50]">
      <div className="flex flex-col gap-4 px-2 pt-10 md:w-[100%] w-[60%] py-10">
        <div className="text-3xl font-semibold text-gray-200 ml-3"> Links</div>
        <div className="pt-2 px-3 border-1 text-2xl w-fit font-semibold">
          <a
            href="https://velog.io/@ys10/posts"
            className="text-green-500 text-4xl nanum-pen-script-regular"
          >
            Velog Link
          </a>
        </div>
        <div className="px-3 border-1 text-2xl font-semibold">
          <a
            href="https://github.com/sysys10"
            className="text-purple-300 text-4xl nanum-pen-script-regular"
          >
            github Link
          </a>
        </div>
        <div className="pt-2 px-3 border-1 text-2xl w-fit font-semibold">
          <a
            href="https://solved.ac/profile/ys10"
            className="text-green-400 text-4xl nanum-pen-script-regular"
          >
            solved.ac Link
          </a>
        </div>
      </div>
    </div>
  );
}
export default Links;
