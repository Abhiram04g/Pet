$('#search').on('click', function (event) {
    event.preventDefault();
    var regex = /\b\d\d\d\d\d\b/gi;
    if ($('#pincode').val().match(regex)) {
        $('#cards0').empty();
        $('#cards1').empty();
        var location = $('#pincode').val();
        var breed = $('#breed').val();
        var sex = $('#sex').val();
        var age = $('#age').val();
        var animal = $('#animal').val();
        var size = $('#size').val();
        var params = {
            key: apiKey,
            format: 'json',
            count: 24
        };
        if (breed) params.breed = breed;
        if (age) params.age = age;
        if (sex) params.sex = sex;
        if (animal) params.animal = animal;
        if (size) size.size = size;
        if (location) params.location = location;
        $.ajax({
            url: queryUrl,
            method: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            data: params
        }).done(function (response) {
            var petRef = response.petfinder.pets.pet;
            if (Array.isArray(petRef)) {
                for (var i = 0; i < petRef.length; i++) {
                    var cardBuilder = {
                        name: petRef[i].name.$t,
                        email: petRef[i].contact.email.$t,
                        shelterId: petRef[i].shelterId.$t,
                        imgSrc: petRef[i].media.photos.photo[2].$t,
                        description: petRef[i].description.$t,
                        id: petRef[i].id.$t,
                        animal: petRef[i].animal.$t
                    };
                    var card = petCardBuilder(cardBuilder);
                    var cardCol = '#cards' + i % 2;
                    $(cardCol).append(card);
                }
            }
            else {
                var cardBuilder = {
                    name: petRef.name.$t,
                    email: petRef.contact.email.$t,
                    shelterId: petRef.shelterId.$t,
                    imgSrc: petRef.media.photos.photo[2].$t,
                    description: petRef.description.$t,
                    id: petRef.id.$t,
                    animal: petRef.animal.$t
                };
                var card = petCardBuilder(cardBuilder);
                $('#cards0').append(card);
            }
            if (userRef) {
                userRef.off();
                userRef.on('child_added', function (snap) {
                    if($('[data-id="' + snap.key + '"]').children().length){
                        $('[data-id="' + snap.key + '"]').children('.card-image').children('a').children('i').text('favorite');
                    }
                });
                userRef.on('child_removed', function (snap) {
                    if($('[data-id="' + snap.key + '"]').children().length){
                        $('[data-id="' + snap.key + '"]').children('.card-image').children('a').children('i').text('favorite_border');
                    }
                });
            }
        });
    }
    else {
        Materialize.toast('Invalid Pincode', 3000);
    }
});