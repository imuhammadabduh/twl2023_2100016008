import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(user);
  return (
    <>
      <div className="h-screen w-full flex  justify-center items-center flex-col">
        {user && (
          <div className="flex flex-col items-center ">
            <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg ">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold mr-5">Name:</h2>
                <h2 className="text-lg">{user.name}</h2>
              </div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold mr-5">Email:</h2>
                <h2 className="text-lg">{user.email}</h2>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mr-5">Phone:</h2>
                <h2 className="text-lg">{user.phone}</h2>
              </div>
            </div>
          </div>
        )}
        <Link to="/" className=" text-red-500  ">
          Kembali
        </Link>
      </div>
    </>
  );
}

export default Users;
