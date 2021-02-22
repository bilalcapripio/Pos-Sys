<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                    <div class="content-header">
                                            <!---Start Third card shop-->
                                            <h2 class="text-md ml-4"><span class="text-lg">Site  </span>  Add / <small class="text-gray text-sm"><span>Update Site </span></small></h2>
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
                                            <div class="container-fluid">
                                                <div class="card">
                                                    <div class="card-header">
                                                        <!-- Start Tablist -->
                                                        <nav>
                                                            <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                                                <a class="nav-item nav-link active" id="nav-site-tab" data-toggle="tab" href="#nav-site" role="tab" aria-controls="nav-site" aria-selected="true">Site</a>
                                                                <a class="nav-item nav-link" id="nav-sales-tab" data-toggle="tab" href="#nav-sales" role="tab" aria-controls="nav-sales" aria-selected="false">Sales</a>
                                                                <a class="nav-item nav-link" id="nav-prefixes-tab" data-toggle="tab" href="#nav-prefixes" role="tab" aria-controls="nav-prefixes" aria-selected="false">Prefixes</a>
                                                            </div>
                                                        </nav>
                                                        <!-- End Tablist -->
                                                        
                                                    </div>
                                                    <div class="card-body">
                                                        <!-- Start Panel Tab Content  -->
                                                        <div class="tab-content" id="nav-tabContent">

                                                            <div class="tab-pane fade show active" id="nav-site" role="tabpanel" aria-labelledby="nav-site-tab">
                                                                <!-- Start First Tab Panel Form -->
                                                                    <div class="row">
                                                                        <div class="col-md-7">
                                                                        <div class="form-group">
                                                                            <label class="col-sm-4 control-label">Site Name<label class="text-danger">*</label></label>
                                                                            <div class="col-sm-8">
                                                                                <input type="text" class="form-control input-sm"  placeholder="Ultimate Inventory with POS">
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                        <label for="timezone" class="col-sm-4 control-label">Timezone<label class="text-danger">*</label> </label>
                                                                        <div class="col-sm-8">
                                                                            <select class="form-control select2 select2-hidden-accessible"  style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                                <option value="UTC">UTC</option>
                                                                                <option value="WET">WET</option>
                                                                                <option value="W-SU">W-SU</option>
                                                                                <option value="Zulu">Zulu</option>                                                  
                                                                            </select>
                                                                            <br>
                                                                            <button class="btn btn-primary">Select</button>
                                                                            
                                                                        </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="date_format" class="col-sm-4 control-label">Date Format<label class="text-danger">*</label> </label>
                                                                            <div class="col-sm-8">
                                                                            <select class="form-control"  style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                                <option value="dd-mm-yyyy">dd-mm-yyyy</option>
                                                                                <option value="mm/dd/yyyy">mm/dd/yyyy</option>
                                                                            </select>
                                                                            <br>
                                                                            <button class="btn btn-primary">Select</button>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label  class="col-sm-4 control-label">Time Format<label class="text-danger">*</label> </label>
                                                                            <div class="col-sm-8">
                                                                            <select class="form-control"  style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                                <option value="12">12 Hours</option>
                                                                                <option value="24">24 Hours</option>
                                                                            </select>
                                                                            <br>
                                                                            <button class="btn btn-primary">Select</button>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="timezone" class="col-sm-4 control-label">Currency<label class="text-danger">*</label> </label>
                                                                            <div class="col-sm-8">
                                                                            <select class="form-control select2 select2-hidden-accessible"  style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                                <option value="1">Pakistan- Pakistani rupee (PKR)  (Rs)</option>
                                                                                <option value="2">Turkey -Turkish lira (TRY)  (₺ )</option>
                                                                                <option value="3">Malaysia - Malaysian ringgit (MYR)  (RM)</option>
                                                                                <option value="4">Omani rial -OMR  (ر.ع.)</option>                                                  
                                                                            </select>
                                                                            <br>
                                                                            <button class="btn btn-primary">Select</button>
                                                                            
                                                                            </div>
                                                                            </div>
                                                                        <div class="form-group">
                                                                            <label for="confirm" class="col-sm-4 control-label">Current Symbol Placement<label class="text-danger">*</label></label>
                                                                            <div class="col-sm-8">
                                                                                <input type="password" class="form-control input-sm" id="confirm" name="confirm" placeholder="">
                                                                                <span id="confirm_msg" style="display:none" class="text-danger"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label  class="col-sm-4 control-label">Enable Round Off <label class="text-danger">*</label></label>
                                                                            <input type="checkbox" class="float-left mt-2">
                                                                        </div>
                                                                        </div>
                                                                        <div class="col-md-5">
                                                                            <div class="form-group">
                                                                                <label for="language_id" class="col-sm-4 control-label">Language<label class="text-danger">*</label> </label>
                                                                                <div class="col-sm-8">
                                                                                    <select class="form-control"  style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                                    <option value="1">Urdu</option>
                                                                                    <option value="2">English</option>
                                                                                    <option value="3">Hindi</option>
                                                                                    <option value="4">German</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div class="form-group">
                                                                            <label for="address" class="col-sm-4 control-label">Site Logo</label>
                                                                            <div class="col-sm-8">
                                                                                <input type="file" id="logo" name="logo">
                                                                                <span id="logo_msg" style="display:block;" class="text-danger">Max Width/Height: 300px * 300px &amp; Size: 300px </span>
                                                                            </div>
                                                                            </div>
                                                                        
                                                                            <div class="form-group">
                                                                            <div class="col-sm-8 col-sm-offset-4">
                                                                                <img class="img-responsive" style="border:3px solid #d2d6de;" src="../../assets/Img/admin.png">
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                <!-- End First Tab Panel Form -->
                                                            </div>

                                                                
                                                            <div class="tab-pane fade" id="nav-sales" role="tabpanel" aria-labelledby="nav-sales-tab">
                                                                <!-- Start Second Tab Panel Form -->
                                                                    <div class="row ml-5">
                                                                        <div class="col-md-7">
                                                                            <div class="form-group mb-5">
                                                                                <label for="new_user" class="col-sm-4 control-label"> Default Sales Discount (%)<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-6">
                                                                                    <input type="text" class="form-control input-sm"  placeholder="0.00">
                                                                                    <span id="new_user_msg" style="display:none" class="text-danger"></span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group mb-5">
                                                                                <label for="sales_invoice_formats" class="col-sm-4 control-label">Sales Invoice Formats<label class="text-danger">*</label> </label>
                                                                                <div class="col-sm-4">
                                                                                <select class="form-control select2 select2-hidden-accessible" id="sales_invoice_format_id" name="sales_invoice_format_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                                                    <option value="1">Default</option>
                                                                                    <option value="2">Format 2</option>
                                                                                    <option value="3">Format 3</option>
                                                                                </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group mb-5">
                                                                                <input type="checkbox" class="mt-3">
                                                                                <label  class="col-sm-4 control-label">Show Paid Amount and Change Return (in POS) <label class="text-danger">*</label></label>
                                                                                
                                                                            </div>
                                                                            <div class="form-group mb-5">
                                                                                <input type="checkbox" class="mt-3">
                                                                                <label  class="col-sm-4 control-label">Show UPI Code on Invoice<label class="text-danger">*</label></label>
                                                                            </div>
                                                                            <div class="form-group mb-5">
                                                                                <label class="col-sm-4 control-label">Sales Invoice Footer Text</label>
                                                                                <div class="col-sm-8">
                                                                                <textarea class="form-control"> This is footer text. You can set it from Site Settings.</textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group mb-5">
                                                                                <label  class="col-sm-4 control-label">Invoice Terms and Conditions</label>
                                                                                <div class="col-sm-8">
                                                                                    <textarea class="form-control" cols="5" rows="5">   1) no warranty for damaged or burnt goods. </textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                <!-- End Second Tab Panel Form -->
                                                            </div>


                                                            <div class="tab-pane fade" id="nav-prefixes" role="tabpanel" aria-labelledby="nav-prefixes-tab">
                                                                    <!-- Start Third Tab Panel Form -->
                                                                        <div class="row mx-5">
                                                                            <div class=" col-md-6">
                                                                            <div class="form-group">
                                                                                <label  class="col-sm-4 control-label">Category<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control"  placeholder="" value="CT">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label  class="col-sm-4 control-label">Item<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control"  placeholder="" value="IT">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label class="col-sm-4 control-label">Supplier<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control"  placeholder="" value="SP">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label class="col-sm-4 control-label">Purchase<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control" placeholder="" value="PU">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label  class="col-sm-4 control-label">Purchase Return<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control"   placeholder="" value="PR">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label class="col-sm-4 control-label">Customer<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control"  placeholder="" value="CU">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label  class="col-sm-4 control-label">Sales<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control"  placeholder="" value="SL">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label  class="col-sm-4 control-label">Sales Return<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control" placeholder="" value="PR">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                            <div class="form-group">
                                                                                <label  class="col-sm-4 control-label">Expense<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <input type="text" class="form-control"  placeholder="" value="EX">
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                    <!-- Start Third Tab Panel Form -->
                                                            </div>

                                                        </div>
                                                        <!-- End Panel Tab Content  -->

                                                    </div>
                                                    <div class="card-footer">
                                                        <div class="group d-flex justify-content-center align-items-center mx-auto">
                                                            <button class="btn btn-success w-25">Save</button>
                                                            &nbsp;
                                                            <button class="btn btn-warning w-25">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
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