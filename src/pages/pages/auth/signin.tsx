import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useRef } from "react";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import { Navbar, Button } from "@/components";
import { SmallShopAlt } from "iconoir-react";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current) {
      await signIn("email", {
        email: emailRef.current.value,
        callbackUrl: "/pages/food-menu/food-menu",
      });
    }
  };

  const emailProvider = Object.values(providers).map((provider) => {
    if (provider.name === "Email") {
      return (
        <div key={provider.name} className="w-full pb-4 text-lg md:w-11/12">
          <form
            onSubmit={handleEmailSignIn}
            className="flex flex-col items-center"
          >
            <input
              type="email"
              ref={emailRef}
              placeholder="Email address"
              className="w-full rounded border p-2"
            />
            <Button
              type="submit"
              optionalClassNames="w-full p-2 rounded-lg my-2"
              text={`Sign in with ${provider.name}`}
            ></Button>
          </form>
        </div>
      );
    }
  });

  const oAuthProviders = Object.values(providers).map((provider) => {
    if (provider.name === "Email") {
      return;
    }

    return (
      <div key={provider.name} className="w-full text-lg md:w-11/12">
        <Button
          type="button"
          onClick={() => signIn(provider.id)}
          text={`Sign in with ${provider.name}`}
          optionalClassNames="w-full rounded-lg p-2 my-2"
        />
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <section className="flex min-h-screen justify-center bg-quaternaryGrey md:bg-quaternaryGrey/25">
        <div className="flex h-[32rem] max-w-[400px] flex-col items-center justify-center rounded-3xl p-8 shadow-lg sm:w-screen md:m-8 md:w-[400px] md:bg-quaternaryGrey">
          <SmallShopAlt className="text-primaryPink" height={125} width={125} />
          <h1 className="pb-5 text-3xl">SIGN IN</h1>
          {emailProvider}
          {oAuthProviders}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    // const session = await getServerSession(
    //   context.req,
    //   context.res,
    //   authOptions
    // );
    const session = null;

    const callbackUrl = context.query.callbackUrl;
    const redirectUrl = callbackUrl
      ? callbackUrl
      : "/pages/food-menu/food-menu";

    if (session) {
      return { redirect: { destination: redirectUrl } };
    }

    const providers = await getProviders();

    return {
      props: { providers: providers ?? [] },
    };
  } catch (error) {
    console.log("signin get server side props ctach block console log", error);
    return {
      props: { providers: [] },
    };
  }
}
