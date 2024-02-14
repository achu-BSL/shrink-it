interface InputProps {
  label: string;
  type: "text" | "password";
}

const Input: React.FC<InputProps> = ({ label, type }) => {
  const id = label.toLocaleLowerCase();
  return (
    <div>
      <label htmlFor={id}>{label}*</label>
      <input
        id={id}
        name={id}
        className="border-2 border-secondary px-2 w-full h-[34px] rounded-md"
        type={type}
      />
    </div>
  );
};

export default Input;
