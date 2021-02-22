<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                    <div class="container-fluid">
                                        <h4>Stock Report </h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card">
                                                    <div class="p-2">
                                                        <nav>
                                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Item Wise</a>
                                                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Brand Wise</a>
                                                            </div>
                                                        </nav>
                                                        <div class="tab-content" id="nav-tabContent">
                                                            <div class="py-2">
                                                                <button class="btn btn-primary float-right">Excel</button>
                                                            </div>
                                                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                
                                                                <table id="example2" class="table table-bordered table-hover mt-5">
                                                                    <thead class="btn-primary">
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Sales Invoice Number</th>
                                                                        <th>Payment Date</th>
                                                                        <th>Customer ID</th>
                                                                        <th>Customer Name</th>
                                                                        <th>Payment Type</th>
                                                                        <th>Payment Note</th>
                                                                        <th>Paid Payment(₹)</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet
                                                                        Explorer 4.0
                                                                    </td>
                                                                    <td>Win 95+</td>
                                                                    <td> 4</td>
                                                                    <td> 4</td>
                                                                    <td> 4</td>
                                                                    <td> 4</td>
                                                                    <td>X</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>Internet
                                                                        Explorer 4.0
                                                                        </td>
                                                                        <td>Win 95+</td>
                                                                        <td> 4</td>
                                                                        <td> 4</td>
                                                                        <td> 4</td>
                                                                        <td> 4</td>
                                                                        <td>X</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet
                                                                        Explorer 5.5
                                                                    </td>
                                                                    <td>Win 95+</td>
                                                                    <td>5.5</td>
                                                                    <td>5.5</td>
                                                                    <td>5.5</td>
                                                                    <td>5.5</td>
                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet
                                                                        Explorer 6
                                                                    </td>
                                                                    <td>Win 98+</td>
                                                                    <td>6</td>
                                                                    <td>6</td>
                                                                    <td>6</td>
                                                                    <td>6</td>

                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet Explorer 7</td>
                                                                    <td>Win XP SP2+</td>
                                                                    <td>7</td>
                                                                    <td>7</td>
                                                                    <td>7</td>
                                                                    <td>7</td>

                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>AOL browser (AOL desktop)</td>
                                                                    <td>Win XP</td>
                                                                    <td>6</td>
                                                                    <td>6</td>
                                                                    <td>6</td>
                                                                    <td>6</td>

                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Gecko</td>
                                                                    <td>Firefox 1.0</td>
                                                                    <td>Win 98+ / OSX.2+</td>
                                                                    <td>1.7</td>
                                                                    <td>1.7</td>
                                                                    <td>1.7</td>
                                                                    <td>1.7</td>

                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Gecko</td>
                                                                    <td>Netscape Browser 8</td>
                                                                    <td>Win 98SE+</td>
                                                                    <td>1.7</td>
                                                                    <td>1.7</td>
                                                                    <td>1.7</td>
                                                                    <td>1.7</td>
                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Gecko</td>
                                                                    <td>Netscape Navigator 9</td>
                                                                    <td>Win 98+ / OSX.2+</td>
                                                                    <td>1.8</td>
                                                                    <td>1.8</td>
                                                                    <td>1.8</td>
                                                                    <td>1.8</td>

                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Gecko</td>
                                                                    <td>Mozilla 1.0</td>
                                                                    <td>Win 95+ / OSX.1+</td>
                                                                    <td>1</td>
                                                                    <td>1</td>
                                                                    <td>1</td>
                                                                    <td>1</td>

                                                                    <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Mozilla 1.0</td>
                                                                        <td>Win 95+ / OSX.1+</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Mozilla 1.0</td>
                                                                        <td>Win 95+ / OSX.1+</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Mozilla 1.0</td>
                                                                        <td>Win 95+ / OSX.1+</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Mozilla 1.0</td>
                                                                        <td>Win 95+ / OSX.1+</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>

                                                                        <td>A</td>
                                                                    </tr>                                            <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Mozilla 1.0</td>
                                                                        <td>Win 95+ / OSX.1+</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Mozilla 1.0</td>
                                                                        <td>Win 95+ / OSX.1+</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>

                                                                        <td>A</td>
                                                                    </tr>                                            <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>
                                                                        <td>1.8</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Mozilla 1.0</td>
                                                                        <td>Win 95+ / OSX.1+</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>

                                                                        <td>A</td>
                                                                    </tr>
                                                                
                                                                    </tbody>
                                                                    <tfoot>
                                                                    <tr>
                                                                    <th></th>
                                                                    <th></th>
                                                                    <th></th>
                                                                    <th>Total</th>
                                                                    <th>180,423.00</th>
                                                                    <th>180,423.00</th>
                                                                    <th>420.00</th>
                                                                    <th>3,491,214.90</th>
                                                                    </tr>
                                                                    </tfoot>
                                                                </table>
                                                            </div>
                                                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                                <table id="example2" class="table table-bordered table-hover mt-5">
                                                                    <thead class="btn-primary">
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Brand Name</th>
                                                                        <th>Current Stock</th>
                                                        
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet
                                                                        Explorer 4.0
                                                                    </td>
                                                                    <td>Win 95+</td>
                                                    
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>Internet
                                                                        Explorer 4.0
                                                                        </td>
                                                                        <td>Win 95+</td>
                                                
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet
                                                                        Explorer 5.5
                                                                    </td>
                                                                    <td>Win 95+</td>

                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet
                                                                        Explorer 6
                                                                    </td>
                                                                    <td>Win 98+</td>

                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>Internet Explorer 7</td>
                                                                    <td>Win XP SP2+</td>

                                                                    </tr>
                                                                    <tr>
                                                                    <td>Trident</td>
                                                                    <td>AOL browser (AOL desktop)</td>
                                                                    <td>Win XP</td>
                                
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Gecko</td>
                                                                    <td>Firefox 1.0</td>
                                                                    <td>Win 98+ / OSX.2+</td>
                                            
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Gecko</td>
                                                                    <td>Netscape Browser 8</td>
                                                                    <td>Win 98SE+</td>

                                                                    </tr>
                                                                    <tr>
                                                                    <td>Gecko</td>
                                                                    <td>Netscape Navigator 9</td>
                                                                    <td>Win 98+ / OSX.2+</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>Internet
                                                                        Explorer 4.0
                                                                        </td>
                                                                        <td>Win 95+</td>
                                                        
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>Internet
                                                                            Explorer 4.0
                                                                        </td>
                                                                        <td>Win 95+</td>
                                                    
                                                                        </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>Internet
                                                                        Explorer 5.5
                                                                        </td>
                                                                        <td>Win 95+</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>Internet
                                                                        Explorer 6
                                                                        </td>
                                                                        <td>Win 98+</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>Internet Explorer 7</td>
                                                                        <td>Win XP SP2+</td>
                                
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trident</td>
                                                                        <td>AOL browser (AOL desktop)</td>
                                                                        <td>Win XP</td>
                                    
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Firefox 1.0</td>
                                                                        <td>Win 98+ / OSX.2+</td>
                                                
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Browser 8</td>
                                                                        <td>Win 98SE+</td>
                                
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Gecko</td>
                                                                        <td>Netscape Navigator 9</td>
                                                                        <td>Win 98+ / OSX.2+</td>

                                                                    </tr>
                                                                    </tbody>                        
                                                                </table>
                                                            </div>
                                                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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