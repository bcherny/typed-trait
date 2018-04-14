import { mixin } from '../src'

class A {
  a(a: number) {
    return a * 2
  }
}

class B {
  b(b: number) {
    return b * 3
  }
}

class C {
  a(a: number) {
    return a * 2
  }
  d(a: number) {
    return a * 2
  }
}

class D extends mixin(A, B, C) {}
