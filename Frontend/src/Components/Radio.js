import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default function Radio() {
  const [radio, setRadio] = useState("Placements");

  // const toggleRadio = () => {
  //   if (radio === 'Placements') {
  //     console.log(radio);
  //   } else if (radio === 'Higher Studies') {
  //     console.log(radio);
  //   } else if (radio === 'Internship') {
  //     console.log(radio);
  //   }
  // }
  return (
    <>
      <div className='row'>
        <ul className="grid grid-cols-4 space-x-10 mt-16 ml-36">
          <li id="P" className="relative" onClick={() => { setRadio("Placements") }}>
            <input className="sr-only peer" type="radio" value="yes" name="answer" id="answer_yes" />
            <label className="flex p-3 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes">Placements</label>
            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
          </li>

          <li id="HS" className="relative" onClick={() => { setRadio("Higher Studies") }}>
            <input className="sr-only peer" type="radio" value="no" name="answer" id="answer_no" />
            <label className="flex p-3 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_no">Higher Studies</label>
            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
          </li>

          <li id="I" className="relative" onClick={() => { setRadio("Internship") }}>
            <input className="sr-only peer" type="radio" value="maybe" name="answer" id="answer_maybe" />
            <label className="flex p-3 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_maybe">Internship</label>
            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
          </li>
        </ul>
      </div>
      <div>
        {radio === 'Placements' &&
          <>
            <div className='grid grid-cols-6 space-x-10 mt-5 ml-36'>
              <Dropdown category="Company" />
              <Dropdown category="Role" />
              <Dropdown category="Education" />
              <Dropdown category="Batch" />
              <Dropdown category="Branch" />
            </div>
          </>
        }
        {radio === 'Higher Studies' &&
          <>
            <div className='grid grid-cols-6 space-x-10 mt-5 ml-36'>
              <Dropdown category="College" />
              <Dropdown category="Location" />
              <Dropdown category="Education" />
              <Dropdown category="Batch" />
              <Dropdown category="Branch" />
            </div>
          </>
        }
        {radio === 'Internship' &&
          <>
            <div className='grid grid-cols-6 space-x-10 mt-5 ml-36'>
              <Dropdown category="Company" />
              <Dropdown category="Role" />
              <Dropdown category="Education" />
              <Dropdown category="Batch" />
              <Dropdown category="Branch" />
            </div>

          </>
        }
      </div>
      {/* <div className='container'>
        <ul className="grid grid-cols-3 gap-x-5 m-10">
          <li className="relative">
            <input className="sr-only peer" type="radio" value="yes" name="answer" id="answer_yes" />
            <label className="flex p-3 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_yes">Placements</label>
            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
          </li>

          <li className="relative">
            <input className="sr-only peer" type="radio" value="no" name="answer" id="answer_no" />
            <label className="flex p-3 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_no">Higher Studies</label>
            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
          </li>

          <li className="relative">
            <input className="sr-only peer" type="radio" value="maybe" name="answer" id="answer_maybe" />
            <label className="flex p-3 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="answer_maybe">Internship</label>
            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3"></div>
          </li>
        </ul>
      </div> */}
    </>
  )
}
