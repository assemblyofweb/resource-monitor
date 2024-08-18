import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input type="text" className="form-input" value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

export default TextInput;
