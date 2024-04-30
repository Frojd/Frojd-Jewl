import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Fieldset from '../Fieldset';
import s from './PillGroup.module.scss';

const PillGroup = ({
    label = '',
    name = '',
    items = [],
    id = 'pill-group',
    multiple = false,
    selected = null,
    showAll = false,
    changeHandler = () => {},
}) => {
    const { t } = useTranslation();

    const [currentSelected, setCurrentSelected] = useState(selected);

    useEffect(() => {
        setCurrentSelected(selected);
    }, [selected]);

    // For storybook if multiple is changed in args, reset
    useEffect(() => {
        setCurrentSelected(multiple ? [] : '');
    }, [multiple]);

    useEffect(() => {
        changeHandler(currentSelected);
    }, [currentSelected]);

    const onChange = (value, checked) => {
        if (value === 'all') {
            if (checked) {
                setCurrentSelected(multiple ? [] : '');
            } else {
                const allValues = items.map(({ value }) => value);
                setCurrentSelected(allValues);
            }
        } else if (multiple) {
            const currValue = currentSelected || [];
            const newValue = checked
                ? [...currValue, value]
                : [...currValue].filter((v) => v !== value);
            setCurrentSelected(newValue);
        } else {
            setCurrentSelected(value);
        }
    };

    const classes = classNames(s.Root, { [s['Root--Multiple']]: multiple });

    return (
        <Fieldset title={label}>
            <div className={s.List}>
                {showAll && (
                    <Item
                        label={t('pillGroup.all')}
                        value="all"
                        name={name}
                        id={id}
                        multiple={multiple}
                        selected={currentSelected}
                        onChange={onChange}
                    />
                )}

                {items.map((item, index) => (
                    <Item
                        {...item}
                        key={index}
                        id={id}
                        name={name}
                        multiple={multiple}
                        selected={currentSelected}
                        onChange={onChange}
                    />
                ))}
            </div>
        </Fieldset>
    );
};

PillGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    showAll: PropTypes.bool,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    changeHandler: PropTypes.func,
};

const Item = ({
    label = '',
    name = '',
    value = '',
    id = 'pill-group',
    multiple = false,
    selected = null,
    onChange = () => {},
}) => {
    const fieldId = `${id}-${value}`;
    const type = multiple ? 'checkbox' : 'radio';

    const isNoneSelected = !selected || selected.length < 1;
    const isChecked =
        value === 'all'
            ? isNoneSelected
            : multiple && selected
            ? selected.includes(value)
            : selected === value;

    const classes = classNames(s.Item, { [s['Item--Checked']]: isChecked });

    return (
        <div className={classes}>
            <input
                className={s.Input}
                name={name}
                value={value}
                type={type}
                id={fieldId}
                checked={isChecked}
                onChange={(e) => onChange(value, e.currentTarget.checked)}
            />
            <label className={s.Label} htmlFor={fieldId}>
                {label}
            </label>
        </div>
    );
};

Item.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    onChange: PropTypes.func,
};

export default PillGroup;
