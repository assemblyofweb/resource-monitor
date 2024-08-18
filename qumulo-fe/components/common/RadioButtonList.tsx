import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface RadioButtonListProps {
  options: Option[];
  onChange: (value: string) => void;
}

const RadioButtonList: React.FC<RadioButtonListProps> = ({ options, onChange }) => {
  return (
    <div className="form-group">
      {options.map(option => (
        <label key={option.value} className="form-radio">
          <input type="radio" name="radioList" value={option.value} onChange={() => onChange(option.value)} />
          <i className="form-icon"></i>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonList;
