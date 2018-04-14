import { mixin } from '../src'

class A {
  a(a: number) {
    return a * 2
  }
}

class B {
  a(a: number) {
    return a * 2
  }
  b(b: number) {
    return b * 3
  }
}

class C extends mixin(A, B) {}
