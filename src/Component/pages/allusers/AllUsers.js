import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://over-stcok-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handlemakeadmin = (id) => {
    fetch(`https://over-stcok-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin sucessfull");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Admin action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.usertype}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={() => handlemakeadmin(user._id)}
                    >
                      Make admin
                    </button>
                  )}{" "}
                </td>
                <td>
                  <button className="btn btn-xs bg-danger ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
