"use client";

import Image from 'next/image';

import ModalProps from './interfaces/modalProps';

const LoginModal = (props: ModalProps) => {
    const { buttonAction, buttonText, description, iconSrc, isOpen, onClose, title } = props;
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-10 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-black rounded-2xl p-10 w-[628px] max-w-full flex flex-col items-center justify-center gap-2"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={iconSrc}
                    alt={'modal icon'}
                    width={72}
                    height={72} />
                <h2 className='text-white font-semibold text-custom-32 leading-9 pt-8'>
                    {title}
                </h2>
                <p className='text-darkgray font-normal text-base leading-6 text-center pb-8 px-8'>
                    {description}
                </p>
                <button
                    onClick={buttonAction}
                    className=" bg-green font-bold text-base leading-6 text-black rounded-xl py-3 px-8"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}


export default LoginModal;