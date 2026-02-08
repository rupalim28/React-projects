import { useState, useEffect } from "react";

function UseEffectRealWorld() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // runs once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <table border="1">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user=>(
                    <tr key={user.id}>
                        <th>{user.id}</th>
                        <th>{user.name}</th>
                    </tr>
                ))

            }
        </tbody>
    </table>
  );
}

export default UseEffectRealWorld;


