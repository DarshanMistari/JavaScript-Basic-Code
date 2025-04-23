function MyDemo() {

    const [name ,setName] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [age, setAge] = React.useState("");
    const [gender , setGender] = React.useState("");
    const [course , setCourse] = React.useState("BCA");

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Name : ${name} \n Email : ${email} \n Age : ${age} \n Gender : ${gender} \n Course : ${course}`);
    };
 return (
 <div>
    <form onSubmit={handleSubmit}>

    <h1>Student Registration in React</h1>
    <label> Enter Name : 
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} required/>
    </label>

    <br></br>

    <label> Email :
        <input type="email" value={age} onChange={(e) => setEmail(e.target.value)} required/>
    </label>

    <br></br>

    <label> Age :
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required/>
    </label>

    <br></br>

    <label> Gender : 
        <input type="radio"  name="male" value={male} onChange={(e) => setGender(e.target.value)} required/>Male
        <input type="radio" name="female" value={female} onChange={(e) => setGender(e.target.value)} required/>Female
    </label>

    <br></br>

    <label>Select Course :
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="MCA">MCA</option>
            <option value="MSC">MSC</option>
            <option value="BSC">BSC</option>
        </select>
    </label>
    <br></br>

    <button type="submit">Submit</button>
    </form>
 </div>
 );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyDemo />);