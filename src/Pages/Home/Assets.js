import React from 'react';
import useAssets from '../../hooks/useAssets';
import Asset from './Asset';

const Assets = () => {

    const [assets, setAssets] = useAssets([]);

    return (
        <div className='my-16'>
            <div className='mr-20 ml-12 pb-8 border-2 rounded-xl'>
                <h2 className='bg-primary text-md  text-white py-3 pl-5 rounded-t-lg'>You Are Taking Challenges Of New Project</h2>
                <h2 className='text-md text-center font-bold my-10'>demo task</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 justify-between px-8'>

                    {
                        assets.map(asset => <Asset
                            key={asset.asset_id}
                            asset={asset}
                        ></Asset>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Assets;