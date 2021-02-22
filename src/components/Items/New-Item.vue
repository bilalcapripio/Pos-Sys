<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                            <div class="content-wrapper">
                                <div class="content-header">
                                        <!---Start Third card shop-->
                                        <h2 class="text-md ml-4"><span class="text-lg">Items</span>  Add / <small class="text-gray text-sm"><span>Update Items</span></small></h2>
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
                                        <!---- Start Form --->
                                        <div class="container-fluid bg-light px-3 bg-gray-light">
                                            <hr style="height:2px;border-width:0;color:dodgerblue;background-color:dodgerblue">
                                            <div class="box-body">
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="item_name">Item Name<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="item_name" name="item_name" placeholder="" value="">
                                                    <span id="item_name_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label>Brand</label>
                                                    <select class="form-control select2 select2-hidden-accessible" id="brand_id" name="brand_id" style="width: 100%;" value="" tabindex="-1" aria-hidden="true">
                                                        <option value="">Select</option><option value="18">Lee</option><option value="19">Adidas</option><option value="20">Armany</option><option value="21">Samsung</option><option value="22">Apple</option><option value="23">Nokia</option><option value="24">D&amp;G</option><option value="25">Cipla</option><option value="26">Acanya</option><option value="27">Accupril</option><option value="28">Aayur</option><option value="29">Patanjali</option><option value="30">lifebuoy</option><option value="31">Mysore Sandal Soap</option><option value="32">Fastrack</option><option value="33">Rado Watches</option><option value="34">Rolex</option><option value="35">Colgate</option><option value="36">Vistaprint</option><option value="37">Cosmex Publishers</option><option value="38">Raymond</option><option value="39">Signature</option><option value="40">Redmi</option><option value="41">Lenovo</option>   
                                                    </select>
                                                    <br>
                                                    <button class="btn btn-primary">Select</button>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="category_id">Category <span class="text-danger">*</span></label>
                                                    <select class="form-control select2 select2-hidden-accessible" id="category_id" name="category_id" style="width: 100%;" value="" tabindex="-1" aria-hidden="true">
                                                        <option value="">-Select-</option><option value="6">Jeans</option><option value="10">Casual Shirts</option><option value="11">Formal Shirts</option><option value="12">T-Shirts</option><option value="13">Jackets</option><option value="14">Men Wears</option><option value="15">Books</option><option value="16">Computers</option><option value="17">Shoes</option><option value="18">Health Care</option><option value="19">Watches</option><option value="20">Mobiles</option><option value="21">Accessories</option>     
                                                    </select>
                                                    <br>
                                                    <button class="btn btn-primary">Select</button>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="unit_id" class="control-label">Unit<span class="text-danger">*</span></label>
                                                    <select class="form-control select2 select2-hidden-accessible" id="unit_id" name="unit_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                        <option value="">-Select-</option><option value="7">Box</option><option value="8">Drums</option><option value="9">Pieces</option><option value="10">Grams</option><option value="11">Packets</option><option value="12">Unit</option> 
                                                    </select>
                                                        <br>
                                                        <button class="btn btn-primary">Select</button>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="sku">SKU</label>
                                                    <input type="text" class="form-control" id="sku" name="sku" placeholder="" value="">
                                                    <span id="sku_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="hsn">HSN</label>
                                                    <input type="text" class="form-control" id="hsn" name="hsn" placeholder="" value="">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="alert_qty">Alert Quantity</label>
                                                    <input type="number" class="form-control no_special_char" id="alert_qty" name="alert_qty" placeholder="" min="0" value="">
                                                    <span  style="display:none" class="text-danger"></span>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="lot_number">Lot Number</label>
                                                    <input type="text" class="form-control"  placeholder="" value="">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <div class="form-group">
                                                    <label>Expire</label>
                                                    <input type="date"  min="1000-01-01"  max="3000-12-31" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="custom_barcode">Barcode</label>
                                                    <input type="text" class="form-control" id="custom_barcode" name="custom_barcode" placeholder="" value="">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="custom_barcode">Description</label>
                                                    <textarea type="text" class="form-control" id="description" name="description" placeholder=""></textarea>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="item_image">Select Image</label>
                                                    <input type="file" name="item_image" id="item_image">
                                                    <span  style="display:block;" class="text-danger">Max Width/Height: 1000px * 1000px &amp; Size: 1MB </span>
                                                </div>
                                                </div>
                                                <hr>
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="price">Price<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="price" name="price" placeholder="Price of Item without Tax" value="">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="tax_id">Tax<span class="text-danger">*</span></label>
                                                    <select class="form-control" id="tax_id" name="tax_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                        <option data-tax="0" value="">-Select-</option><option data-tax="5.00" value="4">Vat 5%(5.00%)</option><option data-tax="10.00" value="5">Tax 10%(10.00%)</option><option data-tax="18.00" value="6">Tax 18%(18.00%)</option><option data-tax="4.50" value="7">IGST 4.5%(4.50%)</option><option data-tax="4.50" value="8">SGST 4.5%(4.50%)</option><option data-tax="9.00" value="9">GST 9%(9.00%)</option><option data-tax="9.00" value="10">ISGT 9%(9.00%)</option><option data-tax="9.00" value="11">SGST 9%(9.00%)</option><option data-tax="18.00" value="12">GST 18%(18.00%)</option>   
                                                    </select>
                                                    <br>
                                                    <button class="btn btn-primary">Select</button>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="purchase_price">Purchase Price<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="purchase_price" name="purchase_price" placeholder="Total Price with Tax Amount" value="" readonly="">
                                                </div>
                                                </div>
                                                <!-- /row -->
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="tax_type">Tax Type<span class="text-danger">*</span></label>
                                                    <select class="form-control" id="tax_type" name="tax_type" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                        <option value="Exclusive">Exclusive</option>
                                                        <option value="Inclusive">Inclusive</option>
                                                    </select>
                                                    <br>
                                                    <button class="btn btn-light">Exclusive</button>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="profit_margin">Profit Margin(%) 
                                                        <i class="hover-q " data-container="body" data-toggle="popover" data-placement="top" data-content="Based on Purchase Price" data-html="true" data-trigger="hover" data-original-title="">
                                                    <i class="fa fa-info-circle text-maroon text-black hover-q"></i>
                                                    </i></label>
                                                    <input type="text" class="form-control "   placeholder="Profit in %" value="">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="sales_price" class="control-label">Sales Price<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control "  placeholder="Sales Price" value="">
                                                </div>
                                                </div>
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="final_price" class="control-label">Final Price<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control  "  placeholder="Final Price" value="" readonly="">
                                                </div>
                                                </div>
                                                <!-- /row -->
                                                <hr>
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="current_opening_stock">Current Opening Stock</label>
                                                    <input type="text" class="form-control only_currency" id="current_opening_stock" name="current_opening_stock" placeholder="" readonly="" value="0">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="new_opening_stock">New Opening Stock</label>
                                                    <input type="text" class="form-control" id="new_opening_stock" name="new_opening_stock" placeholder="-/+" value="">
                                                </div>
                                                </div>
                                                <button class="btn btn-success">Save</button>
                                                <button class="btn btn-warning">Close</button>
                                                <!-- /row -->
                                        </div>
                                        </div>
                                        <!----End From ---->
                                    <br>
                                        <!---Start table---->
                                        <div class="col-md-12 bg-light border-top border-primary">
                                            <div class="box">
                                            <div class="box-header p-3">
                                                <h3 class="box-title text-blue">Opening Stock Adjustment Records</h3>
                                            </div>
                                            <!-- /.box-header -->
                                            <div class="box-body table-responsive no-padding">
                                                
                                                <table class="table table-bordered table-hover " id="report-data">
                                                <thead>
                                                <tr class="bg-gray">
                                                    <th style="">#</th>
                                                    <th style="">Entry Date</th>
                                                    <th style="">Stock</th>
                                                    <th style="">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td colspan="4" class="text-center text-bold">No Previous Stock Entry Found!!</td></tr>                           </tbody>
                                                </table>
                                                
                                                
                                            </div>
                                            <!-- /.box-body -->
                                            </div>
                                            <!-- /.box -->
                                        </div>
                                        <!----End Table----->
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