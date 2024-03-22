"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function sessionNonValide() {
  const [currentUser, setCurrentUser] = useState(null);
  const [sessions, setSessions] = useState([]);

  const currentUserFirstName = "John"; // Replace with the actual first name of the current user

  useEffect(() => {
    // Fetch user data from JSON file
    fetch('/prof.json')
      .then(response => response.json())
      .then(data => {
        // Find the current user
        const user = data.find(user => user.prénom === currentUserFirstName);
        setCurrentUser(user);
      })
      .catch(error => console.error('Error fetching user data:', error));

    // Fetch sessions data from JSON file
    fetch('/sessions.json')
      .then(response => response.json())
      .then(data => {
        setSessions(data);
      })
      .catch(error => console.error('Error fetching session data:', error));
  }, []);

  return (
    <div className='m-[3%] p-7'>
      {currentUser && (
        <div>
            {/*salutation*/}
          <div >
            <h1 className='text-2xl'>Salut, {currentUser.prénom}!</h1>
            <p className='text-[#858C94]'>Voici vos sessions : </p>
          
          </div>
          {/*sessions*/}
            <div className=' h-[400px] mt-3 w-[930px] bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'>
            <div className='grid grid-cols-4 gap-6 ml-6  p-2'>
                {sessions.filter(session => session.valide === "false").map(filteredSession => (
                    <div key={filteredSession.id} className="bg-white mt-10 w-[100%] h-[90%] p-4 rounded-3xl shadow-lg">
                        <h2 className='text-xl'>MODULE :{filteredSession["nom de module"]}</h2>
                        <div className="grid grid-cols-2 gap-1 mt-2">
                        <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{filteredSession["niveau d'étude"]}</p>
                        <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{filteredSession["année d'étude"]}</p>
                        {filteredSession["spécialité"] && (
                            <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{filteredSession["spécialité"]}</p>
                        )}
                        <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{filteredSession["Durée"]}</p>
                        <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{filteredSession["NB max"]} etudiants</p>
                        <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF] '>{filteredSession["Durée de séance"]} pour une séance</p>
                        <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{filteredSession["nb seances"]}</p>
                        
                        </div>
                        

                    </div>
                ))}
                 
            </div >
            
            </div>
            

        </div>
      )}
    </div>
  );
}
