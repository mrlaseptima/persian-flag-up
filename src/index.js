'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const PERSIAN_NUMBERS = [
    '۰',
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹',
];
const ARABIC_NUMBERS = [
    '٠',
    '١',
    '٢',
    '٣',
    '٤',
    '٥',
    '٦',
    '٧',
    '٨',
    '٩',
];

const pushError = msg => {
    throw new Error(msg);
};

const isString = string => (typeof string === "string" || string instanceof String);

const detectErrorMessage = (arg, ...types) => {
    if (typeof arg === "undefined")
        pushError(
            `This method must have at least one input instead of ${typeof arg}`
        );

    if (!types.includes(typeof arg)) {
        pushError(
            `Invalid input type , you cant assign  '${typeof arg}'  to this method`
        );
    }
};

const clear = digits => toEnglishDigits(digits.toString());

const hasCountryCode = number => /^(((98)|(\+98)|(0098)))/.test(number);

const hasZero = number => /^09/.test(number);

const removeCountryCode = number =>
	hasCountryCode(number) ? `0${number.slice(-10)}` : number;

const insertCountryCode = number => {
	if (!hasCountryCode(number))
		if (hasZero(number)) return `+98${removeZero(number)}`;
		else return `+98${number}`;
	return number;
};

const removeZero = number => {
	if (!hasCountryCode(number) && hasZero(number)) return number.slice(1);
	return number;
};

const beautifyData = number => {
	const cutIndex = hasCountryCode(number) && !hasZero(number) ? -10 : -11;
	const beautifyResult = `${number.slice(-14, cutIndex)} ${number.slice(cutIndex, -7)} ${number.slice(-7, -4)} ${number.slice(-4)}`;
	return beautifyResult.trim();
};


const convertArabicNums = str => {
	if (isString(str)) {

		for (let i = 0; i < 10; i++) {
			const persianNumbersRegExp = new RegExp(PERSIAN_NUMBERS[i], 'g');
			const arabicNumbersRegExp = new RegExp(ARABIC_NUMBERS[i], 'g');

			str = str
				.replace(persianNumbersRegExp, i)
				.replace(arabicNumbersRegExp, i);
		}
	}
	return str;
};




const toPersianDigits = (text = "") => {
	detectErrorMessage(text, "string");

	const nonArabicData = convertArabicNums(text);
	const charCodeZero = "۰".charCodeAt(0);
	return String(nonArabicData).replace(/[0-9]/g, w =>
		String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
	);
};

const toEnglishDigits = text => {
	detectErrorMessage(text, "string", "number");

	const charCodeZero = "۰".charCodeAt(0);
	return text.replace(/[۰-۹]/g, w => w.charCodeAt(0) - charCodeZero);
};

const removeArabicChar = (text = "") => {
	detectErrorMessage(text, "string");

	const clearData = convertArabicNums(text
		.replace(/[\u064A]/g, "\u06CC")
		.replace(/[\u0643]/g, "\u06A9"));

	return clearData;
};

const toPersianText = (text = "") => {
	detectErrorMessage(text, "string");

	const clearData = removeArabicChar(text);
	return toPersianDigits(convertArabicNums(clearData));
};

const insertCommas = (
	digits,
	options = {
		toPersian: true,
	}
) => {
	detectErrorMessage(digits, "string", "number");
	const { toPersian = true } = options;
	const clearData = clear(digits);
	const RegEx = /\B(?=(\d{3})+(?!\d))/g;
	if (toPersian)
		return toPersianDigits(clearData.replace(RegEx, ","));

	return clearData.replace(RegEx, ",");
};

const removeCommas = (
	digits,
	options = {
		toPersian: true,
	}
) => {
	detectErrorMessage(digits, "string");
	const clearData = clear(digits);
	const { toPersian = true } = options;

	if (toPersian)
		return toPersianDigits(clearData.replace(/\,/g, ""));
	return clearData.replace(/\,/g, "");
};

const formatPhone = (phoneNumber, options = {
	shouldRemoveCountryCode: false,
	shouldInsertCountryCode: false,
	shouldRemoveZero: false,
	toPersian: true,
	beautify: true,
}) => {
	detectErrorMessage(phoneNumber, "string", "number");
	let clearData = clear(phoneNumber);
	const {
		shouldRemoveCountryCode = false,
		shouldInsertCountryCode = false,
		shouldRemoveZero = false,
		toPersian = true,
		beautify = true,
	} = options;

	if (shouldRemoveCountryCode) clearData = removeCountryCode(clearData);
	if (shouldRemoveZero) clearData = removeZero(clearData);
	if (shouldInsertCountryCode) clearData = insertCountryCode(clearData);
	if (beautify) clearData = beautifyData(clearData);
	if (toPersian) return toPersianDigits(clearData);
	return clearData;
};

const formatPrice = (price, options = {
	toToman: false,
	toRial: false,
	shouldInsertCommas: false,
	shouldRemoveCommas: false,
	suffix: "",
	preFix: "",
	toPersian: true,
}) => {
	detectErrorMessage(price, "string", "number");

	let clearData = clear(price);
	const {
		toToman = false,
		shouldInsertCommas = false,
		shouldRemoveCommas = false,
		toRial = false,
		suffix = "",
		preFix = "",
		toPersian = true,
	} = options;


	if (toRial || toToman)
		clearData =
			Number(removeCommas(clearData, { toPersian: false })) *
			(toRial ? 10 : 0.1);

	if (shouldInsertCommas) clearData = insertCommas(clearData, { toPersian });
	if (shouldRemoveCommas) clearData = removeCommas(clearData, { toPersian });
	if (toPersian) clearData = toPersianDigits(clearData);
	if (suffix) clearData = `${clearData} ${suffix}`;
	if (preFix) clearData = `${preFix} ${clearData}`;

	return String(clearData);
};


const isValid = (text = "", options = { allowEmpty: false, type: "alphabet" }) => {
	detectErrorMessage(text, "string");

	const { allowEmpty = false, type = "alphabet" } = options;
	if (allowEmpty && text === "") return true;

	switch (type) {
		case "number":
			return /^([\u06F0-\u06F9]{1,})+$/.test(text);
		case "alphabet":
			return /^([\u0600-\u06EF | \u0200]{1,})+$/.test(text);
		case "alphNum":
			return /^([\u0600-\u06FF | \u0200]{1,})+$/.test(text);
		case "phone":
			return /^(((98)|(\+98)|(0098)|0)9[0-9]{9})+$/.test(text);
		default:
			return false;
	}
};


const PersianFlagUp = {
	toPersianDigits: toPersianDigits,
	isValid: isValid,
	formatPrice: formatPrice,
	formatPhone: formatPhone,
	removeCommas: removeCommas,
	insertCommas: insertCommas,
	toPersianText: toPersianText,
	removeArabicChar: removeArabicChar,
	toEnglishDigits: toEnglishDigits,
};

exports.default = PersianFlagUp;
exports.formatPhone = formatPhone;
exports.formatPrice = formatPrice;
exports.insertCommas = insertCommas;
exports.isValid = isValid;
exports.removeArabicChar = removeArabicChar;
exports.removeCommas = removeCommas;
exports.toEnglishDigits = toEnglishDigits;
exports.toPersianDigits = toPersianDigits;
exports.toPersianText = toPersianText;
