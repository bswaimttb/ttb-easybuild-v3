
export const Select = ({ children, onValueChange }) => <select onChange={(e) => onValueChange(e.target.value)} className='border p-2 w-full'>{children}</select>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => <option disabled>{placeholder}</option>;
export const SelectContent = ({ children }) => <>{children}</>;
