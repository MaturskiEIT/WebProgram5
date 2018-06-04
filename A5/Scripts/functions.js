$(document).ready(function () {
    $('.sediste').click(function () {
        $('#broj').val($(this).attr("title"));
    });
    $('#slanje').click(function () {
        var broj = $('#broj').val();
        if (broj == "") {
            alert("Niste uneli broj sedista!!!");
        }
        else {
            if (document.getElementById('sediste' + broj).getAttribute('src') == "slike/bus_red.png")
                alert('Sediste broj ' + broj + ' je zauzeto!');
            else
                $('#sediste' + broj).attr('src', 'slike/bus_red.png');
        }
    });
});
