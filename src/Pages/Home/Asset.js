import React, { useState } from 'react';
import expandIcon from '../../assets/chevron-down-solid.svg';
import shrinkIcon from '../../assets/chevron-up-solid.svg';

const Asset = ({ asset }) => {

    const [expand, setExpand] = useState(false);
    const [shrink, setShrink] = useState(true);
    const { asset_title, asset_description, display_asset_reflection, display_asset_url, display_asset_video, display_asset_docs } = asset;

    // if (display_asset_url === null || display_asset_video === null) {
    //     setExpand(false);
    //     setShrink(false);
    // }

    const handleExpand = () => {
        setExpand(true);
        setShrink(false);
    }

    const handleShrink = () => {
        setExpand(false);
        setShrink(true);
    }

    return (
        <div className="card border border-1 shadow-xl">
            <h2 className="text-lg py-2 font-bold bg-black text-white text-center capitalize">{asset_title}</h2>
            <div className="card-body items-center text-left pb-0 pr-4 relative">


                <div className='mb-6'>
                    {shrink && display_asset_video === null && display_asset_url === null && display_asset_docs === null && <p className='font-bold'>{asset_description}</p>}

                    {display_asset_docs !== null && <div ><iframe className='pr-5 h-96' src={display_asset_docs} frameBorder="0"></iframe></div>}

                    {expand && <p className='font-bold'>{display_asset_reflection}</p>}
                    {display_asset_url !== null && <audio className='px-3' src={display_asset_url} controls></audio>}

                    {display_asset_video !== null && <iframe className='pr-5 pb-3' src={display_asset_video} frameBorder="0"></iframe>}
                </div>

                <div className="w-full text-right absolute bottom-0 right-3">
                    {shrink && <button onClick={handleExpand} className=""><img className='w-4' src={expandIcon} alt="" /></button>}
                    {expand && <button onClick={handleShrink} className=""><img className='w-4' src={shrinkIcon} alt="" /></button>}
                </div>

            </div>
        </div >
    );
};

export default Asset;