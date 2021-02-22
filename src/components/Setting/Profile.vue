<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                    <div class="container-fluid">
                                            <!-- alert start -->
                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                    <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                                </div>
                                            <!-- alert end -->
                                            <div class="row ml-5">
                                                <div class="col-md-6">  
                                                <div class="form-group">
                                                    <label class="col-sm-4 control-label">Company Name<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" placeholder="">                          </div>
                                                </div>
                                                    <div class="form-group">
                                                    <label for="mobile" class="col-sm-4 control-label">Mobile<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" placeholder="">
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="email" class="col-sm-4 control-label">Email<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" placeholder="">
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="phone" class="col-sm-4 control-label">Phone</label>
                                
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control"  placeholder="">
                                                </div>
                                                </div>   
                                                <div class="form-group">
                                                <label for="gstin" class="col-sm-4 control-label">GST Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" placeholder="">
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="vat" class="col-sm-4 control-label">VAT Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control"  placeholder="">
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="pan" class="col-sm-4 control-label">PAN Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" placeholder="">
                                                </div>
                                                </div>                          
                                                <div class="form-group">
                                                <label  class="col-sm-4 control-label">Website</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" placeholder="">
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="upi_id" class="col-sm-4 control-label">UPI Id</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" placeholder="">
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label class="col-sm-4 control-label">UPI Code</label>
                                                <div class="col-sm-8">
                                                    <input type="file">
                                                    <span  style="display:block;" class="text-danger">Max Width/Height: 1000px * 1000px &amp; Size: 1024kb </span>
                                                </div>
                                                </div>  
                                                <div class="form-group">
                                                    <div class="col-sm-8 col-sm-offset-4">
                                                        <img class="img-fluid w-50" style="border:3px solid #d2d6de;" src="../../assets/Img/admin.png">
                                                    </div>
                                                </div>
                                                <!-- ########### -->
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                        <label  class="col-sm-4 control-label">Bank Details</label>
                                                        <div class="col-sm-8">
                                                            <textarea type="text" class="form-control" placeholder="">HBL</textarea>
                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="country" class="col-sm-4 control-label">Country</label>
                                                        <div class="col-sm-8">
                                                        <select class="form-control" style="width: 100%;">
                                                            <option value="">-Select-</option>
                                                            <option selected="" value="">Pakistan</option>
                                                        </select>
                                                        <br>
                                                        <button class="btn btn-primary">Select</button>
                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="state" class="col-sm-4 control-label">State</label>       
                                                        <div class="col-sm-8">
                                                            <select class="form-control" style="width: 100%;">
                                                            <option value="">-Select-</option>
                                                            <option value="">First</option>
                                                    </select>
                                                    <br>
                                                    <button class="btn btn-primary">Select</button>

                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="city" class="col-sm-4 control-label">City<label class="text-danger">*</label></label>
                                                        <div class="col-sm-8">
                                                            <input type="text" class="form-control" placeholder="test">
                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="postcode" class="col-sm-4 control-label">Postcode</label>
                                                        <div class="col-sm-8">
                                                            <input type="text" class="form-control"  placeholder=""  maxlength="6">
                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="address" class="col-sm-4 control-label">Address<label class="text-danger">*</label></label>
                                                        <div class="col-sm-8">
                                                            <textarea type="text" class="form-control" placeholder=""></textarea>
                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="company_logo" class="col-sm-4 control-label">Company Logo</label>
                                                        <div class="col-sm-8">
                                                            <input type="file">
                                                            <span  style="display:block;" class="text-danger">Max Width/Height: 1000px * 1000px &amp; Size: 1024kb </span>
                                                        </div>
                                                        </div>
                                        
                                                        
                                                        <div class="form-group">
                                                            <div class="col-sm-8 col-sm-offset-4">
                                                                <img class="img-fluid w-50" style="border:3px solid #d2d6de;" src="../../assets/Img/admin.png">
                                                            </div>
                                                        </div>
                                                                                    
                                        
                                                        
                                                    </div>
                                                <!-- ########### -->
                                            </div>
                                            <hr>
                                            <div class="box-footer p-5">
                                                <div class="d-flex mx-auto justify-content-center">
                                                    <button class="btn btn-primary w-25">Update</button>
                                                    &nbsp;
                                                    <button class="btn btn-warning w-25">Close</button>
                                                </div>                            
                                            </div>
                                    </div>
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

<style lang="stylus">

</style>