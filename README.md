# Magical-Mixin [![Build Status][build]](https://circleci.com/gh/bcherny/magical-mixin) [![npm]](https://www.npmjs.com/package/magical-mixin) [![mit]](https://opensource.org/licenses/MIT) [![ts]](https://www.typescriptlang.org/)

[build]: https://img.shields.io/circleci/project/bcherny/magical-mixin.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/magical-mixin.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/magical-mixin.svg?style=flat-square
[ts]: https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg?style=flat-square

> The only 100% typesafe class mixin for TypeScript

## Features

- **Complete compile (as you type) time safety for class mixins**: Know at compile time which methods are available for your mixed in class, without the boilerplate that the [TypeScript docs](http://www.typescriptlang.org/docs/handbook/mixins.html)'s approach suffers from.
- **Compile time error when multiple mixins implement the same method or property**: A common shortcoming of mixins is undefined behavior when multiple mixins implement the same property or method. In some languages the last mixins wins, in some the first one wins, in some you need to explicitly `override` methods, and in some overrides are forbidden. Magical-mixin takes the last approach for maximum safety and predictability.
- **Simple, elegant syntax**: Just `extends mixin(ClassA, ClassB)`.

## Installation

```sh
# Using Yarn:
yarn add magical-mixin

# Or, using NPM:
npm install magical-mixin --save
```

## Usage

```ts
import { mixin } from 'magical-mixin'

class A {
  a() {}
}
class B {
  b() {}
}
class Bad {
  a() {}
  c() {}
}

class MyClass extends mixin(A, B) {}
let c = new MyClass
c.a() // OK
c.b() // OK

class MyBadClass extends mixin(A, Bad) {}
// Compile Error: Type '"Error: Multiple mixins implement the following methods:" & Methods<"a">' is not a constructor function type.

class MyOtherBadClass extends mixin(A, B, Bad) {}
// Compile Error: Type '"Error: Multiple mixins implement the following methods:" & Methods<"a">' is not a constructor function type.
```

## TODO

- [ ] Add support for calling `mixin()` with more than 3 parameters
- [ ] Define behavior for constructors
- [ ] Don't export `Methods` utility class

## Tests

```sh
yarn test
```

## License

MIT
