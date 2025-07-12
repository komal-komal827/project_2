function Sample3({stud}) {
    

    return (
        <div style={{border:'2px solid black',padding:'12px',background:'yellow'}}>
         <h1>Sample 3</h1>
         {stud.name}-{stud.age}-{stud.city}
        </div>
    );
}
export default Sample3;
