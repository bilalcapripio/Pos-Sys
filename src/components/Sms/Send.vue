<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                        <div class="content-header">
                                                <!---Start Third card shop-->
                                                <h2 class="text-xl ml-4">Send SMS</h2>
                                                <!---Start Porduct Table>-->
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-md-8">
                                                                <div class="card border-top border-primary">
                                                                    <div class="card-body">
                                                                    <form>
                                                                        <div class="box-body">
                                                                            <div class="form-group">
                                                                                <label for="category" class="col-sm-6 control-label"> Mobile <label class="text-danger">*</label></label>
                                                                            <div class="col-sm-8">
                                                                            <input type="text" class="form-control input-sm" name="category" placeholder=""  value="" autofocus="">
                                                                            </div>
                                                                            </div> 
                                                                            <div class="form-group">
                                                                                <label for="country_name" class="col-sm-6 control-label">Message<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-8">
                                                                                    <textarea class="form-control input-sm" name="" id="" cols="50" rows="5"></textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <button class="btn btn-warning">Back</button>
                                                                        <button class="btn btn-success">Send</button>
                                                                        <button class="btn btn-danger">Close</button>
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