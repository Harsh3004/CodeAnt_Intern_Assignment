import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import group from '../assets/Group.png'
import subtract from '../assets/Subtract.png'
import SignInWithSAAS from '../Components/SignInWithSAAS'
import SelfHosted from '../Components/SelfHosted'
import Title from '../Components/Title'

const SignInPage = () => {
    const [activeTab, setActiveTab] = useState('saas');
    const navigate = useNavigate();

    function handleClick(){
        navigate('/dashboard');
    }
    return (
        <div className='w-screen h-screen flex'>
            <div className='relative w-1/2 justify-center items-center hidden md:flex'>
                <img src={group} alt="group" className='top max-w-[474px] max-h-[322px] z-20'/>

                <div>
                    <img src={subtract} alt="logo" className='max-w-60 max-h-80 absolute bottom-0 left-0 z-10' />
                </div>
            </div>

            <div className="md:w-1/2 flex flex-col min-h-screen items-center justify-center bg-bgSecondryColor container">
                <div className='bg-bgColor w-10/12 rounded-xl container overflow-hidden'>
                    <div className="content flex flex-col py-9 px-4 lg:px-6 gap-5">
                        <div className="text-center flex flex-col gap-6 lg:gap-9">
                            <Title />
                            <h1 className="text-2xl lg:text-3xl font-semibold text-privacy-txt">Welcome to CodeAnt AI</h1>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-0.5 rounded-md bg-bgSecondryColor border border-[#E9EAEB]">
                                <button
                                className={`rounded-md px-4 py-2 lg:text-xl font-medium transition-colors ${activeTab === 'saas' ? 'bg-[#1570EF] shadow text-white' : 'hover:bg-gray-200 '
                                    }`}
                                onClick={() => setActiveTab('saas')}
                                >
                                    SAAS
                                </button>
                                <button
                                className={`rounded-md px-4 py-3 lg:text-xl font-medium transition-colors ${activeTab === 'self' ? 'bg-[#1570EF] shadow text-white' : 'hover:bg-gray-200'
                                    }`}
                                onClick={() => setActiveTab('self')}
                                >
                                    Self Hosted
                                </button>
                            </div>
                        </div>
                    </div>                
                    
                    <div className='py-6 w-fit mx-auto'>
                        {activeTab === 'saas' ? 
                        (<SignInWithSAAS handleClick={handleClick}/>) : 
                        (<SelfHosted handleClick={handleClick}/>)}
                    </div>
                </div>
                <p className='text-center py-4'>
                    By signing up you agree to the
                    <span className='font-bold text-privacy-txt'> Privacy Policy</span>.
                </p>
            </div>
        </div>
    )
}

export default SignInPage