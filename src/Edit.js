import React, { Fragment,useState } from 'react';
import Modal from './Modal';




const Edit=()=>{
       // Initialize state for user details
   const [userDetails, setUserDetails] = useState({
    name:'',
    username: '',
    dob:'',
    bio: '',
    gender:''
  });

  
  // handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };


  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
    const [showModal,setShowModal]=useState(false);
    return(
        <>
        <div className="p-10 text-center ">
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 'onClick={()=>setShowModal(true)}>
                Edit-profile
            </button>

        </div>
        <Modal isVisible={showModal} onClose={()=>
            setShowModal(false)
        } >
            <div className='font-abc py-6 px-6 lg:px-8 text-left'>
                
                {/* <h2 className='mb-4 text-xl font-medium text-gray-600 bg-gray-300'>Edit profile</h2> */}
             
                <div>
            <h2 className='text-3xl font-abc text-gray-600 mb-4 p-0'>Edit Profile</h2>
          </div>    
                <form onSubmit={handleSubmit} className='border-radius-2px'>
                    <div className="flex flex-col items-left">
                    <label htmlFor="imageInput" className="rounded-full h-20 w-20 border border-gray-300 overflow-hidden flex items-center justify-center">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            className="h-full w-full object-cover "
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-300 shadow-md" >
            <span className="text-2xl flex items-center justify-center">+</span>
          </div>
        )}
      </label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
    <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2 text-sm ">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 text-sm text-gray-700 border-none bottom-1 border-black background-none boxShadow-none focus-outline-none focus:ring focus:border-blue-500 items-left shadow-md "
          />
        </div>  
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2  text-sm">Username</label>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 text-sm text-gray-700  focus:outline-none focus:ring  border-none borderBottom-1px solid #000 background-none boxShadow-none  focus:border-blue-500 items-left shadow-md "
          />
        </div>   
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2  text-sm">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={userDetails.dob}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 text-sm text-gray-700  focus:outline-none focus:ring  border-none borderBottom-1px solid #000 background-none boxShadow-none  focus:border-blue-500 shadow-md"
            />
            </div>
            {/* <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2 text-sm">Gender</label>
          <input
            type="text"
            name="gender"
            value={userDetails.gender}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500 items-left shadow-md"
          />
        </div> */}
        <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2  text-sm">Bio</label>
              <textarea
                name="bio"
                value={userDetails.bio}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2 text-sm text-gray-700 focus:outline-none  border-none borderBottom-1px solid #000 background-none boxShadow-none  focus:ring focus:border-blue-500 shadow-md"
              />
            </div>
            <button
              
              type="submit"
              className="w-full  bg-blue-700  text-white  hover:bg-blue-800 focus:ring-4  border-none borderBottom-1px solid #000 background-none boxShadow-none  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Save
            </button>  
        

                </form>
         </div>
        
        </Modal>
        </>
        
    );
    
}
export default Edit;