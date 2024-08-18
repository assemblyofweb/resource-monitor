import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  options: Option[];
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, onChange }) => {
  return (
    <div className="form-group">
      <select className="form-select" onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
