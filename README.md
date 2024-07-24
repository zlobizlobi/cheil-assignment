## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Notes

Since some time ago I've moved back to writing plain, pre-ES6 function declarations when I have the freedom to do so, as I think that they simplify reading the code, at least for me, i.e.:

```
function doSomething(){
    return 'Im doing something'
}
```

or

```
export function Component(){
    return <div/>
}
```

This, of course, doesn't apply to a memoized functions like `useCallback`.

I think a lot of time and effort is wasted on trying to write code so to only stick to the new and given conventions of the programming language. To give another example: writing a simple `.forEach` loop with a `let array = [];` in stead of complicating the mind of a fellow developer with a `.reduce` function, where one needs to remind himself of how the method works. Everyone can go to MDN and remind themselves of the latter, yet why do so, if you can achieve the same result with a much easier to read syntax. Ultimately - this is personal preference and I'm open for any approach.

I want to stress that I'm well aware of how to adhere to ES6, so if the project would require this - that wouldn't be a problem. If needed I can show many of many projects from the past where I've done so.
