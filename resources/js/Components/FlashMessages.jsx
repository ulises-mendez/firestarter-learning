import React, { useState, useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const IconSuccess = () => (
  <svg
    className="ml-4 mr-2 flex-shrink-0 w-3 h-3 white fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
  </svg>
);

const IconDanger = () => (
  <svg
    className="ml-4 mr-2 flex-shrink-0 w-4 h-4 text-white fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
  </svg>
);

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const ButtonClose = ({ onClick }) => {
  const className = classNames('block w-2 h-2 mr-2 fill-current group-hover:text-[#D4410B]');
  return (
    <button
      onClick={onClick}
      type="button"
      className="focus:outline-none group p-2 text-white"
    >
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="235.908"
        height="235.908"
        viewBox="278.046 126.846 235.908 235.908"
      >
        <path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z" />
      </svg>
    </button>
  );
};

export default () => {
  const [visible, setVisible] = useState(false);
  const { flash, errors } = usePage().props;
  const numOfErrors = Object.keys(errors).length;
  const [start,setStart] = useState(false);


  const [count, setCount] = useState(10);


  function startTimer() {
    setStart(true);
  }


  useInterval(() => {
    if (count > 0)
    setCount(count - 1);
    if (count == 0)
    setCount(0);
    setVisible(false);
    setStart(false);
  }, start ? 1000 : null);

  useEffect(() => {
    if (Object.keys(errors).length > 0 || flash.success !== null) {
    setVisible(true);
    }
  }, [flash, errors]);

  useEffect(() => {
    if (visible == true) {
      startTimer();
    }
  }, [count])


  return (
    <div>
      {flash.success && visible && (
        <div className="mb-8 fixed flex items-center justify-between right-8 rounded max-w-3xl shadow-md bottom-0 border-orange border-l-4 z-[100] bg-orange text-white">
          <div className="flex items-center">
            <IconSuccess />
            <div className="font-medium px-3 py-4 text-sm">
              {flash.success}
            </div>
          </div>
          <ButtonClose onClick={() => setVisible(false)} color="white" />
        </div>
      )}
      {(flash.error || numOfErrors > 0) && visible && (
        <div className="bg-red-500 fixed flex items-center justify-between max-w-3xl mb-8 right-8 rounded top-3 z-10">
          <div className="flex items-center">
            <IconDanger />
            <div className="py-4 text-white text-sm font-medium">
              {flash.error && flash.error}
              {numOfErrors === 1 && 'Hay un error en tu solicitud'}
              {numOfErrors > 1 && `Hay ${numOfErrors} errores en tu solicitud.`}
            </div>
          </div>
          <ButtonClose onClick={() => setVisible(false)} />
        </div>
      )}
    </div>
  );
};
