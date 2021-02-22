<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                    <div class="content-header">
                                                    <!---Start Third card shop-->
                                                    <h2 class="text-md ml-4"><span class="text-lg">Tax List</span>  View / <small class="text-gray text-sm"><span>Search Tax </span></small></h2>
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
                                                        <div class="card border-top border-primary">
                                                            <div class="card-header">
                                                                        <div class="row">
                                                                            <div class="col-md-4">
                                                                                <h1 class="display-4">Tax List</h1>
                                                                            </div> 
                                                                            <div class="col-md-6"></div> 
                                                                            <div class=" col-md-2 box-tools float-right mb-3">
                                                                                <a class="btn btn-block btn-info " href="#">
                                                                                <i class="fa fa-plus "></i> New Tax  </a>
                                                                            </div>  
                                                                        </div>
                                                                        <hr>
                                                                        <div class="row">
                                                                            <div class="col-sm-12"><div class="pull-left">
                                                                            <div>
                                                                            <label>Show 
                                                                                <select class="form-control input-sm">
                                                                                        <option value="10">10</option><option value="25">25</option>
                                                                                        <option value="50">50</option><option value="100">100</option>
                                                                                </select>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pull-right"><div>
                                                                    <label class="mt-4">
                                                                    <input type="search" class="form-control input-sm" placeholder="Search" aria-controls="example2">
                                                                    </label>
                                                                    </div><div id="example2_processing" class="dataTables_processing panel panel-default" style="display: none;"></div></div><div class="pull-right margin-left-10 ">
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
                                                                    <!-- Start First Table List -->
                                                                        <table  class="table table-bordered table-striped dataTable dtr-inline" width="100%" role="grid"  style="width: 100%;">
                                                                        <thead class="bg-primary ">
                                                                            <tr role="row">
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 255px;">Tax Name</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 205px;">Tax(%)</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 194px;">Status</th>
                                                                            <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 253px;" aria-label="Action">Action</th></tr>
                                                                        </thead>                 
                                                                        <tbody>
                                                                            <tr role="row" >     
                                                                                <td>SGST 9%</td>
                                                                                <td>9.00</td>
                                                                                    <td>
                                                                                        <span class="label label-success bg-success p-2 rounded" style="cursor:pointer">Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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

                                                                            <tr role="row" >     
                                                                                <td>SGST 9%</td>
                                                                                <td>9.00</td>
                                                                                    <td>
                                                                                        <span class="label label-success bg-success p-2 rounded" style="cursor:pointer">Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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

                                                                            <tr role="row" >     
                                                                                <td>SGST 9%</td>
                                                                                <td>9.00</td>
                                                                                    <td>
                                                                                        <span class="label label-success bg-success p-2 rounded" style="cursor:pointer">Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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

                                                                            <tr role="row" >     
                                                                                <td>SGST 9%</td>
                                                                                <td>9.00</td>
                                                                                    <td>
                                                                                        <span class="label label-success bg-success p-2 rounded" style="cursor:pointer">Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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

                                                                            <tr role="row" >     
                                                                                <td>SGST 9%</td>
                                                                                <td>9.00</td>
                                                                                    <td>
                                                                                        <span class="label label-success bg-success p-2 rounded" style="cursor:pointer">Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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

                                                                            <tr role="row" >     
                                                                                <td>SGST 9%</td>
                                                                                <td>9.00</td>
                                                                                    <td>
                                                                                        <span class="label label-success bg-success p-2 rounded" style="cursor:pointer">Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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
                                                                    <!-- End First Table List -->

                                                                    <div class="next d-flex justify-content-between align-items-center">
                                                                        <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 22 entries</div><div class="dataTables_paginate paging_simple_numbers" id="example2_paginate"></div>
                                                                        <nav aria-label="Page navigation example">
                                                                            <ul class="pagination">
                                                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                            <li class="page-item"><a class="page-link bg-primary" href="#">1</a></li>
                                                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                                            </ul>
                                                                        </nav>
                                                                </div>                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--End Product Table-->
                                                    </div>
                                                    <!---End  Porduct Table>-->

                                                    <!---Start Porduct Table>-->
                                                    <div class="container-fluid">
                                                        <div class="card border-top border-primary">
                                                            <div class="card-header">
                                                                        <div class="row">
                                                                            <div class="col-md-4">
                                                                                <h1 class="display-4">Tax Group</h1>
                                                                            </div> 
                                                                            <div class="col-md-6"></div> 
                                                                            <div class=" col-md-2 box-tools float-right mb-3">
                                                                                <a class="btn btn-block btn-info " href="#">
                                                                                <i class="fa fa-plus "></i>  Tax Group  </a>
                                                                            </div>  
                                                                        </div>
                                                                        <hr>
                                                                        <div class="row">
                                                                            <div class="col-sm-12"><div class="pull-left">
                                                                            <div>
                                                                            <label>Show 
                                                                                <select class="form-control input-sm">
                                                                                        <option value="10">10</option><option value="25">25</option>
                                                                                        <option value="50">50</option><option value="100">100</option>
                                                                                </select>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pull-right"><div>
                                                                    <label class="mt-4">
                                                                    <input type="search" class="form-control input-sm" placeholder="Search" aria-controls="example2">
                                                                    </label>
                                                                    </div><div id="example2_processing" class="dataTables_processing panel panel-default" style="display: none;"></div></div><div class="pull-right margin-left-10 ">
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
                                                                    <!-- Start First Table List -->
                                                                        <table  class="table table-bordered table-striped dataTable dtr-inline" width="100%" role="grid"  style="width: 100%;">
                                                                        <thead class="bg-primary ">
                                                                            <tr role="row">
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 255px;">Tax Name</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 205px;">Tax(%)</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 205px;">Sub Tax(%)</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 194px;">Status</th>
                                                                            <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 253px;" aria-label="Action">Action</th></tr>
                                                                        </thead>                 
                                                                        <tbody>
                                                                            <tr role="row" >     
                                                                                <td>GST 18%</td>
                                                                                <td>18.00</td>
                                                                                <td>(ISGT 9%)+(SGST 9%)</td>
                                                                                    <td>
                                                                                        <span class="label label-success bg-success p-2 rounded" style="cursor:pointer">Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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
                                                                            <tr role="row" >     
                                                                                <td>GST 18%</td>
                                                                                <td>18.00</td>
                                                                                <td>(ISGT 9%)+(SGST 9%)</td>
                                                                                    <td class="">
                                                                                        <span class=" label label-success bg-success p-2 rounded" style="cursor:pointer" >Active </span>
                                                                                    </td>
                                                                                    <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
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
                                                                    <!-- End First Table List -->

                                                                    <div class="next d-flex justify-content-between align-items-center">
                                                                        <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 22 entries</div><div class="dataTables_paginate paging_simple_numbers" id="example2_paginate"></div>
                                                                        <nav aria-label="Page navigation example">
                                                                            <ul class="pagination">
                                                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                            <li class="page-item"><a class="page-link bg-primary" href="#">1</a></li>
                                                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                                            </ul>
                                                                        </nav>
                                                                </div>                              
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--End Product Table-->
                                                    </div>
                                                    <!---End  Porduct Table>-->
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