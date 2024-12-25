import React,{useState} from 'react'
import Title from '../Components/Title'
import { NavLink } from 'react-router-dom'
import { FiLogOut, FiRefreshCw, FiMenu } from 'react-icons/fi'
import { IoCallOutline,IoSettingsOutline,IoSearchOutline } from 'react-icons/io5'
import { FaChevronDown, FaCode} from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti"
import { LuBookText } from "react-icons/lu";
import { HiOutlineCloud } from 'react-icons/hi'
import repos from '../data.js'
import Card from '../Components/Card.jsx'

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Repositories');
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className='w-screen h-screen md:flex'>

        {/* Navbar */}
        <div className='absolute md:relative w-full md:w-1/3 xl:w-1/6 md:h-screen bg-bgColor border border-[#E9EAEB] flex flex-col md:justify-between'>
          <div className='md:pt-6 flex flex-col gap-4'>
            <div className='md:flex md:flex-col gap-5 items-center justify-between md:justify-start p-4 md:p-0'>
              <div className='flex justify-between items-center p-4 md:p-0 md:block'>
              <Title/>
              <FiMenu 
                className={`md:hidden`}
                onClick={() => setIsOpen(!isOpen)}
              />
              </div>
              <div className={`items-center justify-between md:justify-start gap-2 border rounded-lg px-3 py-2 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                <span>UtkarshDhairyaPa...</span>
                <FaChevronDown width={20}/>
              </div>
            </div>
            <div className={`px-4 w-full ${isOpen ? 'flex' : 'hidden'} md:flex flex-col`}>
              <button
                className={`w-full rounded-lg px-3 py-2 flex gap-2 font-semibold transition-colors items-center
                  ${
                    activeTab === 'Repositories' ? 
                    'content-border bg-[#1570EF] text-white' :
                    'hover:bg-gray-200 text-btn-txt'
                  }`
                }
                onClick={() => setActiveTab('Repositories')}
              >
                <TiHomeOutline width={20}/>
                Repositories
              </button>

              <button
                className={`w-full rounded-lg px-3 py-2 flex gap-2 font-semibold transition-colors items-center
                  ${activeTab === 'AI Code Review' ? 'content-border bg-[#1570EF] text-white' : 'hover:bg-gray-200 text-btn-txt'}`
                }
                onClick={() => setActiveTab('AI Code Review')}
              >
                <FaCode width={20}/>
                AI Code Review
              </button>

              <button
                className={`w-full rounded-lg px-3 py-2 flex gap-2 font-semibold transition-colors items-center
                  ${activeTab === 'Cloud Security' ? 'content-border bg-[#1570EF] text-white' : 'text-btn-txt hover:bg-gray-200'}`
                }
                onClick={() => setActiveTab('Cloud Security')}
                >
                <HiOutlineCloud width={20} />
                Cloud Security
              </button>

              <button
                className={`w-full rounded-lg px-3 py-2 flex gap-2 font-semibold transition-colors items-center
                  ${activeTab === 'How to Use' ? 'content-border bg-[#1570EF] text-white' : 'text-btn-txt hover:bg-gray-200'}`
                }
                onClick={() => setActiveTab('How to Use')}
              >
                <LuBookText width={20}/>
                How to Use
              </button>

              <button
                className={`w-full rounded-lg px-3 py-2 flex gap-2 font-semibold transition-colors items-center 
                  ${activeTab === 'Settings' ? 'content-border bg-[#1570EF] text-white' : 'text-btn-txt hover:bg-gray-200'}`
                }
                onClick={() => setActiveTab('Settings')}
              >
                <IoSettingsOutline width={20}/>
                Settings
              </button>
            </div>
          </div>
          
          <div className={`px-4 md:py-6 ${isOpen ? 'flex' : 'hidden'} md:flex flex-col`}> 
            {
              ['Support','Logout'].map((feature)=>(
                <NavLink key={feature} to={(feature === 'Logout') ? '/' : {feature}}>
                  <button
                    className="flex items-center justify-center py-2 px-3 gap-2 font-semibold text-[#414651] rounded-md bg-white hover:bg-gray-50"
                  >
                    <span className='h-6 md:w-6 flex items-center'>
                      {feature === 'Support' && <IoCallOutline />}
                      {feature === 'Logout' && <FiLogOut />}
                    </span>
                    <p>{feature}</p>
                  </button>
                </NavLink>
              ))
            }
          </div>
        </div>
        
        {/* Repositories */}
        <div className='mt-24 md:mt-0 md:w-5/6 py-6 md:p-6 bg-bgSecondryColor'> 
          <div className='rounded-xl container border-1 border-[#E9EAEB] bg-bgColor'>
            <header className='border-b-[1px] border-[#E9EAEB]'>
              <div className='py-5 px-6 flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row gap-4 justify-between'>
                  <div className='md:w-1/3 xl:w-4/6 flex flex-col gap-1'>
                    <h1 className='font-semibold text-2xl text-privacy-txt'>Repositories</h1>
                    <p className='text-sm text-[#414651]'>33 total repositories</p>
                  </div>

                  <div className='flex gap-3'>
                    <button className='h-fit rounded-lg py-2.5 px-3.5 flex gap-1 btn-shadow bg-bgColor border-2 border-[#D5D7DA]'>
                      <FiRefreshCw />
                      <span className='text-sm text-[#414651] px-0.5'>Refresh All</span>
                    </button>
                    <button className='h-fit rounded-lg py-2.5 px-3.5 flex gap-1 btn-shadow bg-[#1570EF] content-border text-white'>
                      <FaPlus />
                      <span className='text-sm text-bgColor px-0.5'>Add Repository</span>
                    </button>
                  </div>
                </div>

                <form className='md:w-1/2 lg:w-3/12 rounded-lg btn-shadow-new py-2.5 px-3.5 flex items-center gap-2 border-1 border-[#D5D7DA]'>
                  <IoSearchOutline width={25}/>
                  <input className='xl:px-0.5 text-[#414651] outline-0' placeholder='Search Repositories'></input>
                </form>
              </div>
            </header>

            <main>
              {
                repos.map((repo) => (
                    <Card key={repo.title} repo = {repo}/>
                ))
              }
            </main>
          </div>
        </div>

      </div>
  )
}

export default DashboardPage