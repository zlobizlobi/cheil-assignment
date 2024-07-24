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

- Since some time ago I've moved back to writing plain, pre-ES6 function declarations as I think that they simplify reading the code:

```
function doSomething(){
    return 'Im doing something'
}
```

Keep it simple, but this is an opinion of course. I'm well aware on how to write arrow functions and adhere to ES6. If the project would require this - that wouldn't be a problem.

- Yet, I think a lot of time and effort is wasted on trying to write code so to only stick to the given conventions of the programming language. To give an example: writing a simple `.forEach` loop with a `let array = [];` in stead of complicating the mind of a fellow developer with a `.reduce` function, where one needs to remind himself of the `acc`, `i` etc. I mean, everyone can go to MDN and remind themselves of the latter, yet why do so, if you can achieve the same result with a much easier to read syntax. But again, this is personal preference :). My mind is open for any approach.
