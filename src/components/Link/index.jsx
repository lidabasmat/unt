/* eslint-disable react/jsx-props-no-spreading */
import classnames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    children: PropTypes.node,
    partiallyActive: PropTypes.bool,
    sameTarget: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

const defaultProps = {
    activeClassName: null,
    children: null,
    className: null,
    sameTarget: false,
    partiallyActive: false,
};

const INTERNAL_LINK_PATTERN = /^\/(?!\/)/;
const FILE_LINK_PATTERN = /\.[0-9a-z]+$/i;

const Link = ({
    activeClassName,
    children,
    className,
    partiallyActive,
    to,
    sameTarget,
    ...rest
}) => {
    const classNames = classnames([
        className,
        'cursor-pointer hover:no-underline',
    ]);

    if (!INTERNAL_LINK_PATTERN.test(to)) {
        if (sameTarget) {
            <GatsbyLink
                to={to}
                activeClassName={activeClassName}
                className={classNames}
                partiallyActive={partiallyActive}
                {...rest}
            >
                {children}
            </GatsbyLink>
        } else {
            return (
                <a href={to} target="_blank" rel="noopener noreferrer" className={classNames} {...rest}>
                    {children}
                </a>
            );
        }
    }

    if (FILE_LINK_PATTERN.test(to)) {
        return (
            <a href={to} className={classNames} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            className={classNames}
            partiallyActive={partiallyActive}
            {...rest}
        >
            {children}
        </GatsbyLink>
    );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
