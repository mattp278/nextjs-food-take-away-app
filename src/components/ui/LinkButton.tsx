import Link from 'next/link'

interface buttonProps {
  href: string
  text: string
  type: 'button' | 'submit' | 'reset'
  optionalClassNames?: string
}

export const LinkButton = ({
  href,
  text,
  type,
  optionalClassNames,
}: buttonProps) => {
  const buttonClassNames = `bg-primaryPink p-3 text-secondaryWhite ${optionalClassNames}`

  return (
    <Link href={href}>
      <button type={type} className={buttonClassNames}>
        {text}
      </button>
    </Link>
  )
}
