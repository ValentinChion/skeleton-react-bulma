import React, {useEffect, useRef} from 'react';

import bulmaCollapsible from '@creativebulma/bulma-collapsible';

import {ChildrenCard} from './Card/Card';

function CollapsibleMessage({
    messages,
    allowMultiple = true,
    idArticle = 'accordion-first',
    messageClasses = 'message',
}) {
    const collapsibles = useRef();

    useEffect(() => {
        bulmaCollapsible.attach('.is-collapsible', {
            container: collapsibles.current,
        });
    }, []);

    return (
        <>
            <div ref={collapsibles} id={idArticle}>
                {messages &&
                    messages.length &&
                    messages.map(({title, content}, i) => (
                        <>
                            <article className={messageClasses}>
                                <a href={`#${idArticle}-${i}`} data-action='collapse' style={{textDecoration: 'none'}}>
                                    <div className='message-header'>
                                        {title}
                                        <span className={'icon'}>
                                            <i className='fas fa-caret-down'></i>
                                        </span>
                                    </div>
                                </a>
                                <div
                                    id={`${idArticle}-${i}`}
                                    className='message-body is-collapsible mb-4'
                                    data-parent={idArticle}
                                    data-allow-multiple={allowMultiple}>
                                    <div className='message-body-content'>{content}</div>
                                </div>
                            </article>
                        </>
                    ))}
            </div>
        </>
    );
}

function CollapsibleCard({id, title, children}) {
    const collapsibles = useRef();

    useEffect(() => {
        bulmaCollapsible.attach('.is-collapsible', {
            container: collapsibles.current,
        });
    }, []);

    return (
        <>
            <ChildrenCard id={id} title={title} collapsibleRef={collapsibles}>
                {children}
            </ChildrenCard>
        </>
    );
}

export {CollapsibleMessage, CollapsibleCard};
