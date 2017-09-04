[Index](./00-index.md)

# Methodologies

- [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming)
- [Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)
- [Udacity Git Styleguide](http://udacity.github.io/git-styleguide)
- [FIRST](https://addyosmani.com/first)
- [CommonJS](http://commonjs.org)
- [Atomic design](http://atomicdesign.bradfrost.com)
- [BEM](https://en.bem.info)
- [Mobile First](http://zurb.com/word/mobile-first)
- [JS/React Style Guide](https://github.com/airbnb/javascript)
- [CSS/SASS Style Guide](https://github.com/airbnb/css)

_Some methodologies apply in certain cases or partly._

## General rules and conventions

- Codification UTF-8
- 2 space indentation
- Kebab Case for file names
- Testing files names should end with `.test` before extensions
- The main file in a component/module should be called `index`
- No more than 80 characters per line of code
- Modules should not be more than around 100 lines of code (without docs) (recommendation)
- Modules dependencies must be placed at the beginning
- Modules exports should be defined at the end (when eligible)
- CSS animations/transitions over JS animations
- Font icons over CSS image sprites
- camelCase for JavaScript, avoid single letters
- React components folders are capitalized and the `index.js` file is the exported
- Classes folders are capitalized and `index.js` file is the exported

## Design

- **General**:
  - Use `box-sizing` with `border-box`.
  - Use `rem` for font sizes. Pixels for everything else.
  - Every element has a single, unique, component-scoped class.
- **Layouts**:
  - A layout is only concerned with its children horizontal, vertical alignment and spacing.
  - Layouts can have margin bottom or/and margin right to separate.
- **Components**:
  - A component never imposes element styles on its children. Component styles only target the elements inside.
  - The component itself never has floats, widths, heights or margins. It should not have background.
  - There can be components that can behave as elements.
- **Elements**:
  - All styles are applied directly to that selector, modified only by contexts and themes.
  - Themes and other data attributes never force changes in appearance; they are always a context that layouts, components, and elements can subscribe to.
  - No element will have top or left margins, they can have right or bottom margins and all last children will have their margins cleared. The first element touches the top of its component.

_Some rules from [Frontend Architecture for design systems](http://shop.oreilly.com/product/0636920040156.do)._
