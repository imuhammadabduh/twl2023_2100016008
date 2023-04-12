import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/users", data).then(navigate("/"));
  }
  return (
    // <div className="py-4 px-6 px-8 ">
    //   <h2 className="text-2xl font-semibold mb-4">Tambah User</h2>
    //   <form className="space-y-4">
    //     <div>
    //       <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
    //         Name
    //       </label>
    //       <input
    //         id="name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         type="text"
    //         placeholder="Masukan "
    //         className="border-gray-400 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
    //         Email
    //       </label>
    //       <input
    //         id="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         type="email"
    //         placeholder="Masukan "
    //         className="border-gray-400 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
    //         Phone No.
    //       </label>
    //       <input
    //         id="phone"
    //         value={phone}
    //         onChange={(e) => setPhone(e.target.value)}
    //         type="phone"
    //         placeholder="Masukan  no."
    //         className="border-gray-400 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       onClick={submitForm}
    //       className=" text-green-500 mr-5 "
    //     >
    //       Tambah
    //     </button>
    //     <Link to="/" className=" text-red-500  ">
    //           Kembali
    //         </Link>
    //   </form>
    // </div>
    <div class="flex flex-col items-center px-6 justify-center h-screen">
    <h2 class="text-3xl font-bold mb-4">Tambah User</h2>
    <form class="w-full max-w-md">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Nama
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Masukan Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Masukan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="phone">
          No.HP
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="phone"
          placeholder="Masukan Telepone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={submitForm}
        >
          Tambah User
        </button>
      </div>
    </form>
    <br />
    <Link to="/" className=" text-red-500  ">
      Kembali
    </Link>
  </div>
  );
}

export default Add;
