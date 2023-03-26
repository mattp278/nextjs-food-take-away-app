import { MdFoodBank } from 'react-icons/md'
import { Input, Button } from '@/components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { selectUsertSlice } from '@/redux/slices/userSlice'
import { getAuthUser } from '@/redux/slices/userSlice'

export const Login = () => {
  const dispatch = useAppDispatch()
  const { errors } = useAppSelector(selectUsertSlice)

  const errorMessages = errors?.map((error, i) => {
    return (
      <p
        key={i}
        className="bg-primaryRed text-whiteFloral text-center p-2 mt-4"
      >
        {error}
      </p>
    )
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please input a valid email address')
        .required('required'),
      password: Yup.string()
        .min(8, 'Password must be 8 characters of more')
        .required('required'),
    }),
    onSubmit: (values) => {
      dispatch(getAuthUser(values))
    },
  })

  return (
    <section className=" relative sm:w-11/12 md:w-[400px] flex flex-col items-center justify-center rounded-3xl p-6 md:p-8 bg-tertiaryGold">
      <MdFoodBank size="8em" />
      <h1 className="text-3xl">LOGIN</h1>
      {errorMessages ? errorMessages : null}
      <form onSubmit={formik.handleSubmit} className="w-full relative m-2">
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
        <Button type="submit" text="LOGIN" />
      </form>
    </section>
  )
}
