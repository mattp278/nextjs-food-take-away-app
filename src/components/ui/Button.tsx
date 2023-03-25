interface buttonProps {
  text: string
  optionalClassNames?: string
}

export const Button = ({ text, optionalClassNames }: buttonProps) => {
  const buttonClassNames = `w-full bg-primaryRed p-3 m-4 text-whiteFloral ${optionalClassNames}`

  return <button className={buttonClassNames}>{text}</button>
}
