const colorSelect = {
    option: (styles, {  isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? '#eb6100'
          : isFocused
          ? '#eb6100'
          : undefined,
          color: isDisabled
            ? 'black'
            : isSelected
            ? 'white'
            : isFocused
            ? 'white'
            : 'black',
        };
      },    
    multiValue: (styles) => {
        return {
          ...styles,
          backgroundColor: '#eb6100',
          borderRadius: '4px',
        };
      },
      multiValueLabel: (styles) => ({
        ...styles,
        color: '#fff',
      }),
      multiValueRemove: (styles) => ({
        ...styles,
        color: '#fff',
        ':hover': {
          backgroundColor: '#c93900',
          color: 'white',
          borderRadius: '4px',
        },
      }),
  }

export default colorSelect;