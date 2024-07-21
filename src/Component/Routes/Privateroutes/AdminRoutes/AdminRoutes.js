// src/pages/useadmin/useAdmin.js
import { useState, useEffect } from 'react';

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://over-stcok-server-usx2-icrxtv27y.vercel.app/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
          console.log("Admin check response:", data); // Log response
          setIsAdmin(data.isAdmin);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching admin status:", error);
          setIsAdmin(false);
          setLoading(false);
        });
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, [email]);

  return [isAdmin, loading];
};

export default useAdmin;
