import React from 'react';

const UnicSection = () => {
    return (
        <div>
     <div className="hero min-h-screen bg-base-200">
      
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="w-1/2 rounded-lg shadow-2xl" />
    <div c>
      <h1 className="text-5xl font-bold text-center">Please Give your valuable review</h1>
      <input type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs mb-5 mt-10 " /> <br />

      <input type="text" placeholder="Phone number" className="input input-bordered input-secondary w-full max-w-xs  mb-5 " /> <br />

      <input type="text" placeholder="Years of journey with us " className="input input-bordered input-secondary w-full max-w-xs mb-5 " /> <br />
      <textarea className="textarea textarea-secondary w-1/2" placeholder="Share your expeience"></textarea> <br />

      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default UnicSection;