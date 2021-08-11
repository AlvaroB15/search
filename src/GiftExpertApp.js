import React from 'react'
import {useState} from 'react';
import AddCategory from './components/AddCategory';
import ShowCategory from './components/ShowCategory';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h2>Search Gift</h2>
            <AddCategory listCategories={setCategories}/>
            <hr/>

            {
                categories.map((category) => (
                    <ShowCategory
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GiftExpertApp;
