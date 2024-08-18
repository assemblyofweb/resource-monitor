import React from 'react';

interface NumberInputProps {
  defaultValue: number;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ defaultValue, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="number"
        className="form-input"
        defaultValue={defaultValue}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default NumberInput;
