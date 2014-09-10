function Client (name, age, quote, city) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.city = city;
}

var adam = new Client ("Adam Sandler", 47, "That's your home! Are you too good for your home?!", "LA");
var kirsten = new Client ("Kristen Bell", 33, "Do you wanna build a snowman?", "London")
var jim = new Client ("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!", "Wellington")
var shooterMcGavin = new Client ("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.", "New York");


// Test code:
shooterMcGavin.constructor === Client;
shooterMcGavin.clientAge === 48;
shooterMcGavin.clientQuote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

function Blurb (client) {
  console.log("One of our clients is" + " " + client.name + ", who is" + " " + client.age + "years old. He is well known for his quote:" + " " + client.quote + " " + "and lives in" + " " + client.city)
}

Blurb(jim);
Blurb(kirsten);
Blurb(adam);


// 4. show quote


jim.showQuote =  function () {
  console.log(jim.quote);
}

jim.showQuote();
