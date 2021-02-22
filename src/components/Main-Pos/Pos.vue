<template>
    <div>
        <nav class=" navbar navbar-expand navbar-primary navbar-dark">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item pl-5 pt-2 text-light">

              <h5>Ultimate Inventory with POS</h5>
            <!-- <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fa fa-bars"></i></a> -->
          </li>
          <!-- <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">POS</a>
          </li> -->
        <li class="nav-item pl-3">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="fa fa-list text-yellow"></i>
                Sales List
            </a>
        </li>
        <li class="nav-item pl-2">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="fa fa-calculator text-yellow "></i>
                New Invoice
            </a>
        </li>
        <li class="nav-item pl-2">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="fa  fa-cubes text-yellow "></i>
                Item List
            </a>
        </li>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
          <!-- Messages Dropdown Menu -->
          <li class="nav-item dropdown">
              <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="fa fa-language"></i>
                  English
              </a>
          </li>

          <li class="nav-item dropdown">
              <a class="nav-link" data-toggle="dropdown" href="Pages/Pos_Calculation/Add.html">
                  <i class="fa fa-plus"></i>
                  POS
              </a>
          </li>

          <li class="nav-item dropdown">
              <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="fa fa-dashboard"></i>
                  Dashboard
              </a>
          </li>


          <li class="dropdown user user-menu open mt-2 ml-2">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
              <img src="../../assets/Img/admin.png" class="user-image" alt="User Image">
              <span class="hidden-xs text-light">Admin</span>
            </a>

            <ul class="dropdown-menu bg-gradient-navy rounded">
              <!-- User image -->
              <li class="user-header">
                <img src="#" class="img-circle img-fluid" alt="User Image">
                    <p>Admin<small>Year 2021</small> </p>
              </li>
              <!-- Menu Body -->
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-primary btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="Logout.html" class="btn btn-danger btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>   

<!-- //////////////////----End Navbar----//////////////////  -->
        <main>
 
            <div class="row">
                <div class="col-md-7">
                    <div class="container-fluid pt-2">
                        <div class="card border-top border-primary">
                            <div class="card-header">                                                                      
                                <h5 class=" pt-4">
                                    <i class="box-title text-primary fa fa-shopping-cart text-aqua"></i>
                                     Sales Invoice
                                </h5>
                                <div class="border-top">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-user input-group-text"></i>
                                                </div>
                                                <select name="" id="" class="form-control">
                                                    <option value="">Walk-in-customer</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                </select>
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-user-plus text-primary fa-lg input-group-text"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-barcode input-group-text"></i>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Last name">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="container-fluid pt-2">
                        <div class="card border-top border-primary">
                            <div class="card-header">                                                                      
                                <!-- <h5 class=" pt-4">
                                    <i class="box-title text-primary fa fa-shopping-cart text-aqua"></i>
                                     Sales Invoice
                                </h5> -->
                                <!-- <div class="border-top"> -->
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <!-- <div class="input-group-prepend">
                                                    <i class="fa fa-user input-group-text"></i>
                                                </div> -->
                                                <select name="" id="" class="form-control">
                                                    <option value="">All Categories</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                    <option value="">1</option>
                                                </select>
                                                <!-- <div class="input-group-prepend">
                                                    <i class="fa fa-user-plus text-primary fa-lg input-group-text"></i>
                                                </div> -->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <input type="text" class="form-control" placeholder="Last name">
                                                <div class="input-group-prepend">
                                                    <!-- <i class="fa fa-barcode input-group-text"></i> -->
                                                    <button class="btn btn-primary">All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <!-- </div> -->
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    
</style>