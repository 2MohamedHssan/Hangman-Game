let letters = "abcdefghijklmnopqrstuvwxyz"
let arrofletter = Array.from(letters.toLocaleUpperCase())
for(i=0; i<arrofletter.length; i++){    
    let span = document.createElement("span")
    span.appendChild(document.createTextNode(arrofletter[i]))
    span.classList.add("design")
    let lettercontainer=document.querySelector(".letters")
    lettercontainer.appendChild(span)   
}

const words={
    Programming : ["PHP","JAVASCRIPT","GO","PYTHON","MYSQL","JAVA","KOTLEN"],
    Pepole:["MOHAMED","AHMED","ALI","OMR","KHALED","MOSTAFA","ASSMA","AYA","MARYM"],
    Countries:["EGYPT","SYRIA","PALESTINE","YMEN","BAHRAIN","QATAR"],
    Movies:["UP","COCO","CONAN","CAPTAIN AMIRYCA","LAN OF BAD","MED MAX"]
}

let allword = Object.keys(words)
let randomprop = Math.floor(Math.random() * allword.length)
let randompropValues = allword[randomprop]
let randomwors = words[randompropValues] 

let nameslength = Math.floor(Math.random() * randomwors.length)
let names = randomwors[nameslength]

document.querySelector("span").innerHTML=randompropValues
let nameArr = Array.from(names)
let mydivletter = document.querySelector(".lettergues")
nameArr.forEach((e)=>{
    let span = document.createElement("span")
    mydivletter.appendChild(span)
    if(e === " "){
        span.classList.add("space")
    }
})
let drow= document.querySelector(".draw")
let worng=0
let wener = []
document.querySelectorAll(".design").forEach((e)=> e.addEventListener("click",function(){
    let stuts = false
    let spans = document.querySelectorAll(".lettergues span")
    this.classList.add("clik")    
    nameArr.forEach((ele,idex)=>{
        if(this.innerHTML == ele){
         spans.forEach((e,i)=>{
            if(idex == i){
                e.innerHTML = ele
            }
            stuts=true
        })
        wener.push(this.innerHTML)
        }
        })
        // /to do print the crekte 
        if(stuts !==true){
            worng++
            drow.classList.add(`drowing-${worng}`)
            if(worng ===7){
        document.querySelector("#lose").play()
        setTimeout(() => {
            document.querySelector(".coreckme").innerHTML = `The Letter Is : ${nameArr.join(" ")}`
            document.querySelector(".coreckme").classList.add("coreckmecl")
            document.querySelector('.overlay').style.display="block"
            document.querySelector('.lose').style.display="block"
            document.querySelector('.overlay span').onclick = function(){
            window.location.reload()
        }
    }, 1000);
}
}
  if(nameArr.length === wener.length){
    document.querySelector('.overlay').style.display="block"
    document.querySelector('.won').style.display="block"
      document.querySelector("#wonton").play()
    document.querySelector('.overlay span').onclick = function(){
        window.location.reload()
    }
        }
}))
