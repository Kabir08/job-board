import Link from "next/link"
import {
    getSignInUrl,
    getSignUpUrl,
    getUser,
    signOut
  } from '@workos-inc/authkit-nextjs';

export default async function Header(){
    
    const { user } = await getUser();
    const signInUrl = await getSignInUrl()
    const signOutUrl = await getSignUpUrl()

    return (
        <header >
          <div className="container my-4 flex items-center justify-between">
          <Link href={"/"} className="text-2xl font-bold">Job board</Link>
        <nav className="flex gap-4  *:py-2 *:px-4 *:rounded-md">
            {!user && (
                <Link className="bg-gray-200 rounded-md py-2 px-4" href={signInUrl}>
                    Login
                </Link>
            )}
            {user && (
                <form
                action={async () => {
                  'use server';
                  await signOut();
                }}>
                    <button type="submit" className="rounded-md bg-gray-200 py-2 px-4 ">Logout</button></form> 
            )}
          <Link className="bg-blue-600 rounded-md  text-white" href={"/new-listing"}>Post a Job</Link>
        </nav>
          </div>
        </header>
    )
}