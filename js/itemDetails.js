function itemDetailsHeader(){
  
    var itemDetailsHeaderVar = [
        {
            homeTitle: 'Home'
        }, {
          imgSrc: './images/favicon.ico'
        }
    ],
    itemDetailsHeaderString=''
    
    itemDetailsHeaderVar.forEach(e => {
        itemDetailsHeaderString =
      
        ` 
        <div class='container-fluid'>
        <div class='row no-gutters'>
          <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <nav class='navbar navbar-toggleable-sm navbar-toggleable-md navbar-toggleable-lg navbar-toggleable-xl navbar-light' role='navigation'>
              <div class='navbar-brand' href='#'>
                <div class='d-flex align-items-center'>
                  <a href='#' title="${e.homeTitle}" data-toggle="tooltip" onclick='openHomePage();'><img class='rounded-circle' alt src='${e.imgSrc}'></a> 
                  <a class='text-white text-decoration-none ml-3 d-none d-sm-none d-md-block d-lg-block d-xl-block' href='#' title="${e.homeTitle}" data-toggle="tooltip" onclick='openHomePage();'>Flipkart</a>
                </div>
              </div>
      
              <button class='navbar-toggler border-0' type='button'>
                <a class='mr-3' href='#' onclick='searchFunc();' title='Search' data-toggle="tooltip">
                  <i class='fas fa-search text-white' aria-hidden='true'></i>
                </a>
                <input class="searchTwo form-control d-none" id='searchId' type="text" name="search" placeholder="Search..." />
                <a class='mr-2 ml-1 mr-sm-1 ml-sm-2 mr-md-4 ml-md-3 mr-lg-4 ml-lg-3 mr-xl-4 ml-xl-3' href='#' title="Wish List" data-toggle="tooltip">
                  <i class='fas fa-heart text-white' aria-hidden='true'></i>
                </a>
                <a class='ml-2' href='#' title="View Your Cart" data-toggle="tooltip">
                  <i class='fas fa-cart-plus text-white pl-0 px-0 mx-0' aria-hidden='true'>
                    
                    <span class='badge badge-pill badge-cart-notify' id='cartQty'>0</span>
                  </i>
                </a>
                <a class='ml-3 ml-1' href='#' title="My Account" data-toggle="tooltip">
                  <i class='fas fa-user text-white' aria-hidden='true'>
                    
                    <i class='badge badge-pill badge-check-notify fa fa-check text-white' aria-hidden='true'> </i>
                  </i>
                </a>
                <span class='navbar-toggler-icon' id='navbar-toggle-icon-id' data-toggle='collapse' data-target='#collapsibleNavbar'></span>
              </button>
      
              <div class='collapse navbar-collapse' id='collapsibleNavbar'>
                <ul class='nav navbar-nav'>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Electronics</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>TVs & Appliances</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Men</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Women</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Baby & Kids</a>
                  </li>    
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Home & Furniture</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Sports, Books & More</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>Offer Zone</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
        `
      });
      
    document.querySelector('#itemDetailsHeader').innerHTML = itemDetailsHeaderString
  }
  

  function openItemDetails() {
  
    let indexDataRender = JSON.parse(window.localStorage.getItem('indexDataStrng')),
    itemDetailsString=''
  
  
    indexDataRender.forEach(item => {
      itemDetailsString +=
    
      `
      <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100' id='mainImgSection'>
        <div class="container-fluid">
        <div class='row no-gutters mt-5 pt-3'>
          <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div class='mainImgSectionP'>
              <p class>On offer</p>
            </div>
          </div>
          <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div class='mainImgSectionImage'>
              <img class alt src='${item.indexImgUrl}' />
            </div>
          </div>
        <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' onclick='heartFunc();' type='button'>
            <div class='rounded-circle shadow-lg mainImgSectionHeart'>
              <i class='fa fa-heart p-3 heartClassFontSize heartClassGray' id='heartId' aria-hidden='true'></i>
            </div>
          </div>
        </div>
        </div>
      </section>
  
  
  
      <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
          <div class="container-fluid">
            <div class='row mt-3 pt-3'>
              <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                <div class='row no-gutters mx-auto'>
                  <div class='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 p-0 m-0'>
                    <ul class='img-grid-ul'>
                      <li class='ml-0 mr-1 mr-sm-1 mr-md-1 mr-lg-2 mr-xl-2'>
                        <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                          <img alt src='images/mob- (1).jpeg' />
                        </a>
                      </li>
                      <li class='mx-1 mx-sm-1 mx-md-1 mx-lg-2 mx-xl-2'>
                        <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                          <img alt src='images/mob- (1).jpeg' />
                        </a>
                      </li>
                      <li class='mx-1 mx-sm-1 mx-md-1 mx-lg-2 mx-xl-2'>
                        <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                          <img alt src='images/mob- (1).jpeg'/>
                        </a>
                      </li>
                      <li class='ml-1 ml-sm-1 ml-md-1 ml-lg-2 ml-xl-2 mr-0'>
                        <a class='p-2 p-sm-2 p-md-3 p-lg-3 p-xl-3' href='#'>
                          <img alt src='images/mob- (1).jpeg' />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
                    <div class='row mr-3 mr-sm-3 mr-md-3 mr-lg-5 mr-xl-5 float-right align-items-center mt-1 mt-sm-1 mt-md-3 mt-lg-2 mt-xl-2'>
                      <div class='text-center' id='productDetails'>
                        <a class='' href='#'>
                          <i class='fa fa-exclamation-circle mb-2 mb-sm-2 mb-md-1 mb-lg-1 mb-xl-1' aria-hidden='true'></i>
                          <p class='mb-0'> Product </p>
                          <p class='mb-0'>Details</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
  
          <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
            <div class='container-fluid'>
              <div class='row mt-4 pt-2'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                  <div class='d-flex flex-column' id='productDesc'>
                    <div>
                      <h1>
                        Redmi Note 7 Pro (Nebula Red, 64 GB)  (4 GB RAM)<span><a href='#'>#JustHere</a></span>
                      </h1>
                      <div class='d-flex' id='ratings'>
                        <div class='bg-success h-25 rounded justify-content-center align-items-center px-2 py-1 mr-4 w-auto d-flex'>
                          <p class='mb-0 text-white mr-1'>4.6</p>
                          <i class='fa fa-star text-white' aria-hidden='true'></i>
                        </div>
                        <div class='inline-block' id='reviews'>
                            <p class='mr-4 text-secondary font-weight-bold align-middle'>
                                69,458 Ratings & 7,914 Reviews
                              <i class='material-icons align-middle text-secondary'>&#xe315;</i>
                            </p>
                        </div>
                        
                          <img class alt src='images/fa_8b4b59.png' width='auto' height='24px;' />
                          
                      </div>
                      <p class='text-success font-weight-bold mt-3'>Extra ₹2000 discount</p>
                      <p class='text-black font-weight-bold'>
                        ₹13,999
                        <span class='mx-4 text-mute' style='text-decoration: line-through;'>
                          ₹15,999
                        </span>
                        <del class='text-success'>
                          12% off
                        </del>
                      </p>
                      <div class='d-inline-flex align-items-bottom' id='creditCardScheme'>
                        <img class='mr-1' height='18' width='18' alt src='images/scheme-icon.png' /> 
                        <p class=''>Extra 5% off with Axis Bank Buzz Credit Card</p>
                        <i class='material-icons text-secondary' style='font-size: 19.5px;'>&#xe315;</i>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          
          <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
            <div class='d-flex justify-content-between w-100' id='emiProductExchange'>
              <div class='border-right w-50 my-2'>
                <div class='p-3'>
                  <p class='text-center text-secondary mb-0'>EMI from ₹465/Month</p>
                </div>
              </div>
              <div class=' border-left w-50 my-2'>
                <div class='p-3'>
                  <p class='text-center text-secondary mb-0'>Product exchange</p>
                </div>
              </div>
            </div>
          </section>
  
  
          <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
              <div class='container-fluid' id='addToCartBuyNow'>
                <div class='row'>
                  <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 border-top-bottom'>
                    <div class='d-flex align-items-center'>
                      <div class='col p-0 m-0'>
                        
                        <button class='btn btn-lg rounded-0 float-left' type='button'>Add to Cart</button>
  
                        
                      </div>
                      <div class='col p-0 m-0'>
        
                        <button class='btn btn-lg rounded-0 float-right' type='button'>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
  
            <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
                <div class='row' id='shareSection'>
                  <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cust-border-bottom'>
                    <div class='row mx-auto no-gutters justify-content-center'>
                      <div class='w-auto'>
                        <div class='d-inline-flex align-items-center py-2 py-sm-2 py-md-3 py-lg-3 py-xl-4'>
                          <i class='fas fa-share mr-1 mr-sm-1 mr-md-1 mr-lg-1 mr-xl-1' aria-hidden='true'></i>
                          <p class='mb-0'>Share</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </section>
  
              <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
                <div class='container-fluid' id='viewDetails'>
                  <div class='row' type='button' data-toggle="collapse" data-target="#hiddenViewDetails" aria-expanded="false">
                    <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cust-border-bottom'>
                      <div class='d-flex align-items-center py-3'>
                        <div class='col p-0'>
                          <p class='text-capitalize mb-0 pl-2'>View Details</p>
                        </div>
                        <div class='col'>
                          <i class='material-icons float-right'>&#xe315;</i>
                        </div>
                      </div>
                    </div>
                    <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 collapse' id='hiddenViewDetails'>
                        <div class='row w-100 mw-100 mt-5 mb-3 mx-auto justify-content-center border-bottom'>
                          <div class='col'>
                            <div class='mb-3'>
                              <h4 class='text-secondary text-capitalize'>Highlights</h4>
                              <ul class=''>
                                <li class><p>4 GB RAM | 64 GB ROM | Expandable Upto 256 GB</p></li>
                                <li class><p>16.0 cm (6.3 inch) FHD+ Display</p></li>
                                <li class><p>48MP + 5MP | 13MP Front Camera</p></li>
                                <li class><p>4000 mAh Li-polymer Battery</p></li>
                                <li class><p>Qualcomm Snapdragon 675 Processor</p></li>
                                <li class><p>Quick Charge 4.0 Support</p></li>
                                <li class><p>Splash Proof - Protected by P2i</p></li>
                              </ul>
                            </div>
                          </div>
                          <div class='col'>
                            <div class='mb-3'>
                              <h4 class='text-secondary text-capitalize'>Easy Payment Options</h4>
                              <ul class=''>
                                <li class><p>EMI starting from ₹465/month</p></li>
                                <li class><p>Net banking & Credit/ Debit/ ATM card</p></li>
                                <li class><p>10 Days Replacement Policy</p></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class='row w-100 mw-100 justify-content-center mb-5 mx-auto plus-img'>
                          <img class='mw-100 h-auto' alt src='./images/plus-picture.png' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
  
  
  
                <section class='m-0 p-0 cust-ouline-0 border-0 w-100 mw-100'>
                    <div class='container-fluid' id='allDetails'>
                      <div class='row' type='button' data-toggle="collapse" data-target="#hiddenAllDetails" aria-expanded="false">
                        <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cust-border-bottom'>
                          
                          <div class='d-flex align-items-center py-3'>
                            <div class='col p-0'>
                              <p class='text-capitalize mb-0 pl-2'>All Details</p>
                            </div>
                            <div class='col'>
                              <i class='material-icons float-right'>&#xe315;</i>
                            </div>
                          
                          </div>
                        </div>
                        <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 collapse' id='hiddenAllDetails'>
                            <div class='row w-100 mw-100 mt-5 mb-5 mx-auto justify-content-center'>
                              <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top'>
                                <div class="m-4">
                                  <div class='d-flex flex-column'>
                                    <h3 class>Product Description</h3>
                                    <p class='pt-4'>It's time to go big with the Redmi Note 7 Pro's 16-cm (6.3) FHD+ Dot Notch display. Powered by a 2.0 GHz Qualcomm Snapdragon 675 processor and 4 GB of RAM, this smartphone lets you experience the next level of performance and control. With a (48 MP + 5 MP) dual-rear camera, a 13 MP front camera, and features such as Face Unlock and 4K Video Recording, the Redmi Note 7 Pro truly puts a new spin on your smartphone experience.</p>
                                  </div>
                                </div>            
                              </div>
                              <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top'>
                                <div class="m-4">
                                  <div class='d-flex flex-column'>
                                    <h3 class>Powerful Performance</h3>
                                    <p class='pt-4'>Enjoy a seamless and efficient smartphone experience, thanks to the powerful 2.0 GHz Qualcomm Snapdragon 675 processor. Whether you're playing games, watching videos, or browsing the Internet, the Redmi Note 7 Pro delivers a super-fast performance. It also comes with 64 GB of storage capacity, so you can store all your pictures and music with ease.</p>
                                  </div>
                                </div>            
                              </div>
                              <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top'>
                                <div class="m-4">
                                  <div class='d-flex flex-column'>
                                    <h3 class>Click Stunning Pictures</h3>
                                    <p class='pt-4'>Featuring a (48 MP + 5 MP) dual-rear camera setup, the Redmi Note 7 Pro lets you click gorgeous pictures, capturing every little detail. Its 48MP Sony IMX586 and sensor Electronic Image Stabilisation feature let you shoot steady and shake-free videos.</p>
                                  </div>
                                </div>            
                              </div>
                              <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top'>
                                <div class="m-4">
                                  <div class='d-flex flex-column'>
                                    <h3 class>Specifications</h3>
                                  </div>
                                </div>            
                              </div>
                              <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top'>
                                <div class="m-4">
                                  <div class>
                                    <h4 class='mb-2'>General</h4>
                                  </div>
                                  <table class='cust-table'>
                                    <tbody>
                                      <tr class='w-100 d-inline-flex'>
                                        <td class='inline-block align-top'>In The Box</td>
                                        <td class='inline-block align-top'>Handset, SIM Ejector Tool, Soft Case, Manual, Adapter, Cable</td>
                                      </tr>
                                      <tr class='w-100 d-inline-flex'>
                                        <td class='inline-block align-top'>Model Number</td>
                                        <td class='inline-block align-top'>MZB7701IN</td>
                                      </tr>
                                      <tr class='w-100 d-inline-flex'>
                                        <td class='inline-block align-top'>Model Name</td>
                                        <td class='inline-block align-top'>Redmi Note 7 Pro</td>
                                      </tr>
                                      <tr class='w-100 d-inline-flex'>
                                        <td class='inline-block align-top'>Color</td>
                                        <td class='inline-block align-top'>Nebula Red</td>
                                      </tr>
                                      <tr class='w-100 d-inline-flex'>
                                        <td class='inline-block align-top'>Browse Type</td>
                                        <td class='inline-block align-top'>Smartphones</td>
                                      </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>SIM Type</td>
                                          <td class='inline-block align-top'>Dual SIM</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Hybrid Sim Slot</td>
                                          <td class='inline-block align-top'>Yes</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Touchscreen</td>
                                          <td class='inline-block align-top'>Yes</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>OTG Compatible</td>
                                          <td class='inline-block align-top'>Yes</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Quick Charging</td>
                                          <td class='inline-block align-top'>Yes</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Sound Enhancements</td>
                                          <td class='inline-block align-top'>Speaker - Single (Bottom Opening), Microphones - 2 (For Noise Cancellation), Smart PA</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>SAR Value</td>
                                          <td class='inline-block align-top'>India SAR 1g limit: 1.6W/Kg, Head SAR: 0.962W/Kg (0mm Separation), Body SAR Value: 0.838W/Kg (15mm Separation)</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>            
                                </div>
                                <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top'>
                                  <div class="m-4">
                                    <div class>
                                      <h4 class='mb-2'>Display Features</h4>
                                    </div>
                                    <table class='cust-table'>
                                      <tbody>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Display Size</td>
                                          <td class='inline-block align-top'>16.0 cm (6.3 inch)</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Resolution</td>
                                          <td class='inline-block align-top'>2340 x 1080 pixels</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Resolution Type</td>
                                          <td class='inline-block align-top'>FHD+</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>GPU</td>
                                          <td class='inline-block align-top'>Adreno 612</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Display Type</td>
                                          <td class='inline-block align-top'>IPS (In-cell), RD</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Other Display Features</td>
                                          <td class='inline-block align-top'>Contrast Ratio - 1500:1, NTSC Ratio - 81.41%, 2.5D Glass (In-front), Corning Gorilla Glass 5 (Front Glass), Dot Notch Display</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>            
                                </div>
                                <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top'>
                                  <div class="m-4">
                                    <div class>
                                      <h4 class='mb-2'>Memory & Storage Features</h4>
                                    </div>
                                    <table class='cust-table'>
                                      <tbody>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Internal Storage</td>
                                          <td class='inline-block align-top'>128 GB</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>RAM</td>
                                          <td class='inline-block align-top'>6 GB</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Expandable Storage</td>
                                          <td class='inline-block align-top'>256 GB</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Supported Memory Card Type</td>
                                          <td class='inline-block align-top'>microSD</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Memory Card Slot Type</td>
                                          <td class='inline-block align-top'>Hybrid Slot</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>            
                                </div>
                                <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 w-100 border-right border-left border-top border-bottom'>
                                  <div class="m-4">
                                    <div class>
                                      <h4 class='mb-2'>Other Details</h4>
                                    </div>
                                    <table class='cust-table'>
                                      <tbody>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>SIM Size</td>
                                          <td class='inline-block align-top'> Nano SIM + Nano SIM</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>MIUI 10</td>
                                          <td class='inline-block align-top'>6 GB</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Sensors</td>
                                          <td class='inline-block align-top'>Rear Fingerprint Scanner, Ambient Light Sensor, Proximity Sensor, E-compass, Accelerometer, Gyroscope, Sony IMX586 Sensor</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>Other Features</td>
                                          <td class='inline-block align-top'>Processor - 2 x Gold 2.0 GHz + 6 x Silver 1.7 GHz, eMMC v5.1, Body - 2.5D Glass Back, USB Type-C, IR Blaster, Charger - 5V/2A, Super Low Light Mode, Quick Charge 4.0, Dual VoLTE, Two Days Battery, Aura Design, Gradient Reflective Glass Back, EIS for Video Recording, Studio Lighting</td>
                                        </tr>
                                        <tr class='w-100 d-inline-flex'>
                                          <td class='inline-block align-top'>GPS Type</td>
                                          <td class='inline-block align-top'>A-GPS, GLONASS, BeiDou</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>            
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </section>
    `
  });
    document.querySelector('#itemDetailsId').innerHTML = itemDetailsString;
    window.open('./itemDetails.html','_self','scrollbars=yes,menubar=yes');
  }
