
export class Methods<A> { }

export type PreventCollisions<A, B, C = never> = Extract<keyof A, keyof B | keyof C> extends never
  ? Extract<keyof A | keyof C, keyof B> extends never
    ? Ctor<A & B & C>
    : 'Error: Multiple mixins implement the following methods:' & Methods<Extract<keyof A | keyof C, keyof B>>
  : 'Error: Multiple mixins implement the following methods:' & Methods<Extract<keyof A, keyof B | keyof C>>

export function mixin<A>(a: Ctor<A>): Ctor<A>
export function mixin<A, B, R = PreventCollisions<A, B, {}>>(a: Ctor<A>, b: Ctor<B>): R
export function mixin<A, B, C, R = PreventCollisions<A, B, C>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>): R
// export function mixin<A, B, C, D, R = PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>): R
// export function mixin<A, B, C, D, E, R = PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>, E>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>, e: Ctor<E>): R
// export function mixin<A, B, C, D, E, F, R = PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>, E>, F>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>, e: Ctor<E>, f: Ctor<F>): R
// export function mixin<A, B, C, D, E, F, G, R = PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<PreventCollisions<A, B>, C>, D>, E>, F>, G>>(a: Ctor<A>, b: Ctor<B>, c: Ctor<C>, d: Ctor<D>, e: Ctor<E>, f: Ctor<F>, g: Ctor<G>): R
export function mixin(...as: Ctor<any>[]) {
  return as.reduce((c, a) => {
    c.prototype = { ...c.prototype, ...a.prototype }
    return c
  }, class {})
}

export interface Ctor<T> {
  new (...args: any[]): T
}
