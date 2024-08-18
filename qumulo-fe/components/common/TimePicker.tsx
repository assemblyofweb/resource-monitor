import React from 'react';

interface TimePickerProps {
  format: '12h' | '24h';
  onChange: (value: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ format, onChange }) => {
  return (
    <div className="form-group">
      <input type="time" className="timepicker-input" onChange={e => onChange(e.target.value)} />
    </div>
  );
};

export default TimePicker;
