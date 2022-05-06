import React, {useState} from 'react';

import {NotificationContext} from '../App';
import {printNotification} from '../General';
import {GoogleOnWhiteHD} from '../../assets/images/google';

export default function PlaceAutocomplete({label, name, query, setQuery, setPlaceId, additionalClasses, labelClasses}) {
    const [matches, setMatches] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const {notificationsDispatch} = React.useContext(NotificationContext);

    const getMatches = (newQuery) => {
        const displaySuggestions = function (predictions, status) {
            if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                setMatches(status);
                return;
            }
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                printNotification(
                    notificationsDispatch,
                    'Google semble inaccessible, veuillez réessayez ultérieurement.',
                );
                return;
            }

            setMatches(
                predictions.map((prediction) => ({
                    description: prediction.terms
                        .slice(1, -1)
                        .reduce((acc, strObject) => `${acc}, ${strObject.value}`, prediction.terms[0].value),
                    placeId: prediction.place_id,
                })),
            );
        };

        const service = new google.maps.places.AutocompleteService();
        service.getQueryPredictions({input: newQuery}, displaySuggestions);
    };

    const setSelect = () => {
        setMatches([]);
        setActiveIndex(0);
    };

    const updateQuery = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setPlaceId('');

        if (newQuery.length > 2) {
            getMatches(newQuery);
        } else {
            setMatches([]);
        }
    };

    const handleKeyPress = (event) => {
        switch (event.which) {
            case 13: // Enter key
                if (matches.length) {
                    setSelect();
                    setQuery(matches[activeIndex].description);
                    setPlaceId(matches[activeIndex].placeId);
                }
                break;
            case 38: // Up arrow
                setActiveIndex(activeIndex >= 1 ? activeIndex - 1 : 0);
                break;
            case 40: // Down arrow
                setActiveIndex(activeIndex < matches.length - 1 ? activeIndex + 1 : matches.length - 1);
                break;
            default:
                break;
        }
    };

    const handleSelection = (event, selection) => {
        event.preventDefault();

        setSelect();

        setPlaceId(selection.placeId);
        setQuery(selection.description);
    };

    const handleBlur = (e) => {
        setMatches([]);
    };

    const handleFocus = () => {
        if (query.length > 2) {
            getMatches(query);
        }
    };

    return (
        <div className='field'>
            {label && <label className={`label ${labelClasses}`}>{label}</label>}
            <div className='control'>
                <div className={`dropdown ${matches.length > 0 ? 'is-active' : ''} is-fullwidth-element`}>
                    <div className='dropdown-trigger is-fullwidth-element'>
                        <input
                            type='text'
                            className={`input ${additionalClasses}`}
                            name={name}
                            value={query}
                            onChange={updateQuery}
                            onKeyDown={handleKeyPress}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className='dropdown-menu' onMouseDown={(e) => e.preventDefault()}>
                        {matches.length > 0 && (
                            <div className='dropdown-content'>
                                {matches !== google.maps.places.PlacesServiceStatus.ZERO_RESULTS ? (
                                    matches.map((match, index) => (
                                        <a
                                            className={`dropdown-item ${index === activeIndex ? 'is-active' : ''}`}
                                            href='/'
                                            key={match.placeId}
                                            onClick={(event) => handleSelection(event, match)}>
                                            {match.description}
                                        </a>
                                    ))
                                ) : (
                                    <div
                                        className='dropdown-item is-flex'
                                        style={{
                                            pointerEvents: 'none',
                                        }}>
                                        Aucun résultat
                                    </div>
                                )}
                                <span className='dropdown-divider' />
                                <div
                                    className='dropdown-item is-flex is-justify-content-flex-end'
                                    style={{
                                        pointerEvents: 'none',
                                    }}>
                                    <img src={GoogleOnWhiteHD} width={128} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
