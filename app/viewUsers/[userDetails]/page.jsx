import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function UserDetail() {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      fetch(`https://adso-lookstyle.onrender.com/api/v1/users/${userId}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }
  }, [userId]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* Agrega más campos aquí según los datos del usuario */}
    </div>
  );
}

export default UserDetail;
