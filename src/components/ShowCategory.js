import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import CategoryItem from './CategoryItem';

const ShowCategory = ({category}) => {

    // Without Destructure
    // const state = useFetchGifs();

    // With Destructure
    const {data, loading} = useFetchGifs(category);
    // console.log({ data, loading });

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="card animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    data.map((img) => (
                        <CategoryItem key={img.id} image={img}/>
                    ))
                }
            </div>
        </>
    )
}

export default ShowCategory;