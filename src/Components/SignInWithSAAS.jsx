import React from 'react';
import '../index.css'
import azure from '../assets/Azure.svg'
import bitBucket from '../assets/BitBucket.png'
import gitLab from '../assets/GitLab.png'

const SignInWithSAAS = (props) => {
    return (
        <div className="flex flex-col gap-4">
            {['Github', 'Bitbucket', 'Azure Devops', 'GitLab'].map((provider) => (
                <button
                    key={provider}
                    className="flex items-center justify-center gap-3 font-semibold text-txt-color rounded-lg border border-[#D8DAE5] bg-white px-6 xl:px-32 py-4 hover:bg-gray-50"
                    onClick={props.handleClick}
                >
                    <span className="h-5 w-5">
                        {provider === 'Github' && (
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2A10 10 0 002 12a10 10 0 006.84 9.49c.5.09.69-.21.69-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.19.58.69.48A10 10 0 0022 12 10 10 0 0012 2z" />
                            </svg>
                        )}
                        {provider === 'Bitbucket' && (<img src={bitBucket} className='h-full' />)}
                        {provider === 'Azure Devops' && (<img src={azure} className='h-full'/>)}
                        {provider === 'GitLab' && (<img src={gitLab} className='h-full'/>)}
                    </span>
                    Sign in with {provider}
                </button>
            ))}
        </div>
    );
};

export default SignInWithSAAS;