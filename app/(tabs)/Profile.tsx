import { StyleButton } from '@/components';
import { BASE, COLORS } from '@/constants/ui';
import RowItem from '@/layout/RowItem';
import { StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { updateField } from '@/store/userSlice';
import { useEffect, useState } from 'react';
import { UserItem } from '@/store/userSlice';

export default function Index() {
	const storeData = useSelector((state: RootState) => state.user.data);
	const dispatch = useDispatch();

	const [formData, setFormData] = useState<UserItem[]>([]);
// test
	// при инициализации копируем store → form
	useEffect(() => {
		setFormData(storeData);
	}, [storeData]);

	const handleChange = (id: string, value: string) => {
		setFormData(prev => prev.map(item => (item.id === id ? { ...item, value } : item)));
	};

	const handleSave = () => {
		// сохраняем в redux только при нажатии
		formData.forEach(item => {
			dispatch(updateField({ id: item.id, value: item.value }));
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.listContent}>
				{formData.map(item => (
					<RowItem
						key={item.id}
						id={item.id}
						title={item.title}
						value={item.value}
						placeholder={item.placeholder}
						require={item.require}
						onChange={newValue => handleChange(item.id, newValue)}
					/>
				))}
			</View>

			<StyleButton variant='save' label='Сохранить' onPress={handleSave} />
			<StyleButton variant='edit' label='Редактировать' />
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
		paddingHorizontal: BASE.PADDING.DEFAULT * 2,
	},
});
