import { Input, Button } from '@/components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { selectUsertSlice } from '@/redux/slices/userSlice'
import { signUp } from '@/redux/slices/userSlice'
import { useRouter } from 'next/router'
import { SmallShopAlt } from 'iconoir-react'

export const SignUp = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { errors } = useAppSelector(selectUsertSlice)

  const errorMessages = errors?.map((error, i) => {
    return (
      <p
        key={i}
        className="bg-primaryPink text-secondaryWhite text-center p-2 mt-4"
      >
        {error}
      </p>
    )
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please input a valid email address')
        .required('required'),
      password: Yup.string()
        .min(8, 'Password must be 8 characters of more')
        .required('required'),
      password2: Yup.string()
        .min(8, 'Password must be 8 characters of more')
        .required('required'),
    }),
    onSubmit: async (values) => {
      const newUser = await dispatch(signUp(values))
      console.log('newUser', newUser)
      const id = newUser?.payload?.id
      console.log('id', id)
      if (id) router.push('/pages/food-menu/food-menu')
    },
  })

  return (
    <section className=" relative sm:w-11/12 md:w-[400px] max-w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
      <SmallShopAlt className="text-primaryPink" height={125} width={125} />
      <h1 className="text-3xl">SIGN UP</h1>
      {errorMessages ? errorMessages : null}
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col items-center justify-center m-2"
      >
        <Input
          id="name"
          name="name"
          placeholder="Name"
          label="NAME"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
        />
        <Input
          id="email"
          name="email"
          placeholder="Email"
          label="EMAIL"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          id="password"
          name="password"
          placeholder="Password"
          label="PASSWORD"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
        <Input
          id="password2"
          name="password2"
          placeholder="Password"
          label="RE-ENTER PASSWORD"
          type="password"
          value={formik.values.password2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password2 && formik.errors.password2}
        />
        <Button
          href="/"
          type="submit"
          text="SIGN UP"
          optionalClassNames="min-w-[200px] md:min-w-[300px] my-5"
        />
      </form>
    </section>
  )
}
