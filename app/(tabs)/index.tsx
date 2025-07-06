import { StyleText } from '@/components';
import { BASE, COLORS } from '@/constants/ui';
import CalendarScreen from '@/layout/CalendarScreen';
import { StyleSheet, View } from 'react-native';

export default function Profile() {
	return (
		<View style={styles.container}>
			<CalendarScreen />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: BASE.PADDING.DEFAULT * 5,
		backgroundColor: COLORS.BLACK_100,
	},
});
