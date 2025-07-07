import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/ui';

interface Props {
	date: Date;
	onPrev: () => void;
	onNext: () => void;
}

export  function CalendarHeader({ date, onPrev, onNext }: Props) {
	const monthNames = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	];

	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: 16,
				marginBottom: 10,
			}}>
			<TouchableOpacity onPress={onPrev}>
				<Ionicons name='chevron-back' size={24} color={COLORS.WHITE_100} />
			</TouchableOpacity>
			<Text style={{ color: COLORS.WHITE_100, fontSize: 18, fontWeight: 'bold' }}>
				{monthNames[date.getMonth()]} {date.getFullYear()}
			</Text>
			<TouchableOpacity onPress={onNext}>
				<Ionicons name='chevron-forward' size={24} color={COLORS.WHITE_100} />
			</TouchableOpacity>
		</View>
	);
}
