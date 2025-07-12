import  react,{ useEffect, useState } from "react"

function Demo(props) {
    let [user,setuser] = useState({name:"",age:"",city:""})
    // let [city, setCity] = useState('')
    // let [age, setAge] = useState(0)


    let handleInput =(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

     let handleSubmit=(e)=>{
         e.preventDefault()
       console.log(user)
    save()
     }

    let [students, setStudents] = useState([])
    useEffect(() => {
        fetchStudents()

    }, [])

    let save=()=>{
        let new_stud={...user}
        let old=localStorage.getItem('students')
         let old2=old?JSON.parse(old):[]
         old2.push(new_stud)
         localStorage.setItem('students',JSON.stringify(old2))
         fetchStudents()
          setuser({name:"",age:"",city:""});
         
         alert('Data Saved')

    }
    let delStudent=(index)=>{
        let old=localStorage.getItem('students')
        let old2=old? JSON.parse(old):[]
        old2.splice(index,1)
        localStorage.setItem('students',JSON.stringify(old2))
        fetchStudents()
        alert('Data deleted')
    }
    let fetchStudents=()=>{
        let old=localStorage.getItem('students')
        let old2=old?JSON.parse(old):[]
        setStudents(old2)
    }


    return (           
        <div>
             <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
             
           Name: <input type="text"name="name"value={user.name} onChange={handleInput} />
            <br /><br />
          Age: <input type="text"name="age"value={user.age} onChange={handleInput} />
            <br /><br />
          City: <input type="text"name="city"value={user.city} onChange={handleInput} />
            <br /><br />
            <button type="submit" >save</button>
             </form> 
              

            <hr/>
            <table border={1}style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th>Srno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s,index)=>{
                            return(
                                <tr key={index}>
                                <th>{index+1}</th>
                                <th>{s.name}</th>
                                <th>{s.age}</th>
                                <th>{s.city}</th>
                                <th>
                                    <button onClick={()=>{delStudent(index)}}>del</button>
                                </th>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}
export default Demo;