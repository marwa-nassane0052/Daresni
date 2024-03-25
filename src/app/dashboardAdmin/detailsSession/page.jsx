"use client"
import { useSearchParams } from 'next/navigation';

export default function FichierJoints() {
  const searchParams = useSearchParams();
  const profData = searchParams.get('profData');
  const prof = JSON.parse(profData);

  return (
    <div className='m-[3%] p-7'>
      <div className="text-xl mt-3">
        <h1>Détail des Documents</h1>
      </div>
      <div className='h-[400px] mt-8 w-[930px] bg-white overflow-y-auto rounded-lg border-[1px] border-black'>
      <div className='w-full h-28 bg-[#E4D9FF] border-b-[1px] border-black'>
        <div className=' flex flex-col items-center '>
            
        <img src={`/${prof.photodeprofil}`} 
        alt="avatar"  
        style={{ width:150, height: 130, borderRadius: '50%' }} 
         className='mt-14 border-[1px] border-black'/>
        <div className='  flex flex-col items-center'>
        <h1 className='text-[#6610F2]' >{prof.nom} {prof.prénom}</h1>
        <h2 className='text-gray-500'>{prof.email}</h2>
        </div>
        </div>
        </div>
        <div className='mt-32  '>
          {prof.session && prof.session.length > 0 ? (
          prof.session.map((ses, index) => (
            <div key={index} className='grid grid-cols-4'  >
              <div className='flex flex-col items-center border-r-[1px] border-black '>
                    <h1 className=' text-lg'>Module</h1>
                    <p className='text-[#6610F2]'>{ses["nom de module"]}</p>
              </div>
              <div className='flex flex-col items-center border-r-[1px] border-black '>
                    <h1 className=' text-lg'>"Année"</h1>
                    <p className='text-[#6610F2]'>{ses["année détude"]}</p>
              </div>
              {ses["spécialité"] && (
                  <div className='flex flex-col items-center border-r-[1px] border-black '>
                    <h1 className=' text-lg'>Spécialité</h1>
                    <p className='text-[#6610F2]'>{ses["spécialité"]}</p>
                  </div>
                )}
              <div className='flex flex-col items-center  '>
                    <h1 className=' text-lg'>Tarifs</h1>
                    <p className='text-[#6610F2]'>{ses["Tarifs"]}</p>
              </div>
              <div className='flex flex-col items-center mt-2 border-r-[1px] border-black '>
                    <h1 className=' text-lg'>NB de séance</h1>
                    <p className='text-[#6610F2]'>{ses["nb seances"]}</p>
              </div>
              <div className='flex flex-col items-center mt-2 border-r-[1px] border-black'>
                    <h1 className=' text-lg'>Durée</h1>
                    <p className='text-[#6610F2]'>{ses["Durée"]}</p>
              </div>

              <div className='flex flex-col items-center mt-2 border-r-[1px] mt-2  border-black '>
                    <h1 className=' text-lg'>NB Max des etudiants</h1>
                    <p className='text-[#6610F2]'>{ses["NB max"]}</p>
              </div>
              <div className='flex flex-col items-center mt-2 '>
                    <h1 className=' text-lg'>Durée d'une séance</h1>
                    <p className='text-[#6610F2]'>{ses["Durée de séance"]}</p>
              </div>            </div>
          )) ) : (
            <p>No sessions found.</p>
          )}
        </div>

        <div className='flex flex-row justify-center gap-16 mt-3'>
          <button
            className='text-[#6610F2] border-[1px] border-[#6610F2] bg-[#E4D9FF] rounded-lg w-36'
            disabled={prof.session.valide === "Accepté"}
          >
            Accepter
          </button>
          <button
            className='text-[#6610F2] border-[1px] border-[#6610F2] bg-[#ffffff] rounded-lg w-36'
            disabled={prof.session.valide === "Accepté"}
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}