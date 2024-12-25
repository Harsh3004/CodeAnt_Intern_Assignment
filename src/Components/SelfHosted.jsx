import React from 'react'
import gitLab from '../assets/GitLab.png'
import { GoKey } from 'react-icons/go'

const SelfHosted = (props) => {
  return (
    <div className="flex flex-col items-center gap-4">
        {['Self Hosted GitLab', 'Sign In with SSO'].map((provider) => (
            <button
                key={provider}
                className="flex items-center justify-center gap-3 font-semibold text-txt-color rounded-lg border border-[#D8DAE5] bg-white px-6 xl:px-32 py-4 hover:bg-gray-50"
                onClick={props.handleClick}
            >
                <span className="h-5 w-5 flex items-center">
                    {provider === 'Self Hosted GitLab' && (<img src={gitLab} className='h-full'/>)}
                    {provider === 'Sign In with SSO' && (<GoKey/>)}
                </span>
                {provider}
            </button>
        ))}
    </div>
  )
}

export default SelfHosted