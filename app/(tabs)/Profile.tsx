import { StyleButton } from '@/components';
import { BASE, COLORS } from '@/constants/ui';
import RowItem from '@/layout/RowItem';
import { ItemRow } from '@/types/ItemRow';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const defaultUserData: ItemRow[] = [
	{
		id: 1,
		title: 'Имя',
		value: 'Максим',
		placeholder: 'Введите имя',
		require: true,
	},
	{
		id: 2,
		title: 'Фамилия',
		value: 'Бекиш',
		placeholder: 'Введите Фамилию',
		require: false,
	},
	{
		id: 3,
		title: 'Оклад 1',
		value: 90000,
		placeholder: 'Оклад на испытательном сроке',
		require: true,
	},
	{
		id: 4,
		title: 'Оклад 2',
		value: 100000,
		placeholder: 'Оклад после испытательного срока',
		require: false,
	},
	{
		id: 5,
		title: 'Старт',
		value: '17.03.2025',
		placeholder: 'Старт работы',
		require: false,
	},
	{
		id: 6,
		title: 'Почта',
		value: 'maxamax997@gmail.com',
		placeholder: 'Ваша почта',
		require: false,
	},
];

export default function Index() {
	const [userData, setUserData] = useState<ItemRow[]>(defaultUserData);

	const handleChange = (id: number, newValue: string) => {
		setUserData(prev => prev.map(item => (item.id === id ? { ...item, value: newValue } : item)));
	};

	return (
		<View style={styles.container}>
			<View style={styles.listContent}>
				<FlatList
					data={userData}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => <RowItem userData={item} onChange={handleChange} />}
					ItemSeparatorComponent={() => <View style={{ height: BASE.PADDING.DEFAULT * 3 }} />}
				/>
			</View>
			<StyleButton variant='save' label='Редактировать'></StyleButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 40,
		paddingTop: BASE.PADDING.DEFAULT * 5,
		backgroundColor: COLORS.BLACK_100,
	},
	listContent: {
		paddingInline: BASE.PADDING.DEFAULT * 2,
	},
});
