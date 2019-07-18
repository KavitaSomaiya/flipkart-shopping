
//https://www.flipkart.com/jealous-21-slim-women-light-blue-jeans/p/itmfbhyhgkk3cv5x?pid=JEAF8AC3KKRHYNTQ&lid=LSTJEAF8AC3KKRHYNTQJQFZT1&marketplace=FLIPKART&srno=b_1_6&otracker=clp_omu_Top%2BFashion%2BOffers_4_4.dealCard.OMU_fashion-big-shopping-days-july19-store_fashion-big-shopping-days-july19-store_9NBO5WQDUQ24_4&otracker1=clp_omu_PINNED_neo%2Fmerchandising_Top%2BFashion%2BOffers_NA_dealCard_cc_4_NA_view-all_4&fm=organic&iid=f08dc239-d76d-4b98-9d83-779e2b4b3c6a.JEAF8AC3KKRHYNTQ.SEARCH&ppt=browse&ppn=browse
//https://www.flipkart.com/jealous-21-skinny-women-blue-jeans/p/itmf8ac3pnvm9fqk?pid=JEAF8AC3B6S9USZ9&lid=LSTJEAF8AC3B6S9USZ92RCDHO&marketplace=FLIPKART&srno=b_1_2&otracker=clp_omu_Top%2BFashion%2BOffers_4_4.dealCard.OMU_fashion-big-shopping-days-july19-store_fashion-big-shopping-days-july19-store_9NBO5WQDUQ24_4&otracker1=clp_omu_PINNED_neo%2Fmerchandising_Top%2BFashion%2BOffers_NA_dealCard_cc_4_NA_view-all_4&fm=organic&iid=149a1722-15e8-4526-8343-f22258055d24.JEAF8AC3B6S9USZ9.SEARCH&ppt=browse&ppn=browse
//https://www.flipkart.com/provogue-sneakers-men/p/itmfb4cy9zjpswzw?pid=SHOFB4CYUXCHSYZT&lid=LSTSHOFB4CYUXCHSYZTP8GDH5&marketplace=FLIPKART&srno=b_1_7&otracker=clp_banner_1_6.bannerX3.BANNER_fashion-big-shopping-days-july19-store_TLW9IV4ZIB5Z&fm=organic&iid=d322d4a8-d1f9-4250-b256-8da4a2dbca76.SHOFB4CYUXCHSYZT.SEARCH&ppt=browse&ppn=browse
//https://www.flipkart.com/nike-chroma-thong-5-slippers/p/itmf6ybhw9huawng?pid=SFFF6YBHUPM7ZYT8&lid=LSTSFFF6YBHUPM7ZYT8TLBJML&marketplace=FLIPKART&srno=b_1_5&otracker=clp_banner_1_6.bannerX3.BANNER_fashion-big-shopping-days-july19-store_TLW9IV4ZIB5Z&fm=organic&iid=b3bf39dd-66d1-4ce0-a91b-48e3fdb5592b.SFFF6YBHUPM7ZYT8.SEARCH&ppt=browse&ppn=browse
//https://www.flipkart.com/lee-cooper-slip-men/p/itmfa8dtvhpm4hd2?pid=SHOFA8DTEEZF3Z7Q&lid=LSTSHOFA8DTEEZF3Z7QMOPXOH&marketplace=FLIPKART&srno=b_1_15&otracker=clp_banner_1_6.bannerX3.BANNER_fashion-big-shopping-days-july19-store_TLW9IV4ZIB5Z&fm=organic&iid=8559a225-630a-4db0-a930-ceca37f854ab.SHOFA8DTEEZF3Z7Q.SEARCH&ppt=browse&ppn=browse
//https://www.flipkart.com/nike-solay-thong-flip-flops/p/itmf3y7vjfcdqyfg?pid=SFFESG6HWKKGC4YZ&lid=LSTSFFESG6HWKKGC4YZ0S2DA3&marketplace=FLIPKART&srno=b_1_2&otracker=clp_banner_1_6.bannerX3.BANNER_fashion-big-shopping-days-july19-store_TLW9IV4ZIB5Z&fm=organic&iid=e8ad89f4-6237-45aa-bddc-f46f54185f6d.SFFESG6HWKKGC4YZ.SEARCH&ppt=browse&ppn=browse
//https://www.flipkart.com/vivo-v15-pro-topaz-blue-128-gb/p/itmfdhvqt5kdy2gx?pid=MOBFDHVQWZHAJTWX&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_0_4&otracker1=AS_QueryStore_OrganicAutoSuggest_0_4&lid=LSTMOBFDHVQWZHAJTWXKQT6XP&fm=SEARCH&iid=75bfd608-6c8e-4df6-9c28-007e90e7b1f1.MOBFDHVQWZHAJTWX.SEARCH&ppt=sp&ppn=sp&ssid=n9arb8dq4w0000001563345620768&qH=43c80f39f9948777
//https://www.flipkart.com/hnc-retail-floral-print-fashion-pure-georgette-chiffon-saree/p/itmf2pbthrscdg6j?pid=SARF2P924QYFNHSZ&lid=LSTSARF2P924QYFNHSZJLJY45&marketplace=FLIPKART&srno=b_1_6&otracker=nmenu_sub_Women_0_Sarees&fm=SEARCH&iid=4eeaf2b3-c7a4-4306-92f7-10e90258e4ef.SARF2P924QYFNHSZ.SEARCH&ppt=browse&ppn=browse&ssid=sfodec5aog0000001563361172907

