const name = "mayank"
const repo = 3
 console.log(name + repo + "Value");

 console.log(`hello my name is ${name} and my repo count is ${repo}`);  //new recents code

 /* string interpolation */

 const gameName = new String('MayankShrivastava')
 console.log(typeof(gameName));

 console.log(gameName[0]);
 console.log(gameName.__proto__);


 console.log(gameName.length);

 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.valueOf("a"));
 console.log(gameName.indexOf("a"));
 console.log(gameName.blink);

 const newString= gameName.substring(0,8)

 console.log(newString);


 const anotherString=gameName.slice(-17,0)

 console.log(anotherString);



 const newStringone = "   maya nk   "

 console.log(newStringone.trim());
 console.log(newStringone.trim(" "));


 const url = "https://mayank.com/mayank%20shrivastava"

 console.log(url.replace("%20","-"));


 console.log(url.includes("mayank"));

 const newString2 = new String("mayank-n-shrivastava")

 console.log(newString2.split("-"));