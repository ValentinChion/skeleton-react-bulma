import {MapLogo} from '../../../assets/images/google';

import {getMapsUrl} from '../../../helpers';

export default function GoogleMapButton({placeId}) {
    if (!placeId) return null;

    return (
        <a className='button is-outlined' target='_blank' href={getMapsUrl(placeId)}>
            <div className='is-flex is-justify-content-center'>
                <img
                    src={MapLogo}
                    width={16}
                    style={{
                        marginRight: '5px',
                    }}
                />
                <span
                    style={{
                        fontFamily: 'Roboto',
                    }}>
                    Ouvrir sur Google Maps
                </span>
            </div>
        </a>
    );
}
