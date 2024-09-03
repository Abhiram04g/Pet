function petCardBuilder(petRef) {
    var icon = 'favorite_border';
    var card = $('<div class="card teal petCard"></div>');
    card.attr('data-email', petRef.email);
    card.attr('data-shelterId', petRef.shelterId);
    card.attr('data-id', petRef.id);
    card.attr('data-animal', petRef.animal);
    var petCard = $('<div class="card-image"></div>');
    petCard.append($('<img class = "petPic" src = "' + petRef.imgSrc + '" />'));
    if (petRef.key) {
        icon = 'favorite';
    }
    petCard.append($('<a class="btn-floating btn-large halfway-fab waves-effect waves-light red favButton"><i class="material-icons">' + icon + '</i></a>'));
    card.append(petCard);
    card.append($('<div class="card-content left-align white-text">' + '<span class="white-text card-title">' + petRef.name + '</span>' + '<p class="desc">' + petRef.description + '</p>' + '</div>'));
    card.append($('<div class="card-action"><div class="row"><a class="mapLink modal-trigger center btn cardBtn" href="#modal1"><i class="material-icons">location_on</i>Shelter</a><a class="emailLink center btn cardBtn" href="mailto:' + petRef.email + '?subject=' + petRef.name + '"><i class="material-icons">mail</i> Email</a><a class="facebookLink center btn cardBtn"><i class="material-icons">share</i>Share</a></div></div>'));
    return card;
}