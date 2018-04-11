<template>
  <div class="wrapper">
    <h1># Module Stack Visualization Demo</h1>
    <div class="row">
      <div class="col-6">
        <p># Stack Data :</p>
        <ul class="stack">
          <li v-for="(item, index) in caches" :key="index" :class="{'on': idx === index, 'cursor': cursor === index}">
            {{ index }} - {{ JSON.stringify(item)}}
          </li>
        </ul>
        <p># Index : {{ idx }} | Red Cursor: {{ cursor }}</p>
      </div>
      <div class="col-6">
        <h3># Render Area</h3>
        <div class="render">
          {{ currentData }}
        </div>
        <p>
          <span>History Api</span>
        </p>
        <p>
          <button @click="push">push</button>
          <button @click="pop">pop</button>
          <button @click="backward">backward</button>
          <button @click="forward">forward</button>
        </p>
        <br>
        <p>
          <button @click="insert">insert</button>
          <button @click="swap">swap</button>
          <button @click="move">move</button>
        </p>
        <br>
        <p>
          <span>Red Cursor</span>
        </p>
        <p>
          <button @click="down">up</button>
          <button @click="up">down</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Stack from './stack'

export default {
  name: 'app',
  data () {
    return {
      stack: new Stack({max: 10}),
      cursor: 0
    }
  },
  computed: {
    caches () {
      return this.stack.data
    },
    idx () {
      return this.stack.index
    },
    currentData () {
      return this.caches[this.idx]
    }
  },
  methods: {
    push () {
      let r = Math.floor(Math.random() * 1e8).toString(16)
      this.stack.push({m: 'push', r})
    },
    insert () {
      let r = Math.floor(Math.random() * 1e8).toString(16)
      this.stack.insert({m: 'insert', r})
    },
    pop () {
      this.stack.pop()
    },
    forward () {
      this.stack.forward()
    },
    backward () {
      this.stack.backward()
    },
    swap () {
      this.stack.swap(this.idx, this.cursor)
    },
    move () {
      this.stack.move(this.idx, this.cursor)
    },
    up () {
      if (this.cursor < this.caches.length - 1) {
        this.cursor++
      }
    },
    down () {
      if (this.cursor > 0) {
        this.cursor--
      }
    }
  },
  mounted () {
    window.h = this.stack
    let r = Math.floor(Math.random() * 1e8).toString(16)
    h.push({m: 'exist', r})
      .push({m: 'exist', r: '13cd'})
      .push({m: 'exist', r: '987adec'})
      .push({m: 'exist', r: '42342'})
      .push({m: 'exist', r: '2463'})
  }
}
</script>

<style>
.stack {
  list-style: none;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
}
li {
  border: 1px solid #eee;
  padding: 10px;
  font-size: 14px;
}
.on {
  border: 1px solid #22f;
  position: relative;
}
.on:before {
  content: '';
  position: absolute;
  left: -20px;
  top: 10px;
  width: 0px;
  height: 0;
  text-align: center;
  border-width: 8px 12px;
  border-style: solid;
  border-color: transparent transparent transparent #22f;
}
.cursor{
  position: relative;
  border-bottom: 1px solid #f22;
}
.cursor:after {
  content: '';
  position: absolute;
  right: -20px;
  top: 10px;
  width: 0px;
  height: 0;
  text-align: center;
  border-width: 8px 12px;
  border-style: solid;
  border-color: transparent #f22 transparent transparent;
}
button {
  padding: 10px;
}
.render {
  border: 1px solid #ddd;
  padding: 20px;
}
.col-6 {
  float: left;
  width: 40%;
  padding: 0 5%;
}
</style>
