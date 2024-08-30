class Stage {
    constructor(char1,char2,char1Element, char2Element){
        this.char1 = char1
        this.char2 = char2
        this.char1Element = char1Element
        this.char2Element = char2Element
    }

    start() { 
        this.update()
    }

    update() {
        // char1
        this.char1Element.querySelector('.name').innerHTML = ˋ${this.char1.name} - ${this.char1.life} HPˋ
        //barra de vida
        let char1HP = (this.char1.life / this.char1.maxLife) * 100
        this.char1Element.querySelector('.bar').style.width = ˋ${char1HP}%ˋ

        // char2 
        this.char2Element.querySelector('.name').innerHTML = ˋ${this.char2.name} - ${this.char2.life} HPˋ
        // barra de vida
        let char2HP = (this.char2.life / this.char2.maxLife) * 100
        this.char2Element.querySelector('.bar').style.width =ˋ${char2HP}%ˋ
    }   
}
