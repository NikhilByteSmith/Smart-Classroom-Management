import React from 'react'
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';

const ProfessorCurriculum = () => {

//   if(!localStorage.getItem("token")){
//     console.log("you are not logged in");
//     return (<></>)
// }
  return (
    <div className="flex w-screen h-screen">
      <ProfessorSidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='flex'>
          curriculm 
        </div>
      </div>
    </div>
  )
}

export default ProfessorCurriculum;
