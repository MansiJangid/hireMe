import {create} from 'zustand'

const useJobStore = create((set, get) => ({
    jobs: [],
    loading: false,
    error: null,

    fetchJobs: ()=>{
        set({loading: true})

        setTimeout(() => {
            set({
                loading: false,
                jobs: [{
                    id: '1',
                    title: "Frontend Developer",
                    company: "Tech Corp India",
                    location: "Bangalore, Karnataka",
                    salary: "10-15 LPA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non dui volutpat, consequat odio congue, mollis orci. In condimentum, tortor vitae commodo luctus, mi orci condimentum massa, id rhoncus neque nulla id nibh. Praesent et ultricies augue. In eu volutpat justo, eget blandit eros. Curabitur arcu massa, fermentum quis ullamcorper ut, euismod a tellus. Nam malesuada mi diam, iaculis malesuada nibh ultrices eget. Vestibulum tempus lacus in nisl gravida rutrum. Aliquam sit amet est purus. Nullam sit amet sodales eros. Suspendisse potenti. Pellentesque vel rutrum erat, at pharetra sem. Vestibulum ut euismod purus. Vivamus finibus mauris eget elit imperdiet, a vestibulum ligula placerat. Nullam pharetra id nibh nec tincidunt. Proin quam leo, tempus id sem non, tempus placerat metus. Donec gravida turpis vel dui dapibus, eu semper nibh molestie. Nullam sit amet felis suscipit, interdum sem a, dapibus arcu. Curabitur ac volutpat libero, id condimentum eros. Mauris vel varius tortor. Donec viverra leo ut libero convallis ultricies. Donec iaculis euismod nisi. Donec accumsan vitae velit non pellentesque. Fusce vestibulum risus et viverra facilisis. Nunc molestie consequat erat non viverra. Fusce finibus quam dolor, id maximus quam euismod eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    skills: ["HTML", "CSS", "React", "Javascript", "Tailwind CSS"],
                    createdAt: new Date("2025-06-21").toLocaleDateString()
                },
                {
                    id: '2',
                    title: "Full Stack Developer",
                    company: "Brain Mentors Pvt Ltd",
                    location: "Ghaziabad, UP",
                    salary: "12-16 LPA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non dui volutpat, consequat odio congue, mollis orci. In condimentum, tortor vitae commodo luctus, mi orci condimentum massa, id rhoncus neque nulla id nibh. Praesent et ultricies augue. In eu volutpat justo, eget blandit eros. Curabitur arcu massa, fermentum quis ullamcorper ut, euismod a tellus. Nam malesuada mi diam, iaculis malesuada nibh ultrices eget. Vestibulum tempus lacus in nisl gravida rutrum. Aliquam sit amet est purus. Nullam sit amet sodales eros. Suspendisse potenti. Pellentesque vel rutrum erat, at pharetra sem. Vestibulum ut euismod purus. Vivamus finibus mauris eget elit imperdiet, a vestibulum ligula placerat. Nullam pharetra id nibh nec tincidunt. Proin quam leo, tempus id sem non, tempus placerat metus. Donec gravida turpis vel dui dapibus, eu semper nibh molestie. Nullam sit amet felis suscipit, interdum sem a, dapibus arcu. Curabitur ac volutpat libero, id condimentum eros. Mauris vel varius tortor. Donec viverra leo ut libero convallis ultricies. Donec iaculis euismod nisi. Donec accumsan vitae velit non pellentesque. Fusce vestibulum risus et viverra facilisis. Nunc molestie consequat erat non viverra. Fusce finibus quam dolor, id maximus quam euismod eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    skills: ["Node.js", "React", "Javascript", "MongoDB", "AWS"],
                    createdAt: new Date("2025-06-22").toLocaleDateString()
                },
                {
                    id: '3',
                    title: "Data Analysit",
                    company: "Abc Corp.",
                    location: "Earth",
                    salary: "50K",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non dui volutpat, consequat odio congue, mollis orci. In condimentum, tortor vitae commodo luctus, mi orci condimentum massa, id rhoncus neque nulla id nibh. Praesent et ultricies augue. In eu volutpat justo, eget blandit eros. Curabitur arcu massa, fermentum quis ullamcorper ut, euismod a tellus. Nam malesuada mi diam, iaculis malesuada nibh ultrices eget. Vestibulum tempus lacus in nisl gravida rutrum. Aliquam sit amet est purus. Nullam sit amet sodales eros. Suspendisse potenti. Pellentesque vel rutrum erat, at pharetra sem. Vestibulum ut euismod purus. Vivamus finibus mauris eget elit imperdiet, a vestibulum ligula placerat. Nullam pharetra id nibh nec tincidunt. Proin quam leo, tempus id sem non, tempus placerat metus. Donec gravida turpis vel dui dapibus, eu semper nibh molestie. Nullam sit amet felis suscipit, interdum sem a, dapibus arcu. Curabitur ac volutpat libero, id condimentum eros. Mauris vel varius tortor. Donec viverra leo ut libero convallis ultricies. Donec iaculis euismod nisi. Donec accumsan vitae velit non pellentesque. Fusce vestibulum risus et viverra facilisis. Nunc molestie consequat erat non viverra. Fusce finibus quam dolor, id maximus quam euismod eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    skills: ["HTML", "CSS"],
                    createdAt: new Date("2025-06-24").toLocaleDateString()
                }
                ]
            })
        }, 1000)        
    },

    addJob: (job)=>{
        const newJob={
            ...job, 
            id: Date.now().toString(),
            createdAt: new Date().toLocaleDateString()
        }
    },

    getJobById: (id)=>{
        return get().jobs.find((job)=>{
            return job.id===id
        })
    }

}))

export default useJobStore;