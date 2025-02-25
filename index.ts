 interface NuToWOptions {
    convertDigits?: boolean;
}

const toEnglishDigits = (input: string | number): string => {
    if (input == null) return '';
    if (typeof input !== 'string' || input.length === 0) return input.toString();

    const digitMap: Record<string, string> = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '٠': '0',
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
    };

    return input
        .replace(/[۰-۹٠-٩]/g, char => digitMap[char] || char)
        .replace(/,/g, '');
};

const convertToWords = (
    number: number,
    level = 0,
    options: NuToWOptions = { convertDigits: true },
): string => {
    if (!Number.isFinite(number) || number < 0) return '';
    if (number === 0)
        return level === 0 ? (options.convertDigits ? 'صفر' : '0') : '';

    const units = ['یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
    const tens = ['بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
    const hundreds = [
        'یکصد',
        'دویست',
        'سیصد',
        'چهارصد',
        'پانصد',
        'ششصد',
        'هفتصد',
        'هشتصد',
        'نهصد',
    ];
    const teens = [
        'ده',
        'یازده',
        'دوازده',
        'سیزده',
        'چهارده',
        'پانزده',
        'شانزده',
        'هفده',
        'هجده',
        'نوزده',
    ];
    const scales = [
        'هزار',
        'میلیون',
        'میلیارد',
        'تریلیارد',
        'کوادریلیارد',
        'کوینتیلیارد',
        'سکستیلیارد',
    ];

    if (number < 10) return units[number - 1];
    if (number < 20) return teens[number - 10];
    if (number < 100)
        return `${tens[Math.floor(number / 10) - 2]}${
            number % 10 ? ' و ' + convertToWords(number % 10, level + 1, options) : ''
        }`;
    if (number < 1000)
        return `${hundreds[Math.floor(number / 100) - 1]}${
            number % 100
                ? ' و ' + convertToWords(number % 100, level + 1, options)
                : ''
        }`;

    for (let i = 0, unit = 1000; i < scales.length; i++, unit *= 1000) {
        if (number < unit * 1000) {
            return `${convertToWords(Math.floor(number / unit), level, options)} ${
                scales[i]
            }${
                number % unit
                    ? ' و ' + convertToWords(number % unit, level + 1, options)
                    : ''
            }`;
        }
    }

    return '';
};

export const numberToWordFa = (
    input: string | number | null | undefined,
    options?: NuToWOptions,
): string => {
    const number = parseInt(toEnglishDigits(input || '') || '', 10);
    return isNaN(number) ? '' : convertToWords(number, 0, options);
};
