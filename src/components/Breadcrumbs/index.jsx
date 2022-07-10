import { Link } from 'gatsby';
import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    crumbs: PropTypes.arrayOf(PropTypes.object.isRequired),
    crumbLabel: PropTypes.string,
};

const defaultProps = {
    crumbs: [],
    crumbLabel: null,
};

const Breadcrumbs = ({ crumbs, crumbLabel }) => {
    if (!crumbs || crumbs.length === 0) {
        return null;
    }

    return (
        <ol className="typo-body list-none text-sm ml-0 pl-0 hidden sm:block" itemScope itemType="https://schema.org/BreadcrumbList">
            {crumbs.map((crumb, index) => (
                <li key={crumb.pathname} className="inline-block" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    {(crumbs.length > index + 1) && (
                        <Link
                            to={crumb.pathname}
                            className="inline-block no-underline group"
                            itemProp="item"
                        >
                            <span itemProp="name">{crumb.crumbLabel}</span>
                            <span className="block" />
                        </Link>
                    )}
                    {(crumbs.length === index + 1) && (
                        <span itemProp="name">
                            {crumbLabel || crumb.crumbLabel}
                        </span>
                    )}
                    <meta itemProp="position" content={index + 1} />
                    {crumbs.length > index + 1 && (
                        <span className="px-2">
                            &#62;
                        </span>
                    )}
                </li>
            ))}
        </ol>
    );
};

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
