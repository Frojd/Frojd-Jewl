# Fröjd Jewl Component Library #

This is an opinionated frontend development kit.
It includes a small scaffolder for react components and is exporting a bundle with a global variable named Components

## Installation ##

1. npm install
2. npm run storybook

This will create a base set of containers and components in the app folder that you can work with and start the devserver at [http://localhost:7000](http://localhost:7000).


## CLI commands ##

### Development ###

Start storybook:
```
npm run storybook
```

Build storybook
```
npm run storybook:build
```

Build and deploy storybook to https://frojd.github.io/Frojd-Jewl/
```
npm run deploy
```

### Creation commands ###

Create a new component:
```
npm run new ComponentName
```

Create a container component:
```
npm run new ComponentName -- -c
```

Delete a component:
```
npm run delete ComponentName
```

Delete a container component:
```
npm run delete ComponentName -- -c
```

Run tests:
```
npm test
```

Update test snapshots (if added):
```
npm test -- -u
```

Scaffold an example project:
```
npm run scaffold
```

Scaffold an empty project:
```
npm run scaffold -- -e
```

Code formatting via prettier:
```
npm run fixcode
```

To only test that all files are formated correct:
```
npm run fixcode:test
```

Codechecking via eslint:
```
npm run eslint
```

Autofix via eslint:
```
npm run eslint:fix
```

### Additional commands and troubleshooting ###

To run webpack analyzer to check your bundle and packagesizes you can append --analyze to a command
```
npm start -- --analyze
npm run build -- --analyze
npm run build:prod -- --analyze
```


## Component Naming Conventions

This project uses a clear, scalable naming system for React components connected to CMS-driven content.

### Naming Pattern
[Placement][Layout][Component?][Card/Type?]

- **Placement**: `Content` (inside main content), `Module` (full-width component in module list) or `Section`(full-width page section)
- **Layout** (optional): How items are arranged (`List`, `Grid`, `Slider`)
- **Component**: Role of the component (`Card`, `Results`, `Block`, `Button`)
- **Card/Type** (optional): Type of entity (`News`, `Page`, `Contact`, `Accordion`)

**Rule of Thumb:**
- Use placement prefix only for components that are **placement-specific**.
- Shared UI primitives (e.g., Card, Richtext, Button) **do not get a prefix**.
- Component and type are optional but recommended for clarity.

---

### Component Layers

#### 1. Primitives
Re-usable, context-agnostic UI elements.
- Examples: `Richtext`, `Button`, `Image`, `CardAccordion`, `CardNews`

#### 2. Shared Wrappers / Lists
Wrap primitives and manage mapping of items; layout-agnostic:
- Examples: `Results`, `ListCardAccordion`

#### 3. Placement Wrappers
Handle placement, spacing, width, background, or full-width modules:
- Prefix with `Content`, `Module` or `Section`
- Examples: `ContentListCardAccordion`, `ModuleListCardAccordion`, `ModuleGridCardNews`, `SectionListResultsSearch`

#### 4. Page / Feature Sections
High-level compositions combining multiple primitives, lists, and placement wrappers.
- Examples: `SectionResults`, `SectionResultsSearch`, `SectionSearch`

---

### Usage Guidelines

- Keep shared logic in **Shared Wrappers / Lists** to avoid duplication
- Use **Placement Wrappers** to add layout-specific styling (max-width, spacing, background)
- Use **Primitives** inside lists or cards; they are reusable across multiple sections
- Hierarchy: Primitive → Shared Wrapper → Placement Wrapper → Page / Feature Section

---

### Key Benefits

1. Clear, consistent naming for **Content**, **Module**, and **Section** components  
2. Short, readable names — Layout comes right after placement  
3. Primitives, shared wrappers, and placement wrappers are clearly separated  
4. Flexible and scalable for new layouts, cards, or section types  
5. Allows **semantic section naming** without creating overly long component names
