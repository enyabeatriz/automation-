

function searchElement() {
    let path = window.location.href//obter a ruta
    let lastPartPath = path.substring(path.lastIndexOf("/") + 1) //obter a palavra *.feature
    let page = lastPartPath.replace(".feature", "") //limpo o .feature para obter o texto que esta na frente

    return page
}

module.exports = {

    searchElement
}