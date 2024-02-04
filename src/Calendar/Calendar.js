import React, {useEffect, useState} from 'react';
import './Calendar.css';
import axios from 'axios';

const Calendar = () => {
    useEffect(() => {
      const fetchCalendarLink = async () => {
        try {
          // Replace 'your-api-link' with your actual API link
          const response = await axios.get('https://api.leaguespot.gg/api/v1/organizations/bca41034-70d5-41c4-a09a-092c5d4c3565.ics');
          
          // Assuming the API response contains the calendar link
          const calendarLink = response.data.calendarLink;
  
          // Open the calendar link in the current window
          window.location.href = calendarLink;
        } catch (error) {
          console.error('Error fetching calendar link:', error);
          // Handle error, e.g., show a message to the user
        }
      };
  
      fetchCalendarLink();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts
  
    return (
      <div>
        {/* You can add any loading indicator or message here */}
        Loading Calendar...
      </div>
    );
  };
  

export default Calendar
