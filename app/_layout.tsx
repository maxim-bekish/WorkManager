import { Slot, useRouter } from 'expo-router';
import { StatusBar, StyleSheet, View } from 'react-native';
import { COLORS } from '@/constants/ui';

export default function Layout() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<Slot />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK_100,
	},
});