function indexHeaderPost(){
  
  var headerPostVar = [
    {
      home: {
        homeTitle: 'Home'
      }
    }
  ],
  headerPostString=''
  
  headerPostVar.forEach(element => {
    headerPostString =
    
      ` 
      <div class='container-fluid'>
      <div class='row no-gutters'>
        <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <nav class='navbar navbar-toggleable-sm navbar-toggleable-md navbar-toggleable-lg navbar-toggleable-xl navbar-light' role='navigation'>
            <div class='navbar-brand' href='#'>
              <div class='d-flex align-items-center'>
                <a href='#' title="${element.home.homeTitle}" data-toggle="tooltip" onclick='openIndexPage();'><img class='rounded-circle' alt src='./images/favicon.ico'></a> 
                <a class='text-white text-decoration-none ml-3 d-none d-sm-none d-md-block d-lg-block d-xl-block' href='#' title="${element.home.homeTitle}" data-toggle="tooltip" onclick='openIndexPage();'>Flipkart</a>
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
              <a class='ml-2' href='#' title="View Your Cart" data-toggle="tooltip" onclick='viewCart();'>
                <i class='fas fa-cart-plus text-white pl-0 px-0 mx-0' aria-hidden='true'>
                  <span class='badge badge-pill badge-cart-notify' id='cartQty'>0</span>
                </i>
              </a>
              <a class='ml-3 ml-sm-3 ml-md-2 ml-lg-1 ml-xl-1 dropdown' href='#' id="navbardrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class='fas fa-user text-white' aria-hidden='true'>
                  <i class='badge badge-pill badge-check-notify fa fa-check text-white' aria-hidden='true'></i>
                </i>
                <div class="dropdown-menu py-0" id='dropdownMenu'>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-user-circle mr-3' aria-hidden='true'></i>
                    My Profile
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-arrows-alt mr-3' aria-hidden='true'></i>
                    Flipkart Plus Zone
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-gamepad mr-3' aria-hidden='true'></i>
                    Game Zone
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-folder-plus mr-3' aria-hidden='true'></i>
                    Orders
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-heart mr-3' aria-hidden='true'></i>
                    Wishlist
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-file-alt mr-3' aria-hidden='true'></i>
                    My Chats
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-folder-open mr-3' aria-hidden='true'></i>
                    Rewards
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-gift mr-3' aria-hidden='true'></i>
                    Gift Card
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-bell mr-3' aria-hidden='true'></i>
                    Notification
                  </a>
                  <a class="dropdown-item d-flex border-bottom py-3 align-items-center" href="#">
                    <i class='fas fa-power-off mr-3' aria-hidden='true'></i>
                    Logout
                  </a>
                </div>
              </a>
              <span class='navbar-toggler-icon ml-3 ml-sm-3 ml-md-3 ml-lg-3 ml-xl-3' id='navbar-toggle-icon-id' data-toggle='collapse' data-target='#collapsibleNavbar'></span>
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
    
  document.querySelector('#indexHeader').innerHTML = headerPostString
}


function creatSortFilter() {

  let sortFilterData = [
    {
      name: 'Sort',
      faClass: 'fas fa-sort-amount-down'
    }, {
      name: 'Filter',
    faClass: 'fas fa-list'
    }
  ]
  let sortFilterString =''

 //indexData = parseJSON(window.localStorage.getItem('indexDetails'))
 sortFilterData.forEach(ele => {
    sortFilterString +=
      `
        <div class='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 border' type='button'>
          <div class='py-3'>
            <div class='d-flex justify-content-center align-items-center'>
              <i class='${ele.faClass} mr-2' aria-hidden='true'></i>
              <p class='mb-0'>${ele.name}</p>
            </div>
          </div>
        </div>
              
      `
    });
    document.querySelector('#sortFilterId').innerHTML = sortFilterString
}



let indexData = [
  {
    indexImgUrl:'./images/mob- (1).jpeg',
    name:'Vivo V15 Pro (Topaz Blue, 128 GB)  (6 GB RAM)',
    price:'26,990',
    retailPrice:'32,990',
    discount: 18,
    dataNumber: 'data-id="0"'
  }, {
    indexImgUrl:'./images/mob- (2).jpeg',
    name:'Honor 9N (Robin Egg Blue, 64 GB)  (4 GB RAM)',
    price:'14,500',
    retailPrice:'15833',
    discount: 8,
    dataNumber: 'data-id="2"'
  }, {
    indexImgUrl:'./images/mob- (3).jpeg',
    name:'Redmi Note 6 Pro (Black, 64 GB)  (6 GB RAM)',
    price:'13999',
    retailPrice:'17999',
    discount: 22,
    dataNumber: 'data-id="3"'
  }, {
    indexImgUrl:'./images/mob- (4).jpeg',
    name:'Redmi Note 6 Pro (Red, 64 GB)  (4 GB RAM)',
    price:'11,999',
    retailPrice:'15,999',
    discount: 25,
    dataNumber: 'data-id="4"'
  }, {
    indexImgUrl:'./images/mob- (5).jpeg',
    name:'Redmi Note 6 Pro (Blue, 64 GB)  (6 GB RAM)',
    price:'13999',
    retailPrice:'17999',
    discount: 22,
    dataNumber: 'data-id="5"'
  }, {
    indexImgUrl:'./images/mob- (6).jpeg',
    name:'Redmi Note 7S (Ruby Red, 64 GB)  (4 GB RAM)',
    price:'13999',
    retailPrice:'15999',
    discount: 12,
    dataNumber: 'data-id="6"'
  }, {
    indexImgUrl:'./images/mob- (7).jpeg',
    name:'Redmi Note 7 Pro (Nebula Red, 128 GB)  (6 GB RAM)',
    price:'16,999',
    retailPrice:'17,999',
    discount: 5,
    dataNumber: 'data-id="7"'
  }, {
    indexImgUrl:'./images/mob- (8).jpeg',
    name:'OPPO F11 Pro (Thunder Black, 64 GB)  (6 GB RAM)',
    price:'20,990',
    retailPrice:'28,990',
    discount: 27,
    dataNumber: 'data-id="8"'
  }, {
    indexImgUrl:'./images/mob- (9).jpeg',
    name:'OPPO K1 (Piano Black, 64 GB)  (4 GB RAM)',
    price:'12,990',
    retailPrice:'18,990',
    discount: 31,
    dataNumber: 'data-id="9"'
  }, {
    indexImgUrl:'./images/mob- (10).jpeg',
    name:'Redmi Note 7 Pro (Space Black, 128 GB)  (6 GB RAM)',
    price:'16,999',
    retailPrice:'17,999',
    discount: 5,
    dataNumber: 'data-id="10"'
  }, {
    indexImgUrl:'./images/umbrella-1.jpeg',
    name:'Dragon Kids Head Umbrella Umbrella  (Multicolor)',
    price:'139',
    retailPrice:'499',
    discount: 72,
    dataNumber: 'data-id="11"'
  }, {
    indexImgUrl:'./images/umbrella-2.jpeg',
    name:'eweft Rainbow Sun and Rain Protection And Windproof Umbrella  (Multicolor)',
    price:'440',
    retailPrice:'700',
    discount: 37,
    dataNumber: 'data-id="12"'
  }, {
    indexImgUrl:'./images/umbrella-3.jpeg',
    name:'FabSeasons Big Polka Dots all Seasons Umbrella  (Maroon)',
    price:'555',
    retailPrice:'999',
    discount: 44,
    dataNumber: 'data-id="13"'
  }, {
    indexImgUrl:'./images/chappal-1.jpeg',
    name:'SOLAY THONG Flip Flops',
    price:'638',
    retailPrice:'1595',
    discount: 60,
    dataNumber: 'data-id="14"'
  }, {
    indexImgUrl:'./images/shoes-1.jpeg',
    name:'Provogue Sneakers For Men  (Grey)',
    price:'799',
    retailPrice:'1999',
    discount: 60,
    dataNumber: 'data-id="15"'
  }, {
    indexImgUrl:'./images/shoes-2.jpeg',
    name:'Lee Cooper Slip On For Men  (Black)',
    price:'1,484',
    retailPrice:'2699',
    discount: 45,
    dataNumber: 'data-id="16"'
  }, {
    indexImgUrl:'./images/jeans-1.jpeg',
    name:'Jealous 21 Skinny Women Blue Jeans',
    price:'509',
    retailPrice:'1644',
    discount: 68,
    dataNumber: 'data-id="17"'
  }, {
    indexImgUrl:'./images/jeans-2.jpeg',
    name:'Jealous 21 Slim Women Light Blue Jeans',
    price:'509',
    retailPrice:'1699',
    discount: 70,
    dataNumber: 'data-id="18"'
  }, {
    indexImgUrl:'./images/chappal-2.jpeg',
    name:'CHROMA THONG 5 Slippers',
    price:'747',
    retailPrice:'1065',
    discount: 50,
    dataNumber: 'data-id="19"'
  }, {
    indexImgUrl:'./images/saree-1.jpeg',
    name:'HNC Retail Floral Print Fashion Pure Georgette, Chiffon Saree  (Green)',
    price:'499',
    retailPrice:'2498',
    discount: 80,
    dataNumber: 'data-id="20"'
  }
],
indexDetails =''

createIndexImg = () => {
 //indexData = parseJSON(window.localStorage.setItem('indexDetails'))
  indexData.forEach(item => {
    indexDetails += 
      
      `
        <li class='heartLiClass' onclick='openItemDetails();'>
          <section class='sortFilterSection m-0 p-0 cust-ouline-0 w-100 mw-100 backHtmlImgList'>
            <div class="container-fluid">
              <div class='row no-gutters' id='backHtmlOnOffer'>
                <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <div class='mainImgSectionP'>
                    <p class='px-1'>On offer</p>
                  </div>
                </div>
              </div>
              <div class='row no-gutters my-4 my-sm-4 my-md-4 my-lg-4 my-xl-4' id='backHtmlImg'>
                <div class='col-2 col-sm-2 col-md-3 col-lg-2 col-xl-2'>
                  <div class=''>
                    <div class='backHtmlImgClass'>
                      <img alt src='${item.indexImgUrl}' />
                    </div>
                  </div>
                </div>
                <div class='col-8 col-sm-8 col-md-8 col-lg-9 col-xl-9 px-1'>
                  <div class='d-flex flex-column' id='productDesc2'>
                    <div>
                      <h1 class>
                        ${item.name}
                        <span><a href='#'>#JustHere</a></span>
                      </h1>
                      <p class='text-black font-weight-bold mb-0'>
                        ₹${item.price}
                        <span class='mx-4 text-mute' style='text-decoration: line-through;'>₹${item.retailPrice}</span>
                        <del class='text-success'>${item.discount}% off</del>
                      </p>
                      <div class='d-inline-flex align-items-bottom'>
                        <p class='mt-2 pt-0 font-weight-bold'>
                          Exchange available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 px-1 heartClassSection bg-white'  type='button'>
                  <div class='row no-gutters justify-content-center align-items-center'>
                    <div class='mainImgSectionHeart w-50 text-center'>
                      <i data-id='0' class='heartClassFontSize heartClassGray heartClass fa fa-heart p-2 p-sm-2 p-md-2 py-lg-3 px-lg-2 py-xl-4 px-xl-1' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>

    `            
  });
  document.querySelector('#indexImgId').innerHTML = indexDetails;
  indexData = parseJSON(window.localStorage.setItem('indexDetails'));
}



//function openBackPageFunc() {
  //window.open('./back.html','_self','scrollbars=yes,menubar=yes');
  //return false;
//}
function openIndexPage() {
  window.open('./index.html','_self','scrollbars=yes,menubar=yes');
  return false;
}

function searchFunc() {
  document.querySelector('#searchId').classList.toggle('d-block');
}


function viewCart() {
  window.open('./cart.html','_self','scrollbars=yes,menubar=yes');
  window.focus();
}








