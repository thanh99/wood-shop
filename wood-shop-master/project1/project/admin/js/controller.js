const controller = {}
let productApiUrl = 'http://localhost:3000/products'

controller.getListProduct = async (pageSize = 10, pageIndex = 1, inputSearch = '') => {
    url = productApiUrl + `?pageSize=${pageSize}&search=${inputSearch}&pageIndex=${pageIndex}`

    console.log(url)
    let res = await fetch(url)
    let listProduct = await res.json()
    model.saveListProduct(listProduct)
    console.log(model.listProduct)
}

controller.getListProductBySize = async () => {
    let pageSize = document.getElementById("sizeNumber").value;
    await controller.getListProduct(pageSize)
    await controller.getPagination(pageSize)
    view.showTable()
    view.showPagination()
}

controller.search = async () => {
    let inputSearch = document.getElementById("formToFindInput").value;
    let pageSize = document.getElementById("sizeNumber").value;
    await controller.getListProduct(pageSize, inputSearch)
    view.showTable()
}

controller.getListProductByPage = async (currentPage = 1) => {
    console.log(currentPage)
    model.saveCurrentPage(currentPage)
    let inputSearch = document.getElementById("formToFindInput").value;
    let pageSize = document.getElementById("sizeNumber").value;
    controller.getListProduct(pageSize, currentPage, inputSearch)
    controller.getPagination(pageSize)
    view.showPagination()
    view.showTable()
}

controller.getPagination = async (pageSize = 10) => {
    let url = productApiUrl + `?count=true&pageSize=${pageSize}`
    let res = await fetch(url)
    let listProduct = await res.json()
    model.saveNumberOfPage(listProduct.result)
    console.log(model.numberOfPage)
}