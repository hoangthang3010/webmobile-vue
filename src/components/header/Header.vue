<template>
  <nav className="navbar navbar-expand-lg navbar-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button><router-link to="/">
    <a className="navbar-brand" href="#">Điện máy đen</a></router-link>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <p className="nav-link">Home <span className="sr-only">(current)</span></p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Sản phẩm</p>
          </li>
      </ul>
      <!-- <SearchTextField className="form-control mr-sm-2" onValue={onValue} onClickProduct={onClickProduct} /> -->
    </div>
      <button className="navbar__card">
        <!-- <ShoppingCartOutlined style={{fontSize: '22px', marginRight: '10px'}}/> -->
        <!-- <span>Giỏ hàng ({amount})</span> -->
      </button>
  </nav>
</template>
<script>
import './Header.scss'
export default {
  setup() {
    
  },
}
</script>