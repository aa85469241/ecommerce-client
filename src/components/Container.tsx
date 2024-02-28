import classNames from "classnames";


interface ContainerProps {
    className?: string | string[];
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    className,
    children
}) => {
    return (
        <div className={classNames("pt-20 pb-6 px-4 h-screen max-h-screen overflow-y-auto md:px-12 lg:px-28", className)}>
            {children}
        </div>
    )
}

export default Container