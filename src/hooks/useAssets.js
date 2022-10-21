import { useEffect, useState } from 'react';

const useAssets = () => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                setAssets(data.tasks[0].assets)
                console.log()
            })
    }, []);

    return [assets, setAssets];
}

export default useAssets;