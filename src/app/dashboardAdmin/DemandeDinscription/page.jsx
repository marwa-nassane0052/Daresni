"use client"
import React from 'react';
import {  Space, Table } from 'antd';
import profData from '../../../../public/prof.json';
import attach from '../images/attach'
import Link from 'next/link';
const columns = [
    {
        title: 'Photo de profil',
        dataIndex: 'photodeprofil',
        key: 'photodeprofil',
        render: (photodeprofil) => (
          <img
          src={`/${photodeprofil}`}
            alt="Avatar"
            style={{ width: 40, height: 40, borderRadius: '50%' ,marginLeft: "20px"}}
          />
        ),
      },
  {
    title: 'Prénom',
    dataIndex: 'prénom',
    key: 'prénom',
  },
  {
    title: 'Numéro téléphone',
    dataIndex: 'numtel',
    key: 'numtel',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Fichiers joints',
    key: 'fichiersjoints',
    render: (record) => <Link href={{
      pathname: '/dashboardAdmin/FichierJoints',
      query: { profData: JSON.stringify(record) },
    }}
    
    style={{ textDecoration: 'underline', color: '#E4D9FF', display: 'flex', flexDirection: 'row' , alignItems: 'center'}}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nO2Z70/TQBjHH3+Awnp3gCLqCyVGjRoSBY2KigmKb9SYGEMiohK29trNICJRUEf4U018YzTG9q7beFnzlB2eY2Njuq6L/SaXLL329nzyPH2ee64AiRIlSpSoSS0PBSnO/EnOJOdUroaDSW4y/05u8JsBnSDbkBc4kyucyrUaY9VJ+SMQZ2VZ8fJvg71nNtsY5hB04cj1lU5a1H+q5tsOMwefD+YGg23hYWoQjiEnaj1vGnJCeabaOpEoQ70Bi4hFi8n30xDsqwZhkdKNeusoz+A7A+2AsIm/GBpAvVl1nbPC2G4gUGHI4f1U2hCl5pjbx6m/EBpMCnPTEHTjdYcVRjmV+fC6IW81ut46BN1lkA/QDk9YRLzAF3e7J0RDnlBagOCAek+gUyFQWbZxKnyeFTnEAYKT0ngza5vUn90E8SehUyGccvo1mVx5PvQ1BdFDuBqEaArCNuRNtUbGkOchzhDzhhzkRDzIMq+/FgTWncgh/kixdSCclH+EE7EcVndWGI0coladMFnhkoJAY3ZagxvysEX8pfBe6s+oyo/wv/dfxSsJxE5KPFEjnNYh2L89nLzOCSfsPRKIf+sJt3M8kalRJ/Rw4qR4rdE6gc2RSrF6ncBtDEQNYRNxRit2DUOY1JuJHCLLvP5qEGgIJ+JNI01RYxDuWEsPCmwqc5UQZcDNnoBKJ4BgTyMQesXWIPIthUDZTD4ODWAyo0PoG0GHFB5CnCEyKX+oHP+rswM/aOU8N+S5MFSIeNkIhMpOOoS+MWyZLOZPhSHFvKlq80vwpQeb/2q9Ae/9fkxB6Ck2cghU+dx1Ld1TPA71D8vyGIYOKV7HULOo/BQLCBRn4l34xxXvRqU4c++aKgVrwyLiUdshUCps1iHYC3X0iohDaKxNxH3sqXO9haNqTodIMzdaCJTaiuC2BJpU2yFQFpNP/qbaxgIClU75I2VDsjsVvFhDoNB4hNjtQZi+i23pQcFuZDN3eCuVGvJ2PfAM9e4pT+CuGOIkztwxlV4tItImEWdVWg3nIegqfy4L6w6C230/L0IclaHeaZOIt1qd+BhmNeK/3vy9VTsWeX/pBMRZHL/lkdI4Z9KsKH55TsS8Tb2ruqc6QhyCLmy2sFfpOOMTJfrP9Qsht5XeLSaXlQAAAABJRU5ErkJggg==" 
                                                                                            style={{ width: 15 , height: 15 }}></img> <p>voir les fichiers joints</p> </Link>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle" >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD30lEQVR4nM1ZXahVRRSeIkPB0IcMNLGHJMEKw58eypAMlOpyz3xrGkjBjiReQR9U0KLQrj74ExoUaPiQQSVKYvmiYEWiXqMo/zG0n5cE/6gkH673zBxzx2zWsX3UrfeevWZ7P9gv6+yzvm/NN2vtYW+lhJBYe78D3nVE5zxRcofrrAPWhP+o/gZHtLYXBTRdDlit+hs80dlUoDHP9OLeZxvOqP4Gz6sc6/7S0G8LSZS6xxMd6+u+j3U5oq7WCunsvNcDR+52Af7/wXCgsDue6PeQrEfrR1VJ6LF2dFoE8JtYUgd819uJJAXPk80BB+WSAjtD0hoAVRJqWhNvqy/FkjqiTWzzvNx7gP0O+KlovIHAxU2+SUnBASt5dd7p6zjta7wBT9TJW2uFkoIHFvDqbCyrEAd8yLtgvpJCDXiFk+4o0ZEv0r4kMgXlZ5Ia89ydZrm4I0Rd6T1aT1ZSqFk7hol/Kc0R4NfUEa0fU1JIKpWh7Mg/JfbI5fB7Yu2QgvJvStyTJq5WB8YuJKlWB/LC9QjJbyI+E5JfsXZU7EKuED3Cw+UPJY3w8OLkk2IX4rV+msf9j0oaDtgdkteBl2MXUte6jQvZJSS/ifjjNLkxr8cuxBHNYfc3C8nPJAfWMPlb0bcW8Ha0lxMeWMzJ3y/BkQ/YkUVC8puSz+TkW6M7QrSNt/EMJY26MS9wA34b3RFgLw+WqULyM8krlSfZkZMl9MjPvI2fUNJIgIfYkT9L6JG/+HgyTEkjvFVxRHVHdC3p6BhQVHBePJky5T4H/OuAq4FTxYAjupCuFDC8qOC8eHd7+wjeVueF5TeRn2CScUUF58VdpfIU9+JxYfkZEuCbdJoYM62o4Lx4nWg69+LXwvKbyLcwyaxojgCvsSOfCctvInmPSZYUFXyb+FLevuuF5WdIgDfZkXURHVnPv70hLD9DQjSbST4pKjg3DnzKx5OqioU60Uts+56IjnyVDhStXxSWnyHXegILOFpU8G3ix3ixxqtY6AZGco+ci+jI+RDvtvZhFQvpJ2iia+GocuPxQaKQJHsMiv3p2hFdSo8pbW0Ptio4L55YO4y31d+R5GcEAKcDWc3asa0Kzos7Yx7n59SpSPIzZMD+dKoQPd+q4Lx4HZjKPbgvkvwmAdvZ/ldbFZwXd8bMYEc+jyQ/Q0a0gUUsvCHedau39X2Je6KF7MiGSPIzZMByJlslndsBq3mRlqnY8EQdbP9H4rmBzekiaT1XxUbjmOKJDiXWDpLKG3J5osPRjyfXCdvbH3BEFxvNKn05oguJtYOjFxIQ3sg74IfwFBYsIDzRv/fGTGxF1H9xlQPtR4B18wAAAABJRU5ErkJggg==" style={{ width: '20px', height: '20px' , cursor: 'pointer' }}></img>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJ0lEQVR4nO1ZTWgTQRSeqqjYKoo/9Y/M21AVA3pSPLZ68KZi1ZtexKN6k+Kp1V68STH7XiKK0J7ai7VevEXQdt8ssa0gCiqeiiAK1VoV/GlksrMVJLibGjcb3A/mkrw3mS/vd+YJkSBBggUjPYobJFMvME0A4ywoKkW6GGeBaVwyXW4b71u/IBIW03GpcCbyw6vKSyr6IN1cZ9UkgHHObHIbXLu9dbK/WUSM1sn+ZulQh1Q47FmIfkhFR8O7k28JxgsiJgCFXWXLML7fXsyvC1Qox4SxhIgZJOOI52Z4KVhY4WSZiGu3i5hBsr3fuNh4sLCij1o4U8i2iJhhx8MbK41FZgKF/SwhYgoIe76ESESAxCIRo+1537KGt4jldRQvU0yZhiUCTn4fKPrs/T6eb0giW8doCyicMr9980+ysSWii5xU9Njro+h+5snQ0sYjUupeJBXdMQ3qs9QDXFOz80VJRDL1md7pXdqhbWF0YkfEUnjGtOVfdTMYVg/iRATYPigVfStf3hhPVaWraklkaGixZByUjKdFlZCOvROYpk1w91arD7UkknLwmAnQOVC5c2EPoW+foPCVcalBUSo1hdX9Z65lMZ3Vd2jzz14JkpeFW8uBadTsX9xUzK8IPExUMWK59smyr3s6WZ1OKwqWSk2SacBU7SldAMPsH2mwg4OHQeEXY5kBUehe8ruMVNTj3+wsx94ddu/Is5ZOn/7Li34g0G7kf2cpPOHFEn633NyhavatS/q1XHuvZHxr3KegW4+0yu0Bxk/eZ+GTQt3rSHosvwsYXxs3c6WiN/PxUyNAVAUxxdctqejF/FMn071KcbNQQJSVXarsRtPRPpUTV1eLGgKiblE2q2tr08V8StQYEKde628ACZGYAf47i0hToeP4iN3Gfav86VWgcHleqIUd6hAxQ4rxgOkcHgUK68GjafCGRcwgme4ai/QECuvpqTadYd4lYgLJdNE8VEzrGhVOyc11/ro04YjubusRM5lCtkW7k2+J8pmYjlS1iZ6e6sGjnyXqvpimqybhQ09P9eBRB5c/kotySS+DFnVMhHanBAkSiEr4CfLiEVvHltfxAAAAAElFTkSuQmCC" style={{ width: '20px', height: '20px' ,cursor: 'pointer'}}></img>
      </Space>
    ),
  },
];

const ListeDesGroupes = () => {
  return (
    <div className='m-[3%] p-7'>
      <div className='w-[930px]'>
        <h1 className='text-lg mb-6'>Mes Groupes</h1>
        <Table columns={columns} dataSource={profData} size="middle" />
      </div>
    </div>
  );
};

export default ListeDesGroupes;
