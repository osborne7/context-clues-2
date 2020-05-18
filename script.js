document.addEventListener('DOMContentLoaded', function() {
    //add 100 h3s when page loads
    var friends = ['Elizabeth', 'Jessica', 'Robert', 'Ethan', 'Evan'];
    var locations = ['garden', 'porch', 'living room', 'dining room', 'bedroom', 'library', 'kitchen', 'garage', 'office', 'den'];
    var weapons = ['pen', 'pencil', 'scissors', 'knife', 'shoe', 'bracelet', 'paper clip', 'candle', 'rope', 'belt', 'gun', 'knife', 'pot', 'pan', 'watch', 'glass', 'bottle', 'phone', 'bat', 'flower pot'];

    for (var i = 0; i < 100; i++) {
        var accusation = document.createTextNode('Accusation ' + (i+1));
        console.log(accusation);
        var h3 = document.createElement('h3');
        h3.appendChild(accusation);
        document.body.appendChild(h3);
        h3.addEventListener('click', getAlert(i));

    };

    function getAlert(i) {
        var friend = friends[i % 5];
        console.log(friend);
        var location = locations[i % 10];
        console.log(location);
        var weapon = weapons[i % 20];
        console.log(weapon);
        function displayAlert() {
            var alertText = `Accusation ${i + 1}: I accuse ${friend}, with the ${weapon} in the ${location}.`;
            alert(alertText);
            console.log('alertText' + alertText);
        }
        return displayAlert;
    }




})