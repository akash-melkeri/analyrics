import { BiSearch,BiLike,BiDislike } from 'react-icons/bi';
import {AiOutlineYoutube} from 'react-icons/ai'

const people = [


    {
      name: 'Tujhe Kitna Chahein Aur (Film Version) [From \"Kabir Singh\"]',
      title: 'Jubin Nautiyal',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/94/b2/2d/94b22de6-3ff5-9461-b2dd-d511f806a11b/8903431772756_cover.jpg/400x400cc.jpg',
    },{
        name: 'Tujhe Kitna Chahne Lage',
        title: 'Arijit Singh',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
          'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/400x400cc.jpg',
      },{
        name: 'Tujhe Kitna Chahein Aur Acoustic (From \"T-Series Acoustics\")',
        title: 'Mithoon & Jubin Nautiyal',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
          'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/00/93/f4/0093f404-809d-4e40-49d8-8d404b024aa0/8903431801449_cover.jpg/400x400cc.jpg',
      },
    // More people...
  ]

function Home() {
  return (
    <div className="tw-h-full tw-w-full tw-bg-black/30 tw-backdrop-blur-sm">
      <div className='tw-flex tw-justify-center tw-container tw-mx-auto tw-py-4'>
        <div className='tw-flex tw-justify-between tw-items-center tw-bg-gray-600/50 tw-backdrop-blur-sm tw-gap-x-3 tw-rounded-full tw-overflow-hidden tw-py-2 tw-px-3 tw-mx-4 tw-w-full tw-max-w-md tw-cursor-pointer'>
            <input name="ok" size={'6'} className='tw-cursor-pointer tw-text-slate-100 tw-grow tw-bg-transparent tw-outline-none' />
            <span className='tw-pointer tw-bg-gradient-to-r tw-from-[#f02fc2] tw-to-[#6094ea] tw-bg-[length:200%] tw-text-white  tw-rounded-full tw-ease-in tw-duration-150 tw-p-2 hover:tw-bg-right-top'>
                <BiSearch className='tw-text-2xl' title='Search' />
            </span>
        </div>
      </div>
      {/* <div className='tw-flex tw-justify-center tw-container tw-mx-auto tw-py-4'>Resulaksdaskjts</div> */}
      <div className='tw-w-full tw-mx-auto tw-absolute  tw-z-10'>
        <div className='tw-container tw-mx-auto'>
            <div className='tw-px-4'>
            <ul className="tw-grid tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-2 lg:tw-grid-cols-3">
                {people.map((person) => (
                    <li key={person.email} className="tw-col-span-1 tw-divide-y tw-divide-slate-500 tw-rounded-lg tw-bg-slate-400/40 tw-border tw-border-slate-500 tw-backdrop-blur-xl tw-shadow tw-overflow-hidden">
                    <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-space-x-6 tw-p-6">
                        <img className="tw-h-14 tw-w-14 tw-flex-shrink-0 tw-rounded tw-bg-gray-300" src={person.imageUrl} alt="" />
                        <div className="tw-flex-1 tw-truncate">
                        <div className="tw-flex tw-items-center tw-space-x-3">
                            <h3 className="tw-truncate tw-text-sm tw-font-medium tw-text-slate-100">{person.name}</h3>
                            {/* <span className="tw-inline-block tw-flex-shrink-0 tw-rounded-full tw-bg-green-100 tw-px-2 tw-py-0.5 tw-text-xs tw-font-medium tw-text-green-800">
                            {person.role}
                            </span> */}
                        </div>
                        <p className="tw-mt-1 tw-truncate tw-text-left tw-text-sm tw-text-slate-400">{person.title}</p>
                        </div>
                    </div>
                    <div>
                        <div className="tw--mt-px tw-flex tw-divide-x tw-divide-slate-500">
                        <div className="tw-flex tw-w-0 tw-flex-1 tw-ease-out tw-duration-300 hover:tw-bg-gradient-to-r tw-from-sky-400 tw-to-sky-500">
                            <a
                            href={`mailto:${person.email}`}
                            className="tw-relative tw--mr-px tw-inline-flex tw-w-0 tw-flex-1 tw-items-center tw-justify-center tw-rounded-bl-lg tw-border tw-border-transparent tw-py-4 tw-text-sm tw-font-medium tw-text-slate-200 hover:tw-text-white"
                            >
                            <BiLike className='tw-text-2xl' title='Like' />
                            {/* <EnvelopeIcon className="tw-h-5 tw-w-5 tw-text-slate-400" aria-hidden="true" /> */}
                            <span className="tw-ml-3">Like</span>
                            </a>
                        </div>
                        <div className="tw--ml-px tw-flex tw-w-0 tw-flex-1 hover:tw-bg-gradient-to-r tw-from-red-500 tw-to-red-600">
                            <a
                            href={`tel:${person.telephone}`}
                            className="tw-relative tw-inline-flex tw-w-0 tw-flex-1 tw-items-center tw-justify-center tw-rounded-br-lg tw-border tw-border-transparent tw-py-4 tw-text-sm tw-font-medium tw-text-slate-200 hover:tw-text-white"
                            >
                            <AiOutlineYoutube className='tw-text-2xl' title='Search' />
                            {/* <PhoneIcon className="tw-h-5 tw-w-5 tw-text-gray-400" aria-hidden="true" /> */}
                            <span className="tw-ml-3">Youtube</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
