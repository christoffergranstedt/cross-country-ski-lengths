import React from 'react'

interface ButtonProps {
  className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled: boolean
}

export const Button: React.FC<ButtonProps> = ({ className, children, onClick, disabled }) => {
  return (
    <button className={className} type='submit' onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}