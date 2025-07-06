import { StyleIcon } from '@/components';
import { COLORS } from '@/constants/ui';
import Header from '@/layout/Header';

import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {
	return (
		<View style={styles.container}>
			<Tabs
				screenOptions={{
					tabBarStyle: styles.tabBar,

					tabBarActiveBackgroundColor: COLORS.WHITE_50,
					tabBarActiveTintColor: COLORS.WHITE_100,
					tabBarInactiveTintColor: COLORS.WHITE_100,
					header: ({ options }) => <Header title={options.title || 'Default Title'} />,
				}}>
				<Tabs.Screen
					name='Profile'
					options={{
						title: 'Профиль',
						tabBarIcon: ({ color }) => <StyleIcon name='House' color={color} size={24} />,
					}}
				/>
				<Tabs.Screen
					name='index'
					options={{
						title: 'Главная',
						tabBarIcon: ({ color }) => <StyleIcon name='User' color={color} size={24} />,
					}}
				/>
			</Tabs>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	tabBar: {
		backgroundColor: COLORS.BLACK_100,
		borderTopWidth: 1,
		borderTopColor: COLORS.WHITE_100,
	},
	header: {
		backgroundColor: COLORS.BLACK_100,
	},
});
