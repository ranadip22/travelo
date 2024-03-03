// import { useState } from "react";
// import "./MainContent.css";

// function MainContent({ activeSection }) {
//   // const [edit, setEdit] = useState(false);
//   const [editfname, setEditfname] = useState(false);
//   const [editlname, setEditlname] = useState(false);
//   const [editdob, setEditdob] = useState(false);
//   const [editgender, setEditgender] = useState(false);
//   const [editphone, setEditphone] = useState(false);
//   const [editemail, setEditemail] = useState(false);
//   const [edituname, setEdituname] = useState(false);
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [uname, setUname] = useState("");
//   const [details, setDetails] = useState('');
//   const [editedDetail, setEditedDetail] = useState('');
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleEditClick = (detailKey) => {
//     // setEditedDetail(detailKey);
//     setOldPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//   };

//   const handleSaveChanges = () => {
//     if (editedDetail === 'password' && newPassword === confirmPassword) {
//       setDetails((prevDetails) => ({
//         ...prevDetails,
//         password: newPassword,
//       }));
//     }

//     // setEditedDetail('');
//     setOldPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//   };

//   const handleCancelEdit = () => {
//     // setEditedDetail('');
//     setOldPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <>
//       {activeSection === "profile" && (
//         // <div className="booking-history active">
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           setEditfname(!editfname);
//           setEditlname(!editlname);
//           setEditdob(!editdob);
//           setEditgender(!editgender);
//           setEditphone(!editphone);
//           setEditemail(!editemail);
//           setEdituname(!edituname);
//         }}
//         >
//           <main className="home-section">
//             <div className="home-input">
//               <label htmlFor="fname">
//                 First Name{" "}
//                 {editfname ? (
//                   <input type="text"
//                     value={fname}
//                     onChange={(e) => {
//                       setFname(e.target.value);
//                     }}
//                   />
//                 ) : (
//                   <b>{fname}</b>
//                 )}
//               </label>
//             </div>
//             <div className="home-input">
//               <label htmlFor="lname">
//                 Last Name{" "}
//                 {editlname ? (
//                   <input type="text"
//                     value={lname}
//                     onChange={(e) => {
//                       setLname(e.target.value);
//                     }}
//                   />
//                 ) : (
//                   <b>{lname}</b>
//                 )}
//               </label>
//             </div>
//             <div className="home-input">
//               <label htmlFor="dob">
//                 Date of Birth{" "}
//                 {editdob ? (
//                   <input type="date"
//                     value={dob}
//                     onChange={(e) => {
//                       setDob(e.target.value);
//                     }}
//                   />
//                 ) : (
//                   <b>{dob}</b>
//                 )}
//               </label>
//             </div>
//             <div className="home-input">
//               <label htmlFor="gender">
//                 Gender{" "}
//                 {editgender ? (
//                   <>
//                     <input type="radio"
//                       value="Male"
//                       onChange={(e) => {
//                         setGender(e.target.value);
//                       }}
//                     /><label>Male</label>
//                     <input type="radio"
//                       value="Female"
//                       onChange={(e) => {
//                         setGender(e.target.value);
//                       }}
//                     /><label>Female</label>
//                   </>
//                 ) : (
//                   <b>{gender}</b>
//                 )}
//               </label>
//             </div>
//             <div className="home-input">
//               <label htmlFor="phone">
//                 Mobile Number{" "}
//                 {editphone ? (
//                   <input type="text"
//                     value={phone}
//                     onChange={(e) => {
//                       setPhone(e.target.value);
//                     }}
//                   />
//                 ) : (
//                   <b>{phone}</b>
//                 )}
//               </label>
//             </div>
//             <div className="home-input">
//               <label htmlFor="email">
//                 E-mail ID{" "}
//                 {editemail ? (
//                   <>
//                     <input type="text"
//                       value={email}
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                     />
//                     <i class="fa-solid fa-envelope icon"></i>
//                   </>
//                 ) : (
//                   <b>{email}</b>
//                 )}
//               </label>
//             </div>
//             <button type="submit" className="button-1">{editfname} Update</button>
//           </main>
//         </form>
//         // </div>
//       )}
//       {activeSection === "bookings" && (
//         <div className="booking-history">
//           <main className="home-section"></main>
//         </div>
//       )}
//       {activeSection === "settings" && (
//         <div className="booking-history">
//           <form onSubmit={(e) => {
//             e.preventDefault();
//             // setEdit(!edit);
//           }}
//           >
//             <main className="home-section">
//               <div className="home-input">
//                 <label htmlFor="uname">
//                   Username{" "}
//                   {edituname ? (
//                     <>
//                       <input type="text"
//                         value={uname}
//                         onChange={(e) => {
//                           setUname(e.target.value);
//                         }}
//                       />
//                       <i class="fa-solid fa-user icon"></i>
//                     </>
//                   ) : (
//                     <b>{uname}</b>
//                   )}
//                 </label>
//               </div>
//               <div className="home-input">
//                 <label htmlFor="curr-pwd">
//                   Change Password
//                   {Object.entries(details).map(([key, value]) => (
//                     <div key={key}>
//                       <p>
//                         {key}: {editedDetail === key ? (
//                           key === 'password' ? (
//                             <div>
//                               <input
//                                 type="password"
//                                 placeholder="Old Password"
//                                 value={oldPassword}
//                                 onChange={(e) => setOldPassword(e.target.value)}
//                               />
//                               <input
//                                 type="password"
//                                 placeholder="New Password"
//                                 value={newPassword}
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                               />
//                               <input
//                                 type="password"
//                                 placeholder="Confirm Password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                               />
//                             </div>
//                           ) : (
//                             <input
//                               type="text"
//                               value={value}
//                             // onChange={(e) => setEditedInfo(e.target.value)}
//                             />
//                           )
//                         ) : (
//                           value
//                         )}
//                       </p>
//                       {editedDetail === key ? (
//                         <div>
//                           <button onClick={handleSaveChanges}>Save</button>
//                           <button onClick={handleCancelEdit}>Cancel</button>
//                         </div>
//                       ) : (
//                         <span className="edit-button" onClick={() => handleEditClick(key)}>
//                           Edit
//                         </span>
//                       )}
//                     </div>
//                   ))}
//                 </label>
//               </div>
//               <button type="submit" className="button-1">{editfname}Update</button>
//             </main>
//           </form>
//         </div>
//       )}
//       {activeSection === "change" && (
//         <div className="change-pwd">
//           <main className="home-section">
//           <label htmlFor="curr-pwd">
//                   Change Password
//                   {Object.entries(details).map(([key, value]) => (
//                     <div key={key}>
//                       <p>
//                         {key}: {editedDetail === key ? (
//                           key === 'password' ? (
//                             <div>
//                               <input
//                                 type="password"
//                                 placeholder="Old Password"
//                                 value={oldPassword}
//                                 onChange={(e) => setOldPassword(e.target.value)}
//                               />
//                               <input
//                                 type="password"
//                                 placeholder="New Password"
//                                 value={newPassword}
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                               />
//                               <input
//                                 type="password"
//                                 placeholder="Confirm Password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                               />
//                             </div>
//                           ) : (
//                             <input
//                               type="text"
//                               value={value}
//                             // onChange={(e) => setEditedInfo(e.target.value)}
//                             />
//                           )
//                         ) : (
//                           value
//                         )}
//                       </p>
//                       {editedDetail === key ? (
//                         <div>
//                           <button onClick={handleSaveChanges}>Save</button>
//                           <button onClick={handleCancelEdit}>Cancel</button>
//                         </div>
//                       ) : (
//                         <span className="edit-button" onClick={() => handleEditClick(key)}>
//                           Edit
//                         </span>
//                       )}
//                     </div>
//                   ))}
//                 </label>
//           </main>
//         </div>
//       )}
//     </>
//   );
// };

// export default MainContent;

import { useState } from "react";
import "./MainContent.css";

function MainContent({ activeSection }) {
  const [editFname, setEditFname] = useState(false);
  const [fname, setFname] = useState("");
  
  const handleEditFname = () => {
    setEditFname(!editFname);
  };

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleFnameSubmit = (e) => {
    e.preventDefault();
    setEditFname(false); // Disable edit mode after submitting
    // Perform any additional logic (e.g., API call) to update the first name
    console.log("Updated first name:", fname);
  };

  return (
    <>
      {activeSection === "profile" && (
        <form onSubmit={handleFnameSubmit}>
          <main className="home-section">
            <div className="home-input">
              <label htmlFor="fname">
                First Name{" "}
                {editFname ? (
                  <input
                    type="text"
                    value={fname}
                    onChange={handleFnameChange}
                  />
                ) : (
                  <b>{fname}</b>
                )}
              </label>
              <button type="button" className="button-1" onClick={handleEditFname}>
                {editFname ? "Cancel" : "Edit"}
              </button>
              {editFname && (
                // <button type="submit">Save</button>
                <button type="submit" className="button-1">Update</button>
              )}
            </div>
          </main>
        </form>
      )}
      {/* Add other sections */}
    </>
  );
}

export default MainContent;
