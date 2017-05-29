# Class 1 Cheatsheet

## Scopes

**Block Scope (a.k.a lexical scope):**

- Anything within `{ }` that isn't a function
- Examples: `{ }`, `if { }`, `else { }`, `for () { }`, `while () { }`
- `let` and `const` respect block scope, while `var` does not

**Function Scope:**
- Anything within a function
- Example: `function func() { }`

## Variables

- `let` and `const` respect block scope, while `var` only respects function scope
- `const` values are constant, cannot be reassigned, and must be initialized on declaration
- `const` can't be reassigned, but the contents of complex `const` values, such as arrays and objects, can be modified

## String Helpers

- `includes()` returns `true` or `false` depending on if the given text is found anywhere within the string
- `startsWith()` returns `true` or `false` depending on if the given text is found at the beginning of the string
- `endsWith()` returns `true` or `false` depending on if the given text is found at the end of the string

## Template Strings

```const message = `User ${name} scored ${score} on the exam`;```

- Use backticks (``) around the string and `${}` around variables or expressions