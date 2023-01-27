// import { useState } from "react";
// import "./App.css";

// function App() {
//     const [users, setUsers] = useState([]);

//     function handleSubmit(user) {
//         setUsers([...users, user]);
//     }

//     function handleDelete(id) {
//         setUsers(users.filter((user) => user.id !== id));
//     }

//     return (
// <div>
//   <Form onSubmit={handleSubmit} />
//   <List users={users} />
// </div>

//     )

//     function Form(props) {
//       const onSubmit = props.onSubmit

//       const [name, setName] = useState("")
//       const [email, setEmail] = useState("")

//       return (
//           <form>
//               <label>
//                   Name:
//                   <input
//                       type="text"
//                       value={name}
//                       onChange={(event) => setName(event.target.value)}
//                   />
//               </label>
//               <label>
//                   Email:
//                   <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                   />
//               </label>
//               <button type="submit" onClick={() => onSubmit({ name, email })}>
//                   Submit
//               </button>
//           </form>
//       )
//   }

//   function List(props) {
//     const users = props.users
//     const handleDelete = props.handleDelete

//     return (
//         <ul>
//             {users.map((user) => (
//                 <li key={user.email}>
//                     {user.name} - {user.email}
//                     <div><button onClick={() => handleDelete(user.id)}>Delete</button></div>
//                 </li>
//             ))}
//         </ul>
//     )
// }

// }

// export default App;

import { useState } from "react";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    function handleSubmit(user) {
        setUsers([...users, user]);
    }

    function handleDelete(id) {
        setUsers(users.filter((user) => user.id !== id));
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} />
            <List users={users} handleDelete={handleDelete} />
        </div>
    );

    function Form(props) {
        const onSubmit = props.onSubmit;

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");

        return (
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    onClick={() => onSubmit({ name, email, id: Date.now() })}
                >
                    Submit
                </button>
            </form>
        );
    }

    function List(props) {
        const users = props.users;
        const handleDelete = props.handleDelete;

        return (
            <ul>
                {users.map((user) => (
                    <li key={user.email} className="list-item">
                        {user.name} - {user.email}
                        <div>
                            <button
                                className="delete-button"
                                onClick={() => handleDelete(user.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default App;
