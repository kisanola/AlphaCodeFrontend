export default str =>
    str && typeof str === 'string' ?
    `${str[0].toUpperCase()}${str.substr(1)}` :
    '';