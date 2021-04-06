<template>
    <p>{{product.name}}</p>
    <div className='card-group itemproduct'>
        <div className="col-3 itemproduct__box" v-for="item in product.items"  :key="item.id">
            <div className="card text-center">
                <img className="card-img-top" :src="item.image" alt="Card image cap"/>
                <div className="card-body">
                    <!-- to=`/purchase/${product.name}/${item.id}/0/0`}/> -->
                    <a className="card-title">
                        <router-link :to="'/purchase/'+ `${product.name}` + '/' + `${item.id-1}` +'/0/0'">
                        {{item.title}}
                        </router-link>
                    </a>
                    <span className="card-text">{{item.price}}</span>
                    <div style="margin: 10px 0px">
                        <!-- <Link to={`/purchase/${item.name}/${product.id}/0/0`}> -->
                            <p className="btn btn-primary col-6">Xem thêm</p>
                        <!-- </Link> -->
                        <!-- <Link to={`/compare/${key+1}/${product.id}/0/0`}> -->
                            <p className="btn btn-primary col-6">So sánh</p>
                        <!-- </Link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './ItemProduct.scss'
export default {
    name: "ItemProduct",
    props: ['product', 'index'],
    setup() {
    },
}
</script>