import React from 'react';
import profile from './Images/profile.JPG';

function Home() {
  return (
    <section className='container-fluid main'>
<div className='container main-con'>
    <img src={profile} alt='shivkumar suthar' className='profile' />
    <div className=''>
      <h2 className=''>I'm Mr. Shivkumar Suthar</h2>
    </div>
    <div className='social'>
      <a href='/'><i class="fa-brands fa-github"></i></a>
      <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
      <a href='/'><i class="fa-brands fa-behance"></i></a>
      <a href='/'><i class="fa-brands fa-instagram"></i></a>
      <a href='/'><i class="fa-brands fa-facebook"></i></a>

    </div>
</div>
    </section>
  )
}

export default Home
