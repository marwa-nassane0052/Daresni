import Head from 'next/head';
import '../../app/globals.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen" style={{ fontFamily: 'NATS' }}>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/nats" rel="stylesheet" />
      </Head>
      <div className="flex flex-row flex-1">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] flex flex-col">
          <Navbar />
          <main className="flex-1  fixed">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;