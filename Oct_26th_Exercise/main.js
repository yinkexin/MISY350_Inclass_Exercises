console.log("hello");

//arrays
let bucket_list = ["love earth", "love life", "love yourself"];
console.log(bucket_list[2]);


//for loop
for (let i = 0; i < bucket_list.length; i++){
  console.log(bucket_list[i]);
}

let movie_list_1 = [
  "1The Sound of Music",
  "2Gone with Wind",
  "3Titanic",
  "4Frozen",
  "5Batman"
]

let movie_list_2 = [
  "The Sound of Music_1",
  "Gone with Wind",
  "Titanic_1",
  "Frozen",
  "Batman"
]

for (let i = 0; i < movie_list_1.length; i++){
  for (let j = 0; j <movie_list_2.length; j++){
    if (movie_list_1[i] == movie_list_2[j]){
      console.log(movie_list_1[i]);
    }
  }
}

let balance = 100
let years = 0
while (balance < 1000000){
  balance += balance * 0.03;
  years ++;
}
console.log("When " + years + " years goes by, I will become a millionare");

movie_list_1.forEach(function(movie){
  console.log(" - " + movie)
})


let new_list = movie_list_1.filter(movie => movie.slice(0, 1) == "1");

new_list.forEach(function(movie){
  console.log(" - " + movie)
})
