import React from 'react'
import ProfileSection from '../components/ProfileSection';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';

const HomePage = () => {
  return (
    <div className='flex justify-center gap-30'>
      {/* left section */}
      <div className = "mt-10">
        <ProfileSection />
      </div>

       {/* right section */}
      <div className = "mt-10">
         <CreatePost />
         <Feed />
      </div>

    </div>
  )
}

export default HomePage