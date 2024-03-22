"use client";
import { useState } from "react";
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export default function AddGroupe() {
  const [formData, setFormData] = useState({
    groupeName: "",
    dateFinInscription: "",
    debutdescours: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString, name) => {
    const formattedDateString = dayjs(dateString, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
    setFormData({ ...formData, [name]: formattedDateString });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log the form data to the console
  };

  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });

  const disabledRangeTime = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  };

  return (
    <div className=" w-screen h-screen bg-[#ece8f8] flex flex-col justify-center ">
      <div className=' w-[60%] h-[90%]  relative left-[10%] top-6 bg-[#ffffff]  overflow-y-auto rounded-lg shadow-lg '>
        <div className=" mt-8 ml-16 flex flex-row  ">
          <h1 className=" text-xl mt-4 "> Ajouter un groupe </h1>
          <div className="absolute left-[70%]  ">
            <button className="mr-2 border-[#6610F2] border-2 p-2 text-sm text-[#6610F2] rounded-xl " >Annuler</button>
            <button type="submit" onClick={handleSubmit} className="ml-2 border-[#6610F2] border-2 p-2 text-sm text-white rounded-xl bg-[#6610F2] " >Sauvegarder</button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center text-sm  ">
          <hr className="border-[#E4D9FF]  border-1  mt-10 w-[90%] items-center " />
          <form>
            <div className=" mt-4 flex flex-col  ">
              <div className="flex flex-col ">
                <label htmlFor="groupeName"> Nom de groupe<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="groupeName"
                  value={formData.groupeName}
                  onChange={handleChange}
                  placeholder="Nom de groupe"
                  className="text-sm w-[350px] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 "
                  required
                  style={{ fontFamily: 'NATS' }}
                />
              </div>

              <div className="flex flex-col mt-5">
                <label htmlFor="dateFinInscription">Date de fin d'inscription<span className="text-red-500">*</span></label>
                <DatePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  disabledDate={disabledDate}
                  disabledTime={disabledDateTime}
                  showTime={{
                    defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                  }}
                  name="dateFinInscription"
                  value={formData.dateFinInscription ? dayjs(formData.dateFinInscription) : null}
                  onChange={(date, dateString) => handleDateChange(date, dateString, "dateFinInscription")}
                  placeholder="Date de fin d'inscription"
                  className="font-semibold  w-[350px] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 "
                  required
                  style={{ fontFamily: 'NATS' }}
                />
              </div>

              <div className="flex flex-col mt-5">
                <label htmlFor="debutdescours">Date début des cours<span className="text-red-500">*</span></label>
                <DatePicker
                  name="debutdescours"
                  format="YYYY-MM-DD HH:mm:ss"
                  disabledDate={disabledDate}
                  disabledTime={disabledDateTime}
                  showTime={{
                    defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                  }}
                  value={formData.debutdescours ? dayjs(formData.debutdescours) : null}
                  onChange={(date, dateString) => handleDateChange(date, dateString, "debutdescours")}
                  placeholder="Date début des cours"
                  className="font-semibold w-[350px] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 "
                  required
                  style={{ fontFamily: 'NATS' }}
                />
              </div>
              <div className="flex flex-col mt-5">
                <button type="submit" className="ml-14 w-[250px] border-[#6610F2] border-2 p-3 text-white rounded-xl bg-[#6610F2] " >Génerer un lien de cours</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}