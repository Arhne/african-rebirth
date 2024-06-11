import { Select } from "antd";
import styles from "./custom-select.module.css"


export type SelectProps = {
	options: { value: string; label: string }[];
	placeholder?: string;
	onChange?: (selectedValue: string) => void;
	customStyle?:  string;
};

const style = {
	height: 50,	
};


export const CustomSelect: React.FC<SelectProps> = ({
	options,
	onChange,
	placeholder,
	customStyle
}) => {
	return (
		<div className={styles.SelectComp}>
			<Select
				placeholder={placeholder}
				style={style}
				allowClear
				onChange={onChange}
				options={options}
				className={customStyle}
			/>
		</div>
	);
};
