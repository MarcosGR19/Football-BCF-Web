export interface Player {
    "id":number, 
    "name":string,
    "team":team,
    "signUp":signUp,
    "img":string,
    "remains":boolean,
    "isPro":boolean
}

interface team{
    "name":string,
    "img":string
}

interface signUp {
    "date":string,
    "season":string,
    "michuPlayer":boolean
}