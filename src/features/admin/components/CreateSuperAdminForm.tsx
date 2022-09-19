import { Button } from "@/shared/components";
import {useForm} from "react-hook-form"

interface FormValues{
  name: string,
  email: string
}


interface CreateSuperAdminFormProps {
  handleAddBlur: () => void;
  handleAddSubmit: () => void;
  handleOnChange: () => void;
  title: string;
}

export function CreateSuperAdminForm({
  handleAddBlur,
  handleAddSubmit,
  handleOnChange,
  title,
}: CreateSuperAdminFormProps) {

  
const { register, handleSubmit } = useForm<FormValues>();

  return (
    <div className="relative top-[5vh] right-[10vw] left-[2vw] z-10 mx-auto -mt-[140vh] h-auto w-[40%] rounded-xl border-2 bg-[#FDFEFF]">
      <div className="mx-auto flex h-[10vh] w-[90%] items-center justify-around">
        <div
          className="rounded-l-2 flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg"
          onClick={handleAddBlur}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className="ml-3 text-3xl font-bold text-[#3AB0FB]">{title}</h1>
      </div>
      <div className="mx-auto ml-10 h-[20vh] w-[90%] p-2 font-sans text-[1rem] font-bold leading-7 text-[#344054]">
        <div className="mt-2 flex">
          <span>Name</span>
          <input
            required
            className="relative ml-10 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
            name="name"
            type="text"
            {...register("name")}
           
          />
          <br />
        </div>

        <div className="mt-8 flex">
          <span>Email</span>
          <input
            required
            className="relative ml-11 h-[5vh] w-[85%] rounded-md bg-[#EEEE]"
            name="email"
            type="email"
            {...register("email")}

          />
          <br />
        </div>
      </div>
      <div className="mx-auto mt-2 mb-10 w-28">
        <Button className="bg-[#3AB0FB h-12 w-28" onClick={handleSubmit(handleAddSubmit)}>
          Save
        </Button>
      </div>
    </div>
  );
}
