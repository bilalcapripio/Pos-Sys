<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                        <div class="container-fluid">
                                            <h4>Purchase Report </h4>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card">
                                                    <div class="p-2">
                                                        <h6>Please Enter Valid Information</h6>
                                                        <div class="border-top mt-3">
                                                            <form>
                                                                <div class="row mt-3">
                                                                    <div class="offset-md-1 col-md-4">
                                                                        <label>From Date</label>
                                                                        <div class="input-group mb-3">
                                                                            <div class="input-group-prepend">
                                                                                <i class="fa fa-calendar input-group-text"></i>
                                                                            </div>
                                                                            <input type="date" class="form-control" placeholder="Last name">
                                                                        </div>
                                                                        <br>
                                                                        <label>Supplier Name</label>
                                                                        <div class="input-group mb-3">
                                                                            <select class="custom-select" id="inputGroupSelect01">
                                                                            <option selected>Choose...</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="offset-md-1 col-md-4">
                                                                        <label>To Date</label>
                                                                        <div class="input-group mb-3">
                                                                            <div class="input-group-prepend">
                                                                                <i class="fa fa-calendar input-group-text"></i>
                                                                            </div>
                                                                            <input type="date" class="form-control" placeholder="Last name">
                                                                        </div>
                                                                        <br>
                                                                    </div>
                                                                </div>
                                                                <div class="container border-top">
                                                                    <br>
                                                                    <div class="">
                                                                        <div class="input-group d-flex justify-content-center px-5">
                                                                            <button type="button" class="btn btn-primary w-25">Save</button>
                                                                            <button type="button" class="offset-md-1 btn btn-warning w-25">Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="card">
                                                            <div class="col-md-12 mt-3 d-flex justify-content-between">
                                                                <p class="px-3">Records Table</p>
                                                                <button class="btn btn-primary float-right">Excel</button>
                                                            </div>
                                                            <div class="card-body">
                                                                <table class="table table-hover">
                                                                <thead class="btn-primary table-bordered">
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Invoice Number</th>
                                                                            <th>Purchase Date</th>
                                                                            <th>Supplier ID</th>
                                                                            <th>Supplier Name</th>
                                                                            <th>Invoice Total(₹)</th>
                                                                            <th>Paid Payment(₹)</th>
                                                                            <th>Due Amount(₹)</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </div>
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