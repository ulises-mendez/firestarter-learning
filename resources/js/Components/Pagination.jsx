import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const PageLink = ({ active, label, url }) => {
  const className = classNames(
    [
      'mr-1 mb-1',
      'px-4 py-3',
      'bg-gray-100 rounded shadow-sm',
      'text-sm font-medium italic',
      'hover:bg-darkblue hover:text-yellow',
      'focus:outline-none focus:border-blue focus:text-orange'
    ],
    {
      'bg-orange text-white hover:text-white hover:text-shadow': active
    }
  );
  return (
    <InertiaLink className={className} href={url}>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </InertiaLink>
  );
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
  const className = classNames(
    'mr-1 mb-1 px-4 py-3 text-sm rounded text-gray-400 select-none'
  );
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: label }} />
  );
};

export default ({ links = [] }) => {
  // dont render, if there's only 1 page (previous, 1, next)
  if (links.length === 3) return null;
  return (
    <div className="flex flex-wrap mt-6 -mb-1">
      {links.map(({ active, label, url }) => {
        return url === null ? (
          <PageInactive key={label} label={label} />
        ) : (
          <PageLink key={label} label={label} active={active} url={url} />
        );
      })}
    </div>
  );
};
