import React, { useEffect, useState } from 'react';
import Asset from './Asset';

const Assets = () => {

    const [assets, setAssets] = useState([]);

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                setAssets(data.tasks[0].assets)
                console.log()
            })
    }, []);

    return (
        <div className='my-16'>
            <div className='mr-20 ml-12 border-2'>
                <h2 className='bg-primary text-md  text-white py-3 pl-5'>You Are Taking Challenges Of New Project</h2>
                <h2>Total asset: {assets.length}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-8'>

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