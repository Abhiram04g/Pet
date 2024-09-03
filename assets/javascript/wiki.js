$('#search').on('click', function (event) {
    event.preventDefault();
    var breed = $('#breed').val();
    var animal = $('#animal').val();
    if (breed) {
        if (!breed.includes('Cat') && !breed.includes('Dog') && !breed.includes('Hound') && !breed.includes('hound') && !breed.includes('dog') && !breed.includes('Terrier') && !breed.includes('Spaniel') && !breed.includes('Shepherd') && !breed.includes('Kelpie') && !breed.includes('Collie') && !breed.includes('Retriever') && !breed.includes('Labrador') && !breed.includes('Mastiff') && !breed.includes('Ovtcharka') && !breed.includes('Schnauzer') && !breed.includes('Schipperke') && !breed.includes('Inu') && !breed.includes('Tzu') && !breed.includes('Husky') && !breed.includes('Beauceron') && !breed.includes('Affenpinscher')) {
            breed = breed + ' ' + animal;
        }
        var wikiUrl = 'https://en.wikipedia.org/w/api.php?&callback=?&redirects';
        $('#wikiSection').empty();
        $.ajax({
            url: wikiUrl,
            method: 'GET',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: {
                format: 'json',
                prop: 'extracts',
                action: 'query',
                exlimit: '1',
                titles: breed,
            }
        }).done(function (response) {
            $('#wikiSection').append(Object.values(response.query.pages)[0].extract);
        });
    }
    else if (animal) {
        var wikiUrl = 'https://en.wikipedia.org/w/api.php?&callback=?&redirects';
        $('#wikiSection').empty();
        $.ajax({
            url: wikiUrl,
            method: 'GET',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: {
                format: 'json',
                prop: 'extracts',
                action: 'query',
                exlimit: '1',
                titles: animal,
            }
        }).done(function (response) {
            $('#wikiSection').append(Object.values(response.query.pages)[0].extract);
        });
    }
});