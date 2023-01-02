import React, { useState, useEffect, useRef } from 'react'
import Icon from '@/Components/Icon'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { usePrevious } from 'react-use'
import pickBy from 'lodash/pickBy'

export default () => {
  const { filters } = usePage().props;
  const [opened, setOpened] = useState(false);
  const [values, setValues] = useState({
    search: filters.search || '',
    status: filters.status || '',
    level: filters.level || '',
    highlight: filters.highlight || '',
    trashed: filters.trashed || ''
  });

  const prevValues = usePrevious(values);

  function reset() {
    setValues({
      highlight: '',
      level: '',
      search: '',
      status: '',
      trashed: ''
    });
  }

  useEffect(() => {
    // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length
        ? pickBy(values)
        : { remember: 'forget' };
      Inertia.get(route(route().current()), query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values]);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues(values => ({
      ...values,
      [key]: value
    }));

    if (opened) setOpened(false);
  }

  function setHighlight()
  {
    if(values.highlight == '')
    {
        setValues(values => ({
            ...values,
            highlight: true
          }))
    }
    if(values.highlight == true)
    {
        setValues(values => ({
            ...values,
            highlight: ''
          }))
    }
  }

  return(
    <div className="flex items-center justify-start w-full max-w-md mr-4">
      <div className="relative flex">
        <div
            style={{ top: '100%' }}
            className={`absolute ${opened ? '' : 'hidden'}`}
        >
          <div
            onClick={() => setOpened(false)}
            className="overlay"
          ></div>
            <div className="relative z-30 w-72 px-4 py-6 mt-2 bg-white rounded-xl shadow-sm">
              <div className="mb-4 flex">
                <div className="w-2 bg-blue rounded-r mr-4"></div>
                <h2 className="text-xl font-semibold">Course filters</h2>
              </div>
              <div className='mb-2'>
                <p className='font-semibold text-gray-500 mb-1'>Status</p>
                <select 
                className='w-full border-2 border-gray-200 rounded-lg focus:ring-0 focus:border-orange'
                name='status'
                onChange={handleChange}
                >
                    <option value="">All</option>
                    <option value={0}>Draft</option>
                    <option value={1}>Published</option>
                </select>
              </div>
              <div>
                <p className='font-semibold text-gray-500 mb-1'>Level</p>
                <select 
                className='w-full border-2 border-gray-200 rounded-lg focus:ring-0 focus:border-orange'
                name='level'
                onChange={handleChange}
                >
                    <option value="">All levels</option>
                    <option value="All level">All Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
              </div>
              <div>
                <button onClick={setHighlight} className='w-full flex justify-between my-4'>
                    <p className='font-semibold text-gray-500'>Highlighted</p>
                    <div className='border-2 p-1 rounded w-6 h-6'>
                        <Icon name='check' className={`w-full ${values.highlight ? true : 'hidden'}`}/>
                    </div>
                </button>
              </div>
              <div className="text-right py-2 flex justify-end">
                <button
                onClick={reset}
                className="mr-2 p-4 text-sm text-gray-400 hover:bg-gray-100 rounded"
                type="button"
                >
                  Reset
                </button>
                <button
                onClick={() => setOpened(false)}
                className="btn-orange"
                type="button"
                >
                  OK
                </button>
              </div>
            </div>
            
        </div>
        <button
          onClick={() => setOpened(true)}
          className="p-3 bg-darkGray rounded-l-lg border-2 border-darkGray md:px-4 text-gray-600 hover:bg-gray-500 hover:text-white focus:text-blue  focus:ring focus:ring-blue"
        >
          <div className="flex items-center">
            <Icon name="filter" className="fill-current w-5 h-5"/>
          </div>
        </button>
        <div className="relative flex w-full bg-white rounded-xl">
            <input
            className="relative border-darkGray w-full px-6 py-3 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue"
            autoComplete="off"
            type="text"
            name="search"
            value={values.search}
            onChange={handleChange}
            placeholder="Search"
            />
        </div>
        <button
        onClick={reset}
        className="ml-3 text-sm text-gray-500 hover:text-gray-800 focus:text-blue focus:outline-none"
        type="button"
        >
            Reset
        </button>
      </div>
    </div>
  )
};
