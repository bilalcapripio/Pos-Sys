<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                            <div class="content-header">
                                            <!---Start Third card shop-->
                                                <h2 class="text-md ml-4"><span class="text-lg">Suppliers </span>  Add / <small class="text-gray text-sm"><span>Update Supplier</span></small></h2>
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
                                                <!---- Start Form --->
                                                <div class="container-fluid bg-light px-3 bg-gray-light">
                                                    <div class="row ml-5">
                                                        <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="supplier_name" class="col-sm-4 control-label">Supplier Name<label class="text-danger">*</label></label>     
                                                                    <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="supplier_name" name="supplier_name" placeholder="" value="" autofocus="">
                                                                    <span id="supplier_name_msg" style="display:none" class="text-danger"></span>
                                                                </div>
                                                            </div>
                                                        <div class="form-group">
                                                                    <label for="mobile" class="col-sm-4 control-label">Mobile</label>
                                                                    <div class="col-sm-8">
                                                                <input type="text" class="form-control no_special_char_no_space" id="mobile" name="mobile" placeholder="" value="">
                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="email" class="col-sm-4 control-label">Email</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="email" name="email" placeholder="" value="">
                                                                </div>
                                                        </div>
                                        
                                                        <div class="form-group">
                                                                <label for="phone" class="col-sm-4 control-label">Phone</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control no_special_char_no_space" id="phone" name="phone" placeholder="" value="">
                                                                </div>
                                                        </div>   
                                                        <div class="form-group">
                                                                <label for="gstin" class="col-sm-4 control-label">GST Number</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="gstin" name="gstin" placeholder="" value="">
                                                                </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="tax_number" class="col-sm-4 control-label">TAX Number</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="tax_number" name="tax_number" placeholder="" value="">
                                                                </div>
                                                        </div>
                                                        <!-- ########### -->
                                                    </div>        
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                                <label for="opening_balance" class="col-sm-4 control-label">Opening Balance</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="opening_balance" name="opening_balance" placeholder="" value="">
                                                                </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="country" class="col-sm-4 control-label">Country</label>        
                                                                <div class="col-sm-8">
                                                                        <select class="form-control select2 select2-hidden-accessible" id="country" name="country" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                        <option value="1">Turkey</option><option value="2">Iran</option> 
                                                                        </select>
                                                                        <br>
                                                                        <button class="btn btn-primary">Select</button>
                                                                </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="state" class="col-sm-4 control-label">State </label>                    
                                                            <div class="col-sm-8">
                                                                    <select class="form-control select2 select2-hidden-accessible" id="state" name="state" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                    <option value="">-Select-</option><option value="23">First</option><option value="24">Second</option><option value="25"> Third</option><option value="26"> Fourth</option><option value="27">Fifth</option><option value="28">Sixth</option><option value="29">Seven</option><option value="30">Eight</option><option value="31">Nine</option><option value="32">Ten</option>
                                                                </select>
                                                                <br>
                                                                <button class="btn btn-primary">Select</button>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="form-group">
                                                            <label for="city" class="col-sm-4 control-label">City</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control " id="city" name="city" placeholder="" value="">
                                                            </div>
                                                        </div>
                                        
                                                        <div class="form-group">
                                                            <label  class="col-sm-4 control-label">Postcode</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control no_special_char_no_space" id="postcode" name="postcode" placeholder="" value="">
                                                            </div>
                                                        </div>
                                        
                                                        <div class="form-group">
                                                            <label for="address" class="col-sm-4 control-label">Address</label>
                                                            <div class="col-sm-8">
                                                                <textarea type="text" class="form-control" id="address" name="address" placeholder=""></textarea>
                                                            </div>
                                                        </div>                
                                                        </div>
                                                        <!-- ########### -->
                                                    </div>
                                                    <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                                                    <div class="box-body mt-5 d-flex mx-auto justify-content-center align-items-center">                        
                                                        <button class="btn btn-success w-25">Save</button>
                                                        &nbsp;
                                                        <button class="btn btn-warning w-25">Close</button>
                                                        <!-- /row -->
                                                    </div>
                                                <!----End From ---->
                                            <br>
                                                <!---Start table---->
                                                <div class="col-md-12 bg-light border-top border-primary mt-5">
                                                    <div class="box">
                                                    <div class="box-header p-3">
                                                        <h3 class="box-title text-blue">Opening Balance Payments</h3>
                                                    </div>
                                                    <!-- /.box-header -->
                                                    <div class="box-body table-responsive no-padding">
                                                        
                                                        <table class="table table-bordered table-hover">
                                                        <thead>
                                                        <tr class="bg-gray">
                                                            <th >#</th>
                                                            <th >Entry Date</th>
                                                            <th >Stock</th>
                                                            <th >Action</th>
                                                            <th >Action</th>
                                                            <th >Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr><td colspan="6" class="text-center text-bold">No Previous Stock Entry Found!!</td></tr>                           </tbody>
                                                        </table>
                                                        
                                                        
                                                    </div>
                                                    <!-- /.box-body -->
                                                    </div>
                                                    <!-- /.box -->
                                                </div>
                                                <!----End Table----->
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