# example-jswt-umd

Demo of an attempt to get Vanilla JS with Types that works with TSC and is consumable by Node, Vite, and Browser (script tags) without modification.

## Goal

1. Should work without modification \
   (Node, Browsers, and Bundlers - Vite, WebPack, etc)
2. Should not break cyclic dependencies \
   (use `exports` rather than overwriting it)
3. Type definitions should export as modules, not globally
4. Minimal boilerplate

Bonus 1: The `exports` can be implicitly typed.

I'm willing to give up #2 if it actually made the boilerplate significantly
simpler.

...

I am _considering_ the possibility of having a very simple build process to
export in 3 different files (node, browsers, bundlers) with simple
find-and-replace boilerplate changes, but that's a last resort.

Of course, those outputs have to still have to meet the other requirements...
which might still not be possible...
