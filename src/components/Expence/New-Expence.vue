<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                            
                                <!---Start Third card shop-->
                                <h2 class="text-md ml-4 pt-3"><span class="text-lg"> Expence</span>   Add/ <small class="text-gray text-sm"><span>Update Expence</span></small></h2>
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
                                    <div class="card">
                                        <div class="card-header display-5">
                                            Please Enter Valid Data
                                        </div>
                                        <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-7 p-4">
                                                <form>
                                                    <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Expense Date*</label>
                                                    <div class="col-sm-10">
                                                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                                            <div class="input-group mb-2">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                            </div>
                                                            <input type="text" class="form-control pull-right datepicker" value="06-02-2021" id="expense_date" name="expense_date" readonly="" onkeyup="shift_cursor(event,'category_id')">                                     
                                                            </div>  
                                                    </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Category*</label>
                                                        <div class="col-sm-10">
                                                                <select class="form-control select2 select2-hidden-accessible" id="category_id" name="category_id" style="width: 100%;" onkeyup="shift_cursor(event,'expense_for')" value="" tabindex="-1" aria-hidden="true">
                                                                <option value="">-Select-</option><option value="35">Petrol</option><option value="36">Bills</option><option value="37">Office Vehicle</option>                            
                                                                </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Expense for*</label>
                                                        <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputEmail3">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Amount*</label>
                                                        <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputEmail3">
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                            </div>
                                            <div class="col-md-5 p-4">
                                                <form>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Refrence</label>
                                                        <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputEmail3">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Note</label>
                                                        <div class="col-sm-10">
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                            </div>
                                        </div>
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

                                <!--End  Print Card-->
                        
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