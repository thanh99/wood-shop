

const controller = {}
let productApiUrl = 'http://localhost:3000/products'

controller.getListProduct = async (pageSize = 10, pageIndex = 1, inputSearch = '', sort = 1) => {
    if(pageSize) {
        pageSize = 10
    }
    url = productApiUrl + `?pageSize=${pageSize}&search=${inputSearch}&pageIndex=${pageIndex}&sort=${sort}`

    console.log(url)
    let res = await fetch(url)
    let listProduct = await res.json()
    model.saveListProduct(listProduct)
}

controller.getListProductBySize = async () => {
    let pageSize = document.getElementById("sizeNumber").value;
    await controller.getListProduct(pageSize)
    await controller.getPagination(pageSize)
    view.showTable()
    view.showPagination()
}

controller.getListProductBySort = async (sort) => {
    let pageSize = document.getElementById("sizeNumber").value;
    let search = document.getElementById("formToFindInput").value;
    let pageIndex = model.currentPage
    await controller.getListProduct(pageSize, pageIndex, search, sort)
    view.showTable()
}

controller.getListProductByPage = async (currentPage = 1) => {
    console.log(currentPage)
    model.saveCurrentPage(currentPage)
    let inputSearch = document.getElementById("formToFindInput").value;
    let pageSize = document.getElementById("sizeNumber").value;
    await controller.getListProduct(pageSize, currentPage, inputSearch)
    view.showTable()
    await controller.getPagination(pageSize)
    view.showPagination()
}

controller.search = async () => {
    let inputSearch = document.getElementById("formToFindInput").value;
    let pageSize = document.getElementById("sizeNumber").value;
    await controller.getListProduct(pageSize, inputSearch)
    view.showTable()
}

controller.movePagination = async (condition) => {
    let pageSize = document.getElementById("sizeNumber").value;
    await controller.getPagination(pageSize)
    currentPage = model.currentPage;
    if (condition == -1) {
        if (currentPage == 1) {
            model.currentPage = 1
        }
        else {
            model.currentPage = currentPage - 1;
        }
    }
    else {
        if (currentPage == model.numberOfPage) {
            model.currentPage = model.numberOfPage
        }
        else {
            model.currentPage = currentPage + 1;
        }
    }
    console.log(model.currentPage)

    await controller.getPagination(pageSize)
    await controller.getListProductByPage(model.currentPage)
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

controller.addProduct = async () => {
    $("#modalAddBlog").modal("hide");
    let data =
    {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        image: document.querySelector('#image').value,
        description: document.querySelector('#description').value,
        status: document.querySelector('#status').value,
        category: document.querySelector('#category').value,
    }
    await createProduct(data)
    let pageSize = document.getElementById("sizeNumber").value;
    let search = document.getElementById("formToFindInput").value;
    let pageIndex = model.currentPage
    await controller.getListProduct(pageSize, pageIndex, search)
    view.showTable();
}

controller.showModalUpdate = async (id) => {
    $("#modalUpdateProduct").modal('show');
    url = productApiUrl + `/${id}`

    console.log(url)
    let data = await fetch(url)
    
    // let data = await controller.getListProduct()
    
    let chosenData = await data.json()
    console.log(chosenData);
    


    document.getElementById('idU').value = chosenData._id
    document.getElementById('nameU').value = chosenData.name
    document.getElementById('priceU').value = chosenData.price
    document.getElementById('imageU').value = chosenData.image
    document.getElementById('descriptionU').value = chosenData.description
    document.getElementById('statusU').value = chosenData.status
    document.getElementById('categoryU').value = chosenData.category
}

controller.updateProduct = async(id) => {
    $("#modalUpdateProduct").modal("hide");
    let data =
    {
        _id: document.querySelector('#idU').value,
        name: document.querySelector('#nameU').value,
        price: document.querySelector('#priceU').value,
        image: document.querySelector('#imageU').value,
        description: document.querySelector('#descriptionU').value,
        status: document.querySelector('#statusU').value,
        category: document.querySelector('#categoryU').value,
    }
    await update(data)
    let pageSize = document.getElementById("sizeNumber").value;
    let search = document.getElementById("formToFindInput").value;
    let pageIndex = model.currentPage
    await controller.getListProduct(pageSize, pageIndex, search)
    view.showTable()
}

controller.delProduct = async (id) => {
    console.log('vao')
    await delProduct(id);
    let pageSize = document.getElementById("sizeNumber").value;
    let search = document.getElementById("formToFindInput").value;
    let pageIndex = model.currentPage
    await controller.getListProduct(pageSize, pageIndex, search)
    view.showTable()
}
// api
async function createProduct(data) {
    console.log(data)
    let res = await fetch(productApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let newProduct = await res.json()
    return newProduct
}

async function delProduct(id) {
    let url = productApiUrl + `/${id}`
    console.log(url)
    let res = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: ``
    })
    let port = await res.json()
}

async function update(data) {
    let res = await fetch(productApiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let newProduct = await res.json()
    return newProduct
}