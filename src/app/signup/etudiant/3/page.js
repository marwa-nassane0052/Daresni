"use client"
import { Label } from "@/components/ui/label";
import Link from "next/link";
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
  schoolYear: yup.string().required("Please select a school year"),
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
    
    const post = async ()=> {
      const res = await fetch('/api/users' , {
        method: 'POST',
        body: dataArray.getData() ,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      })
      const datas = await res.json()
      console.log(datas)

    } 
    router.push("/login");
  };

  const [value , setValue] = useState(previousData.schoolYear)


  const handleClick = (radioValue) => {
    register('schoolYear' , { value: radioValue });    
    setValue(radioValue);
  };

  return (
    <div className="container my-auto mx-auto flex justify-center   flex-col mt-20 font-nats  lg:max-w-3xl lg:mx-auto   md:max-w-2xl md:mx-auto">

      <div className="rounded-full size-12 bg-[#A3A9AF]"></div>
      <h1 className="text-4xl mt-[39px]"> Dites-nous en plus sur vous</h1>
      <p className="text-[13px] text-[#A3A9AF] mt-[23px]">What is your year?</p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-1 gap-5 mt-[54px] text-sm">
        <Radio.Group className="grid lg:grid-cols-1 gap-3"  >
            <Space direction="vertical">
                <RadioItem  level="first-year" labelValue="Première année" onclick={()=>handleClick("first-year")} value={value} />
                <RadioItem  level="second-year" labelValue="Deuxième année" onclick={()=>handleClick("second-year")} value={value} />
                <RadioItem  level="third-year" labelValue="Troisième année" onclick={()=>handleClick("third-year")} value={value} />
                { previousData.schoolLevel != "hiegh-school" && (<RadioItem  level="fourth-year" labelValue="Quatrième année" onclick={()=>handleClick("fourth-year")} value={value}  />)}
            </Space> 
        </Radio.Group>

        <small className="text-red-600 ml-2">{errors.schoolYear?.message}</small>
        
        <div className={`grid grid-cols-2 lg:gap-x-56 md:gap-x-48  gap-24  ${previousData.schoolLevel==='middle-school'? ' mt-[42px]':'mt-[98px]'} flex justify-content-start   gap-y-7 text-sm`}>
         <GoBack/>
          <div className="grid w-full max-w-sm items-center mt-3">
            <Button className="hover:ring-1 hover:bg-purple-added h-8 rounded-sm bg-purple-added"> Continuer </Button>
          </div>

        </div>
      </form>
    </div>
  );
}
