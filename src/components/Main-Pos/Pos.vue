<template>

<div>
        <nav class=" navbar navbar-expand-lg navbar-primary navbar-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Left navbar links -->
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item pl-5 pt-2 text-light">
                                    <h5>Ultimate Inventory with POS</h5>
                                </li>
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
                                <a class="nav-link" data-toggle="dropdown" href="/pos">
                                    <i class="fa fa-plus"></i>
                                    POS
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link" data-toggle="dropdown" href="/">
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
                    </div>

        </nav>   

        <!-- //////////////////----End Navbar----//////////////////  -->
        <main class="bg-light mt-2">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7">
                        <div class="container-fluid pt-2">
                            <div class="card border-top border-primary">
                                <div class="card-header">                                                                      
                                    <h5 class="">
                                        <i class="box-title text-primary fa fa-shopping-cart text-success"></i>
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
                                                        <option value="">Walk-in-customer</option>
                                                        <option value="">Walk-in-customer</option>
                                                        <option value="">Walk-in-customer</option>
                                                        <option value="">Walk-in-customer</option>
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
                                                    <input type="text" class="form-control" placeholder="Item name/Barcode/Itemcode">
                                                </div>
                                            </div>
                                        </div>
                                            <div class="box-body mt-4 border border-primary" style="width:100%; height:300px">
                                            <div class="table-responsive p-1" style="width: 100%">
                                                <table class="table table-hover table-bordered" style="width:100%" id="sales_table">
                                                    <thead class="custom_thead ">
                                                        <tr class="bg-primary">
                                                            <th rowspan="2" style="width:15%">Item Name</th>
                                                            <th rowspan="2" style="width:10%;min-width: 180px;">Stock</th>
                                                            <th rowspan="2" style="width:10%">Quantity</th> 
                                                            <th rowspan="2" style="width:10%">Price</th>
                                                            <th rowspan="2" style="width:10%">Discount</th>
                                                            <th rowspan="2" style="width:5%">Tax</th>
                                                            <th rowspan="2" style="width:7.5%">SubTotal</th>
                                                            <th rowspan="2" style="width:7.5%">X</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <!-- <tr>
                                                            <td>test</td>
                                                            <td>test</td>
                                                            <td>test</td>
                                                            <td>test</td>
                                                            <td>test</td>
                                                            <td>test</td>
                                                            <td>test</td>
                                                        </tr> -->
                                                    </tbody> 
                                                </table>
                                            </div>
                                        </div>  
                                        <div class="row mt-4">
                                            <div class="col-md-1">
                                                <!-- <div class="d-flex align-items-center mx-auto"> -->
                                                    <input type="checkbox" disabled name="" class="form-control" id="check">
                                                <!-- </div> -->
                                            </div>
                                            <div class="col-md-3 pt-2">
                                                <label for="check">Send SMS to Customer <i class="fa fa-info-circle text-maroon text-black hover-q"></i> </label>
                                            </div>
                                            <div class="offset-md-4 col-md-2 pt-2">
                                                <label for="#check">Other Charges*</label>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="text" name="" placeholder="0.00" class="text-right form-control" id="check">
                                            </div>
                                        </div>
                                        <div class="mt-4 bg-light p-2">
                                            <div class="row">
                                                <div class="col-md-3 text-right">
                                                    <b>Quantity:</b>
                                                    <br>
                                                    <span class="text-primary text-bold">0</span>
                                                </div>
                                                <div class="col-md-3 text-right">
                                                    <b>Total Amount:</b>
                                                    <br>
                                                    <span class="text-primary text-bold">0.00</span>
                                                </div>    
                                                <div class="col-md-3 text-right">
                                                    <b>Total Discount:</b>
                                                    <br>
                                                    <span class="text-primary text-bold">0.00</span>
                                                </div>    
                                                <div class="col-md-3 text-right">
                                                    <b>Grand Total:</b>
                                                    <br>
                                                    <span class="text-primary text-bold">0.00</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <button class="btn bg-maroon btn-block btn-flat btn-lg"> <i class="fa fa-hand-paper-o"></i> Hold</button>
                                                </div>
                                                <div class="col-md-3">
                                                    <button class="btn btn-primary btn-block btn-flat btn-lg"> <i class="fa fa-credit-card"></i> Multiple</button>
                                                </div>
                                                <div class="col-md-3">
                                                    <button class="btn btn-success btn-block btn-flat btn-lg"> <i class="fa fa-money"></i> Cash</button>
                                                </div>
                                                <div class="col-md-3">
                                                    <button class="btn bg-purple btn-block btn-flat btn-lg"> <i class="fa fa-money"></i> PayAll</button>
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
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-group pt-2">
                                                    <select name="" id="" class="form-control">
                                                        <option value="">All Categories</option>
                                                        <option value="">1</option>
                                                        <option value="">1</option>
                                                        <option value="">1</option>
                                                        <option value="">1</option>
                                                    </select>
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
                                        <div style="overflow-y: scroll;min-height: 100px;height: 600px; overflow-x:hidden">
                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="box box-default bg-success border" style="border-radius:5px">
                                                    <span class="badge badge-danger push-right">Qty: 54.00</span>
                                                    <div class="box-body box-profile">
                                                        <center class="pt-1">
                                                            <img src="@/assets/Img/watch_thumb.jpg" alt="image Not Found" style="height:60px" class=" img-responsive border border-gray">
                                                        </center>
                                                        <center class="py-3">
                                                        <label class="text-center" style="color:black;">Rado Watch
                                                        <br>    
                                                            <span>₹ 20,768.00</span>
                                                        </label>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        

                                </div>
                            
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
    @media(max-width: 360px){
        #navbarNav{
                text-align: center;
                padding: 5px;
        }
        #navbarNav ul li{
            padding: 10px;
        }
    }
</style>