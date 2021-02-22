<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                    <div class="content-header">
                                            <!---Start Third card shop-->
                                            <h2 class="text-md ml-4"><span class="text-lg">SMS Templates List </span>  View / <small class="text-gray text-sm"><span>Search Template List</span></small></h2>
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
                                                            <div class="col-md-3 text-bold">SMS Templates List</div>
                                                            <div class="col-md-3"></div>                              
                                                            <div class="col-md-4"></div> 
                                                            <div class=" col-md-2 box-tools float-right">
                                                                <a class="btn btn-block btn-info " href="#">
                                                                <i class="fa fa-plus "></i>  Add Template</a>
                                                            </div>  
                                                        </div>
                                                        <hr>
                                                        <div class="row">
                                                            <div class="col-sm-12"><div class="pull-left">
                                                            <div class="dataTables_length" id="example2_length">
                                                            <label>Show <select name="example2_length" aria-controls="example2" class="form-control input-sm">
                                                            <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="pull-right"><div id="example2_filter" class="dataTables_filter">
                                                            <label class="mt-2">
                                                            <input type="search" class="form-control input-sm" placeholder="Search" aria-controls="example2"></label></div>
                                                            <div class="btn-group mt-4 mr-2">              
                                                            </div></div></div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="box-body">
                                                            <table id="example2" class="table table-bordered table-striped dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="example2_info" style="width: 100%;">
                                                                <thead class="bg-success">
                                                                    <tr role="row"><th class="sorting_disabled" rowspan="1" colspan="1" style="width: 8px;" aria-label="#">#</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 114px;" aria-label="Template Name: activate to sort column ascending">Template Name <span></span></th>
                                                                        <th class="sorting text-center" tabindex="0" aria-controls="example2" rowspan="1" colspan="1">Content</th><th rowspan="1" colspan="1" style="width: 42px;" aria-label="Status">Status</th><th class="sorting_disabled" rowspan="1" colspan="1" style="width: 75px;" aria-label="Action">Action</th></tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr role="row" class="odd"><td tabindex="0">1</td><td>GREETING TO CUSTOMER ON SALES</td><td>Hi {{customer_name}},
                                                                        Your sales Id is {{sales_id}},
                                                                        Sales Date {{sales_date}},
                                                                        Total amount  {{sales_amount}},
                                                                        You have paid  {{paid_amt}},
                                                                        and due amount is  {{due_amt}}
                                                                        Thank you Visit Again</td>
                                                                        <td><span id="span_1" class="bg-success p-1">Active </span></td><td><div class="btn-group" title="View Account">
                                                                        <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                            Action <span class="caret"></span>
                                                                        </a>
                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                                <a title="Update Record ?" href="#">
                                                                                    Update
                                                                                </a>
                                                                            </li><li>
                                                                                <a  title="Delete Record ?">
                                                                                    Delete
                                                                                </a>
                                                                            </li> 
                                                                        </ul>
                                                                        </div></td></tr><tr role="row" ><td>2</td><td>GREETING TO CUSTOMER ON SALES RETURN</td><td>Hi {{customer_name}},
                                                                            Your sales return Id is {{return_id}},
                                                                            Return Date {{return_date}},
                                                                            Total amount  {{return_amount}},
                                                                            We paid  {{paid_amt}},
                                                                            and due amount is  {{due_amt}}
                                                                            Thank you Visit Again</td><td><span onclick="update_status(2,0)" id="span_2" class="bg-success p-1">Active</span></td><td><div class="btn-group" title="View Account">
                                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                Action <span class="caret"></span>
                                                                            </a>
                                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right"><li>
                                                                                    <a title="Update Record ?">
                                                                                        Update
                                                                                    </a>
                                                                                </li><li>
                                                                                    <a style="cursor:pointer" title="Delete Record ?" onclick="delete_template(2)">
                                                                                    Delete
                                                                                </a>
                                                                        </li>
                                                                    </ul>
                                                                    </div></td></tr>
                                                                </tbody>                                 
                                                            </table>
                                                            <div class="next d-flex justify-content-between align-items-center">
                                                                <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 22 entries</div><div class="dataTables_paginate paging_simple_numbers" id="example2_paginate"></div>
                                                                <nav aria-label="Page navigation example">
                                                                    <ul class="pagination">
                                                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
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