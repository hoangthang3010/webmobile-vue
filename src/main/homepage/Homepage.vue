<template>
    <div style="background-color: #F5F8FD">
            <div className='container'>
                <div className='card-group container__top'>
                    <div className='col-3  container__top__left'>
                        <div style="marginLeft: '-10px', height: '100%'">
                        <!-- <DropProduct/> -->
                        </div>
                    </div>
                    <div className='col-9 container__top__right'>
                        <div className="App"  style="marginRight: '-10px'">
                        </div>
                    </div>
                </div>
                <br/>
                <div className='container__product'>
                    <div className='container__product__seemore'>
                        <span>Sản phẩm</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className='container__product__filtersort'>
                        <select v-model="selected">
                            <option disabled value="">Tất cả sản phẩm</option>
                            <option value="?name=mobile">Điện thoại di động</option>
                            <option value="opel">Đồng hồ thông minh</option>
                            <option value="?name=tablet">Máy tính bảng</option>
                            <option value="audi">Laptop - PC</option>
                            <option value="?name=samsung">Phụ kiện</option>
                            <option value="?name=iphone">iphone</option>
                        </select>
                    </div>
                    <div className='container__product__item'>
                        <ItemProduct
                            v-for="(product, index) in products"
                            :key="index"
                            :product="product"
                            :index="index"
                        />
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

import { ref } from 'vue'
import './Homepage.scss';
import axios from 'axios'

// import productApi from '../../api/productApi'
import ItemProduct from '../../components/itemProduct/ItemProduct'
export default {
    name: 'Homepage',
    components: {ItemProduct},
    setup() {
        const products = ref([])
        const fetchProduct = async () => {
            try {
                const res = await axios.get(
                'http://localhost:3004/product'
                )
                // const res = await productApi.fetchProductApi('product/')
                console.log(res.data)
                products.value = res.data
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
        return{
            products,
        } 
    },
}
</script>
