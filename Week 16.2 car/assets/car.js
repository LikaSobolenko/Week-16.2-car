let arr = [];
document.querySelector('.btn').onclick = () => {
    let radio = document.querySelectorAll('input[name="flexRadioDefault"]');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            arr.push(radio[i].value);
        }
    };

    let box = document.querySelectorAll('input[name="checkbox"]');
    for (let i = 0; i < box.length; i++) {
        if (box[i].checked) {
            arr.push(box[i].value);
        }
    };

    let selects = document.getElementsByClassName('sel');

    for (let i = 0; i < selects.length; i++) {
        let sel = selects[i];
        let selValue = sel.options[sel.selectedIndex].value;
        arr.push(selValue);
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    let result = "Сумма: " + sum;
    document.getElementById('result').innerHTML = result;
}