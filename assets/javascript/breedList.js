$('#animal').on('change', function () {
    if ($(this).val()) {
        var queryUrl = 'https://api.petfinder.com/breed.list';
        var apiKey = 'fff64394dcb68ac0d534ca0aa808bd69';
        var animal = $(this).val().toLowerCase();
        $.ajax({
            url: queryUrl,
            method: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            data: {
                key: apiKey,
                animal: animal,
                format: 'json'
            }
        }).done(function (response) {
            var breeds = response.petfinder.breeds.breed;
            $('#breed').empty();
            $('#breed').append('<option value="">No Pref</option>');
            for (var i = 0; i < breeds.length; i++) {
                $('#breed').append($('<option>' + breeds[i].$t + '</option>'));
            }
            $('#breed').material_select();
        });
    }
    else {
        $('#breed').empty();
        $('#breed').material_select();
    }
});