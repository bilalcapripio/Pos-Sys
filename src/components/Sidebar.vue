<template>

<div>

    <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-danger elevation-4">
            <!-- Brand Logo -->
            <a href="/" class="brand-link">
                <img src="../assets/Img/admin.png" width="50" height="50" alt="AdminLTE Logo" class="brand-image img-circle elevation-3 img-fluid"
                    style="opacity:.8">
                <span class="brand-text font-weight-light text-monospace">POS SYSTEM</span><br>
                <span class="brand-text font-weight-light mx-5" style="font-size: 12px;"><i class="fa fa-circle text-success" style="font-size: 12px;"></i> Online</span>
            </a>
            <!-- Sidebar -->
            <div class="sidebar">
              <!-- Sidebar Menu -->
                <nav class="mt-5">
                  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item has-treeview menu-open mb-3">
                      <a href="/" class="nav-link active">
                        <i class="nav-icon fa fa-dashboard text-aqua"></i>
                        <p>
                          Dashboard
                        </p>
                      </a>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a  href="#" class="nav-link">
                        <i class="nav-icon  fa fa-shopping-cart text-aqua"></i>
                        <p>
                          Sales
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="pos" class="nav-link">
                            <i class="fa fa-calculator  nav-icon"></i>
                            <p>POS</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <!-- <router-link to="/" class="nav-link"> -->
                          <a href="Add_Sale" class="nav-link">

                            <i class="fa fa-plus-square-o nav-icon"></i>
                            <p>New Sales</p>
                          </a>

                          <!-- </router-link> -->
                        </li>
                        <li class="nav-item">
                          <a href="/Sales" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p>Sales List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Add_Sale_Return" class="nav-link">
                            <i class="fa fa-plus-square-o nav-icon"></i>
                            <p>New Sales Return</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Sale_Returns" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p>Sales Return List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-group text-aqua"></i>
                        <p>
                          Customers
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Add_Customer" class="nav-link">
                            <i class="fa fa-plus-square-o  nav-icon"></i>
                            <p>New Customer</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Customers" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p>Customers List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            <i class="fa fa-arrow-circle-o-left  nav-icon"></i>
                            <p>Import Customers</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-th-large text-aqua"></i>
                        <p>
                          Purchase
                          <i class="right fa fa-angle-left"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Add_Purchase" class="nav-link">
                            <i class="fa fa-plus-square-o  nav-icon"></i>
                            <p>New Purchase</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Purchases" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p>Purchase List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Add_Purchase_Return" class="nav-link">
                            <i class="fa fa-plus-square-o nav-icon"></i>
                            <p>New Purchase Return</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Purchase_Returns" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p> Purchase Return List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-user-plus text-aqua"></i>
                        <p>
                          Suppliers
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Add_Supplier" class="nav-link">
                            <i class="fa fa-plus-square-o nav-icon"></i>
                            <p>New Suppliers</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Suppliers" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>Suppliers List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            <i class="fa fa-arrow-circle-o-left  nav-icon"></i>
                            <p>Import Suppliers</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-cubes text-aqua"></i>
                        <p>
                          Items
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Add_item" class="nav-link">
                            <i class="fa fa-plus-square-o  nav-icon"></i>
                            <p>New Items</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Items" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>Items List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Add_item_Category" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>New Category</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="item_Category" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>Category List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Add_item_Brand" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p> New Brand</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="item_Brand" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p> Brand List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Pages/Items_Page/Print.html" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p> Print Labels </p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-minus-circle text-aqua"></i>
                        <p>
                          Expences
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Add_Expence" class="nav-link">
                            <i class="fa fa-plus-square-o nav-icon"></i>
                            <p>New Expences</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Expences" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>Expences List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Add_Expence_Category" class="nav-link">
                            <i class="fa fa-plus-square-o  nav-icon"></i>
                            <p>New Category</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Expence_Category" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p>Category List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-paper-plane-o text-aqua"></i>
                        <p>
                          Places
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Add_Country" class="nav-link">
                            <i class="fa fa-plus-square-o  nav-icon"></i>
                            <p>New Country </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Countries" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>Countries List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Add_State" class="nav-link">
                            <i class="fa fa-plus-square-o nav-icon"></i>
                            <p>New State</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="States" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>State List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-paper-plane-o text-aqua"></i>
                        <p>
                          Report
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Profit_Loss_Report" class="nav-link">
                            <i class="fa fa-file nav-icon"></i>
                            <p>Profit & Loss report  </p>
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="Purchase_Report" class="nav-link">
                            <i class="fa fa-file nav-icon"></i>
                            <p>Purchase Report  </p>
                          </a>
                        </li>

                          <li class="nav-item">
                            <a href="Purchase_Return_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p>Purchase Return Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="Purchase_Payment_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p>Purchase Payment Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="Item_Sales_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p> Item Sales Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="Item_Purchase_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p> Item Purchase Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="Sales_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p>  Sales Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="/Sales_Return_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p>  Sales Return  Report   </p>
                            </a>
                          </li>
                          
                          <li class="nav-item">
                            <a href="/Sales_Payment_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p>  Sales Payment Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="/Stock_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p>  Stock Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="/Expence_Report" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p> Expence Report   </p>
                            </a>
                          </li>

                          <li class="nav-item">
                            <a href="/Expence_Item_Reports" class="nav-link">
                              <i class="fa fa-file nav-icon"></i>
                              <p>  Expired Item Report   </p>
                            </a>
                          </li>
                      
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-users text-aqua"></i>
                        <p>
                          Users
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="/Add_User" class="nav-link">
                            <i class="fa fa-plus-square-o  nav-icon"></i>
                            <p>New Users </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Users" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>Users List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Role" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p>Role List</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview mb-1">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-book"></i>
                        <p>
                          SMS
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="Pages/Sms_Page/Send.html" class="nav-link">
                            <i class="fa fa-envelope-o  nav-icon"></i>
                            <p>Send SMS</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="Pages/Sms_Page/Template.html" class="nav-link">
                            <i class="fa fa-list nav-icon"></i>
                            <p>SMS Template</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            <i class="fa fa-cube nav-icon"></i>
                            <p>SMS API</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-plus-square"></i>
                        <p>
                          Settings
                          <i class="fa fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        <li class="nav-item">
                          <a href="/Profile" class="nav-link">
                            <i class="fa fa-suitcase nav-icon"></i>
                            <p>Company Profile</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Site" class="nav-link">
                            <i class="fa fa-shield  nav-icon"></i>
                            <p>Site Settings</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Tax" class="nav-link">
                            <i class="fa fa-percent  nav-icon"></i>
                            <p>Tax List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Unit" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p> Units List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Payment" class="nav-link">
                            <i class="fa fa-list  nav-icon"></i>
                            <p>Payments Types List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Currency" class="nav-link">
                            <i class="fa fa-gg  nav-icon"></i>
                            <p>Currency List</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="/Password" class="nav-link">
                            <i class="fa fa-lock  nav-icon"></i>
                            <p>Change Password</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            <i class="fa fa-database  nav-icon"></i>
                            <p>Database Backup</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fa fa-book"></i>
                        <p>Help</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
    <!-- Main Sidebar Container -->

</div>

</template>

<script>
export default {
    name:'Sidebar',

}
</script>

<style>

</style>