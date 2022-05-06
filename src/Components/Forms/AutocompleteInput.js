import React from 'react';

/**
 * To use this component, use bulmahead to make the dropdown on input change.
 * To import bulmahead : import bulmahead from 'bulmahead';
 * Here is an example how to use it :
 bulmahead('user-select', 'user-select-menu', v => new Promise((resolve, reject) => {
     resolve([{
         label: 'here',
         value: 'test'
     }, {
         label: 'ok',
         value: 'anothertest'
     }].filter((s) => s.value.startsWith(v)));
 }), ({ label, value }) => {
     const input = document.getElementById('user-select');
     console.log(label, value);
 }, 200, 2);
 * An example is also available in TeamAdmin.
 *
 * @method      AutocompleteInput
 * @param       {string}          id          id of the input (dropdown will have id + '-menu')
 * @param       {string}          placeholder placeholder on input
 * @constructor
 */
function AutocompleteInput({id, placeholder, classes, onChangeHandler}) {
    return (
        <div className='field'>
            <p className='control'>
                <div className='dropdown-trigger'>
                    <input
                        id={id}
                        className={`input ${classes}`}
                        type='text'
                        onChange={onChangeHandler}
                        placeholder={placeholder}
                        aria-haspopup='true'
                        aria-controls='prova-menu'
                    />
                </div>
                <div className='dropdown-menu' id={id + '-menu'} role='menu' />
            </p>
        </div>
    );
}

export default AutocompleteInput;
