import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({listCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 1) {
            listCategories((list) => [inputValue, ...list]);
            setInputValue('');
        }
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className="buttonAdd" onClick={handleSubmit}>Add</button>
            <input className="input_search"
                type="text"
                value={inputValue}
                onChange={handleOnChange}
                placeholder="Element a to search"
            />
        </form>
    )
}

AddCategory.propTypes = {
    listCategories: PropTypes.func.isRequired
}

export default AddCategory;