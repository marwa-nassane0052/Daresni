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
      <div className='h-[400px] mt-8 w-[930px] bg-[#E4D9FF] overflow-y-auto rounded-lg shadow-lg'>
        <div className='m-6 flex flex-row items-center'>
        <img src={`/${prof.photodeprofil}`} alt="avatar"  style={{ width: 40, height: 40, borderRadius: '50%' }}/>
        <div className=' ml-6 flex flex-col'>
        <h1>{prof.nom} {prof.prénom}</h1>
        <h2 className='text-gray-500'>{prof.email}</h2>
        </div>
        </div>
        <div className='m-10 grid grid-cols-4 '>
          {prof.fichiersjoints.map((fichier, index) => (
            <div key={index}>
              <a href={`/${fichier}`} target="_blank" rel="noopener noreferrer">
                <div className="w-[90%] h-52 bg-white items-center justify-center rounded-t-lg border-[1px] border-black">
                <img src={`/${fichier.photo}`} style={{ height: "206px", borderRadius: "10px"}} />   
                </div>
                <button className=' h-24 w-[90%] h-7 border-b-[1px] border-l-[1px] border-r-[1px] rounded-b-lg border-black bg-[#6610F2]'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVR4nO3ZQWrDMBCF4UlO2YWda3TrkE0XIasECu1NcqSuSrv/g4niOEYuoSAzkt4HgiwU0DxLY2ybiYiIiIgsClgDbRhrqw2w4a612gDdKIDOaoMCQDsAHYGBeoDVBvUA1ANQDxioB1htUA9APQD1gIF6gJUI2AG/wB5YPXsE+rnAIfx3a7kCfkZFvo9DmAsgFN/Pvfm2XHG9isRCiAUQKb63t1xxLeg4KegzvBB9CCDMPU3mfmT/wpT5ELaTAMor/mZma3/N/H44KsUgvhNiyrny/wih3OKfCKH84v8IoZ7iJyG8hFFWwysSzr/mJl8fzr/mJl8fzt/gJF8fCgDtAHQEBuoB5oyaILoLdEveBs/Aq7NxXjIA75IE0JKPJtXDRgO8OR+Nx4c1ERERETFnLpAinSvXvUMZAAAAAElFTkSuQmCC" style={{width: 30, height: 30, marginLeft: "40%"} }></img>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}