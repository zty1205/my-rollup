export default class Person {
  constructor (name, gender) {
      this.name = name
      this.gender = gender
  }
  say () {
    console.log("123zxc乱码不")
    console.log(`我的名字是${this.name}，我是一个${this.gender}`)
  }
}