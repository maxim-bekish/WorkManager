import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';
import { BASE, COLORS } from '@/constants/ui';
import { formatNumber } from '@/assets/utils/format';
import { StyleText } from '@/components';

interface RowItemProps   {
	title: string;
	require?: boolean;
	placeholder?: string;
	value: string;
	readonly?: boolean;
	id: string;
	onChange?: (id: string, newValue: string) => void;
}

const RowItem = ({ title, id, value, placeholder, readonly = false, onChange }: RowItemProps) => {
	return (
		<View style={styles.container}>
			<StyleText style={styles.title}>{title}:</StyleText>

			<TextInput
				style={styles.input}
				readOnly={readonly}
				 
				// value={formatNumber(value)}
				value={value}
				onChangeText={text => onChange?.(id, text)}
				placeholder={placeholder}
				placeholderTextColor={COLORS.WHITE_50}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 16,
		color: COLORS.WHITE_100,
		minWidth: 110,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: COLORS.WHITE_100,
		paddingVertical: BASE.PADDING.DEFAULT,
		paddingHorizontal: BASE.PADDING.DEFAULT * 2,
		borderRadius: BASE.ROUND.DEFAULT,
		backgroundColor: COLORS.WHITE_10,
	},
	value: {
		fontSize: 16,
		color: COLORS.WHITE_100,
		flex: 1,
	},
});

export default RowItem;
