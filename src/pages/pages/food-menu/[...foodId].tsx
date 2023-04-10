import { GetServerSideProps } from 'next'

const [...foodId] = () => {
  return <div>Enter</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}

export default [...foodId]
