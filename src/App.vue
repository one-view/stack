<template>
  <div class="wrapper">
    <h1>Stack Visualized Demo</h1>
    <div class="cf">
      <div class="col-6">
        <p>Stack Data :</p>
        <ul class="stack">
          <li class="cf" v-for="(item, index) in caches" :key="index" :class="{'on': idx === index, 'cursor': cursor === index}">
            {{ index }} - {{ JSON.stringify(item)}}
            <span :style="{'background': `#${item.r}`}"></span>
          </li>
        </ul>
        <p>Stack Index : <span class="blue">{{ idx }}</span> | Red Cursor: <span class="red">{{ cursor }}</span></p>
      </div>
      <div class="col-6">
        <h3>Render Area</h3>
        <div class="render" :style="{'background': `#${currentData.r}`}" v-if="currentData">
          {{ currentData }}
        </div>
        <br>
        <p>
          <span>Api</span>
        </p>
        <p>
          <button @click="push">push</button>
          <button @click="pop">pop</button>
          <button @click="backward">backward</button>
          <button @click="forward">forward</button>
        </p>
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
      stack: new Stack(10),
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
      let r = Math.floor(Math.random() * 1e7).toString(16)
      r = `f${r}`.slice(-6)
      this.stack.push({m: 'push', r})
    },
    insert () {
      let r = Math.floor(Math.random() * 1e7).toString(16)
      r = `f${r}`.slice(-6)
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
    h.push({m: 'exist', r: '79a167'})
      .push({m: 'exist', r: '647172'})
      .push({m: 'exist', r: '909a76'})
    this.push()
    this.push()
    this.insert()
    this.insert()
  }
}
</script>

<style>
.wrapper {
  padding: 20px;
  color: #3d4248;
}
.cf {
  zoom: 1;
}
.cf:before {
  display: table;
  content: '';
}
.cf:after {
  display: table;
  content: '';
  clear: both;
}
.col-6 {
  float: left;
  width: 40%;
  padding: 0 5%;
}
.red{
  color: #E91E63;
}
.blue{
  color: #3F51B5;
}
h1{
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  color: #3F51B5;
}
button {
  padding: 10px;
  background: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  outline: none;
}
button:hover {
  background: #f8f8f8;
}
button:active {
  background: #eee;
}
.stack {
  list-style: none;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
}
.stack li {
  border: 1px solid #eee;
  padding: 10px;
  font-size: 14px;
}
.stack span {
  float: right;
  padding: 6px;
}
.on {
  border: 1px solid #3F51B5;
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
  border-color: transparent transparent transparent #3F51B5;
}
.cursor{
  position: relative;
  border-bottom: 1px solid #E91E63;
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
  border-color: transparent #E91E63 transparent transparent;
}
.render {
  border: 1px solid #ddd;
  padding: 20px;
  color: #fff;
}
</style>
