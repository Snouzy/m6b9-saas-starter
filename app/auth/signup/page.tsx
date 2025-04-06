import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/helper";

export const metadata = {
  title: "Sign Up - Simple",
  description: "Page description",
};

export default async function AuthSignUpPage() {
  const user = await auth();

  if (user) {
    redirect("/");
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Créer un compte</h1>
      </div>
      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input className="form-input w-full py-2" id="email" placeholder="corybarker@email.com" required type="email" />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input autoComplete="on" className="form-input w-full py-2" id="password" placeholder="••••••••" required type="password" />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            Register
          </button>
          <div className="text-center text-sm text-gray-400">Ou</div>
          <button className="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            Continue with GitHub
          </button>
        </div>
      </form>

      {/* Bottom link */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          By signing up, you agree to the{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#0">
            Terms
          </a>{" "}
          and{" "}
          <a className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline" href="#0">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}
