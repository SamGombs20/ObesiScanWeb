export const textfieldStyles={
    marginBottom: '1rem',
  '& .MuiOutlinedInput-root': {
    color: '#8B4513',
    borderRadius: '12px',
    transition: 'border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
    minWidth: '300px',
    '& input[type=number]': {
      MozAppearance: 'textfield',
      '&::-webkit-outer-spin-button': {
        display: 'none',
      },
      '&::-webkit-inner-spin-button': {
        display: 'none',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#006400',
      borderWidth: '2px',
      transition: 'border-color 0.3s ease-in-out',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#006400',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#006400',
      borderWidth: '2px',
    },
    '& .MuiOutlinedInput-input': {
      // padding: "12px 12px",
      color: '#8B4513',
      fontSize: '14px',
      fontWeight: '500',
      fontFamily: "'Roboto', sans-serif",
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: '#a0a0a0',
      opacity: 0.8,
      fontWeight: '400',
    },
    '& .MuiInputAdornment-root': {
      color: '#8B4513',
    },
  },
  '.MuiOutlinedInput-root.Mui-focused': {
    backgroundColor: 'transparent',
  },
  '.MuiOutlinedInput-root.Mui-error': {
    backgroundColor: '#d32f2f15',
  },
  '.MuiOutlinedInput-root.Mui-error.Mui-focused': {
    backgroundColor: 'transparent',
  },
  '& .MuiInputLabel-outlined': {
    color: '#8B4513',
    fontSize: '14px',
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: '#006400',
  },
  '& .MuiInputLabel-outlined.Mui-error': {
    color: '#d32f2f',
  },
  '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: '#d32f2f',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    fontSize: '0.7rem',
    color: '#d32f2f',
    marginLeft: '1rem',
    marginBottom: '-0.4rem',
  },
  '& .MuiInputLabel-outlined.Mui-success': {
    color: '#388e3c', // Success label color (green)
  },
  '& .MuiOutlinedInput-root.Mui-success .MuiOutlinedInput-notchedOutline': {
    borderColor: '#388e3c', // Success border color (green)
  },
  '& .MuiFormHelperText-root.Mui-success': {
    fontSize: '0.7rem',
    color: '#388e3c', // Success helper text color (green)
    marginLeft: '1rem',
    marginBottom: '-0.4rem',
  },
}
export const modalStyle = {
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%, -50%)',
  bgcolor:'background.paper',
  boxShadow:24,
  minWidth:300,
  outline:'none',
  borderRadius: '12px',
  p:4,
};