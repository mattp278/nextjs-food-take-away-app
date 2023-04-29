interface inputProps {
  id: string
  name: string
  placeholder: string
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  error: string
}

export const Input = ({
  id,
  name,
  placeholder,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
}: inputProps) => {
  return (
    <div className="w-full my-2">
      <label className="text-sm pl-1" htmlFor={name}>
        {label}
      </label>

      <input
        className="w-full rounded-md block p-2 "
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? (
        <p className="text-primaryPink  text-sm text-center">{error}</p>
      ) : null}
    </div>
  )
}
