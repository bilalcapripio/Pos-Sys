<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                    <!---Start Third card shop-->
                                    <h2 class="text-md ml-4"><span class="text-lg">Items List</span>  View / <small class="text-gray text-sm"><span>Search Items</span></small></h2>
                                    <!-- alert start -->
                                    <div class="content-header">
                                        <div class="container-fluid">
                                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                                            <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true" class="text-white">&times;</span>
                                            </button>
                                        </div>
                                        </div>
                                    </div>                  
                                    <!-- alert end -->
                                    <!---Start Porduct Table>-->
                                    <div class="container-fluid">
                                    <div class="card">
                                            <div class="card-header">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label for="brand_id" class=" control-label">Brand</label>
                                                        <select class="form-control select2 select2-hidden-accessible" id="brand_id" name="brand_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                            <option value="">Select</option><option value="18">Lee</option><option value="19">Adidas</option><option value="20">Armany</option><option value="21">Samsung</option><option value="22">Apple</option><option value="23">Nokia</option><option value="24">D&amp;G</option><option value="25">Cipla</option><option value="26">Acanya</option><option value="27">Accupril</option><option value="28">Aayur</option><option value="29">Patanjali</option><option value="30">lifebuoy</option><option value="31">Mysore Sandal Soap</option><option value="32">Fastrack</option><option value="33">Rado Watches</option><option value="34">Rolex</option><option value="35">Colgate</option><option value="36">Vistaprint</option><option value="37">Cosmex Publishers</option><option value="38">Raymond</option><option value="39">Signature</option><option value="40">Redmi</option><option value="41">Lenovo</option>           
                                                        </select>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="brand_id" class=" control-label">Category</label>
                                                        <select class="form-control select2 select2-hidden-accessible" id="brand_id" name="brand_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                            <option value="">Select</option><option value="18">Lee</option><option value="19">Adidas</option><option value="20">Armany</option><option value="21">Samsung</option><option value="22">Apple</option><option value="23">Nokia</option><option value="24">D&amp;G</option><option value="25">Cipla</option><option value="26">Acanya</option><option value="27">Accupril</option><option value="28">Aayur</option><option value="29">Patanjali</option><option value="30">lifebuoy</option><option value="31">Mysore Sandal Soap</option><option value="32">Fastrack</option><option value="33">Rado Watches</option><option value="34">Rolex</option><option value="35">Colgate</option><option value="36">Vistaprint</option><option value="37">Cosmex Publishers</option><option value="38">Raymond</option><option value="39">Signature</option><option value="40">Redmi</option><option value="41">Lenovo</option>           
                                                        </select>
                                                    </div>
                                                    <div class="col-md-4"></div> 
                                                    <div class=" col-md-2 box-tools float-right">
                                                        <a class="btn btn-block btn-info " href="#">
                                                        <i class="fa fa-plus "></i> New Item</a>
                                                    </div>  
                                                </div>
                                                <hr>
                                                <div class="row">
                                                    <div class="col-sm-12"><div class="pull-left">
                                                    <div class="dataTables_length" id="example2_length">
                                                    <label>Show <select name="example2_length" aria-controls="example2" class="form-control input-sm">
                                                    <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="pull-right"><div id="example2_filter" class="dataTables_filter">
                                                    <label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="example2"></label></div><div id="example2_processing" class="dataTables_processing panel panel-default" style="display: none;"><div class="text-primary bg-primary" style="position: relative;z-index:100;overflow: visible;">Processing...</div></div></div><div class="pull-right margin-left-10 ">
                                                    <div class="dt-buttons btn-group mt-4 mr-2">              
                                                    <button class="btn btn-default bg-red color-palette btn-flat hidden delete_btn pull-left" tabindex="0" aria-controls="example2" type="button">
                                                    <span>Delete</span></button> <button class="btn btn-default buttons-copy buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Copy</span></button> <button class="btn btn-default buttons-excel buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Excel</span></button> <button class="btn btn-default buttons-pdf buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>PDF</span></button> <button class="btn btn-default buttons-print bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Print</span></button> <button class="btn btn-default buttons-csv buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                    <span>CSV</span></button> 
                                                    <button class="btn btn-default buttons-collection buttons-colvis bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button" aria-haspopup="true"><span>Columns</span></button> 
                                                    </div></div></div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="box-body">
                                                    <table id="example2" class="table table-bordered table-striped dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="example2_info" style="width: 100%;">
                                                    <thead class="bg-primary ">
                                                    <tr role="row">
                                                        <th rowspan="1" colspan="1">Item Code</th>
                                                        <th rowspan="1" colspan="1">Item Name</th>
                                                        <th rowspan="1" colspan="1">Brand</th>
                                                        <th rowspan="1" colspan="1">Category</th>
                                                        <th rowspan="1" colspan="1">Unit</th>
                                                        <th rowspan="1" colspan="1">Purchase Price</th>
                                                        <th rowspan="1" colspan="1">Tax</th>
                                                        <th rowspan="1" colspan="1">Status</th>
                                                        <th rowspan="1" colspan="1">Action</th></tr>
                                                    </thead>
                                                <tbody>
                                                    <tr role="row">   
                                                            <td>IT0022</td>
                                                            <td>Apple Earpods</td>
                                                            <td>Apple</td>
                                                            <td>Accessories</td>
                                                            <td>Pieces</td>
                                                            <td>12,000.00</td>
                                                            <td>GST 18%<br>(Inclusive)</td>
                                                            <td><span  class="label label-success" style="cursor:pointer">Active </span></td>
                                                            <td><div class="btn-group" title="View Account">
                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                Action <span class="caret"></span>
                                                            </a>
                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                <li>
                                                                    <a title="Edit Record ?" href="#">
                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a style="cursor:pointer" title="Delete Record ?">
                                                                        <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        </td>
                                                    </tr>

                                                    <tr role="row">   
                                                            <td>IT0022</td>
                                                            <td>Apple Earpods</td>
                                                            <td>Apple</td>
                                                            <td>Accessories</td>
                                                            <td>Pieces</td>
                                                            <td>12,000.00</td>
                                                            <td>GST 18%<br>(Inclusive)</td>
                                                            <td><span  class="label label-success" style="cursor:pointer">Active </span></td>
                                                            <td><div class="btn-group" title="View Account">
                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                Action <span class="caret"></span>
                                                            </a>
                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                <li>
                                                                    <a title="Edit Record ?" href="#">
                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a style="cursor:pointer" title="Delete Record ?">
                                                                        <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        </td>
                                                    </tr>

                                                    <tr role="row">   
                                                            <td>IT0022</td>
                                                            <td>Apple Earpods</td>
                                                            <td>Apple</td>
                                                            <td>Accessories</td>
                                                            <td>Pieces</td>
                                                            <td>12,000.00</td>
                                                            <td>GST 18%<br>(Inclusive)</td>
                                                            <td><span  class="label label-success" style="cursor:pointer">Active </span></td>
                                                            <td><div class="btn-group" title="View Account">
                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                Action <span class="caret"></span>
                                                            </a>
                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                <li>
                                                                    <a title="Edit Record ?" href="#">
                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a style="cursor:pointer" title="Delete Record ?">
                                                                        <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        </td>
                                                    </tr>

                                                    <tr role="row">   
                                                            <td>IT0022</td>
                                                            <td>Apple Earpods</td>
                                                            <td>Apple</td>
                                                            <td>Accessories</td>
                                                            <td>Pieces</td>
                                                            <td>12,000.00</td>
                                                            <td>GST 18%<br>(Inclusive)</td>
                                                            <td><span  class="label label-success" style="cursor:pointer">Active </span></td>
                                                            <td><div class="btn-group" title="View Account">
                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                Action <span class="caret"></span>
                                                            </a>
                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                <li>
                                                                    <a title="Edit Record ?" href="#">
                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a style="cursor:pointer" title="Delete Record ?">
                                                                        <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        </td>
                                                    </tr>

                                                    <tr role="row">   
                                                            <td>IT0022</td>
                                                            <td>Apple Earpods</td>
                                                            <td>Apple</td>
                                                            <td>Accessories</td>
                                                            <td>Pieces</td>
                                                            <td>12,000.00</td>
                                                            <td>GST 18%<br>(Inclusive)</td>
                                                            <td><span  class="label label-success" style="cursor:pointer">Active </span></td>
                                                            <td><div class="btn-group" title="View Account">
                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                Action <span class="caret"></span>
                                                            </a>
                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                <li>
                                                                    <a title="Edit Record ?" href="#">
                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a style="cursor:pointer" title="Delete Record ?">
                                                                        <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                                    
                                                    </table>
                                                    <div class="next d-flex justify-content-between align-items-center">
                                                        <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 22 entries</div><div class="dataTables_paginate paging_simple_numbers" id="example2_paginate"></div>
                                                        <nav aria-label="Page navigation example">
                                                            <ul class="pagination">
                                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                            </ul>
                                                        </nav>
                                                    </div>                              
                                            </div>
                                        </div>
                                    </div>

                                    <!--End Product Table-->
                                    </div>
                                </div> 
                            <Footer/>
                            <Sidebar/>
                        </div> 
                    <!-- /.content-wrapper -->
            </div>
        </body>
</template>
<script>

import Navbar from  '../../components/Navbar.vue'
import Sidebar from '../../components/Sidebar.vue'
import Footer from  '../../components/Footer.vue'

export default {
    name:'',
    components: {
    Navbar,
    Sidebar,
    Footer
}

}
</script>