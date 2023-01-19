import React, { useContext } from 'react';
import { Context } from '@/Components/Team/Context'


export default () => {
  const { values, handleChange, reset } = useContext(Context)

  return (
    <div className="flex items-center w-full mr-4">
      <div className="relative flex w-full bg-white rounded ">
        <input
          className="relative font-bold border-white w-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-orange"
          autoComplete="off"
          type="text"
          name="search"
          value={values.search}
          onChange={handleChange}
          placeholder="Type name or email"
        />
      </div>
      <button
        onClick={reset}
        className="p-2 font-bold text-sm text-white bg-black focus:outline-none"
        type="button"
      >
        Reset search
      </button>
    </div>
  );
};
