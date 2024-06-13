export default function TestDeleteAccount() {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-white sm:bg-[#EEF2F6] text-[#364152]">
      <div className=" bg-white p-8 rounded-xl max-w-[30rem] flex flex-col items-center gap-6">
        <div className="flex gap-4 text-2xl font-bold items-center mb-4">
          <img className="w-4 h-5 object-cover" src="delete.png" alt="" />
          <p> Delete Account</p>
        </div>
        <div className="w-full">
          <p className="font-semibold text-sm sm:text-base mb-2">Reason for Deletion</p>
          <input
            type="text"
            className="border border-[#B7B6B6] text-sm sm:text-base py-3 px-3 rounded-xl w-full hover:outline-none outline-none"
            placeholder="Reason*"
          />
        </div>
        <div>
          <p className="font-semibold text-sm sm:text-base mb-2">
            Please enter your current password to proceed to account deletion.
          </p>
          <input
            type="text"
            className="border border-[#B7B6B6] text-sm sm:text-base py-3 px-3 rounded-xl w-full hover:outline-none outline-none"
            placeholder="Enter your password*"
          />
        </div>
        <p className="text-[#F30505] text-sm sm:text-base">
          Deleting your account is permanent and cannot be undone. Please make
          sure that you have saved any important data before proceeding. If you
          have any doubts, you can always cancel the deletion process.
        </p>
        <button className="hover:bg-[#F30505] bg-[#ff4b4b] w-full text-white py-4 rounded-2xl text-semibold">Delete Account</button>
      </div>
    </div>
  );
}
