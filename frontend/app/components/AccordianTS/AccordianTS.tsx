import * as React from 'react';
import classNames from 'classnames';
import { VelocityComponent } from 'velocity-react';
import RawHtml from '../RawHtml';
// import PropTypes from 'prop-types';
import './AccordianTS.scss';

export interface AccordianTSProps {
    title: string;
    richtext: string;
    open: boolean;
    id: string;
}

const AccordianTS: React.FunctionComponent<AccordianTSProps> = (
    props: AccordianTSProps
) => {
    const { title, richtext, open, id } = props;
    const [expanded, setExpanded] = React.useState(open);

    const classes = classNames('AccordianTS', {
        'AccordianTS--Expanded': expanded,
    });

    const clickHandler = () => setExpanded(!expanded);

    const headerId = `${id}-header`;

    return (
        <div className={classes}>
            <div
                className="AccordianTS__Header"
                onClick={clickHandler}
                aria-expanded={expanded}
                aria-controls={id}
                id={headerId}>
                {title}
            </div>
            <VelocityComponent animation={expanded ? 'slideDown' : 'slideUp'}>
                <div
                    className="AccordianTS__Content"
                    aria-hidden={!expanded}
                    aria-labelledby={headerId}
                    id={id}>
                    <RawHtml html={richtext} />
                </div>
            </VelocityComponent>
        </div>
    );
};

export default AccordianTS;
