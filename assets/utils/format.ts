/**
 * Форматирует число с разделением тысяч пробелами
 * @param num Число или строка для форматирования
 * @param decimalPlaces Количество знаков после запятой (по умолчанию 0)
 * @returns Отформатированная строка (например: "1 320" или "3 450.75")
 */
export const formatNumber = (num: number | string, decimalPlaces: number = 0): string => {
	// Преобразуем в число, если передана строка
	if (typeof num !== 'number') return num;

	const number = typeof num === 'string' ? parseFloat(num) : num;

	// Проверка на NaN
	if (isNaN(number)) return '0';

	// Округляем до указанного количества знаков
	const rounded =
		decimalPlaces > 0
			? Math.round(number * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
			: Math.round(number);

	// Форматируем с разделителями тысяч
	return rounded
		.toString()
		.replace('.', ',')
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
