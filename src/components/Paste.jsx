import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice'
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';
import { ShareSocial } from 'react-share-social';


const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const filteredPastes = pastes.filter((paste) =>
        paste.title.toLowerCase().includes(searchTerm.toLowerCase()
        ))

    const handleDlt = (pasteId) => {
        dispatch(removeFromPastes(pasteId))
    }

    return (
        <div className='flex flex-col gap-6 mt-6 text-white'>
            <input
                className='px-3 py-2 border rounded-md text-white'
                type="text"
                placeholder='enter title here'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />

            <div className='flex flex-col gap-4'>
                {
                    filteredPastes?.length > 0 ? filteredPastes?.map((paste) =>
                        <div className='border px-4 py-3 rounded-md'>
                            <h2 className='text-3xl'>
                                {paste.title}
                            </h2>
                            <p>{paste.content}</p>
                            <p>{paste.createdAt}</p>
                            <div className='flex justify-evenly mt-4'>
                                <button className='px-3 size-fit py-2 cursor-pointer bg-[#181818] hover:bg-[#383737] text-white rounded-md'>
                                    <Link to={`/?pasteId=${paste._id}`}>
                                        View
                                    </Link>
                                </button>
                                <button className='px-3 size-fit py-2 cursor-pointer bg-[#181818] hover:bg-[#383737] text-white rounded-md'>
                                    <Link to={`/?pasteId=${paste._id}`}>
                                        Edit
                                    </Link>
                                </button>
                                <button onClick={() => handleDlt(paste._id)} className='px-3 size-fit py-2 cursor-pointer bg-[#181818] hover:bg-[#383737] text-white rounded-md'>
                                    Delete
                                </button>
                                <button onClick={() => {
                                    navigator.clipboard.writeText(paste?.content);
                                    toast.success("content copied to clipboard");
                                }} className='px-3 size-fit py-2 cursor-pointer bg-[#181818] hover:bg-[#383737] text-white rounded-md'>
                                    Copy
                                </button>
                                <button className='px-3 size-fit py-2 cursor-pointer bg-[#181818] hover:bg-[#383737] text-white rounded-md'>
                                    Share
                                </button>
                            </div>
                        </div>
                    ) :
                        <div> <h2 className='text-3xl mb-4'>
                            No Paste Available </h2>
                            <NavLink to={"/"}>
                                <button className='px-3 size-fit py-2 cursor-pointer flex justify-center mx-auto bg-[#181818] hover:bg-[#383737] text-white rounded-md'>
                                    Add a paste
                                </button>
                            </NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Paste;