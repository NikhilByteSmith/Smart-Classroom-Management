import React from 'react'
import ProfessorSidebar from '../Components/ProfessorSidebar'
import Topbar from '../Components/Topbar'
const ProfessorResults = () => {

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
          ProfessorResults
        </div>
      </div>
    </div>
  )
}

export default ProfessorResults
