<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-wrapper">
                                        <!---Start Third card shop-->
                                        <h2 class="text-md ml-4 pt-3"><span class="text-lg"> Print Labels </span>   Add/ <small class="text-gray text-sm"><span>Update Sales</span></small></h2>
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
                                        <!---Start  Print Card -->
                                        <div class="container-fluid">
                                            <div class="card text-center">
                                                <div class="card-header">
                                                    <div class="form-group w-50 d-flex mx-auto">
                                                        <div class="input-group">
                                                                <div class="input-group-prepend ">
                                                                    <div class="input-group-text">
                                                                        <i class="fa fa-barcode"></i>
                                                                    </div>
                                                                </div>
                                                                <input type="text" class="form-control" placeholder="Item name/Barcode/Itemcode" >
                                                            </div>
                                                    </div>           
                                                    <table class="table container table-bordered" style="width: 60%;">
                                                        <thead class="custom_thead">
                                                            <tr class="bg-primary">
                                                            <th rowspan="2" style="width:45%">Item Name</th>
                                                            <th rowspan="2" style="width:45%">Quantity</th>
                                                            <th rowspan="2" style="width:10%">Action</th>
                                                            </tr>
                                                        </thead>
                                                    </table>                          
                                                </div>
                                                <div class="card-body">
                                                    <div class="total">
                                                        <h1 class="display-4">Total</h1>
                                                        <p class="text-success display-4 text-bold">0</p>
                                                    </div>
                                                    <button class="btn btn-danger w-25">Preview</button>
                                                    <button class="btn btn-warning w-25">Close</button>
                                                </div>
                                                <div class="card-footer border-top border-primary">
                                                    <button class="btn btn-primary float-right">Print</button>                
                                                </div>
                                            </div>
                                        </div>

                                        <!--End  Print Card-->
                                </div> 
                        </div>
                    <!-- /.content-wrapper -->
                        <Footer/>
                        <Sidebar/>

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