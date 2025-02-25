# number-to-word-persian

## Overview

number-to-word-persian is a lightweight and efficient JavaScript/TypeScript library that converts numbers into their Persian word equivalents. It supports large numbers up to sextillion and handles various edge cases, including Persian and Arabic numerals.

## Features

- Converts numbers to Persian words.
- Supports Persian and Arabic numerals.
- Handles large numbers (up to sextillion).
- Handles negative numbers correctly.
- Provides an option to return numerical digits instead of words.
- Optimized for performance with an efficient algorithm.

## Installation

You can install number-to-word-persian via npm:

```sh
npm install number-to-word-persian
```

Or using yarn:

```sh
yarn add number-to-word-persian
```

## Usage

Import the library and use it in your JavaScript or TypeScript project:

```typescript
import { numberToWordFa } from 'number-to-word-persian';

console.log(numberToWordFa(12345)); // Output: "دوازده هزار و سیصد و چهل و پنج"
console.log(numberToWordFa("۳۲۱")); // Output: "سیصد و بیست و یک"
console.log(numberToWordFa(-1500)); // Output: "منفی یک هزار و پانصد"
```

## Options

You can pass options to customize the conversion:

```typescript
import { numberToWordFa } from 'number-to-word-persian';

console.log(numberToWordFa(0)); // Output: "صفر"
console.log(numberToWordFa(567, { convertDigits: false })); // Output: "567"
```

## API

### `numberToWordFa(input: string | number | null | undefined, options?: NuToWOptions): string`

- **input**: The number (or string containing a number) to be converted.
- **options**: Optional settings for conversion.
    - `convertDigits` (default: `true`): If `false`, returns the numerical digits instead of words.
- **Returns**: A string representing the number in Persian words.

## Error Handling

- If the input is `null`, `undefined`, or not a valid number, it returns an empty string (`''`).
- Ensures that the output is always a string, even in case of errors.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests on [GitHub](https://github.com/yourusername/number-to-word-persian).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

