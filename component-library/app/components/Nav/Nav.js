import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import _ from 'lodash';
import { AnimateUpDown } from 'Components/Animate';
import Icon from 'Components/Icon';
import s from './Nav.module.scss';

const Nav = ({
    id = 'nav',
    label = null,
    items = [],
    orientation = 'Horizontal',
    modifier = '',
    className = null,
    listClassName = null,
    childClassName = null,
    itemClassName = null,
    itemActiveClassName = null,
    toggleClassName = null,
    linkClassName = null,
    linkTextClassName = null,
    linkIconClassName = null,
}) => {
    // Check for children, the structure of nav should change when nesting
    const find = _.findKey(items, (i) => i.children && !_.isEmpty(i.children));
    const hasChildren = find !== undefined;

    const classes = classNames(
        s.Root,
        s[`Root--${orientation}`],
        { [s[`Root--${modifier}`]]: modifier },
        className
    );

    const listClasses = classNames(s.List, listClassName);

    return (
        <nav className={classes} aria-label={label} id={id}>
            {hasChildren ? (
                <List
                    items={items}
                    navId={id}
                    className={listClassName}
                    childClassName={childClassName}
                    itemClassName={itemClassName}
                    itemActiveClassName={itemActiveClassName}
                    toggleClassName={toggleClassName}
                    linkClassName={linkClassName}
                    linkTextClassName={linkTextClassName}
                    linkIconClassName={linkIconClassName}
                />
            ) : (
                <div className={listClasses}>
                    {items.map((item, index) => (
                        <Item
                            {...item}
                            navId={id}
                            key={index}
                            className={itemClassName}
                            itemActiveClassName={itemActiveClassName}
                            toggleClassName={toggleClassName}
                            linkClassName={linkClassName}
                            linkTextClassName={linkTextClassName}
                            linkIconClassName={linkIconClassName}
                        />
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
    classsName: PropTypes.string,
    listClassName: PropTypes.string,
    childClassName: PropTypes.string,
    itemClassName: PropTypes.string,
    itemActiveClassName: PropTypes.string,
    toggleClassName: PropTypes.string,
    linkClassName: PropTypes.string,
    linkTextClassName: PropTypes.string,
    linkIconClassName: PropTypes.string,
};

const List = ({
    items = [],
    navId = 'nav',
    id = null,
    isHidden = null,
    className = null,
    childClassName = null,
    itemClassName = null,
    itemActiveClassName = null,
    toggleClassName = null,
    linkClassName = null,
    linkTextClassName = null,
    linkIconClassName = null,
}) => {
    const listId = id === null ? `${navId}-list` : `${navId}-${id}-list`;

    const classes = classNames(s.List, className);

    return (
        <ul className={classes} aria-hidden={isHidden} id={listId}>
            {items.map((item, index) => (
                <Child
                    {...item}
                    navId={listId}
                    key={index}
                    className={childClassName}
                    listClassName={className}
                    itemClassName={itemClassName}
                    itemActiveClassName={itemActiveClassName}
                    toggleClassName={toggleClassName}
                    linkClassName={linkClassName}
                    linkTextClassName={linkTextClassName}
                    linkIconClassName={linkIconClassName}
                />
            ))}
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    navId: PropTypes.string.isRequired,
    id: PropTypes.string,
    isHidden: PropTypes.bool,
    classsName: PropTypes.string,
    childClassName: PropTypes.string,
    toggleClassName: PropTypes.string,
    itemClassName: PropTypes.string,
    itemActiveClassName: PropTypes.string,
    linkClassName: PropTypes.string,
    linkTextClassName: PropTypes.string,
    linkIconClassName: PropTypes.string,
};

const Child = (item) => {
    const {
        navId = '',
        id = '',
        children = [],
        isParentActive = false,
        className = null,
        listClassName = null,
        itemClassName = null,
        itemActiveClassName = null,
        toggleClassName = null,
        linkClassName = null,
        linkTextClassName = null,
        linkIconClassName = null,
    } = item;

    const [isExpanded, setIsExpanded] = useState(isParentActive);

    const hasChildren = !_.isEmpty(children);

    const childId = `${navId}-${id}`;

    const classes = classNames(
        s.Child,
        { [s['Child--Expanded']]: isExpanded },
        { [s['Child--HasChildren']]: hasChildren },
        { [s['Child--ParentActive']]: isParentActive },
        className
    );

    return (
        <li className={classes} id={childId}>
            <Item
                {...item}
                navId={childId}
                isExpanded={isExpanded}
                showToggle={hasChildren}
                className={itemClassName}
                itemActiveClassName={itemActiveClassName}
                toggleClassName={toggleClassName}
                linkClassName={linkClassName}
                linkTextClassName={linkTextClassName}
                linkIconClassName={linkIconClassName}
                toggleExpanded={() => setIsExpanded(!isExpanded)}
            />

            {hasChildren && (
                <AnimateUpDown isVisible={isExpanded}>
                    <List
                        items={children}
                        isHidden={!isExpanded}
                        navId={childId}
                        className={listClassName}
                        childClassName={className}
                        itemClassName={itemClassName}
                        itemActiveClassName={itemActiveClassName}
                        toggleClassName={toggleClassName}
                        linkClassName={linkClassName}
                        linkTextClassName={linkTextClassName}
                        linkIconClassName={linkIconClassName}
                    />
                </AnimateUpDown>
            )}
        </li>
    );
};

Child.propTypes = {
    navId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.array,
    isParentActive: PropTypes.bool,
    classsName: PropTypes.string,
    listClassName: PropTypes.string,
    itemClassName: PropTypes.string,
    itemActiveClassName: PropTypes.string,
    toggleClassName: PropTypes.string,
    linkClassName: PropTypes.string,
    linkTextClassName: PropTypes.string,
    linkIconClassName: PropTypes.string,
};

const Item = (item) => {
    const {
        navId = '',
        id = '',
        modifier = '',
        showToggle = false,
        isExpanded = false,
        toggleExpanded = () => {},
        isActive = false,
        isParentActive = false,
        className = null,
        itemActiveClassName = null,
        toggleClassName = null,
        linkClassName = null,
        linkTextClassName = null,
        linkIconClassName = null,
    } = item;

    const listId = `${navId}-list`;

    const { t } = useTranslation();

    const classes = classNames(
        s.Item,
        { [s['Item--Active']]: isActive },
        { [s[`Item--${modifier}`]]: modifier },
        className,
        { [`${itemActiveClassName}`]: isActive }
    );

    const toggleClasses = classNames(s.Toggle, toggleClassName);

    return (
        <div className={classes}>
            <Link
                {...item}
                className={linkClassName}
                linkTextClassName={linkTextClassName}
                linkIconClassName={linkIconClassName}
            />

            {showToggle && (
                <button
                    className={toggleClasses}
                    type="button"
                    onClick={() => toggleExpanded()}
                    aria-expanded={isExpanded}
                    aria-controls={listId}
                    aria-label={t('nav.showChildren')}
                />
            )}
        </div>
    );
};

Item.propTypes = {
    navId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    modifier: PropTypes.string,
    showToggle: PropTypes.bool,
    isExpanded: PropTypes.bool,
    toggleExpanded: PropTypes.func,
    isActive: PropTypes.bool,
    isParentActive: PropTypes.bool,
    classsName: PropTypes.string,
    toggleClassName: PropTypes.string,
    linkClassName: PropTypes.string,
    linkTextClassName: PropTypes.string,
    linkIconClassName: PropTypes.string,
};

const Link = ({
    title = '',
    url = '',
    target = null,
    rel = null,
    attrTitle = null,
    className = null,
    linkTextClassName = null,
    linkIconClassName = null,
}) => {
    const classes = classNames(s.Link, className);

    const linkTextClasses = classNames(s.LinkText, linkTextClassName);
    const iconDownloadClasses = classNames(
        s.LinkIcon,
        linkIconClassName,
        s['LinkIcon--Download']
    );
    const iconExternalClasses = classNames(
        s.LinkIcon,
        linkIconClassName,
        s['LinkIcon--External']
    );

    return (
        <a
            className={classes}
            href={url}
            target={target}
            rel={rel}
            title={attrTitle}
        >
            {typeof title === 'string' ? (
                <span
                    className={linkTextClasses}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            ) : (
                <span className={linkTextClasses}>{title}</span>
            )}
            <Icon name="Download" asBg={true} className={iconDownloadClasses} />
            <Icon name="External" asBg={true} className={iconExternalClasses} />
        </a>
    );
};

Link.propTypes = {
    title: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    target: PropTypes.string,
    rel: PropTypes.string,
    attrTitle: PropTypes.string,
    classsName: PropTypes.string,
    linkTextClassName: PropTypes.string,
    linkIconClassName: PropTypes.string,
};

export default Nav;
