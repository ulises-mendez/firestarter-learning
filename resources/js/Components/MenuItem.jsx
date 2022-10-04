import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import Icon from '@/Components/Icon'

export default ({ icon, link, text, ...props }) => {
  const isActive = route().current(link + '*');

  const Item = classNames({
    'text-orange': isActive,
    'text-black': !isActive
  })

  return (
    <div className="w-full text-center my-4" >
      <InertiaLink href={route(link)} className={Item}>
              <Icon name={icon} className="w-4 h-4 mx-auto fill-current"/>
              <p className='text-xs'>{text}</p>
     </InertiaLink>
    </div>
  );
};
