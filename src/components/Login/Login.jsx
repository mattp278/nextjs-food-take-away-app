import { MdFoodBank } from 'react-icons/md'
import { Input, Button } from '@/components'

export const Login = () => {
  return (
    <section className="relative w-5/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center rounded-lg p-6 md:p-8 lg:p-12 bg-tertiaryGold">
      <MdFoodBank size="8em" className="m-2" />
      <h1 className="text-3xl">LOGIN</h1>
      <Input id="email" name="email" placeholder="Email" label="EMAIL" />
      <Input
        id="password"
        name="password"
        placeholder="Password"
        label="PASSWORD"
      />
      <Button text="LOGIN" />
    </section>
  )
}
