import React, { useEffect, useState } from 'react';
import './Calendar.css';
import axios from 'axios';
const CalendarData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  
    const fetchCalendarData = async () => {
        const url = "https://api.leaguespot.gg/api/v1/organizations/bca41034-70d5-41c4-a09a-092c5d4c3565.ics";
        try {
          const response = await axios.get(url);
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching calendar data:', error);
          // Handle error, e.g., show a message to the user
          setLoading(false);
        }
      };
  
    useEffect(() => {
      fetchCalendarData();
    }, []);
  

  return (
    <div>
      <h2>Calendar Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default CalendarData;
