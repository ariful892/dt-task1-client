import React from 'react';
import shrinkIcon from '../../assets/chevron-up-solid.svg'
import lightIcon from '../../assets/lightbulb-solid.svg'
import chatIcon from '../../assets/message-solid.svg'
import infiniteIcon from '../../assets/infinity-solid.svg'
import editIcon from '../../assets/pen-solid.svg'
import discIcon from '../../assets/floppy-disk-solid.svg'

const Form = () => {
    return (
        <div className='w-full mb-1'>
            <h2 className='w-full  flex border-2 py-2 font-bold'><img className='w-4 ml-2 mr-8' src={shrinkIcon} alt="" />Thread A</h2>
            <div className='mx-5 mt-4 grid grid-cols-2 gap-4 mb-2'>
                <div className=' bg-gray-200 rounded-xl '>
                    <label className='block text-sm pl-1 pt-1 my-1 font-semibold ' htmlFor="thread1">Sub Thread 1</label>
                    <textarea name="thread1" className='h-20 w-full border-2 rounded-xl shadow-md pl-1 pt-1' placeholder='Enter Text Here' id="" cols="30" rows="10"></textarea>
                </div>
                <div className=' bg-gray-200 rounded-xl '>
                    <label className='block text-sm pl-1 pt-1 my-1 font-semibold ' htmlFor="thread1">Sub Interpretation 1</label>
                    <textarea name="thread1" className='h-20 w-full border-2 rounded-xl shadow-md  pl-1 pt-1' placeholder='Enter Text Here' id="" cols="30" rows="10"></textarea>
                </div>


            </div>
            <div className='flex justify-center '>
                <div className='flex'>
                    <img className='w-4 mr-3' src={lightIcon} alt="" />
                    <img className='w-4 mr-3' src={chatIcon} alt="" />
                </div>
                <div className='shadow-md border-2 mr-3'>
                    <label className='text-sm bold-md px-1' htmlFor="">Select Category</label><select className='' name="" id=""></select>
                </div>
                <div className='shadow-md border-2'>
                    <label className='text-sm px-1' htmlFor="">Select Process</label><select className='' name="" id=""></select>
                </div>
            </div>

            <button className='btn btn-primary normal-case rounded-xl mt-5 ml-6'>+ Sub thread</button>

            <div className='mx-5 my-5 bg-gray-200 rounded-xl '>
                <label className='block text-sm pl-1 pt-1 my-1 font-semibold ' htmlFor="thread1">Summary for Thread A</label>
                <textarea name="thread1" className='h-20 w-full border-2 rounded-xl shadow-md  pl-1 pt-1' placeholder='Enter Text Here' id="" cols="30" rows="10"></textarea>
            </div>

            <div className='flex mx-5'>
                <p className='flex'><img className='w-4 mr-2' src={infiniteIcon} alt="" /> Thread Credit <img className='ml-2 w-4' src={editIcon} alt="" /></p>
                <div className='shadow-md border-2'>
                    <label className='text-sm px-1' htmlFor="">Select Process</label><select className='' name="" id=""></select>
                </div>

            </div>

            <div className='grid justify-end mr-5'>
                <button className='btn btn-primary text-lg capitalize rounded-xl mt-5'>+ New Thread</button>

                <img className='w-6 ml-32 my-5' src={discIcon} alt="" />
            </div>

            <hr className='h-3' />
        </div>
    );
};

export default Form;