import { useState } from "react";

export function CourseDescription() {
  const [showFadedDiv, setShowFadedDiv] = useState(false);

  return (
    <>
      <div
        className={`mt-5 3xl:w-[75%] xsm:px-3 md:px-6 ${
          !showFadedDiv
            ? `h-[65vh] overflow-y-hidden gradient-mask-b-0`
            : `h-auto`
        }`}
      >
        <h1 className="3xl:text-[1.6rem] font-bold xsm:text-[1.4rem]">Requirements</h1>
        <ul className="ml-5 mt-3 list-disc">
          <li>
            <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
              Macintosh (OSX)/ Windows(Vista and higher) Machine
            </span>
          </li>
          <li>
            <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">Internet Connection</span>
          </li>
        </ul>
        <div className="mt-5">
          <h1 className="3xl:text-[1.4rem] 2xl:text-[1.3rem] xsm:text-[1.3rem] font-bold text-black">Description</h1>
          <div className="xsm:text-[0.8rem] 3xl:text-[0.9rem]">
          <p className="mt-3">
            <strong>
              Do you want to become a programmer? Do you want to learn how to
              create games, automate your browser, visualize data, and much
              more?
            </strong>
          </p>
          <p className="mt-3">
            If you’re looking to learn Python for the very{" "}
            <strong>first time</strong> or need a{" "}
            <strong>quick brush-up</strong>, this is the course for you!
          </p>
          <p className="mt-3">
            Python has rapidly become one of the{" "}
            <strong>most popular programming languages</strong> around the
            world. Compared to other languages such as Java or C++, Python
            consistently outranks and outperforms these languages in demand from
            businesses and job availability. The average Python developer makes{" "}
            <strong>over $100,000</strong> - this number is only going to grow
            in the coming years.
          </p>
          <p className="mt-3">
            The best part? Python is one of the{" "}
            <strong>easiest coding languages</strong> to learn right now. It
            doesn’t matter if you have no programming experience or are
            unfamiliar with the syntax of Python. By the time you finish this
            course, you'll be an <strong>absolute pro</strong>at programming!
          </p>
          <p className="mt-3">
            This course will cover <strong>all the basics</strong> and{" "}
            <strong>several advanced concepts</strong> of Python. We’ll go over:
          </p>

          <ul className="ml-7 mt-3 list-disc">
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                The fundamentals of Python programming
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                Writing and Reading to Files
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                Automation of Word and Excel Files
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[1rem] xsm:text-[0.8rem]">
                Web scraping with BeautifulSoup4
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                Browser automation with Selenium
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                Data Analysis and Visualization with MatPlotLib
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                Regex parsing and Task Management
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                GUI and Gaming with Tkinter
              </span>
            </li>
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">And much more!</span>
            </li>
          </ul>
          <p className="mt-3">
            If you read the above list and are feeling a bit confused, don’t
            worry! As an instructor and student on Udemy for{" "}
            <strong>almost 4 years</strong>, I know what it’s like to be
            overwhelmed with boring and mundane. I promise you’ll have a blast
            learning the ins and outs of python. I’ve successfully taught over{" "}
            <strong>200,000+ students</strong> from over{" "}
            <strong>200 countries</strong> jumpstart their programming journeys
            through my courses.
          </p>
          <p className="mt-4">Here’s what some of my students have to say:</p>
          <ul className="ml-7 mt-3 list-disc">
            <li className="mb-3">
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                “I wish I started programming at a younger age like Avi. This
                Python course was excellent for those that cringe at the thought
                of starting over from scratch with attempts to write programs
                once again. Python is a great building language for any beginner
                programmer. Thank you Avi!”
              </span>
            </li>
            <li className="mb-2">
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                “I had no idea about any programming language. With Avi's
                lectures, I'm now aware of several python concepts and I'm
                beginning to write my own programs. Avi is crisp and clear in
                his lectures and it is easy to catch the concepts and the depth
                of it through his explanations. Thanks, Avi for the wonderful
                course, You're awesome! It's helping me a lot :)”{" "}
              </span>
            </li>
            <li className="mb-2">
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                "Videos are short and concise and well-defined in their title,
                this makes them easy to refer back to when a refresher is
                needed. Explanations aren't convoluted with complicated
                examples, which adds to the quick pace of the videos. I am very
                pleased with the decision to enroll in this course. Not only has
                it increased the pace I'm learning Python but I actively look
                forward to continuing the course, whenever I get the chance. Avi
                is friendly and energetic, absolutely delightful as an
                instructor.”{" "}
              </span>{" "}
            </li>
          </ul>

          <p className="mt-3">
            So what are you waiting for?{" "}
            <strong>Jumpstart your programming journey</strong> and dive into
            the world of Python by{" "}
            <strong>enrolling in this course today!</strong>
          </p>

          <h1 className="mt-4 text-[1.4rem] font-bold text-black">
            Who this course is for:
          </h1>
          <ul className="ml-7 mt-3 list-disc">
            <li>
              <span className="ml-3 3xl:text-[0.9rem] xsm:text-[0.8rem]">
                Even if you haven't touched coding before, it won't matter. The
                easy step-to-step lectures will quickly guide you through
                everything you'll need to know about coding, mainly Python. This
                course is here for you to get accustomed and familiar with
                Python and its syntax. And above all, Python is one of the
                easiest coding languages to learn, and there's a lot you can do
                with it.
              </span>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <button
        className="mt-4 block 3xl:text-[0.9rem] text-[#5624d0]"
        type="button"
        onClick={() => setShowFadedDiv(!showFadedDiv)}
      >
        <div className="font-bold xsm:mx-3 xsm:mb-10">
          {!showFadedDiv ? "Show more" : "Show less"}{" "}
          {!showFadedDiv ? (
            <span className="relative -top-[3px]">&#8964;</span>
          ) : (
            <span className="relative top-[4px] font-bold">&#8963;</span>
          )}
        </div>
      </button>
    </>
  );
}
