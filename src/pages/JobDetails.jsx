import  {useParams} from "react-router-dom"
import useJobStore from "../store/jobStore"

export const JobDetails = ()=>{
    const {id} = useParams();

    const {getJobById} = useJobStore();

    const job = getJobById(id);

    return (
        <div>
            JobDetails: {id}
            <h1>{job.title}</h1>
        </div>
    )
}