import React from 'react'

const CategoryItem = ({image}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={image.image} alt={image.title}/>
            <p>{image.title}</p>
        </div>
    )
}

export default CategoryItem
