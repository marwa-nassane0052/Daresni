"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import {useForm} from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation";
import { Data } from "../etudiant/data";
import GoBack from "@/Components/ui/goBackButton";
import { useEffect, useState } from "react";
import { PhoneIcon } from "lucide-react";
import { UserIcon } from "lucide-react";
import { LockIcon } from "lucide-react";
import { UnlockIcon } from "lucide-react";
import { UploadIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import { XIcon } from "lucide-react";
import { PaperclipIcon } from "lucide-react";
import { useRef } from "react";


const schema = yup
  .object({
    name: yup.string().required("*"),
    fname: yup.string().required("*"),
    ph_num : yup.string().required("*"),
    email: yup.string().required("*").email("Email is invalid"),
    password: yup.string().required("*"),
    cf_password:  yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required()



  


export default function SignUpPage_one (){

    const [nameClicked , setNameClicked] = useState(false);
    const [fnameClicked , setFnameClicked] = useState(false);
    const [ph_numClicked , setPh_numClicked] = useState(false);
    const [emailClicked , setEmailClicked] = useState(false);
    const [passClicked , setPassClicked] = useState(false);
    const [cf_passClicked , setCf_passClicked] = useState(false);

    const [showPassword, setShowPassword] = useState(false)

    const [image, setImage] = useState();
    const [imageUrl , setImageUrl] = useState();

    const fileInputRef = useRef(null);
    const imageInputRef = useRef(null);	

    const remouve_image = (e)=>{
      e.preventDefault();
      const imageInput = imageInputRef.current
      if (imageInput) {
        imageInput.value = null; // Reset the value to null
      }

      URL.revokeObjectURL(imageUrl)
      setImageUrl(null);
      setImage(null);

    }

    const imageChange = (e) => {

      const imageInput = imageInputRef.current

      setImage(imageInput.files[0])

      if (imageUrl){  URL.revokeObjectURL(imageUrl)  }
      if (imageInput.files[0]){ const url = URL.createObjectURL (imageInput.files[0]) ; setImageUrl(url) }

      console.log(imageUrl)

    }
  

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
    
  
    
    const [files, setFiles] = useState(Array());
    const [filesUrl , setFilesUrl] = useState(Array());

    const fileChange = (e) => {
      const cv = fileInputRef.current;  
      console.log(cv.files);
      setFiles(Array.from(cv.files));
    
      if (cv.files) {
        const urls = Array.from(cv).map((file) => URL.createObjectURL(file));
        setFilesUrl(urls);
      }
    }
    

    const fileRemouve = (e, index) =>{
      e.preventDefault();

      const fileInput = fileInputRef.current;
      if (fileInput) {
        fileInput.value = null; // Reset the value to null
      }


      setFiles(files.filter((_, i) => i !== index));
      setFilesUrl(filesUrl.filter((_, i) => i !== index));
      
    }
    useEffect(()=>{console.log(files)},[files])

   

    const dataManager = Data()
    const previousData = dataManager.getData()



    const onSubmit =  (data) => {

      register("profile_picture" ,{value : {"image" : image , "url" : imageUrl}})
      if (files) {
        register("cv_files", {
          value: files.map((file, index) => ({
            info: file,
            url: filesUrl[index]
          }))
        });
      }      dataManager.setData(data )

      console.log(data)
      router.push("/login")

      
    }
   
    return (
        <div class=" container mx-auto flex justify-center   flex-col mt-10 font-nats  lg:max-w-3xl lg:mx-auto   md:max-w-2xl md:mx-auto  ">

            <div class="rounded-full size-12 bg-[#A3A9AF]"></div>
            <h1 class="text-4xl mt-[30px]" >Postulez pour devenir tuteur</h1>
            <p class="text-[13px] text-[#A3A9AF] mt-[20px]">Entrez vos détails ci-dessous pour créer votre compte et commencer</p>


            <form  onSubmit={handleSubmit(onSubmit)} >
            <div class=" flex justify-content-start grid lg:grid-cols-2 md:grid-cols-2    gap-x-16 gap-y-4 mt-[54px]  text-sm">
              <div className=" grid w-full max-w-sm items-center gap-2.5 "  onFocus={() => setNameClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setNameClicked(false)}}} >
                <Label htmlFor="name">Nom</Label>
                <div className="flex">
                 <Input {...register("name")} type="text"   placeholder=" nom" className={`pr-3 h-8 pl-10 ${nameClicked ? 'slideRight' : 'slideLeft'}`} value={previousData.name}/>
                 <div className="text-red-600  mt-2 ml-2">{errors.name?.message}</div>

                 </div>
                
              </div>
              
              <div className=" grid w-full max-w-sm items-center gap-2.5"  onFocus={() => setFnameClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setFnameClicked(false)}}}>
                <Label htmlFor="fname">Prénom</Label>
                <div className="flex">
                <Input type="text" {...register("fname")}  placeholder="prénom" className={`pr-3  h-8 pl-10 ${fnameClicked ? 'slideRight' : 'slideLeft'}`}  value={previousData.fname}/>
                <div className="text-red-600 ml-2">{errors.fname?.message}</div>
                </div>
              </div>


              <div className="relative grid w-full max-w-sm items-center gap-2.5" onFocus={() => setPh_numClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setPh_numClicked(false)}}}>
                <Label htmlFor="ph_num"> N° téléphone</Label>
                <PhoneIcon color="gray" className={`absolute  pointer-events-none ${errors.ph_num? 'ml-3 top-8':'ml-3 top-1/2'}    `}  size={18}/>
                <div className="flex">
                <Input type="text" {...register("ph_num")} placeholder="N°" className={`pr-3  h-8 pl-10 ${ph_numClicked ? 'slideRight' : 'slideLeft'}`} value={previousData.ph_num} />
                <div className="text-red-600 ml-2">{errors.ph_num?.message}</div>
                </div>
              </div>


              <div className="relative grid w-full max-w-sm items-center gap-2.5"  onFocus={() => setEmailClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setEmailClicked(false)}}} >
                <Label htmlFor="email">Email</Label>
                <UserIcon color="gray" className={`absolute  pointer-events-none ${errors.email? 'ml-3 top-8':'ml-3 top-1/2'}    `} size={18}/>
                <div className="flex">
                  <Input type="email" {...register("email")} placeholder="email" className={`pr-3  h-8 pl-10 ${emailClicked ? 'slideRight' : 'slideLeft'}`} value={previousData.email} />
                  <small className="text-red-600 ml-2">{errors.email?.message}</small>
                </div>
              </div>




            <div className=" relative grid  max-w-sm gap-2">
                <Label htmlFor="file_cv">
                    <p>CV </p>
                    <div className={`pr-4 pl-10  text-nats text-sm  text-gray-400 w-32 h-8 mt-3   border border-gray-300 bg-white  cursor-pointer flex items-center justify-center rounded-sm border border-input  px-3 py-2  ring-offset-background file:border-0 file:bg-transparent text-sm file:font-medium text-muted-foreground 	`}>télécharger</div>
                </Label>
                <UploadIcon color="gray" className={`absolute  pointer-events-none ${errors.ph_num? 'ml-3 top-4':'ml-3 top-9'}    `}  size={18}/>

                <input id="file_cv" type="file" hidden  ref={fileInputRef} multiple    onChange={(e)=>fileChange()}   />
              {files && (
                     <div>
                          {files.map((file, index) => (
                                    <div className="grid grid-cols-2 slideRight">
                                      <div className="flex">
                                         <PaperclipIcon size={24}/>
                                         <div key={index} className="  w-72 h-10 text-sm  ml-2 overflow-hidden whitespace-nowrap text-ellipsis"> {file.name} </div>
                                          
                                      </div>
                                       
                                        <div className="flex justify-end ">
                                             <button onClick={(e)=>fileRemouve(e,index)} ><Trash2Icon color="red" size={14}/></button>
                                        </div>

                                    </div>
     
                            ))}
                      </div>
              )}                    
                <small className="text-red-600 ml-2">{errors.files?.message}</small>
             </div>



             <div className="grid max-w-sm items-center gap-2">
  <Label htmlFor="pro_pic">
    <p>Photo de profil</p>
    <div className={`relative size-24 mt-3 mb-3 ${image ? 'slideRightPhoto bg-[#FAFAFF]':' border-2 border-dashed hover:opacity-65 border-gray-300 '}   bg-gray-100 text-gray-400 cursor-pointer`}>
      {!image && (
        <>
          <p className="absolute left-10 top-6">+</p>
          <p className="absolute left-2 top-12">télécharger</p>
        </>
      )}
       {imageUrl && image && (
        <div  className="relative  ">
           <img 
           className=" object-cover size-24 border-2 border-gray-300 hover:opacity-75 "
           src={imageUrl}
           alt={imageUrl.name}
           
         
         />
           <div class="absolute start-[86px]  bottom-[84px] hover:ring-1  hover:opacity-100 rounded-full size-[19px] bg-gray-400  " onClick={remouve_image}> 
           <XIcon size={19} color="white"/>
            </div>
            
         
        


        </div>
         
        
      )}

      <input
        type="file"
        id="pro_pic"
        hidden
        ref={imageInputRef}
        accept="image/*"
        onChange={imageChange}/>
    </div>
  </Label>
