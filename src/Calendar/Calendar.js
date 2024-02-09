// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ical from 'ical';

// const CalendarData = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCalendarData = async () => {
//       try {
//         const url = "https://api.leaguespot.gg/api/v1/organizations/bca41034-70d5-41c4-a09a-092c5d4c3565.ics";
//         const response = await axios.get(url);
//         const data = response.data;

//         // Parse ICS data using ical
//         const parsedData = ical.parseICS(data);
//         const parsedEvents = [];

//         for (let k in parsedData) {
//           if (parsedData.hasOwnProperty(k)) {
//             const event = parsedData[k];
//             if (event.type === 'VEVENT') {
//               parsedEvents.push({
//                 start: new Date(event.start),
//                 end: new Date(event.end),
//                 summary: event.summary
//               });
//             }
//           }
//         }

//         // Update state with parsed events
//         setEvents(parsedEvents);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching calendar data:', error);
//         // Handle error, e.g., show a message to the user
//         setLoading(false);
//       }
//     };

//     fetchCalendarData();
//   }, []);

//   return (
//     <div style={{ color: 'white', backgroundColor: 'red', padding: '20px' }}>
//       <h2 style={{ color: 'white', backgroundColor: 'red', padding: '10px', marginBottom: '20px' }}>Calendar Events</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {events.map((event, index) => (
//             <li key={index} style={{ color: 'white', backgroundColor: 'red', padding: '10px', marginBottom: '5px' }}>
//               <strong>{event.summary}</strong> - {event.start.toString()} to {event.end.toString()}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CalendarData;
