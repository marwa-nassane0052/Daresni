'use client'
import Calender from "../Components/calender/calender"
export default function MonEmploie() {

    return (
        <div className='m-[3%] p-7'>
    <div className=' h-[400px] mt-16 w-[930px] bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'> 
            <div className='m-6'>
                <h1 className="text-xl mb-6">Mon Emploi du temps </h1>
                <Calender/>
            </div>
        </div>
        </div>
    )
}