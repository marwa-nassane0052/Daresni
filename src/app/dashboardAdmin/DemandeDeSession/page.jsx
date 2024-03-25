"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import Link from 'next/link';
import Calender from '../Components/calender/calender';
import profData from '../../../../public/prof.json';

export default function GroupDetails() {

  const columns = [
    {
      title: 'Emitteur',
      dataIndex: 'nom',
      key: 'nom',
    },
    {
      title: 'Niveau',
      dataIndex: 'session',
      key: 'session',
      render: (_, record) => (
        <span>{record.session[0]["niveau détude"]}</span>
      ),
    },
    {
        title:'Module',
        dataIndex:'session',
        key:'module',
        render: (_, record) => (
          <span>{record.session[0]["nom de module"]}</span>
        ),
    },
    {
      title: 'status',
      dataIndex: 'session',
      key: 'état',
      render: (_, record) => {
        const valide = record.session[0].valide;
  let  color;
        if (valide === 'Accepté') {
          color = 'green';
        } else if (valide === "non-traité") {
          color = 'red';
        }
        return <Tag color={color}>{valide}</Tag>;
      },
    },
    {
      title: 'Detail de session',
      
      render: (_, record) => (
        <Link href={{
            pathname: '/dashboardAdmin/detailsSession',
            query: { profData: JSON.stringify(record) },
          }} ><p>voir details de session</p> </Link>
      ),
    },
  ];

  return (
    <div className='m-[3%] p-7 '>
      <div className='    h-[400px] mt-16 w-[930px] bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'> 
        <div className='m-6'>
          <div className='flex flex-row  '> 
            <h1 className='text-xl mb-2 w-42'>Demande de création de session :</h1>
          </div>
          <Table columns={columns} dataSource={profData} />
        </div>
      </div>
    </div>
  );
}
