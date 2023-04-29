interface buttonProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  optionalClassNames?: string
  onClick?: () => void
}

export const Button = ({
  text,
  type,
  optionalClassNames,
  onClick,
}: buttonProps) => {
  const buttonClassNames = `bg-primaryPink p-3 text-secondaryWhite ${optionalClassNames}`

  return (
    <button type={type} className={buttonClassNames} onClick={onClick}>
      {text}
    </button>
  )
}
