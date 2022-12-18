import { BiLike } from 'react-icons/bi';
// ,BiDislike
import {AiOutlineYoutube} from 'react-icons/ai';
import { NotificationManager} from 'react-notifications';


function MusicCard({song}) {
  function working(){
    NotificationManager.info('Still working on it.');
  }
  return (
    <div className="tw-col-span-1 tw-divide-y tw-divide-slate-500 tw-rounded-lg tw-bg-slate-400/40 tw-border tw-border-slate-500 tw-backdrop-blur-xl tw-shadow tw-overflow-hidden">
      <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-space-x-6 tw-p-6">
        <img className="tw-h-14 tw-w-14 tw-flex-shrink-0 tw-rounded tw-bg-gray-300" src={song.coverart} alt="" />
        <div className="tw-flex-1 tw-truncate">
          <div className="tw-flex tw-items-center tw-space-x-3">
              <h3 className="tw-truncate tw-text-sm tw-font-medium tw-text-slate-100">{song.title}</h3>
          </div>
          <p className="tw-mt-1 tw-truncate tw-text-left tw-text-sm tw-text-slate-400">{song.subtitle}</p>
        </div>
      </div>
      <div>
        <div className="tw--mt-px tw-flex tw-divide-x tw-divide-slate-500">
          <div className="tw-flex tw-w-0 tw-flex-1 tw-ease-out tw-duration-300 hover:tw-bg-gradient-to-r tw-from-sky-400 tw-to-sky-500">
            <span

              // href={`https://www.youtube.com/results?search_query=${song.title}%20${song.subtitle}`}
              onClick={working}
              className="tw-relative tw--mr-px tw-inline-flex tw-w-0 tw-flex-1 tw-items-center tw-justify-center tw-rounded-bl-lg tw-border tw-border-transparent tw-py-4 tw-text-sm tw-font-medium tw-text-slate-200 hover:tw-text-white"
            >
              <BiLike className='tw-text-2xl' title='Like' />
              <span className="tw-ml-3">Like</span>
            </span>
          </div>
          <div className="tw--ml-px tw-flex tw-w-0 tw-flex-1 hover:tw-bg-gradient-to-r tw-from-red-500 tw-to-red-600">
            <a
              target='_black'
              href={`https://www.youtube.com/results?search_query=${song.title}%20${song.subtitle}`}
              className="tw-relative tw-inline-flex tw-w-0 tw-flex-1 tw-items-center tw-justify-center tw-rounded-br-lg tw-border tw-border-transparent tw-py-4 tw-text-sm tw-font-medium tw-text-slate-200 hover:tw-text-white"
            >
              <AiOutlineYoutube className='tw-text-2xl' title='Search' />
              <span className="tw-ml-3">Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
