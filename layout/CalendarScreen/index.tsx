import React, { useState } from 'react';
import { Calendar, LocaleConfig, DateData } from 'react-native-calendars';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/ui';
import { StyleText } from '@/components';

LocaleConfig.locales['ru'] = {
	monthNames: [
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
	],
	monthNamesShort: [
		'Янв',
		'Фев',
		'Мар',
		'Апр',
		'Май',
		'Июн',
		'Июл',
		'Авг',
		'Сен',
		'Окт',
		'Ноя',
		'Дек',
	],
	dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	today: 'Сегодня',
};

// Выбираем локаль
LocaleConfig.defaultLocale = 'ru';

export default function CalendarScreen() {
	const [currentDate, setCurrentDate] = useState(() => {
		const today = new Date();
		return today.toISOString().split('T')[0];
	});

	const today = new Date().toISOString().split('T')[0];

	const formatDate = (date: Date): string => {
		return date.toISOString().split('T')[0];
	};

	const handlePrevMonth = () => {
		const date = new Date(currentDate);
		date.setMonth(date.getMonth() - 1);
		setCurrentDate(formatDate(date));
	};

	const handleNextMonth = () => {
		const date = new Date(currentDate);
		date.setMonth(date.getMonth() + 1);
		setCurrentDate(formatDate(date));
	};

	const getMonthYearLabel = (date: Date): string => {
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
		return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
	};
	const getDayLabel = (date: Date): string => {
		const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
		return dayNames[date.getDay()];
	};

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.BLACK_100, padding: 16 }}>
			<Calendar
				firstDay={1}
				current={currentDate}
				onDayPress={(day: DateData) => {
					console.log('selected day', day);
				}}
				hideArrows
				enableSwipeMonths
				renderHeader={date => {
					const headerDate = new Date(date.getFullYear(), date.getMonth(), 1);
					return (
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingHorizontal: 16,
								marginBottom: 10,
							}}>
							<TouchableOpacity onPress={handlePrevMonth}>
								<Ionicons name='chevron-back' size={24} color={COLORS.WHITE_100} />
							</TouchableOpacity>
							<Text
								style={{
									color: COLORS.WHITE_100,
									fontSize: 18,
									fontWeight: 'bold',
								}}>
								{getMonthYearLabel(headerDate)}
							</Text>
							<TouchableOpacity onPress={handleNextMonth}>
								<Ionicons name='chevron-forward' size={24} color={COLORS.WHITE_100} />
							</TouchableOpacity>
						</View>
					);
				}}
				// 🔽 вот это добавь 👇
				dayComponent={({ date, state }) => {
					if (!date) return;

					const dayOfWeek = new Date(date.dateString).getDay();

					// Проверяем, будний ли это день (понедельник-пятница)
					const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
					const isToday = date.dateString === today;
					const isDisabled = state === 'disabled';

					return (
						<View
							style={{
								margin: 0,

								paddingVertical: 0,
								paddingHorizontal: 8,
								alignItems: 'center',
								gap: 8,
							}}>
							{isToday && (
								<StyleText
									style={{
										width: 34,
										height: 34,
										borderRadius: 12,
										backgroundColor: COLORS.PINK,
										textAlign: 'center',
										fontWeight: 'bold',
										color: COLORS.BLACK_100,
									}}>
									{date.day}
								</StyleText>
							)}
							{isDisabled && (
								<StyleText
									style={{
										width: 34,
										height: 34,
										borderRadius: 12,
										backgroundColor: isToday ? COLORS.PINK : COLORS.TRANSPARENT,
										textAlign: 'center',
										color: COLORS.WHITE_30,
										fontWeight: isToday ? 'bold' : 'normal',
									}}>
									{date.day}
								</StyleText>
							)}
							{!isDisabled && !isToday && (
								<StyleText
									style={{
										width: 34,
										height: 34,
										borderRadius: 12,
										backgroundColor: COLORS.TRANSPARENT,
										textAlign: 'center',
										color: COLORS.WHITE_100,
										fontWeight: 'normal',
									}}>
									{date.day}
								</StyleText>
							)}
							{isWeekday && (
								<View
									style={{
										opacity: isDisabled ? 0.4 : 1,
										width: 6,
										height: 6,
										backgroundColor: COLORS.PINK,
										borderRadius: 3,
									}}
								/>
							)}
						</View>
					);
				}}
				theme={{
					backgroundColor: COLORS.BLACK_100,
					calendarBackground: COLORS.BLACK_100,
					dayTextColor: COLORS.WHITE_100,
					monthTextColor: COLORS.WHITE_100,
					todayTextColor: COLORS.BLACK_100,
					arrowColor: COLORS.WHITE_100,
					textDayFontSize: 16,
					textMonthFontSize: 18,
					textDayHeaderFontSize: 14,
				}}
			/>
		</View>
	);
}
