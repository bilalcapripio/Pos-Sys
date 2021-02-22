<template>
<div>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                    <div class="content-wrapper">
                                <!---Start Third card shop-->
                                <h2 class="text-md ml-4 pt-3"><span class="text-lg">Create User</span> <span class="font-weight-light">Enter User Information</span></h2>
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
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                <label for="new_user" class="col-sm-4 control-label">User Name<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control input-sm" id="new_user" name="new_user" placeholder="" onkeyup="shift_cursor(event,'mobile')" value="" autofocus="">
                                                    <span id="new_user_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="mobile" class="col-sm-4 control-label">Mobile<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control input-sm no_special_char_no_space" id="mobile" name="mobile" placeholder="" value="" onkeyup="shift_cursor(event,'email')">
                                                    <span id="mobile_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="email" class="col-sm-4 control-label">Email<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control input-sm" value="" id="email" name="email" placeholder="" onkeyup="shift_cursor(event,'pass')">
                                                    <span id="email_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="role_id" class="col-sm-4 control-label">Role<label class="text-danger">*</label> </label>
                                                <div class="col-sm-8">
                                                    <select class="form-control" id="role_id" name="role_id" style="width: 100%;">
                                                        <option value="">-Select-</option><option value="15">Sales</option><option value="16">Purchase</option>                                    </select>
                                                    <span id="role_id_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="pass" class="col-sm-4 control-label">Password<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="password" class="form-control input-sm" id="pass" name="pass" placeholder="" onkeyup="shift_cursor(event,'confirm')">
                                                    <span id="pass_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                <label for="confirm" class="col-sm-4 control-label">Confirm Password<label class="text-danger">*</label></label>
                                                <div class="col-sm-8">
                                                    <input type="password" class="form-control input-sm" id="confirm" name="confirm" placeholder="">
                                                    <span id="confirm_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                    <label for="address" class="col-sm-4 control-label">Profile Picture</label>
                                                    <div class="col-sm-8">
                                                        <input type="file" id="profile_picture" name="profile_picture">
                                                        <span   class="text-danger">Max Width/Height: 500px * 500px &amp; Size: 500Kb </span>
                                                    </div>
                                                    </div>
                                                    <div>
                                                        <div class="form-group">
                                                        <div>
                                                            <img width="200px" height="200px" class="img-fluid" style="border:3px solid #d2d6de; width: 250px; height: 200px;" src="../../assets/Img/admin.png">
                                                        </div>
                                                        </div>
                                                    </div>
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
</div>
</template>

<script>


    import Navbar from  '../../components/Navbar.vue'
    import Sidebar from '../../components/Sidebar.vue'
    import Footer from  '../../components/Footer.vue'

export default {
    name:'',
    components:{
        Navbar,
        Sidebar,
        Footer
    }

}
</script>

<style>

</style>