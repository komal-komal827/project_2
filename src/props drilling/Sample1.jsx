import Sample2 from "./Sample2"

function Sample1(props) {
 let stud1={
    name:'gaurav',
    age:16,
    city:'yeola'
 }   

    return (
        <div style={{border:'2px solid black',padding:'12px',background:'skyblue'}}>
         <h1>Sample 1</h1>
        <Sample2 stud={stud1}/> 
       </div>     
    
    );
}
export default Sample1;

