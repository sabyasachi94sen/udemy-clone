export function Lectures({ lectureList, showDiv }) {
  return (
    showDiv && (
      <div className="px-5 py-8 border-[1px] border-gray-200">
        {lectureList?.map((item, i) => (
          <div className="mt-3" key={i}>
            <div className="flex w-[70%] items-center whitespace-pre-wrap text-[0.9rem]">
              <img
                alt="play-btn-icon"
                className="h-[15px] w-[15px]"
                src="http://cdn.onlinewebfonts.com/svg/img_68580.png"
              />
              <span
                className={`ml-5 cursor-pointer  ${
                  item?.preview ? `text-[#5624d0] underline` : ``
                }`}
              >
                {item?.lecture}
              </span>
            </div>
            <div
              className={`3xl:float-right -mt-5 flex justify-around text-[0.9rem] xsm:hidden md:block md:float-right sm:block sm:float-right`}
            >
              {item?.preview && (
                <a className="text-[#5624d0] underline mr-10" href="">Preview</a>
              )}
              <span className="text-gray-500">{item?.time}</span>
            </div>
          </div>
        ))}
        <div />
      </div>
    )
  );
}
