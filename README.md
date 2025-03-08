# Auto Typing Animation

A simple typing animation effect that cycles through different professions with a blinking cursor.

## Features
- Typing/erasing animation
- Blinking cursor effect
- Multiple word rotation
- Responsive design
- Customizable colors and timing

## Usage
1. Clone the repository
2. Open `index.html` in a browser
3. Watch the animation cycle through:
   - Developer
   - Coder
   - Teacher
   - YouTuber

## Customization
Modify these values in `script.js`:
```javascript
const wordsList = ['NewWord1.', 'NewWord2.', 'NewWord3.'];
// Adjust timing (milliseconds):
const intervalId = setInterval(() => { ... }, 150); // Change 100 to desired speed