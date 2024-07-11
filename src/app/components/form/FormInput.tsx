import { IFormInput } from "./IFormInput";

export default function FormInput(props: IFormInput) {
  const {
    label = "",
    type = "text",
    name = "",
    id = "",
    placeholder = "",
    required = false
  } = props;

  return (
    <>
      <div className="mb-[15px] text-black" >
        {label && (
          <label 
            className="block mb-[5px] text-[14px] font-[600]" 
            htmlFor={id}
          >
            <span className="text-white">{label}</span>
            {required && (
              <span className="text-[#F21D2F] ml-[5px]">*</span>
            )}
          </label>
        )}
        <input 
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="w-full h-[50px] bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
          required={required}
        />
      </div>
    </>
  )
}