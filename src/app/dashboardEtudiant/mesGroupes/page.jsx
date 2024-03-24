"use client"
import React from 'react';
import { Table } from 'antd';
import groupesData from '../../../../public/groupes.json';

const columns = [
  {
    title: 'Nom',
    dataIndex: 'nom',
    key: 'nom',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Module',
    dataIndex: 'module',
    key: 'module',
  },
  {
    title: 'Tarifs',
    dataIndex: 'Tarifs',
    key: 'Tarifs',
  },
  {
    title: 'Joindre le cours',
    key: 'joindreLeCoursLink',
    render: () => <a href="#" style={{ textDecoration: 'underline' }}>Joindre le cours</a>,
  },
  {
    title: 'Voir mes documents',
    key: 'voirMesDocumentsLink',
    render: () => <a href="/dashboardEtudiant/mesDocuments" style={{ textDecoration: 'underline' }}>Voir mes documents</a>,
  },
];

const ListeDesGroupes = () => {
  return (
    <div className='m-[3%] p-7'>
      <div className=' h-[400px] mt-16 w-[930px] bg-[#E4D9FF] overflow-y-auto rounded-lg shadow-lg'>
        <div className='m-4'>
          <h1 className='text-lg mb-6'>Mes Groupes</h1>
          <Table columns={columns} dataSource={groupesData} size="middle" />
        </div>
      </div>
    </div>
  );
};

export default ListeDesGroupes;