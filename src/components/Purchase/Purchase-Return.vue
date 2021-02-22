<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                        <div class="container-fluid">
                                        <h2 class="text-md ml-4"><span class="text-lg">Purchase Return</span> <span>Create New Purchase Return</span></h2>

                                                <!-- alert start -->
                                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                                    </div>
                                                <!-- alert end -->
                                                <!--Start Calculation -->
                                                <div class="container border-top">
                                                    <br>
                                                    <div class="row">
                                                        <div class="col-md-6 p-5">
                                                            <form>
                                                                <label>Customer Name <span class="text-danger">*</span></label>
                                                                <div class="input-group mb-3">
                                                                <select class="custom-select" id="inputGroupSelect02">
                                                                    <option selected>Choose...</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                                <div class="input-group-append">
                                                                    <button class="input-group-text text-primary text-lg" type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                                                    <i class="fa fa-user-plus"></i>
                                                                    </button>
                                                                    <!-- Modal -->
                                                                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                                                        <div class="modal-content">
                                                                            <div class="modal-header">
                                                                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true">&times;</span>
                                                                            </button>
                                                                            </div>
                                                                            <div class="modal-body">
                                                                            ...
                                                                            </div>
                                                                            <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                            <button type="button" class="btn btn-primary">Save changes</button>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- End Modal  -->
                                                                </div>
                                                                </div>                              
                                                                <br>
                                                                <label>Sales Date <span class="text-danger">*</span></label>
                                                                <select id="inputState" class="form-control">
                                                                    <option selected>Choose...</option>
                                                                    <option>Walk-In Customer</option>
                                                                    <option>Walk-In Customer</option>
                                                                    <option>Walk-In Customer</option>
                                                                    <option>Walk-In Customer</option>
                                                                    <option>Walk-In Customer</option>
                                                                </select>       
                                                            </form>
                                                        </div>

                                                        <div class="col-md-6 p-5">
                                                        <form>
                                                            <label>Date <span class="text-danger">*</span></label>
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-append">
                                                                <label class="input-group-text" for="inputGroupSelect02"><i class="fa fa-calendar"></i></label>
                                                                </div>
                                                                <input type="date" max="3000-12-31" 
                                                                min="1000-01-01" class="form-control">                                  
                                                            </div>                              
                                                            <br>
                                                            <label for="Refrence no">Refrence no <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control">
                                                                
                                                        </form>
                                                    </div>
                                                        
                                                    </div>    
                                                </div>
                                                <!--Start Calculation -->
                                                <br><br>
                                                <!-- Start Barcode -->
                                                <div class="container border-top">
                                                    <br><br>
                                                    <div class="col-md-8 col-md-offset-2 d-flex justify-content mx-auto">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-barcode"></i></span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Item name/Barcode/Itemcode" aria-label="Username" aria-describedby="basic-addon1">
                                                    </div>
                                                    </div>
                                                </div>
                                                <!-- End Barcode -->
                                                <br><br>
                                                <!------Start table----->
                                                <div class="box-body">
                                                    <div class="table-responsive" style="width: 100%">
                                                        <table class="table table-hover table-bordered" style="width:100%" id="sales_table">
                                                            <thead class="custom_thead">
                                                                <tr class="bg-primary">
                                                                    <th rowspan="2" style="width:15%">Item Name</th>
                                                                    <th rowspan="2" style="width:10%;min-width: 180px;">Quantity</th>
                                                                    <th rowspan="2" style="width:10%">Unit Price</th> 
                                                                    <th rowspan="2" style="width:10%">Discount($)</th>
                                                                    <th rowspan="2" style="width:10%">Tax Amount</th>
                                                                    <th rowspan="2" style="width:5%">Tax</th>
                                                                    <th rowspan="2" style="width:7.5%">Total Amount</th>
                                                                    <th rowspan="2" style="width:7.5%">Action</th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>
                                                <hr>
                                                <!-- start table record -->
                                                <div class="row p-5">
                                                    <div class="col-md-7">
                                                        <form>
                                                            <div class="d-flex justify-content-between mx-auto">
                                                                <h1 class="display-3">Quantity <span class="text-success font-weight-bold">0</span></h1>
                                                            </div>
                                                            <br>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputEmail4">Other Charges</label>
                                                                    <input type="email" class="form-control" id="inputEmail4">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputState">Select</label>
                                                                        <select id="inputState" class="form-control">
                                                                        <option selected>None</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputEmail4">Discount on All</label>
                                                                    <input type="email" class="form-control" id="inputEmail4">
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputState">Select</label>
                                                                        <select id="inputState" class="form-control">
                                                                        <option selected>Per%</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                        </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="exampleFormControlTextarea1">Note</label>
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-md-5" >
                                                        <!-- table total -->
                                                        <div style="position: relative;top:8rem;">
                                                            <table class="col-md-6 ml-5">
                                                                <tbody>
                                                                <tr>
                                                                    <th class="text-righ px-4">
                                                                    <h5>
                                                                        Subtotal
                                                                    </h5>
                                                                    </th>
                                                                    <th>
                                                                    <h4 class="text-success"><b>0.00</b></h4>
                                                                    </th>
                                                                </tr>

                                                                <tr>
                                                                    <th class="text-righ px-4">
                                                                    <h5>
                                                                        Other Charges
                                                                    </h5>
                                                                    </th>
                                                                    <th>
                                                                    <h4 class="text-success"><b>0.00</b></h4>
                                                                    </th>
                                                                </tr>

                                                                <tr>
                                                                    <th class="text-righ px-4">
                                                                    <h5>
                                                                        Discount On All 
                                                                    </h5>
                                                                    </th>
                                                                    <th>
                                                                    <h4 class="text-success"><b>0.00</b></h4>
                                                                    </th>
                                                                </tr>

                                                                <tr>
                                                                    <th class="text-righ px-4">
                                                                    <h5>
                                                                        Grand Total
                                                                    </h5>
                                                                    </th>
                                                                    <th>
                                                                    <h4 class="text-success"><b>0.00</b></h4>
                                                                    </th>
                                                                </tr>                                      
                                                            </tbody>
                                                            </table>
                                                        </div>

                                                        <!-- table total -->
                                                    </div>
                                                </div>

                                                <!-- start table record -->

                                                <!------End table----->
                                                <br>
                                                <!----payment table--->
                                                <div class="box-body ">
                                                    <div class="col-md-12">
                                                    <h4 class="box-title text-info">Previous Payments Information : </h4><table class="table table-hover table-bordered" style="width:100%" id="payments_table">
                                                        <thead>
                                                            <tr class="bg-gray ">
                                                            <th>#</th>
                                                            <th>Date</th>
                                                            <th>Payment Type</th>
                                                            <th>Payment Note</th>
                                                            <th>Payment</th>
                                                            <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr><td colspan="6" class="text-center text-bold">Payments Pending!!</td></tr>                                             </tbody>
                                                    </table>
                                                    </div>
                                                </div>
                                                <br>
                                                <br>
                                                <div class="col-md-12 payments_div payments_div_">
                                                    <h4 class="box-title text-info">Subtotal :</h4>
                                                    <div class="box box-solid bg-gray p-3">        
                                                    <div class="box-body">
                                                        <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="">
                                                                <label for="amount">Amount</label>
                                                                <input type="text" class="form-control text-right paid_amt only_currency" id="amount" name="amount" placeholder="">
                                                                    <span id="amount_msg" style="display:none" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                        <div class="">
                                                            <label for="payment_type">Payment Type</label>
                                                            <select class="form-control select2 select2-hidden-accessible" id="payment_type" name="payment_type" tabindex="-1" aria-hidden="true">
                                                                <option value="">-Select-</option><option value="Cash">Cash</option><option value="Card">Card</option><option value="Paytm">Paytm</option><option value="Finance">Finance</option>    
                                                            </select>
                                                            <span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" style="width: 522px;"></span><span class="selection"></span>
                                                        </div>
                                                        </div>
                                                    <div class="clearfix"></div>
                                                </div>  
                                                <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="">
                                                                <label for="payment_note">Payment Note</label>
                                                                <textarea type="text" class="form-control" id="payment_note" name="payment_note" placeholder=""></textarea>
                                                                <span id="payment_note_msg" style="display:none" class="text-danger"></span>
                                                            </div>
                                                        </div>      
                                                    <div class="clearfix"></div>
                                                </div>   
                                                </div>
                                                </div>     
                                                <br>
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                    <label class="form-check-label" for="exampleCheck1">Send SMS to Custome <i class="fa fa-info-circle text-maroon text-black hover-q"></i></label>
                                                </div>
                                                </div>
                                                <hr>
                                                <br>
                                                <div class=" d-flex mx-auto justify-content-center align-items-center ">
                                                    <button type="button" class="btn btn-danger btn-lg w-25 ">Create</button>
                                                    &nbsp;
                                                    <button type="button" class="btn btn-secondary btn-lg w-25">Close</button>

                                                </div>
                                                <!----payment table--->
                                                
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