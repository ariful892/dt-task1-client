import React, { useState } from 'react';
import expandIcon from '../../assets/chevron-down-solid.svg';
import shrinkIcon from '../../assets/chevron-up-solid.svg';
import Form from './Form';

const Asset = ({ asset }) => {

    const [expand, setExpand] = useState(false);
    const [shrink, setShrink] = useState(true);
    const { asset_title, asset_description, display_asset_reflection, display_asset_url, display_asset_video, display_asset_docs, asset_type, display_asset_image, asset_content } = asset;


    const handleExpand = () => {
        setExpand(true);
        setShrink(false);
    }

    const handleShrink = () => {
        setExpand(false);
        setShrink(true);
    }

    return (
        <div className='inline'>
            <div className="card border border-1 shadow-xl">
                <h2 className="text-lg py-2 font-bold bg-black text-white text-center capitalize">{asset_title}</h2>
                <div className="card-body items-center text-left pb-0  relative px-0 mx-0">


                    <div className='mb-6 w-full '>

                        {/* for asset description */}

                        {shrink && display_asset_video === null && display_asset_url === null && display_asset_docs === null && display_asset_image === null && asset_type !== "input_asset" && <p className='font-bold px-3'>{asset_description}</p>}

                        {/* for asset document */}

                        <div className='mx-5'>
                            {display_asset_docs !== null && <iframe className=' h-96 mx-auto' src={display_asset_docs} frameBorder="0"></iframe>}
                        </div>

                        {/* for asset audio */}

                        {expand && <p className='font-bold'>{display_asset_reflection}</p>}
                        {display_asset_url !== null && <audio className='mx-auto' src={display_asset_url} controls></audio>}

                        {/* for asset image */}

                        <div className='mx-5'>
                            {display_asset_image && <img src={display_asset_image} alt="" />}
                        </div>

                        {/* for asset video */}

                        <div className='mx-5 mb-3'>
                            {display_asset_video !== null && <iframe className='w-full' src={display_asset_video} frameBorder="0"></iframe>}
                        </div>

                        {/* for asset input text */}

                        <div className='mx-5'>
                            {asset_type === "input_asset" && asset_content !== "tb" && asset_content !== "eb" && < textarea className='w-full h-40 pt-2 pl-2  border border-1 shadow-lg rounded-lg' placeholder='Reflect as per given guidelines'></textarea>}
                        </div>

                        {asset_content === "tb" && <Form></Form>}

                        {asset_content === "eb" && <Form></Form>}
                    </div>

                    <div className="w-full text-right absolute bottom-0 right-3">
                        {shrink && <button onClick={handleExpand} className=""><img className='w-4' src={expandIcon} alt="" /></button>}
                        {expand && <button onClick={handleShrink} className=""><img className='w-4' src={shrinkIcon} alt="" /></button>}
                    </div>

                </div>
            </div >
        </div>
    );
};

export default Asset;