/**
 * From: http://stackoverflow.com/questions/2332811/capitalize-words-in-string
 */
String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};
