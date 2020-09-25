export const PROPS_TABLE_CONSTS = [
    {
        id: 0,
        tabName: "toPersianDigit()",
        data: {
            title: "toPersianDigit( text : string )",
            description: "این تابع اعداد غیر فارسی در متن را به اعداد فارسی تبدیل میکند"
            , props: [
                {
                    id: 0,
                    name: "text",
                    default: '""',
                    type: "string"
                },

            ]
        }
    },
    {
        id: 1,
        tabName: "isValid()",
        data: {
            title: "isValid(text : string , options)",
            description: "در این تایع میتوانید اعتبار سنجی اعداد فارسی ، حروف فارسی ، حروف و اعداد فارسی ، و شماره همراه فارسی را انجام دهید ",
            props: [
                {
                    id: 0,
                    name: "text",
                    default: '""',
                    type: "string"
                },
                {
                    id: 1,
                    name: "options",
                    default: '{ مطابق جدول زیر }',
                    type: "object",
                    options: [
                        {
                            name: 'allowEmpty',
                            default: "false",
                            type: "boolean",
                            description: "مقدار خالی را میپذیرد"
                        },
                        {
                            name: 'type',
                            default: "alphabet",
                            type: "string",
                            description: "مقادیری از میان number , alphabet , alphNum , phone میپذیرد"
                        },
                    ]
                }
            ]
        }
    },
    {
        id: 2,
        tabName: "formatPrice()",
        data: {
            title: "formatPrice(price : string | number , options)",
            description: "این تابع امکان تغییر نحوه ی نمایش قیمت را به شما میدهد",
            props: [
                {
                    id: 0,
                    name: "price",
                    default: '',
                    type: "string | number"
                },
                {
                    id: 1,
                    name: "options",
                    default: '{ مطابق جدول زیر }',
                    type: "object",
                    options: [
                        {
                            name: 'toToman',
                            default: "false",
                            type: "boolean",
                            description: "تبدیل قیمت به تومان"
                        },
                        {
                            name: 'toRial',
                            default: "false",
                            type: "boolean",
                            description: "تبدیل قیمت به ریال"
                        },
                        {
                            name: 'shouldInsertCommas',
                            default: "false",
                            type: "boolean",
                            description: "جدا سازی سه رقمی قیمت"
                        },
                        {
                            name: 'shouldRemoveCommas',
                            default: "false",
                            type: "boolean",
                            description: "حذف جداسازی سه رقمی قیمت"
                        },
                        {
                            name: 'suffix',
                            default: '""',
                            type: "string",
                            description: "افزودن پسوند به قیمت"
                        },
                        {
                            name: 'prefix',
                            default: '""',
                            type: "string",
                            description: "افزودن پیشوند به قیمت"
                        },
                        {
                            name: 'toPersian',
                            default: 'true',
                            type: "boolean",
                            description: "تبدیل اعداد قیمت به فارسی"
                        },
                    ]
                }
            ]
        }
    },
    {
        id: 3,
        tabName: "formatPhone()",
        data: {
            title: "formatPhone(phoneNumber : string | number , options)",
            description: "این تابع امکان تغییر نحوه ی نمایش شماره همراه ایران را به شما میدهد",
            props: [
                {
                    id: 0,
                    name: "phoneNumber",
                    default: '',
                    type: "string | number"
                },
                {
                    id: 1,
                    name: "options",
                    default: '{ مطابق جدول زیر }',
                    type: "object",
                    options: [
                        {
                            name: 'shouldInsertCountryCode',
                            default: "false",
                            type: "boolean",
                            description: "افزودن کد کشور در ابتدای شماره همراه"
                        },
                        {
                            name: 'shouldRemoveCountryCode',
                            default: "false",
                            type: "boolean",
                            description: "حذف کد کشور در ابتدای شماره همراه"
                        },
                        {
                            name: 'shouldRemoveZero',
                            default: "false",
                            type: "boolean",
                            description: "حذف کردن صفر ابتدای شماره همراه"
                        },
                        {
                            name: 'beautify',
                            default: 'true',
                            type: "boolean",
                            description: "زیبا سازی شماره همراه"
                        },
                        {
                            name: 'toPersian',
                            default: 'true',
                            type: "boolean",
                            description: "تبدیل اعداد قیمت به فارسی"
                        },
                    ]
                }
            ]
        }
    },
    {
        id: 4,
        tabName: "insertCommas()",
        data: {
            title: "removeCommas(digits : string | number , options)",
            description: "این تابع جدا کننده های سه رقمی را به قیمت ها اضافه میکند",
            props: [
                {
                    id: 0,
                    name: "digits",
                    default: '',
                    type: "string | number"
                },
                {
                    id: 1,
                    name: "options",
                    default: '{ مطابق جدول زیر }',
                    type: "object",
                    options: [
                        {
                            name: 'toPersian',
                            default: 'true',
                            type: "boolean",
                            description: "تبدیل اعداد قیمت به فارسی"
                        },
                    ]
                }
            ]
        }
    },
    {
        id: 5,
        tabName: "removeCommas()",
        data: {
            title: "removeCommas(digits : string | number , options)",
            description: "این تابع جدا کننده های سه رقمی در قیمت ها را حذف میکند",
            props: [
                {
                    id: 0,
                    name: "digits",
                    default: '',
                    type: "string | number"
                },
                {
                    id: 1,
                    name: "options",
                    default: '{ مطابق جدول زیر }',
                    type: "object",
                    options: [
                        {
                            name: 'toPersian',
                            default: 'true',
                            type: "boolean",
                            description: "تبدیل اعداد قیمت به فارسی"
                        },
                    ]
                }
            ]
        }
    },

    {
        id: 6,
        tabName: "toPersianText( )",
        data: {
            title: "toPersianText( text )",
            description: "این تابع متن داده شده را به متن کاملا فارسی تغییر میدهد"
            , props: [
                {
                    id: 0,
                    name: "text",
                    default: '""',
                    type: "string"
                },
            ]
        }
    },
    {
        id: 7,
        tabName: "removeArabicChar()",
        data: {
            title: "removeArabicChar( text )",
            description: "این تابع حروف رایج عربی را تبدیل به حروف فارسی مشابه میکند"
            , props: [
                {
                    id: 0,
                    name: "text",
                    default: '""',
                    type: "string"
                },
            ]
        }
    },
    {
        id: 8,
        tabName: "toEnglishDigits()",
        data: {
            title: "toEnglishDigits( text )",
            description: "این تابع تمامی اعداد درون متن را به اعداد لاتین تبدیل میکند"
            , props: [
                {
                    id: 0,
                    name: "text",
                    default: '""',
                    type: "string"
                },
            ]
        }
    }
]