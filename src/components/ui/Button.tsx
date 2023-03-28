import Link from 'next/link'

interface buttonProps {
  href: string
  text: string
  type: 'button' | 'submit' | 'reset'
  optionalClassNames?: string
}

export const Button = ({
  href,
  text,
  type,
  optionalClassNames,
}: buttonProps) => {
  const buttonClassNames = `bg-primaryRed p-3 text-whiteFloral ${optionalClassNames}`

  return (
    <Link href={href}>
      <button type={type} className={buttonClassNames}>
        {text}
      </button>
    </Link>
  )
}
