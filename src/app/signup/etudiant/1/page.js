"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { Button ,buttonVariants } from "@/Components/ui/button";
import {useForm} from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation";
import { Data } from "../data";
import { PhoneIcon } from "lucide-react";
import { UserIcon } from "lucide-react";
import { LockIcon } from "lucide-react";
import { UnlockIcon } from "lucide-react";
import { useState } from "react";


const schema = yup
  .object({
    name: yup.string().required("*"),
    fname: yup.string().required("*"),
    ph_num : yup.string().required("*"),
    email: yup.string().required("*"),
    password: yup.string().required("*"),
    cf_password:  yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
  })
  .required()




export default function SignUpPage_one (){

    const [nameClicked , setNameClicked] = useState(false);
    const [fnameClicked , setFnameClicked] = useState(false);
    const [ph_numClicked , setPh_numClicked] = useState(false);
    const [emailClicked , setEmailClicked] = useState(false);
    const [passClicked , setPassClicked] = useState(false);
    const [cf_passClicked , setCf_passClicked] = useState(false);

    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })


    const dataManager = Data()
    const previousData = dataManager.getData()
    const onSubmit = (data) => {
        dataManager.setData(data)
        router.push("/signup/etudiant/2")
    }
    return (
        <div class="container mx-auto flex justify-center   flex-col mt-20 font-nats  lg:max-w-3xl lg:mx-auto   md:max-w-2xl md:mx-auto  ">
            <div class="rounded-full size-12 bg-[#A3A9AF]"></div>
            <h1 class="text-4xl mt-[35px]" >Signup</h1>
            <p class="text-[13px] text-[#A3A9AF] mt-[23px]">Entrez vos détails ci-dessous pour créer votre compte et commencer</p>


          <form  onSubmit={handleSubmit(onSubmit)} >
            <div class=" flex justify-content-start grid lg:grid-cols-2 md:grid-cols-2    gap-x-16 gap-y-7 mt-[54px]  text-sm">
            <div className="grid w-full  items-center gap-2.5 " onFocus={() => setNameClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setNameClicked(false)}}} >
                <Label htmlFor="name" >Nom</Label>
                 <div className="flex">
                 <Input {...register("name")} type="text"   placeholder="nom" className={`pr-3 h-8 w-full pl-10 ${nameClicked ? 'slideRight' : 'slideLeft'}`} value={previousData.name}/>
                 <div className="text-red-600  mt-2 ml-2">{errors.name?.message}</div>

                 </div>
                

              </div>
              
              <div className="grid w-full  items-center gap-2.5" onFocus={() => setFnameClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setFnameClicked(false)}}} >
                <Label htmlFor="fname">Prénom</Label>
                <div className="flex">
                <Input type="text" {...register("fname")}  placeholder="prénom" className={`pr-3 h-8 pl-10 ${fnameClicked ? 'slideRight' : 'slideLeft'}`}  value={previousData.fname}/>
                <div className="text-red-600 ml-2">{errors.fname?.message}</div>
                </div>
              </div>



              <div className=" relative grid w-full  items-center gap-2.5 " onFocus={() => setPh_numClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setPh_numClicked(false)}}}  >
                <Label htmlFor="ph_num"> N° téléphone</Label>

                <PhoneIcon color="gray" className={`absolute  pointer-events-none ${errors.ph_num? 'ml-3 top-8':'ml-3 top-1/2'}    `}  size={18}/>
                <div className="flex">
                <Input type="text" {...register("ph_num")} placeholder="N° telephone" className={`pr-3 h-8 pl-10 ${ph_numClicked ? 'slideRight' : 'slideLeft'}`} value={previousData.ph_num} />
                <div className="text-red-600 ml-2">{errors.ph_num?.message}</div>
                </div>
                
              </div  >


              <div className=" relative  grid w-full  items-center gap-2.5" onFocus={() => setEmailClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setEmailClicked(false)}}} >
                <Label htmlFor="email"> Email</Label>
                <UserIcon color="gray" className={`absolute  pointer-events-none ${errors.email? 'ml-3 top-8':'ml-3 top-1/2'}    `} size={18}/>
                <div className="flex">
                  <Input type="email" {...register("email")} placeholder="email" className={`pr-3  h-8 pl-10 ${emailClicked ? 'slideRight' : 'slideLeft'}`} value={previousData.email} />
                  <div className="text-red-600 ml-2">{errors.email?.message}</div>
                </div>
                
              </div>


              <div className="relative grid w-full  items-center gap-2.5  " onFocus={() => setPassClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setPassClicked(false)}}} >
                <Label htmlFor="password">Mot de passe</Label>
                {showPassword ? <UnlockIcon color="gray" className={`absolute   ${errors.password? 'ml-3  top-8':'ml-3 top-8'}  cursor-pointer  `} size={18} onClick={togglePasswordVisibility} /> : <LockIcon color="gray" className={`absolute   cursor-pointer ${errors.password? 'ml-3 top-8':'ml-3 top-8'}    `} size={18} onClick={togglePasswordVisibility} />}
                <div className="flex">
                  <Input type={showPassword ? 'text' : 'password'} {...register("password")} placeholder="mot de passe"  className={`pr-3 h-8 pl-10 ${passClicked ? 'slideRight' : 'slideLeft'}`} />
                  <div className="text-red-600 ml-2">{errors.password?.message}</div>
                </div>
              </div>
            

              <div className=" relative grid w-full  items-center gap-2.5 "  onFocus={() => setCf_passClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setCf_passClicked(false)}}} >    
                <Label htmlFor="cf_password">Confirmer mot de passe</Label>
                <LockIcon color="gray" className={`absolute  pointer-events-none ${errors.cf_password? 'ml-3 top-6':'ml-3 top-7'}    `} size={18}/>
                <div className="flex">
                  <Input type="password" {...register("cf_password")} placeholder="Confirmez le mot de passe" className={`pr-3 h-8 pl-10 ${cf_passClicked ? 'slideRight' : 'slideLeft'}`}  />
                  <small className="text-red-600 ml-2">{errors.cf_password?.message}</small>
                </div>
              </div>

            </div>
           

            
            <div class=" flex justify-content-start grid grid-cols-2    gap-x-16 gap-y-7 mt-[54px]  text-sm">
              <div className="flex   ">
                   <a href="/about" className="bg-white w-full text-purple-added border border-purple-border-added  h-8 hover:text-white hover:bg-purple-added inline-block px-4 py-1 rounded-md text-center"> Annuler</a>  
                   <div className="w-2 "></div>
              </div>
              
              <div className="flex  ">
              <Button  className="h-8 hover:ring-1  hover:bg-purple-added w-full rounded-sm bg-purple-added">Continuer</Button>
              <div className="w-2 "></div>
              </div>              
            
            </div>  

            
              
              
             
          </form>
            <div className="ligne bg-[#A3A9AF] mt-12"> </div>
            <div class="text-center  mt-4 text-base lg:mb-0 md:mb-0 mb-4 ">Vous avez déjà un compte ?  <Link href={"/login"} class="text-[#6610F2]" > Login </Link></div>
            
            
        </div>
        

        
        
    );
}