</div>


             






              <div className=" relative grid w-full max-w-sm items-center gap-2.5"  onFocus={() => setPassClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setPassClicked(false)}}}>
                <Label htmlFor="password">Mot de passe</Label>
                {showPassword ? <UnlockIcon color="gray" className={`absolute   ${errors.password? 'ml-3 top-8':'ml-3 top-1/2'}  cursor-pointer  `} size={18} onClick={togglePasswordVisibility} /> : <LockIcon color="gray" className={`absolute   cursor-pointer ${errors.ph_num? 'ml-3 top-8':'ml-3 top-1/2'}    `} size={18} onClick={togglePasswordVisibility} />}
                <div className="flex">
                  <Input type={showPassword ? 'text' : 'password'} {...register("password")} placeholder="password"  className={`pr-3  h-8 pl-10 ${passClicked ? 'slideRight' : 'slideLeft'}`} />
                  <div className="text-red-600 ml-2">{errors.password?.message}</div>
                </div>
              </div>

              <div className=" relative grid w-full  items-center gap-2.5 "  onFocus={() => setCf_passClicked(true)} onBlur={(e)=>{if(e.target.value === ''){setCf_passClicked(false)}}} >    
                <Label htmlFor="cf_password">Confirmer mot de passe</Label>
                <LockIcon color="gray" className={`absolute  pointer-events-none ${errors.cf_password? 'ml-3 top-6':'ml-3 top-7'}    `} size={18}/>
                <div className="flex">
                  <Input type="password" {...register("cf_password")} placeholder="confirmez mot de passe" className={`pr-3 h-8 pl-10 ${cf_passClicked ? 'slideRight' : 'slideLeft'}`}  />
                  <small className="text-red-600 ml-2">{errors.cf_password?.message}</small>
                </div>
              </div>





              </div>


              <div class=" flex justify-content-start grid grid-cols-2    gap-x-16  mt-[32px]  text-sm">
              <div className="flex   ">
                   <a href="/about" className="bg-white w-full text-[#9747FF] border border-purple-border-added  h-8 hover:text-white hover:bg-purple-added inline-block px-4 py-1 rounded-md text-center"> Annuler</a>  
                   <div className="w-2 "></div>
              </div>
              
              <div className="flex  ">
              <Button  className="h-8 hover:ring-1 hover:bg-purple-added w-full rounded-sm bg-purple-added">Continuer</Button>
              <div className="w-2 "></div>
              </div>              
            
            </div> 
              
             
            </form>
            <div className="ligne bg-[#A3A9AF] mt-8"> </div>
            <div class="text-center mt-4 text-base mb-4  ">Vous avez déjà un compte ?  <Link href={"/login"} class="text-[#6610F2]" > Login </Link></div>
            
            
        </div>
        

        
        
    );
}