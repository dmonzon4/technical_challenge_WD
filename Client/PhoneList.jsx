import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/phones');
        setPhones(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Phone Catalog</h1>
      <ul>
        {phones.map(phone => (
          <li key={phone.id}>
            <p>{phone.name}</p>
            <p>Manufacturer: {phone.manufacturer}</p>
            {/* Add more phone details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneList;
