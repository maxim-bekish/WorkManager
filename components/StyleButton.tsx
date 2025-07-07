import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyleText } from './StyleText';
import { BASE, COLORS } from '@/constants/ui';
import { StyleIcon } from './StyleIcon';

import { icons } from 'lucide-react-native';
type StyleButtonProps = TouchableOpacityProps & {
	label?: string;
	variant?: 'edit' | 'save' | 'default';
	icon?: keyof typeof icons;
};

export const StyleButton: React.FC<StyleButtonProps> = ({
	label,
	variant = 'default',
	icon,
	...props
}) => {
	return (
		<TouchableOpacity style={[styles.base, styles[variant]]} {...props}>
			{label && <StyleText>{label}</StyleText>}
			{icon && <StyleIcon name={icon} />}
      
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	base: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 'auto',
		paddingVertical: BASE.PADDING.DEFAULT,
		paddingHorizontal: BASE.PADDING.DEFAULT * 2,
		borderRadius: BASE.ROUND.DEFAULT,
		alignSelf: 'flex-start',
	},
	default: {
		backgroundColor: COLORS.TRANSPARENT,
	},
	edit: {
		backgroundColor: '#7A2A2B',
	},
	save: {
		backgroundColor: '#291562',
	},
});
