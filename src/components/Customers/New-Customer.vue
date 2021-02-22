<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                            <div class="container-fluid">
                                            <!-- alert start -->
                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                                </div>
                                            <!-- alert end -->
                                            <!--Start Calculation -->
                                            <div class="container border-top mx-auto">
                                                <br>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <!-- <form> -->
                                                            <label>Customer Name <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" placeholder="First name">
                                                            <br>
                                                            <label>Mobile</label>
                                                            <input type="text" class="form-control" placeholder="Last name">
                                                            <br>
                                                            <label>Email</label>
                                                            <input type="text" class="form-control" placeholder="Last name">
                                                            <br>
                                                            <label>Phone</label>
                                                            <input type="text" class="form-control" placeholder="Last name">
                                                            <br> 
                                                            <label>GST Number</label>
                                                            <input type="text" class="form-control" placeholder="Last name">
                                                            <br> 
                                                            <label>Tax Number</label>
                                                            <input type="text" class="form-control" placeholder="Last name">
                                                        </div>
                                                        <div class="col-md-4 offset-md-2">
                                                            <label><span>Opening Balance</span></label>
                                                            <input type="text" class="form-control" placeholder="First name">
                                                            <br>
                                                            <label>Country</label>
                                                            <select id="inputState" class="form-control">
                                                                <option selected>Choose...</option>
                                                                <option>Pakistan</option>
                                                                <option>Turkey</option>
                                                                <option>Pakistan</option>
                                                                <option>Pakistan</option>
                                                                <option>Pakistan</option>
                                                            </select>
                                                            <br>  
                                                            <label>State</label>
                                                            <select id="inputState" class="form-control">
                                                                <option selected>Choose...</option>
                                                                <option>Karachi</option>
                                                                <option>Islamabad</option>
                                                                <option>Peshawar</option>
                                                                <option>Quetta</option>
                                                                <option>Punjab</option>
                                                            </select>
                                                            <br>
                                                            <label>City<span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" placeholder="First name">
                                                            <br>
                                                            <label>PostCode</label>
                                                            <input type="text" class="form-control" placeholder="Last name">
                                                            <br>
                                                            <div class="form-floating">
                                                                <label for="floatingTextarea2">Comments</label>
                                                                <textarea class="form-control" rows="0" placeholder="Address" id="floatingTextarea2" style="height: 100px"></textarea>
                                                            </div>
                                                        <!-- </form> -->
                                                    </div>
                                                </div>    
                                            </div>
                                            <br><br>
                                            <div class="container border-top">
                                                <br>
                                                <div class="col-md-4 col-md-offset-2 d-flex justify-content-center mx-auto">
                                                    <div class="input-group">
                                                        <button type="button" class="btn btn-primary btn-lg px-5">Save</button>
                                                        <button type="button" class="offset-md-1 btn btn-secondary btn-lg px-5 ">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            <!----payment table--->
                                            <div class="box-body border-top">
                                            <br>  
                                                <div class="col-md-12">
                                                <h4 class="box-title text-info p-3">Opening Balance Information: </h4><table class="table table-hover table-bordered" style="width:100%" id="payments_table">
                                                    <thead>
                                                        <tr class="bg-gray ">
                                                        <th>#</th>
                                                        <th>Payment Date</th>
                                                        <th>Payment</th>
                                                        <th>Payment Type</th>
                                                        <th>Payment Note</th>
                                                        <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td colspan="6" class="text-center text-bold">No Previous Stock Entry Found!!</td></tr>                                             </tbody>
                                                </table>
                                                </div>
                                            </div>
                                            <!--Start Calculation -->
                                            
                                            <!-- /.content-wrapper -->
                                        <Footer/>
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