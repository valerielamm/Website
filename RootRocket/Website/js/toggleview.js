function toggleview(viewId) {
    var togglable = document.getElementsByClassName("togglable");
    var underlinable = document.getElementsByClassName("underlinable");

    for (let i = 0; i < togglable.length; i++) {
        underlinable[i].className = underlinable[i].className.replace(" underline", " ");
        togglable[i].style.display = "none";
    }
    
    togglable[viewId - 1].style.display = "block";
    underlinable[viewId - 1].className += " underline";
}
