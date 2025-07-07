// components/Scheduler.jsx
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const Scheduler = ({ events, onSelectSlot }) => {
  const localizer = momentLocalizer(moment);

  return (
    <div className="h-[600px] mt-4">
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={onSelectSlot}
        defaultView="week"
        min={new Date(0, 0, 0, 8, 0, 0)} // 8AM
        max={new Date(0, 0, 0, 20, 0, 0)} // 8PM
      />
    </div>
  );
};