import { useEffect, useState } from 'react'
import JobCard from '../components/job/JobCard'
import '../index.css'
import useJobStore from '../store/jobStore'
import { useNavigate } from 'react-router-dom'
import Header from '../components/job/Header'

export const Jobs = () =>{
    const {jobs, loading, fetchJobs} = useJobStore();
    const[searchTerm, setSearchTerm] = useState("");
    const[filteredJobs, setFilteredJobs] = useState([]);

    const navigate=useNavigate();

    useEffect(  ()=>{
        fetchJobs();
    }, [])

    useEffect( ()=>{
        const filtered = jobs.filter((job)=>{
            return job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredJobs(filtered);
    }, [searchTerm, jobs] )


    if(loading){
        return (<div className="text-center p-8 text-[32px] m-20">Step Into Success—We’ll Show You the Way...</div>)
    }

    return(
        <div>
            <Header/>
            <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 flex-col justify-center p-10 text-center">
                <h1 className="text-white m-5 text-2xl font-bold ">Your Dream Job is Just a Click Away!</h1>
                <input 
                    type="text" 
                    placeholder="Search By Role or Company"
                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-amber-50 w-105 m-5"
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
            
            </div>
                <div className="m=10 p-5 gap-6 justify-items-center">
                    {
                        filteredJobs.map((job, index)=>{
                            return <JobCard
                                    key={index}
                                    job={job}
                                    onApply={(jobId)=>{
                                        navigate(`/jobs/${jobId}`)
                                    }}
                                    
                                />
        
                        })
                    }
                

            </div>
        </div>
    )
}