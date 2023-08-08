export type IRoutes = {
    path?: string
    component?: JSX.Element
    layout?: React.FC | null
    children?: IRoutes[]
}


