import React from 'react'

interface ButtonProps {
  className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={className} type='submit' onClick={onClick}>
      {children}
    </button>
  )
}