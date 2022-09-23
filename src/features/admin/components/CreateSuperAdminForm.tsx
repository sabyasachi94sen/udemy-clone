import { Button } from "@/shared/components";
import {useForm} from "react-hook-form"

interface FormValues{
  name: string,
  email: string
}


interface CreateSuperAdminFormProps {
  handleAddBlur: () => void;
  handleAddSubmit: () => void;

  title: string;
}

export function CreateSuperAdminForm({
  handleAddBlur,
  handleAddSubmit,
 
  title,
}: CreateSuperAdminFormProps) {

  
const { register, handleSubmit } = useForm<FormValues>();

  return (
    <div className="relative top-[5vh] right-[10vw] left-[2vw] z-10 mx-auto -mt-[140vh] h-auto w-[40%] rounded-xl border-2 bg-[#FDFEFF]">
      <div className="mx-auto flex h-[10vh] lg:w-[85%] xl:w-full 2xl:w-[95%] items-center justify-around">
        <div
          className={`rounded-l-2 relative ${title!="Create an Account Manager Role"?`lg:right-[2%]`:`lg:right-0`} 2xl:right-[3%] flex h-[5vh] w-[50px] cursor-pointer items-center justify-center shadow-lg`}
          onClick={handleAddBlur}
        >
          <img alt="back-icon" src="/images/backArrow.png" />
        </div>
        <h1 className={`2xl:text-[2rem] lg:text-[1.6rem] ${title!="Create an Account Manager Role"?`mr-[8%]`: `mr-0`} font-bold text-[#3AB0FB]`}>{title}</h1>
      </div>
      <div className="mx-auto ml-10 h-[20vh] w-[90%] p-2 font-sans  font-bold leading-7 text-[#344054]">
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
