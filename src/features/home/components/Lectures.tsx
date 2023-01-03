interface LectureListTypeObj{
  lectureList:{
    preview:string,
    lecture:string,
    time:string
  }[];
  showDiv:boolean
}

export function Lectures({ lectureList, showDiv }: LectureListTypeObj):JSX.Element {
  return (
    <div>
      {showDiv && (
      <div className="border-[1px] border-gray-200 px-5 py-8">
        {lectureList?.map((item, i) => (
          <div key={i} className="mt-3">
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
              className="-mt-5 flex justify-around text-[0.9rem] xsm:hidden sm:float-right sm:block md:float-right md:block 3xl:float-right"
            >
              {item?.preview && (
                <a className="mr-10 text-[#5624d0] underline" href="">
                  Preview
                </a>
              )}
              <span className="text-gray-500">{item?.time}</span>
            </div>
          </div>
        ))}
        <div />
      </div>
      
    )}
    </div>
  );
}
