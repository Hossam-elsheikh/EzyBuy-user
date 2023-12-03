import React, { useEffect, useState } from 'react'
import axios from "axios";

const Addresses = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    async function getPersonalInfo() {
      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:3333/customer/info",
          headers: {
            authorization: `${localStorage.getItem("customerToken")}`,
          },
        });
        setInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getPersonalInfo();
  }, []);
  return (
    <div id='addresses'>
        <h5>Your current Address:</h5>
        <div className='p-3 border rounded'>

        <p>{info?.address} - {info?.city}</p>
        </div>
    </div>
  )
}

export default Addresses