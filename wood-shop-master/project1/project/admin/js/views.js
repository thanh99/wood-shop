
const view = {};

view.showComponents = async function (name) {
    switch (name) {
        case 'main': {
            let app = document.getElementById('admin');
            app.innerHTML = components.header + components.search + components.table + components.size + components.pagination + components.footer;
            model.saveCurrentPage(1)
            await controller.getPagination()
            view.showPagination()
            await controller.getListProduct()
            view.showTable();

            let buttonSubmitSizeNumber = document.getElementById("buttonSubmitSizeNumber")
            buttonSubmitSizeNumber.onclick = controller.getListProductBySize

            let buttonSearch = document.getElementById("buttonSearch")
            buttonSearch.onclick = controller.search
        }
    }
}

view.showTable = async function () {
    let tableArea = document.getElementById('body-table');
    let data = model.listProduct
    let s = ``
    for (let i = 0; i < data.length; i++) {
        let record = data[i]
        s += `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${record.name}</td>
            <td>${record.price}</td>
            <td>${record.image}</td>
        </tr>`
    }
    tableArea.innerHTML = s
}

view.showPagination = () => {
    let listPage = document.getElementById("list-page")
    let number = parseInt(model.numberOfPage)
    let s = `
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>`
    for (let i = 0; i < number; i++) {
        if (i == model.currentPage - 1) {
            s += `<li class="page-item active" id="page-${i + 1}" onclick = controller.getListProductByPage(${i + 1})><a class="page-link">${i + 1}</a></li>`
        }
        else {
            s += `<li class="page-item" id="page-${i + 1}" onclick = controller.getListProductByPage(${i + 1})><a class="page-link">${i + 1}</a></li>`
        }
    }
    s += `
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>`
    listPage.innerHTML = s;
}