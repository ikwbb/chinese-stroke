# Chinese Stroke Input Tool

A simple web-based tool for inputting Chinese characters by selecting their stroke components.

## Description

This project provides a basic interface for composing Chinese characters using fundamental stroke patterns. Users can:
- Select from five basic strokes (一, 丨, 丿, 丶, 乛)
- Search for characters matching the selected stroke sequence
- Add matched characters to a text area
- Clear the current selection

The tool is built with HTML, CSS, and JavaScript, making it lightweight and easy to use in any modern web browser.

## Features

- Interactive stroke selection buttons
- Real-time stroke sequence display
- Search functionality for matching characters
- Clear/reset option
- Text output area
- Simple and intuitive interface

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/chinese-stroke-input.git
```

2. Open `index.html` in a web browser to use the tool locally.

No additional dependencies or setup required.

## Usage

1. Click the stroke buttons (一, 丨, 丿, 丶, 乛) to build a stroke sequence
2. Press "搜索" (Search) to find matching characters
3. Click a character from the results to add it to the text area
4. Use "重寫" (Rewrite/Clear) to reset the selection
5. Copy text from the textarea as needed

## File Structure

- `index.html` - Main HTML structure
- `strokeJS.js` - JavaScript logic and functionality
- `strokeCSS.css` - Styling (not provided in the code sample)
- `strokesData.js` - Stroke data (not provided in the code sample)

## Dependencies

- None (pure HTML/CSS/JavaScript)

## Notes

- The project assumes the existence of `strokesData.js` containing a `strokes` object with character-to-stroke mappings
- Styling is referenced in `strokeCSS.css` but not included in the provided code
- Currently supports five basic stroke types

## License

[MIT License](LICENSE) - feel free to modify and distribute

## Future Improvements

- Add more stroke types
- Improve character database
- Add stroke order validation
- Enhance UI/UX with better styling
- Add mobile responsiveness

---
