import { useForm } from "react-hook-form";


interface ActionMapStepFormProps {
  handleBackgroundBlur: () => void;
  handleActionMapStepCrud: () => void;
  stepData:object;

  header: string;
}

interface formValues {
  action: string;
  deadline_days: string;
}

export function ActionMapStepForm({
  handleBackgroundBlur,
  handleActionMapStepCrud,
  stepData,
  
  header,
}: ActionMapStepFormProps) {
  const { handleSubmit, register } = useForm<formValues>();

  return (
    <div className="relative z-30 h-[70vh] w-[45%] rounded-xl border-2 bg-white pb-20">
      <div className="ml-3 flex h-[10vh] w-[70%] items-center justify-around">
        <div
          className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
          onClick={handleBackgroundBlur}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="ml-3 text-3xl font-bold text-[#3AB0FB]">{header}</h1>
      </div>
      <h1 className="mt-4 mr-48 text-center text-3xl font-bold text-[#6F6F6F]">
        Math Exam
      </h1>
      <h1 className="m-6 text-center text-3xl font-bold text-[#6F6F6F]">
        Before registration open{" "}
      </h1>
      <div className="mx-auto w-[70%]">
        <div className="mt-16 flex items-center">
          <span className="text-lg font-bold text-[#344054]">Action</span>
          <input
            className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
            defaultValue={header==="Edit Action Map Step"?stepData?.action: null}
            type="text"
            {...register("action")}
          />
          <br />
        </div>
        <div className="mt-14 flex items-center">
          <span className="text-lg font-bold text-[#344054]">
            Enter number of days
          </span>
          <input
            className="relative ml-10 h-[6vh] w-[30%] rounded-md bg-[#EEEE]"
            defaultValue={header==="Edit Action Map Step"?stepData?.deadline_days: null}
            type="number"
            {...register("deadline_days")}
          />
          <br />
        </div>
      </div>
      <div className="mx-auto mt-12 w-28">
        <button className="bg-[#3AB0FB] h-12 w-28 mx-auto rounded-lg text-white hover:bg-blue-500"
          type="button"
          onClick={handleSubmit(handleActionMapStepCrud)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
