"use client"
import { Button , buttonVariants} from "@/Components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { Radio , Space } from "antd";
import { Data } from "../data";
import { useState } from "react";
import { RadioItem } from "@/Components/ui/radioItem";
import GoBack from "@/Components/ui/goBackButton";

const schema = yup.object({
  schoolLevel: yup.string().required("Please select a school level"),
}).required();



export default function SignUpPage_one() {

  const dataManager = Data()
  const previousData = dataManager.getData()
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {

    dataManager.setData(data);
    console.log(data);
    router.push("/signup/etudiant/3");
    
  };
  const [value , setValue] = useState(previousData.schoolLevel)

  const handleClick = (radioValue) => {
    register('schoolLevel' , { value: radioValue });

    console.log( radioValue);
    setValue(radioValue);
    
  };

  return (
    <div className="container mx-auto flex justify-center   flex-col mt-20 font-nats  lg:max-w-3xl lg:mx-auto   md:max-w-2xl md:mx-auto ">
      <div className="rounded-full size-12 bg-[#A3A9AF]"></div>
      <h1 className="text-4xl mt-[39px]">Dites-nous en plus sur vous</h1>
      <p className="text-[13px] text-[#A3A9AF] mt-[23px]">Quel est votre niveau scolaire ?</p>




      <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-1 gap-5 mt-[54px] text-md">
        <Radio.Group  className="grid lg:grid-cols-1 gap-3" >
                <RadioItem id={"id1"} level="hiegh-school" labelValue="Lycée"  onclick={()=>handleClick("hiegh-school")} value={value} />
                <RadioItem id={"id1"} level="middle-school" labelValue="Collège"  onclick={()=>handleClick("middle-school")} value={value}  />
        </Radio.Group>
        <small className="text-red-600 ml-2">{errors.schoolLevel?.message}</small>
        

        <div className="grid grid-cols-2 lg:gap-x-56 md:gap-x-48  gap-24  mt-[150px]   flex justify-content-start   gap-y-7 text-sm">
         <GoBack/>
          <div className="grid w-full max-w-sm items-center">
            <Button className=" h-8 hover:ring-1 hover:bg-purple-added mt-3 rounded-sm bg-purple-added "> Continuer </Button>
          </div>

        </div>
      </form>
    </div>
  );
}
