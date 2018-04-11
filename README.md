# Stack

> Stack module

```
import Stack from 'one-stack'

const stack = new Stack({
    max: 10
})
```

### API

push(data)
pop()
forward()
backward()

insert(data)
swap(oldIdx, newIdx)
move(oldIdx, newIdx)

get isEmpty
get curData


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
