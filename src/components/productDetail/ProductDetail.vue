<template>
    hi
    <!-- {{product[0].name}} -->
    <div className="productD">
        <div className="productD__top">
            <div className="card-group"  v-if="product.length!==0">
                <div className="col-4 productD__top__left">
                    <img :src="product && 
                                product.items && 
                                product.items[idItems].version &&
                                product.items[idItems].version[idVersion].type[idType].image"/>
                                
                </div>
                
                <div className="col-4 productD__top__center">
                    <h3>{{product && product.items && product.items[idItems].title}}</h3>
                    <div className="productD__top__center__price">
                        Giá từ: 
                        <span>{{
                                product && 
                                product.items && 
                                product.items[idItems].version &&
                                ` ${product.items[idItems].version[idVersion].type[idType].price}`.slice(-9,-6) + '.' +
                                `${product.items[idItems].version[idVersion].type[idType].price}`.slice(-6,-3) + '.' + 
                                `${product.items[idItems].version[idVersion].type[idType].price}`.slice(-3)}} đ
                        </span>
                    </div>
                    <div className="productD__top__center__capacity">
                        <h1>Chọn dung lượng sản phẩm</h1>
                        <div className="productD__top__center__color__item card-group">
                            <div className="col-4" 
                                    v-for="(element, index) in product.items[idItems].version"
                                    :key="index"
                            >
                                <div 
                                    :style="{border: `1px solid ${idVersion == index ? 'red' : '#e1e4e9'}`, padding: '10px', margin: '5px -10px'}"
                                    v-on:click="handleVersion(index)"
                                >
                                <!-- {{console.log(idVersion)}} -->
                                    <h1>{{element.capacity}}</h1>
                                    <span>{{element.price}}đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productD__top__center__color">
                        <h1>Chọn màu sản phẩm</h1>
                        <div className="productD__top__center__color__item card-group" >
                            <div className="col-4"
                                    v-for="(element, index) in product.items[idItems].version[idVersion].type"
                                    :key="index"
                            >
                                <div
                                    :style="{border: `1px solid ${idType == index ? 'red' : '#e1e4e9'}`, padding: '10px', margin: '5px -10px'}" 
                                    v-on:click="handleType(index)"
                                >
                                    <h1>{{element.color}}</h1>
                                    <span>{{`${element.price}`.slice(-9,-6) + '.' + `${element.price}`.slice(-6,-3) + '.' + `${element.price}`.slice(-3)}}đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div className="col-4 productD__top__right">
                        <div className="productD__top__right__specifications">
                            <div className="productD__top__right__specifications__title">
                                <span>Thông số kĩ thuật</span>
                            </div>
                            <div  className="productD__top__right__specifications__body">
                                <div className='row' v-for="(item, index) in product.items[idItems].information" :key="index">
                                    <p className='col-3'>{{product.items[idItems].information[index].title}}:</p>
                                    <p className='col-9'>
                                        {{
                                            product.items[idItems].information[index].name ==='rom' ? 
                                            product.items[idItems].version[idVersion].capacity : 
                                            product.items[idItems].information[index].info
                                        }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="productD__top__right__top">

                        </div>
                        <h1>Tình trạng</h1>
                        <p>Máy mới 100% , chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam</p>
                        <h1>Hộp bao gồm</h1>
                        <p>Thân máy, cáp USB-C to Lightning, sách HDSD</p>
                        <h1>Bảo hành</h1>
                        <p>Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Việt Nam. 1 ĐỔI 1 trong 30 ngày nếu có lỗi nhà sản xuất.(Chi tiết)</p>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>

import { ref } from 'vue'
import { computed } from "vue";
import { useRoute } from 'vue-router'
import axios from 'axios'
import './ProductDetail.scss'
export default {
    name: "ProductDetail",
    setup() {
        const product = ref([])
        const route = useRoute();
        const name = computed(() => route.params.items);
        const idItems = computed(() => route.params.id);
        // const idVersion1 = computed(() => route.params.id1);
        let idVersion =  ref(route.params.id1)
        // const id
        // const idType1 = computed(() => route.params.id2);
        const idType =  ref(route.params.id2)
        console.log(idType.value);
        const handleVersion = (index) => {
            idVersion.value = index
            idType.value = 0
        }
        const handleType = (index) => {
            idType.value = index
        }
        // if (route.params.id1) return idVersion = route.params.id1
        const fetchProduct = async () => {
            try {
                const res = await axios.get(
                'http://localhost:3004/product/?name=' + name.value
                )
                // const res = await productApi.fetchProductApi('product/')
                // console.log("a: ", res.data[0])
                product.value = res.data[0]
                // console.log("aaaa: ", product.value);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
        return{
            name,
            product,
            idVersion,
            idType,
            idItems,
            handleVersion,
            // idVersion1,
            handleType,
            // idType1,
            // versionN
        }
    },
}
</script>