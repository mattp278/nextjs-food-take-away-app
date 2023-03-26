interface buttonProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  optionalClassNames?: string
}

export const Button = ({ text, type, optionalClassNames }: buttonProps) => {
  const buttonClassNames = `w-full bg-primaryRed p-3 my-4 text-whiteFloral ${optionalClassNames}`

  return (
    <button type={type} className={buttonClassNames}>
      {text}
    </button>
  )
}
