import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StyleText } from '@/components';
import { COLORS } from '@/constants/ui';
import { DateData } from 'react-native-calendars';
import { DayState } from 'react-native-calendars/src/types';

interface Props {
	date?: DateData;
	state?: DayState;

	selectedDate: string | null;
	onPress: (dateString: string) => void;
	statuses: Record<string, number>;
}

export function CalendarDay({ date, state, selectedDate, onPress, statuses }: Props) {
	if (!date) return null;

	const isToday = date.dateString === new Date().toISOString().split('T')[0];
	const isSelected = selectedDate === date.dateString;
	const status = statuses[date.dateString];

	const normalizedState: DayState | undefined =
		state === 'disabled' || state === '' ? state : undefined;

	const getDayStyle = () => {
		if (isToday) {
			return {
				backgroundColor: COLORS.PINK,
				color: COLORS.BLACK_100,
				fontWeight: 'bold' as const,
			};
		}
		if (isSelected) {
			return {
				backgroundColor: COLORS.WHITE_10,
				color: COLORS.WHITE_100,
				fontWeight: 'bold' as const,
			};
		}
		if (normalizedState === 'disabled') {
			return {
				backgroundColor: COLORS.TRANSPARENT,
				color: COLORS.WHITE_30,
				fontWeight: 'normal' as const,
			};
		}
		return {
			backgroundColor: COLORS.TRANSPARENT,
			color: COLORS.WHITE_100,
			fontWeight: 'normal' as const,
		};
	};

	const getStatusDotColor = () => {
		switch (status) {
			case 1: // Рабочий
				return COLORS.PINK;
			case 2: // Рабочий x2
				return COLORS.BLUE;
			case 0: // Выходной
				return COLORS.TRANSPARENT;
			default:
				return COLORS.TRANSPARENT;
		}
	};

	const dayStyle = getDayStyle();
	const dotColor = getStatusDotColor();

	return (
		<View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 }}>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => onPress(date.dateString)}
				style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8 }}>
				<StyleText
					style={{
						width: 34,
						height: 34,
						textAlign: 'center',
						textAlignVertical: 'center',
						borderRadius: 12,
						backgroundColor: dayStyle.backgroundColor,
						color: dayStyle.color,
						fontWeight: dayStyle.fontWeight,
					}}>
					{date.day}
				</StyleText>

				{!!dotColor && (
					<View
						style={{
							marginTop: 8,
							width: 6,
							height: 6,
							borderRadius: 3,
							backgroundColor: dotColor,
						}}
					/>
				)}
			</TouchableOpacity>
		</View>
	);
}
