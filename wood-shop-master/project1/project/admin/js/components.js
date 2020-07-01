const components = {};

components.header = `
    <div class="header">
        <h3 onclick="view.showComponents('main')">Admin</h3>
        <hr>
    </div>`

components.search = `
    <div class="input-group mb-3 form-to-find">
        <input type="text" id="formToFindInput" class="form-to-find__input" autocomplete="off"  placeholder="Search...">
        <div class="input-group-append">
            <button type="submit" class="form-to-find__button" id="buttonSearch"><i class="fas fa-search"></i></button>
        </div>
    </div>`

components.table = `
    <div class="container">
        <div class="content">
            <table class="table table-striped">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody id="body-table">
                </tbody>
            </table>
        </div>
    </div>`

components.size = `
    <div class="container size">
        <div class="input-group mb-3">
            <input type="number" class="form-control" placeholder="Size" id="sizeNumber">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="buttonSubmitSizeNumber">Size</button>
            </div>
        </div>
    </div>`

components.pagination = `
    <div class="my-pagination container">
        <nav aria-label="Page navigation example">
            <ul class="pagination" id="list-page">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>`

components.footer = `
    <div class="footer">
        <hr>
        <h3>Nhóm Tuấn, Thành, ?</h3>
    </div>`