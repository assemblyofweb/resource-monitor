import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface CheckboxListProps {
  options: Option[];
  onChange: (values: string[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ options, onChange }) => {
  const handleCheckboxChange = (value: string) => {
    const newValues = options.filter(option => option.value !== value).map(option => option.value);
    onChange(newValues);
  };

  return (
    <div className="form-group">
      {options.map(option => (
        <label key={option.value} className="form-checkbox">
          <input type="checkbox" value={option.value} onChange={() => handleCheckboxChange(option.value)} />
          <i className="form-icon"></i>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
