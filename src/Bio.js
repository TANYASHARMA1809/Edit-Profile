import React,{useState} from 'react';



const Bio=()=>{
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
  
 
 
  return(
  
    
    <div className=" w-full bg-gray-100 p-4 flex flex-col items-center justify-center">
      
      <div className=" w-2/4 h-2/4 border-2 border-black-300 bg-gray-200 rounded-md p-4 flex flex-col items-center justify-center">
    
      
      <h2 className="text-5xl  mb-4 text-stone-800 items-left subpixel-antialiased text-shadow-md">Edit profile</h2>
      <div className="w-full bg-white rounded-md p-6 border-2 border-slate-800 drop-shadow-md shadow-md">
      
      
      <form onSubmit={handleSubmit} className='space-y-6' >
        
      


      <div className="flex flex-col items-left">
      <label htmlFor="imageInput" className="rounded-full h-40 w-40 border border-gray-300 overflow-hidden">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            className="h-full w-full object-cover "
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-300 shadow-md" >
            <span className="text-xl">Upload Image</span>
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
          <label className="block text-gray-600 font-medium mb-2 text-left text-xl ">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 border-none bottom-1 border-black focus:outline-none focus:ring focus:border-blue-500 items-left shadow-md"
          />
        </div>     
        
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2 text-left text-xl">Username</label>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 border-none bottom-1 border-black focus:outline-none focus:ring focus:border-blue-500 items-left shadow-md "
          />
        </div>
      
            <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2 text-left text-xl">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={userDetails.dob}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 border-none bottom-1 border-black focus:outline-none focus:ring focus:border-blue-500 shadow-md"
            />
            </div>
            <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2 text-left text-xl">Gender</label>
          <input
            type="text"
            name="gender"
            value={userDetails.gender}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2 border-none bottom-1 border-black focus:outline-none focus:ring focus:border-blue-500 items-left shadow-md"
          />
        </div>
           
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2 text-left text-xl">Bio</label>
              <textarea
                name="bio"
                value={userDetails.bio}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2 border-none bottom-1 border-black focus:outline-none focus:ring focus:border-blue-500 shadow-md"
              />
            </div>
            <button
              data-modal-target="popup-modal" data-modal-toggle="popup-modal"
              type="submit"
              className="bg-blue-500 text-white rounded-lg p-2  items-center justify-center w-2/4 shadow-lg shadow-blue-500/50 hover:bg-blue-600 box-border hover:shadow-xl"
            >
              Save
            </button>  
          </form>
        </div>
        </div>
        </div>
       
        
        
  );
}

export default Bio;
