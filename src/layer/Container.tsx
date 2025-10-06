import { ReactNode } from "react"

type Containerprops= {
    children: ReactNode,
    className?: string
}

const Container = ({children, className}: Containerprops, ) => {
  return (
    <div className={`max-w-[1200px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container