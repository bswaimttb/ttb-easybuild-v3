
export const MultiSelect = ({ options, selected, onChange }) => {
  const toggle = (option) => {
    const newSelection = selected.includes(option)
      ? selected.filter((o) => o !== option)
      : [...selected, option];
    onChange(newSelection);
  };
  return (
    <div className='space-y-1'>
      {options.map((opt) => (
        <label key={opt} className='flex items-center space-x-2'>
          <input type='checkbox' checked={selected.includes(opt)} onChange={() => toggle(opt)} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
};
