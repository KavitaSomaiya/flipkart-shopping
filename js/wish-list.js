

let wishItems = JSON.parse(window.localStorage.getItem('wishItems'))

function createWishListData () {
  let wishListDetail = ''
  wishItems.forEach(w => {
    wishListDetail +=
      `
        <li class='d-flex justify-content-between py-4 pl-4 pl-sm-4 pl-md-4 pl-lg-3 pl-xl-3 align-items-top'>
          <div class='mw-100' style="width: 13%;">
            <div class='d-flex flex-column'>
              <div class='align-middle cartItemImg text-center p-1 p-sm-1 p-md-1 p-lg-2 p-xl-2'>
                <a class='text-center' href='#'>
                  <img src='${w.indexImgUrl}' alt />
                </a>                          
              </div>
            </div>                        
          </div>
          <div class='mw-100 cartItemDetails ml-5' style='width: 56%;'>
            <div class='d-flex flex-column justify-content-start pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2'>
              <div class='itemNameClass'><a class href='#'>${w.name}</a></div>
                <p class='sellerName mt-1 mt-sm-1 mt-md-2 mt-lg-3 mt-xl-3'> ${w.sellerName}</p>
                <div class='d-flex mt-1 mt-sm-1 mt-md-1 mt-lg-2 mt-xl-2 justify-content-start align-items-center'>
                  <span class='itemPrice'>&#x20B9;${w.price}</span>
                  <del><span class='itemRealPrice ml-2'>&#x20B9;${w.retailPrice}</span></del>
                  <span class='discountPer ml-2'>${w.discount}% Off</span>
                  <div class='offerQty ml-2 d-none d-sm-none d-md-block d-lg-block d-xl-block' id='offerQtyId'>
                    <a>
                      ${w.offersApplied} offers applied
                      <i class='' aria-hidden='true'></i>
                    </a>
                  </div>                                            
                </div> 
              </div>
            </div>
            <div class='mw-100 pt-1 pt-sm-1 pt-md-1 pt-lg-2 pt-xl-2 deliveryDetails' style="width: 31%;">
              <p>
                <i class='fas fa-trash-alt' onclick='removeWishListItem("${w.dataNumber}");' aria-hidden='true'></i>
              </p>                      
            </div>                  
          </div>                      
          <nav class='navbar navbar-expand-sm bg-white navbar-dark cart-sticky-bottom'>
           <a class='bg-white btn btn-link shadow py-3 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0 mr-1 mr-sm-4' href='#'>
             <span class='mr-2'> < </span>
               Continue Shopping
            </a>
            <button class='btn btn-link shadow-lg py-3 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0 ml-0 ml-sm-4 ml-md-4 ml-lg-5 ml-xl-5' type='button' tabindex='20'>Place Order</button>
          </nav>
        </li>
      `
    })
    document.querySelector('#myWishList').innerHTML = wishListDetail
  }