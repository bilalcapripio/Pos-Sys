<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                        <!---Start Third card shop-->
                                        <h2 class="text-md ml-4"><span class="text-lg">Suppliers List</span>  View / <small class="text-gray text-sm"><span>Search Suppliers</span></small></h2>
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
                                                            <h1 class="display-4">Suppliers List</h1>
                                                        </div> 
                                                        <div class="col-md-6"></div> 
                                                        <div class=" col-md-2 box-tools float-right mb-3">
                                                            <a class="btn btn-block btn-info " href="#">
                                                            <i class="fa fa-plus "></i>  New Suppliers </a>
                                                        </div>  
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-sm-12"><div class="pull-left">
                                                        <div class="dataTables_length" id="example2_length">
                                                        <label>Show <select name="example2_length" aria-controls="example2" class="form-control input-sm">
                                                        <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="pull-right"><div id="example2_filter" class="dataTables_filter">
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
                                                        <table id="example2" class="table table-bordered table-striped dataTable dtr-inline" width="100%" role="grid" aria-describedby="example2_info" style="width: 100%;">
                                                            <thead class="bg-primary ">
                                                                <tr role="row"><th class="text-center sorting_disabled" rowspan="1" colspan="1" style="width: 22px;" aria-label="">
                                                                    <div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="group_check checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                                                                </th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 62px;" aria-label="Supplier ID: activate to sort column ascending">Supplier ID</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 83px;" aria-label="Supplier Name: activate to sort column ascending">Supplier Name</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 69px;" aria-label="Mobile: activate to sort column ascending">Mobile</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 141px;" aria-label="Email: activate to sort column ascending">Email</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 68px;" aria-label="Purchase Due: activate to sort column ascending">Purchase Due</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 110px;" aria-label="Purchase Return Due: activate to sort column ascending">Purchase Return Due</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 0px; display: none;" aria-label="Status: activate to sort column ascending">Status</th><th class="sorting_disabled" rowspan="1" colspan="1" style="width: 0px; display: none;" aria-label="Action">Action</th></tr>
                                                            </thead> 
                                                            <tbody>
                                                                <!-- <tr role="row">                                           -->
                                                                <tr role="row" class="even"><td class=" text-center" tabindex="0"><div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" name="checkbox[]" value="7" class="checkbox column_checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td><td>SP0007</td><td>Aaron</td><td>946545646456</td><td>aaron@gmail.com</td><td>550.00</td><td>0.00</td><td style="display: none;"><span onclick="update_status(7,0)" id="span_7" class="label label-success" style="cursor:pointer">Active </span></td><td style="display: none;"><div class="btn-group" title="View Account">
                                                                                    <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                                                <a title="Edit Record ?" href="suppliers/update/7">
                                                                                                    <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                                                </a>
                                                                                            </li><li>
                                                                                                <a title="Pay Opening Balance &amp; Purchase Due Payments" class="pointer" onclick="pay_now(7)">
                                                                                                <i class="fa fa-fw fa-money text-blue"></i>Pay Due Payments
                                                                                                </a>
                                                                                            </li><li>
                                                                                                <a title="Pay Return Due" class="pointer" onclick="pay_return_due(7)">
                                                                                                <i class="fa fa-fw fa-money text-blue"></i>Pay Return Due
                                                                                                </a>
                                                                                            </li><li>
                                                                                                <a style="cursor:pointer" title="Delete Record ?" onclick="delete_suppliers(7)">
                                                                                                    <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                                                </a>
                                                                                            </li>
                                                                                            
                                                                                        </ul>
                                                                    </div></td></tr><tr role="row" class="odd"><td class=" text-center" tabindex="0"><div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" name="checkbox[]" value="6" class="checkbox column_checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td><td>SP0006</td><td>Jason Roy</td><td>845455544</td><td>jason@yahoo.com</td><td>0</td><td>0</td><td style="display: none;"><span onclick="update_status(6,0)" id="span_6" class="label label-success" style="cursor:pointer">Active </span></td><td style="display: none;"><div class="btn-group" title="View Account">
                                                                        <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                        Action <span class="caret"></span>
                                                                            </a>
                                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                            <a title="Edit Record ?" href="suppliers/update/6">
                                                                            <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                <a title="Pay Opening Balance &amp; Purchase Due Payments" class="pointer" onclick="pay_now(6)">
                                                                                        <i class="fa fa-fw fa-money text-blue"></i>Pay Due Payments
                                                                                    </a>
                                                                                    </li><li>
                                                                                    <a title="Pay Return Due" class="pointer" onclick="pay_return_due(6)">
                                                                                        <i class="fa fa-fw fa-money text-blue"></i>Pay Return Due
                                                                                    </a>
                                                                                    </li><li>
                                                                                    <a style="cursor:pointer" title="Delete Record ?" onclick="delete_suppliers(6)">
                                                                                        <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                                    </a>
                                                                                </li>            
                                                                            </ul>
                                                                            </div></td></tr><tr role="row" class="even"><td class=" text-center" tabindex="0"><div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" name="checkbox[]" value="5" class="checkbox column_checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td><td>SP0005</td><td>David W</td><td>984545454</td><td>davidw@yahoo.com</td><td>290,000.00</td><td>0</td><td style="display: none;"><span onclick="update_status(5,0)" id="span_5" class="label label-success" style="cursor:pointer">Active </span></td><td style="display: none;"><div class="btn-group" title="View Account">
                                                                                <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                    Action <span class="caret"></span>
                                                                                </a>
                                                                                <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                                        <a title="Edit Record ?" href="suppliers/update/5">
                                                                                            <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                                        </a>
                                                                                    </li><li>
                                                                                        <a title="Pay Opening Balance &amp; Purchase Due Payments" class="pointer" onclick="pay_now(5)">
                                                                                            <i class="fa fa-fw fa-money text-blue"></i>Pay Due Payments
                                                                                        </a>
                                                                                        </li><li>
                                                                                        <a title="Pay Return Due" class="pointer" onclick="pay_return_due(5)">
                                                                                            <i class="fa fa-fw fa-money text-blue"></i>Pay Return Due
                                                                                        </a>
                                                                                        </li><li>
                                                                                        <a style="cursor:pointer" title="Delete Record ?" onclick="delete_suppliers(5)">
                                                                                            <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                                        </a>
                                                                                    </li>
                                                                                    
                                                                                </ul>
                                                                            </div></td></tr><tr role="row" class="odd"><td class=" text-center" tabindex="0"><div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" name="checkbox[]" value="4" class="checkbox column_checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td><td>SP0004</td><td>Glenn M</td><td>875454444</td><td>glennm@yahoo.com</td><td>1,000.00</td><td>0.00</td><td style="display: none;"><span onclick="update_status(4,0)" id="span_4" class="label label-success" style="cursor:pointer">Active </span></td><td style="display: none;"><div class="btn-group" title="View Account">
                                                                                <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                    Action <span class="caret"></span>
                                                                                </a>
                                                                                <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                                        <a title="Edit Record ?" href="suppliers/update/4">
                                                                                            <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                                        </a>
                                                                                    </li><li>
                                                                                        <a title="Pay Opening Balance &amp; Purchase Due Payments" class="pointer" onclick="pay_now(4)">
                                                                                            <i class="fa fa-fw fa-money text-blue"></i>Pay Due Payments
                                                                                        </a>
                                                                                        </li><li>
                                                                                        <a title="Pay Return Due" class="pointer" onclick="pay_return_due(4)">
                                                                                            <i class="fa fa-fw fa-money text-blue"></i>Pay Return Due
                                                                                        </a>
                                                                                        </li><li>
                                                                                        <a style="cursor:pointer" title="Delete Record ?" onclick="delete_suppliers(4)">
                                                                                            <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                                        </a>
                                                                                    </li>
                                                                                    
                                                                                </ul>
                                                                            </div></td></tr><tr role="row" class="even"><td class=" text-center" tabindex="0"><div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" name="checkbox[]" value="3" class="checkbox column_checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td><td>SP0003</td><td>Steve Roy</td><td>897546545464</td><td>steveroy@redifmail.com</td><td>0</td><td>0</td><td style="display: none;"><span onclick="update_status(3,0)" id="span_3" class="label label-success" style="cursor:pointer">Active </span></td><td style="display: none;"><div class="btn-group" title="View Account">
                                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                Action <span class="caret"></span>
                                                                                    </a>
                                                                                    <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                                        <a title="Edit Record ?" href="suppliers/update/3">
                                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                                        </a>
                                                                                        </li><li>
                                                                                        <a title="Pay Opening Balance &amp; Purchase Due Payments" class="pointer" onclick="pay_now(3)">
                                                                                            <i class="fa fa-fw fa-money text-blue"></i>Pay Due Payments
                                                                                                </a>
                                                                                            </li><li>
                                                                                                <a title="Pay Return Due" class="pointer" onclick="pay_return_due(3)">
                                                                                                <i class="fa fa-fw fa-money text-blue"></i>Pay Return Due
                                                                                                </a>
                                                                                            </li><li>
                                                                                                <a style="cursor:pointer" title="Delete Record ?" onclick="delete_suppliers(3)">
                                                                                                    <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                                                </a>
                                                                                            </li>
                                                                                            
                                                                                        </ul>
                                                                                    </div></td></tr><tr role="row" class="odd"><td class=" text-center" tabindex="0"><div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" name="checkbox[]" value="2" class="checkbox column_checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div></td><td>SP0002</td><td>Walter Scott</td><td>9745454787454</td><td>walterscott@gmail.com</td><td>6,400.00</td><td>0.00</td><td style="display: none;"><span onclick="update_status(2,0)" id="span_2" class="label label-success" style="cursor:pointer">Active </span></td><td style="display: none;"><div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                            Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                                                <a title="Edit Record ?" href="#">
                                                                                                    <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                                                </a>
                                                                                            </li><li>
                                                                                                <a title="Pay Opening Balance &amp; Purchase Due Payments" class="pointer" onclick="pay_now(2)">
                                                                                                <i class="fa fa-fw fa-money text-blue"></i>Pay Due Payments
                                                                                                </a>
                                                                                            </li><li>
                                                                                                <a title="Pay Return Due" class="pointer">
                                                                                                <i class="fa fa-fw fa-money text-blue"></i>Pay Return Due
                                                                                                </a>
                                                                                            </li><li>
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