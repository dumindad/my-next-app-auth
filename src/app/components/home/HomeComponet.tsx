"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const HomeComponet = () => {
    const { data: session } = useSession()
    const [loginWith, setLoginWith] = useState(false)

    // const loginWith = () => {
    //     setLoginWith(true)
    // }

    if (session) {
        console.log("session user", session.user)

        //rendering data from logged in users
        return (
            <div>
                <div className='w-44 h-44 relative mb-4'>
                    <Image width={30} height={20} alt='profile image' src={session.user?.image as string} fill />
                </div>
                <p>Signed In As {session.user?.email}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    if (loginWith) {
        return (
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <p className='text-2xl mb-2'>
                    Sign In As
                </p>
                <button className='bg-blue-600 py-2 px-6 rounded-md mb-2' onClick={()=> signIn('cognito')}>Sign in with Cognito</button>

            </div>
        )
    }
    return (
        <>
        <header className='bg-white'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
                <div className='flex lh:flex-1'>
                    <span className='sr-only'></span>
                    <Image className='h-8 w-auto' src='/assets/logo.png' width={400} height={400} alt='Logo' />

                </div>
                {session ? (
                    <div className='hidden lg:flex lg:gap-x-12'>
                        <div className='relative'>
                            <button type='button' className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900' aria-expanded='false'>Product</button>
                        </div>
                        <Link href='/features'>Features</Link>
                        <Link href='/contact'>Contact Us</Link>

                    </div>
                ):
                (
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                        <button className='text-sm font-semibold leading-6 text-gray-900' onClick={()=> setLoginWith(true)}>Log In<span aria-hidden="true">&rarr;</span></button>

                    </div>
                )
                }

            </nav>
        </header>
        <div className='flex-col justify-center text-wrap border-spacing-4 text-center'>
            <h1 className='underline-offset-8 bg-slate-100 align-middle'>My App</h1>
        </div>
            
        </>
    )
}

export default HomeComponet