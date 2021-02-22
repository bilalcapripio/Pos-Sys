<template>
  <div>
    <!-- Start Navbar-->
      <nav class="main-header navbar navbar-expand navbar-primary navbar-dark">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fa fa-bars"></i></a>
          </li>
          <!-- <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">POS</a>
          </li> -->
          <li class="nav-item">
            <div class="dropdown">
              <button class="btn btn-success" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-plus"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#"><i class="fa fa-plus text-success "></i> Sales</a>
                <a class="dropdown-item" href="#"><i class="fa fa-plus text-success "></i> Purchase</a>
                <a class="dropdown-item" href="#"><i class="fa fa-plus text-success "></i> Customer</a>
                <a class="dropdown-item" href="#"><i class="fa fa-plus text-success "></i> Supplier</a>
                <a class="dropdown-item" href="#"><i class="fa fa-plus text-success "></i> Items</a>
                <a class="dropdown-item" href="#"><i class="fa fa-plus text-success "></i> Expense</a>
              </div>
            </div>       
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
              <img src="../assets/Img/admin.png" class="user-image" alt="User Image">
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
    <!-- /. End Navbar-->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
