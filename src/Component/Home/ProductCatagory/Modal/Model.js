import React from "react";

const Model = ({ buymodal }) => {
const {name,location,resell,seller_name}=buymodal

  return (
    <>
      <input type="checkbox" id="Model" className="modal-toggle bg-glass" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form action="">
            
          <input
            type="text"
            defaultValue={name}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            defaultValue={resell}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            defaultValue={seller_name}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            defaultValue={location}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            
            placeholder="Type your phone number"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <br />
            <button className="btn btn-outline btn-warning w-full">Submit</button>
          </form>
        

          
          
        </div>
      </div>
    </>
  );
};

export default Model;
git init
git add .md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-mohiuddintanvir.git
git push -u origin main
