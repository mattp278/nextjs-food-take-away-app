interface inputProps {
  id: string
  name: string
  placeholder: string
  label: string
}

export const Input = ({ id, name, placeholder, label }: inputProps) => {
  return (
    <div className="w-full m-2">
      <label className="text-sm pl-1" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full rounded-md block p-2"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}
