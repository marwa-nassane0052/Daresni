'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [mesGroupesStyle, setMesGroupesStyle] = React.useState({ background: 'white' });
  const [emploiDuTempsStyle, setEmploiDuTempsStyle] = React.useState({ background: 'white' });
  const [profilStyle, setProfilStyle] = React.useState({ background: 'white' });
  const [messagerieStyle, setMessagerieStyle] = React.useState({ background: 'white' });

  const handleMesGroupesClick = () => {
    setMesGroupesStyle({ background: 'linear-gradient(#ffffff, #F5F2FF)' });
    setEmploiDuTempsStyle({ background: 'white' });
    setProfilStyle({ background: 'white' });
    setMessagerieStyle({ background: 'white' });
  };

  const handleEmploiDuTempsClick = () => {
    setMesGroupesStyle({ background: 'white' });
    setEmploiDuTempsStyle({ background: 'linear-gradient(#ffffff, #F5F2FF)' });
    setProfilStyle({ background: 'white' });
    setMessagerieStyle({ background: 'white' });
  };

  const handleProfilClick = () => {
    setMesGroupesStyle({ background: 'white' });
    setEmploiDuTempsStyle({ background: 'white' });
    setProfilStyle({ background: 'linear-gradient(#ffffff, #F5F2FF)' });
    setMessagerieStyle({ background: 'white' });
  };

  const handleMessagerieClick = () => {
    setMesGroupesStyle({ background: 'white' });
    setEmploiDuTempsStyle({ background: 'white' });
    setProfilStyle({ background: 'white' });
    setMessagerieStyle({ background: 'linear-gradient(#ffffff, #F5F2FF)' });
  };

  return (
    <div className=" h-full flex flex-col w-full bg-white text-black border-r shadow-lg" style={{ fontFamily: 'NATS' }}>
      {/* Sidebar content */}
      {/* Logo */}
      <div className="flex items-center justify-center pt-5">
        <div className="w-20 h-16 text-black text-lg flex items-center justify-center mb-4">
          LOGO
        </div>
      </div>

      {/* Dashboard */}
      <div className="w-full  h-14 text-md flex items-center justify-center mb-4" style={{ color: '#6610F2' }}>
        <div className="cursor-pointer rounded-2xl bg-[#EBEEF2] w-[90%] h-10 text-md flex items-center">
          <div className='mr-12 ml-8'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcElEQVR4nO2WMQrAMAwD/YPok/FLSuh3lamZ0qF0b4rBhcqg8cBgW5bZF6qCu4PD0eczcXhhi+JtDb5UwSOKt1X4VhRvasA1AmgJu85wJhsRk624sL14JlsUrzLlAZcRId2IuhqYGoFrCaE8wH/mgRNeCVM6SnSVDQAAAABJRU5ErkJggg==" style={{ width: 20, height: 20, marginLeft: 10 }} ></img>
           </div>
          Dashboard
        </div>
      </div>

      {/* Items */}
      <div className="flex-grow mt-3 text-md" style={{ color: 'black' }}>
        {/*mes groupes*/}
        <Link href="/dashboardEtudiant/mesGroupes">
          <div
            className="border-b-2 border-[#E4D9FF] transition duration-300 ease-in-out cursor-pointer"
            style={mesGroupesStyle}
            onClick={handleMesGroupesClick}
          >
            <div className="mt-[5%] ml-[15%] mb-[5%] flex items-center">
              <div className="mr-[20%]">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkUlEQVR4nO3VMQ6DMBBEUR8gkmlyxSlySArvRWhTmgskTQpAWKLD4/wnbUHHlyxNSgCAO2mqs6b1s7tcI7nRMeJ3yY0OP779fj3fD+V1acXedvnkxZiGlIGfVq5xqRiAN7HsnZHnIMYoIaUZwrID8CCWvTPyHMQYJaQ0Q1h2AB7EsndGnoMYo4SUZgjLDgD4R1/JBBLFkQ/qPQAAAABJRU5ErkJggg==" style={{ width: 20, height: 20, marginLeft: 0 }} />
              </div>
              <span>Mes Groupes</span>
            </div>
          </div>
        </Link>

        {/*emploi du temps*/}
        <Link href="/dashboardEtudiant/monEmploie">
          <div
            className=" border-[#E4D9FF] border-b-2 transition duration-300 ease-in-out cursor-pointer"
            style={emploiDuTempsStyle}
            onClick={handleEmploiDuTempsClick}
          >
            <div className="mt-[5%] ml-[15%] mb-[5%]  flex items-center">
              <div className="mr-[20%]">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVR4nGNgoCZIE/j0nyz5NP6PbWkCH3+CFBDGH3+m8X9sQTP5489kvg9CxLgApC5V4OMPkpyODjDUpxHldFSM30QCgKABaVA+IZr6LkgjkaafC4gw4CM4IWGoxAKwJyT+jy2kJOVU/o/NxFhGHwAAOLiy/G9DRwAAAAAASUVORK5CYII=" style={{ width: 20, height: 20, marginLeft: 0 }} />
              </div>
              <span >Mon emploi du temps </span>
            </div>
          </div>
        </Link>

        {/*profil*/}
        <div
          className=" border-[#E4D9FF] border-b-2 transition duration-300 ease-in-out cursor-pointer"
          style={profilStyle}
          onClick={handleProfilClick}
        >
          <div className="mt-[5%] ml-[15%] mb-[5%] flex items-center">
            <div className="mr-[20%]">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9UlEQVR4nO1ZTYwUVRB+BEmIu9NVvcuKYAwkoPGAf4uKBokn9CiJ2RsR2elXvSwx8abRqNw0gahwgRg1RuNFDB48qRwIAgkBRfnTqICBIBh1pqtmFggCY6r7zbIHdqd7YaYb3S95yctMfd1f96tXr6ramCn8x0BQ7SeQdyzwIQvCyeBDFuXtIag+aIqKVVBFi/IBIV8hlMa1R/zf++RXwBQJ5a7abEI+oCIt8DlCeSv0okee7/nL06FzXQECPh/bIH831FW7zRQBZBozCGS3E3+EvGjBeLZlL1pIwEed7a7XTeMWkzcsymvORY5Tt8xqZa82FuWE47zcGZXjifErQCBRLMaXx9PyApRliStJRV3M5AXrSeje5JdZuYT8tXIDENsedelEfJ6I4OeyckOQsotMn5m8YFGOqQjdnFm5QYnvdqv3q8kLBFKPRcw5fWtW7srZZ7piLkjd5P0AKiYrd7jvj273AGLyws3vQsjbkrfIqzNzQQJ3Km9tj7p0IsjF86+yci3ydudCgckLeggRSjUOpSjL0vIsyhPOff4e7P2z1F6VrcW84lbhxOpu6WtlrzYE8ps7vV8yeUMTMk3M3F44Gpb4rgk3LvCPzvabAdOYbooATY0J5Vsn7LwWNFTiJXGu5Fcg6OFHCWSjRb7gXGd/mtXq+H6wyO9NVNBY5MuE/G7ufj8RAqg/4IqXg82SUudxkYP1+yckT+H/igHTmB5AtJiAX9D0WGteC3ySQEZ06Fx/0/9iG6j2FyICDfaOzCWQFwn41PidiHE7FGct8puDWJnXceHDffXbCeQjQr50NcLIzxqFQuRn9Q2v8c/dqWm2jngO1X79L4lU8suYyPQPgXzYoS5FYxphbW0zfdC4bkE+Jp8fy3ql0JelBPJJ82zQ+ph8WaP3aIv0VaYxU2846gIgX4RQnX+91w17Ru4g5E/HrMjWyRRIrX0dZX/zTYUoT7chs10Rr0Jyj73qpjcu4wT+oVl8UK/cY9qEshcttCg/uZTksLYrr7vrdjVv54NlL+oxbcbaEveq+Ga7RjVM+mJ6/DvxpzWSmA5hECvzCPh39xDrJ3UR8qKHkjDJF3VuOgzrRQ9riNWRuS2vp+SY9PgNkxMIZb3b1PsyndwEtYHRhu2NDmlZe0eQVG8W5JnURALeGZM8CU3OsCjDzhN2pCKUsXafO6gibT6ZnDGsDbDRDnjt3pYEQtnglmyTKQgsyCbn0hvSGO9R49CLlpuCIPSi5c4rdqd+APKiJ01BEHjRU83PUi2NLfA6l68fGPJri0zOGPJriyzw986FXk352Sj5EFekYYGPpP4cFecjyFu0aiqA8DMWeHMn8rApTMHchPgXlOd5uPrSEN4AAAAASUVORK5CYII=" style={{ width: 20, height: 20, marginLeft: 0 }} />
            </div>
            <span >Mon profil</span>
          </div>
        </div>

        {/* Messagerie et forum  */}
        <div
          className="border-b-2 border-[#E4D9FF] transition duration-300 ease-in-out cursor-pointer"
          style={messagerieStyle}
          onClick={handleMessagerieClick}
        >
          <div className=" mt-[5%] ml-[15%] mb-[5%]   flex items-center">
            <div className='mr-[20%]'>
                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADH0lEQVR4nO1ZS2sTURS+LVpfJedOa1Fr3ejKhYgILnwgouhCt90pxZp7YgpdWFFXGkGrLty76Maf4AM3vrG4EBUERZAWpUorQrFzTpoKtvbKnZnEmKZtMp2ZNCUf3EUg853z3Xted0aIGmqowYGSvB+B7yvJP1GyDnMZGwr4XlzyPhEEEPgCSpoO2/GZi6YR6NyCnI/H7COGSEmaVEBXkmBvFkLXidCg64wNBdRrbDq2IX3INx1KeuLtyEURMZTkS95JPPJPApw2JJ3NmVYRMTqbM62OAGD2TZKNx0A9i9I+LnUBCNS/4GoD1F/tAl5UTEDYwJoAucRPACNKYixt9PiNQB8V8Pl2oRsWVRJj+XPU0w6hV1ZVEuOG4dVo0VEE+pYbf6pJQBYYsw97zw1WpYB2oRu8MJoKNgfmSNYgBfz3XMACZk3WigkIG1gTAMxmFxJNmY0iYsSbMm1u6LHt++SUpMe5mhoxUHLK2FaSH/rPAaemupd6BLoWxaUeY/YWBLqevdQjpA8uKHfMq42ir1XmKYvGsAL66nccUJL+INDZQJIfLd6LwHeV5NF8I7MT2N3uDvpxnEcV0B1l0W4/zhcVUOof3C5IfV4nNKF3IyV0vYgY6EcANvJaJemZF16/lKQTUTgbiIDTMLYjF+/AQ+b3jI7tY5SIRABCuh2BM57zL7taxteXTVgpAQh09V+For7cTahcwgoIGMgrd5Om6sxF6JREyTol9LIwHM4HCr08W4bFbDjVxFsV8AM3ttMH5iUFHjKkgb3zn+9bhluOv4igYDqrd2IDCYv3hFFaU0LXO/1K8qAjAKg3MPKulh+NSvLrXNgBTThfYkpYKPmTGWmK8XbAmESgD+5XHZrIa4avjq/7vkYECUPonATQSPkdmqYQqKeQMw72zoLxZsTs/Jk2vUqECXMiSbCtUpYCupyrdMC3u4VeUShAAb0LfMeDRFzSMQVM3k6/TVoTmwpO4I1Y7EArvQ0lf/ZCZTgRs3dVlQCDk43cgkDPs/MWSr5ZVQKyjUoB3SoYwcu+tVUcCIze3eF9Qo5vr7Q/NYgi+AurCuFHqrRltwAAAABJRU5ErkJggg=="style={{width: 20, height: 20,marginLeft: 0 }}></img> 
                </div>
            <span className=" boder-b-2 ">Messagerie & Forum</span>
          </div>
        </div>
      </div>

      {/*button decconecter*/}
      {/*button decconecter*/}
  <div className='flex justify-center hover:bg-[#E4D9FF] items-center border-2 bg-[#eee9f7] border-[#E4D9FF]   ml-[25%] w-32 h-10 rounded-xl mt-auto mb-4'>
    <button className="flex items-center">
      Deconnecter
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVR4nO3aO04DMRAGYENBBzMbWi6COAcnwDMUHICSNLxuwgloEAegWKCgowVKxFiiXuTAFkAS2YlCZox/yaUlf5qsd+2M23XdGqOcM8gLY+hUDJBnBjmNa3OpIZSzpS98MugkGTLSx0mNbDsl2W/CTl+Z5Em93ikL566rQhYcrhVRFq4VURaGcFjErhVDIENXAiQrFbLAEMoFQ7jk5hVMV4QxtHFNhOEmGaMR4gfvW4zh8Wtt7d7G28AkZCaMVshPDKHcTsVohmRhtEPGYQ7WZdNZhCRhrEB+bwBy9w1jCTIVYw0yETMfpFshkPulXxthaOeCHLluNT545iEF/bQUbcNsCOKnvUusQHwJL0Sf8r2lHeJTP+c1Q3zOmUQrxJdwsPKlHHUZ5KGIywdGuWaUK/PXQTOlQv4gVMIlNoEMs9alFcL1Hytl4VoRZeH/WxH4bKqJjSxOWVMNgTwlT4p9UQquc8YOAjlOhowazyKmb3dSMGIlIiKn8ewDjb4dZoEcyKcAAAAASUVORK5CYII=" style={{ width: 20, height: 20, marginLeft: 10 }} />
    </button>
  </div>
</div>

   
  );
}
