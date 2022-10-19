import React from 'react';

const Asset = ({ asset }) => {

    const { asset_title, asset_description } = asset;

    return (
        <div className="card bg-neutral text-neutral-content ">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{asset_title}</h2>
                <p>{asset_description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    );
};

export default Asset;