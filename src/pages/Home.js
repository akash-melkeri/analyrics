import { BiSearch } from 'react-icons/bi';
// ,BiLike,BiDislike
// import {AiOutlineYoutube} from 'react-icons/ai'
import MusicCard from '../components/MusicCard';
import axios from 'axios';
import React, { useState,useCallback } from 'react';
import { debounce } from "lodash";


function Home() {
  const [songs, updateSongs] = useState({});
  const [search, updateSearch] = useState("");
  const [isLoading, updateLoading] = useState("first");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handler = useCallback(debounce(searchInput, 300), []);
  function searchInput(query){
    axios.get('/api/search/',{ params: { query: query } })
      .then(function (response) {
        if(response.data){
          updateSongs(response.data)
        }
      })
      .catch(function (error) {
        console.log(error);
      }).finally(()=>{
        updateLoading('idle');
      });
  }
  

  return (
    <div className="tw-h-full tw-w-full tw-bg-black/30 tw-backdrop-blur-sm tw-overflow-y-auto">
      <div className='tw-flex tw-justify-center tw-container tw-mx-auto tw-py-4'>
        <div className='tw-flex tw-justify-between tw-items-center tw-bg-gray-600/50 tw-backdrop-blur-sm tw-gap-x-3 tw-rounded-full tw-overflow-hidden tw-py-2 tw-px-3 tw-mx-4 tw-w-full tw-max-w-md tw-cursor-pointer'>
            <input name="ok" value={search} onChange={(event,context)=>{updateSearch(event.target.value);handler(event.target.value);updateLoading("loading")}} size='6' autoComplete="off" className='tw-cursor-pointer tw-text-slate-100 tw-grow tw-bg-transparent tw-outline-none' />
            <span className='tw-pointer tw-bg-gradient-to-r tw-from-[#f02fc2] tw-to-[#6094ea] tw-bg-[length:200%] tw-text-white  tw-rounded-full tw-ease-in tw-duration-150 tw-p-2 hover:tw-bg-right-top'>
                <BiSearch className='tw-text-2xl' title='Search' />
            </span>
        </div>
      </div>
      <div className='tw-w-full tw-mx-auto tw-absolute  tw-z-10'>
        <div className='tw-container tw-mx-auto'>
          {
          songs.length?
            <div className='tw-grid tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-px-4 tw-pb-4'>
              {songs.map((song) => (
                <MusicCard key={song.key} song={song} />
              ))}
            </div>
          :
            (isLoading === 'first') || (!search.length) ?
              <div className='tw-mx-4 tw-rounded-lg tw-bg-slate-400/40 tw-border tw-border-slate-500 tw-backdrop-blur-xl tw-shadow tw-overflow-hidden tw-p-4'>Search something</div>
            :
              isLoading === 'idle'?
                <div className='tw-mx-4 tw-rounded-lg tw-bg-red-300/40 tw-border tw-border-red-500 tw-backdrop-blur-xl tw-shadow tw-overflow-hidden tw-p-4' >No songs found</div>
              :
                <div className='tw-mx-4 tw-rounded-lg tw-bg-sky-300/40 tw-border tw-border-sky-500 tw-backdrop-blur-xl tw-shadow tw-overflow-hidden tw-p-4' >Loading</div>
          
          }
        </div>
        
      </div>
    </div>
  );
}

export default Home;
