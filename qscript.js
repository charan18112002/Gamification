function getSelectedStandard() {
    var standard = document.getElementById('standard').Value;
    alert('You selected: ' + standard);
}
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var selectedClass = document.getElementById('standard').value;

    if (selectedClass) {
        window.location.href = selectedClass + '.html';;
    } else {
        alert('Please select a class before');
    }
});