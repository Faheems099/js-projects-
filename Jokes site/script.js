let no = Math.floor(Math.random() * 23)
no = Number.parseInt(no)

let arr = [`1. “Is there a hole in your shoe?”
“No.”
“Then how did you get your foot into it?”`,
  `
2. What do you call a kid with no arms, no legs and an eye patch?
Names!`,
  `
3. A vulture boards a plane carrying two dead raccoons.
The flight attendant looks and says, “I´m sorry, but we only allow each passenger one carrion.”`
  , `
4. What´s the stupidest animal in the jungle?
The polar bear.`
  , `
5. A toothless termite walked into a pub and asked: “Is the bar tender here?”`
  , `
6. Two mice chewing on a film roll.
One of them says. “I think the book was better.”`
  , `
7. What kind of bagel can fly?
A plain bagel.`
  , `
8. Would you mind if I took a picture of you naked?
Sure, why not – if it isn’t too cold for you here?
`,
  `9. What was a more important invention than the first telephone?
The second one.`
  , `10. A farmer in the field with his cows counted 196 of them, but when he rounded them up, he had 200.`,
  `
11. My grandfather had the heart of lion and a lifetime ban from the New your city zoo.`
  , `12. Where did Lucy go after the explosion?
Everywhere.`

  , `13. Did you hear about the two antennas that got married?
It was a nice ceremony… but the reception was amazing.`
  , `14. What did the pirate say on his 80th birthday?
Aye matey.`

  , `15. I remember the last thing my grandpa said to me before he kicked the bucket.
He said, “Hey Jack, how far do you think I can kick this bucket?” `
  , `16. A man walks into a zoo.
The only animal in the entire zoo is a dog.
It´s a ShihTzu.`

  , `17. Knock knock.
Who´s there?
Europe who?
No ur a poo haha.`
  , ` 18. Patient: "Doctor help me please, every time I drink a cup of coffee I get this intense stinging in my eye."
Doctor: "I suggest you remove the spoon before drinking."`

  , `19. And the lord said unto John, “Come forth and you will receive eternal life”.
But John came fifth, and won a toaster.`
  , ` 20. Two polar bears are sitting in a bathtub.
The first one says, “Pass the soap.”
The second one says, “No soap, radio!” `
  ,
  `21. Bill Gates farted in an apple store and stank up the entire place.`,
  `But it´s their own fault for not having windows.
,`
  , `22. “You know, it´s times like this I wished I had listened to what my mother has always told me.”
“What did she say?”
“I don´t know, I wasn´t listening.”`
]
let first = document.getElementById('first')
first.innerHTML = arr[no]
first.style.background = 'green'
first.style.color = 'orange'
document.body.style.background = 'red'