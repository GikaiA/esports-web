// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Import the CSS for styling
// import ical from 'node-ical'; // Import the node-ical library

// const CalendarData = () => {
//     const [events, setEvents] = useState([]); // State to store parsed events
//     const [loading, setLoading] = useState(true); // State to track loading state
  
//     useEffect(() => {
//       const fetchCalendarData = async () => {
//         try {
//           // Fetch the ICS file locally
//           const response = await fetch('/src/data/bca41034-70d5-41c4-a09a-092c5d4c3565.ics');
//           const data = await response.text();
  
//           // Parse the ICS data using node-ical
//           const parsedData = ical.sync.parseICS(data);
  
//           // Extract event information
//           const parsedEvents = Object.values(parsedData).map((event) => ({
//             start: new Date(event.start),
//             end: new Date(event.end),
//             summary: event.summary
//           }));
  
//           // Update state with parsed events
//           setEvents(parsedEvents);
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching calendar data:', error);
//           // Handle error, e.g., show a message to the user
//           setLoading(false);
//         }
//       };
  
//       fetchCalendarData();
//     }, []);
  
//     return (
//       <div>
//         <h1>My Calendar</h1>
//         {loading ? ( // Display loading message while data is being fetched
//           <p>Loading...</p>
//         ) : (
//           <Calendar
//             events={events} // Pass the events data to the calendar
//           />
//         )}
//       </div>
//     );
//   };

// export default CalendarData;
