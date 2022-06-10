import classnames from 'classnames';
import React from 'react';
import Link from '../Link';

import PropTypes from '../../utils/PropTypes';
import warning from '../../utils/warning';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['reset', 'primary']),
    size: PropTypes.oneOf(['reset', 'md']),
    submit: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
    variant: 'reset',
    size: 'reset',
    submit: false,
    onClick: null,
    to: null,
};

const Button = ({
    children,
    className,
    onClick,
    submit,
    variant,
    size,
    to,
    ...rest
}) => {
    const buttonClassName = classnames(
        className,
        'leading-none antialiased select-none transition-all duration-200',
        {
            'bg-transparent': variant === 'reset',
            'btn-primary': variant === 'primary',
            'px-0 py-0': size === 'reset',
            'px-8 py-4 text-base': size === 'md',
        },
    );

    warning(
        !(submit && onClick),
        'You provide onClick to a submit button. Please remove onClick handler or submit attribute',
    );

    if (submit) {
        return (
            <button type="submit" className={buttonClassName}>
                {children}
            </button>
        );
    }

    if (to) {
        return (
            <Link to={to} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={buttonClassName}>
            {children}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
