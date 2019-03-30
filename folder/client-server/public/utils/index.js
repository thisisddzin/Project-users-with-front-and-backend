const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const log = console.log.bind(console)

class Utils {

    static formatData (value) {

        return `${value.getDate()}/${value.getMonth()}/${value.getFullYear()} ${value.getHours()}:${value.getMinutes()}` 

    }

}