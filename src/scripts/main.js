// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const groucho = {
    name: "Groucho",
    species: "dog",
    nicknames: ["goober","boy", "fluffy"],
    age: 2,
    lick: function(){
        console.log("slurp, slurp")
    },
    bark: function(){
        console.log("yap, yap, yap")
    },
    howl: function(){
        console.log("hooowwwwwwwwwwwwl")
    },
    favoriteToys:[],
    play: function(toy){
            if (toy.includes ("chewy")) {
                this.favoriteToys.push(toy)
            }
    }
}

groucho.bark()
groucho.howl()
groucho.lick()

groucho.play("chewy rawhide")
console.log(groucho.favoriteToys)