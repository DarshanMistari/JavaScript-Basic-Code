

const {useState} = React;

function MyDemo() {

const [name, setName] = useState("");

const [age , setAge] = useState(21);

const [isStudent , setStudent] = useState(false);

const [subject, setSubject] = useState(["Math", "English","OS"]);

const[user , setUser] = useState({user : "Darshan", city : "Shahada"});


 return (
 <div>
    <h1>React React useState Examples</h1>

    <label>Enter your Name :</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <p><b>Name :</b> {name}</p>

    <label>Enter Age :</label>
    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
    <p><b>Age :</b> {age}</p>

    <button onClick={() => setStudent(isStudent)}>
      {isStudent ? "Student as not set" : "Student as Set"}
    </button>
    <p><b>Student : </b> {isStudent ? "Yes" : "No"}</p>

    <button onClick={() => setSubject([subjects ,"React"])}>Add subject</button>
    <p><b>Subject : </b> {subjects.join(",Math")}</p>

    <button onClick={() =>  setUser({user , city:"Shahda"})}>Update City</button>
    <p><b>User Info :</b> {user.name} , {user.city}</p>

 </div>

 );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyDemo />);