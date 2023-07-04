function repeatDiv(idName, count, deep) {
    var ogDash = document.getElementById(idName);
    for (var i = 0, copy; i < count - 1; i++) {
        copy = ogDash.cloneNode(deep);
        ogDash.parentNode.insertBefore(copy, ogDash);
    }
}

repeatDiv("dash", 95, true);