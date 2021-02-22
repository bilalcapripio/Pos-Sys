<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                    <div class="content-header">
                                            <!---Start Third card shop-->
                                            <h2 class="text-md ml-4"><span class="text-lg"> State </span>  Add / <small class="text-gray text-sm"><span>Update State</span></small></h2>
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
                                                <div class="row">
                                                    <div class="col-md-12">
                                                            <div class="card">
                                                                <h5 class="card-header display-5">Please Enter Valid Data</h5>
                                                                <div class="card-body">
                                                                <form>
                                                                    <div class="box-body">
                                                                        <div class="form-group">
                                                                            <label for="category" class="col-sm-2 control-label">State Name<label class="text-danger">*</label></label>
                                                                        <div class="col-sm-4">
                                                                        <input type="text" class="form-control input-sm" id="category" name="category" placeholder="" onkeyup="shift_cursor(event,'description')" value="" autofocus="">
                                                                            <span id="category_msg" style="display:none" class="text-danger"></span>
                                                                        </div>
                                                                        </div> 
                                                                        <div class="form-group">
                                                                            <label for="country_name" class="col-sm-2 control-label">Country<label class="text-danger">*</label></label>
                                                                            <div class="col-sm-4">
                                                                            <select class="form-control" id="country" name="country" style="width: 100%;">
                                                                                <option value="">-Select-</option><option>Turkey</option><option value="Iran">Iran</option>                  </select>
                                                                            <span id="country_msg" style="display:none" class="text-danger"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="btn btn-success">Save</button>
                                                                    <button class="btn btn-warning">Close</button>
                                                                </form>
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