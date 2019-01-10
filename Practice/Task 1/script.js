for (var i = 0; i < 9; i++) {
    var newEl = document.createElement("div");
    newEl.className = 'card';
    newEl.innerHTML = "<div>" +
    "<div class='card-header'>Международное сотрудничество во всех сферах деятельности</div>" + 
	"<div class='card-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam autem laborum quis inventore ipsum praesentium, omnis quam unde quia modi illo dignissimos aut! Enim natus eius aliquam assumenda unde!</div>" +
	"<button class='card_btn'>Try</button></div>";
    var cont = document.getElementById("main");
    cont.appendChild(newEl);
}
