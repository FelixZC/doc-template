---
pageClass: custom-page-class
---

[[toc]]

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | /$1600 |
| col 2 is      |   centered    |   /$12 |
| zebra stripes |   are neat    |    /$1 |

:tada: :100:

::: tip
This is a tip
:::

::: details
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

:::: code-group
::: code-group-item FOO

```js
const foo = 'foo'
```

:::
::: code-group-item BAR

```js
const bar = 'bar'
```

:::
::::

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

```js{4}
export default {
  data() {
    return {
      msg: "Highlighted!",
    };
  },
};
```

```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: '你好， VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

```js{1,4,6-7}
export default {
  // Highlighted
  data() {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: "VitePress is awesome",
      lorem: "ipsum",
    };
  },
};
```

{{ 1 + 1 }}
<span v-for="i in 3">{{ i }} </span>

@[code{3-10} js{3}:no-line-number](./test/snippet-with-region.js)

```md
<!-- 默认情况下，这里会被保持原样 -->

1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
