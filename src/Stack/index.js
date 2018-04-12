class Stack {
  constructor (max = 20) {
    this.data = []
    this.index = -1
    this.max = max
  }

  push (data) {
    let nextIdx = this.index + 1
    this.data.splice(nextIdx, this.data.length - nextIdx)
    this.data.push(data)

    if (this.data.length > this.max) {
      this.data.shift()
    }

    this.index = this.data.length - 1
    return this
  }

  pop () {
    this.data.splice(this.index, 1)

    if (this.index > this.data.length - 1) {
      this.index = this.data.length - 1
    }
    return this
  }
  // 游标前进, 历史回退
  forward () {
    if (this.index < this.data.length - 1) {
      this.index++
    }
    return this
  }
  // 游标后退，历史回退
  backward () {
    if (this.index >= 0) {
      this.index--
    }
    return this
  }

  insert (data) {
    this.data.splice(this.index + 1, 0, data)

    if (this.data.length > this.max) {
      this.data.shift()
    }
    return this
  }

  swap (idx, newIdx) {
    if (idx === newIdx || newIdx > this.data.length - 1 || newIdx < 0) return
    let data = this.data[newIdx]
    this.data.splice(newIdx, 1, this.data[idx])
    this.data.splice(idx, 1, data)
    return this
  }

  move (idx, newIdx) {
    let stack = this.data[idx]
    this.data.splice(newIdx + 1, 0, stack)
    // if target index is lower than current index, remove a plused index cause has inserted one data
    this.data.splice(idx < newIdx ? idx : idx + 1, 1)
    return this
  }
}

export default Stack
