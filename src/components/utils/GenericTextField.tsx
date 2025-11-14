import React from 'react'
import type { FC, ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'

interface GenericTextFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void // NECESARIO PARA ACEPTAR FUNCIONES
  type?: string
  placeholder?: string
  error?: boolean
  helperText?: string
  required?: boolean
  multiline?: boolean
  rows?: number
}

export const GenericTextField: FC<GenericTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  error = false,
  helperText,
  required = false,
  multiline = false,
  rows = 1,
}) => {
  return (
    <TextField
      variant="filled"
      size="small"
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      required={required}
      multiline={multiline}
      rows={rows}
      margin="normal"
      sx={{
        // 🎯 Estilo base del contenedor del TextField
        '& .MuiInputBase-root': {
          backgroundColor: 'common.g05', // Fondo del input
          '&:hover': {
            backgroundColor: 'common.g10', // Fondo al hacer hove
          },
          '&.MuiFilledInput-root': {
            '&::before': {
              borederColor: '#ffff00', // Borde del input
            },
          },
        },
        // .css-621bz8-MuiInputBase-root-MuiFilledInput-root::before

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ffff00',
          borderWidth: '1px',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            // borderColor: '#1565c0',
            // borderWidth: '2px',
          },
        '& .MuiInputLabel-root': {
          // color: '#1976d2',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          // color: '#1565c0',
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          // borderColor: '#0d47a1',
        },
      }}
    />
  )
}
