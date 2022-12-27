var sentence = "I AM Learning JavaScript, The Language Of Internet";
counter = 0;for (let index = 0; index < sentence.length; index++) 
{var char = sentence.charAt(index);
    if (char=='a' || char=='A')
        {console.log(char);counter = counter +1;}}
        console.log(`Total "a" and "A" in this sentance : ${counter}`);

//         var string = "My favorite movie is LAggan";
// counter = 0;for (let index = 0; index < string.length; index++) 
// {var char = string.charAt(index);
//     if (char=='a' || char=='A')
//         {console.log(char);counter = counter +1;}}
//         console.log(`My favorite movie is LAggan : ${counter}`);
console.log(` My favourite movie is LAggAn`);
var sentence = "My favourite movie is LAggAn";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='A' || char=='a') {
        console.log(char);
        counter = counter +1;
    }
    
}
console.log(`Total "a" and "A" in this sentance ${counter}`);