import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';
import { VelocityComponent } from 'velocity-react';
import _ from 'lodash';
import s from './Nav.module.scss';

const Nav = ({id, label, items, orientation, modifier}) => {

    // Check for children, the structure of nav should change when nesting
    const find = _.findKey(items, (i) => i.children && !_.isEmpty(i.children));
    const hasChildren = find !== undefined;

    const classes = classNames(
        s.Root,
        s[`Root--${orientation}`],
        {[s[`Root--${modifier}`]]: modifier},
    );

    return (
        <nav className={classes} aria-label={label} id={id}>
            {hasChildren ? (
                <List items={items} />
            ) : (
                <div className={s.List}>
                    {items.map((item, index) => (
                        <Item {...item} key={index} />
                    ))}
                </div>
            )}
        </nav>
    );
};

Nav.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    items: PropTypes.array.isRequired,
    orientation: PropTypes.string,
    modifier: PropTypes.string,
};

Nav.defaultProps = {
    id: 'nav',
    label: null,
    items: [],
    orientation: 'Horizontal',
    modifier: '',
};

const List = ({items, id, isHidden}) => {
    const listId = id === null ? null : `${id}-list`;
    return (
        <ul className={s.List} aria-hidden={isHidden} id={listId}>
            {items.map((item, index) => (
                <Child {...item} key={index} />
            ))}
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    id: PropTypes.string,
    isHidden: PropTypes.bool,
};

List.defaultProps = {
    items: [],
    id: null,
    isHidden: null,
};

const Child = (item) => {
    const {id, children, isActive} = item;

    const [isExpanded, setIsExpanded] = useState(isActive);

    const hasChildren = !_.isEmpty(children);

    const classes = classNames(
        s.Child,
        {[s['Child--Expanded']]: isExpanded},
        {[s['Child--HasChildren']]: hasChildren},
    );

    return (
        <li className={classes} id={id}>
            <Item
                {...item}
                isExpanded={isExpanded}
                showToggle={hasChildren}
                toggleExpanded={() => setIsExpanded(!isExpanded)}
            />

            {hasChildren &&
                <VelocityComponent
                    animation={isExpanded ? 'slideDown' : 'slideUp'}
                >
                    <List
                        items={children}
                        isHidden={!isExpanded}
                        id={id}
                    />
                </VelocityComponent>
            }
        </li>
    );
};

Child.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.array,
};

Child.defaultProps = {
    id: '',
    children: [],
};

const Item = (item) => {
    const {id, modifier, showToggle, isExpanded, toggleExpanded, isActive} = item;

    const listId = `${id}-list`;

    const {t} = useTranslation();

    const classes = classNames(
        s.Item,
        {[s['Item--Active']]: isActive},
        {[s[`Item--${modifier}`]]: modifier},
    );

    return (
        <div className={classes}>
            <Link {...item} />

            {showToggle &&
                <button
                    type="button"
                    className={s.Toggle}
                    onClick={() => toggleExpanded()}
                    aria-expanded={isExpanded}
                    aria-controls={listId}
                >
                    <span className="sr-only">{t('nav.showChildren')}</span>
                </button>
            }
        </div>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    modifier: PropTypes.string,
    showToggle: PropTypes.bool,
    isExpanded: PropTypes.bool,
    toggleExpanded: PropTypes.func,
    isActive: PropTypes.bool,
};

Item.defaultProps = {
    id: '',
    modifier: '',
    showToggle: false,
    isExpanded: false,
    toggleExpanded: () => {},
    isActive: false,
};

const Link = ({
    title,
    url,
    target,
    rel,
    attrTitle,
}) => {
    return (
        <a
            className={s.Link}
            href={url}
            target={target}
            rel={rel}
            title={attrTitle}
        >
            {typeof(title) === 'string' ? (
                <span dangerouslySetInnerHTML={{__html: title}} />
            ) : (
                <>{title}</>
            )}
        </a>
    );
};

Link.propTypes = {
    title: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    target: PropTypes.string,
    rel: PropTypes.string,
    attrTitle: PropTypes.string,
};

Link.defaultProps = {
    title: '',
    url: '',
    target: null,
    rel: null,
    attrTitle: null,
};
export default Nav;
