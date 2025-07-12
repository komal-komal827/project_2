import Sample3 from "./Sample3";

function Sample2({stud}) {
    

    return (
        <div style={{border:'2px solid black',padding:'12px',background:'pink'}}>
          <h1>Sample 2</h1> 
          {stud.name}-{stud.age}-{stud.city} 
          <Sample3  stud={stud}/>
        </div>
    );
}
export default Sample2;