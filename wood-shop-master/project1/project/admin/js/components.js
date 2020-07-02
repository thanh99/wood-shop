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

components.modalAdd = `
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAddBlog">
    Thêm blog
  </button>
   
   <!-- Modal -->
   <div class="modal fade" id="modalAddBlog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Thêm product</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <form id="dataBlog">
         <div class="modal-body">
             <div class="form-group" >
              <label for="name">Tên sản phẩm</label>
              <textarea class="form-control" id="name"></textarea>
            </div>
             <div class="form-group" >
               <label for="price">Giá</label>
               <textarea class="form-control" id="price"></textarea>
             </div>
             <div class="form-group">
               <label for="image">Link ảnh</label>
               <textarea class="form-control" id="image"></textarea>
             </div>
             <div class="form-group">
              <label for="description">description</label>
              <textarea class="form-control" id="description"></textarea>
            </div>
            <div class="form-group">
              <label for="status">status</label>
              <textarea class="form-control" id="status"></textarea>
            </div>
            <div class="form-group">
              <label for="category">category</label>
              <textarea class="form-control" id="category"></textarea>
            </div>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
           <button type="button" class="btn btn-primary" onclick="controller.addProduct()">Tạo</button>
         </div>
         </form>
       </div>
     </div>
   </div>`

components.table = `
    <div class="container">
        <div class="content">
            <table class="table table-striped">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Name</button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" onclick = "controller.getListProductBySort(1)">Tăng dần</a>
                                    <a class="dropdown-item" onclick = "controller.getListProductBySort(-1)">Giảm dần</a>
                                </div>
                            </div>
                        </th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Thao tác</th>
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
                <li class="page-item" onclick = "controller.subPagination()">
                    <a class="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" aria-label="Next">
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
    </div>
    <div class="modal fade" id="modalUpdateProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Thêm Blog</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form id="dataBlog">
        <div class="modal-body">
          <div class="form-group" >
            <label for="idU">Id</label>
            <textarea class="form-control" id="idU" disabled></textarea>
          </div>
            <div class="form-group" >
             <label for="imageTitleU">Anh title</label>
             <textarea class="form-control" id="nameU"></textarea>
           </div>
            <div class="form-group" >
              <label for="titleU">Nhập tiêu đề</label>
              <textarea class="form-control" id="priceU"></textarea>
            </div>
            <div class="form-group">
              <label for="descriptionU">Nhập mô tả</label>
              <textarea class="form-control" id="imageU" rows="1"></textarea>
            </div>
            <div class="form-group">
             <label for="contentU">Nhập Nội dung</label>
             <textarea class="form-control" id="descriptionU" rows="3"></textarea>
           </div>
           <div class="form-group">
             <label for="contentU">Nhập Nội dung</label>
             <textarea class="form-control" id="statusU" rows="1"></textarea>
           </div>
           <div class="form-group">
             <label for="contentU">Nhập Nội dung</label>
             <textarea class="form-control" id="categoryU" rows="1"></textarea>
           </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="controller.updateProduct()">Save changes</button>
        </div>
        </form>
      </div>
    </div>
  </div>`