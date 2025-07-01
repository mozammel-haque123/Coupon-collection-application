import { useContext, useState } from "react";
import { ContextApi } from "../AuthProvaider/AuthProvaider";
import { useNavigate } from "react-router-dom";

const UpdateProfaile = () => {
       const {user,setUser,updatePhotoName,sendPasswordResetEmailHandle,logoutehandlae} = useContext(ContextApi)
     const navigate = useNavigate()
         const [error,setError] = useState('')
      //  update user info
      const updateHandle = (e)=>{
          e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photos = form.photo.value;
    // এটার মাধ্যমে user তার নাম, ফটো পুনোরায় আপডেট করতে পারবে
    updatePhotoName({ displayName: name, photoURL: photos })
    .then(()=>{
     setUser({ ...user, displayName: name, photoURL: photos });
    })
    .catch((error) => {
        console.log("Update error:", error.message);
        setError("There was a problem updating the profile!");
      });

      }
  //  ইউজার যদি অ্যাকাউন্ট ডিলিট করতে চায় তাহলে ইনপুট এর মধ্যে ইমেইল দিতে হবে তারপর রিসিভ বাটনে ক্লিক করতে হবে
    const handleResat = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    sendPasswordResetEmailHandle(email)
        .then(() => {
     alert("Reset email sent. Now going to Gmail...");

      // Firebase থেকে সাইন আউট
      return logoutehandlae()
    })
    .then(() => {
      // তারপর ইউজারকে সরাসরি নতুন ট্যাবে জিমেইলে নিয়ে যাবে এবং ইনপুটে পাসওয়ার্ড দিলেই তার অ্যাকাউন্ট ডিলিট হয়ে যাবে
     window.open("https://mail.google.com/", "_blank");
      setTimeout(() => {
        // ওয়েব পেজে ইউজারকে সরাসরি হোম পেজে নিয়ে যাবে
        navigate('/');
      }, 1000); // ১ সেকেন্ড delay
    })
    .catch((error) => {
      console.error("Reset বা Logout Error:", error.message);
      alert("Something went wrong. Please try again.");
    });
    }
    return (
        <div>
           <form onSubmit={updateHandle}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Update Profile</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600">Name</label>
        <input
        defaultValue={user && `${user?.displayName}`}
          type="text"
          name="name"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Photo URL</label>
        <input
          type="text"
          name="photo"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="https://example.com/photo.jpg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-green-400 hover:to-yellow-400 transition-all duration-500"
      >
        Update Profile
      </button>
    </form>
        <div>
         {error && (
   <p className="text-red-600 text-sm font-medium text-center mt-2">
            {error}
           </p>
           )}
          </div>

      {/* // ইমেইল ইনপুট নিয়ে রিসেট বাটন দিলে Gmail এ রিডাইরেক্ট করুন এবং লগআউট করুন */}
     <form onSubmit={handleResat} className="my-8">
     <div>
        <label className="block text-sm text-amber-500 font-medium flex gap-2 my-1">If you would like to receive your account, please enter your <p className="block text-sm font-medium text-red-600">{user && `${user.email}`}</p>   email.</label>
        <input
          type="email"
          name="email"
           defaultValue={`Type your email @ to reset.`}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
      </div> 
      <div className="text-center my-2">
     <button className="btn">resat acaunt</button>   
      </div>
    
     </form>
        </div>
    );
};

export default UpdateProfaile;