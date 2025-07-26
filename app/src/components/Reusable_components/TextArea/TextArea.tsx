interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  error = false,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-1  w-full h-24 resize-none bg-white text-black focus:outline-none ${
        error ? "border border-red-500" : ""
      }`}
    ></textarea>
  );
};

export default TextArea;
