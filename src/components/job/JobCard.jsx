import { useState } from "react"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom";

function JobCard({job, onApply}){

  const [isExpanded, setExpanded] = useState(false);
    return(
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 m-10 w-150 flex justify-between gap-1.5">
        <img className="border-1 h-15" src="vite.svg" alt="" />
        <div className='w-130'>
          <div className='flex justify-between'>
            <h1 className="text-2xl m-1">{job.title}</h1>
            <h2 className="bg-amber-100 px-4 py-2 rounded-xl text-sm m-1">₹ {job.salary}</h2>
          </div>
            <h2 className="text-amber-600 m-1">{job.company}</h2>
            <h2 className="m-1">{job.location}</h2>
            <p className="text-gray-500  my-2 mx-1 font-normal">
              {isExpanded ? job.description : `${job.description.substring(0, 100)}...`}
              <button 
                className=" text-amber-600" 
                onClick={()=>{setExpanded(!isExpanded)}}>
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            </p>
          <span className="float-right m-1">
            <Button onClickHandler={()=>{onApply(job.id)}}>Apply Now</Button>
          </span>
        </div>
      </div>
    )
}

export default JobCard