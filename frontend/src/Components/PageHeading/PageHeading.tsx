interface PageHeadingProps {
  className?: string
	title: string
}

export const PageHeading: React.FC<PageHeadingProps> = ({className, title}) => {
  return (
    <h1 className={`${className} text-md xl:text-3xl font-semibold`}>{title}</h1>
  )
}