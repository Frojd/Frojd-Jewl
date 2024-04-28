# Svg

## Description
Svg icons used should be cleaned from any unncessary data, and inline svgs should specifically be cleaned from any color definition so it is defaulted to black and then changed with CSS instead. We use [svgo](https://github.com/svg/svgo) for cleaning our svgs, with different configs depending on usage.

Any svg icons that should be included inline should be located in the inline-directory, and cleaned with the config included there. Any other icons that will be implemented as background-image or img-tag should be located in this root, and should be cleaned with the config included here.

## Cleaning svgs
### Inline svgs
Run in the root of this directory
```
npx svgo ./ --config=svgo.config.js
```
