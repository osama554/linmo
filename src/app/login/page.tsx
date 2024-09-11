"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

import LoginModal from '@/components/modals/loginModal/loginModal';

import ModalContent from '@/components/modals/loginModal/interfaces/modalContent';

const images = [
    '/static/login1.svg',
    '/static/login2.svg',
    '/static/login1.svg',
    '/static/login2.svg',
];

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContent>({
        iconSrc: '',
        title: '',
        description: '',
        buttonText: '',
    });

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) {
            setModalContent({
                iconSrc: '/static/checkmark.svg',
                title: 'Let’s go!',
                description: 'You have successfully logged in.',
                buttonText: 'Done',
            });
            setIsModalOpen(true);
        } else {
            console.log('Invalid credentials');
        }

    };

    const handleForgotPassword = () => {
        setModalContent({
            iconSrc: '/static/lock.svg',
            title: 'Recover Password',
            description:
                'To recover your password and regain access to your account, please use our app.',
            buttonText: 'Done',
        });
        setIsModalOpen(true);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex-1 flex items-center justify-center bg-black px-4 md:px-0">
                <form onSubmit={handleLogin} className="flex flex-col max-w-md w-full gap-3 text-left">
                    <div className='flex flex-col gap-2 mb-8 text-center md:text-left'>
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <h1 className="font-bold text-custom-32 leading-9 text-white">Welcome to</h1>
                            <Image
                                src="/static/logo.svg"
                                width={97}
                                height={24}
                                alt="LINMO"
                            />
                        </div>
                        <p className='font-normal leading-custom-22 text-sm text-gray'>
                            Please enter your details.
                        </p>
                    </div>
                    <Link href="#" className='bg-white font-bold text-sm leading-custom-22 text-black rounded-xl flex items-center py-3 justify-center gap-2'>
                        <Image
                            src="/static/google.svg"
                            width={24}
                            height={24}
                            alt="google"
                        />
                        Login with Google
                    </Link>
                    <Link href="#" className='bg-white font-bold text-sm leading-custom-22 text-black rounded-xl flex items-center py-3 justify-center gap-2'>
                        <Image
                            src="/static/apple.svg"
                            width={24}
                            height={24}
                            alt="google"
                        />
                        Login with Apple
                    </Link>
                    <div className='flex gap-3 mt-3'>
                        <div className="grow flex items-center">
                            <div className="w-full border-t border-darkMetal"></div>
                        </div>
                        <p className='text-sm font-normal leading-custom-22 text-darkgray'>Or login with</p>
                        <div className="grow flex items-center">
                            <div className="w-full border-t border-darkMetal"></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='font-medium leading-custom-22 text-sm text-white'>Your email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                            className='font-normal leading-custom-22 text-sm text-white bg-black border border-darkMetal rounded-xl py-2 px-3 focus:outline-none'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-2'>
                        <label htmlFor="password" className='font-medium leading-custom-22 text-sm text-white'>Your Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                className='font-normal leading-custom-22 text-sm text-white bg-black border border-darkMetal rounded-xl py-2 px-3 w-full focus:outline-none'
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className='absolute right-4 top-1/2 transform -translate-y-1/2'
                            >
                                <Image
                                    src={showPassword ? "/static/eye.svg" : "/static/eye-off.svg"}
                                    alt="show/hide password"
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </div>
                    </div>
                    <Link
                        href="#"
                        onClick={handleForgotPassword}
                        className='text-green font-medium leading-custom-22 text-sm self-end mt-1'
                    >
                        Forgot Password?
                    </Link>
                    <button type='submit' className='bg-green font-bold text-base leading-6 text-black rounded-xl py-3 mt-5 text-center mb-5'>
                        Login
                    </button>
                    <p className='font-normal text-xs leading-custom-18 text-white text-center px-0 md:px-custom-70'>
                        By continuing you agree to our
                        <Link href={'#'} className='text-sandstone px-1'>Privacy Policy</Link>
                        and
                        <Link href={'#'} className='text-sandstone px-1'>
                            Terms & Conditions
                        </Link>
                    </p>
                </form>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex flex-1 bg-cover bg-center relative transition-opacity duration-500" style={{ backgroundImage: `url('${images[currentIndex]}')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="flex-1 flex items-end">
                        <div className="w-full px-10 pb-20 z-10 flex flex-col gap-8">
                            <h2 className='text-white font-bold text-base sm:text-custom-32 leading-5 sm:leading-9 text-left'>
                                &ldquo;I&apos;ve been a part of the sports community for years, and I can confidently say that this is a game-changer.&rdquo;
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col gap-custom-2'>
                                    <h2 className='font-semibold text-white text-custom-22 leading-7'>
                                        Ann Schleifer
                                    </h2>
                                    <p className='font-medium text-green text-base leading-6'>
                                        Rock Climber
                                    </p>
                                </div>
                                <div className='flex gap-4 items-center justify-center'>
                                    <button type='button' onClick={handlePreviousImage}>
                                        <Image
                                            src={'/static/left.svg'}
                                            alt={'left'}
                                            width={48}
                                            height={48}
                                        />
                                    </button>
                                    <button type='button' onClick={handleNextImage}>
                                        <Image
                                            src={'/static/right.svg'}
                                            alt={'right'}
                                            width={48}
                                            height={48}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <LoginModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    iconSrc={modalContent.iconSrc}
                    title={modalContent.title}
                    description={modalContent.description}
                    buttonText={modalContent.buttonText}
                    buttonAction={closeModal}
                />
            )}
        </div>
    )
}

export default LoginPage;