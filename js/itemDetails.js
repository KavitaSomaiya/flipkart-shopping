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
  

  
