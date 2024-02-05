// import React, { useEffect, useState } from 'react';
// import './Calendar.css';
// import axios from 'axios';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const CalendarData = () => {
//   const [calendarData, setCalendarData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const localizer = momentLocalizer(moment);

//   useEffect(() => {
//     const fetchCalendarData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.leaguespot.gg/api/v1/organizations/bca41034-70d5-41c4-a09a-092c5d4c3565.ics'
//         );

//         const data = response.data;

//         setCalendarData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching calendar data:', error);
//         setLoading(false);
//       }
//     };

//     fetchCalendarData();
//   }, []); 

//   return (
//     <div>
//       {loading ? (
//         <p>Loading Calendar Data...</p>
//       ) : (
//         <div>
//           {/* Display the fetched calendar data using react-big-calendar */}
//           <Calendar
//             localizer={localizer}
//             events={calendarData}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 500 }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarData;
