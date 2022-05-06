import React from 'react';

function SearchBarDisplayer({barContent, handleChangeBar, placeholder}) {
    return (
        <>
            <div className='box box-searchbar'>
                <form>
                    <div className='field field-searchbar'>
                        <p className='control is-large has-icons-right'>
                            <input
                                className='input'
                                type='text'
                                placeholder={placeholder || 'Recherche...'}
                                onChange={handleChangeBar}
                                value={barContent}
                            />
                            <span className='icon is-large is-right has-text-primary'>
                                <i className='fas fa-search'></i>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SearchBarDisplayer;
