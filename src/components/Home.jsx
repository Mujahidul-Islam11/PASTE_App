import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();

    const createPaste = () => {
        const paste ={
            title: title,
            content: value,
            _id: pasteId ||  Date.now().toString(36),
            createdAt: new Date().toISOString()
        }

        if(pasteId){
            // update
            dispatch(updateToPastes(paste))
        }else{
            // create
            dispatch(addToPastes(paste))
        }

        setTitle('');
        setValue('');
        setSearchParams({})
    }

    return (
        <div className='space-y-4 mt-6'>
            <div className='flex justify-between items-center gap-3'>
                <input
                    className='px-3 py-2 border rounded-md text-white'
                    type="text"
                    placeholder='enter title here'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <button onClick={()=> createPaste()} className='px-3 size-fit py-2 cursor-pointer bg-[#181818] hover:bg-[#383737] text-white rounded-md'>
                    {
                        pasteId ? "Update My Paste" : "Create My Paste"
                    }
                </button>
            </div>
            <div>
                <textarea
                    value={value}
                    className='border rounded-md text-white min-w-[500px] p-3'
                    placeholder='Enter content here'
                    rows="16"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Home;