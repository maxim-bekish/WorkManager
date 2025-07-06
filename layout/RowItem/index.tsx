import { StyleSheet, View, TextInput, Text } from 'react-native';
import { BASE, COLORS } from '@/constants/ui';
import StyleText from '@/components/StyleText';
import { ItemRow } from '@/types/ItemRow';
import { formatNumber } from '@/assets/utils/format';

interface RowItemProps {
	userData: ItemRow;
	onChange: (id: number, newValue: string) => void;
}

const RowItem = ({ userData, onChange }: RowItemProps) => {
	return (
		<View style={styles.container}>
			<StyleText style={styles.title}>{userData.title}:</StyleText>

			<TextInput
				style={styles.input}
				value={formatNumber(userData.value)}
				onChangeText={text => onChange(userData.id, text)}
				placeholder={userData.placeholder}
				placeholderTextColor={COLORS.WHITE_50}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
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
		padding: BASE.PADDING.DEFAULT,
		paddingInline: BASE.PADDING.DEFAULT * 2,
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
