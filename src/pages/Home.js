import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:3001/users/${id}`).then(loadUsers());
  }

  return (
    <>
    <div className="">
    <br/>
    <br/>
    <br/>

      <h1 className="text-2xl font-bold p-6 text-center">Data-Data User</h1>
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className="bg-white shadow-md rounded-lg">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">No.</th>
                  <th className="py-3 px-6 text-left">Nama</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">No.HP</th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {users.map((data, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.name}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.email}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.phone}</td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center">
                        <Link to={`/users/${data.id}`} className="text-purple-600 hover:text-purple-900 mx-2">
                          Lihat
                        </Link>
                        <Link to={`/edit-user/${data.id}`} className="text-yellow-600 hover:text-yellow-900 mx-2">
                          Edit
                        </Link>
                        <Link onClick={() => deleteUser(data.id)} to="#" className="text-red-600 hover:text-red-900 mx-2">
                          Hapus
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
