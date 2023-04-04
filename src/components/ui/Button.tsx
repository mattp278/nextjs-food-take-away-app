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
  const buttonClassNames = `bg-primaryRed p-3 text-whiteFloral ${optionalClassNames}`

  return (
    <button type={type} className={buttonClassNames} onClick={onClick}>
      {text}
    </button>
  )
}
