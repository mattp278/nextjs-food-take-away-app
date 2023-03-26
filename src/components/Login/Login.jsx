import { MdFoodBank } from 'react-icons/md'
import { Input, Button } from '@/components'

export const Login = () => {
  return (
    <section className="relative sm:w-11/12 md:w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
      <MdFoodBank size="8em" className="m-2" />
      <h1 className="text-3xl">LOGIN</h1>
      <Input id="email" name="email" placeholder="Email" label="EMAIL" />
      <Input
        id="password"
        name="password"
        placeholder="Password"
        label="PASSWORD"
        type="password"
      />
      <Button text="LOGIN" />
    </section>
  )
}
