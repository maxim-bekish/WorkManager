import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';
import { StatusBar, StyleSheet, View } from 'react-native';
import { COLORS } from '@/constants/ui';

export default function RootLayout() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<View style={styles.container}>
					<StatusBar barStyle={'light-content'} />
					<Slot /> 
				</View>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK_100,
	},
});
