import { test } from 'ava'
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
  c(c: number) {
    return c * 4
  }
}

test('One class', t => {
  class M extends mixin(A) { }
  let m = new M
  t.is(m.a(2), 4)
})

test('Two classes', t => {
  class M extends mixin(A, B) { }
  let m = new M
  t.is(m.a(2), 4)
  t.is(m.b(2), 6)
})

test('Three classes', t => {
  class M extends mixin(A, B, C) { }
  let m = new M
  t.is(m.a(2), 4)
  t.is(m.b(2), 6)
  t.is(m.c(2), 8)
})
