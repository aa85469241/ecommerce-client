
import { IconType } from "react-icons"

interface ButtonProps {
    label: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    className,
    onClick,
    icon: Icon
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
            btn
            rounded-sm 
            tracking-wider 
            disabled:opacity-70 
            disabled:cursor-not-allowed 
            ${className}
            `}
        >
            {Icon && <Icon size={24} />}
            {label}
        </button>
    )
}

export default Button;